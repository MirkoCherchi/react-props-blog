// Main.jsx

import Card from "./Cards/Card";
import { posts } from "../posts";
import Tags from "./Tags/Tags";

const Main = () => {
  const uniqueTags = [...new Set(posts.flatMap((post) => post.tags))];

  return (
    <main className="container">
      <Tags tags={uniqueTags} />
      <div className="flex-card">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Main;
