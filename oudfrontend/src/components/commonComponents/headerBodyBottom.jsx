import React, {useState} from 'react'
import PropTypes from 'prop-types';
/**
 * this is a component that renders the bottom of the body of playlists, albums, likedSongs
 * @author Ahmed Walid <ahmedwa1999@gmail.com>
 * @func
 * @param {number} length the number of songs in the playlists, albums, likedSongs
 * @param {func} playClicked a function that is called when the playButtoon is clicked to add the playlists, albums, likedSongs to queue
 * @param {func} likeClicked a function that is called when the likeButtoon is clicked to add the playlists, albums to library
 * @param {boolean} liked used to indicate the state of like icon it is true when the playlist or album is in the library and false otherwise
 * @param {boolean} playing means that the playlist is playing used to conditionaly render the text of playButton with 'play' or 'pause'
 * @returns {<div>
 * <button></button>
 * <button></button>
 * <p></p>
 * </div>}
 */

function HeaderBodyBottom(props){
    const {length, playClicked, likeClicked, liked, playing, releaseDate, recieved, album} = props;
    
    return(
        <div data-testid="HeaderBodyBottom" className='playlistHeaderBodyBottom'>
            <button onClick={playClicked} data-testid="playButton" className="playButton" variant="outline-success">
                    {playing? 'PAUSE' : 'PLAY'}
            </button>
            
            <button data-testid="likeIcon" className="likeIcon" onClick={likeClicked}>
                {liked? 'liked' : 'like'} {/*font awseome icons*/}
            </button> 
            <p>
                <span>{recieved?releaseDate.slice(0,4):<span></span>} <h2 style={{display:"inline"}}>{album?'.':''}</h2> </span>
                <span data-testid="songsNumber">{length} </span>
                <span data-testid="songsLiteral">{length > 1? 'songs':'song'}</span>
            </p>
            
        </div>
    );
}

HeaderBodyBottom.propTypes ={
    length : PropTypes.number,
    liked : PropTypes.bool,
    playing : PropTypes.bool,
    likeClicked : PropTypes.func,
    playClicked : PropTypes.func
}


export default HeaderBodyBottom;