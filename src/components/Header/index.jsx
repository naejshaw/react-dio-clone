import React from 'react'
import {useNavigate} from "react-router-dom"
import logo from '../../assets/logo-dio.png'
import {Button} from '../Button'
import {
  BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper
} from './styles'

const Header = ({autenticado}) =>  {
    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login')
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

    const handleClickHome = () => {
      navigate('/')
    }
  return (
    <Wrapper>
      <Container>
        <Row>
          <img style={{cursor: 'pointer'}} src={logo} alt='Logo' onClick={handleClickHome}/>
          {autenticado ? (<>
              <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
          </>) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/89807593?v=4' alt='' />
          ) : (<>
            <MenuRight href="#" onClick={handleClickHome}>Home</MenuRight>
            <Button title="Entrar" onClick={handleClickLogin}/>
            <Button title="Cadastrar" onClick={handleClickRegister} />
          </>)}
          
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header}