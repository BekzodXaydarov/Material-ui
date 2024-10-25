import { Typography } from '@mui/material'
import React from 'react'

const TypographyUsage = () => {
    return (
        <div>
            {/* h1 */}
            <Typography variant='h1'>h1</Typography>
            <Typography variant='h2'>h2</Typography>
            <Typography variant='h3'>h3</Typography>
            <Typography variant='h4'>h4</Typography>
            <Typography variant='h5'>h5</Typography>
            <Typography variant='h6'>h6</Typography>

            {/* Subtitle */}
            <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>

            {/* Button */}
            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                button text
            </Typography>
            <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                caption text
            </Typography>
            <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                overline text
            </Typography>
        </div>
    )
}

export default TypographyUsage