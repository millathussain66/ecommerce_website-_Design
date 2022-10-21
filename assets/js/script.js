//$(document).ready(function() {
//    $('#example').DataTable();
//} );
    // isotope filter
    $(document).ready(function(){

        // banner owl carousel
        $("#products .owl-carousel").owlCarousel({
            loop:true,
            nav:false,
            dots:false,
            margin:10,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 2
                },
                800:{
                    items: 3
                },
                1000:{
                    items: 5
                }
            }
        });


        $("#brinds .owl-carousel").owlCarousel({
            loop:true,
            nav:false,
            dots:false,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 2
                },
                800:{
                    items: 3
                },
                1000:{
                    items: 5
                }
            }
        });
        $(".top_categories .owl-carousel").owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            margin:10,
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 2
                },
                800:{
                    items: 3
                },
                1000:{
                    items: 5
                }
            }
        });
    
        // isotope filter
        var $grid = $(".grid").isotope({
            itemSelector : '.grid-item',
            layoutMode : 'fitRows'
        });
    
        // filter items on button click
        $(".button-group").on("click", "button", function(){
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue});
        })
    


    
    

    
    });