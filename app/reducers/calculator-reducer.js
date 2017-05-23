const calculatorReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD":
        return Object.assign({}, state, {
            // Update state object here
            result: parseFloat(action.x) + parseFloat(action.y)
        });
    default:
        // Always return existing state object if not
        // a type of action this reducer cares about
        return state;
    }
};

export default calculatorReducer;