import styled from 'styled-components';

const Timeline = styled.div`
    display: grid;
    gap: 10px 20px;
    grid-column: 2;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    background: var(--main-hover-color);
    margin-bottom: 20px;
    border-radius: 4px;
    position: relative;

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`

const TimelinePeriod = styled.span`
    position: absolute;
    top: 22px;
    left: -100px;
    width: 80px;
    color: var(--primary-text-color);
    font-size: .875rem;
    text-align: right;

    @media (max-width: 800px) {
        position: initial;
        order: 1;
        width: initial;
        text-align: left;
        font-weight: bold;
    }
`

const TimelineFunction = styled.h3`
    font-size: 1.125rem;
    line-height: 1.1;
    color: var(--primary-text-color);
    font-weight: bold;
`

const TimelineClass = styled.span`
    font-size: 1.125rem;
    line-height: 1.1;
    color: var(--primary-text-color);
    font-weight: bold;
`

const TimelineDescription = styled.p`
    font-size: 0.875rem;
    line-height: 1.4;
    color: var(--primary-text-color);
`

const TimelineSkills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: start;

    & li {
        font-size: .875rem;
        line-height: 1.4;
        background: var(--main-bg-color);
        border-radius: 4px;
        padding: 5px 10px;
    }
`

const TimelineSkill = styled.li`

`

function ExperienceTimeline() {
    return (
        <div>
            <Timeline>
                <TimelinePeriod>2022</TimelinePeriod>
                <TimelineFunction>Designer Gráfico</TimelineFunction>
                <TimelineClass>Freelancer</TimelineClass>
                <TimelineDescription>Criação de arte visual de materiais para sites, panfletos, anúncios para mídias sociais e logotipos.</TimelineDescription>
                <TimelineSkills>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Figma</li>
                    <li>UX Design</li>
                    <li>UI Design</li>
                </TimelineSkills>
            </Timeline>

            <Timeline>
            <TimelinePeriod>2019-2022</TimelinePeriod>
            <TimelineFunction>Suporte Técnico</TimelineFunction>
            <TimelineClass>Assistente</TimelineClass>
            <TimelineDescription>Gestão de equipe, manutenção de sistemas e equipamentos de informática, desenvolvimento de sistemas web, shell scripts e servidor Linux.</TimelineDescription>
            <TimelineSkills>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Shell Script</li>
                <li>Linux</li>
                <li>Windows</li>
            </TimelineSkills>
        </Timeline>

        <Timeline>
            <TimelinePeriod>2018-2019</TimelinePeriod>
            <TimelineFunction>Suporte Técnico</TimelineFunction>
            <TimelineClass>Estágio</TimelineClass>
            <TimelineDescription>Manutenção de computadores e serviços de Help desk.</TimelineDescription>
            <TimelineSkills>
                <li>Linux</li>
                <li>Windows</li>
            </TimelineSkills>
        </Timeline>
    </div>
    )
}

export default ExperienceTimeline;