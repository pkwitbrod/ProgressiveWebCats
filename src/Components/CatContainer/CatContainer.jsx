import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from "shards-react";
import Cat from '../Cat/Cat';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./CatContainer.css";
import OnlineIndicator from '../OnlineIndicator/OnlineIndicator';
import CatService from '../../Services/Cat-Service'



class CatContainer extends PureComponent { 
  constructor(props) {
    super(props);
    console.log(props);
    this.catService = new CatService();
    this.state = {
      hasError: false,
      catImageUrl: "",
      catText: "",
    };
  }




  setAppState = (isOnline) => {
    if(isOnline) {
      const onlineCat = this.catService.getOnlineCat();
      this.setState({catImageUrl: onlineCat.catImage, catText: onlineCat.catText, isOnline: isOnline});
    } else {
      const offlineCat = this.catService.getOfflineCat();
      this.setState({catImageUrl: offlineCat.catImage, catText: offlineCat.catText, isOnline: isOnline})
    }
  }

  componentWillMount = () => {
    this.setState({isOnline: this.props.isOnline});
  }

  componentDidMount = () => {
    this.setAppState(this.props.isOnline);
  }

  componentWillReceiveProps = (nextProps) => {
   //this.setState({isOnline: nextProps.isOnline});
   this.setAppState(nextProps.isOnline);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('CatContainer will update', nextProps, nextState);

  }

  componentDidUpdate = () => {
    console.log(this.props);
  }

  componentWillUnmount = () => {
  }

  newCatHandler = () => {
    console.log('New Cat Coming!');
    this.setAppState(this.props.isOnline);
  }



  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Container className="example-container" fluid>
        <Row>
          <Col>
            <h1>Web Cats</h1>
            <OnlineIndicator isOnline={this.state.isOnline}/>
          </Col>
        </Row>
        <Row>
          <Cat catImageUrl={this.state.catImageUrl} catText={this.state.catText} newCatHandler={this.newCatHandler}></Cat>
        </Row>
      </ Container>
    );
  }
}

CatContainer.propTypes = {
  // bla: PropTypes.string,
};

CatContainer.defaultProps = {
  // bla: 'test',
};

export default CatContainer;
