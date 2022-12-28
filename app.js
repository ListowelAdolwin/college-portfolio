/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


/**About */
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-tab-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab-content");
  }

  event.currentTarget.classList.add("active-tab-link");
  document.getElementById(tabname).classList.add("active-tab-content");
}


/**Award content */
var awardLinks = document.getElementsByClassName("award-links");
var awardContents = document.getElementsByClassName("award-content");

function openaward(tabname) {
  for (awardLink of awardLinks) {
    awardLink.classList.remove("active-award-link");
  }

  for (awardContent of awardContents) {
    awardContent.classList.remove("active-award-content");
  }

  event.currentTarget.classList.add("active-award-link");
  document.getElementById(tabname).classList.add("active-award-content");
}
