import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function Example() {
  const handler = (event) => console.log(event.current.date);
  return (
    <DatePicker onChange={handler} />
  );
}

export default Example;
