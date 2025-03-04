import { useState } from 'react';
import Search from './components/Search';

const App = () => {

  const [searchParm, setSearchParm] = useState('');

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1> Find <span className='text-gradient'>Movies</span> You’ll Love Without the Hassle </h1>
        </header>
        <Search searchParm={searchParm} setSearchParm={setSearchParm}/>
      </div>
    </main>
  )
};

export default App;
