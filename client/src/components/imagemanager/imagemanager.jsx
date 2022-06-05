import React from 'react';
import './imagemanager.css';
import user from '../../assets/img/user.svg';
import auth from '../../services/authService';
import { FormGroup, FormHelperText, Paper } from '@mui/material';
import background from "../../assets/img/blue.svg";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link, NavLink } from 'react-router-dom';
import ImageList from '../imagelist';

class ImageManager extends React.Component{
    state = {
        user: {}
    }
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user })
    }
    render(){
        return (
            <div className='body'>
                <Container fixed maxWidth="sm" sx={{height: 100}}></Container>
                <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E5E5E5', minHeight: '80%', maxHeight:'150%', borderRadius: 4, paddingBottom: 3, marginLeft: 20, marginRight: 20,marginBottom: 10}}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ background: '#86C6F4', minHeight: '20%', maxHeight: '50%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Box gridColumn="span 6" sx={{ padding: 5 }}>
                            <img src={user} className='image-icon' />
                            <span style={{ margin: '25px', fontSize:'25px', verticalAlign: 'super', fontWeight: 'bold' }}>Software Eng</span>
                        </Box>
                        <Box gridColumn="span 6" sx={{ paddingTop: 5 }}>
                            <Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%', marginLeft: '0.1%'}}>Password Manager</Button>
                            <Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%' }}>Image Manager</Button>
                            <Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%' }}>Logout</Button>
                        </Box>
                    </Box>
    
                    <h1 style={{ textAlign: 'center', paddingTop: 15 }}>Image Manager</h1>
    
                    <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E1E1E1', minHeight: '20%', maxHeight:'50%', paddingBottom: 5, borderRadius: 4, marginTop: 5, marginLeft: 5, marginRight: 5}}>
                        <p>Images currently encrypted: </p>
                        <ImageList />
                    </Box>

                    <Link to='/addimage'><Button type="submit" className='add_btn' style={{left:'100px'}}>Add</Button></Link>
                </Box>
                
            </div>
        )
    }
}

export default ImageManager