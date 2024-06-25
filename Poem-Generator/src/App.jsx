import { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import './App.css'


function App() {
  const[prompt,setPromt]=useState("")
  const [response, setResponse]=useState(" ");
  const[error,setError]= useState(" ")
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showresult,setShowresult]=useState(false);
  const [loading, setLoading] = useState(false);



  const fetchPoem= async()=>{

  try {
    const genAI = new GoogleGenerativeAI("AIzaSyBjbMZBjHMNw5sJeCIsWfVnZWR1yMqlHvk")
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
   // const prompt = "write me a 10 word poem in the tone of milk and honey by rupi kaur.";
    const result= await model.generateContent(prompt);
    const textPoem=result.response.text ;
    setResponse(textPoem);
    setShowresult(true);
    setError("");
  }

  catch (error) {
    if (error.response && error.response.status === 429) {
      setError("API rate limit exceeded. Please try again later.");
    } else {
      setError("Error generating poem. Please try again.");
    }
    setShowresult(false); // Hide result card on error
  } 
  finally {
    setLoading(false); // Always set loading state to false after fetch completes
  }
}



 const handleSubmit =(e) => {
  e.preventDefault();
  fetchPoem();
 }




  useEffect(() => {
    fetchPoem(); // Fetch a poem on initial render

    const poemIntervalId = setInterval(fetchPoem, 120000); // Fetch a new poem every 120 seconds
    const clockIntervalId = setInterval(() => setCurrentTime(new Date()), 1000); // Update clock every second

    return () => {
      clearInterval(poemIntervalId); // Cleanup poem interval on component unmount
     
    };
  }, [prompt]);



  return (

    <div className="container">
    {/* Form for user to input prompt */}
    <form  onSubmit={handleSubmit} className="prompt-form">
      <input
        type="text"
        value={prompt}
        onChange={(e)=>(setPromt(e.target.value))}
        placeholder="Enter your prompt..."
        className="prompt-input"
        disabled={loading}
      />
      <button type="submit" className="prompt-submit" disabled={loading} >Generate Poem</button>
    </form>

    {/* Display poem card */}
{showresult && (
    <div className="card">
      {error ? <p className="error-message">{error}</p> : <p className="poem-text">{response}</p>}
    </div>
     )} 

    {/* Display current time */}
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      {currentTime.toLocaleTimeString()}
    </div>
  </div>
   
   
  )
    }

export default App
