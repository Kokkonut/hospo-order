import { Link } from 'react-router-dom';



function LoginMain() {

  return (
    <div className="container">


      <h2>Login</h2>
      <form 
    //   onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            // onChange={handleChange}
          />
        </div>
        {/* {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null} */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>    
        <Link to="/">← Go back to Signup</Link>
    </div>
  );
}

export default LoginMain;
