import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const [hoverIn, setHoverIn] = useState(0)

    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
        }}>
            <ListGroup as="ul">
                <Link to = '/1'>
                    <ListGroup.Item as="li"
                    style = {{cursor: "pointer", width: "100px"}}
                    active = { hoverIn === 1 ? true : false }
                    onMouseEnter = {() => setHoverIn(1)}
                    onMouseLeave = {() => setHoverIn(0)}>
                        Tes 1
                    </ListGroup.Item>
                </Link>
                <Link to = '/3'>
                    <ListGroup.Item as="li"
                    style = {{cursor: "pointer", width: "100px"}}
                    active = { hoverIn === 3 ? true : false }
                    onMouseEnter = {() => setHoverIn(3)}
                    onMouseLeave = {() => setHoverIn(0)}>
                        Tes 3
                    </ListGroup.Item>
                </Link>
                <Link to = '/5'>
                    <ListGroup.Item as="li"
                    style = {{cursor: "pointer", width: "100px"}}
                    active = { hoverIn === 5 ? true : false }
                    onMouseEnter = {() => setHoverIn(5)}
                    onMouseLeave = {() => setHoverIn(0)}>
                        Tes 5
                    </ListGroup.Item>
                </Link>
            </ListGroup>
        </div>
    )
}

export default Home