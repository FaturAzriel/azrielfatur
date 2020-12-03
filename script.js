
setTimeout( function(){
        const backInLeft = document.querySelector('.d-none');
        backInLeft.classList.remove('d-none');
    }, window.addEventListener('load',function(){
        document.querySelector('body').classList.add("loaded");
    })
);