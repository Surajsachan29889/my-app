import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function ProCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Make a GET request to fetch the data from the backend API
    axios.get('http://3.6.15.101:1000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Pcard">
      {data.map((item, index) => (
        <Card>
          <Card.Img variant="top" src={item.img} className="cardimg" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.content}
            </Card.Text>
            <Button variant="primary" href={item.gitlink} target="_blank" >
              <i className="fa-brands fa-github"></i>GitHub
            </Button>
            <Button variant="primary" href="http://3.6.15.101:9000/homepage" target="_blank" >
              <i className="fa-solid fa-link"></i>Visit
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProCard;
