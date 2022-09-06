import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Flex position="-webkit-sticky" top="full" bottom={0} justifyContent={["center", "space-between"]} flexWrap="wrap" borderTop="1px" borderTopColor="gray.500" pt={2} px={[4, 6]}>
                <Image
                    display={["none", "inline-block"]}
                    src='/logo.png'
                    w="40"
                    objectFit={"contain"} />

                <Text>All rights are reserved &copy;2022</Text>
            </Flex>
            <Text textAlign={"center"} pb="4">Made by <a style={{color : "gray"}} href='https://www.github.com/Sanket-Gawande'>Sanket-Gawande</a></Text>
        </>
    )
}

export default Footer