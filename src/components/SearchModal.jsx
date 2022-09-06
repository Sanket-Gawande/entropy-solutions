import { AtSignIcon, CloseIcon, TimeIcon } from '@chakra-ui/icons'
import { Box, Input, Text, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SearchModal = ({ blogs, setSearchModal }) => {
    const [searchFor, setSearchFor] = useState();
    let tempSearchFor;
    const { colorMode } = useColorMode();
    const dark = colorMode === "dark"
    const navigate = useNavigate()
    // on enter it will show the result 
    // the search is against tittle of blogs
    return (
        <Box position={"fixed"} inset={0} bg={dark ? "whiteAlpha.200" : "blackAlpha.400"} transition="all" backdropFilter='blur(5px)' h="full" w="full" zIndex={10} display="grid" placeItems={"center"}>
            <Box overflowY="auto" fontWeight={"medium"} w={["90%", "600px"]} bg={dark ? "gray.700" : "gray.100"} p={6} shadow="lg" position={"relative"} maxH="80%">
                <CloseIcon position={"absolute"} right="4" top="4" fontSize={15} onClick={() => setSearchModal(false)} />
                <Text as={"h2"} fontSize="xl" > Search here</Text>

                <Input placeholder='eg. blockchain
            ' mt={4} onInput={evt => tempSearchFor = (evt.target.value)}
                    onKeyDown={evt => (evt.key) === "Enter" && setSearchFor(tempSearchFor || null)} />
                <Text fontSize={"xs"} fontWeight="normal" mt={2}>Hit enter to see result</Text>
                {searchFor &&
                    <Text fontSize={"sm"} color="blue.500" fontWeight="medium" mt={2}>Search result's for  '{searchFor}'</Text>}
                <Box mx={0} my={2} >
                    <Box px={0}>
                        {
                            blogs?.filter(obj => obj.title?.toLowerCase()?.includes(searchFor && searchFor?.toLowerCase())).map(obj =>

                                <Box bg={dark ? "gray.800" : "gray.300"} p={[1, 2]} px={2} my={2} onClick={() => {
                                    setSearchModal(false);
                                    navigate(`/blog/${obj.id}`);
                                }}>


                                    <Text fontSize="sm" >{obj.title}</Text>
                                    <Text fontSize={"xx-small"} fontWeight="thin"> <AtSignIcon />{obj.author} <br /> <TimeIcon /> {obj.date}</Text>
                                </Box>

                            )
                        }

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SearchModal