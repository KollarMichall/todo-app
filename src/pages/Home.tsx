import { Box, Container, Grow } from '@mui/material'
import React from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'

interface HomeProps {

}
const Home: React.FC<HomeProps> = () => {

    return (
        <Grow in>
            <Box>
                <Container>
                    <TodoForm />
                </Container>
                <Container maxWidth="lg">
                    <TodoList />
                </Container>
            </Box>
        </Grow>
    )
}

export default Home