import { Box ,Heading,HStack,Text,Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../Assets/1pro.jpg'
import img2 from '../Assets/2pro.jpg'
import img3 from '../Assets/3pro.jpg'



const About = () => {
  return (
    <Box>
      <Heading borderBottom={'2px solid purple'} py={'4'} m={'auto'} w={'fit-content'} >
        About us
      </Heading>
      <Text textAlign={'center'}>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam saepe, nobis qui <br/>
       perspiciatis laudantium eius dolore quo sit omnis deleniti ab! Sunt adipisci<br/>
        nulla omnis quisquam odit fuga accusamus nemo!<br/>
      </Text>
      <Heading borderBottom={'2px solid purple'} py={'4'} m={'auto'} w={'fit-content'}>
        Founders
      </Heading>
      
      <HStack direction={['column','row']} >
        <Box w={['100vw','33vw']} margin={'2'}  p={'2'}>
        <Image height={'30vh'} w={['100vw','33vw']} margin={'2'}  p={'2'} src={img1}  />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et laudantium 
          dignissimos officia. Maiores consectetur cum consequuntur dolorum iste. Aliquid libero odit harum sed atque 
          quis placeat molestiae quidem numquam!</Text>
        </Box>
        <Box w={['100vw','33vw']} margin={'2'}  p={'2'}>
        <Image height={'30vh'} w={['100vw','33vw']} margin={'2'}  p={'2'} src={img1}  />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et laudantium 
          dignissimos officia. Maiores consectetur cum consequuntur dolorum iste. Aliquid libero odit harum sed atque 
          quis placeat molestiae quidem numquam!</Text>
        </Box>
        <Box w={['100vw','33vw']} margin={'2'}  p={'2'}>
        <Image height={'30vh'} w={['100vw','33vw']} margin={'2'}  p={'2'} src={img1}  />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et laudantium 
          dignissimos officia. Maiores consectetur cum consequuntur dolorum iste. Aliquid libero odit harum sed atque 
          quis placeat molestiae quidem numquam!</Text>
        </Box>
      </HStack>
    </Box>
  )
}

export default About