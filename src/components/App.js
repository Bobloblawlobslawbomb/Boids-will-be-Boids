import React from 'react'
import Header from './Header';
import CanvasMaker from './CanvasMaker';

class App extends React.Component {
render() {
  return (
    // <BoidOneSketch />
    <div>
    <Header />
    <CanvasMaker />
    <div>Footer</div>
    </div>
  )
}
}

export default App;