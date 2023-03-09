function ImageSwap(imageSrc, dataCard){
    
    document.querySelector('.' + dataCard).src = imageSrc;

}
const menuLinks = document.querySelectorAll('.content');
    menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        targetSection.scrollIntoView({
        behavior: 'smooth'
        });
      });
   });