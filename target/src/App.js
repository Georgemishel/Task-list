import styled from 'styled-components'
import AddProjectModal from './components/AddProjectModal'
import ModalForm from './components/ModalForm'
import Welcome from './components/Welcome'

function App() {
  return (
    <Wrapper>
      <Welcome />
      <AddProjectModal />
      <ModalForm />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  @media screen and (min-width: 992px) {
    .center {
      width: 95vw;
    }
  }
`

export default App
