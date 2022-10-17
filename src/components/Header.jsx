import '../assets/css/header.css'
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = (props) => {
    const { children } = props
  return (
    <>
      <header>
          <h1>
            🗣️ TalkIT
          </h1>
        <div className='user__panel'>
          <p>
            👋 Hi, Emiliano Escobedo
          </p>
        <Dropdown>
          <Dropdown.Toggle  variant="dark" id="dropdown-basic">
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item>
              Create Channel
            </Dropdown.Item>
            <Dropdown.Item>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
      </header>
        { children }
    </>
  )
}
