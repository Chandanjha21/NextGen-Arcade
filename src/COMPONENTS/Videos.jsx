import { Stack, VStack ,Text, Button ,Heading} from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
  return (<>
      <Heading m={'10'}>
        Here are some Videos...
      </Heading>
     <Stack direction={['column','row']}>   
        <VStack w={'100%'}>
          <video 
          controls         
          controlsList='nodownload'
          src=""
          style={{
            width:'100%'
          }} >
          </video>        
            <VStack w={'100%'} >
                <Heading>sample video</Heading>
              <Text overflowY={"auto"}>
                This is a Sample video
              </Text>
            </VStack>
        </VStack>
        <VStack 
        w={['full','xl']}
        alignItems={"stretch"}
        overflowY={'auto'}
        m={'2'}
        my={['2','10']}
         >
         
         <Button variant={"ghost"} colorScheme="purple" >Lecture 1</Button>
         <Button variant={"ghost"} colorScheme="purple" >Lecture 2</Button>
         <Button variant={"ghost"} colorScheme="purple" >Lecture 3</Button>
         <Button variant={"ghost"} colorScheme="purple" >Lecture 4</Button>
         <Button variant={"ghost"} colorScheme="purple" >Lecture 5</Button>
        </VStack>
    </Stack>
    </>
  )
}

export default Videos