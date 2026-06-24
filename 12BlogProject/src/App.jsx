import './App.css'
import conf from './conf/Conf';

function App() {
  console.log(conf.appWriter); 
  // console.log(process.meta.env.REACT_APP_APPWRITER_URL); for create react app

  return (
    <>
      <h1>Blog with Appwrite for <br /><br /> <br /> backend Services</h1>
    </>
  ) 
}

export default App
