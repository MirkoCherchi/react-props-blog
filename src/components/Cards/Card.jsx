const Card = ({ post }) => {
  return (
    <div className="post-card">
      <figure className="post-card-image">
        <img src={post.image} alt="Post" />
      </figure>
      <div className="post-card-content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div>
          <small>
            <strong>Tags: </strong>
            {post.tags.join(" - ")}
          </small>
        </div>
        <button>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
};

export default Card;
