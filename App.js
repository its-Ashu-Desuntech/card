
import { NativeBaseProvider,Box,Center } from 'native-base';
import  CardShow  from './screen/CardShow';



const arr = [
  {
    id:"1",
    title: "Hello Jack One", 
    url:"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    subHeading:"The Garden Vilage",
    subText: "The Silicon Valley of America.",
    Description:"Bengaluru (also called Bangalore) ,hello  is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
  },
  {
    id:"2",
    title: "Hello Jack2", 
    url:"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    subHeading:"The City Mall",
    subText: "The Silicon Valley of India.",
    Description:"Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
  },
  // {
  //   id:"3",
  //   title: "Hello Jack3", 
  //   url:"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
  //   subHeading:"The Garden City",
  //   subText: "The Silicon Valley of India.",
  //   Description:"Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
  // }
]

export default function App() {
  return (
    <NativeBaseProvider>
    <Center flex={1} px="3">
        <CardShow 
            arr={arr}
        
        
        />
    </Center>
  </NativeBaseProvider>
  );
}


