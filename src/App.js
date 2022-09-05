import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times =[
    
    {
      nome:'Viewer',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },

    {
      nome:'Vip',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Moderador',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Streamer',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'Artista',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5'
    },

    {
      nome: 'Afiliado',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },

    {
      nome: 'Convidado',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    },


    
  ]
  
  const [colaboradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time=> time.nome)} aoColaboradorCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador)} />
      
    {times.map(time=> <Time 
      key={time.nome} 
      nome ={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores ={colaboradores.filter(colaborador => colaborador.time === time.nome)}
    /> )}

    </div>
  );
}

export default App;
