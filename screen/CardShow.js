import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, View } from "native-base";

const CardShow = (props) => {
  return (
  <View>
  {
    props.arr.map((item,i)=>{
       return <Box alignItems="center" px={3}  key={item.id}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }} 

    
    >
        <Heading>{item.title}</Heading>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.subHeading}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {item.subText}
            </Text>
          </Stack>
          <Text fontWeight="400">
           {item.Description}
          </Text>
          
        </Stack>
      </Box>
    </Box>
    })
  }
  
    </View>
  )
};

export default CardShow
    