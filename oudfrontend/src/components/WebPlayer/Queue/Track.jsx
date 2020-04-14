import React, { Component } from "react";
import { sortableHandle } from "react-sortable-hoc";
import ellipsis from "../../../assets/images/icons/ellipsis.png";
import handler from "../../../assets/images/icons/handler.png";
import play from "../../../assets/images/icons/play.png";
import pause from "../../../assets/images/icons/pause.png";
import axios from "axios";
import PropTypes from "prop-types";
const config = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOTA3ZGFmYTA2NDVmNDU3MTYwNzVmZiIsImlhdCI6MTU4Njg5MzE0MywiZXhwIjoxNTg5NDg1MTQzfQ.ON2Ef2vgOV1_6EokwvD3mlUzgAn0pb5WPCy5qBWj2QA`,
  },
};
const DragHandle = sortableHandle(() => (
  <span className="handler">
    <img src={handler} alt="Handler" />
  </span>
));
/**
 * The basic component in the Queue. I contains all the actions you can do for a track in the queue.
 * @author Ahmed Ashraf
 * @component
 * @example
 * return (
 *  <Track />
 * )
 */
class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      trackName: "",
      artistName: "",
      duration: "",
      resume: false,
      thumb: play,
    };
  }
  componentDidMount() {
    this.fetchTrackInfo();
  }
  /**
   * Fetching all the needing information to display a track to the user
   * @function
   * @returns {void}
   */
  fetchTrackInfo = () => {
    axios
      .get("https://oud-zerobase.me/api/v1/tracks/" + this.props.id, config)
      .then((response) => {
        const track = response["data"];
        this.setState({
          image: track["artists"][0]["image"],
          trackName: track["name"],
          artistName: track["artists"][0]["name"],
          duration: Number(track["duartion"] / 60000).toFixed(2),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   * Handling the action on click on the play/pause button. It uses the player to handle it.
   * @function
   * @returns {void}
   */
  handlePlayButton = () => {
    this.props.playTrack.current.handlePlayPause(this.props.id, this.props.idx);
  };
  /**
   * Handling the opening/closing the dropdown list to make an action to the selected track.
   * @function
   * @returns {void}
   */
  handleDropdown = () => {
    this.props.toggleDropdown(this.props.idx, this.props.id);
  };
  render() {
    return (
      <div className="track">
        <DragHandle data-testid="handler-control" />
        <div className="content">
          <div className="play-art">
            <div
              className="track-art-work"
              style={{ backgroundImage: `url(${this.state.image})` }}
            ></div>

            <button
              className="play-pause"
              onClick={this.handlePlayButton}
              data-testid="queue-play-btn"
            >
              <img
                src={
                  this.props.playTrack.current.state.trackId ===
                    this.props.id && this.props.playTrack.current.state.playing
                    ? pause
                    : play
                }
                alt="Pause"
              />
            </button>
          </div>

          <div className="track-name" data-testid="queue-track-name">
            <strong title={this.state.trackName}>
              <a href="https://www.facebook.com/">{this.state.trackName}</a>
            </strong>
          </div>

          <div className="artist-name" data-testid="queue-artist-name">
            <strong title={this.state.artistName}>
              <a href="https://www.facebook.com/">{this.state.artistName}</a>
            </strong>
          </div>

          <div className="duration">
            <strong>{this.state.duration}</strong>
          </div>

          <div className="ellipsis-container">
            <button
              className="ellipsis-icon"
              onClick={this.handleDropdown}
              data-testid="open-option-menu"
            >
              <img src={ellipsis} alt="Show More" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Track.propTypes = {
  /**
   * The index of the  track
   */
  idx: PropTypes.number.isRequired,
  /**
   * The unique id of the track
   */
  id: PropTypes.string.isRequired,
  /**
   * A function to handle playing a track from the queue
   */
  playTrack: PropTypes.object.isRequired,
  /**
   * Open/Close the dropdown menu function.
   */
  toggleDropdown: PropTypes.func.isRequired,
};
export default Track;
