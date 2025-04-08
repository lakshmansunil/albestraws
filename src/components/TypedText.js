import React from 'react';
import Typed from 'typed.js';

function MyComponent({h2title}) {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings:h2title,
      typeSpeed: 100,
      backDelay: 2000,
      loop:true,
    });

    return () => {
      typed.destroy();
    };
  }, [h2title]);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
export default MyComponent;