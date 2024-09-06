import { useEffect, useState } from 'react';
import { getAllUsersAvailability } from '../../api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUsersAvailability();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.email}</h3>
          {user.availability.map((slot) => (
            <p key={slot._id}>
              {slot.day}: {slot.startTime} - {slot.endTime}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
