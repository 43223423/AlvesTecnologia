const datainventoryChart = {
  labels: ["Aço", "Alumínio", "Cobre", "Plástico"],
  datasets: [
    {
      label: "Em Estoque",
      data: [1500, 800, 200, 1200],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Necessário para Produção",
      data: [1000, 1000, 500, 800],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const dataEstoque = {
    labels: ["Aço", "Alumínio", "Cobre", "Plástico"],
    datasets: [
      {
        label: "Em Estoque",
        data: [1500, 800, 200, 1200],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Necessário para Produção",
        data: [1000, 1000, 500, 800],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

const configinventoryChart = {
  type: "bar",
  data: datainventoryChart,
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Materiais",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantidade (kg)",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Inventário de Matéria-Prima",
      },
    },
  },
};


document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll("#production-status tr");

  rows.forEach((row) => {
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
const configEstoque = {
  type: "bar",
  data: dataEstoque,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Materiais",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantidade (kg)",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Inventário de Matéria-Prima",
      },
    },
  },
};

const efficiencyFiveChart = new Chart(
  document.getElementById("FiveChart"),
  configEstoque
);

const inventoryChart = new Chart(
    document.getElementById("FourthChart"),
    configinventoryChart
  );