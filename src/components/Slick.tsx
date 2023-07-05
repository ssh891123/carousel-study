import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <h3 style={{
                    height: 500,
                    background: "#5f9ea0",
                    fontSize: 150,
                }}>1</h3>
            </div>
            <div>
                <h3 style={{
                    height: 500,
                    background: "#5f9ea0",
                    fontSize: 150,
                }}>2</h3>
            </div>
            <div>
                <h3 style={{
                    height: 500,
                    background: "#5f9ea0",
                    fontSize: 150,
                }}>3</h3>
            </div>
            <div>
                <h3 style={{
                    height: 500,
                    background: "#5f9ea0",
                    fontSize: 150,
                }}>4</h3>
            </div>
            <div>
                <h3 style={{
                    height: 500,
                    background: "#5f9ea0",
                    fontSize: 150,
                }}>5</h3>
            </div>
            <div>
                <h3 style={{
                    height: 500,
                    background: "#5f9ea0",
                    fontSize: 150,
                }}>6</h3>
            </div>
      </Slider>
    )
}

export default Slick;