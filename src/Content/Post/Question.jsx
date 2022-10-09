import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

import db from "../../firebase"
import {addDoc, collection} from 'firebase/firestore'

export default class Question extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            problem: "",
            tags: ""
        };
    }


    CreateNewQuestion = async () => {
        var date = new Date()
        const collectionRef = collection(db, 'Post');
        const payload = {
            title: this.state.title,
            problem: this.state.problem,
            tags: this.state.tags,
            creationDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        }

        await addDoc(collectionRef, payload);

        this.setState({
            title: "",
            problem: "",
            tags: ""
        });

        console.log('Successfully Added Question');

    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {

        return (
            <Form className="SelectedForm">
                <Form.Field>
                    <label>Title</label>
                    <input value={this.state.title} name="title" onChange={this.updateInput}
                           placeholder='Enter a descriptive title'/>
                </Form.Field>
                <Form.Field style={{marginTop: "10px"}}>
                    <label style={{marginBottom: "10px"}}>Describe your problem</label>
                    <textarea value={this.state.problem} name="problem" onChange={this.updateInput} placeholder=''/>
                </Form.Field>
                <Form.Field style={{marginTop: "10px"}}>
                    <label style={{marginBottom: "10px"}}>Tags</label>
                    <input value={this.state.tags} name="tags" onChange={this.updateInput}
                           placeholder='Please add up to 3 tags to descript what your article is about e.g., Java'/>
                </Form.Field>
                <Button style={{marginTop: "20px", float: "right", width: "170px"}}
                        onClick={this.CreateNewQuestion}>Post</Button>
            </Form>
        )

    }
}
