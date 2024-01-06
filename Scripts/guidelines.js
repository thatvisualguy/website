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

//Values
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
    
   // start();

//Primary Brandmark
var PBm = 1;
    showPrimaryBm(PBm);

    function plusPBm(n) {
      showPrimaryBm(PBm += n);
    }

    function currentPBm(n) {
      showPrimaryBm(PBm = n);
    }

    function showPrimaryBm(n) {
      var i;
      var x = document.getElementsByClassName("PrimaryBrandmark");
      var dots = document.getElementsByClassName("Pbm-indicator");
      if (n > x.length) {
        PBm = 1
      }
      if (n < 1) {
        PBm = x.length;
      }
      for (i = 0; i < x.length; i++) {
        if (PBm == 1) {
          x[i].style.transform = "translateX(0%)";
        }
        if (n == 2 || PBm == 2) {
          x[i].style.transform = "translateX(-100%)";
        }
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-black", "");
      }
      dots[PBm - 1].className += " w3-black";
    }

//bwlogo
var bwlogo = 1;
    showbwlogo(bwlogo);

    function plusbwlogo(n) {
      showbwlogo(bwlogo += n);
    }

    function currentbwlogo(n) {
      showbwlogo(bwlogo = n);
    }

    function showbwlogo(n) {
      var i;
      var x = document.getElementsByClassName("bwlogo-image");
      var dots = document.getElementsByClassName("bwlogo-indicator");
      if (n > x.length) {
        bwlogo = 1
      }
      if (n < 1) {
        bwlogo = x.length;
      }
      for (i = 0; i < x.length; i++) {
        if (bwlogo == 1) {
          x[i].style.transform = "translateX(0%)";
        }
        if (n == 2) {
          x[i].style.transform = "translateX(-100%)";
        }
          if (n == 3) {
          x[i].style.transform = "translateX(-200%)";
        }
          if (n == 4 || bwlogo == 4) {
          x[i].style.transform = "translateX(-300%)";
        }
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-black", "");
      }
      dots[bwlogo - 1].className += " w3-black";
    }
