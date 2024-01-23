'use strict';

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const header = document.querySelector('.header');
const btnNav = document.querySelector('.button-mobile-nav');

btnNav.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

const sectionHeroEl = document.querySelector('.section-hero');
const body = document.querySelector('body');
const navHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  // const ent = entries[0];
  const [ent] = entries;
  !ent.isIntersecting
    ? body.classList.add('sticky')
    : body.classList.remove('sticky');
};

const obs = new IntersectionObserver(stickyNav, {
  // In the viewport, null mean the viewport
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
obs.observe(sectionHeroEl);
