/**
 * All CSS properties ordered by categories taken from http://www.w3schools.com/cssref/.
 */

$.fn.cssalias("add", "color", ['color', 'opacity']);

$.fn.cssalias("add", "background", [
		'background', 'background-attachment', 'background-color', 'background-image', 'background-position',
		'background-repeat', 'background-clip', 'background-origin', 'background-size'
	]
);

$.fn.cssalias("add", "border", [
		'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius',
		'border-bottom-style', 'border-bottom-width', 'border-color', 'border-image', 'border-image-outset',
		'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left',
		'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right',
		'border-right-color', 'border-right-style', 'border-right-width', 'border-style', 'border-top',
		'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style',
		'border-top-width', 'border-width', 'box-decoration-break', 'box-shadow'
	]
);

$.fn.cssalias("add", "basicbox", [
		'bottom', 'clear', 'clip', 'display', 'float', 'height', 'left', 'overflow', 'overflow-x', 'overflow-y',
		'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'position', 'right', 'top',
		'visibility', 'width', 'vertical-align',  'z-index'
	]
);

$.fn.cssalias("add", "flexiblebox", [
		'align-content', 'align-items', 'align-self', 'display', 'flex', 'flex-basis', 'flex-direction', 'flex-flow',
		'flex-grow', 'flex-shrink', 'flex-wrap', 'justify-content', 'margin', 'margin-bottom', 'margin-left',
		'margin-right', 'margin-top', 'max-height', 'max-width', 'min-height', 'min-width', 'order'
	]
);

$.fn.cssalias("add", "text", [
		'hanging-punctuation', 'hyphens', 'letter-spacing', 'line-break', 'line-height', 'overflow-wrap', 'tab-size',
		'text-align', 'text-align-last', 'text-indent', 'text-justify', 'text-transform', 'white-space', 'word-break',
		'word-spacing', 'word-wrap'
	]
);

$.fn.cssalias("add", "textdecoration", [
		'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-shadow',
		'text-underline-position'
	]
);

$.fn.cssalias("add", "font", [
		'font', 'font-family', 'font-feature-setting', '@font-feature-values', 'font-kerning', 'font-language-override',
		'font-synthesis', 'font-variant-alternates', 'font-variant-caps', 'font-variant-east-asian', 'font-variant-ligatures',
		'font-variant-numeric', 'font-variant-position', 'font-size', 'font-style', 'font-variant', 'font-weight', '@font-face',
		'font-size-adjust', 'font-stretch'
	]
);

$.fn.cssalias("add", "writingmodes", ['direction', 'text-orientation', 'text-combine-horizontal', 'unicode-bidi', 'writing-mode']);

$.fn.cssalias("add", "table", ['border-collapse', 'border-spacing', 'caption-side', 'empty-cells', 'table-layout']);

$.fn.cssalias("add", "listsandcounters", [
		'counter-increment', 'counter-reset', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type'
	]
);

$.fn.cssalias("add", "animation", [
		'@keyframes', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode',
		'animation-iteration-count', 'animation-name', 'animation-timing-function', 'animation-play-state'
	]
);

$.fn.cssalias("add", "transform", [
		'backface-visibility', 'perspective', 'perspective-origin', 'transform', 'transform-origin', 'transform-style'
	]
);

$.fn.cssalias("add", "transitions", [
		'transition', 'transition-property', 'transition-duration', 'transition-timing-function', 'transition-delay'
	]
);

$.fn.cssalias("add", "basicuserinterface", [
		'box-sizing', 'content', 'cursor', 'icon', 'ime-mode', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up',
		'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'resize', 'text-overflow'
	]
);

$.fn.cssalias("add", "multicolumnlayout", [
		'break-after', 'break-before', 'break-inside', 'column-count', 'column-fill', 'column-gap', 'column-rule',
		'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns',
		'widows'
	]
);

$.fn.cssalias("add", "pagedmedia", ['orphans', 'page-break-after', 'page-break-before', 'page-break-inside']);

$.fn.cssalias("add", "generatedcontentforpagedmedia", ['orphans', 'page-break-after', 'page-break-before', 'page-break-inside']);

$.fn.cssalias("add", "filtereffects", ['filter']);

$.fn.cssalias("add", "imagevaluesandreplacedcontent", [
		'image-orientation', 'image-rendering', 'image-resolution', 'object-fit', 'object-position'
	]
);

$.fn.cssalias("add", "masking", ['mask', 'mask-type']);

$.fn.cssalias("add", "speech", [
		'mark', 'mark-after', 'mark-before', 'phonemes', 'rest', 'rest-after', 'rest-before', 'voice-balance', 'voice-duration',
		'voice-pitch', 'voice-pitch-range', 'voice-rate', 'voice-stress', 'voice-volume'
	]
);

$.fn.cssalias("add", "marquee", [
		'marquee-direction', 'marquee-play-count', 'marquee-speed', 'marquee-style'
	]
);