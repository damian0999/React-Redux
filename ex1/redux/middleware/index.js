export const crashReporter = store => next => action => {
  try {
    next(action);
  } catch (e) {
    console.error('error with action = ', action)
    console.error(e);
  }
}
