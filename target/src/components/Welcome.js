import React from 'react'
import styled from 'styled-components'
import bullseye from '../assets/images/bullseye-svgrepo-com.svg'
import Alert from './Alert'
import ProjectCard from './ProjectCard'
import { quotes } from '../data'
import { days } from '../data'

/**
 * @description Component that contains welcome message and inspiring quotes
 */

const Welcome = () => {
  const date = new Date()
  let dayName = days[date.getDay()]
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const today = `${dayName}, ${day}/${month}/${year}`

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <Wrapper>
      <section className='app-header'>
        <h1>Targets</h1>
        <span>
          <img src={bullseye} alt='bullseyes' />
        </span>
      </section>
      <div className='center'>
        <div className='welcome'>
          <section>
            <p className='quote'>
              <strong>"</strong>
              {randomQuote} <strong>"</strong>
            </p>
            <p className='text-center date'>{today}</p>
            <Alert />
            <ProjectCard />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .app-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    padding: 1rem;
  }

  .date {
    padding-top: 0.8rem;
  }

  img {
    width: 50px;
    height: 50px;
    margin-top: -0.5rem;
  }

  .welcome {
    margin-top: 1rem;
  }

  .quote {
    padding-top: 1rem;
    text-align: center;
    font-weight: bold;
    font-family: cursive;
  }
`

export default Welcome
