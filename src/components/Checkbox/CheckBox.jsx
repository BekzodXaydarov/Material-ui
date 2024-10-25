import { Favorite, LinkedCamera } from '@mui/icons-material';
import { FormControlLabel, FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const CheckBoxUsage = () => {
    return (
        <>
            {/* Basic chechboxs */}
            {/* <Checkbox  defaultChecked />
            <Checkbox  />
            <Checkbox  disabled />
            <Checkbox  disabled checked /> */}

            {/* Label */}
            {/* <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup> */}

            {/* Icon */}
            {/* <Checkbox icon={<Favorite />} checkedIcon={<LinkedCamera />} /> */}
            {/* <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
            /> */}

            {/* Colors */}
            {/* <Checkbox defaultChecked />
            <Checkbox defaultChecked color="secondary" />
            <Checkbox defaultChecked color="success" />
            <Checkbox defaultChecked color="default" /> */}
        </>
    )
}

export default CheckBoxUsage