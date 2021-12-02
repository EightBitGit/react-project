import img1 from "./images2/doggy2.jpeg";

function HomePage() {
  //
  return (
    <div>
      <h1>Home</h1>
      <h2>Hi, I'm Chad Prior.</h2>
      <body>
        <div>
          {" "}
          <img src={img1} alt="dog" width="400" height="500" />
        </div>
      </body>
      <h4>This is my puppy, Taro.</h4>
    </div>
  );
}

export default HomePage;
