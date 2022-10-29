import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QuestContainer } from './QuestContainer';
export const QEyes = () => {
  const next = () => { console.error("TODO!")};
  return (    
    <QuestContainer name="eyes">
    <Card style={{ width: '18rem' }}>
      <Card.Body>        
        <Card.Title>Eye Care</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" onClick={next}>Done</Button>
      </Card.Body>
    </Card>
    </QuestContainer>
  )
}