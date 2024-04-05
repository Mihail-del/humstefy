document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 279;

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
            window.location.replace('../krasota/index.html');
       } 
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


const audio = document.getElementById('audio-player');
const body = document.body;


function moveAudioToEnd() {
        window.location.replace('../solitude/index.html');
    }

document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio-player');
  const cover = document.getElementById('cover-img');
    audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= 210) {
          document.body.style.background = "linear-gradient(#052241, #1f1a1a)";
          cover.style.boxShadow = "0px 0px 75px 15px rgba(255,255,255,0.4)";
          cover.style.animation = "blindcover 3s infinite";
          cover.style.filter = "hue-rotate(-160deg)";
        } else {
          document.body.style.background = "linear-gradient(#52170d, #1f1a1a)";
          cover.style.boxShadow = "0px 0px 25px 5px rgba(255,255,255,0.2)";
          cover.style.animation = "none";
          cover.style.filter = "hue-rotate(0deg)";
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const lyricsContainer = document.getElementById('lyric-card');
  const audio = document.getElementById('audio-player');

  // Replace this with your JSON data of lyrics with start and end timecodes
  const lyricsData = [
    { start: 15, end: 18, text: 'Я бы улыбнулся, но нету ведь повода'},
    { start: 18, end: 22, text: 'Я пью вино, смотрю на тучи, мне так холодно'},
    { start: 22, end: 25, text: 'Звонит телефон, но я не знаю номера'},
    { start: 25, end: 28, text: 'Мне тупо наплевать, я не верю ни капли вам'},
    { start: 28, end: 31, text: 'Они так хотят, чтобы сделал хоть что-то я'},
    { start: 31, end: 35, text: 'Они так хотят быть поближе ко мне всегда'},
    { start: 35, end: 38, text: 'Суки наблюдают и палят нас, как радар'},
    { start: 38, end: 42, text: 'Но я не верю вам'},
    { start: 42, end: 45, text: 'Ведь они хотят моё имя, но улетают так мимо'},
    { start: 45, end: 48, text: 'Суки шипят так игриво'},
    { start: 48, end: 50, text: 'Но ты не бутля из-под вина'},
    { start: 50, end: 54, text: 'Эта барышня-малая, сука, хочет в облака'},
    { start: 54, end: 57, text: 'Она думает, что pussy правят миром'},
    { start: 57, end: 61, text: 'Но ей за деньги-деньги-деньги говорят: "Спасибо"'},
    { start: 61, end: 64, text: 'Убогая походка, но на каблах стильных'},
    { start: 64, end: 68, text: 'Я такой простой, что не ебу таких красивых'},
    { start: 68, end: 71, text: 'Эй, Лейла, я молодой'},
    { start: 71, end: 74, text: 'Мы, как hi-tech внутри старых домов'},
    { start: 74, end: 77, text: 'Я всегда так добр, но для вас я плохой'},
    { start: 77, end: 80, text: 'Не ходи за мной, yeah'},
    { start: 80, end: 84, text: 'Одно, одно я знал'},
    { start: 84, end: 87, text: 'Одно, я прав'},
    { start: 87, end: 90, text: 'Одно, одно я знал'},
    { start: 90, end: 94, text: 'Я прав, я прав'},
    { start: 94, end: 110, text: 'Так много, мир полон'},
    { start: 110, end: 113, text: 'Тех дев, что хотят'},
    { start: 113, end: 118, text: 'Быть ближе, поближе'},
    { start: 118, end: 120, text: 'Сколько ещё таких будет?'},
    { start: 120, end: 122, text: 'И пусть не птичка, но Вуди'},
    { start: 122, end: 124, text: 'И да, мы танцуем-танцуем, разносим мой город'},
    { start: 124, end: 125, text: 'Мы крутим, как узел'},
    { start: 125, end: 128, text: 'Это чувство голода не даёт мне засыпать'},
    { start: 128, end: 133, text: 'Я смотрел сам на себя и кровь залила мне глаза'},
    { start: 133, end: 135, text: 'она думает, что pussy правят миром'},
    { start: 135, end: 139, text: 'Но я не верю в эту чушь, и ты прости, так вышло (мне похуй!)'},
    { start: 139, end: 142, text: 'Я один, но нас таких тут сотни тысяч'},
    { start: 142, end: 159, text: 'Я не трачу время, во мне так много амбиций'},
    { start: 159, end: 162, text: 'Так много, мир полон'},
    { start: 162, end: 166, text: 'Тех дев, что хотят'},
    { start: 166, end: 192, text: 'Быть ближе, поближе'},
    { start: 192, end: 194, text: 'Я всегда получаю то, что я хочу'},
    { start: 194, end: 196, text: 'Без исключения'},
    { start: 196, end: 198, text: 'Всему своё время и место'},
    { start: 198, end: 202, text: 'Да, знаю, что-то может пойти не так, но... ха-ха-ха'},
    { start: 202, end: 206, text: 'Всё будет нормально'},
    { start: 206, end: 211, text: 'Сделай глубокий вдох'},
    { start: 211, end: 214, text: 'Снова мой день — ночь'},
    { start: 214, end: 217, text: 'Помолчи, со мной стой'},
    { start: 217, end: 220, text: 'Куда летит мой голос?'},
    { start: 220, end: 224, text: 'Я замёрз тут, господ (боже мой)'},
    { start: 224, end: 227, text: 'Дай простоты (я хочу просто так)'},
    { start: 227, end: 230, text: 'Дай мне воды (я хочу космоса)'},
    { start: 230, end: 236, text: 'Дай мне хоть знак (глупости устав)'},
    { start: 236, end: 239, text: 'Один вдох, один выдох'},
    { start: 239, end: 244, text: 'Снова вдох, выдох'},
    { start: 244, end: 246, text: 'Сотни дверей на весь мир, да'},
    { start: 246, end: 10000, text: 'И где-то есть точно мой выход, yea'},

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