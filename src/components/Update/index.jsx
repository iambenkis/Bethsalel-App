import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: null,
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Send the updated user information to your backend API for processing
    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('image', formData.image)

    // Make a PUT request to update the user profile
    fetch('/api/update-profile', {
      method: 'PUT',
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          // Handle successful update, e.g., display a success message
          console.log('Profile updated successfully')
          navigate('/profile')
        } else {
          // Handle update failure, e.g., display an error message
          console.error('Profile update failed')
        }
      })
      .catch((error) => {
        console.error('Error updating profile:', error)
      })
  }

  return (
    <div className="py-20 mx-40">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl capitalize font-medium">Update Profile</h2>
        <form
          onSubmit={handleSubmit}
          className=" relative flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center mt-5">
            {/* <h1 className="mr-10 font-medium">Profile Image</h1> */}
            <div className="w-[7rem] h-[7rem] text-xs  overflow-hidden flex justify-center items-center relative  border-dashed border-2 bg-[#fafafa] text-center rounded-full align-middle">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full   cursor-pointer"
                aria-hidden="true"
              />
              Drag & Drop your image
            </div>
          </div>
          <div className="flex justify-center items-center">
            <label className="font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full ml-4 my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
            />
          </div>
          <div className="flex justify-center items-center">
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full ml-4  my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
            />
          </div>
          <div className="flex justify-center items-center">
            <label className="font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full ml-4 my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="border absolute bottom-[-2rem] right-0 border-gray-100 py-1 text-sm px-4 rounded-lg hover:bg-gray-200 bg-gray-100"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
