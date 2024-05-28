import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const SidebarItem = ({ text, icon, href }) => {
    return (
        <ListItem key={text} disablePadding>
            <Link className="w-full" to={href}>
                <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </Link>
        </ListItem>
    )
}

export default SidebarItem
