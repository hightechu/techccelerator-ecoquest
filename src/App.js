import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Import any components that you want to use, like the login form
import Login from './components/Login'; 
import Logo from './components/Logo';
import TestComponent from './components/TestComponent';
import Footer from './components/Footer';

// function must have the same name as the file, cAsE sEnSiTiVe
function App() {

  // navigate an authenticated user to the user homepage, rather than the regular homepage
  const navigate = useNavigate();
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is logged in
            navigate("/home");
          }
        });    
  }, [navigate])
  const shoot = () => {
    alert("Nice!");
    console.log("Main Button Was Clicked!");
  }
  // HTML rendered here
  // Inside the return statement, we MUST have <div> tags at the beginning and end. 
  // We can choose to write vanilla HTML as normal, or use some of our React components. Here, I used Login
  return (
    <div className="container-fluid">
        <h1>Hello World!</h1>
        <p>
          Welcome! This is my page, log in to explore.
        </p>

        <Login />
        <TestComponent />
        <Footer />
    </div>
  );
}







export default App;
