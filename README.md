Este Backend esta hecho especificamente para consumir el api de CoinMarketCap ya que en su documentacion dice que hacer Requests http estan bloqueados por el CORS de su plataforma para evitar que el api key se publique sin querer a travez de nuestra aplicacion de front.

Es por eso que decidi realizar este backend con nodejs para poder consumir desde mi front lo que se necesita visualizar de CoinMarketCap.

Ademas, dado que uno de los requisitos para la presentacion era que la parte de front este publicada en github pages decidi implementar este servidor en un EC2 de AWS para poder asi tener la infromacion disponible siempre hasta cerrar el servidor de AWS

Se puede visitar la api para ver lo que esta consumiendo y mostrando de CoinMarketCap en: https://sidesoft-test.ddns.net