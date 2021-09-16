class Node {
	constructor(key, value, prev, next) {
		this.key = key ? key : null;
		this.value = value ? value : null;
		this.prev = prev ? prev : null;
		this.next = next ? next : null;
	}
}

class DLL {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	insert(key, value) {
		const newNode = new Node(key, value);

		if (!this.head && !this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
		return newNode;
	}

	delete(node) {
		if (!node.prev) {
			//only head node has no prev
			this.head = node.next;
			this.head.prev = null;
		} else if (!node.next) {
			//only tail node has no next
			this.tail = node.prev;
			this.tail.next = null;
		} else {
			node.prev.next = node.next;
			node.next.prev = node.prev;
		}
		this.size--;
	}

	printList() {
		let curr = this.head;
		const list = [];
		while (curr) {
			list.push(curr.value);
			curr = curr.next;
		}
		console.log(...list);
	}
}

const list = new DLL();

list.insert(1, 1); //  null <--> 1 <--> null
list.insert(2, 2); //  null <--> 1 <--> 2 <--> null
list.insert(3, 3); //  null <--> 1 <--> 2 <--> 3 <--> null
list.insert(4, 4); //  null <--> 1 <--> 2 <--> 3 <--> 4 <--> null

const n1 = list.insert(5, 5); // null <--> 1 <--> 2 <--> 3 <--> 4 <--> 5 <--> null
const n2 = list.insert(6, 6); // null <--> 1 <--> 2 <--> 3 <--> 4 <--> 5 <--> 6 <--> null

console.log(list.size); // 6
list.printList(); //  1 2 3 4 5 6

list.delete(n1); // null <--> 1 <--> 2 <--> 3 <--> 4 <--> 5 <--> null
list.delete(n2); // null <--> 1 <--> 2 <--> 3 <--> 4 <--> null

console.log(list.size); // 4
list.printList(); // 1 2 3 4
