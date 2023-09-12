$(document).ready(function() {
    const links = ['top', 'statistic', 'works', 'calculate','six-steps' ,'decisions'];
    
    let x = document.documentElement.clientWidth;
    if (x >= 950) {
        $('#fullpage').fullpage({
            autoScrolling:true,
            scrollHorizontally: true,
            sectionSelector: '.screen',
            scrollOverflow: true,
            anchors: links,
            menu: '#nav-circles',
        });
    }



    
    $("#appearance7").roundSlider({
        radius: 100,
        width: 2,
        handleSize: "+10",
        handleShape: "dot",
        sliderType: "min-range",
        value: 65,
        startAngle: 90,
        max: 500
    });

    
    $('.smeta__slider').slick({
        dots:true,
        arrows: false
    });


    let metrs;
    let formatter = new Intl.NumberFormat("ru");
    document.querySelectorAll('.price__puck-btn').forEach(e=>{
        e.addEventListener('click', (event)=>{
            document.querySelectorAll('.price__puck-btn').forEach(e=>{
                e.closest('.price__puck').classList.remove('price__puck-active');
            });
            event.target.closest('.price__puck').classList.add('price__puck-active');
            metrs = document.querySelector('.rs-tooltip-text').textContent;
            document.querySelector('.price__itog').textContent = `${formatter.format(Number(event.target.closest('.price__puck').dataset.metr)*Number(metrs))} ₽`;
        });
    });

    $(window).on('hashchange', function() {
        document.querySelector('.form-project-wrapper').classList.add('form-project-wrapper-act');
        document.querySelectorAll('.nav-circle').forEach(e=>{
            e.classList.remove('circle-active');
        }) 

        switch(location.hash){
            case `#${links[0]}`:
                document.querySelector('.nav-circles>a:nth-child(1)>.nav-circle').classList.add('circle-active');
                break;
            case `#${links[1]}`:
                document.querySelector('.nav-circles>a:nth-child(2)>.nav-circle').classList.add('circle-active');
                break;
            case `#${links[2]}`:
                document.querySelector('.nav-circles>a:nth-child(3)>.nav-circle').classList.add('circle-active');
                break;
            case `#${links[3]}`:
                document.querySelector('.nav-circles>a:nth-child(4)>.nav-circle').classList.add('circle-active');
                break;
            case `#${links[4]}`:
                document.querySelector('.nav-circles>a:nth-child(5)>.nav-circle').classList.add('circle-active');
                break;
            case `#${links[5]}`:
                document.querySelector('.nav-circles>a:nth-child(6)>.nav-circle').classList.add('circle-active');
                break;
        }

        if (location.hash!='#works'){
            setTimeout(()=>{
                document.querySelector('.form-project-wrapper').classList.remove('form-project-wrapper-act');
            },400)
        }
    });


});