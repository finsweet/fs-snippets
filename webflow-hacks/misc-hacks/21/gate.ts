document.addEventListener('DOMContentLoaded', () => {
  const FORM_SELECTOR = '[fs-hacks-element="age-gate"]';
  const YEAR_SELECTOR = '[fs-hacks-element="year"]';
  const MONTH_SELECTOR = '[fs-hacks-element="month"]';
  const DAY_SELECTOR = '[fs-hacks-element="day"]';
  const ERROR_DIV_SELECTOR = '[fs-hacks-element="error"]';
  const form = document.querySelector<HTMLFormElement>(FORM_SELECTOR);
  const yearElement = document.querySelector<HTMLInputElement>(YEAR_SELECTOR);
  const monthElement = document.querySelector<HTMLInputElement>(MONTH_SELECTOR);
  const dayElement = document.querySelector<HTMLInputElement>(DAY_SELECTOR);
  const errorDiv = document.querySelector<HTMLDivElement>(ERROR_DIV_SELECTOR);
  const PROTECTED_PAGE = 'https://finsweethacks.com/21';
  if (!form || !yearElement || !monthElement || !dayElement || !errorDiv) return;
  // on form submit.
  form.addEventListener('submit', () => {
    // get year, month & day values
    const year = yearElement.value;
    const month = monthElement.value;
    const day = dayElement.value;
    // make date string
    // e.g. '2000-09-02'
    const date = year + '/' + month + '/' + day;
    // if user's age >= 21
    if (getAge(date) >= 21) {
      // set validAge to localStorage
      localStorage.setItem('validAge', 'true');
      // redirect to hack page
      window.location.replace(PROTECTED_PAGE);
    } else {
      // if user's age < 21
      // show error message
      errorDiv.style.display = 'block';
      // remove error message after 2 sec
      setTimeout(() => {
        errorDiv.style.display = 'none';
      }, 2000);
    }
  });
});

/**
 * This function returns the age of the user in years. It takes a date string as an argument.
 * @param {string} dateString - A date string in the format 'YYYY-MM-DD'.
 * @returns {number} - The age of the user in years.
 * */
function getAge(dateString: string): number {
  // get today's date
  const today = new Date();
  // get user birth date
  const birthDate = new Date(dateString);
  // calculate user age
  // subtract their birth year from current year
  let age = today.getFullYear() - birthDate.getFullYear();
  // // subtract user birth month from current month
  const month = today.getMonth() - birthDate.getMonth();
  // if month <= 0
  // OR
  // today's date is less than user's birth date
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    // reduce user's age by 1
    age -= 1;
  }
  // return user's current age
  return age;
}
