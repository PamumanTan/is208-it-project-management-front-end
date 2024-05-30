import React from 'react'
import Modal from '../Modal'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SubTeacherModal({ names, value, open, onClose, onSubmit }) {
    const [personName, setPersonName] = React.useState([])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        )
    }
    return (
        <Modal
            title={'Chọn giáo viên dạy thay'}
            open={open}
            onClose={onClose}
            buttons={
                <>
                    <Button variant="contained" onClick={onClose} color="error">
                        Hủy
                    </Button>
                    <Button variant="contained" onClick={onSubmit}>
                        Xác nhận
                    </Button>
                </>
            }
        >
            <div>
                <p className="p-4">Tiết: {value?.lessonNum}</p>
                <p className="p-4">Môn học: {value?.class.className}</p>
                <p className="p-4">Lớp: {value?.subject.subjectName}</p>
                <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-name-label">Giáo viên</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Name" />}
                            // MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    // style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </Modal>
    )
}
