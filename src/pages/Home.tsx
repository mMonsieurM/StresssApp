import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState, useEffect, Component} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import ReactAudioPlayer from 'react-audio-player';
import { SocialSharing } from '@ionic-native/social-sharing';
import './Home.css';
import 'animate.css';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6hHas6ppC0ozfj64WY62AbtaeTSfw0eo",
  authDomain: "stresss-252b5.firebaseapp.com",
  databaseURL: "https://stresss-252b5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stresss-252b5",
  storageBucket: "stresss-252b5.appspot.com",
  messagingSenderId: "897260426388",
  appId: "1:897260426388:web:130431a9ef2ccc8a409081",
  measurementId: "G-CKYTQ7VJ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Firebase
// import base from '../components/base';

const Home: React.FC = () => {


  const db = getFirestore();

  setDoc(doc(db, "stresss-252b5-default-rtdb", "WorldRecord"), {
    worldrecord: 80
  });

  // getDoc(doc(db, "collection", "document"))
  //         .then((docSnap) => {
  //           const data = docSnap.data();
  //           console.log(data);
  //         })

  //*** State moderne écrit pour être reactif avec la fonction onclick des boutons de couleurs  ***//

  const [count, setCount] = useState(0);
  let [timer2, setTimer] = useState(10);
  const [record, setRecord] = useState(0);
  const [worldrecord, setWorldRecord] = useState(80);

  const [step, setStep] = useState("step1initiation");
  // const [timer, setTimer] = useState(0);///
  // const [active1, setActive1] = useState('');
  // const [active2, setActive2] = useState('');

  // let duration2 = "10";
  // let calculateTimeLeft = "10";

  const timercooldown = () => {
    if (step === "step2jeu" || timer2 > 0) {
    setTimer(timer2 -= 1);
    }
    return console.log(timer2);
  };

  // if (timer2 === 0) {step = "step3jeu"}

  // useEffect(() => {
    
  
  //   return (step = "step3jeu");}
  // }, [step]);
  // SocialSharing.shareViaFacebook(Body, Message, url).then(() => {
  // })

  

  useEffect(() => {

    if (step === "step4refresh") {
      setCount(0);
      setTimer(100);
      setStep("step1initiation");
    }

    // Vérification et ajouter du record personel
    if (step==="step3fin" && count > record) {
      setRecord(count);
    }

    // Vérification et ajouter du record mondial
    if (step==="step3fin" && count > worldrecord) {
      setWorldRecord(count);
    }

    // Lancement de l'étape 3 fin du jeu avec vibration
    if (timer2 === 0) {   
      setStep("step3fin");   
      if (navigator.vibrate) {
      navigator.vibrate(1000);
    }
  }
    // Lancement du compte-à-rebours lors de la phase 2
    if (step === "step2jeu" ) {
      let timershift = setTimeout(() => timercooldown(), 1000);
      return () => clearTimeout(timershift);}
    else {setTimer(10)}
    
  }, [step, timer2, record]);

  // componentDidMount () {
  //   base.syncState('/', {
  //     context: record,
  //     state: 'record'
  //   })
  // }


  // // ------>ABANDONNED ! Deuxième méthode utilisé sans résultat

  // const calculateTimeLeft = () => {
  //   let year = new Date().getFullYear();
  //   let difference = +new Date(`10/01/${year}`) - +new Date();
  
  //   let timeLeft = {};
  
  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60)
  //     };
  //   }
  
  //   return timeLeft;
  // }

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  
  //   return () => clearTimeout(timer);
  // });
  



  // ------> ABANDONED !Première méthode utilisé sans résultat

  // // useEffect(() => {
  //   let start = 10;
  //  // first three numbers from props
  //   const end = parseInt (timer2.substring (0,3))
  //  // if zero, return
  //   if (start === end) return;
  //  // find duration per increment
  //   let totalMilSecDur = parseInt(duration2);
  //   let incrementTime = (totalMilSecDur / end) * 1000;
  //  // dependency array

  //   // timer increments start counter
  //   // then updates count
  //   // ends if start reaches end
  //   let timer = setInterval(() => {
  //     start -= 1;
  //     // setCount(String(start) + timer2.substring(3))
  //     if (start === end) clearInterval(timer)
  //   }, incrementTime);
  // }, [timer2, duration2]);


  return (
    
        <div className="background">
          <div className="header">
            <img
            className="logo animate__animated animate__fadeIn"
            src={`/assets/images/logo-stresss.svg`}
            alt="Stresss"
            />
          </div>  
          
          <div className="body">

          {/* Premiere phase : le jeu n'a pas démarré */}
          {step === "step1initiation" && (
            <>
            <ReactAudioPlayer
              src={`/assets/sounds/son-lobby.mp3`}
              autoPlay
              loop
            />
            
            <div className="timer rose">Stress yourself for the pleasure
            </div>
            <div className="scorezone animate__animated animate__bounce"> Tap the button as faster you can ! <br /> Let's go !
            </div>
            <div className="rose record animate__animated animate__bounceIn">
              World record : {worldrecord} <br/>
              Personal record : {record}
              
            </div>
            <button className="destroy-button animate__animated animate__bounceIn" onClick={() => setStep(("step2jeu"))}>Destroy<br/>this button</button>


            </>
          )}

          {/* Deuxième phase : le jeu est en cours */}
           {step === "step2jeu" && (
            <>
            <ReactAudioPlayer
              src={`/assets/sounds/son-begin.mp3`}
              autoPlay
              loop
            />

            <div className="timer animate__animated animate__heartBeat animate__infinite">
              <div className="rose">Timer <br />
              {timer2} <br />
              </div>
            </div>
            <div className="scorezone animate__animated animate__heartBeat animate__infinite"> Score <br /> {count}
            </div>
            
            <button className="destroy-button animate__animated animate__heartBeat animate__infinite" onClick={() => setCount((count+1))}>Destroy<br/>this button</button>
            </>
          )}

          {/* Troisième phase : fin du jeu */}
         
          {step === "step3fin" && (
            <>
            <ReactAudioPlayer
              src={`/assets/sounds/son-ending.mp3`}
              autoPlay
            />

            <div className="scoreending"> Thanks for gaming ! <br/> 
            Your score : {count} <br/> </div>
            
            
            
            <button className="retry-button" onClick={() => setStep("step4refresh")} >Play again</button>
            </>
          )}


          </div>
        </div>
     
  );
};

export default Home;
  function componentDidMount() {
    throw new Error('Function not implemented.');
  }

