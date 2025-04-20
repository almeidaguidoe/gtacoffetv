/* ------- REPRODUCTOR DE MUSICA SINGLE ----------- */

document.querySelectorAll('.reproductor-musica-single').forEach(repr => {
    const audio = repr.querySelector('.rep-musica__audio');
    const botonPlayPause = repr.querySelector('.rep-musica__boton-play-pause');
    const iconoPlayPause = repr.querySelector('.rep-musica__icono-play-pause');
    const barraProgreso = repr.querySelector('.rep-musica__barra-progreso');

    //Función para pausar audio y cambiar icono de play/pause cuando se reproduce otro audio
    function resetearOtrosReproductores() {
        document.querySelectorAll('.reproductor-musica-single').forEach(otroRep => {
            if (otroRep !== repr) {
                const otroAudio = otroRep.querySelector('.rep-musica__audio');
                const otroIconoPlayPause = otroRep.querySelector('.rep-musica__icono-play-pause');

                otroAudio.pause();
                otroIconoPlayPause.classList.remove('fa-pause');
                otroIconoPlayPause.classList.add('fa-play');
            }    
        });
    }

    //Botón play/pause: reproducir y pausar audio, cambiar iconos de play/pause
    botonPlayPause.addEventListener('click', () => {
        if (audio.paused) {
            resetearOtrosReproductores();
            audio.play();
            iconoPlayPause.classList.remove('fa-play');
            iconoPlayPause.classList.add('fa-pause');
        } else {
            audio.pause();
            iconoPlayPause.classList.remove('fa-pause');
            iconoPlayPause.classList.add('fa-play');
        }
    });

    //Actualización de la barra de progreso
    audio.addEventListener('timeupdate', () => {
        barraProgreso.value = (audio.currentTime / audio.duration) * 100;
    });

    //Cambiar posición del audio con la barra de progreso
    barraProgreso.addEventListener('input', () => {
        audio.currentTime = (barraProgreso.value / 100) * audio.duration;
    });

    //Cuando el audio termine, resetear el botón
    audio.addEventListener('ended', () => {
        iconoPlayPause.classList.remove('fa-pause');
        iconoPlayPause.classList.add('fa-play');
        barraProgreso.value = 0;
    });

}); //cierra el forEach