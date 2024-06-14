import React from 'react';

function DataTable() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-medium mb-4">Recent Contacts</h3>
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
          <tr>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">john@example.com</td>
            <td className="py-2 px-4 border-b">(123) 456-7890</td>
            <td className="py-2 px-4 border-b">Active</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Jane Smith</td>
            <td className="py-2 px-4 border-b">jane@example.com</td>
            <td className="py-2 px-4 border-b">(123) 555-7890</td>
            <td className="py-2 px-4 border-b">Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
