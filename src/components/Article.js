import React from "react";
import { Interweave } from "interweave";

const Article = ({ article, margin }) => {
	const hasChildren = article.children && article.children.length;
	return (
		<div style={{ marginLeft: margin }}>
			{article.text && (
				<div className="comment">
					<Interweave content={article.text} />
				</div>
			)}
			<div className="author">
				<i>
					Author: {article.author} | Points: {article.points}
				</i>
			</div>
			{hasChildren
				? article.children.map((child_article, idx) => {
						return (
							<Article
								article={child_article}
								key={idx}
								margin={margin < 60 ? margin + 10 : margin}
							/>
						);
				  })
				: null}
		</div>
	);
};

export default Article;
