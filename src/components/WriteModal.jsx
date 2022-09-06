import { CloseIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Box, Button, Checkbox, FormLabel, HStack, Image, Input, Radio, RadioGroup, Text, Textarea, useColorMode, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BlogContext from './BlogContext';

const WriteModal = ({ blogs, setWriteModal }) => {
    const { updateBlogs, username } = useContext(BlogContext)
    let tempSearchFor;
    const { colorMode } = useColorMode();
    const [post, setPost] = useState({ title: "", content: "", category: "" });
    const [showAlert, setShowAlert] = useState(false)
    const dark = colorMode === "dark"
    const navigate = useNavigate();

    const postBlog = () => {
        if (!post.title || !post.category || !post.content) { setShowAlert(true); return };
        setShowAlert(false);
        // UPDATING BLOGS IN CONTEXT
        updateBlogs([...blogs, { ...post, id: Math.random().toString(32).substring(2), author: username, date: new Date().toLocaleString("en-us") }])
        //RESETTING POST FORM
        setPost({ title: "", content: "", category: "" });
        setWriteModal(false)
    }
    return (
        <Box position={"fixed"} inset={0} bg={dark ? "whiteAlpha.200" : "blackAlpha.400"} transition="all" backdropFilter='blur(5px)' h="full" w="full" zIndex={10} display="grid" placeItems={"center"}>
            <Box fontWeight={"medium"} w={["90%", "600px"]} bg={dark ? "gray.700" : "white"} p={[6, 8]} shadow="lg" position={"relative"} maxH="80%" overflowY={"auto"} >
                <CloseIcon position={"absolute"} right="4" top="4" fontSize={15} onClick={() => setWriteModal(false)} />
                <Text as={"h2"} fontSize="xl" > Write something interesting...</Text>


                <Image w={"100%"} h={"200px"} src="https://source.unsplash.com/random/?blog,write,pen,book" objectFit={"cover"} my={4} mx="auto" display={"block"} />
                <Text fontSize="xs" color="red.500">This is just a random image coming from unsplash api</Text>
                {
                    showAlert &&
                    <Alert onClick={() => setShowAlert(false)} color="white" status='error' bg="red.500" my={3}>
                        <AlertIcon color={"white"} />
                        All fields are mandatory , please fill the required
                    </Alert>
                }

                <Box textAlign={"left"}>
                    <label >Heading</label>
                    <Input
                        mt={2}
                        mb={4}
                        value={post?.title}
                        onInput={e => setPost({ ...post, title: e.target.value })}
                        placeholder='eg. somthing about your post' />
                </Box>
                <Box textAlign={"left"}>
                    <FormLabel>Write description here </FormLabel>
                    <Textarea
                        mt={2}
                        mb={4}
                        value={post?.content}
                        onInput={e => setPost({ ...post, content: e.target.value })}
                        placeholder='eg. description for your blog post' />
                </Box>
                <Text>Select category</Text>
                <RadioGroup
                    onChange={(value) => setPost({ ...post, category: value })}
                    textAlign={"left"}
                    mt={2}
                    flexDir={["column", "row"]}
                    display={"flex"}
                    value={post?.category}
                    experimental_spaceX={[0, 4]}>
                    <Radio value={"Tech"}> Tech</Radio>
                    <Radio value={"Community"}> Community</Radio>
                    <Radio value={"Entertainment"}> Entertainment</Radio>
                </RadioGroup>
                <Button mt={4} color="white" bg="blue.500" onClick={postBlog}>Post now</Button>
            </Box>
        </Box>
    )
}

export default WriteModal