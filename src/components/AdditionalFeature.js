import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button" 
        disabled={props.car.features.includes(props.feature)} 
        onClick={()=> props.addFeature(props.feature) }
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
