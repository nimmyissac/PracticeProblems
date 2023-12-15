let buildAdjList = (n, edges) => {
    let adjList = Array.from({ length: n }, () => [])
    for (let i = 0; i < edges.length; i++) {
        let [start, end] = edges[i];
        adjList[start].push(end);
        adjList[end].push(start);
    }
    return adjList;
}

let bfs = (node, adjList, visited, parent) => {
    let queue = [node];
    while (queue.length) {
        let curNode = queue.shift();
        visited[curNode] = true;
        for (let neighbor of adjList[curNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                parent[neighbor] = curNode;
                queue.push(neighbor);
            } else {
                // Parent will be present in the adjacency list of the currentNode as it is an undirected graph. 
                if (neighbor !== parent[curNode]) {
                    return true;
                }
            }
        }
    }

    return false;
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    let adjList = buildAdjList(n, edges);
    let visited = {};
    let parent = {};
    let regions = 0;
    for (let vertex = 0; vertex < adjList.length; vertex++) {
        if (!visited[vertex]) {
            regions++;
            if (regions > 1) {
                return false;
            }
            if (bfs(vertex, adjList, visited, parent)) {
                return false;
            }
        }
    }
    return true;
}


let n = 5;
let edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

console.log(validTree(n, edges));