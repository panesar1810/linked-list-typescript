export class LinkedList {
	private head: Node;
	private size: number;

	constructor() {
		this.head = null;
		this.size = 0;
	}
	
	// returns length of list
	get length(): number { return this.size; }

	// insert a node at first
	insert(data: any): void {
		this.head = new Node(data, this.head);
		this.size++;
	}

	// insert a node at last
	insertAtLast(data: any): void {
		const node: Node = new Node(data);
		let current: Node;
		if (!this.head) { 
			this.head = node;
		} else {
			current = this.head;

			while (current.next) 
				current = current.next;
			
				current.next = node;
			this.size++;
		}
	}
	
	// insert a node at specific index
	insertAt(data: any, index: number): void {
		if (index > 0 && index > this.size) {
			throw Error('Index is out of range');
		} else if (index === 0) {
			this.insert(data);
			return;
		} else {
			const node: Node = new Node(data);
			let current: Node = this.head, previous: Node, count = 0;

			while (count < index) {
				previous = current;
				count++;
				current = current.next;
			}
			node.next = current;
			previous.next = node;
			this.size++;
		}	
	}
	
	// returns a node at specific index
	get(index: number): any {
		let current: Node = this.head;
		let count: number;

		while (current) {
			if (count === index) return current.data;
			count++;
			current = current.next;
		}
		throw Error('Index is out of range');
	}

    // delete a node at specific index
	remove(index: number): void {
		if (index > 0 && index > this.size) {
			throw Error('Index is out of range');
		}
		let current: Node = this.head, previous: Node, count = 0;

		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				previous = current;
				current = current.next;
				count++;
			}
			previous.next = current.next;
		}	
		this.size--;
	}
	
	// deletes all the nodes in the list
	clear(): void {
		this.head = null;
		this.size = 0;
	}
	
	// reverse the list
	private reverse(head: Node): Node {
		if (!head || !head.next) {
		  return head;
		}
		let temp = this.reverse(head.next);
		head.next.next = head;
		head.next = undefined;
		return temp;
	}

	// converts to array but reversed
	toArrayReversed(): any[] {
		let array: any[] = [];
		let reversedHead: Node = this.reverse(this.head);

		while (reversedHead) {
			array.push(reversedHead.data);
			reversedHead = reversedHead.next;
		}
		return array;
	}

	// converts to an array
	toArray(): any[] {
		let array: any[] = [];
		let current: Node = this.head;

		while (current) {
			array.push(current.data);
			current = current.next;
		}
		return array;
	}
	
	// print the list
	consoleLog(): void {
		let current: Node = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

}

class Node {
	constructor(
		public data: any, 
		public next: Node = null
	) {
		this.data = data;
		this.next = next;
	}
}
