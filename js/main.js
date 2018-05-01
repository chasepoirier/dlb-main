$(document).ready(function(){

	//Sasha
    $(".modal_open").on("click touch", function() {
        $(".modal_open").hide();
        $("#toggle").show();
        $(".modal_close").show();
    });

    $(".modal_close").on("click touch", function() {
        $(".modal_open").show();
        $("#toggle").hide();
        $(".modal_close").hide();
    });

});

