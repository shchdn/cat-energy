(function(){
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    function onToggleClick () {
        toggle.classList.toggle('menu-toggle--active')
        nav.classList.toggle('main-nav--opened')
    }
    nav.classList.remove('main-nav--no-js')
    toggle.addEventListener('click', onToggleClick);
    // console.log('test');
})()