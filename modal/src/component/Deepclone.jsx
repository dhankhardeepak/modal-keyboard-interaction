import React, { useState } from 'react'

const Deepclone = () => {
  const [input, setInput] = useState('');
  const [original, setOriginal] = useState(null);
  const [cloned, setCloned] = useState(null);
  
  const deepClonefn = (obj) => {
    if(obj == null || typeof obj !== Object){
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        clone[key] = deepClonefn(obj[key])
    }

    return clone;
  }  

  const handledeepClone = () => {
    try {
       const copiedJson = JSON.parse(input);
       setOriginal(copiedJson);

       const clonedCopy = deepClonefn(copiedJson);
       setCloned(clonedCopy);
    } catch (error) {
        console.log(error)
    }
  }  

  return (
    <div>
        <div style={{textAlign:"center"}}>
            <h2>Pasted code</h2>
            <textarea 
                placeholder='Paste the JSON here'
                cols="100"
                rows="10"
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            >
            </textarea>
            <br />
            <br />
            <button style={{display:"block", margin:"0 auto"}} onClick={handledeepClone}>Deep Clone</button>
        </div>

        <div style={{textAlign:"center"}}>
            <h2>Original Copy code</h2>
            {original && 
                <div>
                    <pre style={{border:"1px solid #000"}}>
                        {JSON.stringify(original, null, 2)}
                    </pre>
                </div>
            }
        </div>

        <div style={{textAlign:"center"}}>
            <h2>Deep Clone code</h2>
            {cloned && 
                <pre>
                    {JSON.stringify(cloned, null, 2)}
                </pre>
            }
        </div>

    </div>
  )
}

export default Deepclone