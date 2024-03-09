class Crypto {
    constructor(name, symbol, marketCap, price) {
      this.name = name;
      this.symbol = symbol;
      this.marketCap = marketCap;
      this.price = price;
      this.holders = [];
    }
  
    addHolder(holderName) {
      this.holders.push(holderName);
      console.log(`${holderName} is now holding ${this.name} (${this.symbol}) tokens.`);
    }
  
    updatePrice(newPrice) {
      this.price = newPrice;
      console.log(`${this.name} price updated to $${newPrice}.`);
    }
  
    displayCryptoInfo() {
      console.log(`
        Crypto Information:
        Name: ${this.name}
        Symbol: ${this.symbol}
        Market Cap: $${this.marketCap}
        Price: $${this.price}
        Holders: ${this.holders.join(', ')}
      `);
    }
  }
  
  // Example usage
  const bitcoin = new Crypto('Bitcoin', 'BTC', 800000000000, 45000);
  
  bitcoin.addHolder('Alice');
  bitcoin.addHolder('Bob');
  bitcoin.updatePrice(46000);
  bitcoin.displayCryptoInfo();
  