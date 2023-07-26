import React from 'react'
import {
    Drawer,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    HStack
  } from '@chakra-ui/react'
  import {BiMenu} from 'react-icons/bi'
  import {Link} from 'react-router-dom'
const Header = () => {
  //hook
  const {isOpen , onOpen , onClose} = useDisclosure();
  return (<>
    <Button position='fixed' top ='4' left='4'  zIndex={"overlay"} colorScheme= 'purple' onClick={onOpen} p='0' borderRadius={'full'}>
      <BiMenu size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement ='left' onClose={onClose}>
         <DrawerOverlay/>
         <DrawerContent>
          <DrawerHeader>Chandan's Web</DrawerHeader>
          <Button  onOpen={onClose} colorScheme = {"purple"} variant="ghost">
            <Link to = '/'>Home</Link>
          </Button>
          <Button  onOpen={onClose} colorScheme = {"purple"} variant="ghost">
            <Link to = '/videos'>Videos</Link>
          </Button>
          <Button onOpen={onClose} colorScheme ={"purple"} variant="ghost">
            <Link to = '/aboutus'>About us</Link>
          </Button>
          <Button onOpen={onClose} colorScheme ={"purple"} variant="ghost">
            <Link to = '/contact'>Contact us</Link>
          </Button>
          <Button onOpen={onClose} colorScheme ={"purple"} variant="ghost">
            <Link to = '/upload'>Upload</Link>
          </Button>
          <Button onOpen={onClose} colorScheme ={"purple"} variant="ghost">
            <Link to = '/services'>Services</Link>
          </Button>

          <HStack position = 'absolute' left= {'0'} bottom={'10'} w={"full"} justifyContent="space-evenly" >
             <Button variant= "solid" colorScheme={"purple"} ><Link to='/login'>Login</Link></Button>

             <Button variant= "outline" colorScheme={"purple"} ><Link to='/signup'>SignUp</Link></Button>
          </HStack>
          <DrawerCloseButton/>
         </DrawerContent>

      </Drawer>
    </>
  )
}

export default Header;