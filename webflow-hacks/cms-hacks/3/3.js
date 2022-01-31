document.addEventListener('DOMContentLoaded', function () {
  var JOBS_COUNTER_SELECTOR = '[fs-hacks-element="cms-jobs-counter"]';
  var JOB_COUNT_SELECTOR = '[fs-hacks-element="hack3-job-count"]';
  // get the amount (length) of elements with selector JOBS_COUNTER_SELECTOR
  // and assign that amount to a constant named jobsCounter
  var jobsCounter = document.querySelectorAll(JOBS_COUNTER_SELECTOR).length;
  // select the element with data attribute JOB_COUNT_SELECTOR
  var jobCount = document.querySelector(JOB_COUNT_SELECTOR);
  if (!jobCount) return;
  // set the jobsCount textContent to the value of jobsCounter
  jobCount.innerHTML = jobsCounter.toString();
});
