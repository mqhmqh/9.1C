import React from 'react'
import '../../App.css';
import TutorialsContainer from './TutorialsContainer';
import {Button, Header} from "semantic-ui-react";

function RecentTutorials(){
    return (
        <div style={{marginBottom: '16px'}}>
            <Header>Recent Tutorials</Header>
        <TutorialsContainer />
            <Button style={{marginTop: "20px"}} basic color='green'>All Tutorials</Button>
        </div>
    );
  }
export default RecentTutorials