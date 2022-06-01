import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import Joi, { any } from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/actions/todos';
import { useNavigate } from 'react-router-dom';

interface TodoFormProps {

}

const schema = Joi.object({
    name: Joi.string().required(),

});
let nextId: number = 1;

export const TodoForm: React.FC<TodoFormProps> = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();


    const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
        resolver: joiResolver(schema)
    });
    const onSubmit = (data: any) => {
        dispatch(createTodo(data, navigate));
        reset();
    };




    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Create Todo List
                </Typography>
                <Box component="form" sx={{ mt: 3, width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="name"
                                label="Name of List"
                                autoFocus
                                {...register("name")}

                            />
                            <p style={{ color: 'red' }}>{errors.name?.message}</p>
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                    >
                        Create
                    </Button>
                </Box >
            </Box>
        </Container>

    )
};
