document.addEventListener("DOMContentLoaded",function(){
  // ===== MOBILE NAV TOGGLE =====
  const btn=document.getElementById("nav-menu-toggle"),menu=document.getElementById("nav-menu");
  if(btn&&menu){btn.addEventListener("click",function(){menu.classList.toggle("hidden")})}
  // ===== REVEAL ON SCROLL =====
  const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in-view")})},{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
  // ===== HERO PARALLAX =====
  const hero=document.getElementById("hero-parallax");
  window.addEventListener("scroll",function(){if(hero){hero.style.transform=`translateY(${window.scrollY*.14}px)`}});
  // ===== TRUST COUNTERS =====
  document.querySelectorAll("[data-counter]").forEach(el=>{
    const target=parseInt(el.getAttribute("data-counter"),10),dur=1400,start=0,t0=performance.now();
    function tick(now){const p=Math.min((now-t0)/dur,1);el.textContent=Math.floor(start+(target-start)*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(tick)}
    requestAnimationFrame(tick);
  });
});