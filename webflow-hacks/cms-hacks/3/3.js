'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const jobsCounter = document.querySelectorAll('.cms-jobs-counter').length;
  const jobsCount = document.querySelector('.hack3-jobs-amount');
  if (!jobsCount) return;
  jobsCount.innerHTML = jobsCounter.toString();
});
