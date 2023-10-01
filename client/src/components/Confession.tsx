import React, { useState } from 'react';
import ApiResponse from './ApiTypes';
import '../css/confessionForm.css';

function ConfessionForm() {
  const sameBaseUrl = 'http://localhost:8080';
   const [formData, setFormData] = useState({
    subject: '',
    reason: '',
    details: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [submitResponse, setSubmitResponse] = useState<ApiResponse | null>(null); // Annotate submitResponse with ApiResponse type

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Simple validation example (customize as needed)
    const isSubjectValid = formData.subject.trim() !== '';
    const isReasonValid = formData.reason !== '';
    const isDetailsValid = formData.details.length >= 10; // Minimum 10 characters

    // Update isFormValid based on your validation rules and the updated form data
    setIsFormValid(isSubjectValid && isReasonValid && isDetailsValid);
  };

  const handleSubmit = async (event: React.FormEvent) => { // Annotate event with React.FormEvent
    event.preventDefault();

    try {
      const response = await fetch(`${sameBaseUrl}/api/confess`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: formData.subject,
          reason: formData.reason,
          details: formData.details,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setSubmitResponse(responseData);

        if (responseData.success) {
          if (responseData.justTalked) {
            // Handle the case where it's just talk
            console.log('Just wanted to talk.');
          } else {
            // Handle the case of a real confession
            console.log('Confession submitted successfully.');
            // Optionally, you can clear the form fields here
            setFormData({ subject: '', reason: '', details: '' });
          }
        } else {
          console.error(responseData.message);
        }
      } else {
        console.error('Failed to submit confession');
      }
    } catch (error) {
      console.error('Network error', error);
    }
  };

  return (
    <div className='form-container'>
      <h2>Confession Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject" className="form-label">Subject Line</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reason" className="form-label">Reason</label>
          <select      className="form-input"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
           >
           <option value="">Select a reason</option>
    <option value="just-talk">I just want to talk</option>
    <option value="rudeness">Mild Public Rudeness</option>
    <option value="lift">Speaking in a Lift</option>
    <option value="vegetables">Not Eating Your Vegetables</option>
    <option value="united">Supporting Manchester United</option>
          </select>
        </div>
        <div>
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={!isFormValid}>
          Confess
        </button>
      </form>
      {submitResponse && (
        <div>
          {submitResponse.success ? (
            <p>{submitResponse.justTalked ? 'Just wanted to talk.' : 'Confession submitted successfully.'}</p>
          ) : (
            <p>Error: {submitResponse.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ConfessionForm;
