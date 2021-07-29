import React, {useState, useEffect} from 'react';
import Post from '../components/Post.js';

const Posts = () => {

	const URL = "https://jsonplaceholder.typicode.com/posts";
	const [posts, setPosts] = useState([]);	
	
	useEffect(() => {
		fetch(URL)
		.then((res) => res.json())
		.then((posts)=>setPosts(posts))
	});

	return (
		<div className="posts">
		{
			posts && (posts.map((post)=>{
				return <Post id={post.id} title={post.title} content={post.body} />
			})
			)
		}
		</div>

	)

}

export default Posts;
