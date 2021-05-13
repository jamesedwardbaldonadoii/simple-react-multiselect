import React, { useState, useEffect, forwardRef } from 'react';
import { createPortal } from 'react-dom';

const Portal = forwardRef(portalFunc ({ children }, ref) => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    // Find the root element in your DOM
    let root = document.getElementById('dropdownRoot');
    // If there is no root then create one
    if (!root) {
      const tempEl = document.createElement('div');
      tempEl.id = 'dropdownRoot';
      document.body.append(tempEl);
      root = tempEl;
    }
    // Append children container to root
    root.appendChild(container);

    return function cleanup() {
      // On cleanup remove the modal container
      root.removeChild(container);
    };
  }, []); // <- The empty array tells react to apply the effect on mount/unmount

  return createPortal(<div ref={ref}>{children}</div>, container);
});

export default Portal;
