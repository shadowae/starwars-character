import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

interface ModalProps {
    data: any,
    show: boolean,
    onHide(): void
}

const CharacterModal = (props: ModalProps) => {
    const { data, onHide } = props;
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Appeared in</h4>
          <ul>
            {data.filmConnection.films.map((film: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => <li>{film.title}</li>)}
          </ul>
          <h4>Home Planet</h4>
            {data.homeworld.name}
          <h4>Year of Birth</h4>
            {data.birthYear}
          <h4>Eye Color</h4>
            {data.eyeColor}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CharacterModal;