import React, {useEffect} from 'react';

function Menus ({ options = [], selected = [], isLoading, onSelect, onClearSelected, onRemoveSelected }) {
  useEffect(() => {
    console.log(selected, 'Menus selected');
  }, [selected]);

  const items = options.filter(i => !selected.some(o => o.value === i.value)).map((i, $index) => (
    <div className="items d-flex align-items-center form-check mb-1 rounded w-100 px-2 py-1 cursor-pointer" key={`${i.value}-${$index}`}>
      <input id={`opt-${$index}`} name={i.value} onChange={() => onSelect(i)} className="d-none" type="checkbox" />
      <label className="m-0 text-xs form-check-label cursor-pointer d-block w-100" htmlFor={`opt-${$index}`}>{i.label}</label>
    </div>
  ));

  const selectedItems = selected.map((i, $index) => (
    <div className="d-flex align-items-center form-check mb-1 w-100 pl-2 py-1 pr-1" key={`${i.key}-${$index}`}>
      <label className="m-0 text-xs form-check-label flex-grow-1">{i.label}</label>
      <button className="btn btn-danger btn-sm" onClick={ () => onRemoveSelected(i)}><i className="fa fa-trash"></i></button>
    </div>
  ));

  return (
    <>
      <div className="flex-grow-1 w-50 h-100 d-flex flex-column">
        <div className="search-container p-2 w-100 text-center text-sm bg-info text-white">
          Search Results
        </div>
        {isLoading ? <div className="d-flex h-100 align-items-center justify-content-center"><i className="d-block fa fa-spinner fa-spin"></i></div>:
          <div className="overflow-auto h-100 p-2 w-100 text-left"> {items} </div>
        }
      </div>
      <div className="flex-grow-1 w-50 h-100 d-flex flex-column border-left overflow-hidden">
        <div className="search-container p-2 w-100 text-sm bg-info text-white d-flex align-items-center">
          <div className="flex-grow-1">Selected Filter</div>
          <button className="btn btn-default btn-sm clear-btn" onClick={onClearSelected}>Clear</button>
        </div>
        { selectedItems.length ?
          <div className="overflow-auto h-100 px-2 w-100 text-left"> {selectedItems} </div>
          : <div className="d-flex flex-column h-100 align-items-center justify-content-center">
            <i className="fa fa-filter text-xl text-gray"></i>
            <div className="mt-2 text-gray">Selected filter is empty.</div>
          </div>
        }
      </div>
    </>
  );
}

export default Menus;