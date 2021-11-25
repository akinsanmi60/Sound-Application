
   window.addEventListener('keydown', (e) => {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // stop keys with audio to function
    audio.play(); // code to play sound
    audio.currentTime=0;
   
    key.classList.add('playing');
      
    });


    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    function removeTransition(e){
           if (e.propertyName !== 'transform') return; // skip it if its a not transform
           
           this.classList.remove('playing')
        }