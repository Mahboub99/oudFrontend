import React from "react";

function PlayingBarRight(props) {
  return (
    <div className="now-playing-bar-right">
      <div className="volume-bar">
        <button
          className="control-button shuffle"
          title="Shuffle"
          onClick={props.handleShuffleState}
          data-testid="shuffle-btn"
        >
          <img src={props.shuffleButton} alt="Shuffle" />
        </button>
        <button
          className="control-button repeat"
          title="Repeat"
          onClick={props.handleRepeatState}
          data-testid="repeat-btn"
        >
          <img src={props.repeatButton} alt="Repeat" />
        </button>
        <button
          className="control-button volume"
          title="Volume"
          onClick={props.handleMuteState}
          data-testid="volume-btn"
        >
          <img src={props.volumeButton} alt="Volume" />
        </button>

        <div
          className="progress-bar"
          id="volume-width"
          style={{ width: "125px" }}
          onMouseDown={props.setMouseDown}
          onMouseMove={props.onVolumeClick}
          onMouseUp={props.mouseUp}
          data-testid="volume-click"
        >
          <div className="progress-bar-bg">
            <div
              className="progress"
              style={{ width: props.volume + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayingBarRight;
