import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      cheatcode: 'hello world',
      elephant: 'elephant',
      wolf: 'wolf',
      poop: 'poop',
      star: 'star',
      earth: 'earth',
      moon: 'moon',
      person: 'person',
      winner: 'winner',
      javascript: 'javascript',
      job: 'job',
      affirmation: 'affrimation',
      meditation: 'meditation',
      babe: 'babe',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ answer: e.target.value });
  }

  render() {
    return (
      <div className='main'>
        <input placeholder='Enter Cheat Code' onChange={this.onChangeHandler} />
        {this.state.answer.toLowerCase() === this.state.cheatcode ? (
          <h1>You did it! You got the cheatcode. Now go home.</h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.elephant ? (
          <h1>
            <span role='img' aria-label='elephant'>
              🐘's are amazing and so are you!
            </span>
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.wolf ? (
          <h1>
            <span role='img' aria-label='wolf'>
              🐺
            </span>{' '}
            on Wallstreet
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.poop ? (
          <h1>
            <span role='img' aria-label='poop'>
              💩
            </span>{' '}
            You got it!
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.star ? (
          <h1>
            5{' '}
            <span role='img' aria-label='star'>
              ⭐
            </span>
            's for you!
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.earth ? (
          <h1>
            We are the{' '}
            <span role='img' aria-label='earth'>
              🌏
            </span>
            !
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.moon ? (
          <h1>
            Dark Side of the{' '}
            <span role='img' aria-label='moon'>
              🌑!
            </span>
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.person ? (
          <h1>
            <span role='img' aria-label='person waving'>
              🙋
            </span>
            that's you! You can put your hand down now.
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.winner ? (
          <h1>
            <span role='img' aria-label='thumbs up'>
              👍
            </span>{' '}
            Good Job!
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.javascript ? (
          <h1>
            <span role='img' aria-label='computer'>
              💻
            </span>{' '}
            Congrats, you are a programmer! Now go outside and get some sun.
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.job ? (
          <h1>
            <span role='img' aria-label='book'>
              📕
            </span>
            Job well done!
          </h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.affirmation ? (
          <h1>Your bank account is overflowing!</h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.meditation ? (
          <h1>You said it, you need it. Now do it. Give me 15 minutes.</h1>
        ) : null}
        {this.state.answer.toLowerCase() === this.state.babe ? (
          <h1>There is only one. Her name is Carly J Fawcett!</h1>
        ) : null}
      </div>
    );
  }
}
