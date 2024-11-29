import axios from "axios";

export const getMarketInfo = (req, res) => {
    let response = null;
    new Promise(async (resolve, reject) => {
        try {
            response = await axios.get('http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': '1276dec7-5445-4bc4-9029-a052f3c160ee',
                },
            });
            const informacion = response.data.data.map((value) => ({
                Id: value.cmc_rank,
                Nombre: value.symbol + " " + value.name,
                Precio: value.quote.USD.price,
                Capitalizacion: value.quote.USD.market_cap,
                SumMaximo: value.max_supply,
                SumCirulante: value.circulating_supply,
                Por1D: value.quote.USD.percent_change_24h,
                Por30D: value.quote.USD.percent_change_30d

            }));
            res.json(informacion);
        } catch (ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
        }
        if (response) {
            // success
            const json = response.data;
            resolve(json);
        }
    });
}
    