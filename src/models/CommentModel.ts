type CommentModel = {
	id: number;
	parentId: number;
	userId: number;
	karma: number;
	content: string;
};

export default CommentModel;
