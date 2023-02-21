import ExperienceSubtitle from './ExperienceSubtitle';
import ExperienceDescription from './ExperienceDescription';
import ExperienceTimeline from './ExperienceTimeline';

import styled from 'styled-components';

const ExperienceContainer = styled.header`
        width: 100%;
        background: var(--primary-bg-color);
        position: relative;
`

const ExperienceMain = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`

const ExperienceDivider = styled.div`
    .custom-shape-divider-bottom-1676999557 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1676999557 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 82px;
    }

    .custom-shape-divider-bottom-1676999557 .shape-fill {
        fill: #210031;
    }   
`

function Experience() {
    return (
        <ExperienceContainer id="experience">
            <ExperienceMain>
                <ExperienceSubtitle />
                    <div>
                        <ExperienceDescription />
                        <ExperienceTimeline />              
                    </div>
            </ExperienceMain>
            <ExperienceDivider>
            <div class="custom-shape-divider-bottom-1676999557">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            </ExperienceDivider>
        </ExperienceContainer>
    )
}

export default Experience;