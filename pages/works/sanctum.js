import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragrah'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="sanctum">
      <Container>
        <Title>
          Sanctum Games <Badge>2023</Badge>
        </Title>
        <Paragraph>
          Experience the thrill of real-time D&D online play (currently in
          development)! Create and control your own character with 3D models,
          and embark on epic adventures with up to 4 friends. Stay tuned for
          updates as we bring you an immersive gaming experience like never
          before!
        </Paragraph>
        <List>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://sanctumgames.online">
              https://sanctumgames.online
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github - Front-end</Meta>
            <Link href="https://github.com/MarcMorado/Proyecto-Final">
              sanctum Front-end
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github - Back-end</Meta>
            <Link href="https://github.com/MarcMorado/backEnd-PFINAL">
              Sanctum Back-end
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React, Three.js, Drei & Fiber, Node, Sockets.io, CSS, MongoDB
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/thumbSanctum.PNG" alt="sanctum" />
        <WorkImage src="/images/sanctum_3.PNG" alt="sanctum" />
        <WorkImage src="/images/sanctum_2.PNG" alt="sanctum" />
      </Container>
    </Layout>
  )
}

export default Work
