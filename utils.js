function init() {
    $(".showcase-img").click(function(){
        $('#imagepreview').attr('src', $(this).attr('src'));
        $('#imagemodal').modal('show');
    });

    document.getElementById("nav-top").addEventListener('click',function (){
        scrollTo("#welcome");
    });
    document.getElementById("nav-showcase").addEventListener('click',function (){
        scrollTo("#showcase");
    });
    document.getElementById("nav-about").addEventListener('click',function (){
        scrollTo("#about");
    });
    document.getElementById("nav-contact").addEventListener('click',function (){
        scrollTo("#contact");
    });

    $(".article-body").hide();
    $(".article-title").append('<i class="arrow-icon fa fa-chevron-circle-right"></i>');
    $(".article-title").click(function(){
        $(this).find(".fa-chevron-circle-right").toggleClass("fa-chevron-circle-down");
        $(this).parent(".article").find(".article-body").slideToggle("slow",function(){
        });
    });
}

function scrollTo(elmnt){
    $('html,body').animate({
        scrollTop: $(elmnt).offset().top-64
    });
}

function save_data() {
    var data = $("#txt-user-input")[0].value;
    if (data !== "") {
        
        success_msg("Thank you for your message! :)");
    } else {
        error_msg("You need to write something.");
    }
}

function error_msg (msg) {
    $("#txt-status-message").text(msg);
    $("#status-message").addClass("status-red");
    $("#status-message").removeClass("status-green");
    $("#status-message").slideDown();
}

function success_msg (msg) {
    $("#txt-status-message").text(msg);
    $("#status-message").addClass("status-green");
    $("#status-message").removeClass("status-red");
    $("#status-message").slideDown();
}

function equalize () {
    $("#status-message").slideUp();
}