import React from "react";
import {motion} from 'framer-motion';

 function App(){
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }
  return(

    
      <motion.ul  variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>


   
    )
}

export default App;