const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =

<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none"
    }
});

const dailyCanvas = document.getElementById("daily-chart");
// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }
    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });
        
    