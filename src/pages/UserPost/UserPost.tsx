import "./UserPost.css";
import Comment from "../../components/Comment/Comment";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Button from "../../components/Button/Button";
import InvisButton from "../../components/InvisButton/InvisButton";
import TextArea from "../../components/TextArea/TextArea";
import useAxios from "../../hooks/useAxios";
import UserModel from "../../models/UserModel";
import PostModel from "../../models/PostModel";

function UserPost({
	title,
	author,
	content,
}: {
	title?: string;
	author?: string;
	content?: string;
}) {
	const {
		response: commentsResponse,
		error: commentsError,
		loading: commentsLoading,
		fetchData: commentsFetchData,
	} = useAxios();

	return (
		<div className="UserPost">
			<div className="userpost-main">
				<div className="userpost-main-content">
					<div className="userpost-main-header">
						<ProfileImage />
						{author ?? "No user"}
					</div>
					<h4 className="userpost-title-text nomargin">
						{title ?? "No title"}
					</h4>
					<div className="userpost-main-text"></div>
					<div className="userpost-reply-container">
						<InvisButton>
							<h6 className="nomargin pad">Reply</h6>
						</InvisButton>

						<TextArea />
						<div className="userpost-reply-footer"></div>
					</div>

					<div className="userpost-comment-container"></div>
				</div>
			</div>
		</div>
	);
}

export default UserPost;
