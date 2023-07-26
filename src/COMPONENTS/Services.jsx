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
    <Text m={['1','10']} py={['1','10vh']} px={['2','10']} w={'fit-content'} >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Vero, corporis quisquam voluptatibus modi consequuntur adipisci accusantium
        minus itaque porro nesciunt ratione exercitationem tenetur 
      cumque perferendis nostrum sint odio sit animi? 
      </Text>
     </Stack>

     <Stack  direction={['column','row']} h={['100vh','30vh' ]} >
      <Text m={['1','10']}  py={['1','8vh']} px={['2','10']} w={'fit-content'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eius iure veritatis,
         ex accusamus inventore! Doloremque nulla eveniet molestias praesentium id nostrum in adipisci, aperiam,
         fugiat inventore reiciendis sunt sed?
      </Text>
      <Box>
        <Image src={img2} borderRadius={'full'} height={'30vh'} w={['100vw','30vw']} margin={'2'} p={'2'} />
      </Box>
     </Stack>

     <Stack direction={['column','row']} h={['fit-content','30vh' ]} >
    <div className="image1">
      <Image borderRadius={'full'} height={'30vh'} w={['100vw','30vw']} margin={'2'}  p={'2'} src={img1} />
      </div>
    <Text m={['1','10']} py={['1','10vh']} px={['2','10']} w={'fit-content'} >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Vero, corporis quisquam voluptatibus modi consequuntur adipisci accusantium
        minus itaque porro nesciunt ratione exercitationem tenetur 
      cumque perferendis nostrum sint odio sit animi? 
      </Text>
     </Stack>

     <Stack  direction={['column','row']} h={['100vh','30vh' ]} >
      <Text m={['1','10']}  py={['1','8vh']} px={['2','10']} w={'fit-content'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eius iure veritatis,
         ex accusamus inventore! Doloremque nulla eveniet molestias praesentium id nostrum in adipisci, aperiam,
         fugiat inventore reiciendis sunt sed?
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