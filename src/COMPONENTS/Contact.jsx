import React from 'react'
import { Button, Container, Heading, Input, VStack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (<>
      <Heading textAlign={'center'} m={'5px'} >Contact Us</Heading>
      <Container maxW={'container.xl'} h={'90vh'} >
        <VStack alignItems={'center'} m={'auto'} py={'20'} >
        <p>You can approach us through E-mail at {' '} <Button variant={'link'}><Link to={'www.Gmail.com'}>G-Mail</Link></Button> 
         
        </p>
        <p > Drop Your E-mail Address for Query </p>

      <Input type='email' w={'-webkit-fit-content'} m={'auto'} border={'1px Solid purple'} ></Input>
      <Button variant={'solid'} type={'submit'} colorScheme='purple' >Submit</Button>
      </VStack>
      </Container>     
      </>

  )
}

export default Contact