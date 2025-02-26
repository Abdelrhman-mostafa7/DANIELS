//=======================================Start Screen==================================================
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("curtain-top").style.transform = "translateY(-100%)";
        document.getElementById("curtain-bottom").style.transform = "translateY(100%)";
        document.getElementById("curtain-top").style.opacity = "0";
        document.getElementById("curtain-bottom").style.opacity = "0";
        document.getElementById("loading-screen").style.opacity = "0";
        document.getElementById("content").style.opacity = "1";
        setTimeout(function() {
            document.querySelector(".curtain-container").style.display = "none";
            document.getElementById("loading-screen").style.display = "none";
        }, 500);
    }, 500);
});
//=======================================End Screen==================================================
//=======================================Start Header==================================================
var typed = new Typed(".typing", {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 500,
    startDelay: 1000,
    loop: true
});
//=======================================End Header==================================================
//=======================================Start About==================================================
$(document).ready(function() {
    $('.skills-progress').each(function() {
        var $this = $(this);
        var value = $this.find('span[data-value]').data('value');
        $this.find('span[data-value]').css('width', value);
        
        // عرض الرقم في النهاية
        setTimeout(function() {
            $this.find('.skill-value').fadeIn();
        }, 3000);
    });
});

//=======================================End About==================================================
//=======================================Start Client==================================================

let nums = document.querySelectorAll("#clients .client-box h3");
let section = document.querySelector("#clients");
let duration = 2000;
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - window.innerHeight + 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  } else if (window.scrollY < section.offsetTop - window.innerHeight) {
    nums.forEach((num) => (num.textContent = "0"));
    started = false;
  }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let increment = goal / (duration / 20);
  
    let count = 0;
    let timer = setInterval(() => {
      count += increment;
      el.textContent = Math.floor(count);
  
      if (count >= goal) {
        el.textContent = goal;
        clearInterval(timer);
      }
    }, 20);
}
//=======================================End Client==================================================