import React, { useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    category: '',
    details: '',
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]); // To store image previews
  const [imageUploadError, setImageUploadError] = useState(null); // To handle upload errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = async (e) => {
    const imagesArray = Array.from(e.target.files);
    const previews = [];

    for (const image of imagesArray) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', "sxwidri0");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dqi4us52b/image/upload/project`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          previews.push(data.secure_url);
        } else {
          setImageUploadError('Image upload failed');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        setImageUploadError('Error uploading image');
      }
    }

    setImagePreviews(previews);
    setFormData({
      ...formData,
      images: [...formData.images, ...previews], // Store image URLs in the form data
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);

    // Send the form data to your backend, including the image URLs
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Project created successfully');
      } else {
        console.error('Project creation failed');
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Details
          </label>
          <textarea
            className="form-control"
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Images (multiple)</label>
          <input
            type="file"
            className="form-control"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          {imageUploadError && (
            <div className="text-danger">{imageUploadError}</div>
          )}
          {imagePreviews.map((imageUrl, index) => (
            <div key={index}>
              <Image cloudName={process.env.CLOUDINARY_CLOUD_NAME} publicId={imageUrl}>
                <Transformation width="300" height="200" crop="fill" />
              </Image>
              <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;
