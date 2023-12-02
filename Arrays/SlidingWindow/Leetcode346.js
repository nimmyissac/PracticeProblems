/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size;
    this.queue = [];
    this.totalSoFar = 0;
};



/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.queue.push(val);
    this.totalSoFar += val;
    if (this.queue.length === this.size) {
        this.totalSoFar -= this.queue.shift();
    }
    return this.totalSoFar / this.queue.length;
};

let movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */