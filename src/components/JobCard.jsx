import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <Card>
      <Title>{job.title}</Title>
      <Description>{job.description}</Description>
      <Requirements>Requirements: <br/> {job.requirements}</Requirements>
      <ButtonContainer>
        <ApplyButton to={`/apply/${job.jobId}`}>Apply Now</ApplyButton>
      </ButtonContainer>
    </Card>
  );
};

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Requirements = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 1rem;
`;


const ApplyButton = styled(Link)`
  display: flex;
  position: relative;
  align-items: end;
  justify-content: end;
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default JobCard;