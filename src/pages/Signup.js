import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from '../img/blerp.jpg';
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from '../context/auth';

function Signup() {
    const [isSignedUp, setSignedUp] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const { setAuthTokens } = useAuth();

    function postSignup() {
        axios.post('https://www.somePlace/com/auth/signup', {
            userName,
            password,
            repeatPassword
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setSignedUp(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isSignedUp) {
        return <Redirect to='/' />;
    }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input
                    type="username"
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <Input
                    type="password"
                    value={repeatPassword}
                    onChange={e => {
                        setRepeatPassword(e.target.value);
                    }}
                    placeholder="repeat password"
                />
                <Button onClick={postSignup}>Sign Up</Button>
            </Form>
            <Link to="/login">Already have an account?</Link>
            { isError && <Error>There was an error with your information!</Error>}
        </Card>
    );
}

export default Signup;