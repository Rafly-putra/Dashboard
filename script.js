// Data penjualan bulanan dalam jutaan rupiah
const salesData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [{
      label: 'Pendapatan (Juta Rp)',
      data: [12, 18, 25, 30, 22, 28, 35, 40, 38, 42, 50, 60], 
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  
  const barConfig = {
    type: 'bar',
    data: salesData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: 10 },
      plugins: {
        legend: { display: true, position: 'top' }
      },
      scales: {
        y: {
            beginAtZero: true,
            ticks : { font: { size: 12} }
      },
      x: { 
        ticks: { font: { size: 12 } }
    }
}
    }
  };
  
  const pieData = {
    labels: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Okt-Des"],
    datasets: [{
      data: [55, 80, 113, 152], 
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(139, 195, 74, 0.7)'
      ]
    }]
  };
  
  const pieConfig = {
    type: 'pie',
    data: pieData,
    options: {
      responsive: true,
      maintainAspectRatio: false, // Agar grafik pie lebih kecil
      layout: { padding: 10 }, // Kurangi padding di dalam grafik
      plugins: { legend: { display: true, position: 'top' } }
    }
  };
  
  // Render Grafik
  new Chart(document.getElementById('salesChart').getContext('2d'), barConfig);
  new Chart(document.getElementById('salesPieChart').getContext('2d'), pieConfig);
  