function generateRandomData(days, min, max) {
  let data = [];
  for (let i = 0; i < days; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}

// Dados de exemplo
const labels = Array.from({ length: 30 }, (_, i) => `Dia ${i + 1}`);
const dataA = generateRandomData(30, 50, 100); // Produção diária da Peça A
const dataB = generateRandomData(30, 30, 80); // Produção diária da Peça B
const dataC = generateRandomData(30, 20, 70); // Produção diária da Peça C

const data = {
  labels: labels,
  datasets: [
    {
      label: "Peça A",
      data: dataA,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 1,
      fill: false,
    },
    {
      label: "Peça B",
      data: dataB,
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderWidth: 1,
      fill: false,
    },
    {
      label: "Peça C",
      data: dataC,
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderWidth: 1,
      fill: false,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Produção Diária de Peças Automotivas",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dias",
        },
      },
      y: {
        title: {
          display: true,
          text: "Quantidade Produzida",
        },
      },
    },
  },
};

const productionChart = new Chart(
  document.getElementById("SecondChart"),
  config
);

// Dados de exemplo
const labelsThirdChart = ["Linha 1", "Linha 2", "Linha 3", "Linha 4", "Linha 5"];
const dataThirdChart = {
  labels: labelsThirdChart,
  datasets: [
    {
      label: "Eficiência (%)",
      data: [85, 70, 90, 75, 95], // Eficiência de cada linha de produção
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const configThirdChart = {
  type: "bar",
  data: dataThirdChart,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Comparação de Eficiência das Linhas de Produção",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Linhas de Produção",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Eficiência (%)",
        },
      },
    },
  },
};

const efficiencyChart = new Chart(
  document.getElementById("ThirdChart"),
  configThirdChart
);
document.addEventListener("DOMContentLoaded", function() {
  const rows = document.querySelectorAll("#production-status tr");

  rows.forEach(row => {
      const produced = parseInt(row.cells[1].innerText);
      const target = parseInt(row.cells[2].innerText);
      const percentage = ((produced / target) * 100).toFixed(2);
      
      let statusClass = "";
      if (percentage >= 80) {
          statusClass = "status-good";
      } else if (percentage >= 50) {
          statusClass = "status-warning";
      } else {
          statusClass = "status-bad";
      }

      row.cells[3].innerText = percentage + "%";
      row.cells[3].classList.add(statusClass);
  });
});