import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';





function App() {
  return (
    <BrowserRouter>
      <div className='page'>
        <Header />
        <NavBar />

        <div className='app-wrapper_content'>
          <Route path='/dialogs' render={() =>
            <DialogsContainer/>} />

          <Route path='/profile' render={() =>
            <Profile/>} />
        </div>

      </div>
    </BrowserRouter>
  );
}




export default App;
