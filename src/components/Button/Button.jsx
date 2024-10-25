import React from 'react'
import { Button, ButtonGroup, IconButton } from '@mui/material'
import { Delete, Save, Send } from "@mui/icons-material"
import LoadingButton from "@mui/lab/LoadingButton"

const ButtonUsage = () => {
    return (
        <div>
            {/* Variants */}
            {/* <Button variant='contained'>Contained</Button>
            <Button variant='text'>Text</Button>
            <Button variant='outlined'>Outlined</Button>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href='#'>Link</Button> */}


            {/* Colors */}
            {/* <Button color='secondary' variant='text'>Secondary</Button>
            <Button color='success' variant='contained'>Success</Button>
            <Button color='error' variant='outlined'>Error</Button> */}


            {/* Sizes */}
            {/* <Button variant='text' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='outlined' size='large'>Large</Button> */}


            {/* add Icons */}
            {/* <Button variant='outlined' color='error' startIcon={<Delete />}>Delete</Button>
            <Button variant='contained' endIcon={<Send />}>Send</Button> */}


            {/* Icon buttons */}
            {/* <IconButton>
                <Delete />
            </IconButton>
            <IconButton disabled>
                <Delete />
            </IconButton> */}


            {/* Experimental Api */}
            {/* <LoadingButton loading variant='outlined'>
                Submit
            </LoadingButton>
            <LoadingButton loading loadingIndicator="Loading..." variant='contained'>
                FetchData
            </LoadingButton>
            <LoadingButton
            variant='contained'
            loading
            loadingPosition='start'
            startIcon={<Save />}
            >   
                Save
            </LoadingButton> */}

            {/* Button Group */}
            {/* <ButtonGroup variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}


            {/* Button Group variant */}
            {/* <ButtonGroup variant='text'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}

            {/* Button Group size */}
            {/* <ButtonGroup size="small" aria-label="Small button group">
                <Button>One</Button>
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="Medium-sized button group">
                <Button>Two</Button>
            </ButtonGroup>
            <ButtonGroup size="large" aria-label="Large button group">
                <Button>Three</Button>
            </ButtonGroup> */}


            {/* Orientation */}
            {/* <ButtonGroup orientation="vertical">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <ButtonGroup orientation="horizontal">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
        </div>
    )
}

export default ButtonUsage