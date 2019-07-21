import React from 'react';
import SearchBar from './SeacrhBar';
import youtube from '../apis/youtube';


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

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                Found {this.state.videos.length} videos
            </div>
        )
    }

}

export default App;