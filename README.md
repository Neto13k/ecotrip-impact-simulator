# 🌿 EcoTrip Impact Simulator

> Calcule, compare e compense a emissão de CO₂ das suas viagens — por modo de transporte, rota e distância.

![Badge](https://img.shields.io/badge/HTML%20%7C%20CSS%20%7C%20JS-Vanilla-orange?style=flat-square)
![Badge](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=flat-square)](https://neto13k.github.io/ecotrip-impact-simulator/)

---

## 📋 Sobre o Projeto

O **EcoTrip Impact Simulator** é uma calculadora web de emissão de carbono. A aplicação calcula o impacto ambiental de uma viagem, compara diferentes meios de transporte e mostra quantos créditos de carbono seriam necessários para compensar aquela emissão.

---

## 🌐 Demo

👉 **[https://neto13k.github.io/ecotrip-impact-simulator/](https://neto13k.github.io/ecotrip-impact-simulator/)**

---

## ✨ Funcionalidades

- 🗺️ Seleção de rota com autopreenchimento de cidades cadastradas
- 📏 Cálculo automático de distância entre origens e destinos conhecidos
- ✏️ Distância manual habilitada via checkbox para rotas não cadastradas
- 🚲🚗🚌🚚 4 modos de transporte: bicicleta, carro, ônibus e caminhão
- 📊 Comparativo visual entre todos os meios com barras de progresso
- 💚 Cálculo de créditos de carbono necessários para compensar a emissão
- 💰 Estimativa de preço dos créditos em BRL (mínimo, máximo e média)
- 📱 Layout responsivo para desktop e mobile

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica |
| CSS3 | Estilização e animações |
| JavaScript ES6+ | Lógica, DOM e renderização |
| Google Fonts | Tipografia (Lora + Nunito) |

---

## 📁 Estrutura

```
ecotrip-impact-simulator/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── calculator.js
│   ├── config.js
│   ├── routes-data.js
│   └── ui.js
└── README.md
```

---

## ⚙️ Fatores de Emissão

| Transporte | kg CO₂ / km |
|---|---|
| 🚲 Bicicleta | 0,000 |
| 🚌 Ônibus | 0,089 |
| 🚗 Carro | 0,120 |
| 🚚 Caminhão | 0,960 |

---

## 💳 Créditos de Carbono

| Parâmetro | Valor |
|---|---|
| Kg CO₂ por crédito | 1.000 kg |
| Preço mínimo | R$ 50,00 |
| Preço máximo | R$ 150,00 |

---

## 🚀 Como Executar Localmente

```bash
git clone https://github.com/seu-usuario/ecotrip-impact-simulator.git
cd ecotrip-impact-simulator
```

Abra o `index.html` diretamente no navegador ou use a extensão **Live Server** no VS Code.

> Nenhuma dependência ou instalação necessária — projeto 100% frontend estático.

---

## 👤 Autor

**José Hermes**

[![GitHub](https://img.shields.io/badge/GitHub-seu--usuario-181717?style=flat-square&logo=github)](https://github.com/seu-usuario)

---

## 📄 Licença

Este projeto está sob a licença **MIT**.