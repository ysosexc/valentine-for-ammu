function createConfetti() {
    const container = document.querySelector('.confetti-container');
    const numPixels = 500; 
  
    for (let i = 0; i < numPixels; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('confetti-pixel');
      pixel.style.top = `${Math.random() * window.innerHeight}px`;
      pixel.style.left = `${Math.random() * window.innerWidth}px`;
      pixel.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; 
      pixel.style.animationDelay = `${Math.random() * 0.5}s`; 
      container.appendChild(pixel);
  
      
      pixel.addEventListener('animationend', () => {
        pixel.remove();
      });
    }
  }
  

  document.addEventListener('DOMContentLoaded', createConfetti);