import React from "react";
import styles from './ColorPicker.module.css';


const ColorPicker = (props) => {

    console.log(props)
    
    return (    
        <div className={styles.div}>
        {props.colors.map((color,idx) => 
            <button 
            key={color}
            className={styles.button} 
            style={{
                backgroundColor: idx === props.selColorIdx ? 'white' : color,
                borderColor: color
            }}
            onClick={()=>props.handleColorSelection(idx)}
            />
            )}
    </div>
)
}


export default ColorPicker;