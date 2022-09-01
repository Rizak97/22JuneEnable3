import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(username,password);
    };

    return(
        <>
        <div className='prime'>
            <div className="col-4 card card-body">
            <form onSubmit={printValues}>
            <label className='"form-control"'> Username:</label>
                <input name="username" 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)}/>

            <label className='"form-control"'> Password: </label>
                <input type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
            <br/>
            <button className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
        </>
        
    );
}

export default Login;