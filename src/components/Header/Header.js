import React,{useState} from 'react'
import styles from './Header.module.css'
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill} from "react-icons/bs";
import Webcam from "react-webcam";

const Header = () => {
    const [camera,setCamera] = useState(false)
    return (
      <>
        <div className={styles.header}>
          <button onClick={() => setCamera(!camera)} className={styles.button}>
            {camera === false ? (
              <BsFillCameraVideoOffFill fill="#fff" size={23} />
            ) : (
              <BsFillCameraVideoFill fill="#fff" size={23} />
            )}
          </button>
        </div>
        {camera ? (
          <Webcam
            className={styles.camera}
            audio={true}
            width={200}
            height={200}
            videoConstraints={{
              width: 300,
              height: 300,
              facingMode: "user",
            }}
          />
        ) : null}
      </>
    );
}

export default Header
