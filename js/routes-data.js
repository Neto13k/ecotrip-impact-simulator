// Arquivo de dados de rotas brasileiras
// Define um objeto global RoutesDB contendo rotas e métodos para manipulação

const RoutesDB = {
  // Array de objetos de rota
  // Cada rota tem origin, destination e distanceKm
  routes: [
    { origin: "São Paulo, SP", destination: "Rio de Janeiro, RJ", distanceKm: 430 },
    { origin: "São Paulo, SP", destination: "Brasília, DF", distanceKm: 1015 },
    { origin: "Rio de Janeiro, RJ", destination: "Brasília, DF", distanceKm: 1148 },
    { origin: "São Paulo, SP", destination: "Belo Horizonte, MG", distanceKm: 586 },
    { origin: "Rio de Janeiro, RJ", destination: "Belo Horizonte, MG", distanceKm: 434 },
    { origin: "Brasília, DF", destination: "Belo Horizonte, MG", distanceKm: 716 },
    { origin: "São Paulo, SP", destination: "Curitiba, PR", distanceKm: 408 },
    { origin: "Rio de Janeiro, RJ", destination: "Curitiba, PR", distanceKm: 837 },
    { origin: "São Paulo, SP", destination: "Porto Alegre, RS", distanceKm: 1109 },
    { origin: "Rio de Janeiro, RJ", destination: "Porto Alegre, RS", distanceKm: 1554 },
    { origin: "São Paulo, SP", destination: "Salvador, BA", distanceKm: 1961 },
    { origin: "Rio de Janeiro, RJ", destination: "Salvador, BA", distanceKm: 1649 },
    { origin: "São Paulo, SP", destination: "Recife, PE", distanceKm: 2653 },
    { origin: "Rio de Janeiro, RJ", destination: "Recife, PE", distanceKm: 2341 },
    { origin: "São Paulo, SP", destination: "Fortaleza, CE", distanceKm: 3127 },
    { origin: "Rio de Janeiro, RJ", destination: "Fortaleza, CE", distanceKm: 2805 },
    { origin: "São Paulo, SP", destination: "Manaus, AM", distanceKm: 3953 },
    { origin: "Rio de Janeiro, RJ", destination: "Manaus, AM", distanceKm: 3631 },
    { origin: "São Paulo, SP", destination: "Belém, PA", distanceKm: 2939 },
    { origin: "Rio de Janeiro, RJ", destination: "Belém, PA", distanceKm: 2617 },
    { origin: "São Paulo, SP", destination: "Goiânia, GO", distanceKm: 926 },
    { origin: "Rio de Janeiro, RJ", destination: "Goiânia, GO", distanceKm: 1339 },
    { origin: "São Paulo, SP", destination: "Cuiabá, MT", distanceKm: 1604 },
    { origin: "Rio de Janeiro, RJ", destination: "Cuiabá, MT", distanceKm: 2017 },
    { origin: "São Paulo, SP", destination: "Campo Grande, MS", distanceKm: 1014 },
    { origin: "Rio de Janeiro, RJ", destination: "Campo Grande, MS", distanceKm: 1447 },
    { origin: "São Paulo, SP", destination: "Vitória, ES", distanceKm: 882 },
    { origin: "Rio de Janeiro, RJ", destination: "Vitória, ES", distanceKm: 524 },
    { origin: "São Paulo, SP", destination: "Florianópolis, SC", distanceKm: 704 },
    { origin: "Rio de Janeiro, RJ", destination: "Florianópolis, SC", distanceKm: 1131 },
    { origin: "São Paulo, SP", destination: "Campinas, SP", distanceKm: 95 },
    { origin: "Rio de Janeiro, RJ", destination: "Niterói, RJ", distanceKm: 13 },
    { origin: "Belo Horizonte, MG", destination: "Ouro Preto, MG", distanceKm: 100 },
    { origin: "São Paulo, SP", destination: "Santos, SP", distanceKm: 72 },
    { origin: "Rio de Janeiro, RJ", destination: "Petrópolis, RJ", distanceKm: 68 },
    { origin: "Curitiba, PR", destination: "Londrina, PR", distanceKm: 377 },
    { origin: "Porto Alegre, RS", destination: "Caxias do Sul, RS", distanceKm: 180 },
    { origin: "Salvador, BA", destination: "Feira de Santana, BA", distanceKm: 109 },
    { origin: "Recife, PE", destination: "Olinda, PE", distanceKm: 7 },
    { origin: "Fortaleza, CE", destination: "Caucaia, CE", distanceKm: 14 },
    { origin: "Manaus, AM", destination: "Itacoatiara, AM", distanceKm: 176 },
    { origin: "Belém, PA", destination: "Ananindeua, PA", distanceKm: 13 },
    { origin: "Brasília, DF", destination: "Taguatinga, DF", distanceKm: 20 },
    { origin: "Goiânia, GO", destination: "Aparecida de Goiânia, GO", distanceKm: 23 },
    { origin: "Cuiabá, MT", destination: "Várzea Grande, MT", distanceKm: 10 },
    { origin: "Campo Grande, MS", destination: "Dourados, MS", distanceKm: 225 },
    { origin: "Vitória, ES", destination: "Vila Velha, ES", distanceKm: 8 },
    { origin: "Florianópolis, SC", destination: "São José, SC", distanceKm: 18 },
    { origin: "São Paulo, SP", destination: "Ribeirão Preto, SP", distanceKm: 313 },
    { origin: "Rio de Janeiro, RJ", destination: "Campos dos Goytacazes, RJ", distanceKm: 278 },
    // Adicionando rotas entre capitais brasileiras para cobertura completa
    { origin: "Brasília, DF", destination: "Salvador, BA", distanceKm: 1448 },
    { origin: "Brasília, DF", destination: "Recife, PE", distanceKm: 2200 },
    { origin: "Salvador, BA", destination: "Recife, PE", distanceKm: 830 },
    { origin: "Fortaleza, CE", destination: "Recife, PE", distanceKm: 800 },
    { origin: "Natal, RN", destination: "Recife, PE", distanceKm: 280 },
    { origin: "João Pessoa, PB", destination: "Recife, PE", distanceKm: 120 },
    { origin: "Maceió, AL", destination: "Recife, PE", distanceKm: 395 },
    { origin: "Aracaju, SE", destination: "Salvador, BA", distanceKm: 356 },
    { origin: "Teresina, PI", destination: "Fortaleza, CE", distanceKm: 538 },
    { origin: "São Luís, MA", destination: "Belém, PA", distanceKm: 806 },
    { origin: "Belém, PA", destination: "Manaus, AM", distanceKm: 1293 },
    { origin: "Manaus, AM", destination: "Porto Velho, RO", distanceKm: 901 },
    { origin: "Porto Velho, RO", destination: "Rio Branco, AC", distanceKm: 340 },
    { origin: "Palmas, TO", destination: "Brasília, DF", distanceKm: 973 },
    { origin: "Curitiba, PR", destination: "Florianópolis, SC", distanceKm: 300 },
    { origin: "Porto Alegre, RS", destination: "Florianópolis, SC", distanceKm: 476 },
    { origin: "Vitória, ES", destination: "Belo Horizonte, MG", distanceKm: 524 },
    { origin: "Goiânia, GO", destination: "Brasília, DF", distanceKm: 209 },
    { origin: "Cuiabá, MT", destination: "Brasília, DF", distanceKm: 1133 },
    { origin: "Campo Grande, MS", destination: "Brasília, DF", distanceKm: 1137 },
    { origin: "Boa Vista, RR", destination: "Manaus, AM", distanceKm: 785 },
    { origin: "Natal, RN", destination: "Fortaleza, CE", distanceKm: 537 },
    { origin: "João Pessoa, PB", destination: "Natal, RN", distanceKm: 185 },
    { origin: "Maceió, AL", destination: "Aracaju, SE", distanceKm: 294 },
    { origin: "Teresina, PI", destination: "São Luís, MA", distanceKm: 397 },
    { origin: "Porto Alegre, RS", destination: "Curitiba, PR", distanceKm: 711 },
    { origin: "Florianópolis, SC", destination: "São Paulo, SP", distanceKm: 704 },
    { origin: "Vitória, ES", destination: "São Paulo, SP", distanceKm: 882 },
    { origin: "Belo Horizonte, MG", destination: "Vitória, ES", distanceKm: 524 },
    { origin: "Goiânia, GO", destination: "São Paulo, SP", distanceKm: 926 },
    { origin: "Cuiabá, MT", destination: "São Paulo, SP", distanceKm: 1604 },
    { origin: "Campo Grande, MS", destination: "São Paulo, SP", distanceKm: 1014 },
    { origin: "Manaus, AM", destination: "São Paulo, SP", distanceKm: 3953 },
    { origin: "Belém, PA", destination: "São Paulo, SP", distanceKm: 2939 },
    { origin: "Palmas, TO", destination: "São Paulo, SP", distanceKm: 1735 },
    { origin: "Rio Branco, AC", destination: "São Paulo, SP", distanceKm: 3420 },
    { origin: "Porto Velho, RO", destination: "São Paulo, SP", distanceKm: 3040 },
    { origin: "Boa Vista, RR", destination: "São Paulo, SP", distanceKm: 4670 },
    { origin: "São Luís, MA", destination: "São Paulo, SP", distanceKm: 3210 },
    { origin: "Teresina, PI", destination: "São Paulo, SP", distanceKm: 2640 },
    { origin: "Natal, RN", destination: "São Paulo, SP", distanceKm: 3180 },
    { origin: "João Pessoa, PB", destination: "São Paulo, SP", distanceKm: 2920 },
    { origin: "Maceió, AL", destination: "São Paulo, SP", distanceKm: 2450 },
    { origin: "Aracaju, SE", destination: "São Paulo, SP", distanceKm: 2120 },
    { origin: "Salvador, BA", destination: "São Paulo, SP", distanceKm: 1961 },
    { origin: "Recife, PE", destination: "São Paulo, SP", distanceKm: 2653 },
    { origin: "Fortaleza, CE", destination: "São Paulo, SP", distanceKm: 3127 }
  ],

  // Método para obter todas as cidades únicas e ordenadas
  getAllCities: function() {
    const cities = new Set();
    this.routes.forEach(route => {
      cities.add(route.origin);
      cities.add(route.destination);
    });
    return Array.from(cities).sort();
  },

  // Método para encontrar a distância entre duas cidades
  findDistance: function(origin, destination) {
    // Normalizar entrada: remover espaços extras e converter para minúsculas
    const normalize = str => str.trim().toLowerCase();
    const normOrigin = normalize(origin);
    const normDestination = normalize(destination);

    // Buscar em ambas as direções
    const route = this.routes.find(r =>
      (normalize(r.origin) === normOrigin && normalize(r.destination) === normDestination) ||
      (normalize(r.origin) === normDestination && normalize(r.destination) === normOrigin)
    );

    return route ? route.distanceKm : null;
  }
};

// O arquivo define apenas a variável global RoutesDB