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
            window.location.replace('../day/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../dlya/index.html');
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
    { start: 11, end: 16, text: 'Lawzy'},
    { start: 16, end: 22, text: 'Е, е, е, а-а'},
    { start: 22, end: 23, text: 'Wex on the beat'},
    { start: 23, end: 25, text: 'Перестал факаться с этими белыми'},
    { start: 25, end: 28, text: 'Вы перестали сказываться на настроении'},
    { start: 28, end: 30, text: 'И пацаны начали скатываться при отдалении (Пф-ф)'},
    { start: 30, end: 33, text: 'Ни вы, ни ваша музыка не прошли проверку времени'},
    { start: 33, end: 36, text: 'Малой, скажи спасибо за год хайпа, что у тебя был'},
    { start: 36, end: 39, text: 'Всё было бы заебись, был бы у нас второй фит'},
    { start: 39, end: 41, text: 'Самые бедные эмси вечно пиздят про профит'},
    { start: 41, end: 44, text: 'Большие деньги любят тишину, доверься профи'},
    { start: 44, end: 47, text: 'Я не альбом Лёхи SEEMEE, но в последнее время токсик'},
    { start: 47, end: 50, text: 'Самый дорогой и первый, бля, Lil Buda — коксик'},
    { start: 50, end: 53, text: 'Не как эти эмси, что вечно из ся кого-то корчит'},
    { start: 53, end: 55, text: 'И из-за образа не может быть собой, когда хочет'},
    { start: 55, end: 61, text: 'Беспонтово им, наверно, но нам этого не понять'},
    { start: 61, end: 64, text: 'В меня не верил весь мир, но «успех неизбежен» — всегда говорил брат'},
    { start: 64, end: 70, text: 'Нету пути назад'},
    { start: 70, end: 76, text: 'Плюс я словил азарт — видишь огонь в глазах'},
    { start: 76, end: 81, text: 'Еле держу в руках себя, чтоб не взорвать'},
    { start: 81, end: 84, text: 'Но русский рэп не впечатляет, и я взрываю опять'},
    { start: 84, end: 88, text: 'Зависимость кайфа с утра съедает, и я взрываю опять'},
    { start: 88, end: 91, text: 'На рэперов у меня реально злоба'},
    { start: 91, end: 93, text: 'Столько шансов дано (Пф-ф) — всё проёбано'},
    { start: 93, end: 96, text: 'Даже AEROFLOW уже переехало с «Сокола»'},
    { start: 96, end: 99, text: 'Пацаны, вы всё ещё не рэп — вы всё около'},
    { start: 99, end: 102, text: 'А на счету всё ещё не лям — там так же соточка'},
    { start: 102, end: 104, text: 'И в твоём косом нихуя не грамм — там просто полочка'},
    { start: 104, end: 107, text: 'Слушаешь меня втихаря — как же тебе хуёво ща'},
    { start: 107, end: 110, text: 'Знай, это меня радует, я улыбаюсь — скобочка'},
    { start: 110, end: 112, text: 'Без обид, бро'},
    { start: 112, end: 115, text: 'Эмси не обладает скиллом — изначально согласен на серебро'},
    { start: 115, end: 117, text: 'Я немного зазнался, но говорят, мне к лицу корона'},
    { start: 117, end: 121, text: 'Это «шесть утра в Будапеште», не «пять утра в Торонто»'},
    { start: 121, end: 123, text: 'Задаю тренды, на которые прыгают мои кумиры'},
    { start: 123, end: 126, text: 'Палю им демки на студийке, потом слышу треки в таком стиле'},
    { start: 126, end: 128, text: 'Я переслушал много рэпа, честно, недоволен сильно (Бэ-э)'},
    { start: 128, end: 131, text: 'Половина эмси — инвалиды, без обид Рем Дигге'},
    { start: 131, end: 134, text: 'OG Buda, Гриша Ляхов — одно и то же имя'},
    { start: 134, end: 137, text: 'Одна семья, RANDOM — то же самое, что «ДЫНЯ»'},
    { start: 137, end: 140, text: 'И то, что говорю в треках про этих ёбаных рэперов'},
    { start: 140, end: 145, text: 'Знаю, они говорят за спиной про меня'},
    { start: 145, end: 149, text: 'Е, е'},
    { start: 149, end: 152, text: '7-2 в здании'},
    { start: 152, end: 164, text: 'У, у, у'},
    { start: 164, end: 169, text: 'Йоу, йоу, йоу'},
    { start: 169, end: 172, text: 'Только мы вдвоём, а, а'},
    { start: 172, end: 10000, text: 'Только мы вдвоё'},
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