import styled from 'styled-components';

const Text = styled.p`
    font-size: 1.5rem;
    line-height: 1.33;
    margin-bottom: 60px;
    max-width: 40ch;
    color: var(--primary-text-color);

    @media (max-width: 800px) {
        font-size: 1.25rem;
    }
`;

function ExperienceText() {
    return (
        <div>
            <Text>Desenvolvo pequenos projetos Web utilizando <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>ReactJS</strong>, além de <strong>PHP</strong> e banco de dados <strong>MySQL</strong>; Atualmente estou estudando ASP.NET e NodeJS.</Text>
            <Text>Possuo experiência em ferramentas de design como <strong>Photoshop</strong>, <strong>Illustrator</strong> e <strong>Figma</strong>.</Text>
        </div>
    )
}

export default ExperienceText;