import React from 'react';

class ClassComponent extends React.Component{
    clickMe(){
        alert("Hello Satish, Missing you hero!")
    }

    render(){
        return <><h1>Hey Satish!, This is a class component.</h1><br></br>
        <button onClick={()=>this.clickMe()}>Click Me</button>
        
        
        </>
    }
}
export default ClassComponent;
