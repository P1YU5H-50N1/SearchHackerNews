import React from "react";
import { Link } from "react-router-dom";

const ArticlePreview = ({ author, title, id }) => {
	return (
		<Link to={`/${id}`}>
			<div className="preview">
				<div className="preview-title">{title}</div>
				<div className="author">
					<i> Author: {author}</i>
				</div>
			</div>
		</Link>
	);
};

export default ArticlePreview;
