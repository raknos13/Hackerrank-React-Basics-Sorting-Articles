import React from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
	const [sortBy, setSortBy] = useState("");
	const [data, setData] = useState(articles);

	function handleSortByUpvotes() {
		const sortedArticles = articles.toSorted((a, b) => a.upvotes < b.upvotes);
		setSortBy("upvotes");
		setData(sortedArticles);
	}
	function handleSortByDate() {
		const sortedArticles = articles.toSorted(
			(a, b) => new Date(a.date) < new Date(b.date)
		);
		setSortBy("date");
		setData(sortedArticles);
	}

	return (
		<div className='App'>
			<h8k-navbar header={title}></h8k-navbar>
			<div className='layout-row align-items-center justify-content-center my-20 navigation'>
				<label className='form-hint mb-0 text-uppercase font-weight-light'>
					Sort By
				</label>
				<button
					data-testid='most-upvoted-link'
					className='small'
					onClick={handleSortByUpvotes}
				>
					Most Upvoted
				</button>
				<button
					data-testid='most-recent-link'
					className='small'
					onClick={handleSortByDate}
				>
					Most Recent
				</button>
			</div>
			<Articles articles={data} />
		</div>
	);
}

export default App;
