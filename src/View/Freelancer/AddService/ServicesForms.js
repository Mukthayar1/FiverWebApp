import * as React from 'react';

import Visibility from '@mui/icons-material/Visibility';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {
    Typography,
    TextareaAutosize,
    TextField,
    InputLabel,
    Button,
    Input,
    Box,
    FormControl,
    MenuItem,
    Select,
    Chip,
    useTheme
} from '@mui/material';
import { AddServices } from '../../../store/action/AddData';
import useAuth from '../../../util/Contex/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',

};
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function ServiceForms({ ServiceType, onCloseModal }) {

    const [imageurl, Setimageurl] = React.useState()
    const [values, setValues] = React.useState({
        title: '',
        type: ServiceType,
        charges: '',
        description: '',
    });

    let name;
    let value;
    const getUserDate = (event) => {
        event.preventDefault()
        name = event.target.name;
        value = event.target.value;
        setValues({ ...values, [name]: value });

    }

    const RestForm = () => {
        setValues({
            title: '',
            type: ServiceType,
            charges: '',
            description: '',
        })
    }

    let { auth } = useAuth()




    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", marginTop: 5 }}>
            <Typography variant="body2">
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 2 },
                }}>
                    <TextField
                        label="Service Title"
                        type="Text"
                        name="title"
                        onChange={getUserDate}
                    />
                    <TextField
                        label='Services Type'
                        type='Text'
                        name="STime"
                        value={values?.type?.name}
                        contentEditable={false}
                    />

                    <TextField
                        label='Total Charges'
                        type='number'
                        name="charges"
                        onChange={getUserDate}
                    />

                </Box>
                {/* <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 2 },
                    }}>
                        <TextField
                            label="Urgent Hiring"
                            type="Text"
                            name="aDate"
                        />
                    </Box> */}
                <Item>
                    <InputLabel htmlFor="standard-adornment-amount">Job Describe</InputLabel>
                    <TextareaAutosize
                        type='text'
                        name="description"
                        minRows={10}
                        style={{ width: 700, padding: 20 }}
                        onChange={getUserDate}
                    />
                </Item>


                <input
                    type='file'
                    style={{ marginTop: 10 }}
                    onChange={(e) => Setimageurl(e.target.files[0])} accept="image/png, image/gif, image/jpeg"
                />

                <Button variant="contained"
                    onClick={() => AddServices(values, RestForm, onCloseModal, imageurl, auth)}
                    style={{ justifyContent: "center", alignSelf: "center", marginTop: 20, marginBottom: 20, width: "100%" }} >
                    Add Services
                </Button>
            </Typography>

        </Box>
    );
}