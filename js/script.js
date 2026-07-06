const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.home, .home nav, .home .main .main-text h1, .home .main .main-text h3, .home .main .main-text .buttons, .home .main .image img, .about-us .main-text h1, .about-us .main .image img, .about-us .main .text h3, .about-us .main .text .line, .services .main-text h1, .services .box-container .box, .price .main-text h1, .price .box-container .box, .contacts .main-text h1, .contacts .main .content .text h3, .contacts .main .image img, .contacts .social-medias a, .footer').forEach(el => {
  observer.observe(el);
});