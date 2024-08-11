// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "src/interfaces/IERC7540.sol";

/**
 * @title QuickPay
 * @dev Implementation of a payment system using USDC and MNT tokens
 */
contract QuickPay is IERC7540Vault, ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    mapping(address => mapping(uint256 => uint256)) public pendingDepositRequests;
    mapping(address => mapping(uint256 => uint256)) public claimableDepositRequests;
    mapping(address => mapping(address => bool)) public override isOperator;
    mapping(address => uint256) public balanceOf;

    uint256 private constant RATE_DENOMINATOR = 1e6;
    uint256 private REQUEST_ID = 1;

    IERC20 public immutable usdcToken;
    uint256 public usdcToMntRate;
    uint256 public totalAssets;

    event PaymentReceived(address indexed from, uint256 amount, uint256 mntAmount, string memo);
    event PriceUpdated(uint256 newRate);
    event BankDeposit(uint256 assets, address controller, uint256 requestId);
    event BankWithdraw(uint256 assets, string memo);
    event DepositRequestCancelled(uint256 requestId, address controller, uint256 assets);

    constructor(address _usdcTokenAddress, uint256 _initialRate) Ownable(msg.sender) {
        require(_usdcTokenAddress != address(0), "Invalid USDC address");
        require(_initialRate > 0, "Invalid initial rate");
        usdcToken = IERC20(_usdcTokenAddress);
        usdcToMntRate = _initialRate;
    }

    /**
     * @dev Receive a payment in USDC and convert it to MNT
     * @param amount The amount of USDC to receive
     * @param assets The amount of MNT assets to credit
     * @param memo A memo for the payment
     */
    function receivePayment(uint256 amount, uint256 assets, string memory memo) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(assets > 0, "Assets must be greater than 0");
        usdcToken.safeTransferFrom(msg.sender, address(this), amount);
        emit PaymentReceived(msg.sender, amount, assets, memo);
    }

    /**
     * @dev Withdraw assets from the bank (only owner)
     * @param assets The amount of assets to withdraw
     * @param memo A memo for the withdrawal
     */
    function bankWithdraw(uint256 assets, string memory memo) external nonReentrant onlyOwner {
        require(assets > 0, "Assets must be greater than 0");
        require(assets <= totalAssets, "Insufficient assets");
        totalAssets -= assets;
        emit BankWithdraw(assets, memo);
    }

    /**
     * @dev Request a deposit of assets
     * @param assets The amount of assets to deposit
     * @param controller The controller address
     * @param owner The owner address
     * @return requestId The ID of the deposit request
     */
    function requestDeposit(uint256 assets, address controller, address owner)
        external
        nonReentrant
        returns (uint256 requestId)
    {
        require(assets != 0, "Assets must be non-zero");
        require(owner == msg.sender || isOperator[owner][msg.sender], "Not authorized");

        requestId = REQUEST_ID++;

        pendingDepositRequests[controller][requestId] = assets;

        emit DepositRequest(controller, owner, requestId, msg.sender, assets);
        return requestId;
    }

    /**
     * @dev Process a bank deposit (only owner)
     * @param assets The amount of assets to deposit
     * @param controller The controller address
     * @param requestId The ID of the deposit request
     * @return shares The number of shares minted
     */
    function bankDeposit(uint256 assets, address controller, uint256 requestId)
        external
        onlyOwner
        nonReentrant
        returns (uint256 shares)
    {
        require(assets != 0, "Assets must be non-zero");
        require(pendingDepositRequests[controller][requestId] >= assets, "Insufficient pending deposit");

        pendingDepositRequests[controller][requestId] -= assets;
        claimableDepositRequests[controller][requestId] += assets;

        shares = convertToShares(assets);

        emit BankDeposit(assets, controller, requestId);
        return shares;
    }

    /**
     * @dev Deposit assets and mint shares
     * @param assets The amount of assets to deposit
     * @param receiver The address to receive the shares
     * @param controller The controller address
     * @return shares The number of shares minted
     */
    function deposit(uint256 assets, address receiver, address controller)
        public
        nonReentrant
        returns (uint256 shares)
    {
        require(assets != 0, "Assets must be non-zero");
        require(receiver != address(0), "Invalid receiver");
        require(controller == msg.sender || isOperator[controller][msg.sender], "Not authorized");
        require(claimableDepositRequests[controller][REQUEST_ID - 1] >= assets, "Insufficient claimable deposit");

        claimableDepositRequests[controller][REQUEST_ID - 1] -= assets;

        shares = convertToShares(assets);
        balanceOf[receiver] += shares;
        totalAssets += assets;

        emit Deposit(controller, receiver, assets, shares);
        return shares;
    }

    /**
     * @dev Withdraw assets by burning shares
     * @param assets The amount of assets to withdraw
     * @param receiver The address to receive the assets
     * @param owner The owner of the shares
     * @return shares The number of shares burned
     */
    function withdraw(uint256 assets, address receiver, address owner) public nonReentrant returns (uint256 shares) {
        require(assets > 0, "Assets must be greater than 0");
        require(receiver != address(0), "Invalid receiver");
        require(owner == msg.sender || isOperator[owner][msg.sender], "Not authorized");

        shares = convertToShares(assets);
        require(balanceOf[owner] >= shares, "Insufficient balance");

        balanceOf[owner] -= shares;
        usdcToken.safeTransfer(receiver, shares);

        emit Withdraw(msg.sender, receiver, owner, assets, shares);
        return shares;
    }

    /**
     * @dev Cancel a pending deposit request
     * @param requestId The ID of the deposit request to cancel
     * @param controller The controller address
     */
    function cancelDepositRequest(uint256 requestId, address controller) external nonReentrant {
        require(controller == msg.sender || isOperator[controller][msg.sender], "Not authorized");
        uint256 assets = pendingDepositRequests[controller][requestId];
        require(assets > 0, "No pending deposit request");

        delete pendingDepositRequests[controller][requestId];

        emit DepositRequestCancelled(requestId, controller, assets);
    }

    /**
     * @dev Set or unset an operator for the caller
     * @param operator The operator address
     * @param approved True to approve, false to revoke
     * @return success Always returns true
     */
    function setOperator(address operator, bool approved) public override returns (bool) {
        isOperator[msg.sender][operator] = approved;
        emit OperatorSet(msg.sender, operator, approved);
        return true;
    }

    /**
     * @dev Redeem shares for assets
     * @param shares The number of shares to redeem
     * @param receiver The address to receive the assets
     * @param owner The owner of the shares
     * @return assets The amount of assets redeemed
     */
    function redeem(uint256 shares, address receiver, address owner) public nonReentrant returns (uint256 assets) {
        require(shares > 0, "Shares must be greater than 0");
        require(receiver != address(0), "Invalid receiver");
        require(owner == msg.sender || isOperator[owner][msg.sender], "Not authorized");
        require(balanceOf[owner] >= shares, "Insufficient balance");

        assets = convertToAssets(shares);
        require(assets <= totalAssets, "Insufficient total assets");

        balanceOf[owner] -= shares;
        usdcToken.safeTransfer(receiver, shares);

        emit Withdraw(msg.sender, receiver, owner, assets, shares);
        return assets;
    }

    /**
     * @dev Recover ERC20 tokens accidentally sent to the contract (only owner)
     * @param token The token address
     * @param to The address to send the tokens to
     * @param amount The amount of tokens to recover
     */
    function recoverTokens(address token, address to, uint256 amount) external onlyOwner {
        require(token != address(usdcToken), "Cannot recover USDC token");
        IERC20(token).safeTransfer(to, amount);
    }

    /**
     * @dev Mint new shares
     * @param shares The number of shares to mint
     * @param receiver The address to receive the shares
     * @param owner The owner of the new shares
     * @return assets The amount of assets deposited
     */
    function mint(uint256 shares, address receiver, address owner) public nonReentrant returns (uint256 assets) {
        require(shares > 0, "Shares must be greater than 0");
        require(receiver != address(0), "Invalid receiver");
        require(owner == msg.sender || isOperator[owner][msg.sender], "Not authorized");

        assets = convertToAssets(shares);
        totalAssets += assets;
        balanceOf[receiver] += shares;

        emit Deposit(owner, receiver, assets, shares);
        return assets;
    }

    /**
     * @dev Convert assets to shares
     * @param assets The amount of assets to convert
     * @return shares The resulting number of shares
     */
    function convertToShares(uint256 assets) public view returns (uint256 shares) {
        return (assets * RATE_DENOMINATOR) / usdcToMntRate;
    }

    /**
     * @dev Convert shares to assets
     * @param shares The number of shares to convert
     * @return assets The resulting amount of assets
     */
    function convertToAssets(uint256 shares) public view returns (uint256 assets) {
        return (shares * usdcToMntRate) / RATE_DENOMINATOR;
    }

    /**
     * @dev Update the USDC to MNT exchange rate (only owner)
     * @param newRate The new exchange rate
     */
    function updatePrice(uint256 newRate) external onlyOwner {
        require(newRate > 0, "Invalid rate");
        usdcToMntRate = newRate;
        emit PriceUpdated(newRate);
    }

    /**
     * @dev Withdraw USDC tokens from the contract (only owner)
     * @param amount The amount of USDC to withdraw
     */
    function adminWithdraw(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        require(amount <= usdcToken.balanceOf(address(this)), "Insufficient balance");
        usdcToken.safeTransfer(owner(), amount);
    }

    function asset() external view override returns (address) {
        return address(usdcToken);
    }

    function supportsInterface(bytes4 interfaceId) external pure override returns (bool) {
        return interfaceId == type(IERC7540Vault).interfaceId;
    }

    // Placeholder implementations for remaining IERC7540Vault functions
    // These should be properly implemented based on your specific requirements

    function share() external view returns (address) {
        return address(this);
    }

    function setEndorsedOperator(address, bool) external pure override {
        revert("Not implemented");
    }

    function requestRedeem(uint256, address, address) external pure returns (uint256) {
        revert("Not implemented");
    }

    function pendingRedeemRequest(uint256, address) external pure returns (uint256) {
        return 0;
    }

    function claimableRedeemRequest(uint256, address) external pure returns (uint256) {
        revert("Not implemented");
    }

    function pendingCancelRedeemRequest(uint256, address) external pure returns (bool) {
        return false;
    }

    function claimableCancelRedeemRequest(uint256, address) external pure returns (uint256) {
        revert("Not implemented");
    }

    function claimCancelRedeemRequest(uint256, address, address) external pure returns (uint256) {
        revert("Not implemented");
    }

    function pendingCancelDepositRequest(uint256, address) external pure returns (bool) {
        return false;
    }

    function claimableCancelDepositRequest(uint256, address) external pure returns (uint256) {
        revert("Not implemented");
    }

    function claimCancelDepositRequest(uint256, address, address) external pure returns (uint256) {
        revert("Not implemented");
    }

    function maxDeposit(address) external pure returns (uint256) {
        return type(uint256).max;
    }

    function maxMint(address) external view returns (uint256) {
        return usdcToken.balanceOf(msg.sender);
    }

    function maxWithdraw(address owner) external view returns (uint256) {
        return convertToAssets(balanceOf[owner]);
    }

    function maxRedeem(address owner) external view returns (uint256) {
        return balanceOf[owner];
    }

    function previewDeposit(uint256 assets) external view returns (uint256) {
        return convertToShares(assets);
    }

    function previewMint(uint256 shares) external view returns (uint256) {
        return convertToAssets(shares);
    }

    function previewWithdraw(uint256 assets) external view returns (uint256) {
        return convertToShares(assets);
    }

    function previewRedeem(uint256 shares) external view returns (uint256) {
        return convertToAssets(shares);
    }

    function deposit(uint256 assets, address receiver) external returns (uint256) {
        return deposit(assets, receiver, msg.sender);
    }

    function mint(uint256 shares, address receiver) external returns (uint256) {
        return mint(shares, receiver, msg.sender);
    }

    function withdraw(uint256 assets, address receiver) external returns (uint256) {
        return withdraw(assets, receiver, msg.sender);
    }

    function redeem(uint256 shares, address receiver) external returns (uint256) {
        return redeem(shares, receiver, msg.sender);
    }

    function totalSupply() public view returns (uint256) {
        return totalAssets;
    }

    function lastDepositBlock(address) external pure returns (uint256) {
        return 0; // Placeholder implementation
    }

    function lastRedeemBlock(address) external pure returns (uint256) {
        return 0; // Placeholder implementation
    }

    function convertToSharesAdjusted(uint256 assets) external view returns (uint256) {
        return convertToShares(assets);
    }

    function convertToAssetsAdjusted(uint256 shares) external view returns (uint256) {
        return convertToAssets(shares);
    }

    function isPermissioned(address) external pure returns (bool) {
        return true; // Placeholder implementation, adjust based on your requirements
    }

    function authorizeOperator(
        address controller,
        address operator,
        bool approved,
        uint256 deadline,
        bytes32 nonce,
        bytes memory signature
    ) external pure returns (bool) {
        revert("Not implemented");
    }

    function invalidateNonce(bytes32) external pure {
        revert("Not implemented");
    }

    function authorizations(address, bytes32) external pure returns (bool) {
        return false; // Placeholder implementation
    }

    function DOMAIN_SEPARATOR() external pure returns (bytes32) {
        revert("Not implemented");
    }

    // Additional helper functions

    /**
     * @dev Check if an account is an operator for a controller
     * @param controller The controller address
     * @param operator The operator address
     * @return status True if the account is an operator, false otherwise
     */
    function isOperatorFor(address controller, address operator) public view returns (bool status) {
        return isOperator[controller][operator];
    }

    /**
     * @dev Get the pending deposit request for a specific request ID and controller
     * @param requestId The request ID
     * @param controller The controller address
     * @return assets The amount of assets in the pending deposit request
     */
    function pendingDepositRequest(uint256 requestId, address controller) external view returns (uint256 assets) {
        return pendingDepositRequests[controller][requestId];
    }

    /**
     * @dev Get the claimable deposit request for a specific request ID and controller
     * @param requestId The request ID
     * @param controller The controller address
     * @return assets The amount of assets in the claimable deposit request
     */
    function claimableDepositRequest(uint256 requestId, address controller) external view returns (uint256 assets) {
        return claimableDepositRequests[controller][requestId];
    }

    /**
     * @dev Calculate the current exchange rate
     * @return rate The current USDC to MNT exchange rate
     */
    function getCurrentExchangeRate() external view returns (uint256 rate) {
        return usdcToMntRate;
    }

    /**
     * @dev Get the total USDC balance of the contract
     * @return balance The total USDC balance
     */
    function getTotalUSDCBalance() external view returns (uint256 balance) {
        return usdcToken.balanceOf(address(this));
    }

    /// @notice Callback when a deposit Request becomes claimable
    function onDepositClaimable(address owner, uint256 assets, uint256 shares) external {
        revert("Not implemented");
    }

    /// @notice Callback when a redeem Request becomes claimable
    function onRedeemClaimable(address owner, uint256 assets, uint256 shares) external pure {
        revert("Not implemented");
    }

    /// @notice Callback when a claim deposit Request becomes claimable
    function onCancelDepositClaimable(address owner, uint256 assets) external pure {
        revert("Not implemented");
    }

    /// @notice Callback when a claim redeem Request becomes claimable
    function onCancelRedeemClaimable(address owner, uint256 shares) external pure {
        revert("Not implemented");
    }

    function cancelRedeemRequest(uint256 requestId, address controller) external pure {
        revert("Not implemented");
    }

    // Events for additional functions
    event ExchangeRateUpdated(uint256 newRate);
    event OperatorAuthorized(address indexed controller, address indexed operator, bool approved);
    event NonceInvalidated(address indexed account, bytes32 nonce);
}
