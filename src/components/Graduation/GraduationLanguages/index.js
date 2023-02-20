import styled from 'styled-components';

const LanguagesMain = styled.div`

`

const LanguagesMainTitle = styled.h3`
    font-size: 0.875rem;
    line-height: 1.4;
    color: var(--quaternary-text-color);
    text-transform: uppercase;
    margin-bottom: 30px;
`

const LanguageName = styled.li`
    font-size: 1.125rem;
    line-height: 1.1;
    margin-bottom: 20px;
    color: var(--main-bg-color);
`

const LanguageLevel = styled.span`
    color: var(--quaternary-text-color);
`

function GraduationLanguages() {
    return (
        <LanguagesMain>
            <LanguagesMainTitle>Idiomas</LanguagesMainTitle>
            <ul>
                <LanguageName>Inglês <LanguageLevel>/ Avançado</LanguageLevel></LanguageName>
            </ul>
        </LanguagesMain>
    )
}

export default GraduationLanguages;