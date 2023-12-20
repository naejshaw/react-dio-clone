import {useNavigate} from "react-router-dom"
import {MdEmail, MdLock, MdPerson} from 'react-icons/md'
import {Button} from "../../components/Button"
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'

import {Column,Container,HaveAccountText,Row,SubtitleRegister,Title,TitleRegister,Wrapper} from './styles'
const Register = () => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    const handleClickLogin = () => {
        navigate('/login')
    }


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>Faça seu cadastro</TitleRegister>
                    <SubtitleRegister>Faça seu cadastro e make the change._</SubtitleRegister>
                    <form>
                        <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="text" />
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" />
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" />
                        <Button title="Criar Conta" variant="secondary" onClick={handleClickSignIn}/>
                    </form>
                    <Row>
                        <HaveAccountText>Já tenho conta</HaveAccountText>
                        <Button title="Entrar" onClick={handleClickLogin} />
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export {Register}