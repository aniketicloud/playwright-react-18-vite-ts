import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user interactions
import { test, expect, vi } from 'vitest'; // Import from Vitest
import { FormComponent } from './FormComponent';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Import the Day.js adapter

test('renders form and submits correctly', async () => {
  const handleSubmit = vi.fn(); // Vitest's mock function

  // Wrap FormComponent in LocalizationProvider for the test
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormComponent onSubmit={handleSubmit} />
    </LocalizationProvider>,
  );

  // Check if the name input is present
  const nameInput = screen.getByLabelText(/name/i);
  await userEvent.type(nameInput, 'John Doe'); // Simulate typing into the input field

  // Check if the submit button is present
  const submitButton = screen.getByRole('button', { name: /submit/i });
  await userEvent.click(submitButton); // Simulate clicking the submit button

  // Assert the submit handler was called with correct values
  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    date: null, // Assuming no date is selected in the form
  });
});
