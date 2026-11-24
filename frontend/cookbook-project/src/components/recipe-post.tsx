import { useEffect, useState } from "react";

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

interface PostId {
    postId: number;
}

function RecipePost({ postId }: PostId) {

    const [userPost, setUserPost] = useState<UserPost>();
    
      // FETCH USER POSTS
      useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:5000/api/recipes/${postId}`);
            console.log("Post Response:", response);
            
            if (!response.ok) throw new Error();

            const post = await response.json() as UserPost;
            setUserPost(post);
          } catch (err) {
            console.error("ERROR:", err);
          }
        };
    
        fetchPosts();
      }, []);

      useEffect(() => {
        console.log("USER POST:", userPost);
      }, [userPost])
    return (
        <div>
            <p>{userPost?.recipe_name}</p>
            <p>By: {userPost?.author_username}</p>
        </div>
    )
}

export default RecipePost;