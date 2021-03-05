 let LLData = require("./LLData");

class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let node = new LLData(value);
        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new LLData(value);
        }
        this.length++;
    }
    [Symbol.iterator] = function* () {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    };
    getFirst() {
        if (!this.head) {
            return null;
        } else {
            return this.head;
        }
    }
    getLast() {
        if (!this.head) {
            return null;
        } else {
            while (this.head) {
                if (!this.head.next) {
                    return this.head;
                }
                this.head = this.head.next;
            }
        }
    }
    addFromArray(array) {
        array.forEach((element) => {
            this.add(element);
        });
    }
    remove(value) {
        if (this.head) {
            if (this.head.value === value) {
                this.length--
                this.head = this.head.next;
                return;
            }
            let currentNode = this.head

            if (currentNode !== null) {
                while (currentNode.next) {
                    if (currentNode.next.value === value) {
                        currentNode.next = currentNode.next.next
                        this.length--
                        return;
                    } else {
                        currentNode = currentNode.next
                    }
                }
            }
        } else {
            console.log("Empty")
        }
    }
    removeAll(value) {
        if (this.head) {
            if (this.head.value === value) {
                this.length--
                this.head = this.head.next
            }
            let currentNode = this.head

            if (currentNode !== null) {
                while (currentNode.next) {
                    if (currentNode.next.value === value) {
                        currentNode.next = currentNode.next.next
                        this.length--
                    } else {
                        currentNode = currentNode.next
                    }
                }
            }
        } else {
            console.log("Empty")
        }

    }
    contains(value) {
        if (!this.head) {
            return "there is an empty list";
        } else {
            if ([...this].includes(value)) {
                return true;
            } else {
                return false;
            }
        }
    }

    clear() {
        this.head = null;
        this.length = 0
    }
    count() {
        if (!this.head) {
            return "there is an empty list";
        } else {
            return this.length;
        }
    }
    toString() {
        if (!this.head) {
            return "there is an empty list";
        } else {
            return [...this].join(", ");
        }
    }
    filter(callback) {
        if (!this.head) {
            return "there is an empty list";
        } else {
            return [...this].filter(callback);
        }
    }
}

module.exports = { LList };