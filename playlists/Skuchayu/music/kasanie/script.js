document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 151;

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
            window.location.replace('../dlya/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../day/index.html');
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
    { start: 17, end: 22, text: 'Я так боюсь (Damn), что я не на своём пике (Реально)'},
    { start: 22, end: 26, text: 'И он прошёл, (Лил мама) вдохнови меня (Прошу)'},
    { start: 26, end: 30, text: 'Боюсь, что мы себя изжили (Это конец?)'},
    { start: 30, end: 33, text: 'Скажи, что нет и поцелуй меня (Ай)'},
    { start: 33, end: 35, text: 'Ты как клад — забираю в касание'},
    { start: 35, end: 37, text: 'Моя первая любовь, мы когда-нить расстанемся'},
    { start: 37, end: 39, text: 'Пока жива страсть, не надо расстраиваться (Прошу)'},
    { start: 39, end: 42, text: 'Как лёд в воде — друг в друге растаем'},
    { start: 42, end: 44, text: 'Это едкий дым, я меняю сознание (Е)'},
    { start: 44, end: 46, text: 'Меня не было рядом — виновато расстояние'},
    { start: 46, end: 48, text: 'Что испытывал щас, слов не хватит для описания'},
    { start: 48, end: 50, text: 'У меня реально нет слов'},
    { start: 50, end: 52, text: 'Ты как клад — забираю в касание'},
    { start: 52, end: 54, text: 'Моя первая любовь, мы когда-нить расстанемся'},
    { start: 54, end: 56, text: 'Пока жива страсть, не надо расстраиваться (Прошу)'},
    { start: 56, end: 58, text: 'Как лёд в воде — друг в друге растаем'},
    { start: 58, end: 60, text: 'Это едкий дым, я меняю сознание'},
    { start: 60, end: 63, text: 'Меня не было рядом — виновато расстояние'},
    { start: 63, end: 65, text: 'Что испытываю щас, слов не хватит для описания'},
    { start: 65, end: 67, text: 'У меня реально нет слов'},
    { start: 67, end: 68, text: 'Поезд давно ушёл'},
    { start: 68, end: 72, text: 'Но я пытаюсь его догнать (Догнать)'},
    { start: 72, end: 75, text: 'Я всё ещё бегу (Бегу)'},
    { start: 75, end: 77, text: 'Надеюсь, что ты нормально (Надеюсь)'},
    { start: 77, end: 79, text: 'Надеюсь, что ты тоже хочешь (Хочешь)'},
    { start: 79, end: 82, text: 'Надеюсь, что я всё верну'},
    { start: 82, end: 84, text: '(Верну, ага)'},
    { start: 84, end: 86, text: 'В этих бегах я остался один (Один)'},
    { start: 86, end: 88, text: 'Но дальше бегу, надеясь найти (Бегу)'},
    { start: 88, end: 90, text: 'Чувствую твои координаты (Рядом)'},
    { start: 90, end: 92, text: 'Голос в голове говорит: «Найди» (Найди)'},
    { start: 92, end: 94, text: 'У-у, да'},
    { start: 94, end: 98, text: 'Смотрю на фото и узнаю это место (Тут)'},
    { start: 98, end: 101, text: 'О, о (Эй), место, где нашёл тебя'},
    { start: 101, end: 102, text: 'Ты как клад — забираю в касание'},
    { start: 102, end: 105, text: 'Моя первая любовь, мы когда-нить расстанемся'},
    { start: 105, end: 107, text: 'Пока жива страсть, не надо расстраиваться'},
    { start: 107, end: 109, text: 'Как лёд в воде — друг в друге растаем'},
    { start: 109, end: 111, text: 'Это едкий дым, я меняю сознание (Е)'},
    { start: 111, end: 113, text: 'Меня не было рядом — виновато расстояние'},
    { start: 113, end: 116, text: 'Что испытывал, щас слов не хватит для описания'},
    { start: 116, end: 118, text: 'У меня реально нет слов'},
    { start: 118, end: 120, text: 'Ты как клад — забираю в касание'},
    { start: 120, end: 121, text: 'Моя первая любовь, мы когда-нить расстанемся'},
    { start: 121, end: 124, text: 'Пока жива страсть, не надо расстраиваться'},
    { start: 124, end: 126, text: 'Как лёд в воде — друг в друге растаем'},
    { start: 126, end: 128, text: 'Это едкий дым, я меняю сознание'},
    { start: 128, end: 130, text: 'Меня не было рядом — виновато расстояние'},
    { start: 130, end: 132, text: 'Что испытывал, щас слов не хватит для описания'},
    { start: 132, end: 10000, text: 'У меня реально нет слов'},

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