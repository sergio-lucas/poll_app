/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
export function debounce(f, ms) {
  let isRun = false;

  return function(...args) {
    if (isRun) return;

    f.apply(this, args);

    isRun = true;

    // setTimeout(() => { isRun = false; }, ms);
  };
}
