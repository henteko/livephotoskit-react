# LivePhotosKit React
[![Build Status](https://travis-ci.org/henteko/livephotoskit-react.svg?branch=master)](https://travis-ci.org/henteko/livephotoskit-react)

LivePhotosKit JS wrapper component.

Please see LivePhotosKit JS official document.  
https://developer.apple.com/reference/livephotoskitjs

## Install

```shell
$ npm install --save @henteko/livephotoskit-react
```

## Example

```js
import React, { Component } from 'react'
import LivePhotosKitReact from '@henteko/livephotoskit-react';

class App extends Component {
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
```

## `LivePhotosKitReact` component

This component is LivePhotosKit JS wrapper component.

Please see LivePhotosKit JS official document.  
https://developer.apple.com/reference/livephotoskitjs
 
### `photoSrc`: PropTypes.string.isRequired

This prop is LivePhotosKit photo src path.
 
### `videoSrc`: PropTypes.string.isRequired 

This prop is LivePhotosKit video src path.

### `onCanPlay`: PropTypes.func

Callback when can play LivePhotos.

### `onError`: PropTypes.func

Callback when LivePhotos error.

### `onEnded`: PropTypes.func

Callback when LivePhotos play end.

### `onPhotoLoad`: PropTypes.func

Callback when LivePhotos photo load finish.

### `onVideoLoad`: PropTypes.func

Callback when LivePhotos video load finish.

### `playbackStyle`: PropTypes.string

This prop is set playback style.

https://developer.apple.com/reference/livephotoskitjs/livephotoskit.playbackstyle

## Methods

### `play()`

Play LivePhotosKit player.

### `pause()`

Pause LivePhotosKit player.

### `toggle()`

Stop and Start toggle LivePhotosKit player.

### `stop()`

Stop LivePhotosKit player.

### `seekTo()`

Seek to LivePhotosKit player.  
Control LivePhotosKit currentTime.

### `get player()`

Get LivePhotosKit player instance.

### `get duration()`

Get LivePhotosKit duration.
