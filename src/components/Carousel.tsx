import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";

const CarouselContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: #eee;
    display: flex;
    overflow: hidden; //밖으로 나가면 안보이게
    position: relative;
`
const CarouselItem = styled.div<{
    offset: number;
    transitionTime: number;
}>`
    width: 500px;
    height: 500px;
    min-width: 500px;
    transition: transform ${({transitionTime})=>transitionTime}ms ease-in;
    transform: translateX( ${({offset}) => (-offset * 100)}%);

`

const CarouselButton = styled.div<{
    position: 'left' | 'right';
}>`
    z-index:999;
    cursor:pointer;
    width: 50px;
    height: 50px;
    background-color: #555;
    color: white;
    position: absolute;
    font-size: 24px;
    top: calc(50% - 25px);
    ${({position}) => position === 'left' && "left:0"};
    ${({position}) => position === 'right' && "right:0"};
    display: flex;
    align-items: center;
    justify-content: center;
`

interface CarouselProps {
    children: ReactNode | ReactNode[]
    loop?: boolean;
    autoLoop?: boolean;
    autoTime?: number;
    transitionTime?: number;
}

const Carousel = (
    {children: propChildren, loop, 
        autoLoop, autoTime = 2000, transitionTime=500}: CarouselProps) => {
    const children = Array.isArray(propChildren) ? propChildren : [propChildren];

    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if(autoLoop) {
            const intv = setInterval(()=> 
                setIdx(prev => 
                    prev < children.length-1 ? prev + 1 : 0),
                autoTime);
    
            return () => clearInterval(intv);
        }
    }, [autoLoop, autoTime, children.length]);
    
    return <CarouselContainer>
        <CarouselButton 
            onClick ={() => {
                if(idx > 0)
                    setIdx(prev => prev - 1)
                else if(loop) {
                    setIdx(children.length-1);
                }
            }}
            position="left">{"<"}</CarouselButton>
        {
            children.map((child, index) =><CarouselItem transitionTime={transitionTime} offset={idx} key={index}>
                {child}
            </CarouselItem>)
        }
        <CarouselButton 
            onClick ={() => {
                if(idx < children.length -1)
                    setIdx(prev => prev + 1)
                else if(loop) {
                    setIdx(0);
                }
            }}
            position="right">{">"}</CarouselButton>
    </CarouselContainer>
}

export default Carousel;