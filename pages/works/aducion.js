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
        <List>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.aducion.com">
              https://www.aducion.com
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next, React, Tailwind, CSS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/thumbAducion.PNG" alt="aducion" />
        <WorkImage src="/images/aducion_2.PNG" alt="aducion" />
        <WorkImage src="/images/aducion_3.PNG" alt="aducion" />
      </Container>
    </Layout>
  )
}

export default Work
