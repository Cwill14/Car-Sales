import React from 'react';
import { connect } from 'react-redux';

import { buyItem, removeFeature } from './store/actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

class App extends React.Component {

  removeFeature = item => {
    // dispatch an action here to remove an item
    this.props.removeFeature(item);
  };

  buyItem = item => {
    return !this.props.car.features.includes(item)
    ? this.props.buyItem(item)
    : null
  };

  render() {

    return (
      <div id="boxes">
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
