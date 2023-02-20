import styled from 'styled-components';
import GraduationList from '../Graduation/GraduationList';
import GraduationCourses from '../Graduation/GraduationCourses';
import GraduationLanguages from '../Graduation/GraduationLanguages';

const GraduationContainer = styled.div`
    width: 100%;
    background: var(--quaternary-bg-color);
`

const GraduationMain = styled.div`
    max-width: 1200px;
    padding: 120px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;
`
const GraduationSubtitle = styled.h1`
    font-size: 8rem;
    line-height: 1;
    color: var(--main-subtitle-color);
    text-transform: uppercase;
    word-break: break-all;
    max-width: 5ch;

    @media (max-width: 800px) {
        color: var(--primary-text-color);
        max-width: initial !important;
        font-size: 3rem;
        text-transform: capitalize;
    }
`

const GraduationDescription = styled.p`
    font-size: 1.5rem;
    line-height: 1.33;
    max-width: 40ch;
    margin-bottom: 60px;
    color: var(--tertiary-text-color);
`

function Graduation() {
    return (
        <GraduationContainer>
            <GraduationMain>
                <GraduationSubtitle>Formação</GraduationSubtitle>
                <div>                    
                    <GraduationDescription>Atualmente estou me formando em <strong>Engenharia de Computação</strong>. Estou sempre atento para novas tendências de mercado e cursos intensivos para desenvolver minha carreira.</GraduationDescription>
                    <GraduationList />
                    <GraduationCourses />
                    <GraduationLanguages />
                </div>

            </GraduationMain>
        </GraduationContainer>
        
    )
}

export default Graduation;