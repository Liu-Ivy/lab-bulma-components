import React from 'react';



class FormField extends React.Component{
  render (){
    return (
		 <div>
		 <div class="field">
        <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith"></input>
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
  </div>
</div>
<div class="field">
  <label class="label">Password</label>
  <div class="control">
    <input class="input" type="password" placeholder="**************"></input>
  </div>
</div>
<button class="button is-rounded my-class is-danger is-small">Submit</button>
  
		 </div>
		);
  }
}

export default  FormField;