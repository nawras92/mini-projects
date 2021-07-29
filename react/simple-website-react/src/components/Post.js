import React from 'react';

const Post = (props) => {
	return (
		<div className="post" id={props.id}>
			<h3 className="post-title">
				{props.title}
			</h3>
			<p className="post-content">
				{props.content}
			</p>
		</div>
	)
}

export default Post;
