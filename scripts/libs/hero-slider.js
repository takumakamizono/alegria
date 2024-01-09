class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      grabCursor: true,
      effect: "slide",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 2000,
      stopOnLastSlide: true,
      crossFade: true,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 3000,
        disableOnInteraction: false,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
