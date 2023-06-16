import { useState } from 'react';

function Activity() {

  // Mocked activities data
  const activities = [
    { id: 1, name: 'John Doe', title: 'Payment Received', amount: '+$100.00' },
    { id: 2, name: 'Jane Smith', title: 'Payment Sent', amount: '-$50.00' },
    { id: 3, name: 'Alex Johnson', title: 'Payment Received', amount: '+$200.00' },
  ]

  const [filter, setFilter] = useState('');

  // Filter activities based on the input value
  const filteredActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className='max-w-[1200px] py-4 px-8 m-auto'>
      <h1 className="text-2xl font-bold mb-4">Activity</h1>
      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <ul className="space-y-4">
        {filteredActivities.map((activity) => (
          <li
            key={activity.id}
            className="bg-white rounded shadow p-4 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-bold">{activity.name}</h2>
              <p className="text-gray-500">{activity.title}</p>
              <p className="text-gray-500">{activity.amount}</p>
            </div>
            <button className="text-blue-500 hover:text-blue-700">View Details</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activity;

