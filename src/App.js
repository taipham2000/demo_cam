import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Page from './page/MainPage/Page';

function App() {
  return (
    <>
      <div className="main">
        <Header />

        <Page />
      </div>
    </>
  );
}

export default App;
