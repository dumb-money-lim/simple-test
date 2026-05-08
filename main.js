document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const numbersContainer = document.getElementById('lotto-numbers');
    const body = document.body;

    // Generate Lotto Numbers
    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const r = Math.floor(Math.random() * 45) + 1;
            if (numbers.indexOf(r) === -1) numbers.push(r);
        }
        return numbers.sort((a, b) => a - b);
    }

    // Get Ball Color Class
    function getBallClass(num) {
        if (num <= 10) return 'ball-1';
        if (num <= 20) return 'ball-2';
        if (num <= 30) return 'ball-3';
        if (num <= 40) return 'ball-4';
        return 'ball-5';
    }

    // Display Numbers
    function displayNumbers() {
        const numbers = generateLottoNumbers();
        numbersContainer.innerHTML = '';
        
        numbers.forEach((num, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.className = `ball ${getBallClass(num)}`;
                ball.textContent = num;
                numbersContainer.appendChild(ball);
            }, index * 100);
        });
    }

    // Toggle Theme
    function toggleTheme() {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            themeToggle.textContent = '라이트 모드';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            themeToggle.textContent = '다크 모드';
        }
    }

    generateBtn.addEventListener('click', displayNumbers);
    themeToggle.addEventListener('click', toggleTheme);
});
