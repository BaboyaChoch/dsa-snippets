/*
Topic(s): Graphs | Prims | Min Spanning Trees
Author:Baboya Choch
*/

function findMin(visited, dist, graph) {}

function prims(graph, src) {
	/**
	 * start/visit at src
	 * 1) look at unvisited nodes connected to all visited nodes
	 *(since only src is visited we only look at src's children at first)
	 * 2) add child w/ smallest dist to visited,
	 * 3) removed from list of unvisited
	 *
	 *
	 * repeat starting at step 1 until all nodes visited
	 * resulting tree is the minimum spanning tree(MST)
	 */
	const V = graph.length;
	const visited = new Array(V).fill(false);
	const dist = new Array(v).fill(Number.MAX_VALUE);
}

const graph = [
	[0, 4, 0, 0, 0, 0, 0, 8, 0],
	[4, 0, 8, 0, 0, 0, 0, 11, 0],
	[0, 8, 0, 7, 0, 4, 0, 0, 2],
	[0, 0, 7, 0, 9, 14, 0, 0, 0],
	[0, 0, 0, 9, 0, 10, 0, 0, 0],
	[0, 0, 4, 14, 10, 0, 2, 0, 0],
	[0, 0, 0, 0, 0, 2, 0, 1, 6],
	[8, 11, 0, 0, 0, 0, 1, 0, 7],
	[0, 0, 2, 0, 0, 0, 6, 7, 0],
];

prims(graph, 0);
