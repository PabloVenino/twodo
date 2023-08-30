import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Form from './components/Form'
import { Place } from './components/Place/index.js';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const places = [
    {
      id: 0,
      name: "Selecione",
      primaryColor: "#000000",
      secondaryColor: "#ffffff"
    },
    {
      id: 1,
      name: "Casa",
      primaryColor: "#348888",
      secondaryColor: "#4ECCCC"
    },
    {
      id: 2,
      name: "Trabalho",
      primaryColor: "#22BABB",
      secondaryColor: "#28E9EB"
    },
    {
      id: 3,
      name: "Faculdade",
      primaryColor: "#9EF8EE",
      secondaryColor: "#C8F7F2"
    },
    {
      id: 4,
      name: "Academia",
      primaryColor: "#FA7F08",
      secondaryColor: "#FA993C"
    },
    {
      id: 4,
      name: "Laser",
      primaryColor: "#F24405",
      secondaryColor: "#F2622E"
    }
  ];

  return (
    <div>
      <Banner />
      <Form onSubmit={task => handleSubmit(task)} placeList={places}/>
      <Place primaryColor="" secondaryColor="" title=""/>
      {
        places.filter((place) => place.id > 0).map(
          place => 
            <Place
              key={place.id}
              primaryColor={place.primaryColor} 
              secondaryColor={place.secondaryColor} 
              title={place.name}
            />
          )
        }
    </div>
  );
}

export default App;
