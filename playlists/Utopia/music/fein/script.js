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
            window.location.replace('../iknow/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../thanks/index.html');
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
    { start: 9, end: 12, text: 'Just come outside for the night (Yeah)'},
    { start: 12, end: 15, text: 'Take your time, get your light (Yeah)'},
    { start: 15, end: 19, text: 'Johnny Dang, yeah, yeah'},
    { start: 19, end: 22, text: 'I been out geekin` (Bitch)'},
    { start: 22, end: 26, text: 'FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)'},
    { start: 26, end: 29, text: 'FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)'},
    { start: 29, end: 32, text: 'FE!N, FE!N, FE!N, FE!N, FE!N'},
    { start: 32, end: 38, text: 'FE!N, FE!N (Yeah), FE!N, FE!N, FE!N'},
    { start: 38, end: 41, text: 'The career`s more at stake when you in your prime (At stake)'},
    { start: 41, end: 44, text: 'Fuck that paper, baby, my face on the dotted line (Dot, yeah)'},
    { start: 44, end: 47, text: 'I been flyin` out of town for some peace of mind (Yeah, yeah, bitch)'},
    { start: 47, end: 50, text: 'It`s like always they just want a piece of mine (Ah)'},
    { start: 50, end: 53, text: 'I been focused on the future, never on right now (Ah)'},
    { start: 53, end: 57, text: 'What I`m sippin` not kombucha, either pink or brown (It`s lit)'},
    { start: 57, end: 61, text: 'I`m the one that introduced you to the you right now (Mmm, let`s go)'},
    { start: 61, end: 64, text: 'Oh my God, that bitch bitin` (That bitch bitin`)'},
    { start: 64, end: 67, text: 'Well, alright (Alright), tryna vibe (I`m tryna vibe this)'},
    { start: 67, end: 71, text: 'In the night, come alive'},
    { start: 71, end: 74, text: 'Ain`t asleep, ain`t a—, ain`t a—, ain`t-ain`t'},
    { start: 74, end: 78, text: 'FE!N, FE!N, FE!N, FE!N, FE!N'},
    { start: 78, end: 81, text: 'FE!N, FE!N, FE!N, FE!N, FE!N'},
    { start: 81, end: 84, text: 'FE!N, FE!N, FE!N, FE!N, FE!N'},
    { start: 84, end: 87, text: 'FE!N, FE!N, FE!N, FE!N'},
    { start: 87, end: 92, text: 'FE!N, FE!N, FE!N, FE!N, FE!N'},
    { start: 92, end: 99, text: 'Syrup, woah, what?'},
    { start: 99, end: 110, text: 'What?'},
    { start: 110, end: 114, text: 'Uh, hundred-round (Woah), feelin` like I`m on ten'},
    { start: 114, end: 124, text: 'Playin` both sides with these hoes (Hold up), shawty, I`m fuckin` your friend (Hold up)'},
    { start: 124, end: 128, text: 'I`ve been goin` crazy, shawty, I`ve been in the deep end'},
    { start: 128, end: 130, text: 'She not innocent, uh, she just tryna go'},
    { start: 130, end: 133, text: 'FE!N (Talkin` `bout), FE!N, FE!N (Yeah), FE!N, FE!N (Syrup, oh, oh, what? Syrup)'},
    { start: 133, end: 137, text: 'FE!N, FE!N (Syrup), FE!N, FE!N, FE!N (Oh, oh)'},
    { start: 137, end: 140, text: 'FE!N, FE!N (Talkin` `bout), FE!N, FE!N, FE!N, FE!N (Talkin` `bout, let`s go)'},
    { start: 140, end: 142, text: 'I just been icin` my hoes, I just been drippin` my hoes (Drippin` my hoes)'},
    { start: 142, end: 146, text: 'This is a whole `nother level, shawty (Oh), I got these hoes on they toes (Hoes on they toes)'},
    { start: 146, end: 149, text: 'I put the bitch on the road, she tryna fuck on the O, hold up, hold up'},
    { start: 149, end: 153, text: 'I got this ho with me, she tryna show me somethin`, hold up, hold up (Oh)'},
    { start: 153, end: 155, text: 'I got flows for days, these niggas ain`t on nothin`, hold up, yeah (Oh)'},
    { start: 155, end: 159, text: 'Me and my boy locked in, you know we on one, hold up, uh (Slatt, slatt)'},
    { start: 159, end: 162, text: 'We in the spot goin` crazy until the sun up'},
    { start: 162, end: 165, text: 'You worried about that ho, that ho done chose up (Slatt, bitch-ass)'},
    { start: 165, end: 168, text: 'Uh, pistols all in the kitchen, can`t give the zip code up, hold up, yeah (Wow)'},
    { start: 168, end: 172, text: 'FE!N, FE!N, FE!N (Huh? Huh? Huh? Huh? Yeah)'},
    { start: 172, end: 175, text: 'Why the fuck these niggas actin` like they know us?'},
    { start: 175, end: 178, text: 'Double O, Cactus, yeah, we towed up (Skrrt, skrrt), uh, yeah'},
    { start: 178, end: 182, text: 'Switch out the bag, these niggas get rolled up, hold up (It`s lit), slatt'},
    { start: 182, end: 185, text: 'Everything hit, hold up, everything Homixide, Homixide (Homixide, Homixide, Homixide, Homixide)'},
    { start: 185, end: 10000, text: 'FE!N, FE!N, FE!N, FE!N, FE!N, FE!N (Homixide, Homixide, Homixide, Homixide, Homixide, Homixide, Homixide'},
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