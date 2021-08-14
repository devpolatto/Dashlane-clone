import Header from './components/Header';
import Layout from './components/Layout';

import SideNav from './components/SideNav';

import {GlobalStyled} from './styles/Global'

function App() {
  return (
    <>
      <Layout>  
        <SideNav/>
        <Header/>
      </Layout>
      <GlobalStyled/>
    </>
  );
}

export default App;
