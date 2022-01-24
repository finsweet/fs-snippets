document.addEventListener('DOMContentLoaded', () => {
  // get the amount (length) of ".cms-job-counter" classes
  // and assign that amount to a constant named jobsCounter
  const jobsCounter = document.querySelectorAll('.cms-jobs-counter').length;

  // select the element with class ".hack3-jobs-amount"
  const jobsCount: HTMLElement = document.querySelector('.hack3-jobs-amount') as HTMLElement;

  // set the jobsCount textContent to the value of jobsCounter
  jobsCount.innerHTML = jobsCounter.toString();
});
