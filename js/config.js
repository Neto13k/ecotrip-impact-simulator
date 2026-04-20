// Arquivo de configuração da calculadora de emissão de CO₂
// Define um objeto global CONFIG com fatores de emissão, modos de transporte e configurações

const CONFIG = {
  // Fatores de emissão de CO₂ em kg por km para cada modo de transporte
  EMISSION_FACTORS: {
    bicycle: 0,
    car: 0.12,
    bus: 0.089,
    truck: 0.96
  },

  // Metadados para cada modo de transporte
  TRANSPORT_MODES: {
    bicycle: {
      label: "Bicicleta",
      icon: "🚲",
      color: "#10b981" // Verde
    },
    car: {
      label: "Carro",
      icon: "🚗",
      color: "#ef4444" // Vermelho
    },
    bus: {
      label: "Ônibus",
      icon: "🚌",
      color: "#3b82f6" // Azul
    },
    truck: {
      label: "Caminhão",
      icon: "🚚",
      color: "#f59e0b" // Laranja
    }
  },

  // Configurações para créditos de carbono
  CARBON_CREDIT: {
    KG_PER_CREDIT: 1000,
    PRICE_MIN_BRL: 50,
    PRICE_MAX_BRL: 150
  },

  // Método para popular o datalist de cidades
  populateDatalist: function() {
    const cities = RoutesDB.getAllCities();
    const datalist = document.getElementById('cities-list');

    if (datalist) {
      // Limpar opções existentes
      datalist.innerHTML = '';

      // Adicionar nova opção para cada cidade
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        datalist.appendChild(option);
      });
    }
  },

  // Método para configurar o preenchimento automático de distância
  setupDistanceAutofill: function() {
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    const distanceInput = document.getElementById('distance');
    const manualCheckbox = document.getElementById('manual-distance');
    const helpText = document.querySelector('.calculator__help-text');

    // Função para tentar preencher a distância
    const tryFillDistance = () => {
      const origin = originInput.value.trim();
      const destination = destinationInput.value.trim();

      if (origin && destination) {
        const distance = RoutesDB.findDistance(origin, destination);

        if (distance !== null) {
          distanceInput.value = distance;
          distanceInput.readOnly = true;
          if (helpText) {
            helpText.textContent = "Distância encontrada automaticamente";
            helpText.style.color = "#10b981"; // Verde para sucesso
          }
        } else {
          distanceInput.value = '';
          if (helpText) {
            helpText.textContent = "Rota não encontrada. Considere inserir a distância manualmente.";
            helpText.style.color = "#ef4444"; // Vermelho para erro
          }
        }
      }
    };

    // Adicionar listeners para mudança nos inputs de origem e destino
    originInput.addEventListener('change', tryFillDistance);
    destinationInput.addEventListener('change', tryFillDistance);

    // Listener para o checkbox manual
    manualCheckbox.addEventListener('change', () => {
      if (manualCheckbox.checked) {
        distanceInput.readOnly = false;
        distanceInput.value = '';
        if (helpText) {
          helpText.textContent = "Insira a distância manualmente";
          helpText.style.color = "#6b7280"; // Cinza
        }
      } else {
        distanceInput.readOnly = true;
        tryFillDistance(); // Tentar preencher novamente
      }
    });
  }
};

// O arquivo define apenas a variável global CONFIG