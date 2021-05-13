(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/toConsumableArray'), require('@babel/runtime/helpers/slicedToArray'), require('react'), require('react-dom'), require('prop-types'))
    : typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/toConsumableArray', '@babel/runtime/helpers/slicedToArray', 'react', 'react-dom', 'prop-types'], factory)
      : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['simple-react-multiselect'] = factory(global._toConsumableArray, global._slicedToArray, global.React, global.reactDom, global.PropTypes));
}(this, ((_toConsumableArray, _slicedToArray, React, reactDom, PropTypes) => {
  function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

  const _toConsumableArray__default = /* #__PURE__ */_interopDefaultLegacy(_toConsumableArray);
  const _slicedToArray__default = /* #__PURE__ */_interopDefaultLegacy(_slicedToArray);
  const React__default = /* #__PURE__ */_interopDefaultLegacy(React);
  const PropTypes__default = /* #__PURE__ */_interopDefaultLegacy(PropTypes);

  function Menus(_ref) {
    const _ref$options = _ref.options;
    const options = _ref$options === void 0 ? [] : _ref$options;
    const _ref$selected = _ref.selected;
    const selected = _ref$selected === void 0 ? [] : _ref$selected;
    const { isLoading } = _ref;
    const { onSelect } = _ref;
    const { onClearSelected } = _ref;
    const { onRemoveSelected } = _ref;
    React.useEffect(() => {
      console.log(selected, 'Menus selected');
    }, [selected]);
    const items = options.filter((i) => !selected.some((o) => o.value === i.value)).map((i, $index) =>
    /* #__PURE__ */React__default.default.createElement('div', {
        className: 'items d-flex align-items-center form-check mb-1 rounded w-100 px-2 py-1 cursor-pointer',
        key: ''.concat(i.value, '-').concat($index),
      }, /* #__PURE__ */React__default.default.createElement('input', {
        id: 'opt-'.concat($index),
        name: i.value,
        onChange: function onChange() {
          return onSelect(i);
        },
        className: 'd-none',
        type: 'checkbox',
      }), /* #__PURE__ */React__default.default.createElement('label', {
        className: 'm-0 text-xs form-check-label cursor-pointer d-block w-100',
        htmlFor: 'opt-'.concat($index),
      }, i.label)));
    const selectedItems = selected.map((i, $index) =>
    /* #__PURE__ */React__default.default.createElement('div', {
        className: 'd-flex align-items-center form-check mb-1 w-100 pl-2 py-1 pr-1',
        key: ''.concat(i.key, '-').concat($index),
      }, /* #__PURE__ */React__default.default.createElement('label', {
        className: 'm-0 text-xs form-check-label flex-grow-1',
      }, i.label), /* #__PURE__ */React__default.default.createElement('button', {
        className: 'btn btn-danger btn-sm',
        onClick: function onClick() {
          return onRemoveSelected(i);
        },
      }, /* #__PURE__ */React__default.default.createElement('i', {
        className: 'fa fa-trash',
      }))));
    return /* #__PURE__ */React__default.default.createElement(React__default.default.Fragment, null, /* #__PURE__ */React__default.default.createElement('div', {
      className: 'flex-grow-1 w-50 h-100 d-flex flex-column',
    }, /* #__PURE__ */React__default.default.createElement('div', {
      className: 'search-container p-2 w-100 text-center text-sm bg-info text-white',
    }, 'Search Results'), isLoading ? /* #__PURE__ */React__default.default.createElement('div', {
      className: 'd-flex h-100 align-items-center justify-content-center',
    }, /* #__PURE__ */React__default.default.createElement('i', {
      className: 'd-block fa fa-spinner fa-spin',
    })) : /* #__PURE__ */React__default.default.createElement('div', {
      className: 'overflow-auto h-100 p-2 w-100 text-left',
    }, ' ', items, ' ')), /* #__PURE__ */React__default.default.createElement('div', {
      className: 'flex-grow-1 w-50 h-100 d-flex flex-column border-left overflow-hidden',
    }, /* #__PURE__ */React__default.default.createElement('div', {
      className: 'search-container p-2 w-100 text-sm bg-info text-white d-flex align-items-center',
    }, /* #__PURE__ */React__default.default.createElement('div', {
      className: 'flex-grow-1',
    }, 'Selected Filter'), /* #__PURE__ */React__default.default.createElement('button', {
      className: 'btn btn-default btn-sm clear-btn',
      onClick: onClearSelected,
    }, 'Clear')), selectedItems.length ? /* #__PURE__ */React__default.default.createElement('div', {
      className: 'overflow-auto h-100 px-2 w-100 text-left',
    }, ' ', selectedItems, ' ') : /* #__PURE__ */React__default.default.createElement('div', {
      className: 'd-flex flex-column h-100 align-items-center justify-content-center',
    }, /* #__PURE__ */React__default.default.createElement('i', {
      className: 'fa fa-filter text-xl text-gray',
    }), /* #__PURE__ */React__default.default.createElement('div', {
      className: 'mt-2 text-gray',
    }, 'Selected filter is empty.'))));
  }

  const Portal = /* #__PURE__ */React.forwardRef((_ref, ref) => {
    const { children } = _ref;

    const _useState = React.useState(document.createElement('div'));
    const _useState2 = _slicedToArray__default.default(_useState, 1);
    const container = _useState2[0];

    React.useEffect(() => {
      // Find the root element in your DOM
      let root = document.getElementById('dropdownRoot'); // If there is no root then create one

      if (!root) {
        const tempEl = document.createElement('div');
        tempEl.id = 'dropdownRoot';
        document.body.append(tempEl);
        root = tempEl;
      } // Append children container to root

      root.appendChild(container);
      return function cleanup() {
        // On cleanup remove the modal container
        root.removeChild(container);
      };
    }, []); // <- The empty array tells react to apply the effect on mount/unmount

    return /* #__PURE__ */reactDom.createPortal(/* #__PURE__ */React__default.default.createElement('div', {
      ref,
    }, children), container);
  });

  const MultiSelectDropdown = function MultiSelectDropdown(_ref) {
    const _ref$options = _ref.options;
    const options = _ref$options === void 0 ? [] : _ref$options;
    const _ref$value = _ref.value;
    const value = _ref$value === void 0 ? [] : _ref$value;
    const { placeholder } = _ref;
    const { onInputChanged } = _ref;
    const { onDropdownOpen } = _ref;
    const { onSelectedChange } = _ref;
    const { loading } = _ref;
    const dropdownButtonRef = React.useRef();
    const dropdownMenuRef = React.useRef();
    const dropdownInputRef = React.useRef();

    const _useState = React.useState(false);
    const _useState2 = _slicedToArray__default.default(_useState, 2);
    const isOpen = _useState2[0];
    const setIsOpen = _useState2[1];

    const _useState3 = React.useState({});
    const _useState4 = _slicedToArray__default.default(_useState3, 2);
    const style = _useState4[0];
    const setStyle = _useState4[1];

    const elementId = Date.now();
    React.useEffect(() => {
      if (isOpen) {
        const { current } = dropdownInputRef;

        const _current$getBoundingC = current.getBoundingClientRect();
        const { left } = _current$getBoundingC;
        const { top } = _current$getBoundingC;
        const { height } = _current$getBoundingC;

        const { scrollTop } = document.documentElement;
        setStyle({
          top: ''.concat(scrollTop + top + height + 3, 'px'),
          left: ''.concat(left, 'px'),
        });
        if (onDropdownOpen) onDropdownOpen();
      }
    }, [isOpen]);

    const handleClick = function handleClick(e) {
      if (dropdownButtonRef.current && dropdownButtonRef.current.contains(e.target) || dropdownMenuRef.current && dropdownMenuRef.current.contains(e.target)) {
        return;
      }

      hideMenu();
    };

    const showMenu = function showMenu() {
      setIsOpen(true);
      document.addEventListener('mousedown', handleClick);
    };

    const onFocus = function onFocus(e) {
      if (e.target.autocomplete) {
        e.target.autocomplete = Date.now().toString();
      }

      showMenu();
    };

    var hideMenu = function hideMenu() {
      setIsOpen(false);
      document.removeEventListener('mousedown', handleClick);
    };

    const setSelected = function setSelected(selected) {
      if (onSelectedChange) onSelectedChange(selected);
    };

    return /* #__PURE__ */React__default.default.createElement(React__default.default.Fragment, null, /* #__PURE__ */React__default.default.createElement('div', {
      className: 'app-dropdown p-1',
      ref: dropdownButtonRef,
    }, value.length > 0 && /* #__PURE__ */React__default.default.createElement('div', {
      className: 'selected-item',
      onClick: showMenu,
    }, value.length), /* #__PURE__ */React__default.default.createElement('input', {
      className: ''.concat(value.length ? '' : 'pr-2', ' search-box pl-2'),
      ref: dropdownInputRef,
      type: 'text',
      autoComplete: 'off',
      onFocus,
      onChange: function onChange(e) {
        return onInputChanged ? onInputChanged(e.target.value) : null;
      },
      placeholder,
    }), isOpen && /* #__PURE__ */React__default.default.createElement(Portal, {
      id: elementId,
      ref: dropdownMenuRef,
    }, /* #__PURE__ */React__default.default.createElement('div', {
      className: 'app-filter-menu d-flex overflow-hidden',
      tabIndex: '1',
      style,
    }, /* #__PURE__ */React__default.default.createElement(Menus, {
      options,
      selected: value,
      isLoading: loading,
      onSelect: function onSelect(d) {
        return setSelected([].concat(_toConsumableArray__default.default(value), [d]));
      },
      onClearSelected: function onClearSelected() {
        return setSelected([]);
      },
      onRemoveSelected: function onRemoveSelected(o) {
        return setSelected(value.filter((i) => i.value !== o.value));
      },
    })))));
  };

  const allowStringOrNum = PropTypes__default.default.oneOfType([PropTypes__default.default.string, PropTypes__default.default.number]);
  const arrayOfObj = PropTypes__default.default.arrayOf(PropTypes__default.default.shape({
    label: allowStringOrNum,
    value: allowStringOrNum,
  }));
  MultiSelectDropdown.propTypes = {
    options: arrayOfObj,
    value: arrayOfObj,
    placeholder: allowStringOrNum,
    onDropdownOpen: PropTypes__default.default.func,
    onInputChanged: PropTypes__default.default.func,
    onSelectedChange: PropTypes__default.default.func,
    loading: PropTypes__default.default.bool,
  };

  return MultiSelectDropdown;
})));
