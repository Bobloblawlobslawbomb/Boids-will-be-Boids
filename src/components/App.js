import React from 'react'
import Header from './Header';
import CanvasMaker from './CanvasMaker';
import CIrcleCollision from './CIrcleCollision';

class App extends React.Component {
render() {
  return (
    // <BoidOneSketch />
    <div>
    <Header />
    <CanvasMaker />
    <CIrcleCollision />
    <div>Footer</div>
    </div>
  )
}
}

export default App;