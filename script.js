const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

windom.onload = function(){
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDataString('pt-BR');

    const elementoData = document.getElementByld('data');
    if (elementoData) {
        elementoData.innerText = "Data atual: " + dataFormatada;
    }
};
