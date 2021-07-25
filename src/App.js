// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ****************************************
import logo from './logo.svg';
import './App.css';
import React from "react";

const GreetingsSubheading = () => {
    return(
        <p style={{
            fontSize: "1.5em",
            color: "wheat"
        }}>
            This is our first React App!
        </p>
    );
}

class Greetings extends React.Component{    //class 
    render() {
       return(
           <p style={{
               fontSize: "2em",
               color: "white"
           }}> Greetings! Welcome to our Site. </p>
       )
    }
}

function App() {    //main function

    const SubHeading = () => {    //subfunction
        return(
            <p style={{
                fontSize: "1em",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "#61dafb"
            }}>
                This is second subheading!
            </p>
        )
    }

    return(     //returning of main function
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#2b2626",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Greetings />
            <GreetingsSubheading />
            <SubHeading />
        </div>
    )
}


export default App;