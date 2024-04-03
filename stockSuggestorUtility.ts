export interface Stock {
  symbol: string;
  price: number;
  PE_ratio: number;
  dividend_yield: number;
  market_cap: number;
  volume: number;
  evaluatedAt: Date;
}

export class StockSuggestor {
  static suggestBestStock(stocks: Stock[]): { bestStock: Stock, timespan: number } {
    let bestStock: Stock | undefined;
    let bestScore = -Infinity;
    let bestTimestamp: Date | undefined;

    for (const stock of stocks) {
      const score = stock.market_cap * Math.log(stock.volume);

      if (score > bestScore) {
        bestStock = stock;
        bestScore = score;
        bestTimestamp = stock.evaluatedAt;
      }
    }

    if (!bestStock) {
      throw new Error('No stocks available');
    }

    const currentTime = new Date();
    const timespan = currentTime.getTime() - bestTimestamp!.getTime();

    return { bestStock, timespan };
  }
}


