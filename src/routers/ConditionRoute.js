import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const ConditionRoute = ({
  condition,
  component: Component,
  redirectFalse,
  ...nextProps
}) => {
  return (
    <Route {...nextProps} 
      component={
        (props) => (
          (condition) ? <Component {...props} /> : <Redirect to={redirectFalse} />
        )
      }
    />
  )
}

ConditionRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirectFalse: PropTypes.string.isRequired
};