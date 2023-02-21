import iconGithub from '../../../img/github.svg';
import iconLinkedin from '../../../img/linkedin.svg';

import { HashLink as Link } from 'react-router-hash-link';

import styled from 'styled-components';


const NavMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    text-decoration: none;
`;

const LinkMenu = styled.li`
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--primary-text-color);
`

function HeaderMenu() {
    return (
        <NavMenu>
            <LinkMenu><StyledLink to="#experience">Experiência</StyledLink></LinkMenu>
            <LinkMenu><StyledLink to="#skills">Tecnologias</StyledLink></LinkMenu>
            <LinkMenu><StyledLink to="#projects">Projetos</StyledLink></LinkMenu>
            <LinkMenu><StyledLink to="#graduation">Formação</StyledLink></LinkMenu>
            <LinkMenu><StyledLink to="#contact">Contato</StyledLink></LinkMenu>
        </NavMenu>
    )
};

export default HeaderMenu;