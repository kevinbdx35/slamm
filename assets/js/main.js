!function() {
    "use strict";
    window.Site = {
        liftoff: function t(e) {
            Site.Community.autoAdvance()
        },
        Community: {
            image: document.querySelector(".community img:not(hidden)"),
            advanceSlider: function t() {
                var e, i = null !== (e = Site.Community.image.nextElementSibling) && void 0 !== e ? e : Site.Community.image.parentNode.firstElementChild;
                Site.Community.image.setAttribute("hidden", null),
                i.removeAttribute("hidden"),
                Site.Community.image = i
            },
            autoAdvance: function t() {
                setInterval(Site.Community.advanceSlider, 6e3)
            }
        }
    },
    Site.liftoff()
}();
//# sourceMappingURL=main.js.map