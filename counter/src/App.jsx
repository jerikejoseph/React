import React, { Component } from 'react'


class App extends Component{
// state={name:"",age:"",phone:"",email:"",pin:"",address1:"",address2:"",image:"",dob:"",blood:""}
// handleSubmit=(e)=>{
//   e.preventDefault()
//   console.log(this.state.name,this.state.age,this.state.email,this.state.pin,this.state.address1,this.state.address2,this.state.image,this.state.dob,this.state.blood);
  
// }


constructor(props){
  super(props)
  this.inputname=React.createRef()
  this.inputage=React.createRef()
}
handleSubmit=(e)=>{
  e.preventDefault()
  console.log(this.inputname.value);
  console.log(this.inputage.value);
  
  
}

// onHandleChange1=(e)=>{
//  //console.log(e.target.value);
//  console.log(`change1 ${e.target.value}`);
//  this.setState({name:e.target.value})
 
// }
// onHandleChange2=(e)=>{
//  // console.log(e.target.value);
//  console.log(`change2 ${e.target.value}`);
//  this.setState({age:e.target.value})
//  }
// onHandleChange=(e)=>{
//  //console.log(e.target.value);
//   this.setState({[e.target.name]:e.target.value})
// }

  render() {
   return <div>
      <form action="">
        {/* <input type="text" name="name" placeholder="name" onChange={this.onHandleChange}/>
        <input type="text" name="age" placeholder="age" onChange={this.onHandleChange}/>
        <input type="text" name="phone" placeholder="phone" onChange={this.onHandleChange}/>
        <input type="text" name="email" placeholder="email" onChange={this.onHandleChange}/>
        <input type="text" name="pin" placeholder="pin" onChange={this.onHandleChange}/>
        <input type="text" name="address1" placeholder="address1" onChange={this.onHandleChange}/>
        <input type="text" name="address2" placeholder="address2" onChange={this.onHandleChange}/>
        <input type="text" name="image" placeholder="image" onChange={this.onHandleChange}/>
        <input type="text" name="dob" placeholder="dob" onChange={this.onHandleChange}/>
        <input type="text" name="blood" placeholder="blood" onChange={this.onHandleChange}/> */}
        <input type="text"  placeholder="name" ref={input=>this.inputname=input}/>
        <input type="text" placeholder="age" ref={input=>this.inputage=input} />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    </div>
   }
   
}

export default App
