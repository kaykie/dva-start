import React,{Component} from 'react';


function A(title) {
  return function (WarpComponent) {
    return class A extends Component{
      render(){
        return(
          <div className='title'>
            父组件{title}
            <WarpComponent text2='name2' {...this.props}/>
          </div>
        )
      }
    }
  }
}


export default A
