const Card = ({ post }) => {
  return (
    <>
      {post.published && (
        <div className="post-card">
          <figure className="post-card-image">
            <img
              src={post.image || "https://placehold.co/600x400/png"}
              alt="Post"
            />
          </figure>
          <div className="post-card-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="divTag">
              <small>
                <strong>Tags: </strong>
                {post.tags.map((tag, index) => (
                  <span key={index} className={`tag ${tag}`}>
                    #{tag}
                  </span>
                ))}
              </small>
            </div>
            <button>LEGGI DI PIÙ</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
