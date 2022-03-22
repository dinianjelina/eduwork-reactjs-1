import { useState, useEffect, useCallback } from 'react';

const Identity = () => {
  const fetchUser = useCallback(() => ['Dini', 'Hana', 'Eko', 'Alam'], []);
  let [user, setUser] = useState([]);

  useEffect(() => {
    const data = fetchUser();
    setUser(data);
  }, [fetchUser]);

  return (
    <div>
      <ul>
        {user.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default Identity;
