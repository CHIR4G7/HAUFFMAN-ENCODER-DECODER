
export { BinaryHeap }

// import { extract } from "tar";

class BinaryHeap {

    constructor() {
        this.heap = [];
    }


    //using iterative approach
    bubbleUp() {
        let index = this.heap.length - 1;
        // console.log(index);
        while (index > 0) {
            let element = this.heap[index];
            console.log(element);
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.heap[parentIndex];

            if (parent[0] <= element[0]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex
        }
    }

    extractMax() {
        const max = this.heap[0];
        const tmp = this.heap.pop();
        if (!this.empty()) {
            this.heap[0] = tmp;
            this.sinkDown(0);
        }
        return max;
    }

    sinkDown(index) {

        let left = 2 * index + 1,
            right = 2 * index + 2,
            largest = index;
        const length = this.size();

        // console.log(this.heap[left], left, length, this.heap[right], right, length, this.heap[largest]);

        //assumes elements inserted i heap are array so [0] is used
        if (left < length && this.heap[left][0] < this.heap[largest][0]) {
            largest = left
        }
        if (right < length && this.heap[right][0] < this.heap[largest][0]) {
            largest = right
        }
        // swap
        if (largest !== index) {
            let tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.sinkDown(largest)
        }


    }

    insert(value) {
        if (this.heap.length != 0) {
            this.heap.push(value);
            this.bubbleUp();
        }
        else {
            this.heap.push(value);
        }
    }

    size() {
        return this.heap.length;
    }

    empty() {
        return (this.size() === 0);
    }

    top() {
        return this.heap[this.heap.length - 1];
    }
};

// BinaryHeap heap = new BinaryHeap();
