var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({triggerElement: "#animation1"})
.setClassToggle('#animation1','active')
.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#animation2"})
.setClassToggle('#animation2','active')
.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#animation3"})
.setClassToggle('#animation3','active')
.addTo(controller);

var scene4 = new ScrollMagic.Scene({triggerElement: "#animation4"})
.setClassToggle('#animation4','active')
.addTo(controller);

var setMultipleClasses = TweenMax.set($('#animation5'), {
    className: "container-fluid animated slideInUp"
});

var scene5 = new ScrollMagic.Scene({
  triggerElement: "#animation5"
})
.setTween(setMultipleClasses)
.addTo(controller);


