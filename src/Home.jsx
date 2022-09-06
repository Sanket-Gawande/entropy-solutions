import { ArrowForwardIcon, AtSignIcon, TimeIcon } from '@chakra-ui/icons'
import { Box, Button, filter, Flex, Image, TagLabel, Text, useColorMode } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogContext from './components/BlogContext'
import WriteModal from './components/WriteModal'

const Home = () => {
  const { blogsData } = useContext(BlogContext) || {};
  const [writeModal, setWriteModal] = useState();
  const [category, setCategory] = useState("All")
  const { colorMode } = useColorMode();
  const dark = colorMode === "dark"
  return (
    <>
      {
        writeModal &&
        <WriteModal setWriteModal={setWriteModal} blogs={blogsData} />
      }
      <Box minH={"100vh"} w="full">
        {/*  hero section  */}
        <Flex h={["50%", "550px"]} w="90%" mx={"auto"} px={["1rem", "2rem"]} flexWrap="wrap" my={4}>
          <Box w={["100%", '50%']} display="flex" justifyContent={"center"} order={[2, 1]} flexDir="column">
            <Text as="h1" fontSize={[28, 40, 50]} fontWeight="bold" py={4}>
              Welcome to react blogs
            </Text>
            <Text>Good writing is remembering detail. Most people want to forget. Don’t forget things that were painful or embarrassing or silly. Turn them into a story that tells the truth.</Text>
            <Button fontWeight={"light"} rightIcon={<ArrowForwardIcon />} bg="blue.500" color={"white"} py="2" px="4" maxW={"max-content"} mt={4} onClick={() => setWriteModal(!writeModal)}>Start posting</Button>
          </Box>
          <Image src='/hero.svg' w={["full", '50%']} h="full" objectFit={"contain"} order={[1, 2]} />
        </Flex>
        <hr />
        <Text textAlign={"center"} mt={4}>Sort by categories</Text>
        <Flex w={["90%", "max-content"]} mx="auto" px="4" alignItems="center" experimental_spaceX={[2]} flexWrap="wrap">
          {/* rendering categories filter buttons */}
          {
            ["All", "Tech", "Entertainment", "Community"].map(str =>

              <Button  bg={str === category ? "gray.500" : "gray.500"} onClick={() => setCategory(str)} m={2}>{str}</Button>
            )
          }



        </Flex>
        <Flex w={"90%"} py={4} mx="auto" flexWrap={"wrap"} justifyContent="center">

          {
            blogsData?.filter(obj => category === "All" ? true : obj.category === category)?.map(obj =>
              <Link to={`/blog/${obj.id}`}>
                <Box w={["150px", "200px"]} rounded={"lg"} overflow="hidden" m={[2, 4]} h={["220px", "280px"]} bg={dark ? "gray.700" : "gray.200"} shadow="lg">
                  <Image src={`https://source.unsplash.com/random/?${obj.title}`} h={"50%"} w="full" objectFit={"cover"} alt={obj?.category}/>
                  <Box p={[2]} position="relative">
                    <Text position={"absolute"} top="-10%" fontSize={"xs"} bg={obj?.category === "Tech" ? "blue.500" : obj?.category === "Entertainment" ? "green.500" : "pink.500"} px={2} fontWeight="medium" right={2}>{obj?.category}</Text>
                    <Text fontSize={["sm", "md"]} fontWeight="semibold" >

                      {obj?.title?.substring(0, 40)}...
                    </Text>
                    <Text fontSize={["xx-small", "sm"]} mt={[1, 3]}>

                      <AtSignIcon />{obj.author} <br /> <TimeIcon /> {obj.date}
                    </Text>

                  </Box>
                </Box>
              </Link>
            )
          }
        </Flex>
      </Box>
    </>
  )
}

export default Home