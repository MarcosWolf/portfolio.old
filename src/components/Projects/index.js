import ProjectImage from './ProjectImage';
import ProjectDescription from './ProjectDescription';
import ProjectButtons from './ProjectButtons';

import styled from 'styled-components';

const ProjectsContainer = styled.div`
    width: 100%;
    background: var(--primary-text-color);
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

function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsMain>
                <Project>
                    <ProjectImage/>
                    <div>
                        <ProjectDescription />
                        <ProjectButtons/>
                    </div>
                </Project>

                <Project>
                    <ProjectImage/>
                    <div>
                        <ProjectDescription />
                        <ProjectButtons/>
                    </div>
                </Project>

                <Project>
                    <ProjectImage/>
                    <div>
                        <ProjectDescription />
                        <ProjectButtons/>
                    </div>
                </Project>
            </ProjectsMain>
        </ProjectsContainer>
    )
}

export default Projects;