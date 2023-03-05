import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setLogin, loginFetch, setLoading } from '../features/auth/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../helpers/lang';


export default function SignInForm() {
  const router = useRouter();
  const dispatch = useDispatch()
  const { login, errors, isFetching, isSuccess, isError, successMessage, errorMessage } = useSelector(state => state.login)

  useEffect (() => {
    console.log('local', localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
        router.push('/address-list');
    }
  }, [])

  const handleLoginProcess = async () => {
    dispatch(setLoading())
    console.log('passing data', login);
    await dispatch(loginFetch(login))
    if (localStorage.getItem('token')) {
        console.log('redirecting');
        router.push('/address-list');
    }
    console.log('not red', localStorage.getItem('token'));
  }

  return (
    <>
      <h1 className="display-4 text-center mb-3">{getMessage('Sign in')}</h1>
      <p className="text-muted text-center mb-5">{getMessage('Free access to our dashboard')}</p>
      <form>
        <div className="form-group">
          <Form.Label>{getMessage('Email Address')}</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="name@address.com" 
            onChange={(e) => dispatch(setLogin({ email: e.target.value }))} />
        </div>
        <div className="form-group">
          <Row>
            <Col>
              <Form.Label>{getMessage('Password')}</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Text 
                as={Link} 
                className="small text-muted" 
                href="/password-reset"
                >
                {getMessage('Forgot password')}
              </Form.Text>
            </Col>
          </Row>
          <InputGroup className="input-group-merge">
            <Form.Control 
                type="password" 
                placeholder={getMessage('Enter your password')} 
                onChange={(e) => dispatch(setLogin({ password: e.target.value }))}
              />
            <InputGroup.Text>
              <FeatherIcon icon="eye" size="1em" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <Button 
          size="lg" 
          className="w-100 mb-3"
          onClick={() => handleLoginProcess()}
          >
          {getMessage('Sign in')}
        </Button>   
        <p className="text-center">
          <small className="text-muted text-center">
            {getMessage('Dont have an account yet')} <Link href="/sign-up">{getMessage('Sign up')}</Link>.
          </small>
        </p>
      </form>
    </>
  );
}
