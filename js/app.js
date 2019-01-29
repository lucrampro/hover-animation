$('document').ready(function () {

    $('.fr').mouseover(function () {

        TweenMax.to('.image', 0.2, {
            width: 0,
            onComplete: function () {

                TweenMax.to('.france', 1, {
                    width: '80%',
                    ease: Back.easeOut.config(1.7),
                });
            }
        });
    });

    $('.es').mouseover(function () {

        TweenMax.to('.image', 0.2, {
            width: 0,
            onComplete: function () {

                TweenMax.to('.espagne', 1, {
                    width: '80%',
                    ease: Back.easeOut.config(1.7),
                });
            }
        });
    });

    $('.al').mouseover(function () {

        TweenMax.to('.image', 0.2, {
            width: 0,
            onComplete: function () {

                TweenMax.to('.allemagne', 1, {
                    width: '80%',
                    ease: Back.easeOut.config(1.7),
                });
            }
        });
    });

    $('.po').mouseover(function () {

        TweenMax.to('.image', 0.2, {
            width: 0,
            onComplete: function () {

                TweenMax.to('.portugal', 1, {
                    width: '80%',
                    ease: Back.easeOut.config(1.7),
                });
            }
        });
    });

    // ----- ----- ----- ----- ----- ----- ----- //


    TweenMax.from('.fr', 1, {
        css: {
            opacity: 0,
            y: "50%"
        }
    });
    

    TweenMax.from('.es', 1, {
        css: {
            opacity: 0,
            y: "50%"
        }, delay: 0.1
    });
    

    TweenMax.from('.po', 1, {
        css: {
            opacity: 0,
            y: "50%"
        }, delay: 0.2
    });
    

    TweenMax.from('.al', 1, {
        css: {
            opacity: 0,
            y: "50%"
        }, delay: 0.3
    });
    









    // FIN //
});