import React,  {Component}  from 'react';
import './new-task-form.css'; 

export default class NewTaskForm  extends Component {
	
	static defaultProps = {
		addTask:() => {}
	};
	
	
	state ={
		text:''
	}
	
	 addNewTask =(event) =>{
		 this.setState({
			text: event.target.value 
		 })
		
	}
	 
	 onSubmit = (event) =>{
		 event.preventDefault();
		 this.props.addTask(this.state.text);
		 this.setState({
			 text:''
		 })
	 }
	
	render(){
		
		return (
		<header className = "header">
		<h1>todos</h1>
		<form onSubmit = {this.onSubmit}>	
		<input className = "new-todo" 
			placeholder = "What needs to be done?"
			value = {this.state.text}
			onChange = {this.addNewTask}
			/>
		</form>
	</header>
	)
	
	}
}

