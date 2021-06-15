import React from 'react';
import Task from '../task';
import './task-list.css';

const TaskList = ({todos, onDelete, onActive}) =>{
	
	TaskList.defaultProps = {
		onDelete: () => {},
		onActive: () => {},
		
	}
	
	const validateFunction = (props, propsName, propsComponent)=>{
			const value = props[propsName];
			if (typeof value ==='function') return null
			else return TypeError(`${value} не является функцией`)
		}
	
	TaskList.propTypes = {
		onDelete: validateFunction,
		onActive: validateFunction,
		
		
	}
	
	const elements =  todos.map(item =>{
		return (
			<Task {...item} 
					key  = {item.id}
					onDelete = {() => onDelete(item.id)}	
					onActive = {() => onActive(item.id)}/>
		)
	})
		
	return(
	<main className = 'main'>
		<ul className = 'todo-list' key = 'ul'>
		{elements}
		</ul>
		
	</main>
		  )
}

export default TaskList;