/** Populates the buttons on the top bar
@module */
import * as graph from "./graph.js";
import * as layout from "./layout.js";
import * as rdfGraph from "./rdfGraph.js";
import * as language from "./lang/language.js";

const buttonConfigs =
[
  [language.getString("recalculateLayout"),"recalculateLayout", ()=>layout.run(graph.cy,layout.euler,rdfGraph.subs())],
  [language.getString("resetView"),"resetView", graph.resetStyle],
//  ["Reload", loadGraphFromSparql],
//  ["Export", file.save],
];

/** Populate the buttons on the top bar using the JSON configuration. */
export default function addButtons()
{
  for(const buttonConfig of buttonConfigs)
  {
    const button = document.createElement("button");
    document.getElementById("buttons").appendChild(button);
    button.innerText = buttonConfig[0];
    button.id = buttonConfig[1];
    button.addEventListener("click",buttonConfig[2]);
  }
}
