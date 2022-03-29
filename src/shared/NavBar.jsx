import {
    Flex,
    Box,
    Link as StyledLink,
    Image,
  } from "rebass/styled-components";
  import { Link as RouterLink } from 'react-router-dom'
  import { Container } from "./Container"
 
  
  export const NavBar = () => {
    return (
      <Flex bg="black" color="white" justifyContent="center">
        <Container>
          <Flex px={2} width="100%" alignItems="center">
            
            <StyledLink as={RouterLink} variant="nav" to="/">
              React Query CRUD
            </StyledLink>
            <Box mx="auto" />
            <StyledLink as={RouterLink} variant="nav" to="/create-book">
              + Add new book
              </StyledLink>
          </Flex>
        </Container>
      </Flex>
    );
  };