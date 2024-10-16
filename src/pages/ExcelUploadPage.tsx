import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const ExcelUploadPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement file upload logic
    console.log('Uploading file:', file);
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Excel Upload</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="productRegister"
                checked={selectedOption === 'productRegister'}
                onChange={handleOptionChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Product Register</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="stockIssued"
                checked={selectedOption === 'stockIssued'}
                onChange={handleOptionChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Stock Issued</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="stockReceived"
                checked={selectedOption === 'stockReceived'}
                onChange={handleOptionChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Stock Received</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="stockTaking"
                checked={selectedOption === 'stockTaking'}
                onChange={handleOptionChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Stock Taking</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="supplier"
                checked={selectedOption === 'supplier'}
                onChange={handleOptionChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Supplier</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            Upload Excel File
          </label>
          <input
            type="file"
            id="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          >
            <Upload className="mr-2" size={20} />
            Upload and Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExcelUploadPage;