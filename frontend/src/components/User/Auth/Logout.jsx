const Logout = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>RearAyur</h1>
				<button className="whitebtn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Logout;