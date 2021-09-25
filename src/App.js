import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';





function App(props) {
  return (
    <BrowserRouter>
      <div className='page'>
        <Header />
        <NavBar />

        <div className='app-wrapper_content'>
          <Route path='/dialogs' render={() =>
            <Dialogs messages={props.state.messagesPage} 
            store={props.store}/>} />

          <Route path='/profile' render={() =>
            <Profile profilePage={props.state.profilePage}
            dispatch={props.dispatch}
            />} />
        </div>

      </div>
    </BrowserRouter>
  );
}




export default App;
