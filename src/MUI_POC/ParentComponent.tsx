import React, { useState } from 'react';
import { FormComponent } from './FormComponent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const ParentComponent: React.FC = () => {
  const [formData, setFormData] = useState<{ name: string; date: Date | null }>(
    {
      name: '',
      date: null,
    },
  );

  const handleFormSubmit = (data: { name: string; date: Date | null }) => {
    setFormData(data);
    console.log('Form Data:', data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <h1>Form Submission Example</h1>
        <FormComponent onSubmit={handleFormSubmit} />
        <p>Submitted Name: {formData.name}</p>
        <p>
          Submitted Date: {formData.date ? formData.date.toString() : 'No Date'}
        </p>
      </div>
    </LocalizationProvider>
  );
};
