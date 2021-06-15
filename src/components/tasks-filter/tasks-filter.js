import React, {Component} from 'react';
import './tasks-filter.css';
 

export default class TasksFilter extends Component{

	button = [
		{name:'all', value:'All'},	
		{name:'active', value:'Active'},	
		{name:'complected', value:'Complected'},	
	
	];

	render() {
		const buttons  = this.button.map(el =>{
			let classNm = ''
			if (this.props.filter === el.name) classNm += 'selected'
			return(
				<li key = {el.name}>
					<button className = {classNm}
					onClick = {() =>this.props.btnFilter(el.name)}
					>{el.value}</button>
				</li>
			)
		})	
		
		
		return (
	 
			<ul className="filters">
				{buttons}
			</ul>
		)
		
	}

	
}

	TasksFilter.defaultProps = {
			filter: 'all',
			btnFilter: () =>{}
		}


	TasksFilter.propTypes = {

		filter: (props, propsName, propsComponent)=>{
				const value = props[propsName];
				if (typeof value ==='string') return null
				else return TypeError(`${value} должен быть строкой`)
			}, 

			btnFilter : (props, propsName, propsComponent)=>{
				const value = props[propsName];
				if (typeof value ==='function') return null
				else return TypeError(`${value} не является функцией`)
			} 
		}
