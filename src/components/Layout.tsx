import { Col, Row, Container } from "react-bootstrap"


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (<>
    <Container fluid>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </>)
}

export default Layout