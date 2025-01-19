function scrollToElement(elementSelector, instance = 0){
    //select all elemnts that match the given selector
    const elements = document.querySelectorAll(elementSelector)
    //Check if there are elements matching the selector and if the requires 
    if(elements.length > instance){
        //Scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth'})
    }
} 

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    //Scroll to the second element with "header" class
    scrollToElement('.header', 1);
    });


link3.addEventListener('click', () =>{
        scrollToElement('.column');
        });

        function seleccionar(enlace) {
            // Remover la clase activa de todos los enlaces
            const enlaces = document.querySelectorAll("a");
            enlaces.forEach((item) => item.classList.remove("activo"));
          
            // Añadir la clase activa al enlace clicado
            enlace.classList.add("activo");
          }

          document.addEventListener("DOMContentLoaded", () => {
            const enlaces = document.querySelectorAll(".nav-links a");
          
            enlaces.forEach((enlace) => {
              enlace.addEventListener("click", () => {
                // Remover la clase 'activo' de todos los enlaces
                enlaces.forEach((link) => link.classList.remove("activo"));
          
                // Agregar la clase 'activo' al enlace clicado
                enlace.classList.add("activo");
              });
            });
          });
          