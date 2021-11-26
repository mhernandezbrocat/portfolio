// w3school header scroll
window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector('.header');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// formulario
window.addEventListener('DOMContentLoaded', function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById('my-form');
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById('status');

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = 'Thanks!';
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = 'Oops! There was a problem.';
  }

  // handle the form submission event

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

const botonToggle = document.querySelector('.btn-toggle')
const botonToggleClose = document.querySelector('.btn-toggle-close')
const menu = document.querySelector('.nav-header')

botonToggle.addEventListener("click", () => {
  menu.classList.toggle('is-active')
  botonToggleClose.classList.toggle('is-active')
  console.log("hola")
})

menu.addEventListener("click", () => {
  menu.classList.toggle('is-active')
  console.log("hola menu")
})




// scrollSpy
console.log("hola portafolio")
const scrollSpy = () => {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    // console.log("entries", entries);
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
      } else {
        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
      }
    })

  };
  
  const observer = new IntersectionObserver(cb, {
    rootMargin: "-200px", 
  });
  
  $sections.forEach((section) => {
    observer.observe(section);
  });
}

scrollSpy()






































/*
// simple function to use for callback in the intersection observer
const changeNav = (entries, observer) => {
  // const $links = document.querySelectorAll("a[data-scroll-spy]")
	entries.forEach((entry) => {
		// verify the element is intersecting
		if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			// remove old active class
			document.querySelector('.active').classList.remove('active');
			// get id of the intersecting section
			var id = entry.target.getAttribute('id');
			// find matching link & add appropriate class
			var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

// init the observer
const options = {
	threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});
*/





