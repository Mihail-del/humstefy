document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 194;

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
            window.location.replace('../nights/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../around/index.html');
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
    { start: 12, end: 15, text: 'Yeah, yeah, yeah, yeah'},
    { start: 15, end: 17, text: 'Did you forget? Do it for life'},
    { start: 17, end: 19, text: 'Chicago that time, all bullshit aside'},
    { start: 19, end: 22, text: 'Wonderful vibe, wonderful night (Yeah)'},
    { start: 22, end: 23, text: 'Did it with tribe'},
    { start: 23, end: 25, text: 'All I can hear is you and I'},
    { start: 25, end: 27, text: 'Up in this club, bumpin` and grind'},
    { start: 27, end: 30, text: 'Who made it flood? You see the signs (Sign)'},
    { start: 30, end: 33, text: 'Signs, signs, signs (Yeah)'},
    { start: 33, end: 35, text: 'We pulled out the feathers for this type of weather'},
    { start: 35, end: 37, text: 'She pulled to the club to bust up a dub'},
    { start: 37, end: 39, text: 'She came with her man, I called in a sub'},
    { start: 39, end: 41, text: 'She givin` out hugs, we know `bout them hugs'},
    { start: 41, end: 43, text: 'She put in my hand, don`t know what it was'},
    { start: 43, end: 46, text: 'She know some the fam, but don`t know enough (Enough)'},
    { start: 46, end: 48, text: 'My trust is in "In God We Trust"'},
    { start: 48, end: 50, text: '(Caught in a trance, yeah)'},
    { start: 50, end: 51, text: 'Sippin` on Wock, don`t do `Tuss'},
    { start: 51, end: 53, text: 'She got her own fans, she need her a bus'},
    { start: 53, end: 55, text: 'Might give her a chance, it`s givin` her— (Uh)'},
    { start: 55, end: 57, text: 'Out in a trance, it`s givin` her— (Uh)'},
    { start: 57, end: 59, text: 'Not on no Xans, it`s givin` her— (Uh)'},
    { start: 59, end: 61, text: 'Nigga with bands, it`s givin` her— (Trance)'},
    { start: 61, end: 63, text: 'A nigga with plans, it`s givin` her— (Uh)'},
    { start: 63, end: 65, text: 'Still in the gym, ain`t did the implants'},
    { start: 65, end: 67, text: 'I like that for real, ain`t givin` up'},
    { start: 67, end: 69, text: 'Like they know that you real, they give it up (Real)'},
    { start: 69, end: 72, text: 'Like if you got the steel, they give it up (Steel)'},
    { start: 72, end: 74, text: 'Takin` these Ms they givin` us'},
    { start: 74, end: 76, text: 'And run in the field like it`s ten of us (Ten, ten, ten)'},
    { start: 76, end: 77, text: 'I`m cleanin` shit out like a enema'},
    { start: 77, end: 80, text: 'I make this shit look like a cinema (Ten, ten, ten)'},
    { start: 80, end: 82, text: '(Caught in a trance, yeah)'},
    { start: 82, end: 84, text: 'Ah, take off the top, baby, let`s ride'},
    { start: 84, end: 86, text: 'I`m with my dawgs, I pick the side'},
    { start: 86, end: 88, text: 'She want the boss, the one own the tribe'},
    { start: 88, end: 90, text: 'I own the tribe, yeah'},
    { start: 90, end: 92, text: 'Arm out the window, just throw it when we ride'},
    { start: 92, end: 94, text: 'I bent the corner, scraped the wheel and the tires (Woo)'},
    { start: 94, end: 96, text: 'Put twenty hoes on a boat `til they tired'},
    { start: 96, end: 97, text: 'Everybody on (On)'},
    { start: 97, end: 99, text: 'You know you need me, my nigga'},
    { start: 99, end: 101, text: 'Just keep this shit real, don`t you cry, what you saw? (Need)'},
    { start: 101, end: 106, text: 'Who else fuck up the city like us? When it rain, it`s a thunderstorm (Thunderstorm)'},
    { start: 106, end: 109, text: 'I party at Shabba in New York and L.A. where they keep on goin` to the dawn (Shabba)'},
    { start: 109, end: 111, text: 'Two hundred K what I`m on (Two hundred)'},
    { start: 111, end: 114, text: 'She lickin` all down my chest (Down my, lick down my chest, yeah, yeah)'},
    { start: 114, end: 118, text: 'I told her, "I ain`t Slime, baby, call me SEX," yeah (I`m not Slime, just call me SEX)'},
    { start: 118, end: 122, text: 'It ain`t no dope where I put these racks at, yeah (Ain`t no dope where I put these racks)'},
    { start: 122, end: 127, text: 'If you my ho, I call you sexy, yeah (If you my ho, I call you sexy)'},
    { start: 127, end: 130, text: 'Goddamn, lately she so bad, it`s dangerous (Dangerous)'},
    { start: 130, end: 134, text: 'I backed out of the knot, she tried to tangle up (Uh)'},
    { start: 134, end: 139, text: 'She got Paris manners and it`s so dangerous (Dangerous)'},
    { start: 139, end: 144, text: 'Uh, uh, uh, uh, uh'},
    { start: 144, end: 146, text: 'Caught in a trance, it`s givin` us (Yeah, ah)'},
    { start: 146, end: 148, text: 'Caught in a trance, it`s givin` us (Ah, yeah, uh-huh)'},
    { start: 148, end: 150, text: 'Caught in a trance, it`s givin` us (Ah)'},
    { start: 150, end: 152, text: 'Caught in a trance, it`s givin` us (Ah)'},
    { start: 152, end: 154, text: 'Caught in a trance, it`s givin` us (Ah)'},
    { start: 154, end: 156, text: 'Caught in a trance, it`s givin` us (Ah)'},
    { start: 156, end: 157, text: 'Late night, late night, late night'},
    { start: 157, end: 159, text: 'To the side, to the side'},
    { start: 159, end: 160, text: 'Yeah, yeah, this side'},
    { start: 160, end: 163, text: 'You got riptide in mind'},
    { start: 163, end: 165, text: 'I move so far in time'},
    { start: 165, end: 167, text: 'I move so far in time (Ooh)'},
    { start: 167, end: 169, text: 'I been whipped up at night (Woah, ooh)'},
    { start: 169, end: 171, text: 'I been whipped up at night'},
    { start: 171, end: 173, text: 'With my fists up, in drive (Drive, ooh)'},
    { start: 173, end: 175, text: 'Drivin`, **** up, in time (Ooh, yeah)'},
    { start: 175, end: 177, text: 'I been pimped up in night (Uh, ooh)'},
    { start: 177, end: 179, text: 'I been workin` in time (Ooh)'},
    { start: 179, end: 181, text: 'I been moved right inside (Ah, ah)'},
    { start: 181, end: 182, text: 'I`ve been just like— (Ooh)'},
    { start: 182, end: 10000, text: 'It`s this life, it`s this life, it`s this lif'},
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