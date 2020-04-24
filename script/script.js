        $("header").fadeIn(2000);
        $("header").css("display","flex");
        

        /*要素のフェードイン、アウト*/
        //$(".box").fadeOut();

        /*$(".Profile").hover(function () {
            $(".box").fadeIn();
        }, function () {
            $(".box").fadeOut();
            });*/
/*
        $(".Skill").hover(function () {
            $(".skill-item").fadeIn();
        }, function () {
            $(".skill-item").fadeOut();
        });

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

        $("#skill").click(function () {
            scroll(".Skill");
        });

        $("#works").click(function () {
            scroll(".Works");
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