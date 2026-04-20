// Arquivo principal de inicialização da aplicação
// Define a lógica de carregamento do DOM e manipulação do formulário

(function() {
  // Executa quando o DOM estiver totalmente carregado
  document.addEventListener('DOMContentLoaded', function() {
    CONFIG.populateDatalist();
    CONFIG.setupDistanceAutofill();

    const form = document.getElementById('calculator-form');
    console.log('✅ Calculadora inicializada!');

    if (!form) {
      console.error('Formulário da calculadora não encontrado.');
      return;
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const originInput = document.getElementById('origin');
      const destinationInput = document.getElementById('destination');
      const distanceInput = document.getElementById('distance');
      const transportModeInput = document.querySelector('input[name="transport"]:checked');
      const buttonSubmit = form.querySelector('button[type="submit"]');

      const origin = originInput ? originInput.value.trim() : '';
      const destination = destinationInput ? destinationInput.value.trim() : '';
      const distance = distanceInput ? parseFloat(distanceInput.value) : 0;
      const transportMode = transportModeInput ? transportModeInput.value : '';

      if (!origin || !destination || !distance || distance <= 0) {
        alert('Por favor, preencha origem, destino e distância válida antes de calcular.');
        return;
      }

      if (!buttonSubmit) {
        console.error('Botão de envio não encontrado.');
        return;
      }

      UI.showLoading(buttonSubmit);
      UI.hideElement('results');
      UI.hideElement('comparison');
      UI.hideElement('carbon-credits');

      setTimeout(function() {
        try {
          const emission = Calculator.calculateEmission(distance, transportMode);
          const carEmission = Calculator.calculateEmission(distance, 'car');
          const savings = Calculator.calculateSavings(emission, carEmission);
          const comparisonModes = Calculator.calculateAllModes(distance);
          const carbonCredits = Calculator.calculateCarbonCredits(emission);
          const creditPrice = Calculator.estimateCreditPrice(carbonCredits);

          const resultsData = {
            origin: origin,
            destination: destination,
            distance: distance,
            emission: emission,
            mode: transportMode,
            savings: savings
          };

          const comparisonHTML = UI.renderComparison(comparisonModes, transportMode);
          const resultsHTML = UI.renderResults(resultsData);
          const carbonCreditsHTML = UI.renderCarbonCredits({
            credits: carbonCredits,
            price: creditPrice
          });

          const resultsContainer = document.getElementById('results-content');
          const comparisonContainer = document.getElementById('comparison-content');
          const carbonCreditsContainer = document.getElementById('carbon-credits-content');

          if (resultsContainer) {
            resultsContainer.innerHTML = resultsHTML;
          }
          if (comparisonContainer) {
            comparisonContainer.innerHTML = comparisonHTML;
          }
          if (carbonCreditsContainer) {
            carbonCreditsContainer.innerHTML = carbonCreditsHTML;
          }

          UI.showElement('results');
          UI.showElement('comparison');
          UI.showElement('carbon-credits');
          UI.scrollToElement('results');
        } catch (error) {
          console.error('Erro ao calcular emissões:', error);
          alert('Ocorreu um erro ao calcular a emissão. Tente novamente.');
        } finally {
          UI.hideLoading(buttonSubmit);
        }
      }, 1500);
    });
  });
})();