export const debounce = <Args extends unknown[], Return>(fn: (...args: Args) => Return, t: number = 300) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, t);
  };
};
