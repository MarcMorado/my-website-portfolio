import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragrah'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="aducion">
      <Container>
        <Title>
          Aducion <Badge>2023</Badge>
        </Title>
        <Paragraph>
          Real State Agent promoters, they use their expertise in digital
          marketing and social media to promote properties, attract potential
          buyers or renters, and generate leads.
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Work
