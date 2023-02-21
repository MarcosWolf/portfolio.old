import ProjectImage from './ProjectImage';
import ProjectDescription from './ProjectDescription';
import ProjectButtons from './ProjectButtons';

import styled from 'styled-components';

const ProjectsContainer = styled.div`
    width: 100%;
    background: var(--primary-text-color);
    position: relative;
`

const ProjectsMain = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px;
`
const Project = styled.div`
    max-width: 1200px;
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    padding: 120px 20px;
    gap: 150px 60px;

    &:nth-child(odd) {
        direction: rtl;
    }

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
        padding: 60px 10px;
        gap: 60px;
        place-items: center;
        text-align: center;
        direction: ltr;
    }

    @media (max-width: 700px) {
        padding: 60px 10px;
        gap: 40px;
        place-items: initial;
        text-align: left;
    }
`

const ProjectsTitle = styled.h2`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: var(--tertiary-text-color);
    text-transform: uppercase;
`

const ProjectDivider = styled.div`
    .custom-shape-divider-bottom-1676999978 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1676999978 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 82px;
    }

    .custom-shape-divider-bottom-1676999978 .shape-fill {
        fill: #E6E6E6;
    }
`

function Projects() {
    return (
        <ProjectsContainer id="projects">
            <ProjectsMain>
                <ProjectsTitle>Meus últimos projetos</ProjectsTitle>
                <Project>
                    <ProjectImage/>
                    <div>
                        <ProjectDescription />
                        <ProjectButtons/>
                    </div>
                </Project>
            </ProjectsMain>
            <ProjectDivider>
                <div class="custom-shape-divider-bottom-1676999978">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </ProjectDivider>
        </ProjectsContainer>
    )
}

export default Projects;