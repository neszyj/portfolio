document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-button");
    const audio = document.getElementById("background-audio");
    const vinyl = document.getElementById("vinyl");
    let isPlaying = false;
  
    playButton.addEventListener("click", () => {
      if (!isPlaying) {
        vinyl.classList.add("spin");
        audio.play();
        playButton.textContent = "Pause";
        isPlaying = true;
      } else {
        vinyl.classList.remove("spin");
        audio.pause();
        playButton.textContent = "Play";
        isPlaying = false;
      }
    });
  });

  const bird = document.querySelector('.bird');
  const offsetX = 150; 
  const offsetY = 150; 

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    bird.style.left = `${mouseX + offsetX - bird.offsetWidth / 2}px`; 
    bird.style.top = `${mouseY + offsetY - bird.offsetHeight / 2}px`; 
  });
