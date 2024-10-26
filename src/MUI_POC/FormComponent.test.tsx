import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user interactions
import { test, expect, vi } from 'vitest';
import { FormComponent } from './FormComponent';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Import the Day.js adapter
import dayjs from 'dayjs'; // Import dayjs for manipulating and testing the date

test('submits form with null date when no date is selected', async () => {
  const handleSubmit = vi.fn();

  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormComponent onSubmit={handleSubmit} />
    </LocalizationProvider>,
  );

  // Simulate typing a name
  const nameInput = screen.getByLabelText(/name/i);
  await userEvent.type(nameInput, 'John Doe');

  // Submit the form without selecting a date
  const submitButton = screen.getByRole('button', { name: /submit/i });
  await userEvent.click(submitButton); // Simulate clicking the submit button

  // Assert that the form was submitted with a null date
  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    date: null, // No date selected, so date should be null
  });
});

test('submits form with selected date when a date is chosen', async () => {
  const handleSubmit = vi.fn();

  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormComponent onSubmit={handleSubmit} />
    </LocalizationProvider>,
  );

  // Simulate typing a name
  const nameInput = screen.getByLabelText(/name/i);
  await userEvent.type(nameInput, 'Jane Doe');

  // Simulate selecting a date in the DatePicker
  const dateInput = screen.getByLabelText(/select date/i);
  const selectedDate = dayjs('2023-10-25'); // Define the date to select
  await userEvent.type(dateInput, selectedDate.format('MM/DD/YYYY')); // Simulate date input

  // Submit the form
  const submitButton = screen.getByRole('button', { name: /submit/i });
  await userEvent.click(submitButton);

  // Assert the form was submitted with the correct date
  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'Jane Doe',
    date: selectedDate.toDate(), // Correct Date object based on the selected date
  });
});
