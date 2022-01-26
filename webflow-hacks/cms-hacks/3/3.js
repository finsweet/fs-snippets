document.addEventListener('DOMContentLoaded', function () {
  // get the amount (length) of elements with data attribute[fs-hacks-element="cms-jobs-counter"]
  // and assign that amount to a constant named jobsCounter
  var jobsCounter = document.querySelectorAll('[fs-hacks-element="cms-jobs-counter"]').length;
  // select the element with data attribute [fs-hacks-element="hack3-job-count"]
  var jobCount = document.querySelector('[fs-hacks-element="hack3-job-count"]');
  if (!jobCount) return;
  // set the jobsCount textContent to the value of jobsCounter
  jobCount.innerHTML = jobsCounter.toString();
});
