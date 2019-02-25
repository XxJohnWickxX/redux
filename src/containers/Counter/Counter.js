import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //         default:
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.contador} />
                <CounterControl label="Increment" clicked={this.props.suma1} />
                <CounterControl label="Decrement" clicked={this.props.resta1}  />
                <CounterControl label="Add 5" clicked={this.props.agrega5}  />
                <CounterControl label="Subtract 5" clicked={this.props.resta5}  />
                <button onClick = {this.props.guardar}>Guardar resultado</button>
                <hr/>
                <ul>
                    {this.props.caja.map((cajita, id) => {
                        return (
                            <li key = {id}>{cajita.value}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{contador: state.counter,
    caja:state.storage,
 }
}

const mapDispatchToProps = (dispatch) => {
    return{suma1: () => dispatch({
        type:"SUMAUNO",
        value: 1
    }),
    resta1: () => dispatch({
        type:'RESTAUNO',
        value: -1
    }),
    agrega5: () => dispatch({
        type:'AGREGARCINCO',
        value: 5
    }),
    resta5: () => dispatch({
        type:'RESTACINCO',
        value: -5
    }),
    guardar:() => dispatch({
        type: 'GUARDARVALOR'
    })
}
    

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);