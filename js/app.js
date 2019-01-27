$('document').ready(function () {

    $(".fr").mouseover(function () {

        TweenMax.to('.france', 0.7, {

            width: "80%",

            onComplete: function () {

                $(".fr").mouseout(function () {

                    TweenMax.to('.france', 0.1, {

                        width: "0"

                    });
                });
            }
            
        });
    });


    // ----- //



    $(".es").mouseover(function () {

        TweenMax.to('.espagne', 0.7, {

            width: "80%",
            onComplete: function () {


                $(".es").mouseout(function () {

                    TweenMax.to('.espagne', 0.1, {

                        width: "0"

                    });
                });
            }

        });
    });



    // ----- //



    $(".po").mouseover(function () {

        TweenMax.to('.portugal', 0.7, {

            width: "80%",
            onComplete: function () {


                $(".po").mouseout(function () {

                    TweenMax.to('.portugal', 0.1, {

                        width: "0"

                    });
                });
            }

        });
    });



    // ----- //



    $(".al").mouseover(function () {

        TweenMax.to('.allemagne', 0.7, {

            width: "80%",
            onComplete: function () {


                $(".al").mouseout(function () {

                    TweenMax.to('.allemagne', 0.1, {

                        width: "0"

                    });
                });
            }

        });
    });




    // FIN //
});