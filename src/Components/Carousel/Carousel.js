import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = () => {
  const images = [
    'https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-1-1-e1675763027728-1024x939.png',
    'https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-3-1-e1675763296496-1024x939.png',
    'https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-2-1-e1675763509294-1024x939.png',
    'https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-2-1-e1675763509294-1024x939.png',
    'https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-1-1-e1675763027728-1024x939.png',
    'https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-2-1-e1675763509294-1024x939.png',
    // Add more image URLs here as needed
  ];

  return (
    <div className="max-w-[500px]">
       <Carousel   
       hasMediaButton={false}
       hasSizeButton={false}
       hasLeftButto={'centerLeft'}>
      {images.map((image) => (
        <img key={image} src= {image} alt="An Image" />
      ))}

    </Carousel>
    </div>
   
  );
};

export default App;
