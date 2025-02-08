import { Button } from "@/components/ui/button";
<<<<<<< HEAD:src/app/dashboard/page.tsx
import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils";
import Link from 'next/link';
=======


>>>>>>> parent of cfd3a68 (hum):src/app/homePage/page.jsx
export default function Home() {
  return (
    <div style={stylesHome.container}>
      <h1 style={stylesHome.greetings}>Bienvenue <br /> sur votre page d'accueil !</h1>
      
    </div>
  );
}

//Style
const stylesHome = {
  container: {
    display: 'flex',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '144px',
  },
  greetings: {
    fontSize: '95px',
    color: 'white',
  },
  phrases: {
    fontSize: '48px',
    color: 'white',
  },
  lightBlue: {
    color: 'lightblue',
  },
  darkBlue: {
    color: 'darkblue',
  },
  ligne: {
    width: '2px',
    backgroundColor: '#ccc',
    height: '250px',
    margin: '0 30px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};