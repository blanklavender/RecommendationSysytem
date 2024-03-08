import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import plateBig from '../image/plate2.png';
import plate from '../image/plate3.png';
import bg from '../image/bg.jpg';
import TitleBlock from './TitleBlock';

const UserProfile = () => {
  const [location, setLocation] = useState('');
  const [cuisine, setCuisine] = useState('');
  const navigate = useNavigate();

  const handleProfileCompletion = async(e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('home_location', location);
    formData.append('fav_cuisine', JSON.stringify(cuisine));

    if (location !== '' && cuisine !== '') {
      try {
        const response = await fetch('http://127.0.0.1:5000/create-entry', {
          method: 'POST',
          credentials: 'include',
          body: formData,
        });
        
        const responseData = await response.json();
        console.log('Response:', responseData);
        navigate('/userprofile2');

      } catch (error) {
        console.error('Error:', error);
      }
    } 
    else {
      alert('Enter your preferences.');
    }
  };

  // Updated divStyle to align items in a column
    const divStyle = {
      display: 'flex',
      flexDirection: 'row', // Added for column layout
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      // backgroundColor: '#EFBA55',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

  const headingStyle = {
    color: 'black', // Set the color of the heading text
    fontSize: '4rem', // Adjust the font size to match the UI
    fontWeight: 'bold', // Make the font bold
    margin: '0.5rem 0', // Adjust the margin to match the UI
  };

  const descriptionStyle = {
    color: 'black', // Set the color of the description text
    fontSize: '1.2rem', // Adjust the font size to match the UI
    textAlign: 'left', // Center the text
    margin: '0.5rem 0', // Adjust the margin to match the UI
    maxWidth: '65%', // Set a max-width to match the form container width
    fontWeight: '600',
  };

  const leftContainerStyle = {
    width: '50%', // New style for left container
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const formContainerStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5dc', // Adjust the background color to match the UI
    borderRadius: '20px', // Adjust border radius to match the UI
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adjust box-shadow to match the UI
    width: '30%', // Adjust width as necessary
    margin: '2rem', // Add margin to center the form on the page
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allow buttons to wrap
    gap: '0.5rem', // Add gap between buttons
  };

  const buttonStyle = {
    padding: '12px 24px',
    display: 'block', // Use block to allow the button to accept margin auto
    margin: '1rem auto 0 auto', // Top and bottom margin is 1rem, and auto margin for left and right to center the button
    color: '#f5f5dc',
    backgroundColor: 'black',
    borderRadius: '8px',
    cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s ease',
  };

  const buttonStyle2 = (currentCuisine) => ({
    padding: '12px 20px',
    display: 'block',
    margin: '1rem auto 0 auto',
    color: cuisine.includes(currentCuisine) ? '#E4E4E4' : 'black',
    backgroundColor: cuisine.includes(currentCuisine) ? 'black' : 'white',
    borderRadius: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    // border:  '2px solid black',
  });

  const inputStyle = {
    width: '91%',
    padding: '8px 16px',
    marginTop: '8px',
    marginBottom: '16px',
    border: '1px solid #E4E4E4',
    borderRadius: '12px',
    backgroundColor: 'white'
  };

  // const buttonStyle = {
  //   padding: '12px 24px',
  //   display: 'block', // Use block to allow the button to accept margin auto
  //   margin: '1rem auto 0 auto', // Top and bottom margin is 1rem, and auto margin for left and right to center the button
  //   color: 'black',
  //   backgroundColor: '#EFBA55',
  //   borderRadius: '8px',
  //   cursor: 'pointer',
  //   border: 'none'
  // };


  const linkStyle = {
    color: 'black', // Set the color of the link text
    // textDecoration: 'none', // Remove the underline from the link text
    fontSize: '0.81rem',
    textAlign: 'center',
    padding: '1.3rem',
    fontWeight: 'bold'
    // Add any additional styles you need for the link text
  };

  const labelStyle = {
    marginBottom: '4px',
    fontWeight: 'bold'
  };

  const plateStyle = {
    position: 'fixed', // Position the image absolutely within its container
    top: '49%',          // Center vertically
    left: '60%',        // Center horizontally
    transform: 'translate(50%, -50%) ', // Offset by half the width and height of the image
    zIndex: 1, // Set z-index to 1 to ensure it's above other content
  };

  const plate1Style = {
    position: 'fixed', // Position the image absolutely within its container
    top: '0',          // Center vertically
    left: '0',        // Center horizontally
    // transform: 'translate(50%, -50%) ', // Offset by half the width and height of the image
    zIndex: 1,
    // Set z-index to 1 to ensure it's above other content
  };

  const toggleCuisine = (selectedCuisine) => {
    setCuisine((prevCuisine) => {
      if (prevCuisine.includes(selectedCuisine)) {
        return prevCuisine.filter((c) => c !== selectedCuisine);
      } else {
        return [...prevCuisine, selectedCuisine];
      }
    });
  };

  

  return (
    <div style={divStyle}>
       <div className="container">
        <div className="ghost">
        <div id="top-bun"></div>
    <div id="lettuce"></div>
    <div id="tomato"></div>
    <div id="onion"></div>
    <div id="cheese"></div>
    <div id="beef"></div>
    <div id="bottom-bun"></div>

        </div>
      </div>

      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
          
          body {
            min-height: 100vh;
            place-items: center;
          
            --bkg: #5eb3fd;
            --white: #e7e6e6;
          
            background-image: url(${bg}); // Use the imported bg image
            background-size: cover; 
          }
          
          .container {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            overflow: hidden;
          }
          
          .title {
            position: absolute;
          }
          .title h1 {
            font-size: 14vmin;
            font-weight: 900;
            font-family: "Montserrat", sans-serif;
            color: black;
            display: flex;
            left: 0;
          }
          
          .ghost {
              width: 80px;
              height: 80px;

            // background-color: var(--white);
            // background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");  
            border-radius: 100%;
            // transform: translateX(100em) rotateZ(-90deg);
            // position: flex;
            opacity:1;
            mix-blend-mode: exclusion;
            animation: ghostMove 5s ease-out infinite;
          }
          @keyframes ghostMove {
            0% {
              transform: translateX(-45em) ;
            }
            100% {
              transform: translateX(35em);
            }
          }
          .ghost div {
            position: absolute;
            width: 100%;
            background-color: var(--white);
            // background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");
            margin-top: 20%;
          }
          .ghost #top-bun {
            margin-top: 25%;
            height: 26px;
            border-radius: 900px 900px 10px 10px;
            background-color: white;
            border-top: 9px solid white;
          }
          .ghost #lettuce {
            margin-top: 51%;
            border-radius: 18px;
            background-color: white;
            height: 9px;
            border-bottom: 3px solid white;
          }
          .ghost #tomato {
            margin-top: 45%;
            border-radius: 14px;
            background-color: black;
            height: 8px;
            border-bottom: 5px solid black;
          }
          .ghost #onion {
            margin-top: 41%;
            border-radius: 11px;
            background-color: black;
            height: 8px;
            border-bottom: 4px solid black;
          }
          .ghost #cheese {
            margin-top: 45%;
            background-color: white;
            border-radius: 10px;
            height: 2px;
            border-bottom: 5px solid white;
          }
          .ghost #beef {
            margin-top: 60%;
            border-radius: 8px;
            background-color: black;
            height: 3px;
            border-bottom: 16px solid black;
          }
          .ghost #bottom-bun {
            margin-top: 76%;
            background-color: white;
            border-radius: 10px 10px 50px 50px;
            height: 16px;
            border-bottom: 11px solid white;
          }


          .frontDiv {
            /* Styles for the new div in front of the ghost */
            position: absolute;
            /* Add any other styles as needed */
          }
        `}
      </style>
      <img src={plateBig} alt="Plate" style={plateStyle} />
      <img src={plate} alt="Plate" style={plate1Style} />
      <div style={formContainerStyle}>
      
        <TitleBlock
       
       title="Complete your profile"
     />
        <label htmlFor="home-location" style={labelStyle}>Enter your home location:</label>
        <input
          type="text"
          id="home-location"
          placeholder="Home..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
          autoComplete="off"
        />
        <label style={labelStyle}>Choose your favourite cuisine:</label>
        <div style={buttonGroupStyle}>
        <button style={buttonStyle2('Chinese')} onClick={() => toggleCuisine('Chinese')}>
          Chinese
        </button>
        <button style={buttonStyle2('Barbeque')} onClick={() => toggleCuisine('Barbeque')}>
          Barbeque
        </button>
        <button style={buttonStyle2('North Indian')} onClick={() => toggleCuisine('North Indian')}>
          North Indian
        </button>
        <button style={buttonStyle2('Fast Food')} onClick={() => toggleCuisine('Fast Food')}>
          Fast Food
        </button>
        <button style={buttonStyle2('South Indian')} onClick={() => toggleCuisine('South Indian')}>
          South Indian
        </button>
        </div>
        <button style={buttonStyle} onClick={handleProfileCompletion}>Continue</button>
      </div>
    </div>
  );
};

export default UserProfile;