import Card from "./Cards/Card";
import { posts } from "../posts";
const Main = () => {
  return (
    <>
      <main className="container">
        <div className="flex-card">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
