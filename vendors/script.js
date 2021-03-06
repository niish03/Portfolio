var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }

  prevScrollpos = currentScrollPos;
}

document.getElementById('navbar-mobile').addEventListener("click", () => {
  if (window.innerWidth < 990)
    document.getElementById('navbar-toggler').click();
})

var typed = new Typed('.typing', {
  strings: ['Web developer', 'Flutter developer', 'UI/UX designer', 'Graphic desiner', 'Freelancer', 'Photographer'],
  backSpeed: 50,
  typeSpeed: 50,
  loop: true
});
var x = 'dark';


function changetheme() {

  document.querySelectorAll('.cngthm').forEach((result) => {
    result.classList.toggle('dark-mode');



  })
  if (x == 'dark') {
    document.body.style.setProperty('--bgclr', '#fff');
    document.body.style.setProperty('--navbarbg', '#ffffffe7');
    document.body.style.setProperty('--contentbg', '#6363ff1a');
    document.body.style.setProperty('--fontclr', '#000');
    document.body.style.setProperty('--contact-slate', '#fff');
    $('i[name="dark-lighticon"]').removeClass('uil-brightness').addClass('uil-moon').css('color', '#161616');
    $('i[name="appsicon"]').addClass('light');


    x = 'light';
  } else if (x == 'light') {
    document.body.style.setProperty('--bgclr', '#161616');
    document.body.style.setProperty('--navbarbg', '#2b2b2be5');
    document.body.style.setProperty('--contentbg', '#49567075 ');
    document.body.style.setProperty('--fontclr', '#f3f3f3');
    document.body.style.setProperty('--contact-slate', '#495670');
    $('i[name="dark-lighticon"]').removeClass('uil-moon').addClass('uil-brightness').css('color', '#fff');
    $('i[name="appsicon"]').removeClass('light');
    x = 'dark';
  }

  document.querySelectorAll('.skip-cng').forEach((result) => {
    result.classList.toggle('no-cng');
  })
};







//menu navbar
document.getElementById("navbar-toggler").addEventListener('click', () => {
  $('i[name="menu-icons"]').removeClass('Visually-hidden');

});

//skills


$('#skill1dd').click(()=>{
  
  if (!$('#skill1dd').hasClass("collapsed")) 
    $('#skill1').addClass("uil-angle-up").removeClass('uil-angle-down')
  if($('#skill1dd').hasClass("collapsed"))
    $('#skill1').addClass("uil-angle-down").removeClass('uil-angle-up')
  
})

$('#skill2dd').click(()=>{
  
  if (!$('#skill2dd').hasClass("collapsed")) 
    $('#skill2').addClass("uil-angle-up").removeClass('uil-angle-down')
  if($('#skill2dd').hasClass("collapsed"))
    $('#skill2').addClass("uil-angle-down").removeClass('uil-angle-up')
  
})

$('#skill3dd').click(()=>{
  
  if (!$('#skill3dd').hasClass("collapsed")) 
    $('#skill3').addClass("uil-angle-up").removeClass('uil-angle-down')
  if($('#skill3dd').hasClass("collapsed"))
    $('#skill3').addClass("uil-angle-down").removeClass('uil-angle-up')
  
})

$('#skill4dd').click(()=>{
  
  if (!$('#skill4dd').hasClass("collapsed")) 
    $('#skill4').addClass("uil-angle-up").removeClass('uil-angle-down')
  if($('#skill4dd').hasClass("collapsed"))
    $('#skill4').addClass("uil-angle-down").removeClass('uil-angle-up')
  
})

$('#skill5dd').click(()=>{
  
  if (!$('#skill5dd').hasClass("collapsed")) 
    $('#skill5').addClass("uil-angle-up").removeClass('uil-angle-down')
  if($('#skill5dd').hasClass("collapsed"))
    $('#skill5').addClass("uil-angle-down").removeClass('uil-angle-up')
  
})

$('#skill6dd').click(()=>{
  
  if (!$('#skill6dd').hasClass("collapsed")) 
    $('#skill6').addClass("uil-angle-up").removeClass('uil-angle-down')
  if($('#skill6dd').hasClass("collapsed"))
    $('#skill6').addClass("uil-angle-down").removeClass('uil-angle-up')
  
})


  if (window.innerWidth < 768)
    $('.cd-timeline-content').attr('data-aos','fade-right')
  

    function contactmenuclick(){
      if($('#hireme').hasClass('active-with-border'))
      {//When contact me pressed
        $('#hireme').removeClass('active-with-border');
        $('#contactmebtn').addClass('active-with-border');
        $('#contactform').removeClass('visually-hidden');
        $('#hiremeform').addClass('visually-hidden');
      }
      else{ //When hire me pressed
        $('#contactmebtn').removeClass('active-with-border');
        $('#hireme').addClass('active-with-border');
        $('#contactform').addClass('visually-hidden');
        $('#hiremeform').removeClass('visually-hidden');
      }
    }
  
  /*Testimonial*/
  // vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}


$('#resumeopen').click(()=>{
  window.open('resume/NISHITs Resume.pdf');
})

var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
            
    });
});



    /*top back*/
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }

    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }