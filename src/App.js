import React from 'react';
import Header from './Header';
import ColCard from './ColCard';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css'; // Import App.css here

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
      <ColCard />
      </Container>
    </div>
  );
};

export default App;



    
    
    
    
    
        
    
    
    
 
//   return (
//     <div className="App">
//       <Header />
//       <div className="image-container">
//         {images.map((image, index) => (
//           <CustomCard key={index} {...image} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React from 'react';
// import CustomCard from './CustomCard';

// const App = () => {
//   const images = [
//     {
//       imageUrl: process.env.PUBLIC_URL + '/images/image1.jpg',
//       title: 'Image 1',
//       description: 'Description for Image 1',
//       width: '3504px', // Set the actual width
//       height: '2336px',
//     },
    
//     {
//       imageUrl: process.env.PUBLIC_URL + '/images/image2.jpg',
//       title: 'Image 2',
//       description: 'Description for Image 2',
//       width: '3504px', // Set the actual width
//       height: '2336px',
//     },
//     {
//       imageUrl: process.env.PUBLIC_URL + '/images/image3.jpg',
//       title: 'Image 3',
//       description: 'Description for Image 3',
//       width: '3504px', // Set the actual width
//       height: '2336px',
//     },
  
//   ];

//   return (
//     <div>
//       <h1>Paws</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//       {images.map((image, index) => (
//         <CustomCard
//           key={index}
//           imageUrl={image.imageUrl}
//           title={image.title}
//           description={image.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;






    


