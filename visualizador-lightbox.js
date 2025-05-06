const galeriaImagenes = document.querySelectorAll('.galeria__imagen');
const galeriaContainerImg = document.querySelector('.galeria__container-img');
const visualizadorImgShow = document.querySelector('.galeria__img-show');
const visualizadorCopy = document.querySelector('.galeria__copy');
const visualizadorIconoCerrar = document.querySelector('.vis-img__icono-cerrar');
const visualizadorFlechaIzq = document.querySelector('.galeria__flecha-izq');
const visualizadorFlechaDer = document.querySelector('.galeria__flecha-der');

let grupoActual = '';
let imagenesGrupo = [];
let indiceActual = 0;

galeriaImagenes.forEach(img => {
    img.addEventListener('click', ()=>{
        //toma el nombre del grupo que pusimos en "data-grupo" en el HTML
        grupoActual = img.dataset.grupo; 
        //forma un array con todos los elementos que tengan la clase "galeria__imagen" 
        // y además que tengan como data-grupo lo mismo que la imagen clickeada
        imagenesGrupo = Array.from(document.querySelectorAll(`.galeria__imagen[data-grupo="${grupoActual}"]`));
        indiceActual = imagenesGrupo.indexOf(img);
        
        mostrarImagenActual();
        galeriaContainerImg.classList.add('galeria__img-move');
        visualizadorImgShow.classList.add('galeria__mostrar-img');
    });
});

const mostrarImagenActual = () => {
    const img = imagenesGrupo[indiceActual];
    const srcAlta = img.src.replace('_mini', '');
    visualizadorImgShow.src = srcAlta;
    visualizadorCopy.innerText = img.alt;
};

visualizadorFlechaIzq.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenesGrupo.length) % imagenesGrupo.length;
    mostrarImagenActual();
});

visualizadorFlechaDer.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenesGrupo.length;
    mostrarImagenActual();
});

visualizadorIconoCerrar.addEventListener('click', ()=>{
    galeriaContainerImg.classList.remove('galeria__img-move');
    visualizadorImgShow.classList.remove('galeria__mostrar-img');
});
