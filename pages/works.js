import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbAducion from '../public/images/thumbAducion.PNG'
import thumbSanctum from '../public/images/thumbSanctum.PNG'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="aducion" title="Aducion" thumbnail={thumbAducion}>
            Real State Agent promoters, they use their expertise in digital
            marketing and social media to promote properties, attract potential
            buyers or renters, and generate leads.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="sanctum" title="Sanctum" thumbnail={thumbSanctum}>
            Experience the thrill of real-time D&D online play (currently in
            development)! Create and control your own character with 3D models,
            and embark on epic adventures with up to 4 friends. Stay tuned for
            updates as we bring you an immersive gaming experience like never
            before!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works
