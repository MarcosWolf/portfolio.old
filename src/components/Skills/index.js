import styled from 'styled-components';
import SkillsCards from './SkillsCards';

const SkillsContainer = styled.div`
    max-width: 100%;
    background: var(--quaternary-bg-color);
`

const SkillsMain = styled.div`
    max-width: 1200px;
    padding: 120px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
`

const SkillsTitle = styled.h2`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: var(--tertiary-text-color);
    text-transform: uppercase;
`

function Skills() {
    return (
        <SkillsContainer>
            <SkillsMain>
                <SkillsTitle>Tecnologias que utilizo</SkillsTitle>
                <SkillsCards />
            </SkillsMain>
        </SkillsContainer>
    )
}

export default Skills;