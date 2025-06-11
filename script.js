document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.botao, .redes img');
  
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 300 + index * 150);
  });
});