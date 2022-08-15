import React, { useState } from "react";
import axios from "axios";
import ArticlePreview from "../components/ArticlePreview";
const Home = () => {
	const hackerNewsAPI = "http://hn.algolia.com/api/v1/search?query=";
	const [query, setQuery] = useState("");
	const [news, setNews] = useState([]);
	const [currentPage, setPage] = useState(0);
	const getData = () => {};
	const onSearch = (e) => {
		e.preventDefault();
		if (currentPage != 0) {
			return;
		}
		console.log(query);
		axios
			.get(`${hackerNewsAPI}${query}&page=${currentPage}&hitsPerPage=50`)
			.then((res) => {
				setPage(res.data.page);
				setNews(res.data.hits);
			});
		console.log(news);
	};
	const nextPage = (e) => {
		e.preventDefault();
		setPage(currentPage + 1);
		setNews([]);
		axios
			.get(`${hackerNewsAPI}${query}&page=${currentPage}`)
			.then((res) => {
				setPage(res.data.page);
				setNews(res.data.hits);
			});
	};
	return (
		<div className="container">
			<h3>Search Hacker News</h3>
			<div className="search">
				<form onSubmit={onSearch}>
					<input
						onChange={(e) => setQuery(e.target.value)}
						type="text"
					></input>
					<button type="Submit">Submit</button>
				</form>
			</div>
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
			<button onClick={nextPage}>NextPage</button>
		</div>
	);
};

export default Home;
