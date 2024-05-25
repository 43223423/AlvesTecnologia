new Chart(document.getElementById("FirstChart"), {
  type: "line",
  data: {
    labels: "       ",
    datasets: [
      {
        label: "D0",
        data: [100, 12, 200, 20, 40, 30, 100, 20],
        borderColor: "orange",
        backgroundColor: "red",
        // hidden: true,
      },
      {
        label: "D1",
        data: [100, 12, 200, 20, 40, 30, 100, 20],
        borderColor: "orange",
        backgroundColor: "orange",
        // fill: "-1",
      },
      {
        label: "D2",
        data: [100, 12, 200, 20, 40, 30, 100, 20],
        borderColor: "blue",
        backgroundColor: "blue",
        hidden: true,
        fill: 1,
      },
      {
        label: "D3",
        data: [100, 12, 200, 20, 40, 30, 100, 20],
        borderColor: "black",
        backgroundColor: "black",
        // fill: "-1",
      },
      {
        label: "D4",
        data: [100, 12, 200, 20, 40, 30, 100, 20],
        borderColor: "pink",
        backgroundColor: "pink",
        // fill: "-1",
      },
      {
        label: "D5",
        data: [100, 12, 200, 20, 40, 30, 100, 20],
        borderColor: "green",
        backgroundColor: "green",
        fill: "+2",
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
    scales: {
      y: {
        stacked: true,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      "samples-filler-analyser": {
        target: "chart-analyser",
      },
    },
    interaction: {
      intersect: false,
    },
  },
});


new Chart(document.getElementById("SecondChart"), {
  type: "bar",
  data: {
    labels: "labels",
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(document.getElementById("ThirdChart"), {
  type: "line",
  data: {
    labels: "       ",
    datasets: [
      {
        label: "D0",
        data: [10, 122, 300, 20, 210, 130, 30, 30],
        borderColor: "orange",
        backgroundColor: "red",
        // hidden: true,
      },
      {
        label: "D1",
        data: [10, 122, 300, 20, 210, 130, 30, 30],
        borderColor: "orange",
        backgroundColor: "orange",
        // fill: "-1",
      },
      {
        label: "D2",
        data: [10, 122, 300, 20, 210, 130, 30, 30],
        borderColor: "blue",
        backgroundColor: "blue",
        hidden: true,
        fill: 1,
      },
      {
        label: "D3",
        data: [10, 122, 300, 20, 210, 130, 30, 30],
        borderColor: "black",
        backgroundColor: "black",
        // fill: "-1",
      },
      {
        label: "D4",
        data: [10, 122, 300, 20, 210, 130, 30, 30],
        borderColor: "pink",
        backgroundColor: "pink",
        // fill: "-1",
      },
      {
        label: "D5",
        data: [10, 122, 300, 20, 210, 130, 30, 30],
        borderColor: "green",
        backgroundColor: "green",
        fill: "+2",
      },
    ],
  },
  options: {
    scales: {
      y: {
        stacked: true,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      "samples-filler-analyser": {
        target: "chart-analyser",
      },
    },
    interaction: {
      intersect: false,
    },
  },
});

new Chart(document.getElementById("FourthChart"), {
  type: "bar",
  data: {
    labels: "labels",
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(document.getElementById("FiveChart"), {
  type: "pie",
  data: {
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 20, 40, 10, 10],
        backgroundColor: [
          "red",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "pink",
        ],
        fill: "+4",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  },
});

new Chart(document.getElementById("SixChart"), {
  type: "line",
  data: {
    labels: "laels",
    datasets: [
      {
        label: "My First dataset",
        data: [100, 20, 40, 10],
        borderColor: "red",
        backgroundColor: "red",
        fill: true,
      },
      {
        label: "My Second dataset",
        data: [100, 20, 40, 10],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: true,
      },
      {
        label: "My Third dataset",
        data: [100, 20, 40, 10],
        borderColor: "green",
        backgroundColor: "green",
        fill: true,
      },
      {
        label: "My Fourth dataset",
        data: [100, 20, 40, 10],
        borderColor: "yellow",
        backgroundColor: "yellow",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
      tooltip: {
        mode: "index",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  },
});

new Chart(document.getElementById("SevenChart"), {
  type: "pie",
  data: {
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 20, 40, 10, 10],
        backgroundColor: [
          "red",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "pink",
        ],
        fill: "+4",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  },
});


