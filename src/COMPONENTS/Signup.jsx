import { Avatar,Button, Container,Heading, Input,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <Container  py={'2'} maxW={'container.xl'}  h={'100vh'} >
       <form  >
        <VStack alignItems={'strech'} spacing ={'7'} m={'auto'} my={'16'} w={['100%' ,'96']} >
        <Heading  m={'auto'}>
            Zeth Media
        </Heading>
        <Avatar margin={'auto'} alignSelf={'center'} />

        <Input  type={'text'} required placeholder='Name'  focusBorderColor={'purple.500'} />

        <Input  type={'email'} required placeholder='E-mail'  focusBorderColor={'purple.500'} />

        <Input  type={'password'}  required placeholder='password'  focusBorderColor={'purple.500'}  />

        <Button type={'submit'} colorScheme={'purple'} > Sign Up</Button>

         <Text textAlign={'right'} >
          Already a User?{' '}
          <Button variant={'link'} >
            <Link to='/login'>Log in</Link>
          </Button>
         </Text>
        
        </VStack>
       </form>
         

    </Container>
    );
}

export default Signup