import React, { Component } from "react";
// import "./createPlaylist.css";
import axios from "axios";
import getUserId from "../Profile/General/getUserId";
import { base } from "../../config/environment";
import { config } from "../../utils/auth";

/**
 * it is an overlay that is used to create a new playlist
 * @class
 * @param {boolean} display true ifthe component is to be visible
 * @property {boolean} display true when the component is visible
 * @property {string} name name of the new playlist
 */
class CreateAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "createPlaylist",
      name: "",
      artists: [],
      genres: [],
      albumType: "",
      releaseDate: ""
    };
  }

  /**
   * updates the state to the contents of the textbox
   * @param {event} e the event of changing the text
   * @returns {void}
   */
  updateName(e) {
    const name = e.target.value;
    this.setState({ name: name });
  }
  /**
   * creates a playlist object and sends to the database
   * @returns {void}
   */
  createAlbum() {
    let playlist = {
      name: this.state.name,
      public: true,
      collaborative: false,
      description: "",
      "image/png": ""
    };
    let id = getUserId();
    axios
      .post(`${base}/users/${id}/playlists`, playlist, config)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  /**
   * closes the window by making state.display false
   * @returns {void}
   */
  handleClose = () => {
    this.setState({ display: "createPlaylist hide" });
  };
  render() {
    return (
      <div className={this.state.display}>
        <button onClick={this.handleClose} className="closeButton">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <title>close</title>
            <path
              d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
              fill="#fff"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        <h1 id="createPlaylistTitle">Create new Album</h1>

        <form style={{ marginLeft: "38%" }}>
          <div className="form-group row">
            <label for="albumName" className="col-2 col-form-label">
              Album Name
            </label>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="albumName"
                placeholder="Album Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="genres" className="col-2 col-form-label">
              Genres
            </label>
            <div className="col-10">
              <select className="form-control" id="genres">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label for="albumType" className="col-2 col-form-label">
              Album Type
            </label>
            <div className="col-10">
              <select className="form-control" id="albumType">
                <option>Single</option>
                <option>Album</option>
                <option>Compilaion</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="releaseDate" className="col-2 col-form-label">
              Release Date
            </label>
            <div className="col-10">
              <input
                className="form-control"
                type="date"
                value="2020-05-07"
                id="releaseDate"
              />
            </div>
          </div>
        </form>
        <button id="cancelCreation" onClick={this.handleClose}>
          CANCEL
        </button>
        <button
          className="playButton"
          id="ceatePlaylistBtn"
          onClick={this.createAlbum}
        >
          CREATE
        </button>
      </div>
    );
  }
}

export default CreateAlbum;