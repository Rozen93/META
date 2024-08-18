
$(document).ready(function(){
       setTimeout(()=> {
           $('#page-preloader').remove();
       } , 1000); // after 5 sec it will remove.
   });









$(document).ready(function(){
		            $('.carousel2').slick({
		                slidesToShow: 1,
		                slidesToScroll: 1,
		                autoplay: true,
		                autoplaySpeed: 3000,
		                arrows: false,
		                dots: false,
		                    pauseOnHover: false,
		                    responsive: [{
		                    breakpoint: 1400,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 1200,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 992,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 768,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 600,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }]
		            });
		        });






$(document).ready(function(){
		            $('.carousel2').slick({
		                slidesToShow: 1,
		                slidesToScroll: 1,
		                autoplay: true,
		                autoplaySpeed: 14000,
		                arrows: true,
		                dots: false,
		                    pauseOnHover: false,
		                    responsive: [{
		                    breakpoint: 1400,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 1200,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 992,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 768,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 600,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }]
		            });
		        });



$(document).ready(function(){
		            $('.slick-social').slick({
		                slidesToShow: 1,
		                slidesToScroll: 1,
		                autoplay: true,
		                autoplaySpeed: 14000,
		                arrows: false,
		                dots: false,
		                    pauseOnHover: false,
		                    responsive: [{
		                    breakpoint: 1400,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 1200,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 992,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 768,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 600,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }]
		            });
		        });









$(document).ready(function(){
		            $('.slick-social2').slick({
		                slidesToShow: 1,
		                slidesToScroll: 1,
		                autoplay: true,
		                autoplaySpeed: 14000,
		                arrows: false,
		                dots: false,
		                    pauseOnHover: false,
		                    responsive: [{
		                    breakpoint: 1400,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 1200,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                },{
		                    breakpoint: 992,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 768,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }, {
		                    breakpoint: 600,
		                    settings: {
		                        slidesToShow: 1
		                    }
		                }]
		            });
		        });





// $(document).ready(function(){
// 		            $('.trabajos').not('.slick-initialized').slick({
// 		                slidesToShow: 3,
// 		                centerMode:true;
// 		                autoplay: true,
// 		                autoplaySpeed: 14000,
// 		                arrows: true,
// 		                dots: false,
// 		                    pauseOnHover: false,
// 		                    responsive: [{
// 		                    breakpoint: 1400,
// 		                    settings: {
// 		                        slidesToShow: 1
// 		                    }
// 		                },{
// 		                    breakpoint: 1200,
// 		                    settings: {
// 		                        slidesToShow: 1
// 		                    }
// 		                },{
// 		                    breakpoint: 992,
// 		                    settings: {
// 		                        slidesToShow: 1
// 		                    }
// 		                }, {
// 		                    breakpoint: 768,
// 		                    settings: {
// 		                        slidesToShow: 1
// 		                    }
// 		                }, {
// 		                    breakpoint: 600,
// 		                    settings: {
// 		                        slidesToShow: 1
// 		                    }
// 		                }]
// 		            });
// 		        });



// function mySlick(){
// 	$('.trabajos').not('.slick-initialized').slick({
// 		centerMode: true,
// 		autoplay: true,
// 		dots: true,
// 		slideToShow: 3,
// 		responsive:[{

// 		}]

// 	})
// }







$('.trabajos').slick({
  centerMode: true,
  centerPadding: '0px',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

















  $(function(){
      $("#video,#video2",).videoPopup({
          autoplay: 1,
          controlsColor: 'white',
          showVideoInformations: 0,
          width: 1000,
          customOptions: {
              rel: 0,
              end: 60
          }
      });
  });


 

































$(function(){
		boxRollovers();
	});
	
	function boxRollovers()
	{
		$selector = $(".animated");
		XAngle = 0;
		YAngle = 0;
		Z = 50;
		
		$selector.on("mousemove",function(e){
			var $this = $(this);
			var XRel = e.pageX - $this.offset().left;
			var YRel = e.pageY - $this.offset().top;
			var width = $this.width();
		
			YAngle = -(0.5 - (XRel / width)) * 40; 
			XAngle = (0.5 - (YRel / width)) * 40;
			updateView($this.children(".efecto1"));
		});
		
		$selector.on("mouseleave",function(){
			oLayer = $(this).children(".efecto1");
			oLayer.css({"transform":"perspective(2325px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
			oLayer.find("strong").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
		});
	}
	
	function updateView(oLayer)
	{
		oLayer.css({"transform":"perspective(2325px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
		oLayer.find("strong").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
	}




















//javascript responsive-menu



	const menuBtn	= document.querySelector(".menu-btn");
	const navigation	= document.querySelector(".navigation");


	menuBtn.addEventListener("click", () => {
		menuBtn.classList.toggle("active");
		navigation.classList.toggle("active");  
	})




	// javascript video slider

	const btns	= document.querySelectorAll(".nav-btn");
	const slides	= document.querySelectorAll(".video-slide");
	const contens	= document.querySelectorAll(".content");
	let currentSlide = 1;

	var sliderNav = function(manual){
		btns.forEach((btn) => {
			btn.classList.remove("active");
		});

		slides.forEach((slide) => {
			slide.classList.remove("active");
		});

		contens.forEach((content) => {
			content.classList.remove("active");
		});



		btns[manual].classList.add("active");
		slides[manual].classList.add("active");
		contens[manual].classList.add("active");
	}

	btns.forEach((btn, i) => {
		btn.addEventListener("click", () => {
			sliderNav(i);
			currentSlide = i;
		});
	});







	var repeat = function(activeClass){
		let active = document.getElementsByClassName('active');
		let i = 1;

		var repeater = () => {
			setTimeout(function(){
				[...active].forEach((activeSlide) => {
					activeSlide.classList.remove('active');
				});



				slides[i].classList.add('active');
				btns[i].classList.add('active');
				contens[i].classList.add('active');
				i++;

				if(slides.length == i){
					i = 0;
				}
				if(i >= slides.length){
					return;
				}
				repeater();


			}, 11000);
		}
		repeater();
	}
	repeat();








	$(document).ready(function(){
          // Add smooth scrolling to all links
          $("a.ancla").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 1100, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
        });




	$(document).ready(function(){
          // Add smooth scrolling to all links
          $("button.ancla").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 1100, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
        });