// ================= MENU =================

const menuItems = document.querySelectorAll('.menu-item');
const notification = document.querySelector('#notification');

const notificationPopup =
    notification?.querySelector('.notification-popup');

const notificationCount =
    document.querySelector('#notification .notification-count');

// remove active class
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

// menu click
menuItems.forEach(item => {
    item.addEventListener('click', () => {

        changeActiveItem();
        item.classList.add('active');

        if (item.id !== 'notification') {
            if(notificationPopup){
                notificationPopup.style.display = 'none';
            }
        } else {
            if(notificationPopup){
                notificationPopup.style.display = 'block';
            }

            if(notificationCount){
                notificationCount.style.display = 'none';
            }
        }
    });
});


// ================= MESSAGE =================

const messageNotification =
    document.querySelector('#message-notification');

const messages =
    document.querySelector('.messages');

if(messageNotification && messages){

    messageNotification.addEventListener('click', () => {

        messages.style.boxShadow =
            '0 0 1rem var(--color-primary)';

        const count =
            messageNotification.querySelector('.notification-count');

        if(count){
            count.style.display = 'none';
        }

        setTimeout(() => {
            messages.style.boxShadow = 'none';
        }, 2000);
    });
}


// ================= SEARCH CHAT =================

const messageSearch =
    document.querySelector('#message-search');

const message =
    document.querySelectorAll('.message');

if(messageSearch){

    messageSearch.addEventListener('keyup', () => {

        const searchTerm =
            messageSearch.value.toLowerCase();

        message.forEach(msg => {

            const name =
                msg.querySelector('h5')
                .textContent
                .toLowerCase();

            if(name.includes(searchTerm)){
                msg.style.display = 'flex';
            } else {
                msg.style.display = 'none';
            }
        });

    });
}


// ================= THEME =================

const theme =
    document.querySelector('#theme');

const themeModal =
    document.querySelector('.customize-theme');

// open modal
const openThemeModal = () => {
    if(themeModal){
        themeModal.style.display = 'grid';
    }
};

// close modal
const closeThemeModal = (e) => {

    if(
        e.target.classList.contains('customize-theme')
    ){
        themeModal.style.display = 'none';
    }
};

if(theme){
    theme.addEventListener(
        'click',
        openThemeModal
    );
}

if(themeModal){
    themeModal.addEventListener(
        'click',
        closeThemeModal
    );
}


// ================= FONT SIZE =================

const fontSizes =
    document.querySelectorAll('.choose-size span');

const root =
    document.querySelector(':root');

const removeSizeSelector = () => {

    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
};

fontSizes.forEach(size => {

    size.addEventListener('click', () => {

        removeSizeSelector();

        size.classList.add('active');

        let fontSize;

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '15px';
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '17px';
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '20px';
        }

        document.documentElement.style.fontSize =
            fontSize;
    });
});


// ================= COLOR =================

const colorPalette =
    document.querySelectorAll('.choose-color span');

const changeActiveColorClass = () => {

    colorPalette.forEach(color => {
        color.classList.remove('active');
    });
};

colorPalette.forEach(color => {

    color.addEventListener('click', () => {

        let PrimaryHue;

        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            PrimaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            PrimaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            PrimaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            PrimaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            PrimaryHue = 202;
        }

        color.classList.add('active');

        root.style.setProperty(
            '--primary-color-hue',
            PrimaryHue
        );
    });
});


// ================= BACKGROUND =================

const Bg1 =
    document.querySelector('.bg-1');

const Bg2 =
    document.querySelector('.bg-2');

const Bg3 =
    document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {

    root.style.setProperty(
        '--light-color-lightness',
        lightColorLightness
    );

    root.style.setProperty(
        '--white-color-lightness',
        whiteColorLightness
    );

    root.style.setProperty(
        '--dark-color-lightness',
        darkColorLightness
    );
};


// LIGHT
if(Bg1){

    Bg1.addEventListener('click', () => {

        Bg1.classList.add('active');
        Bg2?.classList.remove('active');
        Bg3?.classList.remove('active');

        window.location.reload();
    });
}


// DIM
if(Bg2){

    Bg2.addEventListener('click', () => {

        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';

        Bg2.classList.add('active');
        Bg1?.classList.remove('active');
        Bg3?.classList.remove('active');

        changeBg();
    });
}


// DARK
if(Bg3){

    Bg3.addEventListener('click', () => {

        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';

        Bg3.classList.add('active');
        Bg1?.classList.remove('active');
        Bg2?.classList.remove('active');

        changeBg();
    });
};