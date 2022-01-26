document.addEventListener('DOMContentLoaded', function () {
  // get the amount (length) of ".cms-job-counter" classes
  // and assign that amount to a constant named jobsCounter
  var jobsCounter = document.querySelectorAll('[fs-hacks-element="CMS_JOBS_COUNTER"]').length;
  console.log(jobsCounter);
  // select the element with class ".hack3-jobs-amount"
  var jobCount = document.querySelector('[fs-hacks-element="HACK3_JOB_COUNT"]');
  if (!jobCount) return;
  // set the jobsCount textContent to the value of jobsCounter
  jobCount.innerHTML = jobsCounter.toString();
});
