import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { PostCard } from ".";
import { PostCardPropsMock } from "./mock";

const props = PostCardPropsMock;

describe("PostCard", () => {
    it("should render PostCard correctly", () => {
      render(<PostCard {...props}/>);

      expect(screen.getByAltText(/title1/))
      .toHaveAttribute('src', props.cover);
      expect(screen.getByRole('heading', {name: /title1/}))
      .toBeInTheDocument();
      expect(screen.getByText(/body1/))
      .toBeInTheDocument();
    });

    it("should macth snapshot", () => {
        const {container} = render(<PostCard {...props}/>);
        expect (container.firstChild).toMatchSnapshot();
    });
})
