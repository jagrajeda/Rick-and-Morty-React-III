import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({ next: null, prev: null, count: 0, pages: 0 });
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url);
        setCharacters(response.data.results);
        setInfo(response.data.info);
      } catch (err) {
        setError('Failed to load characters. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [url]);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Characters ({info.count} total)</h2>
        <div className="d-flex gap-2">
          <Button
            variant="secondary"
            disabled={!info.prev}
            onClick={() => setUrl(info.prev)}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            disabled={!info.next}
            onClick={() => setUrl(info.next)}
          >
            Next
          </Button>
        </div>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {characters.map((char) => (
          <Col key={char.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={char.image} alt={char.name} />
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                  <strong>Status:</strong> {char.status}
                  <br />
                  <strong>Species:</strong> {char.species}
                  <br />
                  <strong>Origin:</strong> {char.origin.name}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => navigate(`/characters/${char.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default CharactersPage;