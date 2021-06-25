// import React, { createRef, useEffect } from "react";
// const canvasRef = createRef();
// function getImage(index) {
//   return (
//     // "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/" +
//     // index.toString().padStart(4, 0) +
//     // ".jpg"
//     process.env.PUBLIC_URL + "/img/img" + index.toString() + ".png"
//   );
// }
// const updateImage = (imgObj, index, ctx) => {
//   if (index === 0 || index === null) {
//     index = 1;
//   }
//   imgObj.src = getImage(index);
//   console.log(imgObj);
//   ctx.drawImage(imgObj, 0, 0);
// };
// const getAllImg = async () => {
//   var x = 0;
//   while (x != 7) {
//     x++;
//     const imgObj = new Image();

//     imgObj.src = await getImage(x);
//   }
// };
// function Profile() {
//   getAllImg();
//   const updateCanvas = async () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const frameCount = 7;
//     var imageObj1 = document.getElementById("source");

//     canvas.width = imageObj1.width;
//     canvas.height = imageObj1.height;

//     const html = document.documentElement;
//     const scrollTop = html.scrollTop;
//     const maxScrollTop = html.scrollHeight - window.innerHeight;
//     const scrollFraction = scrollTop / maxScrollTop;
//     console.log(scrollTop, scrollFraction);
//     const frameIndex = Math.min(
//       frameCount - 1,
//       Math.floor(scrollFraction * frameCount)
//     );

//     await updateImage(imageObj1, frameIndex + 1, ctx);

//     console.log(frameIndex);
//   };

//   useEffect(() => {
//     document.onscroll = async () => {
//       await requestAnimationFrame(() => {
//         updateCanvas();
//       });

//       return () => {
//         //window.removeEventListener(onscroll);
//         // cancelAnimationFrame();
//       };
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} style={{}}>
//       <img id="source" src="./../assets/img/0001.png"></img>
//     </canvas>
//   );
// }

// export default Profile;
import React, { Component, createRef } from "react";
import { Container, Row } from "react-bootstrap";
const checkImage = (path) =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => resolve(path);
  });

class Profile extends Component {
  constructor() {
    super();
    this.canvasRef = createRef;
  }
  getImage(index) {
    const imgUrl =
      // "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/" +
      // index.toString().padStart(4, 0) +
      // ".jpg";
      process.env.PUBLIC_URL +
      "/img/img" +
      index.toString().padStart(5, 0) +
      ".jpeg";
    const imgObj = new Image();
    const myPromise = checkImage(imgUrl);
    myPromise
      .then((response) => {
        imgObj.src = imgUrl;
        console.log("resolved");
      })
      .catch((error) => console.error(error));
    return imgObj;
  }

  updateImage = (imgObj, index, ctx) => {
    if (index === 0 || index === null) {
      index = 1;
    }
    imgObj = this.getImage(index);
    imgObj.onload = () => {
      ctx.drawImage(imgObj, 0, 0);
    };
  };
  showImage() {
    const canvas = this.refs.canvas;
    var imgO = new Image();
    imgO = this.getImage(1);
    imgO.onload = () => {
      const ctx = canvas.getContext("2d");
      canvas.width = imgO.width;
      canvas.height = imgO.height;
      console.log(imgO.width, imgO.height);
      ctx.drawImage(imgO, 0, 0);
    };
  }
  updateCanvas() {
    const canvas = this.refs.canvas;
    const frameCount = 3690;
    var imageObj1 = new Image();
    imageObj1 = this.getImage(1);
    const ctx = canvas.getContext("2d");

    const html = document.documentElement;
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    );

    this.updateImage(imageObj1, frameIndex + 1, ctx);

    console.log(frameIndex);
  }

  getAllImg = async () => {
    var x = 0;
    while (x != 3690) {
      x++;
      const imgObj = new Image();

      imgObj = this.getImage(x);
      await imgObj.onload;
    }
  };
  componentDidMount() {
    // this.getAllImg();
    this.showImage();
    document.onscroll = () => {
      requestAnimationFrame(() => {
        this.updateCanvas();
      });
    };
  }
  componentDidUpdate() {
    document.scrollTop = 0;
  }
  componentWillUnmount() {
    document.scrollTop = 0;
  }
  render() {
    return (
      <Container fluid style={{ marginTop: "80px" }}>
        <Row>
          <canvas ref="canvas" width="1158" height="770"></canvas>
        </Row>
      </Container>
    );
  }
}
export default Profile;
