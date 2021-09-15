/*
Topic(s):Graphs, UnionFind
Author:Baboya Choch
*/

class DSU {
	constructor(size) {
		this.parent = Array.from(Array(size).keys());
		this.rank = Array(size).fill(1);
	}

	find(x) {
		if (this.parent[x] != x) return this.find(this.parent[x]);
		return x;
	}

	union(x, y) {
		const px = this.find(x);
		const py = this.find(y);

		if (px === py) return false;
		else if (this.rank[px] > this.rank[py]) {
			this.parent[py] = px;
		} else if (this.rank[py] > this.rank[px]) {
			this.parent[px] = py;
		} else {
			this.parent[py] = px;
			this.rank[px]++;
		}
		return true;
	}
}
