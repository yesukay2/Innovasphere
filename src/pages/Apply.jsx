import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Apply = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null, // File input
    coverLetter: '',
    yearsOfExperience: '',
    ssn: '',
    dateOfBirth: '',
    idScan: null, // File input
    address: '',
  });

  useEffect(() => {
    console.log(`Fetching job with ID: ${jobId}`);
    axios.get(`http://localhost:5000/api/jobs/${jobId}`)
      .then(response => {
        setJob(response.data);
        console.log(response.data);
      })
      .catch(error => console.error(error));
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' || name === 'idScan') {
      setFormData({ ...formData, [name]: files[0] }); // Handle file inputs
    } else {
      setFormData({ ...formData, [name]: value }); // Handle text inputs
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object for file uploads
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('resume', formData.resume);
    formDataToSend.append('coverLetter', formData.coverLetter);
    formDataToSend.append('yearsOfExperience', formData.yearsOfExperience);
    formDataToSend.append('ssn', formData.ssn);
    formDataToSend.append('dateOfBirth', formData.dateOfBirth);
    formDataToSend.append('idScan', formData.idScan);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('jobId', jobId);

    axios.post('http://localhost:5000/api/apply', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data', // Required for file uploads
      },
    })
      .then(() => {
        alert('Application submitted successfully!');
        window.location.replace('/jobs');
      })
      .catch(error => console.error(error));
  };

  return (
    !job ? (
      <Loading>Loading...</Loading>
    ) : (
      <Container>
      <ApplyContainer>
        <ApplyTitle>Apply for {job.title}</ApplyTitle>
        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Email */}
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Resume (File Upload) */}
          <FormGroup>
            <Label>Resume (PDF, DOC, DOCX):</Label>
            <FileInput
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </FormGroup>

          {/* Cover Letter */}
          <FormGroup>
            <Label>Cover Letter:</Label>
            <TextArea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Years of Experience */}
          <FormGroup>
            <Label>Years of Experience:</Label>
            <Input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* SSN */}
          <FormGroup>
            <Label>Social Security Number (SSN):</Label>
            <Input
              type="text"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Date of Birth */}
          <FormGroup>
            <Label>Date of Birth:</Label>
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Scanned Copy of Valid ID (File Upload) */}
          <FormGroup>
            <Label>Scanned Copy of Valid ID (PDF, JPEG, PNG):</Label>
            <FileInput
              type="file"
              name="idScan"
              onChange={handleChange}
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </FormGroup>

          {/* Address */}
          <FormGroup>
            <Label>Address:</Label>
            <TextArea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Submit Button */}
          <SubmitButton type="submit">Submit Application</SubmitButton>
        </Form>
      </ApplyContainer>
    </Container>
    )
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f5f5f5;
  margin: 0 0 3rem 0;

  @media (max-width: 768px) {
  margin: 0 0 10rem 0;
  }
`;
const ApplyContainer = styled.div`
  padding: 0 0 2rem 0;
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ApplyTitle = styled.h1`
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 5.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
`;

const FileInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

export default Apply;