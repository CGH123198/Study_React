const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('prevState', store.getState());
    console.log('Action', action);
    next(action);
    console.log('nextState', store.getState());
    console.groupEnd();
};

export default loggerMiddleware;