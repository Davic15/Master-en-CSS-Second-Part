document.addEventListener('DOMContentLoaded', (event) => {
    let mobile_btn = document.querySelector('.navbar__mobile-btn');
    let mobile_menu = document.querySelector('.menu-mobile');
    let btn_close = document.querySelector('.menu-mobile__close');
    let menu_item = document.querySelectorAll('.menu-mobile__item');

    const showHiddenMenu = () => {
        let show = document.querySelector('.menu-mobile--show');
        if (show) {
            mobile_menu.classList.remove('menu-mobile--show');
        } else {
            mobile_menu.classList.add('menu-mobile--show');
        }
    }

    // Open menu
    mobile_btn.addEventListener('click', showHiddenMenu);

    // Close the menu
    btn_close.addEventListener('click', showHiddenMenu);

    // Resize window and close the menu
    window.addEventListener('resize', () => {
        console.log('....')
        let window_width = parseInt(document.body.clientWidth);
        if (window_width >= 1000) {
            mobile_menu.classList.remove('menu-mobile--show');
        }
    });

    // show submenu
    menu_item.forEach(item => {

        item.addEventListener('click', (event) => {
           let submenu = item.lastElementChild;
            console.log(submenu)
           if(submenu.className === 'menu-mobile__submenu-mobile') {
               if(submenu.style.display === 'block') {
                   submenu.style.display = 'none';
               } else {
                   submenu.style.display = 'block';
               }
           }
        });
    })

})