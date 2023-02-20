import githubIcon from '../../../img/github_white.svg';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    direction: ltr;
    

    @media (max-width: 960px) {
        margin-top: 20px;
    }

    @media (max-width: 700px) {
        justify-content: initial;
        align-items: initial;
    }
`

const ProjectDemo = styled.a`
    font-size: 1.5rem;
    background: var(--tertiary-bg-color);
    padding: 15px 15px;
    color: var(--main-bg-color);
    border-radius: 4px;
`

const ProjectCode = styled.a`
    display: flex;
    font-size: 1.5rem;
    padding: 15px 15px;
    border: 1px solid var(--main-bg-color);
    color: var(--main-bg-color);
    border-radius: 4px;

    & img {
        padding: 0 10px;
    }
`

function ProjectsButtons() {
    return (
        <Div>
            <ProjectDemo>Demonstração</ProjectDemo>
            <ProjectCode><img src={githubIcon}></img>Código-fonte</ProjectCode>
        </Div>
    )
}

export default ProjectsButtons;