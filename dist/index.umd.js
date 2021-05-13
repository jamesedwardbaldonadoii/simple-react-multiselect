(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/toConsumableArray'), require('@babel/runtime/helpers/slicedToArray'), require('react'), require('react-dom'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/toConsumableArray', '@babel/runtime/helpers/slicedToArray', 'react', 'react-dom', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['simple-react-multiselect'] = factory(global._toConsumableArray, global._slicedToArray, global.React, global.reactDom, global.PropTypes));
}(this, (function (_toConsumableArray, _slicedToArray, React, reactDom, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  function Menus(_ref) {
    var _ref$options = _ref.options,
        options = _ref$options === void 0 ? [] : _ref$options,
        _ref$selected = _ref.selected,
        selected = _ref$selected === void 0 ? [] : _ref$selected,
        isLoading = _ref.isLoading,
        onSelect = _ref.onSelect,
        onClearSelected = _ref.onClearSelected,
        onRemoveSelected = _ref.onRemoveSelected;
    var items = options.filter(function (i) {
      return !selected.some(function (o) {
        return o.value === i.value;
      });
    }).map(function (i, $index) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "items d-flex align-items-center form-check mb-1 rounded w-100 px-2 py-1 cursor-pointer",
        key: "".concat(i.value, "-").concat($index)
      }, /*#__PURE__*/React__default['default'].createElement("input", {
        id: "opt-".concat($index),
        name: i.value,
        onChange: function onChange() {
          return onSelect(i);
        },
        className: "d-none",
        type: "checkbox"
      }), /*#__PURE__*/React__default['default'].createElement("label", {
        className: "m-0 text-xs form-check-label cursor-pointer d-block w-100",
        htmlFor: "opt-".concat($index)
      }, i.label));
    });
    var selectedItems = selected.map(function (i, $index) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "d-flex align-items-center form-check mb-1 w-100 pl-2 py-1 pr-1",
        key: "".concat(i.key, "-").concat($index)
      }, /*#__PURE__*/React__default['default'].createElement("label", {
        className: "m-0 text-xs form-check-label flex-grow-1"
      }, i.label), /*#__PURE__*/React__default['default'].createElement("button", {
        className: "btn btn-danger btn-sm",
        onClick: function onClick() {
          return onRemoveSelected(i);
        }
      }, /*#__PURE__*/React__default['default'].createElement("i", {
        className: "fa fa-trash"
      })));
    });
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex-grow-1 w-50 h-100 d-flex flex-column"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "search-container p-2 w-100 text-center text-sm bg-info text-white"
    }, "Search Results"), isLoading ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "d-flex h-100 align-items-center justify-content-center"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "d-block fa fa-spinner fa-spin"
    })) : /*#__PURE__*/React__default['default'].createElement("div", {
      className: "overflow-auto h-100 p-2 w-100 text-left"
    }, " ", items, " ")), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex-grow-1 w-50 h-100 d-flex flex-column border-left overflow-hidden"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "search-container p-2 w-100 text-sm bg-info text-white d-flex align-items-center"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex-grow-1"
    }, "Selected Filter"), /*#__PURE__*/React__default['default'].createElement("button", {
      className: "btn btn-default btn-sm clear-btn",
      onClick: onClearSelected
    }, "Clear")), selectedItems.length ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "overflow-auto h-100 px-2 w-100 text-left"
    }, " ", selectedItems, " ") : /*#__PURE__*/React__default['default'].createElement("div", {
      className: "d-flex flex-column h-100 align-items-center justify-content-center"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "fa fa-filter text-xl text-gray"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "mt-2 text-gray"
    }, "Selected filter is empty."))));
  }

  var Portal = /*#__PURE__*/React.forwardRef(function refPortal(_ref, ref) {
    var children = _ref.children;

    var _useState = React.useState(document.createElement('div')),
        _useState2 = _slicedToArray__default['default'](_useState, 1),
        container = _useState2[0];

    React.useEffect(function () {
      // Find the root element in your DOM
      var root = document.getElementById('dropdownRoot'); // If there is no root then create one

      if (!root) {
        var tempEl = document.createElement('div');
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

    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default['default'].createElement("div", {
      ref: ref
    }, children), container);
  });

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = ".app-dropdown {\r\n  height: auto;\r\n  position: relative;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.app-dropdown .search-box {\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 36px;\r\n  padding-right: 33px;\r\n  max-width: 150px;\r\n}\r\n\r\n.app-dropdown input::placeholder {\r\n  color: #8898aa;\r\n  opacity: 1;\r\n}\r\n\r\n.selected-item {\r\n  background-color: #ddd;\r\n  color: #8898aa;\r\n  position: absolute;\r\n  right: 1em;\r\n  border-radius: 100%;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  text-align: center;\r\n  top: calc(50% - 10px);\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n.app-filter-menu {\r\n  color: #545454;\r\n  width: 400px;\r\n  height: 250px;\r\n  border-radius: 5px;\r\n  background-color:white;\r\n  position: absolute;\r\n  border: 1px solid #ddd;\r\n  box-shadow: 0 1px 5px #ddd;\r\n}\r\n\r\n.app-filter-menu .clear-btn {\r\n  height: 1.3rem;\r\n  padding: 0.0rem 0.5rem;\r\n}\r\n\r\n.app-filter-menu .search-container input {\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n}\r\n\r\n.cursor-pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.app-filter-menu .items:hover{\r\n  background-color: #ccc;\r\n}";
  n(css,{});

  var MultiSelectDropdown = function MultiSelectDropdown(_ref) {
    var _ref$options = _ref.options,
        options = _ref$options === void 0 ? [] : _ref$options,
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? [] : _ref$value,
        placeholder = _ref.placeholder,
        onInputChanged = _ref.onInputChanged,
        onDropdownOpen = _ref.onDropdownOpen,
        onSelectedChange = _ref.onSelectedChange,
        loading = _ref.loading;
    var dropdownButtonRef = React.useRef();
    var dropdownMenuRef = React.useRef();
    var dropdownInputRef = React.useRef();

    var _useState = React.useState(false),
        _useState2 = _slicedToArray__default['default'](_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

    var _useState3 = React.useState({}),
        _useState4 = _slicedToArray__default['default'](_useState3, 2),
        style = _useState4[0],
        setStyle = _useState4[1];

    var elementId = Date.now();
    React.useEffect(function () {
      if (isOpen) {
        var current = dropdownInputRef.current;

        var _current$getBoundingC = current.getBoundingClientRect(),
            left = _current$getBoundingC.left,
            top = _current$getBoundingC.top,
            height = _current$getBoundingC.height;

        var scrollTop = document.documentElement.scrollTop;
        setStyle({
          top: "".concat(scrollTop + top + height + 3, "px"),
          left: "".concat(left, "px")
        });
        if (onDropdownOpen) onDropdownOpen();
      }
    }, [isOpen]);

    var handleClick = function handleClick(e) {
      if (dropdownButtonRef.current && dropdownButtonRef.current.contains(e.target) || dropdownMenuRef.current && dropdownMenuRef.current.contains(e.target)) {
        return;
      }

      hideMenu();
    };

    var showMenu = function showMenu() {
      setIsOpen(true);
      document.addEventListener('mousedown', handleClick);
    };

    var onFocus = function onFocus(e) {
      if (e.target.autocomplete) {
        e.target.autocomplete = Date.now().toString();
      }

      showMenu();
    };

    var hideMenu = function hideMenu() {
      setIsOpen(false);
      document.removeEventListener('mousedown', handleClick);
    };

    var setSelected = function setSelected(selected) {
      if (onSelectedChange) onSelectedChange(selected);
    };

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "app-dropdown p-1",
      ref: dropdownButtonRef
    }, value.length > 0 && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "selected-item",
      onClick: showMenu
    }, value.length), /*#__PURE__*/React__default['default'].createElement("input", {
      className: "".concat(value.length ? '' : 'pr-2', " search-box pl-2"),
      ref: dropdownInputRef,
      type: "text",
      autoComplete: "off",
      onFocus: onFocus,
      onChange: function onChange(e) {
        return onInputChanged ? onInputChanged(e.target.value) : null;
      },
      placeholder: placeholder
    }), isOpen && /*#__PURE__*/React__default['default'].createElement(Portal, {
      id: elementId,
      ref: dropdownMenuRef
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "app-filter-menu d-flex overflow-hidden",
      tabIndex: "1",
      style: style
    }, /*#__PURE__*/React__default['default'].createElement(Menus, {
      options: options,
      selected: value,
      isLoading: loading,
      onSelect: function onSelect(d) {
        return setSelected([].concat(_toConsumableArray__default['default'](value), [d]));
      },
      onClearSelected: function onClearSelected() {
        return setSelected([]);
      },
      onRemoveSelected: function onRemoveSelected(o) {
        return setSelected(value.filter(function (i) {
          return i.value !== o.value;
        }));
      }
    })))));
  };

  var allowStringOrNum = PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]);
  var arrayOfObj = PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: allowStringOrNum,
    value: allowStringOrNum
  }));
  MultiSelectDropdown.propTypes = {
    options: arrayOfObj,
    value: arrayOfObj,
    placeholder: allowStringOrNum,
    onDropdownOpen: PropTypes__default['default'].func,
    onInputChanged: PropTypes__default['default'].func,
    onSelectedChange: PropTypes__default['default'].func,
    loading: PropTypes__default['default'].bool
  };

  return MultiSelectDropdown;

})));
