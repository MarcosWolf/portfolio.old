import styled from 'styled-components';

const Subtitle = styled.h2`
    font-size: 8rem;
    line-height: 1;
    color: var(--main-subtitle-color);
    text-transform: uppercase;
    word-break: break-all;
    max-width: 5ch;

    @media (max-width: 1000px) {
        color: var(--primary-text-color);
        max-width: initial !important;
        font-size: 3rem;
        text-transform: capitalize;
    }
`;

function ExperienceSubtitle() {
    return (
        <Subtitle>Experiência</Subtitle>
    )
}

export default ExperienceSubtitle;