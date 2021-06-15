import React from 'react';
import PropTypes from 'prop-types';
import ultimatePagination, { ITEM_TYPES } from 'ultimate-pagination';
import './styles.scss';

const SkyPaging = ({
  currentPage, itemCount, maxPages, pageSize, onCurrentPageChange,
}) => {
  const paginationModel = ultimatePagination.getPaginationModel({
    currentPage,
    totalPages: Math.ceil(itemCount / pageSize),
    hideEllipsis: true,
    hideFirstAndLastPageLinks: true,
    boundaryPagesRange: 0,
    siblingPagesRange: Math.floor(maxPages / 2),
  });

  const renderItem = (item) => {
    switch (item.type) {
      case ITEM_TYPES.PREVIOUS_PAGE_LINK:
        return (
          <li key={item.key}>
            <button
              className="sky-btn sky-btn-default sky-paging-btn sky-paging-btn-previous"
              type="button"
              disabled={item.isActive}
              onClick={() => { onCurrentPageChange(currentPage - 1); }}
            >
              <i className="fa sky-icon fa-caret-left" />
            </button>
          </li>
        );
      case ITEM_TYPES.NEXT_PAGE_LINK:
        return (
          <li key={item.key}>
            <button
              className="sky-btn sky-btn-default sky-paging-btn sky-paging-btn-next"
              type="button"
              disabled={item.isActive}
              onClick={() => { onCurrentPageChange(currentPage + 1); }}
            >
              <i className="fa sky-icon fa-caret-right" />
            </button>
          </li>
        );
      case ITEM_TYPES.PAGE:
        return (
          <li className="sky-list-paging-link" key={item.key}>
            <button
              className={`sky-btn sky-btn-default sky-paging-btn${item.isActive ? ' sky-paging-current' : ''}`}
              type="button"
              disabled={item.isActive}
              onClick={() => { onCurrentPageChange(item.value); }}
            >
              {item.value}
            </button>
          </li>
        );
      default:
        return null;
    }
  };

  return (
    <ul>
      {paginationModel.map(i => renderItem(i))}
    </ul>
  );
};

SkyPaging.propTypes = {
  currentPage: PropTypes.number,
  itemCount: PropTypes.number,
  maxPages: PropTypes.number,
  pageSize: PropTypes.number,
  onCurrentPageChange: PropTypes.func,
};

SkyPaging.defaultProps = {
  currentPage: 1,
  itemCount: 0,
  maxPages: 5,
  pageSize: 10,
  onCurrentPageChange: () => {},
};

export default SkyPaging;
