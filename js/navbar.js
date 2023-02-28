const menu = document.querySelectorAll('.nav-item a[href^="#"]');
const observer = new IntersectionObserver((entires) => {
    entires.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav-item a[href^="#${id}"]`);
        if(entry.isIntersecting)
        {
            document.querySelector(".nav-item a.activo").classList.remove("activo");
            menuLink.classList.add("activo");
        }
    })
},{rootMargin: "-50% 0px -50% 0px"})
menu.forEach(menuLink => {
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);

    if(target)
    {
        observer.observe(target);
    }
});