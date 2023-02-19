import IntroCodeblocks from './IntroCodeblocks';
import IntroDescription from './IntroDescription';
import IntroPhoto from './IntroPhoto';

import styled from 'styled-components';

const IntroContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    display: grid;
    grid-template-columns: 0.2fr 2fr 1fr;
    gap: 100px;
    align-items: center;

    & h1 {
        font-size: 4.5rem;
        line-height: 1.125;
        margin-bottom: 30px;
        color: var(--primary-text-color);
    }

    & p {
        font-size: 1.5rem;
        color: var(--secondary-text-color);
    }

    @media (max-width:1000px) {
        display: flex;
        font-size: 2rem;

        & img {
            display: none;
        }
    }

    @media (max-width:550px) {
        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
        }
    }
`;

function Intro() {
    return (
        <IntroContainer>
            <IntroCodeblocks />
            <IntroDescription />
            <IntroPhoto />
        </IntroContainer>
    )
}

export default Intro;