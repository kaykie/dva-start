import React,{Component} from 'react';
import A from './A'

@A('提示')
class B extends Component{

  componentDidMount() {
    console.log(this.props)
  }

  render(){
    return(
      <div>
        {this.props.test}
        <div>
          {this.props.text2}
        </div>
        B组件2
      </div>
    )
  }
}


export default B
