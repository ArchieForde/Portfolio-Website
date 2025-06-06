const target = document.getElementById('typewriter');

const typewriter = new Typewriter(target, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString("Hey, I'm <span class='text-neon-cyan'>Archie</span><br>")
  .pauseFor(400)
  .typeString("Software Engineer and <span class='text-neon-cyan'>AI Enthusiast.</span>")
  .pauseFor(200)
  .pauseFor(1000)
  .deleteAll()
  .start();

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

// Toggle menu visibility on checkbox change
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    menu.classList.remove('hidden'); // Show menu
  } else {
    menu.classList.add('hidden'); // Hide menu
  }
});