import React from 'react'
import '../../App.css';
import ArticlesContainer from './ArticlesContainer';
import {Button, Header} from "semantic-ui-react";

function RecentArticles() {
    return (
        <div style={{marginTop: '16px', marginBottom: '16px' }}>
            <Header>Recent Articles</Header>
            <ArticlesContainer />
            <Button style={{marginTop: "20px"}} basic color='green'>All Articles</Button>
        </div>
    );
}
export default RecentArticles