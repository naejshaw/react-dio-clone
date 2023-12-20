import React from 'react'

import {FiThumbsUp} from 'react-icons/fi'

import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://kinsta.com/pt/wp-content/uploads/sites/3/2022/07/what-is-react-js-feature-image-1024x512.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/89807593?v=4'/>
                <div>
                    <h4>Jean Felipe</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito para o curso de react na trilha de conhecimento dio Pro...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#React #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}
