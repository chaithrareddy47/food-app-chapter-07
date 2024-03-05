function greet(){
  console.log("Good morning");
}
console.log(greet()); //we know that it prints the greeting meaasge in conse this is predictable output an dits apure function


//Exploring the world
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const dummyData = [
	{ id: 1, name: 'John', greeting: 'Hello' },
	{ id: 2, name: 'Alice', greeting: 'Hi' },
	{ id: 3, name: 'Bob', greeting: 'Greetings' },
	{ id: 4, name: 'Eve', greeting: 'Hey' },
	// Add more entries as needed
];


const Btn = () =>{
  const [user, setUser] = useState('Login')
  

   useEffect(()=>{
    fetchData()
   }, [])

   async function fetchData(){
    console.log(dummyData);
   }

   

  return (
		<div>
    <h1>{console.log('renderded again')}</h1>

			<button

				onClick={() => {
					// user === 'Login' ? setUser('Logout') : setUser('Login')
					setUser(user === 'Login' ? 'Logout' : 'Login');
          console.log('rerender')
				}}>
				{user}
				{user === 'Login' && (
					<span style={{ color: 'green', fontSize:'20px', fontWeight:'bold' }}> &middot;</span>
				)}
			</button>

      <input 
        type='text'
        placeholder='search'
        
      />
		</div>
	);
}

const App = () =>{
  return(
    <div>
     <Btn/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)




