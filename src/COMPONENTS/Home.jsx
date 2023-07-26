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
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quasi officia cupiditate, voluptas corporis officiis eos,
         impedit asperiores reiciendis minima blanditiis id rem nisi deserunt.
         Non repudiandae perspiciatis omnis blanditiis.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit veniam, 
         atque dolorem maxime ducimus temporibus alias quis quod minus hic laudantium reprehenderit, 
         sit voluptate soluta esse voluptas repellendus. Minus.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Saepe voluptatem corporis placeat, iure quae quas.
           Qui quae magni enim deleniti natus id quis 
         suscipit veritatis adipisci error? Repudiandae, eos ut.
          
         </Text>

        </Stack>
      </Container>

    </Box>
  );
  
 
}

export default Home;