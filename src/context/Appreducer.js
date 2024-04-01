export default (state, action) => {
    switch(action.type){

        case 'ADDTOWATCHLATER':
            return {
                ...state,
                watchlater: [action.payload, ...state.watchlater]
            };
        case 'REMOVEFROMWATCHLATER':
            return {
                ...state,
                watchlater: state.watchlater.filter(movie => movie.id !== action.payload)
            };
        default:
            return {...state, 
                watchlater : [action.payload, ...state.watchlater]
    }}
   
}