import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import BookItem from "@/components/BookItem";
import Slider from "@/components/Slider";

import useGroups from "@/hooks/useGroups";
import useFilter from "@/hooks/useFilter";

import "./Index.less";

const Index = () => {
	const state = useSelector((s) => s.books);
	const dispatch = useDispatch();

	const list1 = useFilter(state.books, "label", 1);

	const group1 = useGroups(list1, 3);
	const fetchData = useCallback(() => {
		axios.get("/api/v1/books").then((res) => {
			const data = res.data.data.list;
			const action = {
				type: "GET_BOOKS",
				payload: {
					list: data,
				},
			};
			dispatch(action);
		});
	}, [dispatch]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const handleRefresh = () => {
		fetchData();
	};

	return (
		<div className="Demo-content">
			<>
				<h4>
					<span className="Icon-fresh" onClick={handleRefresh}></span>
				</h4>
				{!!group1.length && (
					<>
						<Slider page={group1.length}>
							<ul className="Demo-list">
								{(group1[group1.length - 1].list || []).map((book) => {
									return <BookItem key={book.id} info={book} />;
								})}
							</ul>
							{Object.keys(group1).map((k) => {
								return (
									<React.Fragment key={k}>
										{k !== "length" && (
											<ul className="Demo-list">
												{(group1[k].list || []).map((book) => {
													return <BookItem key={book.id} info={book} />;
												})}
											</ul>
										)}
									</React.Fragment>
								);
							})}
							<ul className="Demo-list">
								{(group1[0].list || []).map((book) => {
									return <BookItem key={book.id} info={book} />;
								})}
							</ul>
						</Slider>
					</>
				)}
			</>
		</div>
	);
};
export default Index;
