"use client"
import { useState } from "react";

const Contact = () => {
    const [isCircle, setIsCircle] = useState(false);

    const handleButtonClick = () => {
      setIsCircle(true);
    };
    
    return (
        <div className="w-full h-screen flex-all2 dark-blue-bg">
            <h2>How to Contact Me?</h2>
            
        </div>
    )
}

export default Contact