"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    const pageWrapper = document.querySelector(".page-wrapper");
    const loadingWrapper = document.querySelector('.hack52-loading-wrapper');
    const seenAnimation = sessionStorage.getItem('seenAnimation');
    if (!seenAnimation) {
        loadingWrapper.style.display = "flex";
        setTimeout(() => {
            loadingWrapper.style.visibility = "hidden";
            pageWrapper.style.display = "block";
        }, 3000);
        sessionStorage.setItem('seenAnimation', '1');
    }
    else {
        loadingWrapper.style.visibility = "hidden";
        pageWrapper.style.display = "block";
    }
});
