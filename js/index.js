$(document).scroll( ()=>{

    if( $(document).scrollTop() > $(".about").offset().top ){
        $("#mainNav").css("backgroundColor" , "#000000e6")
        // $("#mainNav").fadeIn(500)
    }
    else{
        $("#mainNav").css("backgroundColor" , "#transparent")
        // $("#mainNav").fadeOut(500)

    }

} )