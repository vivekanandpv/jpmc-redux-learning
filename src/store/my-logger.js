export const myLogger = (store) => (next) => (action) => {
  console.log('my-logger intercepts', action);
  next(action);
};
