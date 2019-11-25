class MoneyExchange {
    public API_URL: string = 'https://api.exchangeratesapi.io/latest?base=';
    async getRates(baseUrl: string) {
        const result = await fetch(`${this.API_URL}${baseUrl}`);
        return await result.json();
    }
}

export default MoneyExchange;
