// Arquivo de interface do usuário para a calculadora de emissão de CO₂
// Define um objeto global UI com métodos de formatação, exibição e renderização

const UI = {
  // Formata um número com casas decimais e separadores de milhar em pt-BR
  formatNumber: function(number, decimals) {
    const fixed = Number(number).toFixed(decimals);
    return Number(fixed).toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  },

  // Formata um valor como moeda brasileira
  formatCurrency: function(value) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  },

  // Mostra um elemento removendo a classe hidden
  showElement: function(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.remove('hidden');
    }
  },

  // Esconde um elemento adicionando a classe hidden
  hideElement: function(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.add('hidden');
    }
  },

  // Scroll suave até um elemento pelo ID
  scrollToElement: function(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  // Renderiza os resultados principais da viagem
  renderResults: function(data) {
    const modeMeta = CONFIG.TRANSPORT_MODES[data.mode] || {
      label: data.mode,
      icon: '🚗',
      color: '#10b981'
    };

    const savingsHTML = data.mode !== 'car' && data.savings ? `
      <div class="results__card results__card--savings">
        <h3 class="results__title">Economia</h3>
        <p class="results__value">${this.formatNumber(data.savings.savedKg, 2)} kg CO₂</p>
        <p class="results__subtitle">${this.formatNumber(data.savings.percentage, 2)}% em relação ao carro</p>
      </div>
    ` : '';

    return `
      <div class="results__card results__card--route">
        <h3 class="results__title">Rota</h3>
        <p class="results__text">${data.origin} → ${data.destination}</p>
      </div>
      <div class="results__card results__card--distance">
        <h3 class="results__title">Distância</h3>
        <p class="results__value">${this.formatNumber(data.distance, 2)} km</p>
      </div>
      <div class="results__card results__card--emission">
        <h3 class="results__title">Emissão de CO₂</h3>
        <p class="results__value">🌿 ${this.formatNumber(data.emission, 2)} kg</p>
      </div>
      <div class="results__card results__card--transport" style="border-color: ${modeMeta.color};">
        <h3 class="results__title">Transporte</h3>
        <p class="results__icon">${modeMeta.icon}</p>
        <p class="results__text">${modeMeta.label}</p>
      </div>
      ${savingsHTML}
    `;
  },

  // Renderiza a comparação entre modos de transporte
  renderComparison: function(modesArray, selectedMode) {
    const maxEmission = Math.max(...modesArray.map(item => item.emission), 1);

    const itemsHTML = modesArray.map(item => {
      const modeMeta = CONFIG.TRANSPORT_MODES[item.mode] || { label: item.mode, icon: '🚗' };
      const selectedClass = item.mode === selectedMode ? 'comparison__item--selected' : '';
      const badgeHTML = item.mode === selectedMode ? '<span class="comparison__badge">Selecionado</span>' : '';
      const percentOfMax = (item.emission / maxEmission) * 100;

      let barColor = '#10b981';
      if (item.percentageVsCar > 100) {
        barColor = '#ef4444';
      } else if (item.percentageVsCar > 75) {
        barColor = '#f59e0b';
      } else if (item.percentageVsCar > 25) {
        barColor = '#facc15';
      }

      return `
        <div class="comparison__item ${selectedClass}">
          <div class="comparison__header">
            <span class="comparison__icon">${modeMeta.icon}</span>
            <div>
              <p class="comparison__mode">${modeMeta.label}</p>
              <p class="comparison__stats">${this.formatNumber(item.emission, 2)} kg CO₂</p>
            </div>
            ${badgeHTML}
          </div>

          <div class="comparison__body">
            <p class="comparison__percentage">${this.formatNumber(item.percentageVsCar, 2)}% vs carro</p>
            <div class="comparison__bar-background">
              <div class="comparison__bar" style="width: ${percentOfMax}%; background: ${barColor};"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="comparison__grid">
        ${itemsHTML}
      </div>
      <div class="comparison__tip">
        <p>Escolha um modo de transporte para comparar emissões e entender melhor o impacto ambiental da viagem.</p>
      </div>
    `;
  },

  // Renderiza informações de créditos de carbono
  renderCarbonCredits: function(creditsData) {
    return `
      <div class="carbon-credits__grid">
        <div class="carbon-credits__card carbon-credits__card--credits">
          <h3 class="carbon-credits__title">Créditos necessários</h3>
          <p class="carbon-credits__value">${this.formatNumber(creditsData.credits, 4)}</p>
          <p class="carbon-credits__text">1 crédito = ${this.formatNumber(CONFIG.CARBON_CREDIT.KG_PER_CREDIT, 0)} kg CO₂</p>
        </div>

        <div class="carbon-credits__card carbon-credits__card--price">
          <h3 class="carbon-credits__title">Preço estimado</h3>
          <p class="carbon-credits__value">${this.formatCurrency(creditsData.price.average)}</p>
          <p class="carbon-credits__text">Faixa: ${this.formatCurrency(creditsData.price.min)} - ${this.formatCurrency(creditsData.price.max)}</p>
        </div>
      </div>
      <div class="carbon-credits__info">
        <p>Créditos de carbono permitem compensar emissões investindo em projetos que reduzem ou capturam CO₂.</p>
      </div>
      <button class="button carbon-credits__button" type="button">🛒 Compensar Emissões</button>
    `;
  },

  // Exibe estado de loading no botão
  showLoading: function(buttonElement) {
    if (!buttonElement) return;
    if (!buttonElement.dataset.originalText) {
      buttonElement.dataset.originalText = buttonElement.innerHTML;
    }
    buttonElement.disabled = true;
    buttonElement.innerHTML = '<span class="spinner"></span> Calculando...';
  },

  // Restaura o estado original do botão
  hideLoading: function(buttonElement) {
    if (!buttonElement) return;
    buttonElement.disabled = false;
    if (buttonElement.dataset.originalText) {
      buttonElement.innerHTML = buttonElement.dataset.originalText;
    }
  }
};

// O arquivo define apenas a variável global UI