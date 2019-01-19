import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('Inside component will mount');
    }

    componentDidMount() {
        console.log('Inside component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Update persons.js]', nextProps);
        // return false or true normally
        // We return false when our application shouldn't update
        // We return true when our app should update

    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('Update persons.js inside should component update', nextProps, nextState);
    }


    componentWillUnmount = () => {
        console.log('I\'m unmounting persons!');
    }


    render () {
        return this.props.persons.map( ( person, index ) => {
            return <ErrorBoundary key={person.id}>
            <Person
            click={() => this.props.clicked( index )}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={( event ) => this.props.changed( event, person.id )} />
        </ErrorBoundary>
        } );

    }
}

export default Persons;