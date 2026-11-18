import { Link } from 'react-router';
import Card from 'react-bootstrap/Card';

function NotFound() {
  return (
    <Card body>
      <h2>404 - Page Not Found</h2>
      <p>Looks like you drifted into a dimension that does not exist.</p>
      <Link to="/">Back home</Link>
    </Card>
  );
}

export default NotFound;