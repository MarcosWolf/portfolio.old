import iconGithub from '../../../img/github.svg';
import iconLinkedin from '../../../img/linkedin.svg';
import styled from 'styled-components';

const NavMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    text-decoration: none;
`;

const LinkMenu = styled.a`
    font-size: 1.125rem;
    line-height: 1.3;
    padding: 10px 20px;
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-text-color);
    display: block;
    }
    &:hover {
        background: var(--main-hover-color);
        border-radius: 4px;
        transition: 0.3s;
    }

`;

function HeaderMenu() {
    return (
        <NavMenu>
            <li><LinkMenu href='#experiencia'>Experiência</LinkMenu></li>
            <li><LinkMenu href='#projetos'>Projetos</LinkMenu></li>
            <li><LinkMenu href='#formacao'>Formação</LinkMenu></li>
            <li><LinkMenu href='#contato'>Contato</LinkMenu></li>
            <li><LinkMenu href='https://github.com/MarcosWolf/' target='_blank'> <img src={iconGithub}></img> </LinkMenu></li>
            <li><LinkMenu href='https://linkedin.com/in/marcoswolf/' target='_blank'> <img src={iconLinkedin}></img> </LinkMenu></li>
        </NavMenu>
    )
};

export default HeaderMenu;