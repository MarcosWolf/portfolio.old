import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    background: var(--secondary-bg-color);
`

const FooterMain = styled.div`
    max-width: 1200px;
    padding: 120px 20px 60px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`

const FooterDescription = styled.p`
    font-size: 1.5rem;
    line-height: 1.33;
    color: var(--quaternary-text-color);
`

const FooterContact = styled.ul`
    & li {
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 1.1;
        color: var(--primary-text-color);
    }

    @media (max-width: 800px) {
        & li {
            font-size: 1.5rem;
        }
    }
`

const FooterCopy = styled.p`
    grid-column: 1 / -1;
    font-size: 1.125rem;
    color: var(--quaternary-text-color);
`

function Footer() {
    return (
        <FooterContainer>
            <FooterMain>
                <FooterDescription>Estou disponível para participar de novos projetos no momento. Sinta-se a vontade para entrar em contato.</FooterDescription>
                <FooterContact>
                    <li>contato@marcoswolf.com.br</li>
                    <li>+55 13 98131-4531</li>    
                </FooterContact>
                <FooterCopy>Marcos Vinícios. Alguns direitos reservados.</FooterCopy>
            </FooterMain>
        </FooterContainer>
    )
}

export default Footer;