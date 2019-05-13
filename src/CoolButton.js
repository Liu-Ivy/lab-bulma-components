import React from 'react';

class CoolButton extends React.Component {
  render (){
		return (
			<div className="coolButton">
			<button class="button is-rounded my-class is-danger is-small">Login</button>
      <button class="button is-small is-success">Signup</button>
			</div>
		);  
  }
}

export default CoolButton;