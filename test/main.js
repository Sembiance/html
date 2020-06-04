"use strict";
const XU = require("@sembiance/xu");

module.exports = function _main(data, {html, include})
{
	return html`
${include("common/htmlOpen")}
	${include("common/headOpen")}
	${include("common/headClose")}
	${include("common/bodyOpen")}
		${include("common/header")}
		<p id="" class=" " style=" ">Hello, <b class="xyz abc"> World!</b></p><input type="checkbox" checked="checked" value="hi">
		<!-- Just a comment -->
		<ul>
			${data.items.map(item => html`<li style="display: inline; color: green;" class="abc ${item.type}">${item.value}</li>`).join("\n\t\t\t")}
		</ul>
	${include("common/bodyClose")}
${include("common/htmlClose")}`;
};

