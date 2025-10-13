// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//  owl carousel script
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

//    end owl carousel script

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/**fixed nav */

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header_section .header_bottom");

  if (window.scrollY > 50) {
    // Scrolled down — stick to top
    navbar.style.top = "0px";
    navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)";
  } else {
    // Back to top — move down to show contact header
    navbar.style.top = "50px";
    navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)";
  }
});

// custom right button




//access to email
