import React from 'react';
import { formatDistanceToNowStrict} from 'date-fns'
import './task.css';

const  Task = ({ text, addTime, onDelete, onActive, active} ) => {
	
	Task.defaultProps = {
		text:'',
		addTime: new Date(),
		active: true
	}
	
	Task.propTypes = {
		text:(props, propsName, propsComponent)=>{
			const value = props[propsName];
			if (typeof value ==='string') return null
			else return TypeError(`${value} не является строкой`)
		},
			
		addTime:(props, propsName, propsComponent)=>{
			const value = props[propsName];
			if (value.getTime) return null
			else return TypeError(`${value} не является датой`)
		}, 
		
		active:(props, propsName, propsComponent)=>{
			const value = props[propsName];
			if (typeof value === 'boolean') return null
			else return TypeError(`${value} не является boolean`)
		}
		
	}
	
	
		let liClass ='';
		let checked = false;
		if (!active){
			liClass +='completed';
			checked = !checked;
		}
		
		
		
		return <li className={liClass} >
				<div className="view">
					<input className="toggle" type="checkbox" checked = {checked} onClick = {onActive} readOnly/>
					<label>
						<span className="description" onClick = {onActive} >{text}</span>		
						<span className="created"> created {formatDistanceToNowStrict(addTime)} ago </span>
					</label>
					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy"
					onClick = {onDelete}
					></button>
					
				</div>
				<input type="text" className="edit" value = {text} readOnly/>
          	</li>

}


export default Task;