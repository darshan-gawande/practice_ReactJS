import { useState } from "react";
import { sculptureList } from "../utils/rawData";


const Body = () => {
    
   let [index, setIndex] = useState(0);

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length - 1;

    function handleNextBtn() {
        if(hasNext) {
        setIndex(index + 1);
    }
    }
   
    function handlePrevBtn() {
        if(hasPrev) {
        setIndex(index - 1);
    }
    }


     let sculpture = sculptureList[index];

    return (
        <div className="body">
            <button className="prev-btn" 
            onClick={handlePrevBtn}
            disabled={!hasPrev}>
                previous
            </button>

            <button className="next-btn"
            onClick={handleNextBtn}
            disabled= {!hasNext}>
                 next
            </button>

            {/* add button */}

            <div className="heading">
                <h1><i>{sculpture.name} </i> 
                     by {sculpture.artist} 
                </h1>
                <h3>({index} of {sculptureList.length})</h3>

                <img src={sculpture.url} alt="art" />
                <p>{sculpture.description}</p>
            </div>








        </div>
    )
}

export default Body;