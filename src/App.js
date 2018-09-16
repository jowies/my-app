import React, { Component } from 'react';
import axios from 'axios';

import Title from './components/Title';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Jonathan",
      events: [],
    };
  }

  componentDidMount() {
    axios.get("https://jowies.com/api/events")
      .then((response) => {
        this.setState({
          title: "success",
          events: response.data,
        });
      })
      .catch((error) => {
        this.setState({title: "error"});
      })

  }

  renderEvents() {
    return this.state.events.map((event, index) => {
      return <div style={{display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginTop: '20px',
                  backgroundColor: 'rgba(0,0,0, 0.1)',
                  width: '300px',
                  padding: '10px',
                  }}>
      <h3 key={index}>
        {event.title}
      </h3>
      <img style={{width: '100px', height: '100px', objectFit: "fill"}}
           src={event.cover} />
      </div>;
    });
  }

  render() {
    return (
      <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', flexDirection: 'column'}}>
        <Title title={this.state.title} />
        {this.renderEvents()}
      </div>
    );
  }
}

export default App;
