import React from 'react'
import '../assets/css/channels.css'

export const Channels = () => {
  return (
    <div className='channels' id='#channels__mobile' aria-labelledby="offcanvasResponsiveLabel"
    tabindex="-1">
      <div>
        <h3 >Channels</h3>
        <ul>
          <li>
            <button>
              Channel 1
            </button>
          </li>
          <li>
            <button>
              Channel 2
            </button>
          </li>
          <li>
            <button>
              Channel 3
            </button>
          </li>
        </ul>
      </div>
      <button type='button' className=' mb-1 btn btn-dark'>
      Create Channel
      </button>
    </div>
  )
}
