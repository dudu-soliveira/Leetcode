// https://leetcode.com/problems/implement-router/

// @leet start
function binarySearch(arr: number[][], time: number, start: boolean): number {
  let l = 0;
  let r = arr.length - 1;
  let desiredIdx = -1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (arr[mid][2] === time) {
      desiredIdx = mid;
      if (start) r = mid - 1;
      else l = mid + 1;
    } else if (arr[mid][2] > time) {
      if (start) desiredIdx = mid;
      r = mid - 1;
    } else {
      if (!start) desiredIdx = mid;
      l = mid + 1;
    }
  }

  return desiredIdx;
}

class Router {
  private dataPacks: number[][];
  private memoryLimit: number;
  private destinationMap: Map<number, number[][]>;

  constructor(memoryLimit: number) {
    this.dataPacks = [];
    this.memoryLimit = memoryLimit;
    this.destinationMap = new Map();
  }

  addPacket(source: number, destination: number, timestamp: number): boolean {
    const size = this.dataPacks.length;
    const newValue = [source, destination, timestamp];
    const sameDstList = this.destinationMap.get(destination);

    if (sameDstList !== undefined && sameDstList.length > 0) {
      for (let i = sameDstList.length - 1; i >= 0; i--) {
        const [dupSrc, , dupTms] = sameDstList[i];
        if (dupTms !== timestamp) break;
        if (dupSrc === source) return false;
      }
    } else {
      this.destinationMap.set(destination, []);
    }

    if (size === this.memoryLimit) {
      const [, oldestDst] = this.dataPacks.shift()!;
      this.destinationMap.get(oldestDst)!.shift();
    }

    this.dataPacks.push(newValue);
    this.destinationMap.get(destination)!.push(newValue);

    return true;
  }

  forwardPacket(): number[] {
    const oldest = this.dataPacks.shift();
    if (oldest) this.destinationMap.get(oldest[1])!.shift();

    return oldest || [];
  }

  getCount(destination: number, startTime: number, endTime: number): number {
    const dstList = this.destinationMap.get(destination);
    console.log(dstList);

    if (!dstList || dstList.length === 0) return 0;

    const idxStart = binarySearch(dstList, startTime, true);
    const idxEnd = binarySearch(dstList, endTime, false);

    return idxStart === -1 || idxEnd === -1 ? 0 : idxEnd - idxStart + 1;
  }
}

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
// @leet end
