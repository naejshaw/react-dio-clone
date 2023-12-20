
import {Header} from '../../components/Header'
import {UserInfo} from '../../components/UserInfo'
import {Card} from '../../components/Card'

import {Container, Column,Title,TitleHighLight} from './styles'
const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={95} name='Jean Felipe' image='https://avatars.githubusercontent.com/u/89807593?v=4'/>
                <UserInfo percentual={85} name='Jean Felipe' image='https://avatars.githubusercontent.com/u/89807593?v=4'/>
                <UserInfo percentual={85} name='Jean Felipe' image='https://avatars.githubusercontent.com/u/89807593?v=4'/>
                <UserInfo percentual={55} name='Jean Felipe' image='https://avatars.githubusercontent.com/u/89807593?v=4'/>
                <UserInfo percentual={50} name='Jean Felipe' image='https://avatars.githubusercontent.com/u/89807593?v=4'/>
            </Column>
        </Container>
    </>)
}

export {Feed}