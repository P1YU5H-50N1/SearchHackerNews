import React, { useEffect, useState, ReactFragment as Fragment } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Article from "../components/Article";
import { Markup } from "interweave";

const PostDetail = () => {
	const { id } = useParams();
	const hackerNewsAPI = `http://hn.algolia.com/api/v1/items/${id}`;
	const [article, setArticle] = useState([]);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [response, setResponse] = useState([]);

	useEffect(() => {
		axios.get(hackerNewsAPI).then((res) => {
			setArticle(res.data.children);
			setTitle(res.data.title);
			setAuthor(res.data.author);
			setResponse(res.data);
		});
	}, []);

	return (
		<div className="container">
			<h1>{article.length ? title : "Loading..."}</h1>
			<Link className="link"to="/">Back To Home</Link>
			<Article article={response} margin={0} />
		</div>
	);
};

export default PostDetail;
