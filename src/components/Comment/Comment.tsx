import { useState } from "react";
import User from "../../models/UserModel";
import ProfileImage from "../ProfileImage/ProfileImage";
import "./Comment.css";

function PostComment({
	children,
	user,
	content,
	cascadeIndex,
	max,
}: {
	children?: any;
	user: User;
	content?: string;
	cascadeIndex?: number;
	max?: number;
}) {
	return (
		<div className="PostComment">
			<div className="postcomment-main">
				<div className="postcomment-header">
					<ProfileImage />
					<a href="#a">{user.username}</a>
				</div>
				<div className="postcomment-content">
					{content ??
						`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.`}
				</div>
			</div>
			{children ? (
				<div className="postcomment-children">{children}</div>
			) : undefined}
		</div>
	);
}

export default PostComment;
