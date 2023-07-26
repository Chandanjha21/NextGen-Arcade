import { Button, Container, Heading, Input,Text, VStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (<>
    <Container py={'2'} maxW={'container.xl'}  h={'100vh'} >
       <form  >
        <VStack alignItems={'strech'} spacing={'7'} m={'auto'} my={'16'} w={['100%' ,'96']} >
        <Heading  m={'auto'}>
            Welcome Back
        </Heading>
        <Input  type={'email'} required  placeholder='E-mail' focusBorderColor={'purple.500'} />
          
        <Input  type={'password'}  required placeholder='Password'  focusBorderColor={'purple.500'}  />
        <Button variant={'link'} alignSelf={'flex-end'} >
          <Link to='/forgetpassword' >
          Forget Password ?
          </Link>
        </Button>

        <Button type={'submit'} colorScheme={'purple'} >Log in</Button>

         <Text textAlign={'right'} >
          New User?{' '}
          <Button variant={'link'} >
            <Link to='/signup'>Sign Up</Link>
          </Button>
         </Text>
        
        </VStack>
       </form>
    </Container>
    </>
  )
}

export default Login;