// Fetch Ethereum gas price and display it in the gas-tracker section
async function fetchGasPrice() {
    const response = await fetch('https://api.etherscan.io/api?module=proxy&action=eth_gasPrice');
    const data = await response.json();
    const gasPrice = web3.utils.fromWei(data.result, 'gwei');

    const gasTracker = document.getElementById('gas-tracker');
    gasTracker.textContent = `Current Gas Price: ${gasPrice} Gwei`;
}

fetchGasPrice();