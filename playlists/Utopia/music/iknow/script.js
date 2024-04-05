document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 211;

    function updateTimer() {
        const minutes = Math.floor(audioPlayer.currentTime / 60);
        const seconds = Math.floor(audioPlayer.currentTime % 60);
        const formattedTime = padZero(minutes) + ':' + padZero(seconds);
        timer.textContent = formattedTime;
    }

    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    audioPlayer.addEventListener('timeupdate', updateTimer);

    // Event listener for play/pause button
    playPauseButton.addEventListener("click", function () {
        togglePlayPause();
    });

    // Event listener for updating the progress bar
    audioPlayer.addEventListener("timeupdate", function () {
        updateProgressBar();
    });

    // Event listener for progress bar input
    progressBar.addEventListener("input", function () {
        seekAudio();
    });

    // Event listener for move to beginning button
    moveToBeginningButton.addEventListener("click", function () {
        moveAudioToBeginning();
    });

    // Event listener for move to end button
    moveToEndButton.addEventListener("click", function () {
        moveAudioToEnd();
    });

    // Set the maximum value for the progress bar
    progressBar.max = totalDuration;

    function togglePlayPause() {
        if (audioPlayer.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    }

    function playAudio() {
        audioPlayer.play();
    }

    function pauseAudio() {
        audioPlayer.pause();
    }


    function updateProgressBar() {
        const currentTime = audioPlayer.currentTime;
        progressBar.value = currentTime;
    }

    function seekAudio() {
        audioPlayer.currentTime = progressBar.value;
        updateProgressBar();
    }

    function moveAudioToBeginning() {
        if (audioPlayer.currentTime >= 3){
            audioPlayer.currentTime = 0; 
            updateProgressBar();
       } else{
            window.location.replace('../eyes/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../fein/index.html');
    }
});

let isPaused = false;

    function togglePause() {
      isPaused = !isPaused;

      const toggleIcon = document.getElementById('pause-button-img');

      if (isPaused) {
        toggleIcon.src = 'data/pause.svg';
        toggleIcon.alt = 'Pause';
      } else {
        toggleIcon.src = 'data/play.svg';
        toggleIcon.alt = 'Play';
      }
    }


document.addEventListener('DOMContentLoaded', function() {
  const lyricsContainer = document.getElementById('lyric-card');
  const audio = document.getElementById('audio-player');

  // Replace this with your JSON data of lyrics with start and end timecodes
  const lyricsData = [
    { start: 18, end: 19, text: 'Tell me, is you still up? (Up)'},
    { start: 19, end: 21, text: 'It`s 5 AM and I`m drunk right now'},
    { start: 21, end: 23, text: 'Tell me, can we still fuck? (Fuck that shit)'},
    { start: 23, end: 24, text: 'One of one, I`m in the zone right now'},
    { start: 24, end: 26, text: 'Tell me, am I still? Mm'},
    { start: 26, end: 28, text: 'Tellin` you just how I feel right now'},
    { start: 28, end: 31, text: 'You say it`s just the drugs, and I know'},
    { start: 31, end: 35, text: 'I know, I know, I know, I know, I know, I know'},
    { start: 35, end: 38, text: 'I lied too, way before, before'},
    { start: 38, end: 41, text: 'Before I had you right inside my arms'},
    { start: 41, end: 45, text: 'Then again, I could be drunk (it`s lit, yeah)'},
    { start: 45, end: 48, text: 'Baby, I don`t wanna sound righteous (yeah)'},
    { start: 48, end: 52, text: 'I got twenty bitches suckin` like bisons'},
    { start: 52, end: 53, text: 'I just eeny, meeny, miney, roll the dices, I pick her (pop it, pop it)'},
    { start: 53, end: 55, text: 'She ain`t really even my type, been out here'},
    { start: 55, end: 57, text: 'She been losin` herself to the night shift'},
    { start: 57, end: 59, text: 'She been losin` herself, and I get it, oh, girl, yeah, I get it'},
    { start: 59, end: 63, text: 'Yeah, yeah, you`ve been fightin` for your shot'},
    { start: 63, end: 64, text: 'And you`ve been searchin` for your spot'},
    { start: 64, end: 66, text: 'Girl, I feel it, yeah, girl, I feel it, yeah'},
    { start: 66, end: 68, text: 'Oh, you think you got your groove'},
    { start: 68, end: 70, text: 'But you want someone like you'},
    { start: 70, end: 71, text: 'Tell me, is you still up? (Up)'},
    { start: 71, end: 73, text: 'It`s 5 AM and I`m drunk right now'},
    { start: 73, end: 74, text: 'Tell me, can we still fuck? (Fuck that shit)'},
    { start: 74, end: 78, text: 'One of one, I`m in the zone right now'},
    { start: 78, end: 80, text: 'Tell me, am I still? Mm'},
    { start: 80, end: 84, text: 'Tellin` you just how I feel right now'},
    { start: 84, end: 87, text: 'You say it`s just the drugs, and I know'},
    { start: 87, end: 91, text: 'I know, I know, I know, I know, I know, I know (ooh, it`s the kid, know it, damn it)'},
    { start: 91, end: 98, text: 'I lied too, way before, before (how they feelin`, how they feelin`, ooh)'},
    { start: 98, end: 101, text: 'Before I had you right inside my arms (feelin` like some money, tonight)'},
    { start: 101, end: 113, text: 'Then again, I could be drunk (yeah)'},
    { start: 113, end: 115, text: 'I know, mami, I know (know), it`s 2 AM, don`t stress'},
    { start: 115, end: 119, text: 'At three, that blue shit kick in`, in thirty you`ll feel your best'},
    { start: 119, end: 122, text: 'I turned my whole spot to Crucial, it`s crucial, the way I left (it`s lit)'},
    { start: 122, end: 125, text: 'Upstairs is like a low, my new bitches be the best (let`s go)'},
    { start: 125, end: 128, text: 'I`m lookin` at her, when her startin` to turn to you (her)'},
    { start: 128, end: 131, text: 'Now you startin` to fuck up my mind, is it you, is it her?'},
    { start: 131, end: 135, text: 'We brought booby trap to the `burbs'},
    { start: 135, end: 139, text: 'F29 is my address, in case you ain`t heard'},
    { start: 139, end: 142, text: 'It`s floodin` upstairs, it`s a leak'},
    { start: 142, end: 146, text: 'I don`t make it squeak, make it squirt'},
    { start: 146, end: 150, text: 'I make this shit beat, bon appetit when I feast'},
    { start: 150, end: 153, text: 'Slippin` and slide through the streets, it takes a finesse'},
    { start: 153, end: 157, text: 'Especially in this Cabriolet Jeep, engine make chaotic creep'},
    { start: 157, end: 160, text: 'Just leave the gate open, through the side door, I`ma creep (ooh, ooh)'},
    { start: 160, end: 10000, text: 'Are you by the Turrell? And are the kids downstairs asleep?'},

     ];

   // Function to display lyrics
  function displayLyrics() {
    lyricsContainer.innerHTML = '';
    lyricsData.forEach(line => {
      const lyricLine = document.createElement('div');
      lyricLine.classList.add('lyrics-line');
      lyricLine.textContent = line.text;
      lyricsContainer.appendChild(lyricLine);

      // Highlight active line based on current audio time
      audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= line.start && audio.currentTime <= line.end) {
          lyricLine.classList.add('active');
          scrollToLyric(lyricLine.offsetTop);
        } else {
          lyricLine.classList.remove('active');
        }
      });
    });
  }

  // Function to display lyrics
  function displayLyrics() {
    lyricsContainer.innerHTML = '';
    lyricsData.forEach(line => {
      const lyricLine = document.createElement('div');
      lyricLine.classList.add('lyrics-line');
      lyricLine.textContent = line.text;
      lyricsContainer.appendChild(lyricLine);

      // Highlight active line based on current audio time
      audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= line.start && audio.currentTime <= line.end) {
          lyricLine.classList.add('active');
          scrollToLyric(lyricLine.offsetTop);
        } else {
          lyricLine.classList.remove('active');
        }
      });
    });
  }

  // Function for smooth scrolling to lyric line
  function scrollToLyric(offsetTop) {
    lyricsContainer.scrollTo({
      top: offsetTop - (lyricsContainer.clientHeight / 4),
      behavior: 'smooth'
    });
  }

  displayLyrics();
});