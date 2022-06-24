gsap.registerPlugin(ScrollTrigger);

const firstElem = document.querySelector(".panel");

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight + firstElem.offsetTop, autoKill: false, ease: "power1.inOut"},
    duration: 0.5
  });
  
  if(anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  
  const activepanelEnter = panel.previousElementSibling;
  
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => {
      goToSection(i)
      gsap.fromTo(activepanelEnter, { opacity: 1 }, { duration: 0.5, opacity: 0 })
      gsap.fromTo(panel, { opacity: 0 }, { duration: 0.25, delay: 0.5, opacity: 1 })      
    },
    
  });
  
  const activepanelEnterBack = panel.nextElementSibling;
  
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => {
      goToSection(i)
      gsap.fromTo(activepanelEnterBack, { opacity: 1 }, { duration: 0.5, opacity: 0 })
      gsap.fromTo(panel, { opacity: 0 }, { duration: 0.25, delay: 0.5, opacity: 1 })
    }
  });
});
