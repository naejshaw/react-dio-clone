import styled from 'styled-components';

export const CardContainer = styled.div `
    width: 100%;
    background-color: #384651;
    position: relative;
    margin-bottom: 24px;
`

export const ImageBackground = styled.img `
    width: 100%;
    height: 180px;
`

export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

export const UserInfo = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    
    div{
        margin-left: 12px;
    }

    h4{
        font-family: 'Opens Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 25px;
        color: #FFFFFF;
    }

    p{
        font-family: 'Opens Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 16px;
        color: #FFFFFF;
    }
`

export const UserPicture = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 3px solid #FFFFFF;
`

export const PostInfo = styled.div `
    
    margin-bottom: 12px;

    h4{
        font-family: 'Opens Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 25px;
        color: #FFFFFF;
    }

    p{
        font-family: 'Opens Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 16px;
        color: #FFFFFF;
    }
`

export const HasInfo = styled.div `
    margin-bottom: 12px;

    h4{
        font-family: 'Opens Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 14px;
        color: #FFFFFF80;
    }

    p{
        font-family: 'Opens Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 22px;
    }
`