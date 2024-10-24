import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

interface FormProps {
  onSubmit: (data: { name: string; date: Date | null }) => void;
}

export const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      name,
      date: selectedDate ? selectedDate.toDate() : null,
    });
    console.log('Form Submitted', { name, date: selectedDate?.toDate() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        slotProps={{ textField: { fullWidth: true, margin: 'normal' } }} // Use slotProps for TextField
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
};
