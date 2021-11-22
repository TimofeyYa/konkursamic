window.addEventListener('DOMContentLoaded', ()=>{
    // Появления шаров

    const firstscreen__shar = document.querySelectorAll('.firstscreen__shar');
    setTimeout(()=>{
        firstscreen__shar.forEach((el,index) => {
            setTimeout(()=>{
                el.classList.remove('firstscreen__sharAnimate1');
                el.classList.remove('firstscreen__sharAnimate2');
            }, 150*index);
        });
    }, 350)
    
})