import ExperienceSubtitle from './ExperienceSubtitle';
import ExperienceText from './ExperienceText';
import ExperienceTimeline from './ExperienceTimeline';

import styled from 'styled-components';

const ExperienceContainer = styled.header`
        width: 100%;
        background: var(--primary-bg-color);
`;

const ExperienceMain = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

function Experience() {
    return (
        <ExperienceContainer>
            <ExperienceMain>
                <ExperienceSubtitle />
                    <div>
                        <ExperienceText />
                        <ExperienceTimeline />              
                    </div>
            </ExperienceMain>
        </ExperienceContainer>
    )
}

export default Experience;