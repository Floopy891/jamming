import React from 'react';

import './Track.css';

class Track extends React.Component {

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action">-</button>;
        } else {
            return <button className="Track-action">+</button>;
        }
    }
    
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    {/* Track Name Goes in h3 Tag */}
                    <h3></h3>
                    {/* Track artist and other details go in p */}
                    <p></p>
                </div>
                <button className="Track-action"></button>
            </div>
        );
    }
}

export default Track;