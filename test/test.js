"use strict";
const XU = require("@sembiance/xu"),
	assert = require("assert"),
	{HTML} = require("../index.js");

const html = new HTML(__dirname);
assert.strictEqual(html.render("main", {title : "Test Title", items : [{type : "color", value : "red"}, {type : "number", value : 7}]}),
	'<html><head><title>Test Title</title></head><body><h1>Big ole header!</h1><p>Hello, <b class="abc xyz">World!</b></p><input checked type="checkbox" value="hi"><ul><li class="abc color" style="display:inline;color:green">red</li><li class="abc number" style="display:inline;color:green">7</li></ul></body></html>');	// eslint-disable-line max-len

XU.log`SUCCESS!`;
