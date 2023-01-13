import { useEffect } from "react";
import PostComment from "../components/Comment/Comment";

function CommentGenerator({ commentArray }) {
	const commentModel = {
		id: 0,
		userId: 0,
		postId: 0,
		parentId: 0,
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.`,
	};

	const commentObjects = [];

	const convertCommentToObject = (commentJson) => {
		commentObjects.push(
			<PostComment
				user={commentJson.userId}
				content={commentJson.content}
			/>
		);
	};

	useEffect(() => {}, []);

	return <div></div>;
}
