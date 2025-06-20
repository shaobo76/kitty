const helloKitty = document.getElementById('kitty-image');

let angle = 0; // Angle for sinusoidal movement

function animateHelloKitty() {
  angle += 0.05; // Speed of animation

  // Horizontal movement (larger range)
  const positionX = Math.sin(angle) * 100; // Moves between -100px and 100px

  // Vertical bounce (adjusted for taller figure)
  const positionY = Math.abs(Math.sin(angle * 2)) * -15; // Bounces up by 15px.

  // Subtle rotation (adjusted for taller figure)
  const rotation = Math.sin(angle * 1.5) * 7; // Rotates between -7deg and 7deg

  helloKitty.style.transform = `translateX(${positionX}px) translateY(${positionY}px) rotate(${rotation}deg)`;

  requestAnimationFrame(animateHelloKitty);
}

animateHelloKitty();
