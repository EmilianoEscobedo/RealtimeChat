import '../assets/css/chat.css'

export const Chat = () => {
  return (
    <>
      <div className='chat__screen'>
        <div className='chat__title'>
          <h5 className='ms-3 py-2 pb-0'>
            Chat 1
          </h5>
          <button type='button' className='btn btn-dark d-sm-none me-2' data-bs-toggle="offcanvas"
          data-bs-target="#channels__mobile" aria-controls="offcanvasResponsive">
            Channels
          </button>
        </div>
        <div className='chat__msgs'>
          <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> 
          <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> <div className='message'>
            <div className='d-flex justify-content-between'>
            <p id='msgAuthor'>Emiliano Escobedo</p>
            <p id='msgTime'>22:19</p>
            </div>
            <p id='msgContent'>Holassss</p>
          </div> 
        </div>
        <div className='chat__newMsg'>
          <input type="text" className="chat__input" placeholder="  yo' type here :)"/>
          <button type='button' className='ms-3 btn btn-dark'>
            Send
          </button>
        </div>
      </div>
    </>
  )
}
