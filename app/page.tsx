import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const style = {
    width: '18em'
  };
  return (
    <main className="flex min-h-screen">
      <Container fluid>
        <Row>
          <Col>
            <div className="card" style={style}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
