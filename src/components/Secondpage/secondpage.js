 
 import './secondpage.css';
 import ThirdPage from './thirdpage';


function SecondPage() {
  return (
    <>
    <div className="second-page">
        <div className="left-section">
            <img src="lady-2.png" alt="lady-2"/>

        </div>
        <div className="right-section">
            <h1 className="fw-bold">Tap into the $2.7 trillion Grocery<br/>Industry with a Custom App</h1>
            <p className="pt-3">One foot in front of the other, One more step, and then one more. Jack's only thoughts were to keep moving no matter how much his body screamed to stop and rest. He's lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more.Trees. It was something about the trees. The way they swayed with the wind in unison. The way they shaded the area around them. The sounds of their leaves in the wind and the creaks from the branches as they sway, The trees were making a statement that I just couldn't understand</p>

        </div>
    </div>
    <ThirdPage/>
    </>
  );
}

export default SecondPage;
