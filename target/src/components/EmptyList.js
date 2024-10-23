import React from 'react'
import styled from 'styled-components'

const EmptyList = () => {
  return (
    <Wrapper>
      <h1>No Project Added</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: black;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

export default EmptyList
