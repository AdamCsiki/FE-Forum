import "./PostsHeader.css";
import { ArrowClockwise, FunnelFill } from "react-bootstrap-icons";
import Input from "../../components/Input/Input";

function PostsHeader() {
    return (
        <div className="posts-header">
            <ArrowClockwise
                size={40}
                color={"var(--third-color)"}
                stroke={"bold"}
            />
            <Input
                placeholder={"Search"}
                style={{ width: "65%" }}
            />
            <FunnelFill
                size={40}
                color={"var(--third-color)"}
                stroke={"bold"}
            />
        </div>
    );
}
export default PostsHeader;
