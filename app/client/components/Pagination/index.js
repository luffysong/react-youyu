/**
 * Pagination
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import ReactPaginate from 'react-paginate';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.less';

class Pagination extends PureComponent {
  render() {
    const { className } = this.props;

    const classes = classnames([
      'pagination-component',
      className,
    ]);

    return (
      <div className={classes}>
        <ReactPaginate
          containerClassName="pagination-container"
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  className: React.PropTypes.string,
};

export default Pagination;
