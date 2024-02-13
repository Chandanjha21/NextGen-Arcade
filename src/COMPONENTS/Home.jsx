import React from 'react'
import {Box ,Container,Heading ,Image,  Stack,Text } from '@chakra-ui/react';
import './image.css';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1pro.jpg';
import img2 from '../Assets/2pro.jpg';
import img3 from '../Assets/3pro.jpg';
import img4 from '../Assets/4pro.jpg';
import img5 from '../Assets/5pro.png';

const headingoptions ={
  
  pos : 'absolute',
  top : '50vh',
  left : '50vh',
  size : '3xl',
  transform :'translate(-50% -50%)' , 
  textTransform :'uppercase',
  p:'4'

}
const MyCarousel = () =>(
  
  <Carousel
   infiniteLoop
   autoPlay
   interval={1000}
   showStatus={false}
   showThumbs={false}
    >
   <Box w ={"full"} h ={"100vh"} >
    <Image src ={img1}  />
    <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingoptions}>
     Welcome to the future
     </Heading>
   </Box>

   <Box w ={ "full"} h ={"100vh"} >
    <Image src ={img2}  />
    <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingoptions}>
     Welcome to the future
     </Heading>
   </Box>

   <Box w ={"full"} h ={"100vh"} >
    <Image src ={img3}  />
    <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingoptions}>
     Welcome to the future
     </Heading>
   </Box>

   <Box w ={"full"} h ={"100vh"} >
    <Image src ={img4}  />
    <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingoptions}>
     Welcome to the future
     </Heading>
   </Box>

  </Carousel>
 );

const Home = () => {
  
  return (
    <Box>
      <MyCarousel />
      <Container minH={"100vh"} maxW={"container.xl"}>
        <Heading borderBottom={"2px solid"} m="auto" py={"2"} w={'fit-content'}  >
          Services
        </Heading>
        <Stack h={"full"} p='4' alignItems={'center'} direction={['column','row']} >
          <Box h={['40','400']}  >
        <Image className='class1' src={img5} filter={'hue-rotate(-130deg)'} />
        </Box>
         <Text interSpacing='Widest' lineSpacing='190%' p={['4','16']} >
         Welcome to NextGen Arcade, your ultimate destination for a futuristic gaming experience! Immerse yourself in a cutting-edge platform where users can seamlessly upload and share captivating videos that delve into the realms of both the future and gaming. Our hub is a haven for tech enthusiasts, gamers, and visionaries alike, offering a diverse collection of content that explores the latest trends, innovations, and thrilling gameplay. Whether you're fascinated by futuristic technologies or passionate about the gaming universe, React Video Hub is the go-to space for discovering, sharing, and connecting with like-minded individuals. Join us on this exhilarating journey as we redefine the boundaries of digital entertainment, providing a unique and dynamic space for the community to shape the future of video content.
          
         </Text>

        </Stack>
      </Container>

    </Box>
  );
  
 
}

export default Home;