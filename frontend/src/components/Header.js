import styled from '@emotion/styled'

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Task Manager</Title>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #4A72BF;
    padding: 10px;
    display: flex;
    justify-content: center;
`

const Title = styled.h1`
    margin: 0;
    color: white;
`

export default Header;