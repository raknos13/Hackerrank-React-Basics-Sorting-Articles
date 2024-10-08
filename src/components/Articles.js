import React from "react";

// Extracted tr for Article entry to a new component
function Article({ title, upvotes, date }) {
	return (
		<tr data-testid='article' key='article-index'>
			<td data-testid='article-title'>{title}</td>
			<td data-testid='article-upvotes'>{upvotes}</td>
			<td data-testid='article-date'>{date}</td>
		</tr>
	);
}

function Articles({ articles }) {
	return (
		<div className='card w-50 mx-auto'>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Upvotes</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{articles.map((article) => {
						return (
							<Article
								key={article.date}
								title={article.title}
								upvotes={article.upvotes}
								date={article.date}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Articles;
