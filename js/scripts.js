function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}    

docReady(function(){
  let body = document.body,
      nav = document.getElementById('navbar'),
      navOffset = document.getElementById('navSpacer').offsetTop;

  window.addEventListener('scroll', function(){
    if(navOffset < document.documentElement.scrollTop && !body.classList.contains('has-docked-nav')){
      body.classList.toggle('has-docked-nav');
      nav.style.display = 'block';
      console.log("on");
    }
    if(navOffset > document.documentElement.scrollTop && body.classList.contains('has-docked-nav')){
      body.classList.toggle('has-docked-nav');
      nav.style.display = 'none';
      console.log("off");
    }
  });
});

