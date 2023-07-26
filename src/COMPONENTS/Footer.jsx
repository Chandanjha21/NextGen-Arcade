import React from 'react'
import {Box, VStack ,HStack ,Stack, Heading , Button ,Input} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import {SiYoutube ,SiTwitter ,SiFacebook} from 'react-icons/si'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} p='16' minH={'40'} color={"white"} >
      <Stack direction={['column','row']}>
         <VStack alignItems={"stretch"} w={"full"} px={'4'} textAlign={['center','left' ]}>
            <Heading size="md" >Subscribe to our Newsletter </Heading>       
         <HStack>
            <Input placeholder='Enter your E-mail here...' color={"white"} />
            <Button p={'0'} colorScheme={'purple'} variant={"ghost"} borderRadius = '0 20px 20px 0' >

              <AiOutlineSend/>

            </Button>
         </HStack>
         </VStack>  
         <VStack alignItems={"stretch"} w={"full"} px={'4'} textAlign={"center"}>
            <Heading colorScheme={"white"}>Zeth Media</Heading>
            <p>All rights reserved</p>
            
         </VStack>      
         <VStack  w={"full"} >
            <Heading size={"md"}>
                Social links
            </Heading>
            <HStack>
           <Button colorScheme={"whiteAlpha"} variant={"link"} >
                <a href="https:youtube.com" > <SiYoutube/></a>
               
            </Button>
            <Button colorScheme={"whiteAlpha"} variant={"link"} >
                <a href="https:Facebook.com" > <SiFacebook/></a>
               
                
            </Button>
            <Button colorScheme={"whiteAlpha"} variant={"link"} >
                <a href="https:Twitter.com" > <SiTwitter /></a>
               
            </Button>
            </HStack>
   
         </VStack>
      </Stack>
    </Box>
    )
}

export default Footer;