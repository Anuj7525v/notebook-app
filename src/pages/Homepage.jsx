import React,{useState,useEffect} from 'react';
import styles from './Homepage.module.css';
import noteImage from '../img/image-removebg-preview 1.png';
import { FaLock } from "react-icons/fa";
import AddNotes from "../components/Addbutton/Addbutton.jsx";




function NotePage() {

  


    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.leftHeader}>
                    <h2 className={styles.lefth2}>Pocket Notes</h2>
                </div>
                <div className={styles.leftmiddle}></div>
                <div className={styles.leftFooter}>
                    <div className={styles.inputbox}>
                        <button className={styles.leftbtn} >+</button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.img}>
                    <img src={noteImage} alt="NoteImage" />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.righth1}>
                        Pocket Notes
                    </h1>
                    <p className={styles.para}>Send and receive messages without keeping your phone online. <br />
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
                <div className={styles.bottom}>
               
                <p> <FaLock /> end-to-end encrypted </p>

                </div>

            </div>
            <div className={styles.groupbox}>
                  <AddNotes/>
            </div>
        </div>

    )
}
export default NotePage;


