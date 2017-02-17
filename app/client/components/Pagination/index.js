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
  constructor(props) {
    super(props);
    this.onKeyDown = this.handleKeyDown.bind(this);
    this.onKeyUp = this.handleKeyUp.bind(this);
    this.KEYCODE = {
      ENTER: 13,
    };
    this.state = {
      current: parseInt(props.pageInfo.currentPage, 10),
    };
  }

  handleKeyDown(evt) {
    if (evt.keyCode === this.KEYCODE.ARROW_UP || evt.keyCode === this.KEYCODE.ARROW_DOWN) {
      evt.preventDefault();
    }
  }

  handleKeyUp(evt) {
    const _val = evt.target.value;
    let val;

    if (_val === '') {
      val = '';
    } else if (isNaN(Number(_val))) {
      val = this.state.current;
    } else {
      val = Number(_val);
    }

    this.setState({
      current: val,
    });

    if (evt.keyCode === this.KEYCODE.ENTER) {
      this.props.onPageChange({
        selected: Number(val) - 1,
      });
    }
  }

  renderPrev() {
    return <img src={require('./imgs/btn_pre_sheet.svg')} alt=""/>;
  }

  renderNext() {
    return <img src={require('./imgs/btn_next_sheet.svg')} alt=""/>;
  }

  render() {
    const { className, onPageChange, pageInfo  } = this.props;

    if (!onPageChange
      || !(pageInfo && (pageInfo.currentPage !== undefined) && (pageInfo.lastPage !== undefined))) {
      return null;
    }

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
          initialPage={(this.state.current - 1) || 0}
          previousLabel={this.renderPrev()}
          nextLabel={this.renderNext()}
          onPageChange={onPageChange}
          containerClassName="pagination-container"
        />
        <div className='pagination-input'>
          <span>第</span>
          <input
            type="text"
            value={this.state.current}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            onChange={this.onKeyUp}
          />
          <span>页</span>
        </div>
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
