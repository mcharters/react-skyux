import React from 'react';
import PropTypes from 'prop-types';
import SkyCheckbox from '../SkyCheckbox';
import SkyWait from '../SkyWait';
import './styles.scss';

const SkyGrid = ({
  columns, data, selected, onSelect, getId, onSortChange, sort, loading,
}) => {
  let currentSort = sort;
  let currentSortDir = 'ascending';
  if (currentSort && currentSort.startsWith('-')) {
    currentSort = sort.slice(1);
    currentSortDir = 'descending';
  }

  let tableRows = null;
  if (loading) {
    tableRows = (
      <tr>
        <td colSpan={columns.length + 1}>
          <SkyWait />
        </td>
      </tr>
    );
  } else if (data.length > 0) {
    tableRows = data.map((d) => {
      const id = getId(d);
      const checked = selected.indexOf(id) !== -1;

      return (
        <tr
          key={id}
          className="sky-grid-row sky-grid-multiselect-row"
          onClick={() => { onSelect(id, !checked); }}
        >
          <td className="sky-grid-multiselect-cell" key={-1}>
            <div style={{ maxWidth: '50px', width: '50px' }}>
              <SkyCheckbox
                name={id}
                checked={checked}
                onClick={(e) => { e.stopPropagation(); }}
              />
            </div>
          </td>
          {columns.map((col, idx) => (
            <td className="sky-grid-cell" key={idx}>
              <div>
                {col.field(d)}
              </div>
            </td>
          ))}
        </tr>
      );
    });
  } else {
    tableRows = (
      <tr>
        <td colSpan={columns.length + 1}>
          <div className="sky-deemphasized" style={{ padding: '30px 0px', textAlign: 'center' }}>
            No donations found.
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className="sky-grid">
      <div className="sky-grid-table-container">
        <table className="sky-grid-table">
          <thead>
            <tr>
              <th
                className="sky-grid-heading sky-grid-multiselect-cell sky-grid-header-locked"
                scope="col"
                style={{ maxWidth: '50px', width: '50px' }}
                key={-1}
              >
                <span className="screen-reader-only">Select row</span>
              </th>
              {columns.map((col, idx) => (
                <th
                  className="sky-grid-heading sky-field-label"
                  scope="col"
                  key={idx}
                  onClick={() => {
                    let newSort = col.sort;
                    if (newSort !== currentSort || currentSortDir !== 'descending') {
                      newSort = `-${newSort}`;
                    }

                    onSortChange(newSort);
                  }}
                >
                  <div className="overflow">
                    {col.heading}
                    {currentSort === col.sort && (
                      <span className="sky-grid-heading-sort" style={{ visibility: 'visible' }}>
                        <i className={`sky-icon fa fa-caret-${currentSortDir === 'ascending' ? 'up' : 'down'}`} />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SkyGrid.propTypes = {
  getId: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    field: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
  })).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  sort: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

SkyGrid.defaultProps = {
  sort: null,
  loading: false,
};

export default SkyGrid;
