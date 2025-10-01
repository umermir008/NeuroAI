// NeuroAI JavaScript - Clean version
// Uses GSAP + ScrollTrigger only. No Three.js.
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Hero
  gsap.fromTo('.hero-title',{opacity:0,y:50,scale:0.8},{opacity:1,y:0,scale:1,duration:1.5,ease:'power3.out',delay:0.3});
  gsap.fromTo('.hero-subtitle',{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:'power2.out',delay:0.8});
  gsap.to('.floating-animation',{y:-20,rotation:5,duration:3,ease:'power2.inOut',yoyo:true,repeat:-1});

  // Ripple buttons
  document.querySelectorAll('.ripple-effect').forEach(btn=>{
    btn.addEventListener('click', e => {
      const r = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size/2;
      const y = e.clientY - rect.top - size/2;
      r.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}px;top:${y}px;background:rgba(0,212,255,.3);border-radius:50%;transform:scale(0);pointer-events:none;z-index:1;`;
      btn.style.position='relative';btn.style.overflow='hidden';btn.appendChild(r);
      gsap.to(r,{scale:2,opacity:0,duration:0.6,ease:'power2.out',onComplete:()=>r.remove()});
    });
  });

  // About
  gsap.to('.about-image img',{rotationY:15,rotationX:5,scale:1.05,duration:1,ease:'power2.out',scrollTrigger:{trigger:'.about-image',start:'top 80%',end:'bottom 20%',toggleActions:'play none none reverse'}});
  gsap.fromTo('.about-text',{opacity:0,x:50},{opacity:1,x:0,duration:1,ease:'power2.out',scrollTrigger:{trigger:'.about-text',start:'top 80%',toggleActions:'play none none reverse'}});
  gsap.fromTo('.about-text li',{opacity:0,x:30},{opacity:1,x:0,duration:0.6,stagger:0.15,ease:'power2.out',scrollTrigger:{trigger:'.about-text ul',start:'top 80%',toggleActions:'play none none reverse'}});

  // Features
  gsap.fromTo('.feature-card',{opacity:0,y:80,rotationY:-15},{opacity:1,y:0,rotationY:0,duration:0.8,stagger:0.15,ease:'power3.out',scrollTrigger:{trigger:'#features',start:'top 70%',toggleActions:'play none none reverse'}});

  // How it works
  gsap.fromTo('.step-card',{opacity:0,y:50,scale:0.8},{opacity:1,y:0,scale:1,duration:0.6,stagger:0.25,ease:'back.out(1.7)',scrollTrigger:{trigger:'#how-it-works',start:'top 70%',toggleActions:'play none none reverse'}});
  gsap.fromTo('.progress-bar',{scaleX:0},{scaleX:1,duration:2,ease:'power2.inOut',scrollTrigger:{trigger:'.progress-bar',start:'top 80%',toggleActions:'play none none reverse'}});

  // Video
  gsap.fromTo('.video-container',{opacity:0,scale:0.8,y:30},{opacity:1,scale:1,y:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:'#video',start:'top 70%',toggleActions:'play none none reverse'}});

  // Pricing
  gsap.fromTo('.pricing-card',{opacity:0,y:60,rotationX:-20},{opacity:1,y:0,rotationX:0,duration:0.8,stagger:0.2,ease:'back.out(1.7)',scrollTrigger:{trigger:'#pricing',start:'top 70%',toggleActions:'play none none reverse'}});

  // Testimonials (simple auto-rotate)
  const slide = document.querySelector('.testimonial-slide');
  if (slide) {
    const testimonials=[
      {name:'John Smith',position:'CEO, TechCorp',image:'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',text:'"NeuroAI has revolutionized our business operations. We\'ve seen a 300% increase in efficiency since implementing their AI workflows."'},
      {name:'Sarah Johnson',position:'CTO, InnovateLabs',image:'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',text:'"The predictive analytics feature has transformed how we make business decisions. Highly recommended."'},
      {name:'Michael Chen',position:'Founder, StartupXYZ',image:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',text:'"NeuroAI\'s seamless integrations saved us months of development time. The ROI has been incredible."'}
    ];
    let i=0; const render=()=>{
      const t=testimonials[i];
      slide.innerHTML=`<div class="flex items-center mb-6"><img src="${t.image}" alt="${t.name}" class="w-16 h-16 rounded-full mr-4"><div><h4 class="font-semibold">${t.name}</h4><p class="text-gray-400">${t.position}</p></div></div><p class="text-lg italic">${t.text}</p><div class="flex text-yellow-400 mt-4"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>`;
      gsap.fromTo(slide,{opacity:0,x:50},{opacity:1,x:0,duration:0.6,ease:'power2.out'});
      i=(i+1)%testimonials.length;
    };
    render(); setInterval(render,5000);
  }

  // Contact form FX
  document.querySelectorAll('.glow-on-focus').forEach(inp=>{
    inp.addEventListener('focus',()=>gsap.to(inp,{boxShadow:'0 0 20px rgba(0,212,255,.5)',borderColor:'#00d4ff',duration:0.3}));
    inp.addEventListener('blur',()=>gsap.to(inp,{boxShadow:'0 0 0 rgba(0,0,0,0)',borderColor:'#374151',duration:0.3}));
  });
  const contactForm=document.querySelector('.contact-form');
  if (contactForm){
    contactForm.addEventListener('submit',e=>{
      e.preventDefault();
      const btn=contactForm.querySelector('button[type="submit"]');
      const txt=btn.textContent;
      gsap.to(btn,{scale:.95,duration:.1,yoyo:true,repeat:1});
      btn.textContent='Sending...';btn.disabled=true;
      setTimeout(()=>{btn.textContent='Message Sent!';btn.style.background='#10b981';setTimeout(()=>{btn.textContent=txt;btn.style.background='';btn.disabled=false;contactForm.reset();},1500);},1200);
    });
  }

  // Footer + icons
  gsap.fromTo('footer',{opacity:0,y:40},{opacity:1,y:0,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:'footer',start:'top 90%',toggleActions:'play none none reverse'}});
  document.querySelectorAll('.social-icon').forEach(icon=>{
    icon.addEventListener('mouseenter',()=>gsap.to(icon,{scale:1.2,duration:.3}));
    icon.addEventListener('mouseleave',()=>gsap.to(icon,{scale:1,duration:.3}));
  });

  // Parallax backgrounds
  gsap.utils.toArray('.parallax-bg').forEach(bg=>{
    gsap.to(bg,{yPercent:-50,ease:'none',scrollTrigger:{trigger:bg,start:'top bottom',end:'bottom top',scrub:true}});
  });

  // Navbar background on scroll
  const navbar=document.querySelector('nav');
  ScrollTrigger.create({ start:'top -80', end:99999, toggleClass:{ className:'bg-black bg-opacity-95 backdrop-blur-md shadow-lg', targets:navbar } });

  // Mobile menu
  const toggle=document.querySelector('button.md\\:hidden');
  if (toggle){
    const menu=document.createElement('div');
    menu.className='md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-sm hidden';
    menu.innerHTML=`<div class="px-6 py-4 space-y-4">
      <a href="#home" class="block hover:text-blue-400 transition-colors">Home</a>
      <a href="#about" class="block hover:text-blue-400 transition-colors">About</a>
      <a href="#features" class="block hover:text-blue-400 transition-colors">Features</a>
      <a href="#pricing" class="block hover:text-blue-400 transition-colors">Pricing</a>
      <a href="#contact" class="block hover:text-blue-400 transition-colors">Contact</a>
    </div>`;
    toggle.parentElement.appendChild(menu);
    toggle.addEventListener('click',()=>{
      const hidden=menu.classList.contains('hidden');
      if(hidden){menu.classList.remove('hidden'); gsap.fromTo(menu,{opacity:0,y:-20},{opacity:1,y:0,duration:.3});}
      else {gsap.to(menu,{opacity:0,y:-20,duration:.3,onComplete:()=>menu.classList.add('hidden')});}
    });
  }

  // Loading overlay
  const overlay=document.createElement('div');
  overlay.className='fixed inset-0 bg-black z-50 flex items-center justify-center';
  overlay.innerHTML='<div class="text-center"><div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div><div class="text-xl font-semibold neon-glow">NeuroAI</div><div class="text-gray-400">Loading Intelligence...</div></div>';
  document.body.appendChild(overlay);
  window.addEventListener('load',()=>gsap.to(overlay,{opacity:0,duration:.5,onComplete:()=>overlay.remove()}));
});

// Optional custom cursor
const style=document.createElement('style');
style.textContent=`.custom-cursor{position:fixed;width:20px;height:20px;background:radial-gradient(circle,rgba(0,212,255,.8) 0%,transparent 70%);border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:difference;}`;
document.head.appendChild(style);
const cursor=document.createElement('div');
cursor.className='custom-cursor';
document.body.appendChild(cursor);
document.addEventListener('mousemove',e=>{ gsap.to(cursor,{x:e.clientX,y:e.clientY,duration:0.1,ease:'power2.out'}); });
