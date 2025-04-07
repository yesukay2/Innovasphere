import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to InnovaSphere</HeroTitle>
          <HeroSubtitle>Innovating the Future with Technology</HeroSubtitle>
          <HeroText>
            We are a cutting-edge tech firm with a global presence, specializing in Software Engineering, Artificial Intelligence, and Networking. Our team spans across Europe, Asia, and Africa, bringing together the best talent from around the world.
          </HeroText>
          <HeroButton href="/jobs">Explore Job Openings</HeroButton>
        </HeroContent>
        <HeroImage src="/src/images/homepic.png" alt="InnovaSphere Team" />
      </HeroSection>

 

      <FeaturesSection>
        <SectionTitle>What We Do</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>💻</FeatureIcon>
            <FeatureTitle>Software Engineering</FeatureTitle>
            <FeatureDescription>
              We build scalable and efficient software solutions tailored to your business needs.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🤖</FeatureIcon>
            <FeatureTitle>Artificial Intelligence</FeatureTitle>
            <FeatureDescription>
              We leverage AI to create intelligent systems that drive innovation and growth.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🌐</FeatureIcon>
            <FeatureTitle>Networking</FeatureTitle>
            <FeatureDescription>
              We design and implement robust networking solutions to keep you connected.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #007bff, #00bfff);
  color: white;
  padding: 4rem 2rem;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  animation: ${fadeIn} 2s ease-in-out;
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  animation: ${fadeIn} 2.5s ease-in-out;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: white;
  color: #007bff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  animation: ${fadeIn} 3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
    color: #0056b3;
  }
`;

const HeroImage = styled.img`
  max-width: 35vw;
  border-radius: 8px;
  animation: ${float} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    display: none;
  }
`;

const GlobalPresenceSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const GlobeAnimation = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const GlobeImage = styled.img`
  width: 100%;
  animation: ${float} 6s ease-in-out infinite;
`;

const LocationMarker = styled.div`
  position: absolute;
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  animation: ${fadeIn} 2s ease-in-out;
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  margin-bottom: 6rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

export default Home;