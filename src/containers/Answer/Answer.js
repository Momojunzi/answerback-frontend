import React, {Component} from 'react';
import axios from 'axios';

class Answer extends Component {

  state = {
    answer: {
      owner: '',
      message: ''
    }
  }

  componentDidMount(){
    this.getAnswer();
  }

  getAnswer = () => {
    const server = process.env.REACT_APP_API_URL || '';
    axios.get('http://backend-service:8080/api/answer')
      .then(result =>{
        console.log(result);
        const answer = result.data;
        this.setState({answer: answer});
      }, ()=>{console.log(this.state.answer)})
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const cardStyle = {
      width: '80vw',
      marginTop: '8vh'
    }
    return(
      <div className="card mx-auto" style={cardStyle}>
        <div className="card-header">Get an answer from a friend!</div>
        <div className="card-body">
          <h5 className="card-title">{this.state.answer.owner} says:</h5>
          <p className="card-text">- {this.state.answer.message}</p>
        </div>
      </div>
    )
  }
}

export default Answer;
