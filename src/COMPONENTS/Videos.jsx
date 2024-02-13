import { Stack, VStack ,Text, Button ,Heading} from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {

  const [videoLink , setVideoLink] = useState('https://www.youtube.com/watch?v=_toA8lErAHg')

  const handleButtonClick = (name) => {
    if(name === 'video1'){
      setVideoLink('https://www.youtube.com/watch?v=SeoAFlJFa6U')
    }
    else if(name === 'video2'){
      setVideoLink('https://www.youtube.com/watch?v=WMWoXF9wYwo')
    }
    else if(name === 'video3'){
      setVideoLink('https://www.youtube.com/watch?v=9SVv_JZW8vo')
    }
    else if(name === 'video4'){
      setVideoLink('https://www.youtube.com/watch?v=9SVv_JZW8vo')
    }
    else if(name === 'video5'){
      setVideoLink('https://www.youtube.com/watch?v=9SVv_JZW8vo')
    }
    else{
      setVideoLink('')
    }
  }
  return (<>
      <Heading m={'10'}>
        Here are some Videos...
      </Heading>
     <Stack direction={['column','row']}>   
        <VStack w={'100%'}>
        <iframe
            title="YouTube video player"
            style={{
              width:'100%',
              height: '70vh'
            }}
            src={`https://www.youtube.com/embed/${videoLink.split('v=')[1]}?rel=0&autoplay=1`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>       
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
         
         <Button variant={"ghost"} colorScheme="purple" onClick={() => handleButtonClick('video1')}>Video 1</Button>
         <Button variant={"ghost"} colorScheme="purple" onClick={() => handleButtonClick('video2')}>Video 2</Button>
         <Button variant={"ghost"} colorScheme="purple" onClick={() => handleButtonClick('video3')}>Video 3</Button>
         <Button variant={"ghost"} colorScheme="purple" onClick={() => handleButtonClick('video4')}>Video 4</Button>
         <Button variant={"ghost"} colorScheme="purple" onClick={() => handleButtonClick('video5')}>Video 5</Button>
        </VStack>
    </Stack>
    </>
  )
}

export default Videos