
// let submitButton = document.getElementById('submit-button');
// submitButton.addEventListener('click', function() {
//     onsubmit="alert('submit!');return false
//     window.alert('Submitted!');
//     return;
// });

// let list = document.getElementByclassName("navright");
// list.navright

// let hamButton = document.getElementById("ham-burger");
// hamButton.style.display = "none";
// if (window.matchMedia("(min-width: 481px)").matches && window.matchMedia("(max-width: 767px)").matches) {
    // hamButton.style.display="block";
// }
// list.navright.display = none;


// function myFunction(x) {
//     x.classList.toggle("change");
//     var y = document.getElementById("myTopnav");
//     y.classList.toggle("show");
    

    // if (y.className === "topnav") {
    //   y.className += " responsive";
    // } else {
    //   y.className = "topnav";
    // }
  // }

  function myAction() {
    var y = document.getElementById("myTopnav");
    if (y.className === "topnav") {
      y.className += " responsive";
    } else {
      y.className = "topnav";
    }
  }