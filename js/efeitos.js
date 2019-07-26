
		$(document).ready(function(){

			//alert("Jquery Ok");

				//mouseover = mouse encima 
			$("#logotipo").on("mouseover",function(){
				console.log("Passou o mouse");
				$("#banner h1").addClass("efeito");

			}).on("mouseout", function(){

				$("#banner h1").removeClass("efeito");

			});

			$("#input-search").on("focus", function(){

				$("li.search").addClass("ativo");

			}).on("blur", function(){

				$("li.search").removeClass("ativo");				

			});

			$(".thumbnails").owlCarousel({
		 
		      //autoPlay: 3000,
		      items : 4
		 
		  	});

		});
		
