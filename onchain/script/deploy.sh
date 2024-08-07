forge create --rpc-url $RPC_URL \
    --constructor-args $USDC_ADDRESS $RATE \
    --private-key $PRIVATE_KEY \
    --etherscan-api-key $ETHERSCAN_API_KEY \
    --verify \
    src/QuickPay.sol:QuickPay
