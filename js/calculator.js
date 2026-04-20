// Arquivo de cálculos da calculadora de emissão de CO₂
// Define um objeto global Calculator com métodos para cálculos de emissão e créditos

const Calculator = {
  // Calcula a emissão de CO₂ para uma distância e modo de transporte específico
  calculateEmission: function(distanceKm, transportMode) {
    // Obter o fator de emissão do modo de transporte
    const emissionFactor = CONFIG.EMISSION_FACTORS[transportMode];

    // Calcular emissão: distância em km * fator de emissão (kg CO₂/km)
    const emission = distanceKm * emissionFactor;

    // Retornar arredondado para 2 casas decimais
    return Math.round(emission * 100) / 100;
  },

  // Calcula emissões para todos os modos de transporte e compara com o carro
  calculateAllModes: function(distanceKm) {
    const results = [];
    const carEmission = this.calculateEmission(distanceKm, 'car'); // Emissão do carro como baseline

    // Para cada modo de transporte
    Object.keys(CONFIG.EMISSION_FACTORS).forEach(mode => {
      const emission = this.calculateEmission(distanceKm, mode);

      // Calcular porcentagem em relação ao carro
      const percentageVsCar = carEmission > 0 ? (emission / carEmission) * 100 : 0;

      // Adicionar ao array de resultados
      results.push({
        mode: mode,
        emission: emission,
        percentageVsCar: Math.round(percentageVsCar * 100) / 100 // Arredondar para 2 casas
      });
    });

    // Ordenar por emissão (menor para maior)
    results.sort((a, b) => a.emission - b.emission);

    return results;
  },

  // Calcula economia de emissão em relação a uma baseline
  calculateSavings: function(emission, baselineEmission) {
    // Calcular kg economizados
    const savedKg = baselineEmission - emission;

    // Calcular porcentagem economizada
    const percentage = baselineEmission > 0 ? (savedKg / baselineEmission) * 100 : 0;

    return {
      savedKg: Math.round(savedKg * 100) / 100, // Arredondar para 2 casas
      percentage: Math.round(percentage * 100) / 100 // Arredondar para 2 casas
    };
  },

  // Calcula quantos créditos de carbono são necessários para compensar a emissão
  calculateCarbonCredits: function(emissionKg) {
    // Dividir emissão pelo kg por crédito
    const credits = emissionKg / CONFIG.CARBON_CREDIT.KG_PER_CREDIT;

    // Retornar arredondado para 4 casas decimais
    return Math.round(credits * 10000) / 10000;
  },

  // Estima o preço dos créditos de carbono (mínimo, máximo e médio)
  estimateCreditPrice: function(credits) {
    const minPrice = credits * CONFIG.CARBON_CREDIT.PRICE_MIN_BRL;
    const maxPrice = credits * CONFIG.CARBON_CREDIT.PRICE_MAX_BRL;
    const averagePrice = (minPrice + maxPrice) / 2;

    return {
      min: Math.round(minPrice * 100) / 100, // Arredondar para 2 casas
      max: Math.round(maxPrice * 100) / 100, // Arredondar para 2 casas
      average: Math.round(averagePrice * 100) / 100 // Arredondar para 2 casas
    };
  }
};

// O arquivo define apenas a variável global Calculator