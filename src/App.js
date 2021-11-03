import hi from "./imageInSrc.jpg";
import by from "./Public/imageInPublic.jpg"
import key from "./Cat.mp4"

import './App.css';
import './Styles.css'

function App() {
  return (
    <div className="dali">
    <div className="dogs" style={{border: 'solid 5px red', maxWidth: '1000PX'}}>
      <h1 className="title red">CATS</h1>
      <br />
      <img src={by} alt="cat"/>
      <br />
      <img src={hi} alt="dog"/>
    </div>
    <video  width={1000} height={500} controls>
          <source src={key} type="video/mp4" />
        </video>
        
        </div>
    
  
  );
}

export default App;
