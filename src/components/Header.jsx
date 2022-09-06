import { CloseIcon, MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, IconButton, Image, Input, ListItem, Text, UnorderedList, useColorMode, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogContext from './BlogContext'
import SearchModal from './SearchModal'
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { blogsData, updateUserName, username } = useContext(BlogContext) || {};
  let tempUsername = null;
  const [searchModal, setSearchModal] = useState(false);
  const dark = colorMode === "dark"

  useEffect(() => {

  }, [])
  return (
    <>
      <Flex
        bg={dark ? "gray.800" : "white"}
        justifyContent="space-between"
        px={[4, 5]} py="4"
        borderBottom={"1px solid"}
        borderBottomColor={dark ? "gray.700" : "gray.300"}
        color={"gray.200"} >
        <Link to={"/"}>
          <Image
            src='/logo.png'
            w="40"
            objectFit={"contain"} />
        </Link>
        <Box
          fontSize={20}
          color={dark ? "gray.200" : "gray.700"}
          pr={[0, 8]}>
          <Text mx="4"
            display={["none", "inline-block"]}
            fontSize="sm"
            fontWeight={"semibold"}>Hello , {username || "Anonymous"}
          </Text>
          < SearchIcon mx={[4, 8]}
            cursor="pointer"
            onClick={() => setSearchModal(!searchModal)} />
          {dark ? <SunIcon onClick={() => toggleColorMode()} cursor="pointer" /> : < MoonIcon onClick={() => toggleColorMode()} cursor="pointer" />}
        </Box>


      </Flex >
      {
        !username &&
        <Box
          position={"fixed"}
          inset={0} bg={dark ? "whiteAlpha.200" : "blackAlpha.400"}
          transition="all" backdropFilter='blur(5px)'
          h="full"
          w="full"
          zIndex={10}
          display="grid"
          placeItems={"center"}>
          <Box
            fontWeight={"medium"}
            w={["90%", "400px"]}
            bg={dark ? "gray.700" : "gray.100"}
            p={6}
            shadow="lg">
            <Text
              as={"h2"}
              fontSize="xl" > Welcome blogger</Text>
            <Text
              as={"h5"}
              fontSize="sm"> Please enter your name below</Text>
            <Input
              placeholder='eg. Groot'
              mt={4}
              onInput={evt => tempUsername = evt.target.value}
              onKeyDown={evt => (evt.key) === "Enter" && updateUserName(tempUsername)} />
            <Text
              fontSize={"xs"}
              fontWeight="normal"
              mt={2}>Hit enter to update username</Text>
          </Box>
        </Box>
      }
      {
        searchModal &&
        <SearchModal blogs={blogsData} setSearchModal={setSearchModal} />
      }
    </>
  )
}

export default Header