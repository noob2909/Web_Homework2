import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box } from '@mui/material';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        const taskObj = {
            Name: taskName,
            Description: description
        };
        save(taskObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Create Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
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
                            rows={5}
                            value={description}
                            onChange={handleChange}
                            name="description"
                            margin="dense"
                            sx={{ mt: 2 }}
                        />
                    </Box>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTaskPopup;
