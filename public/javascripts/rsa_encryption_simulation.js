$(document).ready(function () {
    function showComponent(element) {
        document.querySelector(element).style.display = "block";
    }

    function hideComponent(element) {
        document.querySelector(element).style.display = "none";
    }

    function buttonInvisible(element) {
        document.querySelector(element).style.visibility = "hidden";
    }

    function scrollTo(element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, 2000);
    }

    function resize() {
        if (window.innerWidth <= 1000) {
            $(".image_container2 img").attr('src', '/images/rsa_sifravimo_procesas2a.jpg');
            $(".image_container3 img").attr('src', '/images/rsa_sifravimo_procesas3a.jpg');
            $(".image_container6 img").attr('src', '/images/rsa_sifravimo_procesas6a.jpg');
            $(".image_container7 img").attr('src', '/images/rsa_sifravimo_procesas7a.jpg');
        } else {
            $(".image_container2 img").attr('src', '/images/rsa_sifravimo_procesas2.jpg');
            $(".image_container3 img").attr('src', '/images/rsa_sifravimo_procesas3.jpg');
            $(".image_container6 img").attr('src', '/images/rsa_sifravimo_procesas6.jpg');
            $(".image_container7 img").attr('src', '/images/rsa_sifravimo_procesas7.jpg');
        }
    }

    resize();
    $(window).on('resize', resize);

    $(".button1").click(function () {
        if (window.innerWidth <= 1000) {
            hideComponent('.button1');
        } else {
            buttonInvisible('.button1');
        }
        showComponent('.sim_block_container_2');
        showComponent('.button2');
        if (window.innerWidth <= 1000) {
            scrollTo('.sim_block_container_2');
        }
    });

    $(".button2").click(function () {
        if (window.innerWidth <= 1000) {
            hideComponent('.button2');
        } else {
            buttonInvisible('.button2');
        }
        showComponent('.sim_block_container_3');
        showComponent('.button3');
        if (window.innerWidth <= 1000) {
            scrollTo('.sim_block_container_3');
        }
    });

    $(".button3").click(function () {
        hideComponent('.button3');
        showComponent('.sim_block_container_4');
        showComponent('.arrow_icon1');
        showComponent('.button4');
        scrollTo('.sim_block_container_4');
    });

    $(".button4").click(function () {
        hideComponent('.button4');
        showComponent('.sim_block_container_5');
        showComponent('.arrow_icon2');
        showComponent('.button5');
        scrollTo('.sim_block_container_5');
    });

    $(".button5").click(function () {
        if (window.innerWidth <= 1000) {
            hideComponent('.button5');
        } else {
            buttonInvisible('.button5');
        }
        showComponent('.sim_block_container_6');
        showComponent('.button6');
        if (window.innerWidth < 1000) {
            scrollTo('.sim_block_container_6');
        }
    });

    $(".button6").click(function () {
        if (window.innerWidth <= 1000) {
            hideComponent('.button6');
        } else {
            buttonInvisible('.button6');
        }
        showComponent('.sim_block_container_7');
        showComponent('.button7');
        if (window.innerWidth <= 1000) {
            scrollTo('.sim_block_container_7');
        } else {
            scrollTo('.button7');
        }
    });
});



