import React from "react";
import './App.css'
import { Topo } from "./components/Topo";
import { Card } from "./card/Card";

export default function App() {
  return (
    <div className="app">
      <div className="cards">
        <Topo />
        <Card
          title='Agora é oficial: o Windows 11 está vindo'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis 
        tellus vel diam fringilla, eu ullamcorper ex iaculis.'/>

        <Card
          title='Tim Berners-Lee vai leiloar código-fonte da web'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis 
          tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor 
          justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus.
           Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'/>


        < Card
          title='Tem Firefox novo no pedaço e você vai querer migrar'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.' />

        <Card
          title='John McAfee, criador do antivírus McAfee, morre'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. 
        Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. 
        Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, 
        interdum ullamcorper libero.'/>

        <div style={{
          fontFamily: 'Lexend Deca',
          color: '#717171',
          padding: '25px'
        }}>
          <p>Desenvolvido  por Fábio Marins</p>
        </div>
      </div>
    </div>
  )
}