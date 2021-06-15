
import React from 'react';
import TasksFilter from '../tasks-filter';
import './footer.css';


const Footer  = ({count, btnClear, filter, btnFilter})=>{

Footer.defaultProps = {
	count : 0,
	btnClear : () =>{},
}	
	
	Footer.propTypes = {
		count: (props, propsName, propsComponent)=>{
			const value = props[propsName];
			if ((typeof value ==='number') && !isNaN(value)) return null
			else return TypeError(`${value} должен быть числом`)
		}, 
		
		btnClear : (props, propsName, propsComponent)=>{
			const value = props[propsName];
			if (typeof value ==='function') return null
			else return TypeError(`${value} не является функцией`)
		} 
	}
	
	return (

        <footer className="footer">
          <span className="todo-count">{count} items left</span>
         <TasksFilter
		   filter = {filter}
		   btnFilter = {btnFilter}
		/>
          <button className="clear-completed"
			onClick = {btnClear}
			>Clear completed</button>
        </footer>
	)
}




export default Footer;