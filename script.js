 document.addEventListener("DOMContentLoaded", function() {
      const buttons = document.querySelectorAll('.btn');
      const stopButton = document.querySelector('.stop');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const soundName = button.id;
          if (soundName === 'stop') {
            stopSounds();
          } else {
            playSound(soundName);
          }
        });
      });

      function playSound(soundName) {
        const audio = new Audio(`sounds/${soundName}.mp3`);
        audio.play();
      }

      function stopSounds() {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => audio.pause());
      }
    });