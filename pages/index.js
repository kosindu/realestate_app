import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Box
      h="300"
      borderRadius="10px"
      overflow="hidden"
      border="1px"
      borderColor="green.200"
    >
      <Image src={imageUrl} width="500" height="300" alt="banner" />
    </Box>
    <Box
      p="6"
      bg="white"
      borderRadius="0 10px 10px 0"
      border="1px"
      borderLeft="0"
      borderColor="green.200"
    >
      <Text fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text color="green.300" fontSize="2xl" fontWeight="medium">
        {title1}
        <br />
        {title2}
      </Text>
      <Text color="gray.500" fontSize="m" paddingTop="3" paddingBottom="3">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        fontSize="l"
        bg="green.100"
        color="green.800"
        border="1px"
        borderColor="green.800"
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForRent, propertiesForSale }) => (
  <Box>
    <Banner
      purpose="RENT A HOME"
      title1="Rental Homes For"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />
    <Flex flexWrap="wrap">
      {propertiesForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
    <Banner
      purpose="BUY A HOME"
      title1="Find, Buy & Own Your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
    />
    <Flex flexWrap="wrap">
      {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
