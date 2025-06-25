import React, { useEffect, useState } from 'react'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);  
  
  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Escape'){
        setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  },[])
  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>

      {isOpen ? 
        <div className='modal'>
            <p>Modal is Open</p>
        </div> 
        : null
    }
    </div>
  )
}

export default Modal;