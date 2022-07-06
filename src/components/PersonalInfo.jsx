import React from 'react'

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div >
      <form className='md:flex md:flex-row md:flex-wrap md:items-center md:justify-center'>
        <div className='flex flex-col m-5'>
          <label htmlFor="firstName" className='font-semibold'>First Name</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="lastName" className='font-semibold'>Surname</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="age" className='font-semibold'>Age</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="occupation" className='font-semibold'>Occupation</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.occupation} onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} />
        </div>

      </form>
    </div>
  )
}

export default PersonalInfo