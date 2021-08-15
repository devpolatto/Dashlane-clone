import Layout from './components/Layout';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Password from './pages/Password';

import {GlobalStyled} from './styles/Global'

function App() {
  return (
    <>
      <Layout>  
        <SideNav/>
        <Header/>
        <Password/>
      </Layout>
      <GlobalStyled/>
    </>
  );
}

export default App;
