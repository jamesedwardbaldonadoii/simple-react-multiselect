# SIMPLE REACT MULTISELECT DROPDOWN 

## Getting Started

## 1. Installation
```
npm install simple-react-multiselect
```
----

## 2. Basic Usage
```js
import MultiSelect from 'simple-react-multiselect';

this.state = {
    options: [
        {label: 'Srigar', value: 1},
        {label: 'Sam', value: 2}
    ],
    value: [
        {label: 'Srigar', value: 1},
    ],
    loading: false
};

<Multiselect
    options={this.state.options} // options dropdown menu
    value={this.state.value} // pre-selected value
    onInputChanged={this.onInputChanged} // input search value change
    onDropdownOpen={this.onDropdownOpen} // triggers if dropdown menu shown
    onSelectedChange={this.onSelectedChange} // triggers if selected column is changed
    placeholder="placeholder" // placeholder on input
    loading={this.state.loading} // for async request to display loading icon
/>

onSelectedChange(selected) {
    ...
}

onInputChanged(text) {
    ...
}

onDropdownOpen(text) {
    ...
}
```
----

## 3. Props

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  |
| `options` | `array` | `[]` | Dropdown options
| `value` | `array` | `[]` | Preselected items
| `placeholder` | `string` | `""` | Placeholder text
| `onInputChanged` | `function` | `func` | Callback function will invoked on input value changed
| `onDropdownOpen` | `function` | `func` | Callback function will invoked on dropdown menu is displayed
| `onSelectedChange` | `function` | `func` | Callback function will invoked on selected column items changed [`select`, `remove`, `clear`]
| `loading ` | `boolean` | `false` | For async usage to display loading indicator if fetching for options
----