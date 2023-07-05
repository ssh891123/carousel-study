import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Responsive = () => {
    return (
        <Carousel infiniteLoop>
            <div style={{
                height: 500,
                background: "#3ebb45"
            }}>
                hello1
            </div>
            <div style={{
                height: 500,
                background: "#79ccd2"
            }}>
                hello2
            </div>
            <div style={{
                height: 500,
                background: "#6462cb"
            }}>
                hello3
            </div>
        </Carousel>
    )
}

export default Responsive;