import { RiDeleteBin5Line } from "react-icons/ri";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin5Line />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hastag">
            {tag}
          </span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post has been reacted by {(post.reactions.likes)} people.
        </div>
      </div>
    </div>
  );
};
export default Post;
