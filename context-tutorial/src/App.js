import React from 'react';
import ColorBox from './contexts/ColorBox';
import { ColorProvider } from './contexts/color';

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
