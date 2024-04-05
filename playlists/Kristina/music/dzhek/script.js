document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 164;

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
            window.location.replace('../kristina/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../yabudu/index.html');
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
    { start: 5, end: 10, text: 'Неизвестный с ножом напал на прохожих на Russel Square в центре Лондона.'},
    { start: 10, end: 11, text: 'Погибла одна женщина, ещё пять человек получили ранения.'},
    { start: 11, end: 14, text: 'Damn Aarne going crazy in this motherfuckers'},
    { start: 14, end: 17, text: 'Убица шалав, Jack Reaper, они звонят в полицию'},
    { start: 17, end: 21, text: 'Не осталось следа, все улики смыты'},
    { start: 21, end: 24, text: 'Она дала башку, потом дала мне цифры'},
    { start: 24, end: 26, text: 'Детка искала любовь, но оказалась убитой'},
    { start: 26, end: 28, text: 'Всегда умел'},
    { start: 28, end: 30, text: 'достать до сердца братик'},
    { start: 30, end: 31, text: 'Вонзить и прокрутить'},
    { start: 31, end: 33, text: 'пока свет не погаснет'},
    { start: 33, end: 35, text: 'Всегда умел'},
    { start: 35, end: 36, text: 'достать до сердца братик'},
    { start: 36, end: 38, text: 'Вонзить и прокрутить'},
    { start: 38, end: 40, text: 'пока свет не погаснет'},
    { start: 40, end: 41, text: 'Всегда умел'},
    { start: 41, end: 43, text: 'достать до сердца братик'},
    { start: 43, end: 45, text: 'Вонзить и прокрутить'},
    { start: 45, end: 46, text: 'пока свет не погаснет'},
    { start: 46, end: 48, text: 'Всегда умел'},
    { start: 48, end: 50, text: 'достать до сердца братик'},
    { start: 50, end: 52, text: 'Вонзить и прокрутить'},
    { start: 52, end: 53, text: 'пока свет не погаснет'},
    { start: 53, end: 57, text: 'Так много букингов в приёмной, ведь туда везут твой gang'},
    { start: 57, end: 60, text: 'Знаю как сделать братишку, чтоб братик забыл как есть'},
    { start: 60, end: 63, text: 'С Гелентвагена в коляску, называй это downgrade'},
    { start: 63, end: 68, text: 'Штука жрёт две батарейки, все стволы на Duracell'},
    { start: 68, end: 71, text: 'Заказ в пути, курьер так быстро едет'},
    { start: 71, end: 75, text: 'Да он нарушает, он так хочет деньги'},
    { start: 75, end: 78, text: 'Marni тапки, Alyx Blackmeans, обла йети'},
    { start: 78, end: 81, text: 'За мной ходят дети, хотят уже третий'},
    { start: 81, end: 85, text: 'Орнитолог, бля я шарю в птичках'},
    { start: 85, end: 88, text: 'Давай скажешь лично, нахуй эту личку'},
    { start: 88, end: 92, text: 'Не даю им лишнего, не палю фишек'},
    { start: 92, end: 95, text: 'Я даю им пищу, не готовлю - пишу'},
    { start: 95, end: 96, text: 'Прямая линия, на поле либеро'},
    { start: 96, end: 98, text: 'Вы щас подвинитесь, сука вот именно'},
    { start: 98, end: 100, text: 'Не помню имени, она красивая'},
    { start: 100, end: 101, text: 'У нас с ней химия'},
    { start: 101, end: 103, text: 'Птички в кармане и птички из твиттера'},
    { start: 103, end: 105, text: 'В Лондоне пацанов вяжут как свитеры'},
    { start: 105, end: 107, text: 'У меня дерьмо и его не подкинули'},
    { start: 107, end: 109, text: 'Ты сделаешь всё, чтобы тупо продвинуться'},
    { start: 109, end: 110, text: 'Я как Skeppy'},
    { start: 110, end: 113, text: 'На мне кроссы девять пять для бега'},
    { start: 113, end: 116, text: 'Когда ты свежо одет, тебе нужно иметь protection'},
    { start: 116, end: 119, text: 'Выбор Rambo или blicky, мне походу ближе первый'},
    { start: 119, end: 122, text: 'Визор на мне от Moncler, покажет путь твоих артерий'},
    { start: 122, end: 124, text: 'Всегда умел'},
    { start: 124, end: 126, text: 'достать до сердца братик'},
    { start: 126, end: 128, text: 'Вонзить и прокрутить'},
    { start: 128, end: 129, text: 'пока свет не погаснет'},
    { start: 129, end: 131, text: 'Всегда умел'},
    { start: 131, end: 133, text: 'достать до сердца братик'},
    { start: 133, end: 134, text: 'Вонзить и прокрутить'},
    { start: 134, end: 136, text: 'пока свет не погаснет'},
    { start: 136, end: 138, text: 'Всегда умел'},
    { start: 138, end: 139, text: 'достать до сердца братик'},
    { start: 139, end: 141, text: 'Вонзить и прокрутить'},
    { start: 141, end: 143, text: 'пока свет не погаснет'},
    { start: 143, end: 144, text: 'Всегда умел'},
    { start: 144, end: 146, text: 'достать до сердца братик'},
    { start: 146, end: 148, text: 'Вонзить и прокрутить'},
    { start: 148, end: 10000, text: 'пока свет не погасне'},

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