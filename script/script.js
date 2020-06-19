        //$("header").fadeIn(2000);
        //$("header").css("display","flex");
        
        $(".fa-toggle-off").click(function(){
            $("nav").slideToggle();
        });
        
        /*
        $(".Works").hover(function () {
            $(".item").fadeIn();
        }, function () {
            $(".item").fadeOut();
        });
        */

        /*ここからスクロールボタン*/

        $("#profile").click(function () {
            scroll(".Profile");
        });

        $("#history").click(function () {
            scroll(".dream");
        });

        $("#skill").click(function () {
            scroll(".skill");
        });

        $("#works").click(function () {
            scroll(".Works");
        });
        
        $("#dream").click(function () {
            scroll(".dream");
        });

        $("#contact").click(function () {
            scroll(".contact");
        });

        function scroll(element) {
                console.log(element);
                var top = $(element).offset().top;
                $('html, body').animate({ scrollTop: top });
        }


        $(".toggle").click(function () {
            $("header").find("nav").slideToggle();
        });