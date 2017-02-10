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
  renderPrev() {
    return <img src={require('./imgs/btn_pre_sheet.svg')} alt=""/>;
  }

  renderNext() {
    return <img src={require('./imgs/btn_next_sheet.svg')} alt=""/>;
  }

  render() {
    const { className, onPageChange, pageInfo  } = this.props;

    const classes = classnames([
      'pagination-component',
      className,
    ]);

    return (
      <div className={classes}>
        <ReactPaginate
          pageCount={pageInfo.lastPage}
          pageRangeDisplayed={0}
          marginPagesDisplayed={4}
          initialPage={parseInt(pageInfo.currentPage - 1, 10)}
          previousLabel={this.renderPrev()}
          nextLabel={this.renderNext()}
          onPageChange={onPageChange}
          containerClassName="pagination-container"
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  className: React.PropTypes.string,
  pageInfo: React.PropTypes.object,
  onPageChange: React.PropTypes.func.isRequired,
};

export default Pagination;
