// FIRSTPAGE HOME PAGE
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from 'next/link'

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
          <p style={stylesHome.phrases}>Content de revoir !!!</p>
          <Button style={stylesHome.button}>Connection</Button>
        </div>


        <hr style={stylesHome.ligne} />
        <div>
          <p style={stylesHome.phrases}>C'est ta premiére fois ? <br /> Insctit-Toi!!</p>

          <Button style={stylesHome.button}>Inscription</Button>
        </div>
      </div>
      <div style={stylesHome.container}>
          <p>Y'a pas d'authetification pour le moment entre tkt ;-;
          
          <Link href="/dashboard">
              <Button style={stylesHome.button}>
                FREE ENTERY
              </Button>
          </Link>
          </p>
      </div>

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
    color: 'white',
  },
  lightBlue: {
    color: 'lightblue',
  },
  darkBlue: {
    color: 'darkblue',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  card: {
    padding: '20px',
    border: '1px solid #ccc',
    margin: '0 10px',
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
    border: 'black',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};