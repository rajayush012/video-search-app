import React from 'react';
import SearchBar from './SeacrhBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VIdeoDetail';


class App extends React.Component{

    state = {
        videos : [],
        selectedVideo : null
    }

    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        const resposne = await youtube.get('/search',{
            params : {
                q : term
            }
        });

        this.setState({ 
            videos : resposne.data.items,
            selectedVideo: resposne.data.items[0]
        })
         
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo : video
        })
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;