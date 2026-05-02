// 
const productCards = document.querySelectorAll('.fleur');

productCards.forEach(card => {
  const priceTag = card.querySelector('.r');
  
  card.addEventListener('mouseenter', () => {
    priceTag.style.color = "#be072b";
    priceTag.style.fontWeight = "bold";
    priceTag.style.fontSize = "17px";
    priceTag.style.transition = "0.3s";
  });
  
  card.addEventListener('mouseleave', () => {
    priceTag.style.color = "palevioletred";
    priceTag.style.fontWeight = "normal";
    priceTag.style.fontSize = "15px";
  });
});


// footer

const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    const now = new Date(); 
    yearSpan.textContent = now.getFullYear();
}

const footerLinks = document.querySelectorAll('.footer-section a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.letterSpacing = "1px";
    });
    link.addEventListener('mouseleave', () => {
        link.style.letterSpacing = "0px";
    });
});


