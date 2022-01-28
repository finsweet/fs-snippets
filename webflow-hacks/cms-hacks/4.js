// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // declare the dom elements
    var filterLinks = document.querySelectorAll('[fs-hacks-element="hack4-filter-button"]');
    var sections = document.querySelectorAll('[fs-hacks-element="hack4-cms-anchor-section"]');
    // check that number of sections and filter Links match
    if (sections.length !== filterLinks.length) {
        return;
    }
    // for each filter Link
    filterLinks.forEach(function (link, index) {
        // get its text content and reformat to a valid ID
        var linkText = link.innerText.replace(/\W/g, '-').toLowerCase();
        // set the reformatted linkText as the link href attribute
        link.setAttribute('href', '#' + linkText);
        // set the section is to linkText
        sections[index].setAttribute('id', linkText);
    });
    // set up intersection observer to observe when the anchor sections are in the viewport
    var observer = new IntersectionObserver(function (entries, observer) {
        // for each anchor section
        entries.forEach(function (entry) {
            // if it's in the viewport
            if (entry.isIntersecting) {
                // for each link
                filterLinks.forEach(function (link) {
                    // remove the active class from the current active link
                    link.classList.remove('hack4-active');
                    // check if current active link href is the target
                    if (link.href === "#".concat(entry.target.id)) {
                        // add the active class to the current active link
                        link.classList.add('hack4-active');
                    }
                });
            }
        });
        // setting threshold to 1 ensures the whole anchor section
        // is in viewport before adding active class to active link
        // this part ', {threshold: 1}' is optional
    }, { threshold: 1 });
    // start the intersection observer for each anchor section
    sections.forEach(function (section) {
        observer.observe(section);
    });
});
