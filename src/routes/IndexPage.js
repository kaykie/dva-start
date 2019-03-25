import React from 'react';
import { connect } from 'dva';
import B  from '../components/B'
import style from  './index.less'

class IndexPage extends React.Component{


  render(){
    return(
      <div className={style.title}>
        <B test='name'/>
      </div>
    )
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
