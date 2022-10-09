import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import TypeContainer from './TypeContainer';

export default class PostTypeSelector extends Component {
  constructor() {
    super()
    this.state = { typeSelected: "Question" }
  }

  RadioClicked = (e, { value }) => this.setState({ typeSelected: value })

  render() {
    return (
      <div>
        <span><h2 style={{color:'seagreen' }}>Post</h2></span>
        <Form className='postSelector'>
          <h3 style={{ marginRight: "10px",  }}>Select Your Post Type: </h3>
          <Radio style={{ marginRight: "20px" }}
            label='Question'
            value='Question'
            name='radioButtons'
            checked={this.state.typeSelected === 'Question'}
            onChange={this.RadioClicked}
          />
          <Radio
            label='Article'
            value='Article'
            name='radioButtons'
            checked={this.state.typeSelected === 'Article'}
            onChange={this.RadioClicked}
          />
        </Form>
        <span style={{ marginLeft: "10px", color:'seagreen' }}><h2>What do you want to ask or share?</h2></span>
        <TypeContainer typeSelected={this.state.typeSelected} />
      </div>
    )
  }
}