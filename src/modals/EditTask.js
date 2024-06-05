import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (taskObj) {
            setTaskName(taskObj.Name);
            setDescription(taskObj.Description);
            setCategory(taskObj.Category || '');
        }
    }, [taskObj]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "category") {
            setCategory(value);
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const tempObj = {
            Name: taskName,
            Description: description,
            Category: category
        };
        updateTask(tempObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Update Task</DialogTitle>
            <DialogContent>
                <Box component="form">
                    <TextField
                        label="Task Name"
                        variant="outlined"
                        fullWidth
                        value={taskName}
                        onChange={handleChange}
                        name="taskName"
                        margin="dense"
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={description}
                        onChange={handleChange}
                        name="description"
                        margin="dense"
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        label="Category"
                        variant="outlined"
                        fullWidth
                        value={category}
                        onChange={handleChange}
                        name="category"
                        margin="dense"
                        sx={{ mt: 2 }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleUpdate}>Update</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTaskPopup;
