import { useState, useCallback, useEffect, useRef} from 'react'

// import './App.css'

function App() {
  
  // to track length will use useState hook:
  const[length,setlength]=useState(5);

  // for number will use T/F option  with default value of false (off):
  const[numberCheck,setnumberCheck]=useState(false);

  // Similarly for character will do T/F as well but set the default value to false:
  const[charSelect,setcharSelect]=useState(false);

  // For updating password each time as we refresh , will set state:
  const[password,setpassword]=useState("");


   // UseRef Hook:use to take reference  of a variable that does not change during the life cycle of component :

   const passwordRef=useRef(null);
    

  // create passwordGenerator function:
  // useCallback has two params: function and dependies i.e taken in array form

  const passwordGenerator = useCallback(function(){
   let pass=" " 
   let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"   

   //write condiotions  based on checkboxes selected by user :
  //  if(numberCheck){
  //   str=str+"0123456789"
  //  }
  //  if(charSelect){
  //   str=str+" !@#$%^&*()_+?<>{}| "
  //  }

  if (numberCheck) str+= "0123456789" ;
  if (charSelect ) str+= `!@#$$%^^&**()_-+~`;
  

   

   // to generate passwrd:
   for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()* str.length+1)
    //console.log(char)
    pass=pass+str.charAt(char)

   }
   setpassword(pass)

  },[length,numberCheck, charSelect,setpassword]);



// copy  to clipboard functionality:
  const passwordCopyPaste=useCallback(()=>{
    passwordRef.current?.select();// it will highlight select portion , which is copied
    passwordRef.current?.setSelectionRange(0,50); // this will make the selection from first character to 6th character only
    window.navigator.clipboard.writeText(password)
    //alert("Password Copied")
  
  },[password])
  


  useEffect( function(){
    passwordGenerator();
  } ,[length, numberCheck, charSelect,passwordGenerator])

  // useEffect(() => {
  //   passwordGenerator()
  // }, [length, numberCheck, charSelect, passwordGenerator])


  

  return (
    <>
     
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">

      {/* // for empty text field: */}
      <input type="text" 
             value={password}
             className='outline-none w-full py-1 px-3'
             placeholder='password'
             readOnly
             ref={passwordRef}
      />


       <button
       onClick={passwordCopyPaste}
        className='outline-none bg-blue-700 px-3 py-0.5 shrink-0' > copy </button> 
       </div>

       <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
             type='range'
             min={5} 
             max={50}
             value={length}
             className='cursor-pointer' 
             // onChange to listen when pointer dragged:
             onChange={function(e){
              setlength(e.target.value);

             }}
          />
           <label>Length:{length}</label>      
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberCheck}
          id="numberInput"
          onClick={function(){
            setnumberCheck(prev=>!prev)
          }}
          
            
          
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={charSelect}
          id="characterInput"
          onClick={function(){
            setcharSelect(prev=>!prev)
          }}
          
            
          
      />
      <label htmlFor="characterInput">Character</label>
      </div>


</div>

    </div>
         




    </>
  )
      }
      
export default App
