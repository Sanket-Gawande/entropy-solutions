import { AtSignIcon } from '@chakra-ui/icons';
import { Box, Image, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlogContext from './components/BlogContext';

const BlogDetails = () => {
  const { bid } = useParams();
  const { blogsData } = useContext(BlogContext) || {};
  const blog = blogsData?.filter(obj => obj.id === bid)[0]
  useEffect(() => {
    window.scrollTo(0,0)
  } , [])
  return (
    <Box minH={"100vh"} w="full">
      <Box w={["90%", "700px"]} mx="auto" py={4}>
        <Box w="max-content" mx="auto" display={"flex"} alignItems="center">
          <Text bg="blue.500" rounded="full" mx={2} px={6}>{blog?.category}</Text>
          |
          <Text mx="2" fontSize="xs"> {blog?.date}</Text>
        </Box>
        <Image src={`https://source.unsplash.com/random/?${blog?.title}`} h={["300px", "400px"]} w="full" objectFit={"cover"} my="4" />
        <Text my={2}>
          <AtSignIcon/>
          {blog?.author}
        </Text>
        <Text fontSize={["xl" , "xx-large"]} fontWeight="semibold">

          {blog?.title}
        </Text>
        <Text my="4">
          {blog?.content}
        </Text>
      </Box>
    </Box>
  )
}

export default BlogDetails