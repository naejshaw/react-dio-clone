import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
    
export const Wrapper = styled.div`
    max-width: 300px;
`
    
export const Column = styled.div`
    flex: 1;
`
    
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    
    color: #FFFFFF;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    margin-bottom: 35px;
    line-height: 25px;
`

export const HaveAccountText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 19px;

    color: #e5e044;
`


