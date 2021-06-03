$(document).ready(function () {
    function showComponent(element) {
        document.querySelector(element).style.display = "block";
    }

    function hideComponent(element) {
        document.querySelector(element).style.display = "none";
    }

    function scrollTo(element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, 2000);
    }

    $(".button1").click(function () {
        hideComponent('.button1');
        showComponent('.sim_block_container_2');
        showComponent('.button2');
        showComponent('.arrow_icon1');
        scrollTo('.sim_block_container_2');
    });

    $(".button2").click(function () {
        hideComponent('.button2');
        showComponent('.sim_block_container_3');
        showComponent('.button3');
        showComponent('.arrow_icon2');
        scrollTo('.sim_block_container_3');
    });

    $(".button3").click(function () {
        hideComponent('.button3');
        showComponent('.sim_block_container_4');
        showComponent('.button4');
        showComponent('.arrow_icon3');
        scrollTo('.sim_block_container_4');
    });

    $(".button4").click(function () {
        hideComponent('.button4');
        showComponent('.sim_block_container_5');
        showComponent('.button5');
        showComponent('.arrow_icon4');
        scrollTo('.sim_block_container_5');
    });
});



