import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import hackathon2 from '../public/images/hackathon_02.jpeg'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4}>
          My posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="My first Hackathon. WE WON!"
              thumbnail={hackathon2}
              href="https://www.linkedin.com/feed/update/urn:li:activity:7077535078616064000/"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
