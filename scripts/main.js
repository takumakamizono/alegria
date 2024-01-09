class Main {
  constructor() {
    this.banner = document.querySelector(".fixed-btns");
    this.hero = new HeroSlider(".swiper");

    this._observers = [];
    this._init();
  }

  _init() {
    new MobileMenu();
    this._scrollInit();
  }

  destroy() {
    this._observers.forEach((so) => so.destroy());
  }

  _scrollInit() {
    this._observers.push(
      new ScrollObserver(".nav-trigger", this._navBanner.bind(this), {
        once: false,
      }),

      new ScrollObserver(".swiper", this._toggleSlideAnimation.bind(this), {
        once: false,
      }),

      new ScrollObserver(".appear", this._inviewAnimation)
    );
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }
  _navBanner(el, inview) {
    if (inview) {
      this.banner.classList.remove("triggered");
    } else {
      this.banner.classList.add("triggered");
    }
  }
}
const main = new Main();
