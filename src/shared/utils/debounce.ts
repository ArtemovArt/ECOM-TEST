export const debounce = function (fn: (...args: unknown[]) => unknown, t: number = 1000) {
  let timer: number = 0;
  return function (...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};
