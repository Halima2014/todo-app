import logo from './logo.png';
import './App.css';
import MyButton from './components/MyButton';
import { PlusOutlined } from '@ant-design/icons';

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur mon application de gestion de liste
        </p>
        
        <MyButton
          Tooltip = "Ajouter une liste"
          onClick={() => console.log('le bouton est cliqué')}
         icon={<PlusOutlined />}
        >
          Ajouter une liste
        </MyButton>
      
      </header>
    </div>
  );
}

export default App;
