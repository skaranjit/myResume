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

const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("./../assets/img/", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map((module) => module[1].default);

const checkImage = (path) =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => resolve(path);
  });

class Profile extends Component {
  constructor() {
    super();
    this.canvasRef = createRef();
    this.canvas = document.createElement("canvas", {
      refs: this.canvasRef.current,
    });
    this.ctx = this.canvas.getContext("2d");
  }
  getImage(index) {
    // const imgUrl =
    //   // "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/" +
    //   // index.toString().padStart(4, 0) +
    //   // ".jpg";
    //   // process.env.PUBLIC_URL +
    //   { img } + index.toString().padStart(5, 0) + ".jpeg";
    // const imgObj = new Image();

    const imgObj = images.map((image) => image);
    const imgO = new Image();
    const myPromise = checkImage(imgObj[index]);
    myPromise
      .then((response) => {
        imgO.src = imgObj[index];
        console.log("resolved");
      })
      .catch((error) => console.error(error));
    console.log(imgObj);
    return imgO;
  }

  updateImage = (index) => {
    if (index === 0 || index === null) {
      index = 1;
    }
    const imgObj = this.getImage(index);
    imgObj.onload = () => this.drawImage(imgObj);
  };
  showImage(canvas) {
    var imgO = new Image();
    imgO = this.getImage(1);

    imgO.onload = () => this.drawImage(imgO);
  }
  showNone() {
    const canvas = this.canvasRef.current;
    canvas.width = 0;
    canvas.height = 0;
  }
  drawImage(img) {
    // Use the intrinsic size of image in CSS pixels for the canvas element

    // Will draw the image as 300x227, ignoring the custom size of 60x45
    // given in the constructor

    this.ctx.drawImage(img, 0, 0);

    // To use the custom size we'll have to specify the scale parameters
    // using the element's width and height properties - lets draw one
    // on top in the corner:
  }
  updateCanvas(canvas) {
    const frameCount = 179;

    const html = document.documentElement;
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;

    this.frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    );

    this.updateImage(this.frameIndex + 1);
    console.log(this.frameIndex);
  }

  getAllImg = async () => {
    var x = 0;
    while (x !== 179) {
      x++;
      var imgObj = new Image();

      imgObj = await this.getImage(x);
    }
  };
  componentDidMount() {
    this.canvas.width = "1158";
    this.canvas.height = "770";
    document
      .getElementById("canvas-wrapper")
      .insertAdjacentElement("afterbegin", this.canvas);
    console.log(this.canvas);

    this.showImage(this.canvas);
    document.onscroll = () => {
      requestAnimationFrame(() => {
        this.updateCanvas(this.canvas);
      });
    };
  }

  componentWillUnmount() {}
  render() {
    return <div id="canvas-wrapper"></div>;
  }
}

export default Profile;
