

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
  	slideIndex = 1;
  }    
  if (n < 1) {
  	slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function myFunction() {
    	location.href="formulario/index.html";
	}
$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 3200) {
      $(".footer").addClass("entra");
    } else {
      $(".footer").removeClass("entra");
    }
  });
});



//function creaComentario(){
	

		
			$(".p1 .comentario").on("click", function(){
				if(!$("#coments").length){
					$(".p1").append('<textarea type="text" id="coments" value="Comentario" placeholder="Escribe aqui tus comentarios" cols="24" rows="4"></textarea> <input type="submit" value="Enviar" class="enviarCom"> </input>');
		}
		else{
			$("#coments").remove();
			$(".enviarCom").remove();
	}
		});
	
	
	
//}
