document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 191;

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
            window.location.replace('../trance/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../creepin/index.html');
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
    { start: 15, end: 18, text: 'Like I know you are'},
    { start: 18, end: 22, text: 'She sitting here for hours, ain`t been tellin` none`'},
    { start: 22, end: 28, text: 'It was all cool and it was just for fun'},
    { start: 28, end: 33, text: '(If Young Metro don`t trust you, I`m gon` shoot you)'},
    { start: 33, end: 35, text: 'Too much shit on your mental'},
    { start: 35, end: 37, text: 'Gotta switch up the tempo'},
    { start: 37, end: 39, text: 'Yeah, they callin` it tenfold'},
    { start: 39, end: 43, text: 'Show in here where the bands fold'},
    { start: 43, end: 47, text: 'I locked in your info'},
    { start: 47, end: 50, text: 'I`m `bout to jump out the window'},
    { start: 50, end: 53, text: 'I seen too many worlds and I'},
    { start: 53, end: 57, text: 'Want you to be my girl tonight'},
    { start: 57, end: 61, text: 'Know I gotta keep them drugs `round me'},
    { start: 61, end: 64, text: 'I gotta keep a couple plugs around'},
    { start: 64, end: 68, text: 'I, I seen way too many worlds and I'},
    { start: 68, end: 73, text: 'I want you to be my girl tonight'},
    { start: 73, end: 77, text: 'Know I keep a couple drugs `round'},
    { start: 77, end: 83, text: 'I gotta keep a couple plugs around'},
    { start: 83, end: 86, text: 'Now you wan` talk when the money come in'},
    { start: 86, end: 89, text: 'Niggas went bad, they goin` out sad, they never gon` win'},
    { start: 89, end: 94, text: 'I been goin` like ten for ten'},
    { start: 94, end: 95, text: 'Get it on movie, get it on film'},
    { start: 95, end: 97, text: 'Get it on movie, get it on film'},
    { start: 97, end: 99, text: 'Pour my cup way above the brim'},
    { start: 99, end: 101, text: 'I went and got the cup with the all-white trim'},
    { start: 101, end: 103, text: 'Finna go and dunk way above the rim'},
    { start: 103, end: 105, text: 'Cold at night, so it was hard to flip'},
    { start: 105, end: 107, text: 'Niggas were lit when the harder hit'},
    { start: 107, end: 109, text: 'I ain`t think twice whenever I get it'},
    { start: 109, end: 111, text: 'I was goin` Shiest` with the all-black fitted'},
    { start: 111, end: 113, text: 'I was goin` Shiesty in all-black'},
    { start: 113, end: 115, text: 'I was on ten when you call back'},
    { start: 115, end: 117, text: 'Had to think twice and you fall back'},
    { start: 117, end: 119, text: 'I hit a mean lick, and it was all racks'},
    { start: 119, end: 121, text: 'I was goin` Shiesty in all-black'},
    { start: 121, end: 123, text: 'I was on ten when you call back'},
    { start: 123, end: 125, text: 'Had to think twice and you fall back'},
    { start: 125, end: 128, text: 'I hit a mean lick, and it was all racks'},
    { start: 128, end: 133, text: 'I seen too many worlds and I'},
    { start: 133, end: 137, text: 'Want you to be my girl tonight'},
    { start: 137, end: 141, text: 'Know I gotta keep them drugs `round me'},
    { start: 141, end: 145, text: 'I gotta keep a couple plugs around'},
    { start: 145, end: 149, text: 'I, I seen way too many worlds and I'},
    { start: 149, end: 153, text: 'I want you to be my girl tonight'},
    { start: 153, end: 157, text: 'Know I keep a couple drugs `round'},
    { start: 157, end: 161, text: 'I gotta keep a couple plugs around'},
    { start: 161, end: 164, text: 'Heroes are inspired'},
    { start: 164, end: 167, text: 'Emerging only when needed'},
    { start: 167, end: 175, text: 'Revealing themselves to the world in a moment marked by the realization of their ultimate destiny'},
    { start: 175, end: 181, text: 'With backs against the wall, they ascend the winding path of their own fate'},
    { start: 181, end: 10000, text: 'Barely knowing the ledge, despite coping as living their whole life as two hands'},
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