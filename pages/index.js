import {
  Link,
  Button,
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragrah'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I'm a front-end developer based in Barcelona!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marc Morado
          </Heading>
          <p>Artist / Developer</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/marc.PNG"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Meet the Developer
        </Heading>
        <Paragraph>
          Welcome to my website! I'm a passionate Front-End Developer
          specializing in React.js, crafting user-friendly experiences. With
          expertise in Three.js, I create immersive web experiences with
          impressive 3D graphics. Proficient in Next.js, I build high-quality,
          scalable React applications. I also leverage modern JavaScript, HTML5,
          CSS3, and tools like Git, npm, Webpack, and Babel. Always eager to
          learn, I explore new technologies in this ever-evolving tech
          landscape. Feel free to check out my repositories, contribute, or get
          in touch!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>My Portfolio!</Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant={"section-title"}>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Barcelona, Spain
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Master's Zbrush and 3D Generalist at ECIB - Escola de Cinema de Barcelona 
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked as a freelance 3D artist
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed the React Bootcamp  
        </BioSection>
        <BioSection>
          <BioYear>2022 - 2023</BioYear>
          Worked at Opposite as a FRONT-END Developer 
        </BioSection>
        <Section delay={0.8}>
          <Heading as="h3" variant={"section-title"}>
          My Interests ♥
          </Heading>
          <Paragraph>
            <Link href="https://www.artstation.com/marcmorado">
              Sculpting
            </Link>
            , Art, Music, Machine Learning, Designing, Playing Bass
          </Paragraph>
        </Section>
      </Section>
    </Container>
  )
}

export default Home
