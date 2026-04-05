window.onload = () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 1500);
};

function showTab(i){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.menu-items').forEach(m=>m.classList.remove('active'));

  document.querySelectorAll('.tab')[i].classList.add('active');
  document.querySelectorAll('.menu-items')[i].classList.add('active');
}

function callNow(){
  window.location.href='tel:+12563969101';
}

function bookTable(){
  let msg = encodeURIComponent("Hi, I want to reserve a table at Honey's Cafe");
  window.open("https://wa.me/12563969101?text="+msg);
}

/* SCROLL REVEAL */
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.reveal').forEach(el=>{
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
});