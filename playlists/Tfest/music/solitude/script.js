document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 183;

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
            window.location.replace('../odno/index.html');
       } 
    }

    function moveAudioToEnd() {
        window.location.replace('../nebeskonechno/index.html');
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
    { start: 19, end: 22, text: 'Я хотел быть, но не смог попасть'},
    { start: 22, end: 24, text: 'Весь свой день заливаю в стакан'},
    { start: 24, end: 26, text: 'Ты с ним спишь наверняка'},
    { start: 26, end: 29, text: 'Ты знаешь, я сплю с ней тоже, раз так'},
    { start: 29, end: 31, text: 'Её помада на моих руках'},
    { start: 31, end: 33, text: 'Его духи на тебе — вторяк'},
    { start: 33, end: 36, text: 'Ты ищешь мой запах, залетаешь на бар'},
    { start: 36, end: 38, text: 'Я сплю с ней — представляю тебя'},
    { start: 38, end: 41, text: 'О, мама'},
    { start: 41, end: 43, text: 'Я пою тебе во снах'},
    { start: 43, end: 46, text: 'В своих грязных и конченых снах'},
    { start: 46, end: 48, text: 'Сплю с ней — представляю тебя (О, мама)'},
    { start: 48, end: 51, text: 'Я проебал нашу любовь (Эй, sorry)'},
    { start: 51, end: 53, text: 'Так же случайно, как мы встретились в моей гримёрке'},
    { start: 53, end: 55, text: 'Я пропал, вот и всё (Я пропал, но)'},
    { start: 55, end: 58, text: 'Ты спрашивала Где я?, вот и всё (Чё это за тип?)'},
    { start: 58, end: 60, text: 'Мне пиздец не нравилось, что тебя знают все'},
    { start: 60, end: 63, text: 'Кто-то исподтишка снял нас, я не знаю где'},
    { start: 63, end: 65, text: 'Тебе в директ писали все, ждали твой ответ'},
    { start: 65, end: 67, text: 'Но мы лежали с тобой просто в темноте (Е)'},
    { start: 67, end: 69, text: 'Мир не узнает об этом (Мир не узнает об этом)'},
    { start: 69, end: 72, text: 'Я не узнаю, с кем ты спишь этим летом (О, мама)'},
    { start: 72, end: 75, text: 'Как ты не знала, почему я перестал отвечать'},
    { start: 75, end: 77, text: 'Я так хотел к тебе всем сердцем'},
    { start: 77, end: 79, text: 'Я хотел быть, но не смог попасть'},
    { start: 79, end: 82, text: 'Весь свой день заливаю в стакан'},
    { start: 82, end: 84, text: 'Ты с ним спишь наверняка'},
    { start: 84, end: 86, text: 'Ты знаешь, я сплю с ней тоже, раз так'},
    { start: 86, end: 89, text: 'Её помада на моих руках'},
    { start: 89, end: 91, text: 'Его духи на тебе — вторяк'},
    { start: 91, end: 94, text: 'Ты ищешь мой запах, залетаешь на бар'},
    { start: 94, end: 96, text: 'Я сплю с ней — представляю тебя'},
    { start: 96, end: 99, text: 'О, мама'},
    { start: 99, end: 101, text: 'Я пою тебе во снах'},
    { start: 101, end: 103, text: 'В своих грязных и конченых снах'},
    { start: 103, end: 106, text: 'Сплю с ней — представляю тебя'},
    { start: 106, end: 108, text: 'Я пою тебе во снах (О, мама)'},
    { start: 108, end: 111, text: 'Я пою тебе во снах (О, мама)'},
    { start: 111, end: 113, text: 'Я пою тебе во снах (О, мама)'},
    { start: 113, end: 118, text: 'Сплю с ней — представляю тебя (Представляю тебя)'},
    { start: 118, end: 118, text: 'О, мама'},
    { start: 118, end: 120, text: 'Я пою тебе во снах (О, мама)'},
    { start: 120, end: 123, text: 'Я пою тебе во снах (О, мама)'},
    { start: 123, end: 128, text: 'О, мама'},
    { start: 128, end: 130, text: 'Я пою тебе во снах (О, мама)'},
    { start: 130, end: 132, text: 'Я пою тебе во снах (О, мама)'},
    { start: 132, end: 138, text: 'О, мама'},
    { start: 138, end: 147, text: '(Ха-ха-ха-ха-ха)'},
    { start: 147, end: 154, text: 'О, мама'},
    { start: 154, end: 156, text: 'Я хотел быть, но не смог попасть'},
    { start: 156, end: 158, text: 'Весь свой день заливаю в стакан'},
    { start: 158, end: 161, text: 'Ты с ним спишь наверняка'},
    { start: 161, end: 163, text: 'Ты знаешь, я сплю с ней тоже, раз так'},
    { start: 163, end: 166, text: 'Её помада на моих руках'},
    { start: 166, end: 168, text: 'Его духи на тебе — вторяк'},
    { start: 168, end: 170, text: 'Ты ищешь мой запах, залетаешь на бар'},
    { start: 170, end: 173, text: 'Я сплю с ней — представляю тебя'},
    { start: 173, end: 10000, text: 'О, мама (Ха-ха'},

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