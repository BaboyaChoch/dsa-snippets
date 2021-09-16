/*
Topic(s): Graphs | ShortestPath | Dijkstras | Adjacency Matrix
Author:Baboya Choch
*/

const minDist = (visited, distance) => {
	let minVal = Number.MAX_VALUE;
	let min = -1;
	for (let v = 0; v < distance.length; v++) {
		//if not visited and dst is less thant the current min
		if (!visited[v] && distance[v] <= minVal) {
			min = v;
			minVal = distance[v];
		}
	}
	return min;
};

const printDist = (dst) => {
	for (let i = 0; i < dst.length; i++) {
		console.log(`Min Distance From SRC:${i} is ${dst[i]}`);
	}
};

const djk = (graph, src) => {
	const V = graph.length;
	const visited = new Array(V).fill(false); //false: have not visited node, true:have visited
	let distance = new Array(V).fill(Number.MAX_VALUE); //untouched nodes have max val for weight
	distance[src] = 0; //distance from src to itself is always zero

	// find shortest path for all vertecies
	// this takes V-1 iterations because the last node does not need to be processed
	for (let itr = 0; itr < V - 1; itr++) {
		// pick the minimum distance vertex
		// this should always be the src in the first itr
		// b/c src has w=0, while the rest have w=inf
		let curr = minDist(visited, distance);

		//picked vertex set to visited
		visited[curr] = true;
		for (let v = 0; v < V; v++) {
			if (
				!visited[v] && //not visited
				graph[curr][v] != 0 && //make sure there is a connection, 0 means no connection
				distance[curr] != Number.MAX_VALUE && //make sure curr has an actual weight,n not inf
				distance[curr] + graph[curr][v] < distance[v]
			) {
				//new val < current val,else not shortest
				distance[v] = distance[curr] + graph[curr][v];
			}
		}
	}

	return distance;
};

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

printDist(djk(graph, 0));
