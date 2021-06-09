var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }

  prevScrollpos = currentScrollPos;
}

document.getElementById('navbar-mobile').addEventListener("click" ,()=>{
  if(window.innerWidth < 990)
  document.getElementById('navbar-toggler').click();
  } )

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
    $('i[name="dark-lighticon"]').removeClass('uil-moon').addClass('uil-brightness').css('color','#161616');
    $('i[name="appsicon"]').addClass('light');
    
    
    x= 'light';
  } else if(x == 'light') {
    document.body.style.setProperty('--bgclr', '#161616');
    document.body.style.setProperty('--navbarbg', '#2b2b2be5');
    $('i[name="dark-lighticon"]').removeClass('uil-brightness').addClass('uil-moon').css('color','#fff');
    $('i[name="appsicon"]').removeClass('light');
    x= 'dark';
  }

  document.querySelectorAll('.skip-cng').forEach((result) => {
      result.classList.toggle('no-cng');
  })
};







//menu navbar
document.getElementById("navbar-toggler").addEventListener('click' , ()=> {  
  $('i[name="menu-icons"]').removeClass('Visually-hidden');

});

