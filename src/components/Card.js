import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import { Card, CardHeader, CardContent, CardActions, Button, Checkbox, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/system';

const colors = [
    {
        primaryColor: "#5D93E1",
        secondaryColor: "#ECF3FC"
    },
    {
        primaryColor: "#F9D288",
        secondaryColor: "#FEFAF1"
    },
    {
        primaryColor: "#5DC250",
        secondaryColor: "#F2FAF1"
    },
    {
        primaryColor: "#F48687",
        secondaryColor: "#FDF1F1"
    },
    {
        primaryColor: "#B964F7",
        secondaryColor: "#F3F0FD"
    }
];

const categoryColors = {
    '업무': '#5D93E1',
    '학업': '#F48687',
    '휴식': '#F9D288',
    '기타': '#5DC250'  // Add more categories and their corresponding colors as needed
};

const StyledCard = styled(Card)(({ colorIndex, category }) => ({
    width: 270,
    height: 240,
    boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: categoryColors[category] || '#fff',  // Default color if category is not in categoryColors
    position: 'relative',
    '& .MuiCardHeader-root': {
        backgroundColor: colors[colorIndex % 5].secondaryColor,
        borderRadius: '10px',
        textAlign: 'center',
    },
    '& .MuiCardHeader-content': {
        maxWidth: '80%',
        height: 30,
        padding: '5px',
        fontSize: '14px',
        fontWeight: 500,
    },
    '& .card-top': {
        width: '100%',
        height: '4px',
        backgroundColor: colors[colorIndex % 5].primaryColor,
    },
    '& .actions': {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
    },
    '& .category-chip': {
        marginTop: '10px',
    },
}));

const TaskCard = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <StyledCard colorIndex={index} category={taskObj.Category}>
            <div className="card-top"></div>
            <CardHeader
                title={taskObj.Name}
                className="MuiCardHeader-root"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="MuiCardHeader-content">
                    {taskObj.Description}
                </Typography>
                {taskObj.Category && (
                    <Chip
                        label={taskObj.Category}
                        color="primary"
                        size="small"
                        className="category-chip"
                    />
                )}
            </CardContent>
            <CardActions className="actions">
                <Button size="small" color="primary" onClick={() => setModal(true)}>
                    Edit
                </Button>
                <Button size="small" color="primary" onClick={handleDelete}>
                    Delete
                </Button>
                <Box>
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        color="primary"
                    />
                    Completed
                </Box>
            </CardActions>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </StyledCard>
    );
};

export default TaskCard;
