import React from 'react';

interface TableProps {
  headers: string[];
  data: any[];
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

const Table: React.FC<TableProps> = ({ headers, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {headers.map((header, index) => (
              <th key={index} className="py-3 px-6 text-left">{header}</th>
            ))}
            {(onEdit || onDelete) && <th className="py-3 px-6 text-center">Actions</th>}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="py-3 px-6 text-left whitespace-nowrap">
                  {item[header.toLowerCase()]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="py-3 px-6 text-center">
                  {onEdit && (
                    <button onClick={() => onEdit(item)} className="text-blue-500 hover:text-blue-700 mr-2">
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button onClick={() => onDelete(item)} className="text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;