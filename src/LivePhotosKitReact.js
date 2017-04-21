'use strict';

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as LivePhotosKit from 'livephotoskit';

class LivePhotosKitReact extends Component {
  componentDidMount() {
    const {
      photoSrc,
      videoSrc,
      canPlay,
      error,
      ended,
      photoLoad,
      videoLoad,
      playbackStyle,
      style
    } = this.props;
    const _style = {width: '100%', height: '100%', ...style};

    this._player = LivePhotosKit.Player(this._node);

    this._player.photoSrc = photoSrc;
    this._player.videoSrc = videoSrc;
    this._player.addEventListener('canplay', evt => {
      if (canPlay === undefined) { return; }
      canPlay(evt)
    });
    this._player.addEventListener('error', evt => {
      if (error === undefined) { return; }
      error(evt)
    });
    this._player.addEventListener('ended', evt => {
      if (ended === undefined) { return; }
      ended(evt)
    });
    this._player.addEventListener('videoload', evt => {
      if (videoLoad === undefined) { return; }
      videoLoad(evt)
    });
    this._player.addEventListener('photoload', evt => {
      if (photoLoad === undefined) { return; }
      photoLoad(evt)
    });
    this._player.playbackStyle = playbackStyle;

    for (var key in _style) {
      this._player.style[key] = _style[key];
    }
  }

  play() {
    this._player.play();
  }

  pause() {
    this._player.play();
  }

  toggle() {
    this._player.toggle();
  }

  stop() {
    this._player.stop();
  }

  seekTo(currentTime) {
    this._player.currentTime = currentTime;
  }

  get livephotoskit() {
    return this._player;
  }

  get duration() {
    return this._player.duration;
  }

  render() {
    return(
      <div
        ref={c => this._node = c}
      ></div>
    );
  }
}

LivePhotosKitReact.propTypes = {
  photoSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  canPlay: PropTypes.func,
  error: PropTypes.func,
  ended: PropTypes.func,
  photoLoad: PropTypes.func,
  videoLoad: PropTypes.func,
  playbackStyle: PropTypes.string,
  style: PropTypes.object
};

export default LivePhotosKitReact;
