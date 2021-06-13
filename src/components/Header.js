import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
    return (
      <header className="header">
        <h1>{title}</h1>
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          onClick={onAdd}
        />
      </header>
    );
}



Header.defaultProps =
{
    title : "Task Manager"
}

Header.propTypes =
{  
    title : PropTypes.isRequired
}
export default Header