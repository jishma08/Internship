// import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent, Link } from '@mui/material';
// import React from 'react'
// import {useNavigate} from 'react-router-dom'

// const BlogForm=()=>{
//     const navigate=useNavigate()

//     return (
//         <Box sx={{display:'flex', justifyContent:'center', marginTop:'20vh'}}>
//             <Box>
//                 <Card sx={{backgroundColor:'ButtonFace', padding:'3vh 3vw', width:'20vw'}}>
//                     <CardContent>
//                         <Typography variant='h3'>Add Blog</Typography>
//                         <Stack style={{width:'100%'}}>
//                             <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
//                             <Input variant='contained' type="text" id="blogName" name="blogName"/>
                            
//                             <InputLabel htmlFor="authorName" sx={{marginTop:'1vh'}}>Author Name:</InputLabel>
//                             <Input variant='contained' type="text" id="authorName" name="authorName"/>

//                             <InputLabel htmlFor="description" sx={{marginTop:'1vh'}}>Description:</InputLabel>
//                             <TextareaAutosize variant='contained' id="description" name="description" minRows={5}></TextareaAutosize>
                                
//                             <Button variant='contained' onClick={()=>{navigate('/home')}} type="submit" sx={{marginTop:'5vh'}}>Submit Blog</Button>
//                         </Stack>
//                     </CardContent>
//                 </Card>
//             </Box>
//         </Box>
//       )
//   }
  
// export default BlogForm


import React from 'react';
import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: '#282c34',
            }}
        >
            <Card sx={{ backgroundColor: '#1e1e1e', padding: '4vh 4vw', width: '30vw', borderRadius: '16px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)' }}>
                <Stack style={{ width: '100%' }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2vh', color: '#61dafb', fontFamily: 'Arial, sans-serif' }}>
                        Add Blog
                    </Typography>

                    <InputLabel htmlFor="blogName" sx={{ color: '#61dafb', marginBottom: '1vh', fontFamily: 'Arial, sans-serif' }}>
                        Blog Name:
                    </InputLabel>
                    <Input
                        variant="contained"
                        type="text"
                        id="blogName"
                        name="blogName"
                        sx={{ marginBottom: '2vh', borderRadius: '8px' }}
                    />

                    <InputLabel htmlFor="authorName" sx={{ color: '#61dafb', marginBottom: '1vh', fontFamily: 'Arial, sans-serif' }}>
                        Author Name:
                    </InputLabel>
                    <Input
                        variant="contained"
                        type="text"
                        id="authorName"
                        name="authorName"
                        sx={{ marginBottom: '2vh', borderRadius: '8px' }}
                    />

                    <InputLabel htmlFor="description" sx={{ color: '#61dafb', marginBottom: '1vh', fontFamily: 'Arial, sans-serif' }}>
                        Description:
                    </InputLabel>
                    <TextareaAutosize
                        variant="contained"
                        id="description"
                        name="description"
                        minRows={5}
                        sx={{ marginBottom: '2vh', borderRadius: '8px', resize: 'none'}}
                    />

                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate('/home');
                        }}
                        sx={{
                            backgroundColor: '#61dafb',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#4285f4',
                            },
                            borderRadius: '8px',
                            marginTop: '2vh'
                        }}>Submit Blog</Button>

                    <Link href="/home" sx={{ color: '#61dafb', marginTop: '2vh', fontFamily: 'Arial, sans-serif', textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                        Back to Home
                    </Link>
                </Stack>
            </Card>
        </Box>
    );
};

export default BlogForm;
