document.addEventListener("DOMContentLoaded", () => {
    // Obtener elementos del menú
    const menuItems = document.querySelectorAll("#menu li a");

    // Agregar interacción a los enlaces
    menuItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            // Animación de cambio
            const content = document.querySelector(".main-content");
            content.style.opacity = 0;

            setTimeout(() => {
                content.style.opacity = 1;
                content.innerHTML = `<h2>${item.textContent}</h2><p>Esta es una vista previa de la página ${item.textContent}. Pronto estará disponible más contenido.</p>`;
            }, 300);
        });
    });
});
