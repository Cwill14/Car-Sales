import React from 'react';
import { connect } from 'react-redux';

import { buyItem, removeFeature } from './store/actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

class App extends React.Component {
  // const state = {};
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  removeFeature = item => {
    // dispatch an action here to remove an item
    this.props.removeFeature(item);
  };

  buyItem = item => {
    // dipsatch an action here to add an item

    // MAP ID CHECKING, NOT WORKING

    // this.props.car.features.map(f => {
    //   if(item.id === f.id){
    //     return console.log("cannot add same item more than once");
    //   } else {
    //     return this.props.buyItem(item);
    //   }
    // })
    
    return this.props.buyItem(item);

    // INCLUDES , NOT WORKING
    // console.log(this.props.car.features.toString());
    // this.props.car.features.map(f => {
    //   if(this.props.car.features.toString().includes(){
        
    //   } else{return null}
    // })
  };

  render() {

    return (
      <div className="boxes">
      <div className="box">
        <Header car={this.props.car} />
        <AddedFeatures car={this.props.car} removeFeature={this.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={this.props.store} buyItem={this.buyItem} />
        <Total car={this.props.car} additionalPrice={this.props.additionalPrice} />
      </div>
    </div>
  );
  }
};

const mapStateToProps = state => ({
  car: state.car,
  store: state.store,
  additionalPrice: state.additionalPrice
})

export default connect(
  mapStateToProps,
  { removeFeature, buyItem }
)(App);
