import React    from 'react';
import ReactDOM from 'react-dom';

import LivePhotosKitReact from 'livephotoskit-react';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <LivePhotosKitReact
          photoSrc='./test.JPG'
          videoSrc='./test.mov'
        >
        </LivePhotosKitReact>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.querySelector('#app'));
