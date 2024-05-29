import React from 'react'
import Button from '@mui/material/Button'

const DayButton = ({ value, index, toDay, onClick }) => {
    return (
        <div>
            {index === toDay ? (
                <Button variant="contained" size="large">
                    {value}
                </Button>
            ) : (
                <Button variant="contained" size="large" color="inherit" onClick={onClick}>
                    {value}
                </Button>
            )}
        </div>
    )
}

export default DayButton
