'use strict';

/**
 * PRELOAD
 */
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * NAVBAR
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER & BACK TOP BTN
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * MENU FILTER (Veg / Non-Veg)
 */
const filterBtns = document.querySelectorAll("[data-filter]");
const menuItems = document.querySelectorAll("[data-diet]");

if (filterBtns.length && menuItems.length) {
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Update active state
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      menuItems.forEach(function (item) {
        if (filter === "all" || item.dataset.diet === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

/**
 * VIEW MORE / VIEW LESS TOGGLE
 */
const viewMoreBtns = document.querySelectorAll("[data-view-more]");

viewMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const section = btn.closest(".menu");
    if (!section) return;

    const gridList = section.querySelector(".grid-list");
    if (!gridList) return;

    const isExpanded = gridList.classList.contains("expanded");

    if (isExpanded) {
      // Collapse: remove expanded class
      gridList.classList.remove("expanded");
      btn.querySelector(".text-1").textContent = "View More";
      btn.querySelector(".text-2").textContent = "View More";
      btn.classList.remove("btn-less");

      // Scroll back to the section top smoothly
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Expand: add expanded class with staggered animation
      gridList.classList.add("expanded");
      const extras = gridList.querySelectorAll("[data-extra]");
      extras.forEach(function (item, index) {
        item.style.animationDelay = (index * 0.1) + "s";
      });
      btn.querySelector(".text-1").textContent = "View Less";
      btn.querySelector(".text-2").textContent = "View Less";
      btn.classList.add("btn-less");
    }
  });
});

