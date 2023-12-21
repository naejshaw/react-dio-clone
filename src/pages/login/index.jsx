import {useNavigate} from "react-router-dom"
import {MdEmail, MdLock} from 'react-icons/md'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {api} from '../../services/api'

import {Button} from "../../components/Button"
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'

import {Column, Container, ForgotText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required()
const Login = () => {
    const navigate = useNavigate()

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    })
    const onSubmit = async formData => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            } else{
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente')
        }
    }


    const handleClickRegister = () => {
        navigate('/register')
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
                    <TitleLogin>Faça seu Login</TitleLogin>
                    <SubtitleLogin>Faça seu Login e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} placeholder="E-mail" leftIcon={<MdEmail />} name="email" errorMessage={errors?.email?.message}/>
                        <Input control={control} type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password" errorMessage={errors?.password?.message}/>
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <ForgotText>Esqueci minha senha</ForgotText>
                        <Button title="Criar Conta" variant="primary" onClick={handleClickRegister}/>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export {Login}