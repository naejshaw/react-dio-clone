import {useNavigate} from "react-router-dom"
import {MdEmail, MdLock, MdPerson} from 'react-icons/md'

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {api} from '../../services/api'

import {Button} from "../../components/Button"
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'

import {Column,Container,HaveAccountText,Row,SubtitleRegister,Title,TitleRegister,Wrapper} from './styles'

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required()

const Register = () => {
    const navigate = useNavigate()

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    })
    const onSubmit = async formData => {
        try{
            const {data} = await api.post(`users?email=${formData.email}&senha=${formData.password}`)
            navigate('/feed')
        }catch{
            alert('Houve um erro, tente novamente')
        }
    }
    const handleClickLogin = () => {
        navigate('/login')
    }


    return (<>
        <Header />
        <Container>
            <Column flex={1}>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column flex={3}>
                <Wrapper>
                    <TitleRegister>Comece agora grátis</TitleRegister>
                    <SubtitleRegister>Crie sua conta e make the change.</SubtitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} placeholder="Nome Completo" leftIcon={<MdPerson />} name="text" />
                        <Input control={control} placeholder="E-mail" leftIcon={<MdEmail />} name="email" errorMessage={errors?.email?.message}/>
                        <Input control={control} type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password" errorMessage={errors?.password?.message}/>
                        <Button title="Criar Conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <HaveAccountText>Já tenho conta</HaveAccountText>
                        <Button title="Fazer Login" onClick={handleClickLogin} />
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export {Register}