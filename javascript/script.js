document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);


    var navLinks = document.querySelectorAll('.content .list-menu li a');

    navLinks.forEach(function(link) {
        var linkPath = link.pathname;
        linkPath = linkPath.substring(linkPath.lastIndexOf('/') + 1);

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
