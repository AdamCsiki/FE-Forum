import "./Posts.css";
import PostsHeader from "../../components/PostsHeader/PostsHeader";
import Post from "../../components/Post/Post";

function Posts() {
    const posts = [<Post />, <Post />, <Post />, <Post />, <Post />];
    return (
        <>
            <PostsHeader />
            <div className="Posts">
                <div className="posts-content">{posts}</div>
                <div className="posts-footer">
                    <h5 className="nomargin bold">Footer here</h5>
                </div>
            </div>
        </>
    );
}

export default Posts;
