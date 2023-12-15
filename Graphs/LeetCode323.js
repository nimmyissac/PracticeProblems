let buildGraph = (n, edges) => {
    let adjList = Array.from({ length: n }, () => [])
    for (let i = 0; i < edges.length; i++) {
        let [start, end] = edges[i];
        adjList[start].push(end);
        adjList[end].push(start);
    }
    return adjList;
}

let bfs = (source, adjList, visited) => {
    let queue = [source];
    visited[source] = 1;
    while (queue.length != 0) {
        let node = queue.pop();
        for (let neighbor of adjList[node]) {
            if (visited[neighbor] === -1) {
                visited[neighbor] = 1;
                queue.push(neighbor);
            }
        }
    }
}

let dfs = (source, adjList, visited) => {
    let helper = (node) => {
        visited[node] = 1;
        for (let neighbor of adjList[node]) {
            if (visited[neighbor] === -1) {
                helper(neighbor);
            }
        }
    }

    helper(source);
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    // build graph
    let adjList = buildGraph(n, edges);
    let connectedComponentsCount = 0;
    let visited = Array.from({ length: n }, () => -1)
    console.log(visited);

    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === -1) {
            connectedComponentsCount++;
            // bfs(i, adjList, visited);
            dfs(i, adjList, visited);
            console.log(visited);
        }
    }
    return connectedComponentsCount;
};

let n = 5;
let edges = [[0, 1], [1, 2], [3, 4]]

console.log(countComponents(n, edges));