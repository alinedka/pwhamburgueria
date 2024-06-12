// Script para adicionar a classe 'active' ao link da página atual
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".content .list-menu li a");
    const currentPath = window.location.pathname;
    
    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
