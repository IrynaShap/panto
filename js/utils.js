document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    function activateTab(id) {
        contents.forEach(content =>
            content.style.display = (content.id === id) ? 'flex' : 'none'
        );
        tabs.forEach(tab =>
            tab.classList.toggle('active', tab.getAttribute('href') === '#' + id)
        );
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            history.pushState(null, '', '#' + id);
            activateTab(id);
        });
    });

    const initialId = location.hash.substring(1) || (tabs[0] && tabs[0].getAttribute('href').substring(1));
    if (initialId) activateTab(initialId);
});

document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.owl-carousel');

    carousels.forEach(carousel => {
        const items = parseInt(carousel.getAttribute('data-items')) || 5;
        $(carousel).owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            autoplaySpeed: 1000,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: items-2
                },
                1200: {
                    items: items-1
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let navBtn = this.querySelector(".nav-btn"),
        navCloseBtn = this.querySelector(".nav-close-btn"),
        toggleNav = newState => {
            let attr = "aria-expanded",
                state = navBtn.getAttribute(attr);

            navBtn.setAttribute(attr,newState);
        };
    menuTab = e => {
        let target = this.querySelector(".nav-btn[aria-expanded=true] ~ nav");

        if (target !== null) {
            let navLinks = target.querySelectorAll("a, button"),
                tries = 0,
                last = navLinks.length - 1;
            // try to find focus in open nav
            for (let l of navLinks) {
                if (this.activeElement !== l)
                    ++tries;
            }
            // put focus on X (first link) if outside or tabbing from last link
            let onLast = this.activeElement === navLinks[last],
                onFirst = this.activeElement === navLinks[0],
                notShifting = !e.shiftKey,
                shifting = e.shiftKey;

            if (tries === navLinks.length || (onLast && notShifting)) {
                e.preventDefault();
                navLinks[0].focus();
                // go to last link if shift-tabbing from X
            } else if (onFirst && shifting) {
                e.preventDefault();
                navLinks[last].focus();
            }
        }
    };

    navBtn.addEventListener("click",() => {
        toggleNav(true);
    });
    navCloseBtn.addEventListener("click",() => {
        toggleNav(false);
    });
    this.addEventListener("keydown",e => {
        // Esc
        if (e.keyCode === 27)
            toggleNav(false);
        // Tab
        else if (e.keyCode === 9)
            menuTab(e);
    });
});