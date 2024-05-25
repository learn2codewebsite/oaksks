function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.width = Math.random() * 20 + 10 + 'px';
  bubble.style.height = bubble.style.width;
  document.body.appendChild(bubble);

  const popTime = Math.random() * 5000; 

  bubble.addEventListener('click', () => {
    popBubble(bubble);
  });

  setTimeout(() => {
    popBubble(bubble);
  }, popTime); 
}

function popBubble(bubble) {
  const bubbleRect = bubble.getBoundingClientRect();
  explodeBubble(bubbleRect.left + window.scrollX, bubbleRect.top + window.scrollY, bubble.style.width);
  bubble.remove();
}

function explodeBubble(left, top, size) {
  const numParticles = 10;
  const particleSize = parseFloat(size) / 4;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = left + 'px';
    particle.style.top = top + 'px';
    particle.style.width = particleSize + 'px';
    particle.style.height = particleSize + 'px';

    const angle = Math.random() * 2 * Math.PI; 
    const distance = Math.random() * 100; 
    const endX = Math.cos(angle) * distance;
    const endY = Math.sin(angle) * distance;

    particle.style.setProperty('--particle-end-x', `${endX}px`);
    particle.style.setProperty('--particle-end-y', `${endY}px`);

    particle.style.animation = 'explodeParticle 1s forwards';
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000); 
  }
}

setInterval(createBubble, 500); 
