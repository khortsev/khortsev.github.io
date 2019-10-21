$(document).ready(function(){

 $(".contacts").keyup(function checkParams() {
    let name = $(".tel_check").val();
    let email = $(".email_check").val();
    let num = $(".num_check").val();
     
    if(name.length && email.length && num.length ) {
      // сделаю через атрибут
        $("button").removeAttr("disabled");
            // и добавлю класс, не может быть вы хотели так что бы я сделал
        $(".button").addClass("btn_disabled");
        $(".button").css({"background-color" : "#97962D"});
    } else {
        $(".button").attr("disabled", "disabled");
        $(".button").css({"background-color" : "#000"});
    
        $(".button").removeClass("btn_disabled");
    }
})

 // $(".item").click(function(){
//    $(".item").css({"border-radius" : "120px"});
 //   console.log("1");
//  })

});