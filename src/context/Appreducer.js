const watchlaterReducer = (state, action) => {
    switch (action.type) {
        case 'ADDTOWATCHLATER':
            return {
                ...state,
                watchlater: [action.payload, ...state.watchlater],
            };
        case 'REMOVEFROMWATCHLATER':
            return {
                ...state,
                watchlater: state.watchlater.filter(movie => movie.id !== action.payload),
            };
        default:
            return state;  // No need to spread action.payload in the default case
    }
};

export default watchlaterReducer;
