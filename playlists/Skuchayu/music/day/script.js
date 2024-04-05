document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 159;

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
            window.location.replace('../kasanie/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../vbudapeshte/index.html');
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
    { start: 9, end: 14, text: 'Dem-demarcxx'},
    { start: 14, end: 17, text: 'Lawzy'},
    { start: 17, end: 20, text: 'Я, damn'},
    { start: 20, end: 22, text: 'Как ты можешь говорить такое? (такое)'},
    { start: 22, end: 25, text: 'Сколько мы знакомы, не даёшь покоя (не даёшь)'},
    { start: 25, end: 27, text: 'Ты клялась мне, что ты только моя (только моя)'},
    { start: 27, end: 29, text: 'У тебя новый тип, я его расстрою (а-а)'},
    { start: 29, end: 32, text: 'Ща зачитаю от души, тебя растрогаю (расчувствую)'},
    { start: 32, end: 34, text: 'Твоя пш-ш ещё больше, baby, дай потрогаю (эй)'},
    { start: 34, end: 36, text: 'Это твой новый тип? Ха (ты серьёзно?)'},
    { start: 36, end: 39, text: 'Это твой новый тип, baby, я таких шмоукаю'},
    { start: 39, end: 41, text: 'Возьму твою фотку, сделаю альбом и облогу (б-э)'},
    { start: 41, end: 44, text: 'Ты мне должна по жизни, baby, я тебя облагаю'},
    { start: 44, end: 46, text: 'Ты разрешала мне всё (всё) — не врубаюсь, трогаю'},
    { start: 46, end: 49, text: 'Вырубай это, вызывай скорую'},
    { start: 49, end: 51, text: 'Мы строили так долго (долго), но проебали скорую (да)'},
    { start: 51, end: 54, text: 'Ты ща счастливей меня, сука, должно же быть поровну! (воу)'},
    { start: 54, end: 56, text: 'Будто не стрельнул, всё так же хожу, ебланю по двору (пау-пау)'},
    { start: 56, end: 59, text: 'Это твой новый тип, он ща получит по еблу (п-а)'},
    { start: 59, end: 62, text: 'В такси по запотевшему окну, я'},
    { start: 62, end: 64, text: 'Я нарисую слово хуй, я нарисую не могу'},
    { start: 64, end: 66, text: 'Я нарисую без тебя'},
    { start: 66, end: 69, text: 'Я не понимаю, с хуёв выбрала тебя она?'},
    { start: 69, end: 71, text: 'Я бухой без вина — вся твоя вина'},
    { start: 71, end: 74, text: 'Мне сложней любить, чем что-то потерять'},
    { start: 74, end: 76, text: 'Мне легче забить, чем что-то поменять (у, е)'},
    { start: 76, end: 80, text: 'Кстати, твой новый — тоже мой fen (кайф)'},
    { start: 80, end: 83, text: 'Я думал о тебе, дура, слышал, ты села на fen (damn)'},
    { start: 83, end: 85, text: 'Она хотела сказку приключений из Disney'},
    { start: 85, end: 89, text: 'Но вспомнила об этом, лишь когда лицо онемело'},
    { start: 89, end: 93, text: '(Я) baby, это смело (е), но как ты посмела? (нахуя?)'},
    { start: 93, end: 96, text: 'Baby, ты так непоследовательна (не-а)'},
    { start: 96, end: 97, text: 'Двигаешься так непосле'},
    { start: 97, end: 99, text: 'Я отменяю и не буду догонять'},
    { start: 99, end: 102, text: 'Всё так заебало, но мне лень чё-то менять'},
    { start: 102, end: 104, text: 'Ты не разрешала мне, но была не против'},
    { start: 104, end: 107, text: 'Не могу жить без тебя, но, зай, мне нужен отдых (да)'},
    { start: 107, end: 109, text: 'Её комната набита шариками'},
    { start: 109, end: 112, text: 'Они красивые такие, но почему-то не летают'},
    { start: 112, end: 114, text: 'Она смотрит на меня своими глазиками'},
    { start: 114, end: 118, text: 'Они чёрные, а раньше были карие'},
    { start: 118, end: 120, text: 'деньги рыжие, как карри, е'},
    { start: 120, end: 122, text: 'Малыш, все эти песни о тебе, но денег ради, е'},
    { start: 122, end: 124, text: 'Боюсь ножа в спину, ведь все эти эмси сзади (ах)'},
    { start: 124, end: 127, text: 'Пиздец, как раскачался, я не был три года в зале (е, nah`)'},
    { start: 127, end: 129, text: 'Не хочешь отсосать мне прям ща? Было б очень кстати (please)'},
    { start: 129, end: 132, text: 'Порчу лиричный тречок своей грязью назло ей (бесит)'},
    { start: 132, end: 134, text: 'Pop-звезда — отель пять звёзд, а меня тянет в падик, эй (я)'},
    { start: 134, end: 137, text: 'Слава Богу, что я не уебан, как твой парень, эй'},
    { start: 137, end: 140, text: 'Как ты можешь говорить такое? (такое)'},
    { start: 140, end: 143, text: 'Сколько мы знакомы, не даёшь покоя (не даёшь)'},
    { start: 143, end: 144, text: 'Ты клялась мне, что ты только моя (только моя)'},
    { start: 144, end: 147, text: 'У тебя новый тип, я его расстрою (а-а)'},
    { start: 147, end: 149, text: 'Ща зачитаю от души, тебя растрогаю (расчувствую)'},
    { start: 149, end: 152, text: 'Твоя пш-ш ещё больше, baby, дай потрогаю (эй)'},
    { start: 152, end: 154, text: 'Это твой новый тип? Ха (ты серьёзно?)'},
    { start: 154, end: 10000, text: 'Это твой новый тип, baby, я таких smoke`аю (пау)'},

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