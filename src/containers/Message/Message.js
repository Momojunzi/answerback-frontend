import React, {Component} from 'react';
import axios from 'axios';

class Button extends Component {
  state = {
    frontMessage: {
      owner: '',
      message: '',
      added: new Date()
    },
    smessage: ''
  }

  componentDidMount (){

  }

  sendMessage = (event) => {
    event.preventDefault();
    const message = this.state.frontMessage;
    if(message.owner.length<1 || message.message.length<1){
      alert("You left something blank!")
    }else{
      axios.post('http://0.0.0.0:8080/api/message', message)
        .then(result=>{
          const owner = document.getElementById("owner");
          const message = document.getElementById("message");
          owner.value = '';
          message.value = '';
          window.location.reload();
        }).catch(err => {
          if (!err.response) {
             // network error
             this.errorStatus = 'Error: Network Error';
         } else {
             this.errorStatus = err.response.data.message;
         }
        })
    }
  }

  getMessage = (event) =>{
    const state = this.state;
    const target = event.target;
    const value = target.value;
    const inputName = target.id;
    state.frontMessage[inputName] = value;
    this.setState(state.frontMessage);
  }

  render() {
    return (
      <div className="card mx-auto">
        <div className="card-body">
          <form className="row justify-content-center">
            <div className="form-group col-10 text-left">
              <label htmlFor="owner">Who are you?</label>
              <input id="owner"
                     className="col-12"
                     onChange={this.getMessage}
                     placeholder="enter your name"
             />
            </div>
            <div className="form-group col-10 text-left">
              <label htmlFor="message">What do you want to say?</label>
              <input id="message"
                     className="col-12"
                     onChange={this.getMessage}
                     placeholder="enter your message"
             />
            </div>
          </form>
          <button className="btn btn-info"
                  style={this.props.style}
                  onClick={this.sendMessage}>
                  click to send a message
          </button>
        </div>
      </div>
    )
  }
}

export default Button;
