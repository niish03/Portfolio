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
    $('i[name="dark-lighticon"]').removeClass('uil-brightness').addClass('uil-moon').css('color', '#161616');
    $('i[name="appsicon"]').addClass('light');


    x = 'light';
  } else if (x == 'light') {
    document.body.style.setProperty('--bgclr', '#161616');
    document.body.style.setProperty('--navbarbg', '#2b2b2be5');
    document.body.style.setProperty('--contentbg', '#49567075 ');
    document.body.style.setProperty('--fontclr', '#f3f3f3');
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