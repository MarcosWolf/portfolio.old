import styled from 'styled-components';
import SkillsCards from './SkillsCards';

const SkillsContainer = styled.div`
    max-width: 100%;
    background: var(--quaternary-bg-color);
    position: relative;
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

const SkillDivider = styled.div`
    .custom-shape-divider-bottom-1676999838 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1676999838 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 82px;
    }

    .custom-shape-divider-bottom-1676999838 .shape-fill {
        fill: #390054;
    }
`

function Skills() {
    return (
        <SkillsContainer id="skills">
            <SkillsMain>
                <SkillsTitle>Tecnologias que utilizo</SkillsTitle>
                <SkillsCards />
            </SkillsMain>
        <SkillDivider>
        <div class="custom-shape-divider-bottom-1676999838">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        </SkillDivider>
        </SkillsContainer>
    )
}

export default Skills;