'use strict';

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const header = document.querySelector('.header');
const btnNav = document.querySelector('.button-mobile-nav');

btnNav.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);

// allLinks.forEach(link =>
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const href = link.getAttribute('href');
//     // console.log(href);

//     // Scroll back to top
//     if (href === '#')
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });

//     // Scroll to other links
//     if (href != '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Close mobile navigation
//     if (link.classList.contains('main-nav-link'))
//       header.classList.toggle('nav-open');
//   })
// );

// NOTE: Event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
// const smoothScroll = (dad, sun) => {
//   document.querySelector(`.${dad}`).addEventListener('click', function (e) {
//     e.preventDefault();
//     const contains = contain => e.target.classList.contains(contain);
//     let href;
//     // console.log(e.target);

//     if (contains(sun)) {
//       href = e.target.getAttribute('href');
//       document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//       contains('main-nav-link') && header.classList.toggle('nav-open');
//     } else {
//       href = e.currentTarget.getAttribute('href');
//       href === '#' &&
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });
//     }
//   });
// };

// const smoothScroll = (dad, sun) => {
//   document.querySelector(`.${dad}`).addEventListener('click', function (e) {
//     const contains = contain => e.target.classList.contains(contain);
//     e.preventDefault();
//     console.log(e.target);
//     console.log(e.currentTarget);

//     let href = e.currentTarget.getAttribute('href');
//     console.log(href);
//     if (href === '#') {
//       href === '#' &&
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });
//     }

//     if (contains(sun)) {
//       href = e.target.getAttribute('href');
//       document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//     }

//     contains('main-nav-link') && header.classList.toggle('nav-open');
//   });
// };

// smoothScroll('main-nav-list', 'main-nav-link');
// smoothScroll('hero-text-box', 'btn');
// smoothScroll('footer-logo');
// smoothScroll('logo-col', 'footer-logo');

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.footer-logo').addEventListener('click', function (e) {
//   e.preventDefault();
//   // this.style.backgroundColor = randomColor();
//   // console.log('Link', e.target, e.currentTarget);

//   const href = e.currentTarget.getAttribute('href');
//   if (href === '#')
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });

// });

// document.querySelector('.footer-logo').style.backgroundColor = randomColor();
// document
//   .querySelector('.main-nav-list')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log(e.target);

//     // Matching strategy
//     if (e.target.classList.contains('main-nav-link')) {
//       const href = e.target.getAttribute('href');
//       document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//     }
//   });

// document.querySelector('.hero-text-box').addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.classList.contains('btn')) {
//     const href = e.target.getAttribute('href');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// NOTE: Sticky navigation

// const sectionFeature = document.querySelector('.section-featured');
// // const mainNav = document.querySelector('.main-nav-list');

// const initialCoords = sectionFeature.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);

//   if (this.window.scrollY > initialCoords.top) {
//     header.classList.add('sticky');
//   } else mainNav.classList.remove('sticky');
// });

const sectionHeroEl = document.querySelector('.section-hero');
const body = document.querySelector('body');
const navHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  // const ent = entries[0];
  const [ent] = entries;
  // console.log(ent);
  //   if (!ent.isIntersecting)
  //     document.querySelector('.header').classList.add('sticky');
  //   else document.querySelector('.header').classList.remove('sticky');
  // }
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

// const obs = new IntersectionObserver(
//   function (entries) {
//     // const ent = entries[0];
//     const [ent] = entries;
//     console.log(ent);
//     //   if (!ent.isIntersecting)
//     //     document.querySelector('.header').classList.add('sticky');
//     //   else document.querySelector('.header').classList.remove('sticky');
//     // }

//     !ent.isIntersecting
//       ? body.classList.add('sticky')
//       : body.classList.remove('sticky');
//   },
//   {
//     // In the viewport, null mean the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: `-${navHeight}px`,
//   }
// );
// obs.observe(sectionHeroEl);

// const stickyNav = entries => {
//   const [entry] = entries;
//   console.log(entry);

//   !entry.isIntersecting
//     ? body.classList.add('sticky')
//     : body.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });

// headerObserver.observe(header);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
