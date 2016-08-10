var style = [
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
				"font-size": 5,
				"border-color": "rgb(255,255,255)",
				"width": "mapData(Degree,0,39,51,250)",
				"height": "mapData(Degree,0,39,51,250)",
				//"height" : 88.5,
				"color": "rgb(0,0,0)",
				"text-valign": "center",
				"text-halign": "center",
				"border-opacity": 1.0,
				"border-width": 0.0,
				"background-color": "rgb(254,196,79)",
				"font-family": "SansSerif.plain",
				"font-weight": "normal",
				"background-opacity": 0.5882352941176471,
				"text-opacity": 1.0,
				"shape": "ellipse",
				"content": "data(Labels)"
			}
		},

		{
			"selector": "node[Sources='both']",
			"css":
			{
				"color": "rgb(255,153,255)",
				"background-color": "rgb(255,153,0)",
				"border-width": 0
			}
		},
		{
			"selector": "node[Sources='ob']",
			"css":
			{
				"color": "rgb(255,153,0)",
				"background-color": "rgb(255,153,0)",
				"border-width": 0
			}
		},
		{
			"selector": "node[Sources = 'bb']",
			"css":
			{
				"color": "rgb(0,102,0)",
				"background-color": "rgb(0,102,204)",
				"border-width": 0
			}
		},
		{
			"selector": "node[Degree >= 39]",
			"css":
			{
				"font-size": 51
			}
		},
		{
			"selector": "node[Degree > 0][Degree < 39]",
			"css":
			{
				"font-size": "mapData(Degree,0,39,11,51)"
			}
		},
		{
			"selector": "node[Degree = 0]",
			"css":
			{
				"font-size": 11
			}
		},
		{
			"selector": "node[Degree < 0]",
			"css":
			{
				"font-size": 1
			}
		},
		{
			"selector": "node:selected",
			"css":
			{
				"background-color": "rgb(255,255,0)"
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
		    "target-arrow-shape" : "data(interaction)"
		  }
		},*/
		{
			selector: 'node',
			style:
			{
				'label': 'data(Labels)',
				'color': 'white'
			}
		},
		{
			"selector": "edge[!selected]",
			"css":
			{
				"opacity": 0.5,
				"width": 2.0,
				'label': 'data(interaction)',
				"edge-text-rotation": "autorotate",
				"text-margin-y": "-1em",
				"text-opacity": 0,
				"min-zoomed-font-size": 8,
			}
		},
		{
			"selector": "edge:selected",
			"css":
			{
				"text-opacity": 1,
				"opacity": 1.0,
				"color": "rgb(255,255,128)",
				"width": 4.0,
				"line-color": "rgb(255,255,128)",
				'label': 'data(interaction)',
				"edge-text-rotation": "autorotate",
				"text-margin-y": "-1em",
			}
		},
	]
}];