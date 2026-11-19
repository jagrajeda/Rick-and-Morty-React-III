import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CharacterDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
      } catch (err) {
        setError('Character not found or failed to load.');
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [id]);

  if (loading) return <p>Loading character details...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <Button
        variant="secondary"
        className="mb-3"
        onClick={() => navigate('/characters')}
      >
        &larr; Back to Characters
      </Button>

      <Card style={{ maxWidth: '28rem' }} className="mx-auto">
        <Card.Img variant="top" src={character.image} alt={character.name} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Status:</strong> {character.status}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Species:</strong> {character.species}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> {character.type || 'N/A'}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Gender:</strong> {character.gender}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Origin:</strong> {character.origin?.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Known Location:</strong> {character.location?.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Episodes Appeared In:</strong> {character.episode?.length}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </section>
  );
}

export default CharacterDetailsPage;