import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Box bg="white" borderBottom="1px" borderColor="green.200">
    <Flex
      p="2"
      alignItems="center"
      paddingLeft="5"
      paddingRight="5"
      maxWidth="1280px"
      m="auto"
    >
      <Box>
        <Link href="/" paddingLeft="2">
          <Flex alignItems="center" fontSize="2xl" cursor="pointer">
            <FcHome />
            <Text color="green.400" fontWeight="bold" marginLeft="2">
              Aparto
            </Text>
          </Flex>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link href="/search" passHref>
          <Flex
            marginLeft="5"
            padding="2"
            alignItems="center"
            cursor="pointer"
            border="1px"
            borderRadius="10"
            borderColor="green.400"
          >
            <BsSearch />
            <Text
              fontSize="m"
              marginLeft="2"
              color="green.400"
              fontWeight="bold"
            >
              Search
            </Text>
          </Flex>
        </Link>
      </Box>
    </Flex>
  </Box>
);

export default Navbar;
