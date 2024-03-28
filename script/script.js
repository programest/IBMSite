const videoContainers = document.querySelectorAll(".video-container");

videoContainers.forEach(videoContainer => {
    const video = videoContainer.querySelector("video");
    const controls = videoContainer.querySelector('.video-controls-container');
    const BG = videoContainer.querySelector('.BG');
    const playBtn = videoContainer.querySelector('.playBtn');
    const playPauseBtn = videoContainer.querySelector(".play-pause-btn");
    const theaterBtn = videoContainer.querySelector(".theater-btn");
    const fullScreenBtn = videoContainer.querySelector(".full-screen-btn");
    const miniPlayerBtn = videoContainer.querySelector(".mini-player-btn");
    const muteBtn = videoContainer.querySelector(".mute-btn");
    const captionsBtn = videoContainer.querySelector(".captions-btn");
    const speedBtn = videoContainer.querySelector(".speed-btn");
    const currentTimeElem = videoContainer.querySelector(".current-time");
    const totalTimeElem = videoContainer.querySelector(".total-time");
    const previewImg = videoContainer.querySelector(".preview-img");
    const thumbnailImg = videoContainer.querySelector(".thumbnail-img");
    const volumeSlider = videoContainer.querySelector(".volume-slider");
    const timelineContainer = videoContainer.querySelector(".timeline-container");

                playBtn.addEventListener('click' , () => {
                    BG.style.display = 'none';
                    video.play()
                    controls.style.display = 'block';
                    playBtn.style.display = 'none';
                })
                document.addEventListener("keydown", e => {
                const tagName = document.activeElement.tagName.toLowerCase()

                if (tagName === "input") return

                switch (e.key.toLowerCase()) {
                    case " ":
                    if (tagName === "button") return
                    case "k":
                    togglePlay()
                    break
                    case "f":
                    toggleFullScreenMode()
                    break
                    case "t":
                    toggleTheaterMode()
                    break
                    case "i":
                    toggleMiniPlayerMode()
                    break
                    case "m":
                    toggleMute()
                    break
                    case "arrowleft":
                    case "j":
                    skip(-5)
                    break
                    case "arrowright":
                    case "l":
                    skip(5)
                    break
                    case "c":
                    toggleCaptions()
                    break
                }
                })

                // Timeline
                timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
                timelineContainer.addEventListener("mousedown", toggleScrubbing)
                document.addEventListener("mouseup", e => {
                if (isScrubbing) toggleScrubbing(e)
                })
                document.addEventListener("mousemove", e => {
                if (isScrubbing) handleTimelineUpdate(e)
                })

                let isScrubbing = false
                let wasPaused
                function toggleScrubbing(e) {
                const rect = timelineContainer.getBoundingClientRect()
                const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
                isScrubbing = (e.buttons & 1) === 1
                videoContainer.classList.toggle("scrubbing", isScrubbing)
                if (isScrubbing) {
                    wasPaused = video.paused
                    video.pause()
                } else {
                    video.currentTime = percent * video.duration
                    if (!wasPaused) video.play()
                }

                handleTimelineUpdate(e)
                }

                function handleTimelineUpdate(e) {
                const rect = timelineContainer.getBoundingClientRect()
                const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
                const previewImgNumber = Math.max(
                    1,
                    Math.floor((percent * video.duration) / 10)
                )
                const previewImgSrc = `./assets/img/img_playlist.png`
                previewImg.src = previewImgSrc
                timelineContainer.style.setProperty("--preview-position", percent)

                if (isScrubbing) {
                    e.preventDefault()
                    thumbnailImg.src = previewImgSrc
                    timelineContainer.style.setProperty("--progress-position", percent)
                }
                }

                // Playback Speed
                speedBtn.addEventListener("click", changePlaybackSpeed)

                function changePlaybackSpeed() {
                let newPlaybackRate = video.playbackRate + 0.25
                if (newPlaybackRate > 2) newPlaybackRate = 0.25
                video.playbackRate = newPlaybackRate
                speedBtn.textContent = `${newPlaybackRate}x`
                }

                // Captions
                const captions = video.textTracks[0]
                captions.mode = "hidden"

                captionsBtn.addEventListener("click", toggleCaptions)

                function toggleCaptions() {
                const isHidden = captions.mode === "hidden"
                captions.mode = isHidden ? "showing" : "hidden"
                videoContainer.classList.toggle("captions", isHidden)
                }

                // Duration
                video.addEventListener("loadeddata", () => {
                totalTimeElem.textContent = formatDuration(video.duration)
                })

                video.addEventListener("timeupdate", () => {
                currentTimeElem.textContent = formatDuration(video.currentTime)
                const percent = video.currentTime / video.duration
                timelineContainer.style.setProperty("--progress-position", percent)
                })

                const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
                minimumIntegerDigits: 2,
                })
                function formatDuration(time) {
                const seconds = Math.floor(time % 60)
                const minutes = Math.floor(time / 60) % 60
                const hours = Math.floor(time / 3600)
                if (hours === 0) {
                    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
                } else {
                    return `${hours}:${leadingZeroFormatter.format(
                    minutes
                    )}:${leadingZeroFormatter.format(seconds)}`
                }
                }

                function skip(duration) {
                video.currentTime += duration
                }

                // Volume
                muteBtn.addEventListener("click", toggleMute)
                volumeSlider.addEventListener("input", e => {
                video.volume = e.target.value
                video.muted = e.target.value === 0
                })

                function toggleMute() {
                video.muted = !video.muted
                }

                video.addEventListener("volumechange", () => {
                volumeSlider.value = video.volume
                let volumeLevel
                if (video.muted || video.volume === 0) {
                    volumeSlider.value = 0
                    volumeLevel = "muted"
                } else if (video.volume >= 0.5) {
                    volumeLevel = "high"
                } else {
                    volumeLevel = "low"
                }

                videoContainer.dataset.volumeLevel = volumeLevel
                })

                // View Modes
                theaterBtn.addEventListener("click", toggleTheaterMode)
                fullScreenBtn.addEventListener("click", toggleFullScreenMode)
                miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)

                function toggleTheaterMode() {
                videoContainer.classList.toggle("theater")
                }

                function toggleFullScreenMode() {
                if (document.fullscreenElement == null) {
                    videoContainer.requestFullscreen()
                } else {
                    document.exitFullscreen()
                }
                }

                function toggleMiniPlayerMode() {
                if (videoContainer.classList.contains("mini-player")) {
                    document.exitPictureInPicture()
                } else {
                    video.requestPictureInPicture()
                }
                }

                document.addEventListener("fullscreenchange", () => {
                videoContainer.classList.toggle("full-screen", document.fullscreenElement)
                })

                video.addEventListener("enterpictureinpicture", () => {
                videoContainer.classList.add("mini-player")
                })

                video.addEventListener("leavepictureinpicture", () => {
                videoContainer.classList.remove("mini-player")
                })

                // Play/Pause
                playPauseBtn.addEventListener("click", togglePlay)
                video.addEventListener("click", togglePlay)

                function togglePlay() {
                video.paused ? video.play() : video.pause()
                }

                video.addEventListener("play", () => {
                videoContainer.classList.remove("paused")
                })

                video.addEventListener("pause", () => {
                videoContainer.classList.add("paused")
                })

})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


const container = document.querySelector('.horizontal-scroll-container');
const content = document.querySelector('.horizontal-scroll-content');

// Копируем контент
content.innerHTML += content.innerHTML;

// Функция для прокрутки
function scrollContent() {
  if (container.scrollLeft >= content.offsetWidth / 2) {
    container.scrollLeft = 0;
  } else {
    container.scrollLeft++;
  }
}

// Устанавливаем интервал прокрутки
setInterval(scrollContent, 30); 