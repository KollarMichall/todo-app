import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import Joi, { any } from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../redux/actions/todos';

interface FormProps {
}

const schema = Joi.object({
    title: Joi.string().required(),
    deadline: Joi.string().required(),

});
let nextId: number = 1;

export const ItemForm: React.FC<FormProps> = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
        resolver: joiResolver(schema)
    });
    const onSubmit = (data: any) => {
        dispatch(createTodo({ id: nextId++, ...data, complete: false }, navigate));
    reset();
};

return (
    <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="title"
                            label="Title of Item"
                            variant="standard"
                            {...register("title")}

                        />
                        <p style={{ color: 'red' }}>{errors.title?.message}</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="deadline"
                            label="Deadline"
                            variant="standard"
                            {...register("deadline")}

                        />
                        <p style={{ color: 'red' }}>{errors.deadline?.message}</p>
                    </Grid>

                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Create Item
                </Button>
            </Box >
        </Box>
    </Container>

)
};
