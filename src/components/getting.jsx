import  { useState, useEffect } from 'react';
import axios from 'axios';

const API_GET_ENDPOINT = 'https://iwacu.onrender.com/api/v1/getall';
const API_POST_ENDPOINT = 'https://iwacu.onrender.com/api/v1/createcard';

const Getting = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    image: [],
    title: '',
    description: '',
    location: '',
    comments: [],
  });

  useEffect(() => {
    // Make the GET request to the API
    axios
      .get(API_GET_ENDPOINT)
      .then((response) => {
        setGalleryData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST request to create a card
    axios
      .post(API_POST_ENDPOINT, formData)
      .then((response) => {
        // Handle success
        console.log('Card created:', response.data);
        // You can reset the form or perform other actions here
      })
      .catch((error) => {
        console.error('Error creating card:', error);
      });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Gallery Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <form style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {galleryData.map((item) => (
              <div key={item._id} style={{ margin: '10px' }}>
                <img src={item.photo[0]} alt="Gallery Item" style={{ maxWidth: '100%', height: 'auto' }} />
                <p>ID: {item._id}</p>
              </div>
            ))}
          </form>

          <h2>Create a Card</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              required
              style={{ margin: '5px', padding: '5px' }}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
              style={{ margin: '5px', padding: '5px' }}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
              required
              style={{ margin: '5px', padding: '5px' }}
            />
            <button type="submit" style={{ margin: '10px', padding: '5px' }}>Create Card</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Getting;
