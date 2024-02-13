import { Box ,Heading,HStack,Text,Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../Assets/1pro.jpg'




const About = () => {
  return (
    <Box>
      <Heading borderBottom={'2px solid purple'} py={'4'} m={'auto'} w={'fit-content'} >
        About us
      </Heading>

      <Text textAlign={'center'} py={'4'} m={'auto'} px={'10'}>
      Welcome to NextGen Arcade, where passion meets innovation. Founded in 2022, our journey began with a simple yet powerful vision – to create a dynamic space that celebrates the future and gaming realms. As a team of avid gamers and tech enthusiasts, we understand the thrill of exploration and the joy of sharing those moments with a like-minded community. At React Video Hub, we are committed to providing a seamless platform for users to upload, discover, and engage with cutting-edge content. Our mission is to foster a global community that embraces the limitless possibilities of the future, fueled by the excitement of gaming. Join us as we embark on this exhilarating adventure, shaping the next frontier of digital entertainment.
      <br/>
      </Text>

      <Heading borderBottom={'2px solid purple'} py={'4'} m={'auto'} w={'fit-content'}>
        Founder
      </Heading>
      
      <HStack direction={['column','row']} m={'auto'} justifyContent={'center'} >
        <Box w={['100vw','33vw']} margin={'2'}  p={'2'}>
        <Image height={'30vh'} w={['100vw','33vw']} margin={'2'}  p={'2'} src={img1} borderRadius={'full'}/>
        <Text>
          Chandan Kumar Jha
        </Text>
        </Box>
        
        </HStack>
    </Box>
  )
}

export default About