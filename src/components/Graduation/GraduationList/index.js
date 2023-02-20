import styled from 'styled-components';

const GraduationMain = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 60px;
`

const GraduationItem = styled.li`
    flex: 1;
    background: var(--quinary-bg-color);
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    transition: transform 330ms ease-in-out;
`

const GraduationClass = styled.span`
    font-size: .875rem;
    text-transform: uppercase;
    color: var(--quaternary-text-color);
    margin-bottom: 10px;
`

const GraduationName = styled.h3`
    flex: 1;
    font-size: 1.125rem;
    line-height: 1.4;
    margin-bottom: 40px;
    color: var( --secondary-bg-color);
`    

const GraduationSchool = styled.span`
    font-size: .875rem;
    text-transform: uppercase;
    color: var(--quaternary-text-color);
`

function GraduationList() {
    return (
        <GraduationMain>
            <GraduationItem>
                <GraduationClass>Técnico</GraduationClass>
                <GraduationName>Informática para Internet</GraduationName>
                <GraduationSchool>Centro Paula Souza</GraduationSchool>
            </GraduationItem>

            <GraduationItem>
                <GraduationClass>Ensino Superior</GraduationClass>
                <GraduationName>Ciências Biológicas</GraduationName>
                <GraduationSchool>Unimes</GraduationSchool>
            </GraduationItem>

            <GraduationItem>
                <GraduationClass>Ensino Superior</GraduationClass>
                <GraduationName>Engenharia de Computação</GraduationName>
                <GraduationSchool>UNIVESP</GraduationSchool>
            </GraduationItem>
        </GraduationMain>
    )
}

export default GraduationList;