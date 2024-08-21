const ball = document.querySelector('.ball');

ball.addEventListener('click', () => {
    ball.style.animationPlayState = ball.style.animationPlayState === 'paused' ? 'running' : 'paused';
});