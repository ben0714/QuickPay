// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "src/interfaces/IERC7540.sol";

contract QuickPay is IERC7540Vault, ReentrancyGuard {
    uint256 private REQUEST_ID = 0;

    IERC20 public immutable usdcToken;
    address public admin;
    uint256 public usdcToMntRate;
    uint256 public mntBalance;

    event PaymentReceived(address indexed from, uint256 amount, uint256 mntAmount, string memo);
    event PriceUpdated(uint256 newRate);

    constructor(address _usdcTokenAddress, uint256 _initialRate) {
        usdcToken = IERC20(_usdcTokenAddress);
        admin = msg.sender;
        usdcToMntRate = _initialRate;
    }

    function receivePayment(uint256 amount, uint256 mntAmount, string memory memo) external nonReentrant {
        require(usdcToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        emit PaymentReceived(msg.sender, amount, mntAmount, memo);
    }

    // @inheritdoc IERC7540Vault
    function requestDeposit(uint256 assets, address controller, address owner) external returns (uint256 requestId) {
        require(assets > 0, "Assets must be greater than 0");
        require(controller != address(0), "Controller must be set");
        require(owner != address(0), "Owner must be set");
        REQUEST_ID += 1;

        emit DepositRequest(controller, owner, REQUEST_ID, msg.sender, assets);

        return REQUEST_ID;
    }

    function withdraw(uint256 assets, address receiver, address owner) external returns (uint256 shares) {
        require(assets > 0, "Assets must be greater than 0");
        require(receiver != address(0), "Receiver must be set");
        require(owner != address(0), "Owner must be set");

        shares = calculateUsdcAmount(assets);
    }

    function totalAssets() external view returns (uint256 totalManagedAssets) {
        return mntBalance;
    }

    function supportsInterface(bytes4 interfaceId) external view returns (bool) {
        return interfaceId == type(IERC7540Vault).interfaceId;
    }

    function share() external view returns (address shareTokenAddress) {
        return address(this);
    }

    function setOperator(address operator, bool approved) external returns (bool) {
        return true;
    }

    function setEndorsedOperator(address owner, bool approved) external {
        // noop
    }

    function requestRedeem(uint256 shares, address controller, address owner) external returns (uint256 requestId) {
        return 0;
    }

    function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets) {
        assets = calculateMntAmount(shares);
    }

    function recoverTokens(address token, address to, uint256 amount) external {
        // noop
    }

    function previewWithdraw(uint256 assets) external view returns (uint256 shares) {
        shares = calculateUsdcAmount(assets);
    }

    function previewRedeem(uint256 shares) external view returns (uint256 assets) {
        assets = calculateMntAmount(shares);
    }

    function previewMint(uint256 shares) external view returns (uint256 assets) {
        assets = calculateMntAmount(shares);
    }

    function previewDeposit(uint256 assets) external view returns (uint256 shares) {
        shares = calculateUsdcAmount(assets);
    }

    function pendingRedeemRequest(uint256 requestId, address controller) external view returns (uint256 assets) {
        return 0;
    }

    function pendingDepositRequest(uint256 requestId, address controller)
        external
        view
        returns (uint256 pendingAssets)
    {
        pendingAssets = mntBalance;
    }

    function pendingCancelRedeemRequest(uint256 requestId, address controller) external view returns (bool isPending) {
        return false;
    }

    function pendingCancelDepositRequest(uint256 requestId, address controller)
        external
        view
        returns (bool isPending)
    {
        isPending = false;
    }

    function onRedeemClaimable(address owner, uint256 assets, uint256 shares) external {
        // noop
    }

    function onDepositClaimable(address owner, uint256 assets, uint256 shares) external {
        // noop
    }

    function onCancelRedeemClaimable(address owner, uint256 shares) external {
        // noop
    }

    function onCancelDepositClaimable(address owner, uint256 assets) external {
        // noop
    }

    function mint(uint256 shares, address receiver, address controller) external returns (uint256 assets) {
        assets = calculateMntAmount(shares);
    }

    function mint(uint256 shares, address receiver) external returns (uint256 assets) {
        assets = calculateMntAmount(shares);
    }

    function maxWithdraw(address owner) external view returns (uint256 maxAssets) {
        maxAssets = mntBalance;
    }

    function maxRedeem(address owner) external view returns (uint256 maxShares) {
        maxShares = mntBalance;
    }

    function maxMint(address receiver) external view returns (uint256 maxShares) {
        maxShares = mntBalance;
    }

    function maxDeposit(address receiver) external view returns (uint256 maxAssets) {
        maxAssets = usdcToken.balanceOf(receiver);
    }

    function isPermissioned(address controller) external view returns (bool) {
        return true;
    }

    function isOperator(address controller, address operator) external view returns (bool status) {
        status = operator == controller;
    }

    function invalidateNonce(bytes32 nonce) external {
        // noop
    }

    function deposit(uint256 assets, address receiver, address controller) external returns (uint256 shares) {
        shares = calculateUsdcAmount(assets);
    }

    function deposit(uint256 assets, address receiver) external returns (uint256 shares) {
        shares = calculateUsdcAmount(assets);
    }

    function claimableRedeemRequest(uint256 requestId, address controller) external view returns (uint256 assets) {
        assets = mntBalance;
    }

    function claimableDepositRequest(uint256 requestId, address controller) external view returns (uint256 assets) {
        assets = mntBalance;
    }

    function claimableCancelRedeemRequest(uint256 requestId, address controller)
        external
        view
        returns (uint256 claimableShares)
    {
        claimableShares = mntBalance;
    }

    function cancelRedeemRequest(uint256 requestId, address controller) external {
        // noop
    }

    function cancelDepositRequest(uint256 requestId, address controller) external {
        // noop
    }

    function authorizeOperator(
        address controller,
        address operator,
        bool approved,
        uint256 deadline,
        bytes32 nonce,
        bytes memory signature
    ) external returns (bool) {
        return true;
    }

    function authorizations(address controller, bytes32 nonce) external view returns (bool used) {
        used = false;
    }

    function asset() external view returns (address assetTokenAddress) {
        assetTokenAddress = address(usdcToken);
    }

    function DOMAIN_SEPARATOR() external view returns (bytes32) {
        return bytes32(0);
    }

    function claimCancelDepositRequest(uint256 requestId, address receiver, address controller)
        external
        returns (uint256 assets)
    {
        assets = mntBalance;
    }

    function claimableCancelDepositRequest(uint256 requestId, address controller)
        external
        view
        returns (uint256 claimableAssets)
    {
        claimableAssets = mntBalance;
    }

    function claimCancelRedeemRequest(uint256 requestId, address receiver, address controller)
        external
        returns (uint256 shares)
    {
        shares = mntBalance;
    }

    /// @inheritdoc IERC7575
    function convertToShares(uint256 assets) public view returns (uint256 shares) {
        shares = calculateUsdcAmount(assets);
    }

    /// @inheritdoc IERC7575
    function convertToAssets(uint256 shares) public view returns (uint256 assets) {
        assets = calculateMntAmount(shares);
    }

    // Admin function to update the USDC to MNT rate
    function updatePrice(uint256 newRate) external {
        require(msg.sender == admin, "Only admin can update price");
        usdcToMntRate = newRate;
        emit PriceUpdated(newRate);
    }

    // Admin function to withdraw any stuck USDC
    function adminWithdraw(uint256 amount) external {
        require(msg.sender == admin, "Only admin can withdraw");
        require(usdcToken.transfer(admin, amount), "Transfer failed");
    }

    // Function to calculate MNT amount based on USDC amount
    function calculateMntAmount(uint256 usdcAmount) public view returns (uint256) {
        return (usdcAmount * usdcToMntRate) / 1e6; // Assuming 6 decimal places for USDC
    }

    // Function to calculate USDC amount based on MNT amount
    function calculateUsdcAmount(uint256 mntAmount) public view returns (uint256) {
        return (mntAmount * 1e6) / usdcToMntRate; // Assuming 6 decimal places for USDC
    }
}
