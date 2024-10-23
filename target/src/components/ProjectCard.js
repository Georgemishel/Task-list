import React from 'react'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'
import styled from 'styled-components'
import { useAppContext } from '../context'
import EmptyList from './EmptyList'

const ProjectCard = () => {
  const { list, deleteItem, editItem, completedProject, isDone } =
    useAppContext()

  if (list.length === 0) {
    return <EmptyList />
  }

  return (
    <Wrapper>
      {list.map((item, index) => {
        const { title, id, isCompleted } = item

        if (list.length === 0) {
          return (
            <div className='waiting'>
              <h1>Waiting</h1>
            </div>
          )
        } else {
          return (
            <div className='targets' key={id}>
              <div className='target-item'>
                <p className={`${isCompleted ? 'completed' : ''}`}>{title}</p>

                <div className='target-control'>
                  <button
                    className={`${isCompleted ? 'hide-edit' : 'btn edit'}`}
                    onClick={() => editItem(id)}
                  >
                    <FaEdit />
                  </button>
                  <button className='btn delete' onClick={() => deleteItem(id)}>
                    <FaTrash />
                  </button>
                  <button className='btn completed-btn'>
                    <FaCheck onClick={() => completedProject(id)} />
                  </button>
                </div>
              </div>
            </div>
          )
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .targets {
    background-color: black;
    color: white;
    margin: 0.8rem 0;
  }

  .completed {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    color: greenyellow;
  }
  .completed-btn {
    color: greenyellow;
  }

  .target-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .edit {
    color: yellow;
  }

  .hide-edit {
    display: none;
  }

  .delete {
    color: red;
  }
`

export default ProjectCard
