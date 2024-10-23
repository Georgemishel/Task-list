import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context'

const Alert = () => {
  const { alert, showAlert, list } = useAppContext()

  let { msg, type } = alert

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return (
    <Wrapper>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .alert {
    z-index: 1000;
    margin-bottom: 1rem;
    margin-top: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    border-radius: 0.25rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    font-weight: bold;
  }
  .alert-danger {
    color: #721c24;
    background: #f8d7da;
  }
  .alert-success {
    color: #155724;
    background: #d4edda;
  }
`

export default Alert
