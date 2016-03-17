 import React from 'react';
 import ContactsList from './ContactsList';

 let contacts = [{
 	id: 1,
 	name: 'Sarah',
 	phone: '555 555 5555'
 }, {
 	id: 2,
 	name: 'Cat',
 	phone: '123 555 5555'
 }, {
 	id: 3,
 	name: 'Ben',
 	phone: '456 555 5555'
 }, {
 	id: 4,
 	name: 'Someone',
 	phone: '789 555 5555'
 }]

 class App extends React.Component {
 	render() {
 		return (
 			<div>
 				<h1>Contacts List</h1>
 				<ContactsList contacts={this.props.contacts} />
 			</div>
		)
 	}
 }

 React.render(<App contacts={contacts}/>, document.getElementById('app'));