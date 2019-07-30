
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


		  	var owl = $(".thumbnails").data('owlCarousel');

		  	$('#btn-news-prev').on("click",function(){

		  		owl.prev();


		  	});


		  	var owl = $(".thumbnails").data('owlCarousel');

		  	$('#btn-news-next').on("click",function(){

		  		owl.next();


		  	});

		  	$("#page-up").on("click",function(event){


		  		$("html,body").animate({

		  			scrollTop:0
		  		},1000);

		  		event.preventDefault();


		  	});


		});
		
