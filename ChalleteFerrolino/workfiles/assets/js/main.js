// Wait for the DOM to fully load before running the script.
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Grab references to the search toggle button and search input field.
    const searchToggle = document.getElementById('searchToggle');
    const headerSearch = document.getElementById('headerSearch');

    // Add a click event listener to the search toggle button.
    searchToggle.addEventListener('click', function (event) {
        console.log('Search toggle clicked');
        event.stopPropagation(); // Prevents the click from propagating to document.
        // Toggle the display style of the search input between inline-block and none.
        headerSearch.style.display = headerSearch.style.display === 'inline-block' ? 'none' : 'inline-block';
        if (headerSearch.style.display === 'inline-block') {
            headerSearch.focus(); // Focus on the search input when it is shown.
            console.log('Search bar displayed and focused');
        }
    });

    // Select the navbar toggle element and add a click event to toggle the 'is-active' class.
    const navbarToggler = document.querySelector('.navbar-toggler');
    $(navbarToggler).click(function () {
        console.log('Navbar toggler clicked');
        $(this).toggleClass('is-active');
    });

    // Hide the search bar if a click occurs outside of it.
    document.addEventListener('click', function (event) {
        console.log('Document clicked');
        if (headerSearch.style.display === 'inline-block' && !searchToggle.contains(event.target) && !headerSearch.contains(event.target)) {
            headerSearch.style.display = 'none';
            console.log('Search bar hidden due to outside click');
        }
    });

    // Scroll to Top button functionality.
    const scrollToTopButton = $('#scrollToTop');
    $(window).scroll(function () {
        console.log('Window scrolled');
        // Show or hide the Scroll to Top button based on scroll position.
        if ($(this).scrollTop() > 100) {
            scrollToTopButton.fadeIn(300);
            console.log('Scroll to Top button fades in');
        } else {
            scrollToTopButton.fadeOut(300);
            console.log('Scroll to Top button fades out');
        }
    });

    // Smooth scrolling to the top of the page when the button is clicked.
    scrollToTopButton.click(function () {
        console.log('Scroll to Top button clicked');
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false; // Prevent default action.
    }).attr('aria-label', 'Scroll to top');

    // Initialize the Glide.js carousel.
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        breakpoints: {
            768: {
                perView: 1
            }
        }
    }).mount();
    console.log('Glide.js carousel initialized');

    // Prepare the document for Isotope.js layout library after it's fully loaded.
    $(document).ready(function () {
        console.log('Document ready for Isotope');
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'fitRows'
        });

        // Refresh the Isotope layout after all images have loaded.
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
            console.log('Isotope layout refreshed after images loaded');
        });

        // Initialize WOW.js for scroll animations.
        new WOW().init();
        console.log('WOW.js initialized');
    });

    // Newsletter subscription form submission handling.
    var newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from submitting traditionally.
            var email = this.querySelector('input[type="email"]').value;
            console.log('Subscribing email:', email);

            // SweetAlert2: Display a success message
            Swal.fire({
                title: 'Subscribed!',
                text: 'Thank you for subscribing to our newsletter!',
                icon: 'success',
                confirmButtonText: 'Close'
            });
        });
    }

});
