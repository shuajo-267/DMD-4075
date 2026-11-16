import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  measure: string;
}

interface Instruction {
  id: number;
  name: string;
}

interface Allergen {
  name: string;
}

interface Category {
  name: string;
}

interface DietTag {
  name: string;
}

interface UserPost {
  id: number;
  recipe_name: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  allergens: Allergen[];
  categories: Category[];
  dietary_tags: DietTag[];
  description: string;
  author_id: number;
  author_username: string;
}

function ExplorePage() {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  // FETCH USER POSTS
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/recipes");
        console.log("Response:", response);

        if (!response.ok) throw new Error();

        const posts = await response.json();
        console.log("User Posts:", posts);
        setUserPosts(posts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <header>
        <Navbar />
        <h1>This is the explore page</h1>
      </header>
      <main>
        <section>
          <h2>Recently added</h2>
          <div id="added-posts">
            {userPosts.map((post: UserPost) => {
              return (
                <div>
                  <ul>
                    <li key={post.id}>{post.recipe_name}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ExplorePage;
