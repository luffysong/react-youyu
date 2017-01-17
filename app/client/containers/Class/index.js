/**
 * Class
 */

/**
 * External dependencies
 */
import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import './style.less';

export class Class extends PureComponent {
  render() {
    return (
      <div className="class">
        <Helmet
          title="Class"
          meta={[
            { name: 'description', content: 'Description of Class' },
          ]}
        />
        Class
      </div>
    );
  }
}

Class.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Class);
