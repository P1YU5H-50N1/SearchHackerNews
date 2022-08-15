import React from "react";
import { Interweave } from "interweave";

const Article = ({ article, margin }) => {
	const hasChildren = article.children && article.children.length;
	return (
		<div style={{ marginLeft: margin }}>
			<Interweave content={article.text} />
			<div>
				<i>Author: {article.author}</i>
			</div>
			{hasChildren
				? article.children.map((child_article, idx) => {
						return (
							<Article
								article={child_article}
								key={idx}
								margin={margin + 40}
							/>
						);
				  })
				: null}
		</div>
	);
};

export default Article;
