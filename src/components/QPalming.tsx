import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QuestContainer } from './QuestContainer';
export const QEyes = () => {
  const next = () => { console.error("TODO!")};
  return (    
    <QuestContainer name="eyes">
    <Card style={{ width: '18rem' }}>
      <Card.Body>        
        <Card.Title>Palming</Card.Title>
        <Card.Text>
          Rub your hands together to warm them and then gently place the palms of your hands over your eyes (you can keep your eyes open or closed depending on whatever is comfortable for you). Allow your eyes to move naturally, and keep focused on your breathing. When you remove your hands, your eyes should feel brand new.
        </Card.Text>
        <Button variant="primary" onClick={next}>Done</Button>
      </Card.Body>
    </Card>
    </QuestContainer>
  )
}