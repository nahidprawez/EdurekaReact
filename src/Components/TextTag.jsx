import React, {useState} from 'react';
import { Input, Button } from 'antd';

function TextTag() {
  const [textValue, showTextValue] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);

  const handleTextChange = (e) => {
      showTextValue(e.target.value);
  }

  const handleSubmit = () => {
     setShowSubmit(true)
  }

  return (
    <>
    <div style={{width : "50%"}}>
       <h2>Text Tag</h2>
        <Input.TextArea value={textValue} onChange= {handleTextChange} placeholder="Enter Your Text Here">
        </Input.TextArea>
            <Button onClick={handleSubmit} style={{margin : "10px 0px"}}>
                Submit
            </Button>
        {showSubmit && <div>
            Your Input Value is : {textValue}
        </div>}
    </div>
    </>

  )
}

export default TextTag