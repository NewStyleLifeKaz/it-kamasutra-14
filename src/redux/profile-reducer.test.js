import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
	posts: [
		{ id: 1, message: "1 Privet", LikesCount: 12 },
		{ id: 2, message: "2 Poka", LikesCount: 11 },
		{ id: 3, message: "3", LikesCount: 1 },
		{ id: 4, message: "4", LikesCount: 344 },
		{ id: 5, message: "5", LikesCount: 555 },
		{ id: 6, message: "6", LikesCount: 667 },
	]
};

test('Length should show me STAR-CRAFT', () => {
	//1.TEST data

	let action = addPostActionCreator('IT-StarCraft Forever')
	//2.action
	let newState = profileReducer(state, action)
	//3.TEST expectation
	expect(newState.posts.length).toBe(7);
});

test('after deleting lenght should be decrement', () => {
	//1.TEST data

	let action = deletePost(1)
	//2.action
	let newState = profileReducer(state, action)
	//3.TEST expectation
	expect(newState.posts.length).toBe(5);
});
test('after deleting lenght should be decrement', () => {
	//1.TEST data

	let action = deletePost(1223)
	//2.action
	let newState = profileReducer(state, action)
	//3.TEST expectation
	expect(newState.posts.length).toBe(6);
});