

import React, { useState } from 'react';

const FormPage = () => {
    const [form, setForm] = useState({ name: '', age: '', diagnosis: '', admissionDate: '' });
    const [patients, setPatients] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // Track which patient is being edited

    // Handle form input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission (add or edit)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!form.name || !form.age || !form.diagnosis || !form.admissionDate) {
            alert('Please fill all fields');
            return;
        }

        if (editIndex !== null) {
            // Editing existing patient
            const updatedPatients = patients.map((patient, index) =>
                index === editIndex ? form : patient
            );
            setPatients(updatedPatients);
            setEditIndex(null); // Reset after editing
        } else {
            // Adding new patient
            setPatients([...patients, form]);
        }

        // Clear the form after submission
        setForm({ name: '', age: '', diagnosis: '', admissionDate: '' });
    };

    // Handle edit action
    const handleEdit = (index) => {
        setForm(patients[index]);
        setEditIndex(index);
    };

    // Handle delete action
    const handleDelete = (index) => {
        const updatedPatients = patients.filter((_, i) => i !== index);
        setPatients(updatedPatients);
    };

    return (
        <>
            <h1 className='text-5xl text-purple-600 font-semibold text-center my-3 font-serif'>
                <q>FORM AND PATIENT'S RECORDS</q>
            </h1>
            <p className='text-xl font-semibold text-gray-600 items-center text-center mb-10'>
                HMS features a completely integrated graphical work environment including a 
                database, data entry utilities, watershed map, computation engine, and results 
                reporting tools.
            </p>
            
            <div className="h-[600px] flex flex-row gap-16 items-center justify-center p-4">
                {/* Form to Add or Edit Patients */}
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mb-8">
                    <h2 className="text-4xl mb-6 font-serif font-bold text-center text-red-600">
                        {editIndex !== null ? 'EDIT PATIENT' : 'ADD PATIENT'}
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Age</label>
                        <input type="number" name="age" value={form.age} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Diagnosis</label>
                        <input type="text" name="diagnosis" value={form.diagnosis} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Admission Date</label>
                        <input type="date" name="admissionDate" value={form.admissionDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <button type="submit" className="w-full p-2 bg-red-600 text-white font-serif text-2xl rounded-xl">
                        {editIndex !== null ? 'Update' : 'Submit'}
                    </button>
                </form>

                {/* Display Patient Records */}
                <div className="bg-white p-8 rounded-2xl shadow-2xl w-[700px''
                ">
                    <h2 className="text-4xl mb-6 font-serif font-bold text-center text-red-600">Patient Records</h2>
                    {patients.length === 0 ? (
                        <p className="text-gray-700 text-center">No records to show.</p>
                    ) : (
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Name</th>
                                    <th className="border px-4 py-2">Age</th>
                                    <th className="border px-4 py-2">Diagnosis</th>
                                    <th className="border px-4 py-2">Admission Date</th>
                                    <th className="border px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{patient.name}</td>
                                        <td className="border px-4 py-2">{patient.age}</td>
                                        <td className="border px-4 py-2">{patient.diagnosis}</td>
                                        <td className="border px-4 py-2">{patient.admissionDate}</td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => handleEdit(index)} className="bg-red-500 text-white p-1 px-3 rounded mr-2">Edit</button>
                                            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default FormPage;
 

