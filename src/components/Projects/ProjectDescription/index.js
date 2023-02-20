import styled from 'styled-components';

const ProjectTitle = styled.h2`
    font-size: 2rem;
    color: var(--tertiary-text-color);
    word-break: break-all;

    @media (max-width: 960px) {
        font-size: 1.5rem;
    }
`

const ProjectDescription = styled.p`
    font-size: 1.5rem;
    line-height: 1.33;
    color: var(--tertiary-text-color);
    margin-bottom: 50px;

    @media (max-width: 960px) {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    @media (max-width: 700px) {
        max-width: 50ch;
    }
`

function ProjectsDescription() {
    return (
        <div>
            <ProjectTitle>Projeto Reservado</ProjectTitle>
            <ProjectDescription>Descrição do Projeto</ProjectDescription>
        </div>
    )
}

export default ProjectsDescription;