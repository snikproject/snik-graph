'use strict';

// Cytoscape CSS style file
var style =
{
	"format_version": "1.0",
	"generated_by": "cytoscape-3.4.0",
	"target_cytoscapejs_version": "~2.1",
	"title": "MyStyle1",
	"style": [
		{
			"selector": "node",
			"css":
			{
				"min-zoomed-font-size": 5,
				"width": "mapData(degree,0,39,51,250)",
				"height": "mapData(degree,0,39,51,250)",
				//"height" : 88.5,
				"text-valign": "center",
				"text-halign": "center",
				"border-opacity": 1.0,
				"border-width": 0.0,
				"font-family": "sans-serif",
				"font-weight": "normal",
				"background-opacity": 0.5882352941176471,
				"text-opacity": 1.0,
				"shape": "ellipse",
				'label': function(ele)
				{
					if(ele.data('Labels_EN')&&ele.data('Labels_EN')[0]) {return ele.data('Labels_EN')[0];}
					if(ele.data('Labels_DE')&&ele.data('Labels_DE')[0]) {return ele.data('Labels_DE')[0];}
					if(ele.data('name')) {return ele.data('name');}
					return "UNKNOWN URI, ID"+ele.data('id');
				},
			}
		},
		{
			"selector": "node.source",
			"css":
			{
				"border-width": 5.0,
			}
		},
		{
			"selector": "node.target",
			"css":
			{
				"border-width": 5.0,
			}
		},
		// limit node scaling to prevent huge nodes
		{
			"selector": "node[degree >= 39]",
			"css":
			{
				"font-size": 51
			}
		},
		{
			"selector": "node[degree > 0][degree < 39]",
			"css":
			{
				"font-size": "mapData(degree,0,39,11,51)"
			}
		},
		{
			"selector": "node[degree = 0]",
			"css":
			{
				"font-size": 11
			}
		},
		// degree should always be at least 0, so <0 will only occurr erroneously
		{
			"selector": "node[degree < 0]",
			"css":
			{
				"font-size": 1
			}
		},
		{
			"selector": "node.highlighted",
			"css":
			{
				"border-width": 5.0,
			}
		},
		/* {
		"selector" : "edge",
		"css" : {
		"source-arrow-color" : "rgb(255,255,255)",
		"line-color" : "rgb(255,255,255)",
		"source-arrow-shape" : "none",
		"font-family" : "SansSerif.plain",
		"font-weight" : "normal",
		"content" : "",
		"font-size" : 10,
		"color" : "rgb(0,0,0)",
		"opacity" : 0.29411764705882354,
		"text-opacity" : 1.0,
		"line-style" : "solid",
		"target-arrow-color" : "rgb(255,255,255)",
		"width" : 0.45,
		"target-arrow-shape" : "data(interactionLabel)"
	}
},*/
{
	"selector": "edge[!selected]",
	"css":
	{
		"opacity": 0.5,
		"width": 2.0,
		'label': 'data(interactionLabel)',
		"edge-text-rotation": "autorotate",
		"text-margin-y": "-1em",
		"text-opacity": 0,
		"min-zoomed-font-size": 8,
	}
},
{
	"selector": "edge.selected",
	"css":
	{
		"text-opacity": 1,
		"opacity": 1.0,
		"width": 4.0,
		'label': 'data(interactionLabel)',
		"edge-text-rotation": "autorotate",
		"text-margin-y": "-1em",
	}
},
{
	"selector": "edge.highlighted",
	"css":
	{
		"opacity": 1.0,
		"text-opacity": 1,
		'mid-target-arrow-color': 'rgb(128,255,128)',
		'mid-target-arrow-shape': 'triangle',
		'width': 4.0,
		'label': 'data(interactionLabel)',
		"edge-text-rotation": "autorotate",
		"text-margin-y": "-1em",
	}
}
]
};