import React from "react";
import styles from './Addbutton.module.css';

function AddNotes() {
    const colors = [
        "#B38BFA",
        "#FF79F2",
        " #43E6FC",
        " #F19576",
        " #0047FF",
        " #6691FF",


    ];


    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h4>Create New group</h4>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}><h4>Group Name</h4></label>
                    <input type="text" placeholder="Enter group name" />
                </div>
                <div className={styles.colors}>
                    <label className={styles.label}><h4>Choose colour</h4></label>
                    <div className={styles.colorbox}>
                        {colors.map((color,value) => (
                            <div className={styles.color} style={{ backgroundColor: color }}>{color[value]}</div>
                        ))}
                    </div>


                </div>
                <div className={styles.createbtnbox}>
                    <button className={styles.createbtn}> Create</button>
                </div>

            </div>
        </div>
    );

}

export default AddNotes;

