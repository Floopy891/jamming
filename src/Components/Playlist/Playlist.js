import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist">
                <input value="New Playlist" onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks}  onRemove={this.props.onRemove} isRemoval={true} onChange={this.handleNameChange}/>
                <button className="Playlist-save" onSave={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;