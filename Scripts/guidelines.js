function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-bottombar", "");
    tablinks[i].style.color = tablinks[i].style.color.replace("black", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-bottombar";
  evt.currentTarget.className += " w3-border-black";
  evt.currentTarget.className += " w3-border-bottom";
  evt.currentTarget.style.color = "black";
}

/*var showCity = document.getElementById(cityName);
  showCity.classList.add('appear');
  x[i].classList.add('hidden');*/

var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
    }

    function currentDiv(n) {
      showDivs(slideIndex = n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var y = document.getElementsByClassName("slideText");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        if (slideIndex == 1) {
          x[i].style.transform = "translateX(0%)";
          y[i].style.transform = "translateX(0%)";
        }
        if (n == 2) {
          x[i].style.transform = "translateX(-100%)";
          y[i].style.transform = "translateX(-100%)";
          
        }
        if (n == 3 || slideIndex == 3) {
          x[i].style.transform = "translateX(-200%)";
          y[i].style.transform = "translateX(-200%)";
        }
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-black", "");
      }
      dots[slideIndex - 1].className += " w3-black";
    }
    
    function start(){
      setInterval(function(){
        plusDivs(1);
      }, 3000);
    }
    
 start();
