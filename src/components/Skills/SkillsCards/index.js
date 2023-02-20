import styled from 'styled-components';

import SkillsHTML from '../../../img/skills-html.svg';
import SkillsCSS from '../../../img/skills-css.svg';
import SkillsJS from '../../../img/skills-js.svg';
import SkillsTS from '../../../img/skills-ts.svg';
import SkillsReact from '../../../img/skills-react.svg';
import SkillsNodeJS from '../../../img/skills-nodejs.svg';
import SkillsPHP from '../../../img/skills-php.svg';
import SkillsMySQL from '../../../img/skills-mysql.svg';

const SkillList = styled.ul`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    place-items: center;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        place-items: center;
    }

    @media (max-width: 880px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
        place-items: center;
        align-items: center;
    }
    
`

const SkillCard = styled.li`
    
    width: 120px;
    background: var(--quinary-bg-color);
    padding: 15px 70px;
    border-radius: 4px;
    justify-content: center;
    border: 1px solid var(--secondary-text-color);
    transition: transform 330ms ease-in-out;

    &:hover {
     background: var(--secondary-text-color);
     border: 1px solid var(--secondary-bg-color);
     cursor: pointer;
     transform: translateY(-20px);
     transition: 0.3s;
     box-shadow: inset 0px 0px 29px 6px rgba(230,230,230,0.1);
    }

    @media (max-width: 600px) {
        width: 80px;
        padding: 0px 40px;
    }
`

const SkillIcon = styled.div`
    display: grid;
    height: 100px;
    padding: 10px 10px;
    align-items: center;
    margin-top: 20px;
`

const SkillTitle = styled.h3`
    padding: 30px 0px;
    text-align: center;
    font-size: 1.125rem;
    color: #FFFFFF;

    @media (max-width:600px) {
        font-size: .875rem;
    }
`

function SkillsCards()
{
    return (
        <SkillList>
            <SkillCard>
                <SkillIcon>
                    <img src={SkillsHTML} alt="HTML"></img>
                </SkillIcon>
                <SkillTitle>
                    HTML
                </SkillTitle>
            </SkillCard>

            <SkillCard>
                <SkillIcon>
                    <img src={SkillsCSS} alt="CSS"></img>
                </SkillIcon>
                <SkillTitle>
                    CSS
                </SkillTitle>
            </SkillCard>

            <SkillCard>
                <SkillIcon>
                    <img src={SkillsJS} alt="JavaScript"></img>
                </SkillIcon>
                <SkillTitle>
                    JavaScript
                </SkillTitle>
            </SkillCard>

            <SkillCard>
                <SkillIcon>
                    <img src={SkillsTS} alt="JavaScript"></img>
                </SkillIcon>
                <SkillTitle>
                    TypeScript
                </SkillTitle>
            </SkillCard>

            <SkillCard>
                <SkillIcon>
                    <img src={SkillsReact} alt=""></img>
                </SkillIcon>
                <SkillTitle>
                    ReactJS
                </SkillTitle>
            </SkillCard>

            <SkillCard>
                <SkillIcon>
                    <img src={SkillsNodeJS} alt=""></img>
                </SkillIcon>
                <SkillTitle>
                    NodeJS
                </SkillTitle>
            </SkillCard>

            <SkillCard>
            <SkillIcon>
                    <img src={SkillsPHP} alt=""></img>
                </SkillIcon>
                <SkillTitle>
                    PHP
                </SkillTitle>
            </SkillCard>

            <SkillCard>
            <SkillIcon>
                    <img src={SkillsMySQL} alt="MySQL"></img>
                </SkillIcon>
                <SkillTitle>
                    MySQL
                </SkillTitle>
            </SkillCard>
        </SkillList>
    )
}

export default SkillsCards;