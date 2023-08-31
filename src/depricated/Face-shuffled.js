/* For use later when face shuffle is implemented */


// import './App.css';
// import React from 'react';

// const images = require.context('../assets/Faces', true);
// const imageList = images.keys().map(image => images(image));
// const bio = "Damir Zhaksilikov is a web crawler––ingesting, parsing and interpreting the mass of online data produced as byproducts of ideological and geopolitical violence. These investigations transform this information into software and visual language in which the machine takes the form of those impacted. In doing so, he considers how current computation relating to, and often aiding, this violence can be reverse engineered and meaningfully reconfigured. Damir’s work has taken the form of films, software, humanoid robots, and even mechanical organs. His programmatic focuses include reactive web platforms, ML modeling, as well as data ingestion, storage, and architecture. Zhaksilikov received his BS in Computer Science from the University of Washington and more recently, his MA in Contextual Design from the Design Academy Eindhoven. Originally from Kazakhstan and the United States, he currently resides in the Netherlands."


// const shuffle = (array) => {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }

// shuffle(imageList)

// export default function App() {
//   const [state, setState] = React.useState({ index: 0, pause: false });

//   return (
//     <div>
//       <img src={imageList[state.index]} class="face" onMouseOver={() => setState({ pause: true, index: state.index })} onMouseOut={() => setState({ pause: false, index: state.index })} />
//       <p className='artist-bio-text'>{bio}</p>
//     </div>
//   );
// }