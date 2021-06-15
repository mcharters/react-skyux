import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class SkySearch extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: props.searchText,
      focused: false,
    };

    this.queryThread = null;
  }

  setSearch = (search) => {
    this.props.onChange(search);
  }

  handleFocus = () => { this.setState({ focused: true }); }

  handleBlur = () => { this.setState({ focused: false }); }

  handleChange = (e) => {
    const { debounceTime } = this.props;
    const searchValue = e.target.value;
    this.setState({ search: searchValue });

    if (debounceTime > 0) {
      clearTimeout(this.queryThread);
      this.queryThread = setTimeout(() => {
        this.setSearch(searchValue);
      }, debounceTime);
    } else {
      this.setSearch(searchValue);
    }
  }

  handleClear = () => {
    clearTimeout(this.queryThread);
    this.setState({ search: '' });
    this.setSearch('');
  }

  handleSearch = () => {
    this.input.focus();
    this.setSearch(this.state.search);
  }

  render() {
    const { placeholder } = this.props;
    const { focused, search } = this.state;

    return (
      <div className="sky-search-container">
        <div className="sky-search-button-container">
          <button
            className="sky-btn sky-btn-default sky-search-btn-open"
            type="button"
            title="Open search"
            hidden
          >
            <i className="fa sky-icon fa-search fa-lg" />
          </button>
        </div>
        <div className="sky-search-dismiss-container">
          <div className="sky-search-item-input">
            <div
              className={`sky-search-input-container sky-input-group${focused ? ' sky-search-input-focused sky-field-status-active sky-rounded-corners' : ''}`}
              style={{ opacity: 1, width: '100%' }}
            >
              <input
                className="sky-form-control sky-search-input sky-rounded-corners"
                type="text"
                value={search}
                placeholder={placeholder}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                ref={(input) => { this.input = input; }}
              />
              <span className="sky-input-group-btn sky-input-group-clear" hidden={search.length === 0}>
                <button
                  searchbutton="true"
                  className="sky-btn sky-btn-default sky-search-btn sky-search-btn-clear"
                  type="button"
                  onClick={this.handleClear}
                >
                  <i className="fa sky-icon fa-times" />
                </button>
              </span>
              <span className="sky-input-group-btn">
                <button
                  searchbutton="true"
                  className="sky-btn sky-btn-default sky-search-btn sky-search-btn-apply"
                  type="button"
                  onClick={this.handleSearch}
                >
                  <i className="fa sky-icon fa-search fa-lg" />
                </button>
              </span>
            </div>
            <div className="sky-search-item-dismiss" />
          </div>
        </div>
      </div>
    );
  }
}

SkySearch.propTypes = {
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  debounceTime: PropTypes.number,
};

SkySearch.defaultProps = {
  searchText: '',
  placeholder: 'Find in this list',
  onChange: () => {},
  debounceTime: 0,
};

export default SkySearch;
