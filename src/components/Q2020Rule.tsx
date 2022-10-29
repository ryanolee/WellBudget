import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QuestContainer } from './QuestContainer';
export const QBreathe = () => {
  const next = () => { console.error("TODO!")};
  return (    
    <QuestContainer name="breathe">
    <Card style={{ width: '18rem' }}>
      <Card.Body>        
        <Card.Title>20/20 Rule</Card.Title>
        <Card.Text>
          Technology rules over every aspect of our modern-day lives, and regardless of whether you hate it or love it, there's no getting rid of the screens surrounding us. But, one unlikely stakeholder in this game of screens is your eyes. The strain caused by small scripts and blue light causes significant damage to your eyes and this strain can often lead to nasty headaches. There's no need to worry though, because there are exercises you can practice that work to reduce strain and keep your eyes healthy!

          Look at something that is 20 feet away (that's just very far away... like a tree outside your window) for 20 seconds, and repeat every 20 minutes whilst you're looking at a screen.
          
        </Card.Text>
        <Button variant="primary" onClick={next}>Done</Button>
      </Card.Body>
    </Card>
    </QuestContainer>
  )
}