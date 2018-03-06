window.ICE = {
  displaybackToTop () {
    let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollHeight > document.getElementsByClassName('works')[0].style.height) {
      document.getElementById('back-to-top').style.display = 'inline';
    } else {
      document.getElementById('back-to-top').style.display = 'none';
    }
  }
};

window.onscroll = function () {
  window.ICE.displaybackToTop();
};


window.onload = function() {
  window.ICE.displaybackToTop();
};