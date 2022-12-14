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
                    Technology rules over every aspect of our modern-day lives, and regardless of whether you hate it or love it, there's no getting rid of the screens surrounding us. But, one unlikely stakeholder in this game of screens is your eyes. The strain caused by small scripts and blue light causes significant damage to your eyes and this strain can often lead to nasty headaches. There's no need to worry though, because there are exercises you can practice that work to reduce strain and keep your eyes healthy!

          Rub your hands together to warm them and then gently place the palms of your hands over your eyes (you can keep your eyes open or closed depending on whatever is comfortable for you). Allow your eyes to move naturally, and keep focused on your breathing. When you remove your hands, your eyes should feel brand new.
        </Card.Text>
        <Button variant="primary" onClick={next}>Done</Button>
      </Card.Body>
    </Card>
    </QuestContainer>
  )
}