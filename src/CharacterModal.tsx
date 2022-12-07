import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { useQuery, gql } from "@apollo/client";

interface ModalProps {
    currentSelection: any,
    show: boolean,
    onHide(): void
}

const PERSON_QUERY = gql`
query person ($id: ID!) {
  person (id: $id) {
    id,
    name,
    homeworld{
      name
    },
    eyeColor,
    birthYear,
    filmConnection{
      films{
        title
      }
    }
    species {
      name
    }
  }
}
`

const CharacterModal = (props: ModalProps) => {
  const { currentSelection, onHide } = props;

  const { data } = useQuery(PERSON_QUERY, {
    variables: { id: currentSelection}
  });
  
    if(!data) {
      return null;
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.person.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Appeared in</h4>
          <ul>
            {data.person.filmConnection.films.map((film: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => <li>{film.title}</li>)}
          </ul>
          <h4>Home Planet</h4>
            {data.person.homeworld.name}
          <h4>Year of Birth</h4>
            {data.person.birthYear}
          <h4>Eye Color</h4>
            {data.person.eyeColor}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CharacterModal;