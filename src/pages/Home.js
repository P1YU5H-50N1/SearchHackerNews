import React, { useState } from "react";
import axios from "axios";
import ArticlePreview from "../components/ArticlePreview";
const Home = () => {
	const hackerNewsAPI = "http://hn.algolia.com/api/v1/search?query=";
	const [query, setQuery] = useState("");
	const [news, setNews] = useState([]);
	const [currentPage, setPage] = useState(null);
	const onSearch = (e) => {
		e.preventDefault();
		console.log(query);
		axios.get(`${hackerNewsAPI}${query}`).then((res) => {
			setPage(res.data.page);
			setNews(res.data.hits);
		});
		console.log(news);
	};
	return (
		<div>
			Home
			<form onSubmit={onSearch}>
				<input
					onChange={(e) => setQuery(e.target.value)}
					type="text"
				></input>
				<button type="Submit">Submit</button>
			</form>
			<div>
				{news.map(({ author, title, objectID }, idx) => (
					<ArticlePreview
						key={idx}
						id={objectID}
						author={author}
						title={title}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
