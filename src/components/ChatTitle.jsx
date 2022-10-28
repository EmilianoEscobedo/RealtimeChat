import "../assets/css/chat.css";
import TagIcon from '@mui/icons-material/Tag';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useChatContext} from '../contexts/ChatContext';
import ChannelsMobile from './ChannelsMobile'

export default function ChatTitle() {
  const {actualChat} = useChatContext();
  return (
    <div>
      <Navbar className="chat__title" variant="dark" expand="none">
        <Container fluid>
          <Navbar.Brand >
            {actualChat !== '👋 Welcome' ? 
            <h5 className="ms-3 py-2 pb-0"><TagIcon /> {actualChat}</h5> 
            :
            <h5 className="ms-3 py-2 pb-0"> {actualChat}</h5>}
          </Navbar.Brand>
          <Navbar.Toggle className="channels__mobile-toggle" aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '400px' }}
              navbarScroll
              >
                <ChannelsMobile data-bs-toggle="collapse"/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}