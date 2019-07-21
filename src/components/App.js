import React from 'react';
import SearchBar from './SeacrhBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


class App extends React.Component{

    state = {
        videos : []
    }

    onTermSubmit = async (term) => {
        const resposne = await youtube.get('/search',{
            params : {
                q : term
            }
        });

        this.setState({ videos : resposne.data.items })
         
    };

    onVideoSelect = (video) => {
        console.log(video);
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }

}

export default App;