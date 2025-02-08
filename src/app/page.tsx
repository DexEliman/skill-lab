import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils";
import Link from 'next/link';
=======
import { Card } from "@/components/ui/card";
>>>>>>> parent of cfd3a68 (hum)

export default function Home() {
  return (
    <>
      <div style={stylesHome.container}>
        <h1 style={stylesHome.title}>
          <span style={stylesHome.lightBlue}>Skill</span>
          <span style={stylesHome.darkBlue}>Lab</span>
        </h1>
      </div>

      <div style={stylesHome.container}>
        <h2 style={stylesHome.greetings}>
          Bienvenue
        </h2>
      </div>

      <div style={stylesHome.container}>
        <div>
          <p style={stylesHome.phrases}>Content de te revoir !!!</p>
          <Link href="/login"> {/* Bouton Connexion redirige vers /login */}
            <Button style={stylesHome.button}>Connexion</Button>
          </Link>
        </div>

        <hr style={stylesHome.ligne} />

        <div>
          <p style={stylesHome.phrases}>C'est ta première fois ? <br /> Inscris-toi !</p>
          <Link href="/signup"> {/* Bouton Inscription redirige vers /signup */}
            <Button style={stylesHome.button}>Inscription</Button>
          </Link>
        </div>

<<<<<<< HEAD
      </div>
      <div style={stylesHome.container}>
          <p style={stylesHome.phrases} >Tkt ya pas d' Authentification   </p>
          <Link href="/dashboard"> 
            <Button style={stylesHome.button}>Entre</Button>
          </Link>
        </div>
=======




      </div>

>>>>>>> parent of cfd3a68 (hum)
    </>
  );
}

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
    fontSize: '95px'
  },
  phrases: {
    fontSize: '48px',
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
