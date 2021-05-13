import React, { useState, useEffect, useRef } from 'react';
import Menus from './Menus';
import Portal from './Portal';
import PropTypes from 'prop-types';

import './index.css'

const MultiSelectDropdown = ({ options=[], value=[], placeholder, onInputChanged, onDropdownOpen, onSelectedChange, loading }) => {
  const dropdownButtonRef = useRef();
  const dropdownMenuRef = useRef();
  const dropdownInputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({});
  const elementId = Date.now();

  useEffect(() => {
    if (isOpen) {
      const { current } = dropdownInputRef;

      const { left, top, height } = current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      setStyle({
        top: `${scrollTop + top + height + 3}px`,
        left: `${left}px`
      });

      if (onDropdownOpen) onDropdownOpen();
    }
  }, [isOpen]);

  const handleClick = (e) => {
    if (
      dropdownButtonRef.current && dropdownButtonRef.current.contains(e.target) ||
      dropdownMenuRef.current && dropdownMenuRef.current.contains(e.target)) {
      return;
    }

    hideMenu();
  };

  const showMenu = () => {
    setIsOpen(true);
    document.addEventListener('mousedown', handleClick);
  };

  const onFocus = (e) => {
    if(e.target.autocomplete) { e.target.autocomplete = (Date.now()).toString() }

    showMenu();
  };

  const hideMenu = () => {
    setIsOpen(false);
    document.removeEventListener('mousedown', handleClick);
  };

  const setSelected = (selected) => {
    if (onSelectedChange) onSelectedChange(selected);
  };

  return (
    <>
      <div className="app-dropdown p-1" ref={dropdownButtonRef}>
        { value.length > 0 && <div className="selected-item" onClick={showMenu}>{value.length}</div> }
        <input
          className={`${value.length ? '' : 'pr-2'} search-box pl-2`}
          ref={dropdownInputRef}
          type="text"
          autoComplete="off"
          onFocus={onFocus}
          onChange={e => onInputChanged ? onInputChanged(e.target.value) : null}
          placeholder={placeholder}
        />

        {isOpen &&
          <Portal id={elementId} ref={dropdownMenuRef}>
            <div className="app-filter-menu d-flex overflow-hidden" tabIndex="1" style={style}>
              <Menus
                options={options}
                selected={value}
                isLoading={loading}
                onSelect={(d) => setSelected([ ...value, d ])}
                onClearSelected={() => setSelected([])}
                onRemoveSelected={(o) => setSelected(value.filter(i => i.value !== o.value))}
              />
            </div>
          </Portal>
        }
      </div>
    </>
  );
};

const allowStringOrNum = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);

const arrayOfObj = PropTypes.arrayOf(PropTypes.shape({
  label: allowStringOrNum,
  value: allowStringOrNum,
}));

MultiSelectDropdown.propTypes = {
  options: arrayOfObj,
  value: arrayOfObj,
  placeholder: allowStringOrNum,
  onDropdownOpen: PropTypes.func,
  onInputChanged: PropTypes.func,
  onSelectedChange: PropTypes.func,
  loading: PropTypes.bool
};

export default MultiSelectDropdown;