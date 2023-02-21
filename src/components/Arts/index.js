import styled from 'styled-components';
import { useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';

import image1 from '../../img/art1.jpg';
import image2 from '../../img/art2.jpg';
import image3 from '../../img/art3.jpg';
import image4 from '../../img/art4.jpg';
import image5 from '../../img/art5.jpg';
import image6 from '../../img/art6.jpg';
import image7 from '../../img/art7.jpg';
import image8 from '../../img/art8.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const ArtsContainer = styled.div`
    width: 100%;
    background: var(--secondary-bg-color);
    position: relative;
`

const ArtsMain = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px;
`

const ArtsGallery = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
    padding: 120px 20px;
    gap: 150px 60px;

`

const GalleryInner = styled(motion.div)`
    display: flex;
`

const GalleryItem = styled(motion.div)`
    width: 300px;
    min-height: 200px;
    min-width: 400px;
    padding: 14px;

    & img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        pointer-events: none;
    }
`

const Carousel = styled(motion.div)`
    cursor: grab;
    overflow: hidden;
`

const ArtsTitle = styled.h2`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: var(--primary-text-color);
    text-transform: uppercase;
`

const ArtsDivider = styled.div`
    .custom-shape-divider-bottom-1676999557 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1676999557 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 82px;
    }

    .custom-shape-divider-bottom-1676999557 .shape-fill {
        fill: #210031;
    }
`

function Arts() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <ArtsContainer>
            <ArtsMain>
                <ArtsTitle>Minhas últimas artes</ArtsTitle>
                <ArtsGallery>
                    <Carousel ref={carousel} whileTap={{cursor: "grabbing"}}>
                        <GalleryInner drag={"x"}
                        dragConstraints={{ right: 0, left: -width}}
                        >
                            {images.map(image => (
                                <GalleryItem Item key={image}>
                                    <img src={image} alt="Galeria"/>
                                </GalleryItem>
                            ))}
                        </GalleryInner>
                    </Carousel>
                </ArtsGallery>
            </ArtsMain>
            <ArtsDivider>
                <div class="custom-shape-divider-bottom-1676999557">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </ArtsDivider>
        </ArtsContainer>
    )
}

export default Arts;