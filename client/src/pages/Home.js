import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video from '../media/forest.mp4';
export default function Home() {
    return ([
    <Container>
        <Row>
            <Col>
                <div class="embed-responsive embed-responsive-16by9">
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={video} type="video/mp4"  />
                    </video>
                </div>
                <div id="vidText" class="carousel-caption">
                    <h1 className="display-3">Cheat Leaf</h1>
                    <p className="lead mb-0">A forest of information with an emphasis on obtaining knowledge quickly</p>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Col>
        </Row>
    </Container>
    ]);
} 

