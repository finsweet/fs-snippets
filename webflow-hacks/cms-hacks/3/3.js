"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const jobsCounter = document.querySelectorAll('.cms-jobs-counter').length;
    const jobsCount = document.querySelector('.hack3-jobs-amount');
    jobsCount.innerHTML = jobsCounter.toString();
});
