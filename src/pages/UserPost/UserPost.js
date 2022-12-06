import "./UserPost.css";
import Input from "../../components/Input/Input";

function UserPost() {
	return (
		<>
			<div className="UserPost">
				<div className="userpost-main">
					<div className="userpost-main-content">
						<div className="userpost-main-user">-User-</div>
						<div className="userpost-main-text">
							Haha text go
							brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
						</div>
						<div className="userpost-main-input">
							<Input style={{ padding: "5px" }} />
						</div>
					</div>
					<div className="userpost-main-votes"></div>
				</div>
			</div>
		</>
	);
}

export default UserPost;
