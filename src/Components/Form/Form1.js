import React from "react";

export default function Form1() {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
        confirmPassword: "",
        newsletter : false
	});
	function handleChange(event) {
		setUser(() => {
            const {name, value, type,checked} = event.target
			return {
				...user,
				[name]: type==="checkbox"? checked : value
			};
		});
	}
	const [message, setMessage] = React.useState("")
    function handleSubmit(event) {
		event.preventDefault();
        setMessage(user.password === user.confirmPassword? "Thanks for Register" : "your password does not math" )
        console.log(user.newsletter)
        
    }
    
	return (
		<div className="form1">
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					value={user.email}
					id="email"
					onChange={handleChange}
					placeholder="Email Address"
				/>
				<br />
				<input
					placeholder="Password"
					type="password"
					name="password"
					value={user.password}
					id="password"
					onChange={handleChange}
				/>
                <br />
				<input
					placeholder="Confirm Password"
					type="password"
					name="confirmPassword"
					value={user.confirmPassword}
					id="confirmPassword"
					onChange={handleChange}
				/>
				<br />
                <input onChange={handleChange} type='checkbox' checked={user.newsletter} name ="newsletter" id="newsletter" />
                <label htmlFor="newsletter">subcribe for the newsletter</label>
                <br />
				<button>Submit</button>
			</form>
            <div>{message}</div>
		</div>
	);
}
