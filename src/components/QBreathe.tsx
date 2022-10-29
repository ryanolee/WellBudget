import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QuestContainer } from './QuestContainer';
export const QBreathe = () => {
  const next = () => { console.error("TODO!")};
  return (    
    <QuestContainer name="breathe">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="bottom" src="../../breathe.gif" />
      <Card.Body>
        <Card.Title>Box Breathing</Card.Title>
        <Card.Text>
          Feeling stressed? Can't seem to concentrate? 'Box breathing' is a tried and tested breathing technique that is designed to tackle exactly those issues. The extent of its use might surprise you - firefighters are trained to use box breathing to regulate their emotions before entering high-risk situations (like literally saving people from fires). Follow the steps below to try box breathing yourself, just be sure to close your eyes and breathe slowly.
        </Card.Text>
        <Button variant="primary" onClick={next}>Done</Button>
      </Card.Body>
    </Card>
    </QuestContainer>
  )
}