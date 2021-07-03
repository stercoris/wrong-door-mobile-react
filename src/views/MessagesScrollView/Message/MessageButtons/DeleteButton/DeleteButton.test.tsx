import React from "react";
import * as ShallowRenderer from "react-test-renderer/shallow";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { DeleteMessageButton } from "./DeleteButton";

const mocks: readonly MockedResponse<Record<string, any>>[] | undefined = [];

describe("<DeleteMessageButton />", () => {
	it("idk wtf is this", () => {
		const renderer = ShallowRenderer.createRenderer();

		renderer.render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<DeleteMessageButton id={5} />
			</MockedProvider>
		);

		// expect(tree.children.length).toBe(1);
	});
});
