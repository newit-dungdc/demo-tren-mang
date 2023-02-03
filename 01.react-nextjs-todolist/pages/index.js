import {
  AppBar,
  Toolbar,
  Paper,
  Grid,
  CssBaseline,
  Box,
  Typography,
} from '@material-ui/core';
import { Fragment } from 'react';
import TodoList from '../components/TodoList.js';

const Index = () => {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box mt={4}>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              <TodoList />
            </Paper>
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Index;
