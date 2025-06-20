const helloKitty = document.getElementById('hello-kitty-animation');

let angle = 0; // Angle for sinusoidal movement

function animateHelloKitty() {
  angle += 0.05; // Speed of animation

  // Horizontal movement (larger range)
  const positionX = Math.sin(angle) * 100; // Moves between -100px and 100px

  // Vertical bounce (smaller range)
  const positionY = Math.abs(Math.sin(angle * 2)) * -20; // Bounces up by 20px. abs() makes it bounce up.

  // Subtle rotation
  const rotation = Math.sin(angle * 1.5) * 10; // Rotates between -10deg and 10deg

  helloKitty.style.transform = `translateX(${positionX}px) translateY(${positionY}px) rotate(${rotation}deg)`;

  requestAnimationFrame(animateHelloKitty);
}

animateHelloKitty();
