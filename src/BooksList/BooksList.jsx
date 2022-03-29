import { useQuery } from "react-query"
import { getAllBooks } from "../api"
import { Flex } from "rebass"
import { Container } from "../shared/Container"
import{TailSpin} from 'react-loader-spinner'


export const BooksList=()=>{
    const {data ,error ,isLoading,isError}=useQuery("books", getAllBooks)
    if (isLoading){
        
        return (<Container>
            <Flex py="5" justifyContent="center" >
            <TailSpin color="#ccc"/>
            </Flex></Container>
        );
    }

    if(isError){
        return <span>Errror: {error.massage}</span> 
    }
    return(
        <Container>
            <Flex flex-flexDirection="column" alignItems="center"> 
                {
                  data.map(([autor,title,id])=>(
                      <div key={id}>
                          {autor}-{title}
                      </div>
                  )) 
                }
            </Flex>
        </Container>
    )

   
}