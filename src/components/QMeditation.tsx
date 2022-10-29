import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QuestContainer } from './QuestContainer';
import { YoutubeEmbed } from './YoutubeEmbed';

export const QMeditation = () => {
  const next = () => { console.error("TODO!")};
  return (    
    <QuestContainer name="eyes">
    <Card style={{ width: '18rem' }}>
      <Card.Body>        
        <Card.Title>Meditation</Card.Title>
        <YoutubeEmbed embedId="inpok4MKVLM" />
        <Button variant="primary" onClick={next}>Done</Button>
      </Card.Body>
    </Card>
    </QuestContainer>
  )
}