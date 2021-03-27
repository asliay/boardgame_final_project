// Initial store state object.
const initialState = { 
    loggedIn: false
} 

// Redux reducer which contains the actions that change state.
const appReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, loggedIn: !state.loggedIn};
        case 'LOGOUT':
            return {...state, loggedIn: state.loggedIn}; 
        default:
            return state;
        }
};

export default appReducer;