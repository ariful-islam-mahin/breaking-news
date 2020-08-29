import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    console.log(props.article)
    // const { title, description} = props.article;
    
    return (
        
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                     
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        
    )
};

export default News;