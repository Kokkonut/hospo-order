import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import {  } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { Link } from "react-router-dom";
import { CaretLeftOutlined } from '@ant-design/icons';

export default function History() {

   return (
    
        <Link to="/profile" ><CaretLeftOutlined /></Link>
        
   )
};