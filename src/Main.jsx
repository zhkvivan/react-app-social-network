const Main = () => {
	return (
		<main className="main">
			<div className="profile-bg">
				<img
					src="https://images.unsplash.com/photo-1508240006308-cdd9409a4225?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4950&q=80"
					alt="pfofile-background"
				/>
			</div>
			<div className="user-info">
				<div className="user-avatar">
					<img
						src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80"
						alt="user avatar"
						className="user-avatar-img"
					/>
				</div>
				<div className="user-info-content">
					<h2>Jane Smith</h2>
					<span>Date of birth: 01.01.2000</span>
					<span>hobbies: guitar</span>
					<span className="profile-edit">
						<a href="#">Edit profile</a>
					</span>
				</div>
			</div>
		</main>
	);
};

export default Main;
