import Swiper from 'swiper'

Promise.all([ import('../style/index.scss'), import('../style/swiper.scss') ])
  .then(() => {
    let mySwiperO = new Swiper('.swiper-container1', {
      pagination: {
          el: '.swiper-pagination'
      },
      loop: true, 
      // autoplay: {
      //     delay: 3000,
      //     stopOnLastSlide: false,
      //     disableOnInteraction: true,
      // },
      spaceBetween: 11,
      on: {
        slideChangeTransitionEnd: function() {
          if (this.isEnd) {
            mySwiperO.slideTo(1, 0, false)
          }

          if (this.isBeginning) {
            mySwiperO.slideTo(4, 0, false)
          }
        }
      }
    });
  })
    



