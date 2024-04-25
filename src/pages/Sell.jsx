import React, {useState } from 'react';
import axios from 'axios';

function Sell() {

  const initialFormData = {
    title: "",
    year: "",
    km: "",
    Fuel: "",
    Transmision: "",
    Price: "",
    Image: ""
  };

  const [formData, setFormData] = useState(initialFormData);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    try {
      
      console.log("formData", formData);
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}sell`, formData);
      console.log(response); // Handle response from the server

      // Reset form data upon successful submission
      setFormData(initialFormData);
      console.log("FORM DATA",formData);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      handleChange({ target: { name: "Image", value: reader.result } });
    }
    reader.onerror = error => {
      console.log("ERROR", error);
    }
  };

  

  return (
    <div id='Sell' className="w-screen overflow-hidden pt-5 max-w-lg ml-auto mr-auto">
      <form  onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-center text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input onChange={handleChange} value={formData.title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" name="title" type="text" />
        </div>

        <div className="mb-4">
          <label className="block text-center text-gray-700 text-sm font-bold mb-2" htmlFor="year">
            Year
          </label>
          <input onChange={handleChange} value={formData.year} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="year" name="year" type="number" />
        </div>

        <div className="mb-4">
          <label className="block text-center text-gray-700 text-sm font-bold mb-2" htmlFor="kilometer">
            Km Driven
          </label>
          <input onChange={handleChange} value={formData.km} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="kilometer" name="km" type="text" />
        </div>

        <div className="mb-4">
          <label className="block text-center text-gray-700 text-sm font-bold mb-2" htmlFor="fuel">
            Fuel Type
          </label>
          <input onChange={handleChange} value={formData.Fuel} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fuel" name="Fuel" type="text" />
        </div>

        <div className="mb-4">
          <label className="block text-center text-gray-700 text-sm font-bold mb-2" htmlFor="transmission">
            Transmission Type
          </label>
          <input onChange={handleChange} value={formData.Transmision} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="transmission" name="Transmision" type="text" />
        </div>

        <div className="mb-4">
          <label className="block text-center text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input onChange={handleChange} value={formData.Price} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" name="Price" type="number" />
        </div>

        <div className="mb-4 text-center">
          <label className="block text-center text-gray-700 text-sm font-bold mb-2" htmlFor="Image">
            Upload Image
          </label>
          <input accept='image/*' type='file' onChange={convertToBase64} />

        </div>

        <div className='text-center'>
          <button value='submit' className="bg-blue-500 text-center w-[60%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sell Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sell;
