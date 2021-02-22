// import React from "react";
// import "./styles.css";
// import makeCarousel from "react-reveal/makeCarousel";
// // we'll need the Slide component for sliding animations
// // but you can use any other effect
// import Slide from "react-reveal/Slide";
// // we'll use styled components for this tutorial
// // but you can use any other styling options ( like plain old css )
// import styled, { css } from "styled-components";
// const width = "100%",
//   height = "150px";
// const Container = styled.div`
//   border: 1px solid red;
//   position: relative;
//   overflow: hidden;
//   width: ${width};
// `;
// const Children = styled.div`
//   width: ${width};
//   position: relative;
//   height: ${height};
// `;
// const Arrow = styled.div`
//   text-shadow: 1px 1px 1px #fff;
//   z-index: 100;
//   line-height: ${height};
//   text-align: center;
//   position: absolute;
//   top: 0;
//   width: 10%;
//   font-size: 3em;
//   cursor: pointer;
//   user-select: none;
//   ${(props) =>
//     props.right
//       ? css`
//           left: 90%;
//         `
//       : css`
//           left: 0%;
//         `}
// `;
// const Dot = styled.span`
//   font-size: 1.5em;
//   cursor: pointer;
//   text-shadow: 1px 1px 1px #fff;
//   user-select: none;
// `;
// const Dots = styled.span`
//   text-align: center;
//   width: ${width};
//   z-index: 100;
// `;
// const CarouselUI = ({ position, handleClick, children, total }) => {
//   return (
//     <Container>
//       <Children>
//         {children}
//         <Arrow onClick={handleClick} data-position={position - 1}>
//           {"<"}
//         </Arrow>
//         <Arrow right onClick={handleClick} data-position={position + 1}>
//           {">"}
//         </Arrow>
//       </Children>

//       <Dots>
//         {Array(...Array(total)).map((val, index) => (
//           <Dot key={index} onClick={handleClick} data-position={index}>
//             {index === position ? "● " : "○ "}
//           </Dot>
//         ))}
//       </Dots>
//     </Container>
//   );
// };
// const Carousel = makeCarousel(CarouselUI);

// export default function Cagain() {
//   return (
//     <div className="App">
//       <Carousel
//         swipe={true}
//         maxTurns={0}
//         defaultWait={1000} /*wait for 1000 milliseconds*/
//       >
//         <Slide right>
//           <div>
//             <h1>Slide 1</h1>
//             <p>Slide Description</p>
//           </div>
//         </Slide>
//         <Slide right>
//           <div>
//             <h1>Slide 2</h1>
//             <p>Slide Description</p>
//           </div>
//         </Slide>
//       </Carousel>
//     </div>
//   );
// }

import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

class Cagain extends Component {
  state = {
    items: [
      { id: 1, title: "item #1" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel>
    );
  }
}

export default Cagain;
