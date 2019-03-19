        //Turning Of Carousel Transition
        $('.carousel').carousel({

            interval: false
        })

        //Turning Off Product Carousel Transition
        $('.product-carousel').carousel({

                interval: false
            })

        //script for gallery section
        $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < 3; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }

        });

        //Setting Transition Interval For Gallery
        $('.gallery-carousel').carousel({

            interval: 4000
        });
        //Script For Contact Us Form
               

        //Script For Contact Us Form

        //Script For Button Text Toggle
        function readMoreOne() {
        var x = document.getElementById("readMoreOne");
        if (x.innerHTML === "Read More") {
            x.innerHTML = "Close";
        } else {
            x.innerHTML = "Read More";
            }
        }

        function readMoreTwo() {
        var x = document.getElementById("readMoreTwo");
        if (x.innerHTML === "Read More") {
            x.innerHTML = "Close";
        } else {
            x.innerHTML = "Read More";
            }
        }

        function readMoreThree() {
        var x = document.getElementById("readMoreThree");
        if (x.innerHTML === "Read More") {
            x.innerHTML = "Close";
        } else {
            x.innerHTML = "Read More";
            }
        }