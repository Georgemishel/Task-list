import React from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { useAppContext } from '../context'
import Alert from './Alert'

/**
 * @description This is the form modal component
 */

const ModalForm = () => {
  const {
    isModalOpen,
    closeModal,
    targetName,
    handleSubmit,
    targetValue,
    alert,
    isEditing,
  } = useAppContext()

  return ReactDOM.createPortal(
    <Wrapper>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <form action=''>
            {alert.show && <Alert {...alert} />}

            <h3> {isEditing ? 'Edit Target' : 'Add Target'}</h3>

            <div className='form-flex'>
              <input
                type='text'
                name=''
                autoFocus
                placeholder='Enter A project...'
                value={targetName}
                className='form-input'
                onChange={targetValue}
              />
              <button
                type='submit'
                className='submit-btn'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </Wrapper>,
    document.body
  )
}

const Wrapper = styled.section`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
    transition: all 0.3s linear;
  }
  .modal-container {
    background: whitesmoke;
    border-radius: 5px;
    width: 90vw;
    height: 30vh;
    max-width: 620px;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }
  .close-modal-btn {
    position: absolute;
    top: 2rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: red;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .form-flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  form input {
    margin: 1rem 0;
    border: 3px solid black;
    border-radius: 25px;
    padding: 0.5rem 1rem;
  }

  .submit-btn {
    background-color: black;
    color: white;
    padding: 0.4rem;
    font-weight: bold;
    border-radius: 5px;
  }
`

export default ModalForm
