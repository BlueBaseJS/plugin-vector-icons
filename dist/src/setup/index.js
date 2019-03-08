"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = (iconPath, fontName) => {
    const iconFontStyles = `@font-face {
		src: url(${iconPath});
		font-family: ${fontName};
	}`;
    // Create stylesheet
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = iconFontStyles;
    }
    else {
        style.appendChild(document.createTextNode(iconFontStyles));
    }
    // Inject stylesheet
    document.head.appendChild(style);
};
//# sourceMappingURL=index.js.map