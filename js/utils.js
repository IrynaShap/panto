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
        const items = parseInt(carousel.getAttribute('data-items')) || 4;

        $(carousel).owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            autoplaySpeed: 1000,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: items
                }
            }
        });
    });
});