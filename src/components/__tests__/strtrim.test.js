import React from "react";
import ReactDOM from "react-dom"
import SearchContainer from "../searchcontainer/SearchContainer"
import { shallow } from "enzyme";

const removeNonAlphaNumericChars = (queryString) => {
    let queryStringtrimmed = queryString.replace(/[^a-zA-Z0-9\s+]+/g, "");
    return queryStringtrimmed;
}


test("test trimming1", () => {
    expect(removeNonAlphaNumericChars("hello world")).toBe("hello world");
})
test("test trimming2", () => {
    expect(removeNonAlphaNumericChars("hello%world")).toBe("helloworld");
})

test("test trimming3", () => {
    expect(removeNonAlphaNumericChars("“!hello world")).toBe("hello world");
})

test("test trimming4", () => {
    expect(removeNonAlphaNumericChars(";hello?world!")).toBe("helloworld");
})

test("test trimming5", () => {
    expect(removeNonAlphaNumericChars("hello;world")).toBe("helloworld");
})
test("test trimming5", () => {
    expect(removeNonAlphaNumericChars("hello world?")).toBe("hello world");
})


