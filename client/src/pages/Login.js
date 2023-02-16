import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">

        <div>
            <img href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcafe&psig=AOvVaw3kaeEAgSZuoeakRHp6FviW&ust=1676622929421000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKDKzaLRmf0CFQAAAAAdAAAAABAg">
            </img>
        </div>
        <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Create Account</Link>
        </div>
      </div>
 )
 };