import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <AboutHero>
        <AboutTitle>About InnovaSphere</AboutTitle>
        <AboutSubtitle>Driving Innovation around the Globe</AboutSubtitle>
      </AboutHero>

      <AboutContent>
        <AboutSection>
          <AboutSectionTitle>Our Mission</AboutSectionTitle>
          <AboutSectionText>
            At InnovaSphere, our mission is to empower businesses and individuals through technology, driving growth and innovation in around the globe. We believe in the transformative power of technology to solve complex problems and create opportunities for all.
          </AboutSectionText>
        </AboutSection>

        <AboutSection>
          <AboutSectionTitle>Our Vision</AboutSectionTitle>
          <AboutSectionText>
            We envision a future where technology bridges gaps, connects communities, and unlocks the full potential of individuals and organizations. Through our work, we aim to be at the forefront of this transformation.
          </AboutSectionText>
        </AboutSection>

        <AboutSection>
          <AboutSectionTitle>Meet Our Team</AboutSectionTitle>
          <TeamGrid>
            <TeamMember>
              <TeamMemberImage src="/src/images/ceo.png" alt="Team Member 1" />
              <TeamMemberName>Grant Miller</TeamMemberName>
              <TeamMemberRole>Founder & CEO</TeamMemberRole>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/src/images/cto.png" alt="Team Member 2" />
              <TeamMemberName>Marc Campbell</TeamMemberName>
              <TeamMemberRole>Founder & CTO</TeamMemberRole>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/src/images/svpEng.png" alt="Team Member 3" />
              <TeamMemberName>Dalia Havens</TeamMemberName>
              <TeamMemberRole>SVP of Engineering</TeamMemberRole>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/src/images/vpSec.png" alt="Team Member 4" />
              <TeamMemberName>Peter Smith</TeamMemberName>
              <TeamMemberRole>Senior Backend Developer</TeamMemberRole>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/src/images/vpHR.png" alt="Team Member 5" />
              <TeamMemberName>Melina Murray</TeamMemberName>
              <TeamMemberRole>Human Resource Manager</TeamMemberRole>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/src/images/vpPM.png" alt="Team Member 6" />
              <TeamMemberName>Amber Alston</TeamMemberName>
              <TeamMemberRole>VP of Product Management</TeamMemberRole>
            </TeamMember>
          </TeamGrid>
        </AboutSection>

        <AboutSection>
          <AboutSectionTitle>Our Clients</AboutSectionTitle>
          <ClientLogos>
            <ClientLogo src="/src/images/yourStory.jpeg" alt="Client 1" />
            <ClientLogo src="/src/images/tcs.jpeg" alt="Client 2" />
            <ClientLogo src="/src/images/webdeva.jpeg" alt="Client 3" />
            <ClientLogo src="/src/images/zucker.jpeg" alt="Client 4" />
            <ClientLogo src="/src/images/beyond.jpeg" alt="Client 5" />
            <ClientLogo src="/src/images/s.jpeg" alt="Client 6" />
          </ClientLogos>
        </AboutSection>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

const AboutHero = styled.section`
  background: linear-gradient(135deg, #007bff, #00bfff);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const AboutSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

const AboutContent = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  margin-bottom: 3rem;
`;

const AboutSectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #007bff;
`;

const AboutSectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #007bff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ClientLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 5rem;
`;

const ClientLogo = styled.img`
  max-width: 150px;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

export default About;