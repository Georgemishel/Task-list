import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { useAppContext } from '../context'

/**
 * @description This is the buttoncomponent to open modal
 */

const AddProjectModal = () => {
  const { openModal } = useAppContext()
  return (
    <Wrapper>
      <div className='center modal-btn'>
        <FaPlus onClick={openModal} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .modal-btn {
    position: fixed;
    bottom: 0;
  }
  svg {
    color: greenyellow;
    font-size: 4rem;
    background-color: black;
    border-radius: 50%;
    padding: 1rem;
  }
`

export default AddProjectModal
