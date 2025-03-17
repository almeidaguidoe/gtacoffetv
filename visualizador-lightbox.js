const galeriaImagenes = document.querySelectorAll('.galeria__imagen');
const galeriaContainerImg = document.querySelector('.galeria__container-img');
const galeriaImgShow = document.querySelector('.galeria__img-show');
const galeriaImgCopy = document.querySelector('.galeria__copy');

galeriaImagenes.forEach(img => {
    img.addEventListener('click', ()=>{
        
        galeriaAgregarImg(img.getAttribute('src'), img.getAttribute('alt'));
    })
})

const galeriaAgregarImg = (srcImg, altImg)=>{
    galeriaContainerImg.classList.toggle('galeria__img-move');
    galeriaImgShow.classList.toggle('galeria__mostrar-img');
    galeriaImgShow.src = srcImg;
    galeriaImgCopy.innerHTML = altImg;
}

galeriaContainerImg.addEventListener('click', ()=>{
    galeriaContainerImg.classList.toggle('galeria__img-move');
    galeriaImgShow.classList.toggle('galeria__mostrar-img');
});