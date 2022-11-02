import "./Post.css";
import { Link } from "react-router-dom";

function Post({ title, author, replies, votes }) {
    return (
        <div className="Post">
            <div className="post-header">
                <Link
                    to={{ pathname: "/post" }}
                    style={{ textDecoration: "none" }}
                >
                    <h5 className="nomargin bold post-title">
                        {title ?? "None"}
                    </h5>
                </Link>

                <h6 className="nomargin bold">{votes ?? 0}+</h6>
            </div>
            <div className="post-content">
                <Link
                    to={{ pathname: "/author" }}
                    style={{ textDecoration: "none" }}
                >
                    <span className="nomargin medium post-author">
                        Author: {author ?? "No one"}
                    </span>
                </Link>

                <small className="nomargin post-replies bold">
                    Replies: {replies ?? 0}
                </small>
            </div>
        </div>
    );
}

export default Post;
