/*
Topic(s): Heaps
Author:Baboya Choch
*/

const MAX_SIZE = 100;
class Heap {
	constructor() {
		this.heap = new Array(MAX_SIZE);
		this.size = -1;
	}

	insert(element) {
		this.size++;
		this.heap[this.size] = element;
		this.floatUp(this.size);
	}
	isEmpty() {
		return this.size < 0;
	}
	removeMin() {
		if (this.isEmpty()) return null;

		const min = this.heap[0];
		this.swap(this.size, 0);
		this.heap[this.size] = undefined;
		this.size--;
		this.sinkDown(0);
		return min;
	}

	getMin() {
		return this.isEmptyis ? null : this.heap[0];
	}

	getParent(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeft(parent) {
		return parent * 2 + 1;
	}

	getRight(parent) {
		return parent * 2 + 2;
	}

	getMin() {
		return this.heap[0];
	}

	floatUp(index) {
		let parent = this.getParent(index);

		if (this.heap[index] < this.heap[parent]) {
			this.swap(index, parent);
			this.floatUp(parent);
		}
		return;
	}

	sinkDown(index) {
		let min = index;
		let left = this.getLeft(index);
		let right = this.getRight(index);

		if (this.heap[left] < this.heap[min]) {
			min = left;
		}
		if (this.heap[right] < this.heap[min]) {
			min = right;
		}
		if (min != index) {
			this.swap(index, min);
			this.sinkDown(min);
		}
		return;
	}

	swap(pos1, pos2) {
		let temp = this.heap[pos1];
		this.heap[pos1] = this.heap[pos2];
		this.heap[pos2] = temp;
	}

	printHeap() {
		if (this.isEmpty()) console.log("Empty Heap");
		else console.log(...this.heap.slice(0, this.size + 1));
	}
}

const h = new Heap();
h.insert(2);
h.insert(3);
h.insert(4);
h.insert(1);
h.insert(1);
h.insert(10);
h.insert(6);
h.insert(2);
h.printHeap();
console.log(h.getMin());
console.log(h.removeMin());
h.printHeap();
