document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 135;

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
            window.location.replace('../holod/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../dzhek/index.html');
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
    { start: 14, end: 18, text: 'Ког-ког-кого ты видишь рядом? Когда не рядом я'},
    { start: 18, end: 21, text: 'Твои слова любви делю на два'},
    { start: 21, end: 23, text: 'Мне жаль ту, что щас рядом'},
    { start: 23, end: 25, text: 'Ты-ты будешь с новой завтра'},
    { start: 25, end: 28, text: 'Когда растает твой последний бокал'},
    { start: 28, end: 31, text: 'Сколько стоит эта любовь, если она от тебя'},
    { start: 31, end: 35, text: 'Ты продаёшь подделку, но она мне не нужна (Спрячь)'},
    { start: 35, end: 38, text: 'Останусь в сердце и скину оттуда якоря'},
    { start: 38, end: 41, text: 'Ты слишком много хочешь, но я даже не твоя (Нет)'},
    { start: 41, end: 43, text: 'Она в туре с любовью'},
    { start: 43, end: 44, text: 'В айфоне даты, их много (Е)'},
    { start: 44, end: 46, text: 'Бали, Бодрум, Ибица и Комо (Да)'},
    { start: 46, end: 49, text: 'В поисках принца под солнцем (Boo)'},
    { start: 49, end: 51, text: '(В поиск—) В поисках парня в фантоме (Е, окей)'},
    { start: 51, end: 54, text: 'Такие, как ты, когда целуют — это ожоги на коже'},
    { start: 54, end: 56, text: 'Хотел вдвоём этот день встречать (Да)'},
    { start: 56, end: 58, text: 'Ты контракт, я твоя печать (Да)'},
    { start: 58, end: 60, text: 'Ты не спишь уже третий час (Да, да, е, е)'},
    { start: 60, end: 61, text: 'Со мной в пути, роллишь новый газ'},
    { start: 61, end: 63, text: 'Я долго думал — нельзя (Нельзя)'},
    { start: 63, end: 65, text: 'Но мнение своё поменял (Boo)'},
    { start: 65, end: 66, text: 'Мне кажется, это глаза'},
    { start: 66, end: 68, text: 'А может быть, это твой абонемент в зал'},
    { start: 68, end: 69, text: 'По резюме дизайнер (Е)'},
    { start: 69, end: 71, text: 'Но фото так много со Стамбула (Да)'},
    { start: 71, end: 73, text: 'План был уехать на месяц'},
    { start: 73, end: 74, text: 'Но никто не вернулся оттуда (У)'},
    { start: 74, end: 76, text: 'Отели все, бля, пять звёзд (Да)'},
    { start: 76, end: 78, text: 'Холодные ночи уюта (Бр)'},
    { start: 78, end: 80, text: 'Детка, я такой же, как ты'},
    { start: 80, end: 81, text: 'Оставь легенды ублюдкам (Мне)'},
    { start: 81, end: 82, text: 'Я шалава такая, как ты (Р-ря)'},
    { start: 82, end: 84, text: 'Тебе нужен фикс, нужен допамин'},
    { start: 84, end: 86, text: 'Мне Бог дал час, сказал: «Бери» (Р-ря)'},
    { start: 86, end: 88, text: 'Бог дал час, сказал: «Бери» (`K, `k)'},
    { start: 88, end: 89, text: 'Такая же шалава, как ты (Р-ря)'},
    { start: 89, end: 91, text: 'Тебе нужен фикс, нужен допамин (Get down)'},
    { start: 91, end: 93, text: 'Мне Бог дал час, сказал: «Бери» (`K, `k)'},
    { start: 93, end: 96, text: 'Бог дал час, сказал: «Бери» (Grrah)'},
    { start: 96, end: 98, text: 'Ког-ког-кого ты видишь рядом? Когда не рядом я'},
    { start: 98, end: 103, text: 'Твои слова любви делю на два'},
    { start: 103, end: 104, text: 'Мне жаль ту, что щас рядом'},
    { start: 104, end: 106, text: 'Ты-ты будешь с новой завтра'},
    { start: 106, end: 109, text: 'Когда растает твой последний бокал'},
    { start: 109, end: 112, text: 'Сколько стоит эта любовь, если она от тебя'},
    { start: 112, end: 116, text: 'Ты продаёшь подделку, но она мне не нужна (Спрячь)'},
    { start: 116, end: 119, text: 'Останусь в сердце и скину оттуда якоря'},
    { start: 119, end: 10000, text: 'Ты слишком много хочешь, но я даже не твоя'},

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