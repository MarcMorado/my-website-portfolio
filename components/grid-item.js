import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Box as="div" mt={2}>
          <Text>{title}</Text>
        </Box>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" />
      <LinkOverlay href={`/works/${id}`} target="_blank" rel="noopener noreferrer">
        <Box as="div" mt={2} fontSize={20}>
          <Text>{title}</Text>
        </Box>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
  />
)