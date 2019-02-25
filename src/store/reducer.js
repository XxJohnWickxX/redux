const initialState = {
    counter: 0,
    storage: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SUMAUNO': 
            console.log("si suma")
            return {
                ...state, counter: state.counter + action.value
            }
        case 'RESTAUNO':
            console.log("si resta")
            return{
                ...state, counter: state.counter + action.value
            }
        case 'AGREGARCINCO':
            console.log("si agrega 5")
            return{
                ...state, counter: state.counter + action.value
            }
        case 'RESTACINCO':
            console.log("si resta 5")
            return{
                ...state, counter: state.counter + action.value
            }
        case 'GUARDARVALOR':
            console.log("se guarda")
            const datoActual = state.counter
            console.log(state);
            return{
                ...state, storage: state.storage.concat({
                    value: datoActual
                })
            }
         default: 
            return state
            

    }
    
    
}

export default reducer