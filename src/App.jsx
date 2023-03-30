import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [person, setPerson] = useState(data);
  
  return (
    <main>
      <section className='container'>
        <h4>{person.length} People Birthday Reminder - Starter</h4>
        <section >
          <List people={person} />
        </section>
        <button className='btn' type='button' onClick={() => setPerson([])}>clearAll</button>
      </section>
    </main>
  )
};
export default App;
