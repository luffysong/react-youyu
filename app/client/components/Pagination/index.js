/**
 * Pagination
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import ReactPaginate from 'react-paginate';

/**
 * Internal dependencies
 */
import './style.less';

class Pagination extends PureComponent {
  render() {
    return (
      <div className="pagination-component">
        <ReactPaginate
          containerClassName="pagination-container"
        />
      </div>
    );
  }
}

Pagination.propTypes = {

};

export default Pagination;
