document.addEventListener( 'DOMContentLoaded', function () {
  const splide = new Splide('#splide1', {
    type: 'loop',
    perPage: 1,
    arrows: false,
    autoplay: false,
    interval: 3000,
  });
  splide.mount();

  const splide2 = new Splide('#splide2', {
    type: 'loop',
    perPage: 1,
    arrows: false,
    autoplay: false,
    interval: 3000,
  });
  splide2.mount();
} );