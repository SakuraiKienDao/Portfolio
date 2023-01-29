import { React} from "react";
import classes from "./Styles/MainText.module.css";
import Typewriter from "typewriter-effect";

const MainText = () => {
  const typingString =[' Website', ' Moble App', 'things']
  return (
    <>
      <div className={classes.wrap}>
        <h1>
          <span className="font">Hi</span>, my name is <span className="name-font">Kien Dao</span>
        </h1>
        <p>
          <span className="font">Design</span>&nbsp;and develop&nbsp; 
          <Typewriter className={classes.type}
            options={{
              strings: typingString,
              autoStart: true,
              delay: 100,
              loop: true,
              wrapperClassName: 'type-effect',
            }}
          />
          
        </p>
      </div>
    </>
  );
};

export default MainText;
