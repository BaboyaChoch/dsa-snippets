/*
Topic:Binary Search Tree, DFS(stack,recursion),BFS
Author:Baboya Choch
*/

class Node {
	constructor(val, left, right) {
		this.val = val ? val : null;
		this.left = left ? left : null;
		this.right = right ? right : null;
	}
}

let tree = new Node(
	1,
	new Node(2, new Node(4), new Node(5)),
	new Node(3, new Node(6, null, new Node(13)), new Node(7))
);

//depth first traversal of tree to get length
//pre-order
//pre(before):: root comes before left-right
function getLength(node) {
	if (!node) return 0;
	let count = 1;
	count += getLength(node.left) + getLength(node.right);
	return count;
}

//depth-first-traversal of bst
function dft(node) {
	if (!node) return;

	console.log(node.val);
	dft(node.left);
	dft(node.right);
}

//breadth-first-traversal of bst
function bft(node) {
	if (!node) return -1;
	let q = [];
	let n;
	q.push(node);
	while (q.length != 0) {
		n = q.shift();
		console.log(n.val);
		if (n.left) q.push(n.left);
		if (n.right) q.push(n.right);
	}
}

//prints values level by level
function levelPrint(node) {
	if (!node) return -1;
	let q = [];
	let n;
	let count = 0;
	let arr = [];

	q.push(node);
	while (q.length != 0) {
		n = q.shift();
		arr.push(n.val);
		if (arr.length % 2 ** count == 0) {
			console.log(...arr);
			arr = [];
			count++;
		}

		if (n.left) q.push(n.left);
		if (n.right) q.push(n.right);
	}

	console.log(...arr);
}

function dftStack(node) {
	if (!node) return -1;
	let s = [node];

	while (s.length != 0) {
		const n = s.pop();
		console.log(n.val);
		if (n.right) s.push(n.right);
		if (n.left) s.push(n.left);
	}
}

dftStack(tree);
