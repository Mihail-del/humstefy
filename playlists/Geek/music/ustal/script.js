document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 254;

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
            window.location.replace('../mishen/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../bravo/index.html');
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
    { start: 32, end: 34, text: 'То, что в его голове — отображается вокруг'},
    { start: 34, end: 37, text: 'Мысли будто птицы, вылетающие на юг'},
    { start: 37, end: 39, text: 'Он верит, знаки просто не валялись на дороге'},
    { start: 39, end: 42, text: 'Верит есть ещё места там, где люди не воюют'},
    { start: 42, end: 45, text: 'Он в своей голове взаперти двадцать четыре'},
    { start: 45, end: 48, text: 'Виртуоз пацан, молодой Паганини'},
    { start: 48, end: 50, text: 'Энергия в сердце, в голове линии'},
    { start: 50, end: 53, text: 'О его жизни, о её смыслах'},
    { start: 53, end: 58, text: 'Разве этот мир никогда не пах?'},
    { start: 58, end: 64, text: 'Любовью, а не порохом, хватит молчать'},
    { start: 64, end: 69, text: 'Разве это жизнь понимает нас?'},
    { start: 69, end: 74, text: 'То ли это мы должны её понимать?'},
    { start: 74, end: 81, text: 'Беги (Ты же любишь эти толпы)'},
    { start: 81, end: 86, text: 'Смотри (Строго в оба, помни это и)'},
    { start: 86, end: 92, text: 'Беги (Ты как море, люди — волны)'},
    { start: 92, end: 97, text: 'Смотри (Строго в оба, помни это и)'},
    { start: 97, end: 101, text: 'Беги, как тот пацан бежал, беги'},
    { start: 101, end: 104, text: 'Чтоб все мечтали завязать твои шнурки'},
    { start: 104, end: 106, text: 'Чтоб все хотели поиметь твои мозги'},
    { start: 106, end: 108, text: 'Устал — беги'},
    { start: 108, end: 111, text: 'Беги, как тот пацан бежал, беги'},
    { start: 111, end: 114, text: 'Они будут ненавидеть, но потом любить'},
    { start: 114, end: 117, text: 'Сначала слушать, а потом говорить'},
    { start: 117, end: 120, text: 'Устал — беги'},
    { start: 120, end: 122, text: 'Какие мы звёзды? (А?) Обычные парни'},
    { start: 122, end: 125, text: 'Люблю нашу квартиру, тут только кухня и спальня'},
    { start: 125, end: 127, text: 'Всего лишь одна комната, где рождаются парты (Wha`?)'},
    { start: 127, end: 130, text: 'И чудом потом видеть, что их приютили чарты'},
    { start: 130, end: 133, text: 'Главное не сдаться, не стать слишком сладким (Ага)'},
    { start: 133, end: 136, text: 'Даёшь людям тепло — они хотят, чтоб мы погасли'},
    { start: 136, end: 139, text: 'Надо верить в то, что впереди нас ждут яркие закаты (Пр-р)'},
    { start: 139, end: 142, text: 'Новые восходы, блядь, и жирные зарплаты'},
    { start: 142, end: 144, text: 'Всякие дизайнеры у меня есть разное'},
    { start: 144, end: 147, text: 'Надо попотеть ещё успеем отпраздновать (Wha`?)'},
    { start: 147, end: 150, text: 'Чё за контракты с лейблами колпачат подписанием?'},
    { start: 150, end: 152, text: 'Мне не нужен аванс, у меня всё нормально с бабками'},
    { start: 152, end: 155, text: 'Я вовремя выстрелил, всё нормально с таймингом'},
    { start: 155, end: 158, text: 'Всё нормально дом, у меня всё нормально с братьями'},
    { start: 158, end: 160, text: 'Больше не курю, ещё от этого в ахуе'},
    { start: 160, end: 163, text: 'Детские мечты, я путешествую с палатками'},
    { start: 163, end: 166, text: 'Я просто бы за то, чтобы все вокруг были счастливы'},
    { start: 166, end: 168, text: 'Спасибо за то, что раскрылся на записи'},
    { start: 168, end: 171, text: 'Люди, как всегда, не принимают твой успех, дог'},
    { start: 171, end: 174, text: 'Я зашёл в клуб и сразу внутри стало светло'},
    { start: 174, end: 176, text: '23 год, не знаю сколько стоит жетон'},
    { start: 176, end: 179, text: 'Но если что пройдусь с кайфом и на метро'},
    { start: 179, end: 182, text: 'Вписываю всех, у меня сто плюсов на клаб-шоу (Ха-ха-ха)'},
    { start: 182, end: 184, text: 'Ведь кварталы знают меня через что я прошёл (52)'},
    { start: 184, end: 187, text: 'Брат, тебя ждёт'},
    { start: 187, end: 191, text: 'Разве этот мир никогда не пах?'},
    { start: 191, end: 197, text: 'Любовью, а не порохом, хватит молчать'},
    { start: 197, end: 202, text: 'Разве это жизнь понимает нас?'},
    { start: 202, end: 209, text: 'То ли это мы должны её понимать?'},
    { start: 209, end: 214, text: 'Беги (Ты же любишь эти толпы)'},
    { start: 214, end: 220, text: 'Смотри (Строго в оба, помни это и)'},
    { start: 220, end: 225, text: 'Беги (Ты как море, люди — волны)'},
    { start: 225, end: 232, text: 'Смотри (Строго в оба, помни это и)'},
    { start: 232, end: 237, text: 'Беги, смотри'},
    { start: 237, end: 242, text: 'Беги, смотри'},
    { start: 242, end: 247, text: 'Беги, смотри'},
    { start: 247, end: 10000, text: 'Беги, смотри'},
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