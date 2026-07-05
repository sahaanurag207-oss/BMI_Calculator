const ctx = document.getElementById('bmiChart').getContext('2d');
let bmiChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Your BMI'],
        datasets: [{ label: 'BMI Score', data: [0], backgroundColor: ['#8b148b'] }]
    },
    options: { scales: { y: { beginAtZero: true, max: 45 } } }
});

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please enter valid values.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
        let color = bmi < 18.5 ? '#3498db' : bmi < 25 ? '#27ae60' : bmi < 30 ? '#f1c40f' : '#e74c3c';
        
        bmiChart.data.datasets[0].data = [bmi];
        bmiChart.data.datasets[0].backgroundColor = [color];
        bmiChart.update();
    }
});