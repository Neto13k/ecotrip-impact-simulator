// Arquivo de interface do usuário para a calculadora de emissão de CO₂
const UI = {
  formatNumber: function(number, decimals) {
    const fixed = Number(number).toFixed(decimals);
    return Number(fixed).toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  },

  formatCurrency: function(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },

  showElement: function(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.classList.remove('hidden');
  },

  hideElement: function(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.classList.add('hidden');
  },

  scrollToElement: function(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  renderResults: function(data) {
    const modeMeta = CONFIG.TRANSPORT_MODES[data.mode] || { label: data.mode, icon: '🚗', color: '#00ff88' };

    const savingsHTML = data.mode !== 'car' && data.savings ? `
      <div class="results__card results__card--savings">
        <p class="results__title">Economia vs Carro</p>
        <p class="results__value">${this.formatNumber(data.savings.savedKg, 2)} kg CO₂</p>
        <p class="results__subtitle">${this.formatNumber(data.savings.percentage, 2)}% de redução</p>
      </div>
    ` : '';

    return `
      <div class="results__card results__card--route">
        <p class="results__title">Rota</p>
        <p class="results__text">${data.origin} → ${data.destination}</p>
      </div>
      <div class="results__card results__card--distance">
        <p class="results__title">Distância</p>
        <p class="results__value">${this.formatNumber(data.distance, 2)} km</p>
      </div>
      <div class="results__card results__card--emission">
        <p class="results__title">Emissão CO₂</p>
        <p class="results__value">🌿 ${this.formatNumber(data.emission, 2)} kg</p>
      </div>
      <div class="results__card results__card--transport" style="border-color: ${modeMeta.color}33;">
        <p class="results__title">Transporte</p>
        <p class="results__icon">${modeMeta.icon}</p>
        <p class="results__text">${modeMeta.label}</p>
      </div>
      ${savingsHTML}
    `;
  },

  renderComparison: function(modesArray, selectedMode) {
    const maxEmission = Math.max(...modesArray.map(item => item.emission), 1);

    const itemsHTML = modesArray.map(item => {
      const modeMeta = CONFIG.TRANSPORT_MODES[item.mode] || { label: item.mode, icon: '🚗' };
      const selectedClass = item.mode === selectedMode ? 'comparison__item--selected' : '';
      const badgeHTML = item.mode === selectedMode ? '<span class="comparison__badge">Selecionado</span>' : '';
      const percentOfMax = (item.emission / maxEmission) * 100;

      let barColor = '#00ff88';
      if (item.percentageVsCar > 100) barColor = '#ff4d6d';
      else if (item.percentageVsCar > 75) barColor = '#ffbe0b';
      else if (item.percentageVsCar > 25) barColor = '#facc15';

      return `
        <div class="comparison__item ${selectedClass}">
          <div class="comparison__header">
            <span class="comparison__icon">${modeMeta.icon}</span>
            <span class="comparison__mode">${modeMeta.label}</span>
            <span class="comparison__stats">${this.formatNumber(item.emission, 2)} kg</span>
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
      <div class="comparison__grid">${itemsHTML}</div>
      <div class="comparison__tip">
        <p>Escolha um modo de transporte para comparar emissões e entender o impacto ambiental da viagem.</p>
      </div>
    `;
  },

  renderCarbonCredits: function(creditsData) {
    return `
      <div class="carbon-credits__grid">
        <div class="carbon-credits__card carbon-credits__card--credits">
          <p class="carbon-credits__title">Créditos necessários</p>
          <p class="carbon-credits__value">${this.formatNumber(creditsData.credits, 4)}</p>
          <p class="carbon-credits__text">1 crédito = ${this.formatNumber(CONFIG.CARBON_CREDIT.KG_PER_CREDIT, 0)} kg CO₂</p>
        </div>
        <div class="carbon-credits__card carbon-credits__card--price">
          <p class="carbon-credits__title">Preço estimado</p>
          <p class="carbon-credits__value">${this.formatCurrency(creditsData.price.average)}</p>
          <p class="carbon-credits__text">Faixa: ${this.formatCurrency(creditsData.price.min)} – ${this.formatCurrency(creditsData.price.max)}</p>
        </div>
      </div>
      <div class="carbon-credits__info">
        <p>Créditos de carbono permitem compensar emissões investindo em projetos que reduzem ou capturam CO₂.</p>
      </div>
      <button class="carbon-credits__button" type="button">🛒 Compensar Emissões</button>
    `;
  },

  showLoading: function(btn) {
    if (!btn) return;
    if (!btn.dataset.originalText) btn.dataset.originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Calculando...';
  },

  hideLoading: function(btn) {
    if (!btn) return;
    btn.disabled = false;
    if (btn.dataset.originalText) btn.innerHTML = btn.dataset.originalText;
  }
};
