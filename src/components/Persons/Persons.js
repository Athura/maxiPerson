import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('Inside component will mount');
    }

    // This method runs after the component output has been rendered to the DOM
    componentDidMount() {
        console.log('Inside component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Update persons.js]', nextProps);
    }

    // PureComponents have the below kind of check already built in so we don't need this
    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log('Update persons.js inside should component update', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('Persons component will now update');
    }

    componentDidUpdate() {
        console.log('Persons: Component did update');
    }

    //
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