import React,{Component,PropTypes} from 'react';

import '../assets/styles/index.less';



import {
	Container,
  Grid,
  Col,
} from 'amazeui-touch';

export default class IndexView extends Component {


	render() {
  return(
		<Container scrollable={true}>
			<div className='header'>
        <span className='title'>实时路况提醒</span>
        <label className='titleSup'>{this.props.Traffic}</label>
        <p>{this.props.road1}&emsp;&emsp;&emsp;{this.props.amble}</p>
        <p>{this.props.road2}&emsp;&emsp;{this.props.jam}</p>
        <p>{this.props.road3}&emsp;&emsp;&emsp;{this.props.ambles}</p>
        <p>{this.props.road4}&emsp;&emsp;{this.props.jams}</p>
        <label className='weather'>
          <img src='../assets/images/yun.svg' alt='...'/>
          <p>{this.props.temperature}</p>
        </label>
			</div>
      <section>
        <p className='news'>{this.props.TrafficInfo}</p>
        <Grid svg={4}>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
        </Grid>
        <Grid svg={4}>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
        </Grid>
      </section>
		</Container>

		);
	}
}


IndexView.propTypes={
  Traffic:PropTypes.string,
  road1:PropTypes.string,
  road2:PropTypes.string,
  road3:PropTypes.string,
  road4:PropTypes.string,
  amble:PropTypes.string,
  jam:PropTypes.string,
  ambles:PropTypes.string,
  jams:PropTypes.string,
  temperature:PropTypes.string,
  TrafficInfo:PropTypes.string,
};





