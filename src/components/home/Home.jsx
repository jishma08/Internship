
import React, { useState, useEffect } from 'react';
import { Box, Typography, Link } from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [userId, setUserId] = useState('');
    const [Id, setId] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const whenClicked = (userid, id, title) => {
        setUserId(userid);
        setId(id);
        setTitle(title);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'sans-serif',
                fontSize: '16px',
                background: '#282c34',
                color: '#fff',
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    width: '75%',
                    margin: '1%',
                    backgroundColor: '#1e1e1e',
                    padding: '2vh 2vw',
                    border: '2px solid black',
                    borderRadius: '8px',
                }}
            >
                <Typography variant="h4" sx={{ textAlign: 'center', color: '#61dafb' }}>
                    Blogs
                </Typography>
                <p style={{ color: '#fff' }}>UserId: {userId}</p>
                <p style={{ color: '#fff' }}>Id: {Id}</p>
                <p style={{ color: '#fff' }}>Title: {title}</p>
            </Box>

            <Box
                sx={{
                    width: '75%', // Adjust the width as needed
                    margin: '1%',
                    backgroundColor: '#1e1e1e',
                    padding: '2vh 2vw',
                    border: '2px solid black',
                    borderRadius: '8px',
                    marginTop: '2vh',
                }}
            >
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2vh', color: '#61dafb' }}>
                    Blog Dashboard
                </Typography>
                <nav>
                    <Link href="/home" sx={{ textDecoration: 'none', backgroundColor: '#141414',borderRadius: '10px', marginLeft: '50vw',paddingLeft: '4vw', paddingRight: '4vw', paddingTop: '0.5vh', paddingBottom: '0.5vh' }}>
                        Home
                    </Link>{' '}
                    <Link
                        href="/blogform"
                        sx={{ textDecoration: 'none', backgroundColor: '#141414',borderRadius: '10px', paddingLeft: '3vw', paddingRight: '3vw', paddingTop: '0.5vh', paddingBottom: '0.5vh' }}
                    >
                        Add Blog
                    </Link>
                </nav>
                <ul style={{ listStyleType: 'none', padding: '0', marginTop: '2vh' }}>
                    {blogs.map((blog) => (
                        <li key={blog.id} style={{ borderBottom: '1px solid black', width: '100%' }}>
                            <p>
                                <a onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{ cursor: 'pointer', color: '#61dafb' }}>
                                    {blog.id}.{blog.title}
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default Home;
