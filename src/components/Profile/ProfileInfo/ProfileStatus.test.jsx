import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component1111111", () => {
	test("status from props should be in the state222222222", () => {
		const component = create(<ProfileStatus status="it-kama 92 Lesson here" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("it-kama 92 Lesson here");
	});

	test("after creation <input> should be displayed with correct status33333333333", () => {
		const component = create(<ProfileStatus status="it-kama 92 Lesson here" />);
		const root = component.root;


		expect(() => {
			let input = root.findByType("input");
		}).toThrow();
	});

	test("after creation <span> should contains correct status44444444444444444", () => {
		const component = create(<ProfileStatus status="it-kama 92 Lesson here" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("it-kama 92 Lesson here");
	});

	test("input should be displayed in editMode instead of span55555555555555555", () => {
		const component = create(<ProfileStatus status="it-kama 92 Lesson here" />);
		const root = component.root;
		let span = root.findByType("span");
		span.props.onDoubleClick();
		let input = root.findByType("input");
		expect(input.props.value).toBe("it-kama 92 Lesson here");
	});

	test("callback should be called66666666666666666", () => {
		const mockCallback = jest.fn()
		const component = create(<ProfileStatus status="it-kama 92 Lesson here" updateStatusThunk={mockCallback} />);
		const instance = component.getInstance();
		instance.deactiveEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});