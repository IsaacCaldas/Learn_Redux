import '../../styles/Card.css'

import React from 'react';

export default props => {

  const cardStyle = {
    backgroundColor: props.color || '#333333',
  }
  const cardContentStyle = {
    backgroundColor: props.colorContent || '#444444',
  }

  return (

    <div className='Card' style={ cardStyle }>
      <div className="header">
        <h3 className="title">{ props.title }</h3>
      </div>
      <div className="content" style={ cardContentStyle }>
        { props.children }
      </div>
    </div>

  );

}