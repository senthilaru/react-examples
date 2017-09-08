
import React from 'react'
import PropTypes from 'prop-types'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const options = {
    autoplay: true,
    controls: true
};

class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        src: PropTypes.string,
        poster: PropTypes.string,
        width: PropTypes.string
    }
    

    componentDidMount() {
        this.player = videojs(this.videoPlayer, {
            src: this.props.src?this.props.src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            autoplay: true,
            controls: true,
            plugins:{
                
            },
            sources: [{
                src: this.props.src?this.props.src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            }]
        }, () => {
            // on ready function for anything else you need to do
            // after the player is set up…
            
        });
    }

    componentWillUnmount() {
        this.player.dispose();

        // whatever other things you need to clean up—maybe remove the DOM reference
        this.videoPlayer = undefined;
    }

    render() {
        return ( <
            video id = "videoPlayer"
            className="video-js"
            style={{fontSize: "15px"}}
            ref = {
                (c) => {
                    this.videoPlayer = c;
                }
            }
            />
        );
    }
}


export default VideoPlayer
