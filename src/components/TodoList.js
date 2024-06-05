import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    return (
        <Container>
            <Box textAlign="center" my={4}>
                <Typography variant="h3">Todo List</Typography>
                <Button variant="contained" color="primary" onClick={() => setModal(true)} sx={{ mt: 2 }}>
                    Create Task
                </Button>
            </Box>
            <Grid container spacing={3}>
                {taskList && taskList.map((obj, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            taskObj={obj}
                            index={index}
                            deleteTask={deleteTask}
                            updateListArray={updateListArray}
                        />
                    </Grid>
                ))}
            </Grid>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </Container>
    );
};

export default TodoList;
