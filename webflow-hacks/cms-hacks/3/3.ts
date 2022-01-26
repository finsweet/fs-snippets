document.addEventListener('DOMContentLoaded', () => {
  // get the amount (length) of elements with data attribute[fs-hacks-element="CMS_JOBS_COUNTER"]
  // and assign that amount to a constant named jobsCounter
  const jobsCounter = document.querySelectorAll('[fs-hacks-element="CMS_JOBS_COUNTER"]').length;

  // select the element with data attribute [fs-hacks-element="HACK3_JOB_COUNT"]
  const jobCount = document.querySelector<HTMLElement>('[fs-hacks-element="HACK3_JOB_COUNT"]');

  if (!jobCount) return;
  // set the jobsCount textContent to the value of jobsCounter
  jobCount.innerHTML = jobsCounter.toString();
});
