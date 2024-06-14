import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

const initialContacts = [
  { name: 'John Doe', email: 'john@example.com', phone: '(123) 456-7890', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '(123) 555-7890', status: 'Inactive' },
  // Add more initial contacts here
];

function Contacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search contacts..."
          className="p-2 border border-gray-300 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <CSVLink
          data={filteredContacts}
          filename={"contacts.csv"}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Export Contacts
        </CSVLink>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{contact.name}</td>
              <td className="py-2 px-4 border-b">{contact.email}</td>
              <td className="py-2 px-4 border-b">{contact.phone}</td>
              <td className="py-2 px-4 border-b">{contact.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
