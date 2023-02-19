import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const HeaderContainer = styled.header`
        width: 100%;
        background: var(--secondary-bg-color);
`;

const HeaderMain = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:970px) {
        flex-direction: column;
        gap: 40px;
        padding: 20px;
        
        & a {
            background: var(--main-hover-color);
            border-radius: 4px;
        }
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <HeaderMain>
                <HeaderLogo />
                <HeaderMenu />
            </HeaderMain>
        </HeaderContainer>
    )
}

export default Header;