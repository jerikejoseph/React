import React, { Component } from "react"

class App extends Component {
constructor(props){
  super(props);
  this.state={
    inputvalue:"",
    items:[]
  }
}

handleinput=(event)=>{
//  console.log(event.target.value);
  this.setState({inputvalue:event.target.value})
}

Add=()=>{
  this.setState({items:[...this.state.items,this.state.inputvalue],inputvalue:""})
}


  render (){
    console.log(this.state.items);
    
     return<div>
      <div>
      <input type="text" onChange={this.handleinput}  value={this.state.inputvalue} />
      <button onClick={this.Add}>Add</button>
      </div>
      <div>
        <ul>
          {
            
          this.state.items.map((items,index)=><li>{items}<button>Delete</button></li>) 
            }
          
          
          </ul>
      </div>
     </div>
    }
}

export default App
