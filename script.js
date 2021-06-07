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
      
      if (x == 'dark') {
        document.body.style.setProperty('--bgclr', '#fff');
        x= 'light';
      } else if (x == 'light') {
        document.body.style.setProperty('--bgclr', '#161616');
        x= 'dark';
      }

  })

  document.querySelectorAll('.skip-cng').forEach((result) => {
      result.classList.toggle('no-cng');
  })



};