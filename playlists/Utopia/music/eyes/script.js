document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 251;

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
            window.location.replace('../thanks/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../iknow/index.html');
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
    { start: 18, end: 21, text: 'When I stare in your eyes'},
    { start: 21, end: 25, text: 'You`ll be there forever'},
    { start: 25, end: 29, text: 'To watch our life (to watch our life together)'},
    { start: 29, end: 33, text: 'You just like going to Heaven (my heart)'},
    { start: 33, end: 39, text: 'Oh, where are you taking me? (oh, yeah, oh, yeah, oh, yeah, oh, yeah)'},
    { start: 39, end: 46, text: 'I`m fallin`, and, I`m drownin`'},
    { start: 46, end: 49, text: 'But, you`re takin` me'},
    { start: 49, end: 51, text: 'One thousand on my feet'},
    { start: 51, end: 53, text: 'Stacks spreaded on my seat'},
    { start: 53, end: 57, text: 'Ten thousand on my eyes (eyes)'},
    { start: 57, end: 58, text: 'Rollie Pollie on my wrist'},
    { start: 58, end: 62, text: 'Gotta make a flight, big day, slummin` on FaceTime'},
    { start: 62, end: 65, text: 'Fifty K, wonderin` why I`m stormin` off, no race'},
    { start: 65, end: 67, text: 'Emboldened by the bliss'},
    { start: 67, end: 68, text: 'I was sworn in by a kiss'},
    { start: 68, end: 70, text: 'Late from the country caters'},
    { start: 70, end: 73, text: 'No peacemaker, I sweep up cases'},
    { start: 73, end: 75, text: 'Goin` on a walk with a new suit armor'},
    { start: 75, end: 77, text: 'New suit dead, Bottega, that`s on it'},
    { start: 77, end: 79, text: 'Give me the heat from the sleep, then I harm her'},
    { start: 79, end: 81, text: 'Cupid creep in, sleep with a Hummer'},
    { start: 81, end: 83, text: 'Three time to get me T-T-T`d'},
    { start: 83, end: 85, text: 'Still same phone, AT&T-T'},
    { start: 85, end: 87, text: 'Still givin` news very vividly'},
    { start: 87, end: 89, text: 'Beef in there, fuck a beef'},
    { start: 89, end: 91, text: 'Smokin` on some vicious type of reefer'},
    { start: 91, end: 93, text: 'I need no beef, no cheese (yeah)'},
    { start: 93, end: 95, text: 'Even when I eat, they cheat (yeah)'},
    { start: 95, end: 98, text: 'Every time we meet, naive'},
    { start: 98, end: 102, text: 'When I stare in your eyes'},
    { start: 102, end: 106, text: 'You`ll be there forever'},
    { start: 106, end: 110, text: 'To watch our life (to watch out life together)'},
    { start: 110, end: 113, text: 'You just like going to Heav- (my heart)'},
    { start: 113, end: 115, text: 'One thousand on my feet'},
    { start: 115, end: 117, text: 'Stacks spreaded on my seat'},
    { start: 117, end: 121, text: 'Ten thousand on my eyes (eyes)'},
    { start: 121, end: 123, text: 'Yeah, it`s mad how it gets so deep'},
    { start: 123, end: 126, text: 'It`s mad how I get so high'},
    { start: 126, end: 172, text: 'It`s mad how you get me by (by)'},
    { start: 172, end: 173, text: 'Look in my eyes, tell me a tale'},
    { start: 173, end: 175, text: 'Do you see the road, the map to my soul?'},
    { start: 175, end: 177, text: 'Look, tell me the signs whenever the smoke clear out of my face'},
    { start: 177, end: 179, text: 'Am I picture-perfect, or do I look fried?'},
    { start: 179, end: 181, text: 'All of that green and yellow, that drip from your eyes is tellin`'},
    { start: 181, end: 183, text: 'Tell you demise, I went to my side'},
    { start: 183, end: 185, text: 'To push back the ceilin` and push back the feelings, I had to decide'},
    { start: 185, end: 189, text: 'I replay them nights, and right by my side, all I see is a sea of people that ride wit` me'},
    { start: 189, end: 192, text: 'If they just knew what Scotty would do to jump off the stage and save him a child'},
    { start: 192, end: 195, text: 'The things I created became the most weighted, I gotta find balance and keep me inspired (hah)'},
    { start: 195, end: 198, text: 'Yeah, yeah'},
    { start: 198, end: 199, text: 'That shit wild, instead I`m a hero'},
    { start: 199, end: 200, text: 'I took it from zero, LaFlame Usain'},
    { start: 200, end: 202, text: 'I run it from miles, this shit wasn`t luck'},
    { start: 202, end: 205, text: 'They got me fucked up, I put you on bus and take you around'},
    { start: 205, end: 209, text: 'A couple of guys inside of the school, I gave `em the tools to get it off ground'},
    { start: 209, end: 211, text: 'They say they the ones when they make the errors'},
    { start: 211, end: 212, text: 'Can`t look in the mirror, that shit wild'},
    { start: 212, end: 213, text: 'Stand on the stage, I give `em the rage'},
    { start: 213, end: 215, text: 'No turnin` it down, can`t tame it, can`t follow it'},
    { start: 215, end: 218, text: 'We do it for streets, we do it for keeps, we do it for rights, got 52 weeks'},
    { start: 218, end: 220, text: 'This shit ain`t for pleasure, I`m comin` to tweak'},
    { start: 220, end: 221, text: 'This shit is forever and infinity'},
    { start: 221, end: 223, text: 'Number eight, yeah, we write it and wrap it around'},
    { start: 223, end: 225, text: 'I take me beat and I turn to a beast'},
    { start: 225, end: 226, text: 'Bought the crib on a hill, made it harder to reach'},
    { start: 226, end: 228, text: 'Bought a couple more whips `cause I needed more speed'},
    { start: 228, end: 229, text: 'Bought a couple more watches, I needed more time'},
    { start: 229, end: 231, text: 'Didn`t buy the condo, it was smarter to lease'},
    { start: 231, end: 233, text: 'And I bought some more ice `cause I brought in the heat'},
    { start: 233, end: 234, text: 'Made a cast of my dick, so she never gon` cheat'},
    { start: 234, end: 10000, text: 'If I gave you a day in my life or a day in my eyes, don`t blin'},
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