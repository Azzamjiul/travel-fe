import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

test("Should not allowed click button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled="true"></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading="true"></Button>);

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
    const { container, getByText } = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> tag", () => {
    const { container, getByText } = render(<Button href="" type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
});