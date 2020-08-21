import '../scss/main.scss';


console.log('HELLO 👋')

const navigation = document.querySelector(".navigation");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navigation.classList.add("navigation__scroll")
    //   logo.classList.add("logo__img--test")
    }
    else if (window.pageYOffset < 50) {
      navigation.classList.remove("navigation__scroll")
    //   logo.classList.remove("logo__img--test")
    }
  })