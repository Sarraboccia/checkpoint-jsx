import "./App.css";
import Image from "./Image.jpeg";
import "./styles.css";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">SARA</h1>

      <img src={Image} className= "Photo" alt="" width="320" height="240"/>
      <br />
      <img src="MyImage.jpeg" className="Photo" alt="" width="320" height="240"/>
      <br />
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
