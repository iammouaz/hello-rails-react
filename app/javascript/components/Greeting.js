import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/reducers/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingStore = useSelector((store) => store.greetingReducer);
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  const [message, setMessage] = useState('Click on the button above to get a random message');

  return (
    <div>
      <button type="button" className="getGreetingsBtn" onClick={() => setMessage(greetingStore[Math.floor(Math.random() * greetingStore.length)].message)}>Magic button</button>
      <p id="greeting">{message}</p>
    </div>
  );
};

export default Greeting;
