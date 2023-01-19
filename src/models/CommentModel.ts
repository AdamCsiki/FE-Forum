type CommentModel = {
	id: number;
	content: string;
	parentId: number | null;
	postId: number;
	userId: number;
};

export default CommentModel;
