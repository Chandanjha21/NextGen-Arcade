import React from 'react'
import {Box,Stack ,Text,Image, Heading} from '@chakra-ui/react'
import img1 from '../Assets/1pro.jpg';
import img2 from '../Assets/2pro.jpg';

const Services = () => {
  return (<>  
 <Heading borderBottom={'2px solid purple'} py={'2'} margin={'auto'} w={'fit-content'} >
  Services
  </Heading>
  
  <Stack direction={'column'} paddingBottom={'10'} >

  <Stack direction={['column','row']} h={['fit-content','30vh' ]} >
    <div className="image1">
      <Image borderRadius={'full'} height={'30vh'} w={['100vw','30vw']} margin={'2'}  p={'2'} src={img1} />
      </div>
    <Text m={['1','10']} py={['1','10vh']} px={['2','10']} w={'fit-content'} >Seamless Video Uploads: Effortlessly share your gaming adventures and futuristic insights with our user-friendly platform. Upload videos in a snap, ensuring your content reaches a global audience.
      </Text>
     </Stack>

     <Stack  direction={['column','row']} h={['100vh','30vh' ]} >
      <Text m={['1','10']}  py={['1','8vh']} px={['2','10']} w={'fit-content'}>
      Immersive Gaming Community: Dive into a vibrant community where gamers and future enthusiasts converge. Engage in discussions, share tips, and discover the latest in gaming and futuristic technologies.
      </Text>
      <Box>
        <Image src={img2} borderRadius={'full'} height={'30vh'} w={['100vw','30vw']} margin={'2'} p={'2'} />
      </Box>
     </Stack>

     <Stack direction={['column','row']} h={['fit-content','30vh' ]} >
    <div className="image1">
      <Image borderRadius={'full'} height={'30vh'} w={['100vw','30vw']} margin={'2'}  p={'2'} src={img1} />
      </div>
    <Text m={['1','10']} py={['1','10vh']} px={['2','10']} w={'fit-content'} >Cutting-edge Content Curation: Experience curated playlists that showcase the best in future tech and gaming. Our algorithm ensures you're always up-to-date with the most exciting and relevant videos in the ever-evolving world of entertainment.
      </Text>
     </Stack>

     <Stack  direction={['column','row']} h={['100vh','30vh' ]} >
      <Text m={['1','10']}  py={['1','8vh']} px={['2','10']} w={'fit-content'}>
      Interactive Live Streaming: Take your gaming sessions to the next level with our live streaming feature. Connect with your audience in real-time, share your strategies, and build a community around your passion for gaming and the future.
      </Text>
      <Box>
        <Image src={img2} borderRadius={'full'} height={'30vh'} w={['100vw','30vw']} margin={'2'} p={'2'} />
      </Box>
     </Stack>

   </Stack>
    </>
  )
}

export default Services;