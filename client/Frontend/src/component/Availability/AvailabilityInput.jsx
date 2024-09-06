import{ useState, useEffect } from 'react';
import { postAvailability, getAvailability } from '../../api';

const AvailabilityInput = () => {
  const [availability, setAvailability] = useState([]);
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    const fetchAvailability = async () => {
      const { data } = await getAvailability();
      setAvailability(data);
    };
    fetchAvailability();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAvailability = { day, startTime, endTime };
    await postAvailability(newAvailability);
    setAvailability([...availability, newAvailability]);
  };

  return (
    <div>
      <h2>Set Availability</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          type="time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AvailabilityInput;
