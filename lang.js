(function(){
  var KEY='site-lang',h=document.documentElement,saved=null;
  try{saved=localStorage.getItem(KEY);}catch(e){}
  var nav=(navigator.language||'tr').slice(0,2).toLowerCase();
  set(saved||(nav==='tr'?'tr':'en'));
  function set(l){h.lang=l;var b=document.querySelectorAll('.lang button');for(var i=0;i<b.length;i++)b[i].setAttribute('aria-pressed',b[i].getAttribute('data-set')===l);
    var t=document.querySelector('meta[name="title-'+l+'"]');if(t)document.title=t.content;}
  document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.lang button');if(!b)return;var l=b.getAttribute('data-set');set(l);try{localStorage.setItem(KEY,l);}catch(x){}});
  document.addEventListener('DOMContentLoaded',function(){set(h.lang);});
})();
