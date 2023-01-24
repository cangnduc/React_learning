import React from "react";
export default function Form() {
	const [user, setUser] = React.useState({
		firstname: "",
		lastname: "",
		email: "",
		comment: "",
		isCheck: true,
		employment: "",
		favoriteColor: "",
	});
	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setUser((preUser) => ({
			...preUser,
			[name]: type === "checkbox" ? checked : value,
		}));
	}
	function handleSubmit(event) {
		event.preventDefault();
		console.log(user);
	}
	return (
		<div>
			<form className="user-form" onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					value={user.firstname}
					type="text"
					placeholder="first name"
					name="firstname"
				/>
				<input
					onChange={handleChange}
					value={user.lastname}
					type="text"
					placeholder="last name"
					name="lastname"
				/>
				<input
					onChange={handleChange}
					value={user.email}
					type="email"
					placeholder="email"
					name="email"
				/>
				<textarea
					onChange={handleChange}
					value={user.comment}
					placeholder="type your comment"
					name="comment"
				/>
				<br />
				<div>
					<input
						onChange={handleChange}
						type="checkbox"
						checked={user.isCheck}
						name="isCheck"
						id="isCheck"
					/>
					<label htmlFor="isCheck">is Checked?</label>
				</div>
				<div>
					<input
						name="employment"
						type="radio"
						id="Unemployed"
						checked={user.employment === "Unemployed"}
						value="Unemployed"
						onChange={handleChange}
					/>
					<label htmlFor="Unemployed">Unemployment</label>
				</div>
				<div>
					<input
						name="employment"
						type="radio"
						id="full-time"
						checked={user.employment === "Full-time"}
						value="Full-time"
						onChange={handleChange}
					/>
					<label htmlFor="full-time">Full-time</label>
				</div>
				<div>
					<input
						name="employment"
						type="radio"
						id="part-time"
						checked={user.employment === "Part-time"}
						value="Part-time"
						onChange={handleChange}
					/>
					<label htmlFor="part-time">Part-time</label>
				</div>
				<div>
					<select
						value={user.favoriteColor}
						onChange={handleChange}
						name="favoriteColor">
						<option value="">--Choose--</option>
						<option value="Red">Red</option>
						<option value="green">green</option>
						<option value="blue">blue</option>
					</select>
				</div>
				<br />
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}
