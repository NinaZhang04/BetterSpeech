import logo from './logo.svg';
import './App.css';
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';


const App = () => {
  const { 
    transcript,
    listening, 
    resetTranscript, 
    browserSupportsSpeechRecognition } 
    = useSpeechRecognition({
    continuous: true
  });
  
  //if the browser does not support speech recognition
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Unfortunately, your browser does not support speech to text function! Try chrome or firefox.</span>;
  }
 
  return (



    <div>
      
      
      <p class="websitetitle">Better Speech</p>
      <p class="websitedescription">Want to practice your speech? Here is how you can do it! 
      click start to start your speech and watch how the transcript transcribes!
      It can help you determine if your pronounciations are clear enough to be recognized, and help you to visualize your speech if you are doing an impromptu!</p>
      <p class="microphoneonoff">Microphone: {listening ? 'on' : 'off'}</p>
      <button class ="button start" onClick={SpeechRecognition.startListening}>Start</button>
      <button class ="button stop" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button class ="button clear" onClick={resetTranscript}>Clear</button>
      <div class="transcript-container">
        <p class="transcript">{transcript}</p>
      </div>
      
    </div>
  );
};
export default App;


/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/
