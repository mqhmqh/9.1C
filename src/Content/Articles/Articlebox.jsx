
import React from 'react'
import {Card,  Image} from 'semantic-ui-react'


function Articlebox(props){

    return (
        <Card color="green">
        <Image src={props.img} wrapped ui={false} />
        <Card.Content textAlign="left">
          <Card.Header>
                      Article
          </Card.Header>
            <Card.Meta>
                <span>{props.name}</span>
            </Card.Meta>
          <Card.Description>
              Abstract: {props.abstract}
          </Card.Description>
          <Card.Description>
         <div style={{marginTop: "10px"}}>Text: {props.text}</div>
          </Card.Description>
            <Card.Description>
                    Tags:
                    <span> {props.tags}</span>
            </Card.Description>
        </Card.Content>
      </Card>

    )
   
}
export default Articlebox