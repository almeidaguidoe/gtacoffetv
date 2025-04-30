document.querySelectorAll('.rep-videos__contenedor').forEach(repr => {
    const video = repr.querySelector('.rep-videos__visualizador');
    const botonPlayPause = repr.querySelector('.rep-videos__boton-play-pause');
    const iconoPlayPause = repr.querySelector('.rep-videos__icono-play-pause')
    const barraProgreso = repr.querySelector('.rep-videos__barra-progreso');
    const botonMute = repr.querySelector('.rep-videos__boton-mute');
    const iconoBotonMute = repr.querySelector('.rep-videos__icono-mute');
    const botonFullscreen = repr.querySelector('.rep-videos__boton-fullscreen');
    const contenedorControles = repr.querySelector('.rep-videos__controles');

    let videoCargado = false;

    //Función para pausar el video y cambiar el icono de play/pause cuando se reproduce otro video
    function resetearOtrosReproductoresVideo() {
        document.querySelectorAll('.rep-videos__contenedor').forEach(otroRep => {
            if (otroRep !== repr) {
                const otroVideo = otroRep.querySelector('.rep-videos__visualizador');
                const otroIconoPlayPause = otroRep.querySelector('.rep-videos__icono-play-pause');
                const otroContenedorControles = otroRep.querySelector('.rep-videos__controles');

                otroVideo.pause();
                otroIconoPlayPause.classList.remove('fa-pause');
                otroIconoPlayPause.classList.add('fa-play');
                otroContenedorControles.classList.remove('oculto');
            }
        });
    }

    
    //Botón play/pause: reproducir y pausar video, cambiar iconos de play/pause
    botonPlayPause.addEventListener('click', () => {

        const source = video.querySelector('source');
        if (!videoCargado) {
            const realSrc = source.getAttribute('data-src');
            source.setAttribute('src', realSrc);
            video.load();
            videoCargado = true;
        }

        if (video.paused) {
            resetearOtrosReproductoresVideo()
            video.play();
            iconoPlayPause.classList.remove('fa-play');
            iconoPlayPause.classList.add('fa-pause');
        } else {
            video.pause();
            iconoPlayPause.classList.remove('fa-pause');
            iconoPlayPause.classList.add('fa-play');
        }
    });

    //Actualización de la barra de progreso
    video.addEventListener('timeupdate', () => {
        barraProgreso.value = (video.currentTime / video.duration) * 100;
    });

    //Cambiar la posición del video con la barra de progreso
    barraProgreso.addEventListener('input', () => {
        if (isFinite(video.duration)) { //me aseguro que el valor de video.duration sea un valor válido
            video.currentTime = (barraProgreso.value / 100) * video.duration;
        }
    });

    //Botón de mute: mutear el audio y cambiar el icono
    botonMute.addEventListener('click', () => {
        if (video.muted) {
            iconoBotonMute.classList.remove('fa-volume-xmark');
            iconoBotonMute.classList.add('fa-volume-high')
        } else {
            iconoBotonMute.classList.remove('fa-volume-high');
            iconoBotonMute.classList.add('fa-volume-xmark');
        }
        video.muted = !video.muted;
    });

    //Boton de fullscreen
    botonFullscreen.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });

    //Cuando el video termine, resetear los botones
    video.addEventListener('ended', () => {
        iconoPlayPause.classList.remove('fa-pause');
        iconoPlayPause.classList.add('fa-play');
        barraProgreso.value = 0;
    })

    //Cuando reproduzca el video, oculta los controles, pero los muestra cuando haga hover
    repr.addEventListener('mouseenter', () => {
        contenedorControles.classList.remove('oculto');
    });

    repr.addEventListener('mouseleave', () => {
        if (!video.paused) {
            contenedorControles.classList.add('oculto');
        }
    });
});
