import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import JobCard from '../components/JobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/api/jobs')
      .then(response => {
        if (Array.isArray(response.data)) {
          setJobs(response.data);
          setLoading(false);
        } else {
          console.error('Expected an array but got:', response.data);
          setJobs([]);
        }
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setJobs([]);
      });
  }, []);

  return (
    <JobsContainer>
      <JobsTitle>Job Openings</JobsTitle>
      {loading ? <div style={{ textAlign: 'center' }}>Loading...</div> : null}
      {jobs.length > 0 ? (
        jobs.map(job => (
          <JobCard key={job.jobId} job={job} />
        ))
      ) : (
       !loading && <NoJobsMessage>No job openings available at the moment.</NoJobsMessage>
      )}
    </JobsContainer>
  );
};

const JobsContainer = styled.div`
  padding: 2rem;
  max-width: 100%;
  margin: 1rem 2rem 10rem 2rem;
`;

const JobsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const NoJobsMessage = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default Jobs;