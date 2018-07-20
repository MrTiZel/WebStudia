$(document).ready(function () {
    function windowSize() {
        if ($(window).width() <= '995') {
            $('#shelf').show(10);
        } else {
            $('#shelf').hide(10);
        }
    }
    $(window).load(windowSize); // при загрузке
    $(window).resize(windowSize); // при изменении размеров
    // или "два-в-одном", вместо двух последних строк:
    $(window).on('load resize', windowSize);



    //https://github.com/davatron5000/FitText.js
    jQuery("#responsive_headline").fitText();


    //http://kenwheeler.github.io/slick/
    $(document).ready(function () {
        $('.your-class').slick({
            setting - name: setting - value
        });
    });

    //https://mynameismatthieu.com/WOW/docs.html
    new WOW().init();

    //https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);
});
