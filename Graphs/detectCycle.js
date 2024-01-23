//let n = 5;
//let edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

function buildAdjList(n, edges) {
    let adjList = Array.from({ length: n }, () => []);
    for (let edge of edges) {
        let [start, end] = edge;
        adjList[start].push(end);
        adjList[end].push(start);
    }

    return adjList;
}

//doing bfs search to detect cycle
function hasCycle(root, visited, parent, adjList) {
    let queue = [root];
    visited[root] = 1;
    while (queue.length != 0) {
        let node = queue.shift();
        let neighbors = adjList[node];
        for (let neighbor of neighbors) {
            if (visited[neighbor] === -1) {
                visited[neighbor] = 1;
                parent[neighbor] = node;
                queue.push(neighbor);
            } else {
                if (parent[node] !== neighbor) {
                    return true;
                }
            }
        }
    }
    return false;
}


function detectCycle(n, edges) {
    let adjList = buildAdjList(n, edges);
    let visited = Array.from({ length: n }, () => -1);
    let parent = Array.from({ length: n }, () => -1)
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === -1) {
            if (hasCycle(i, visited, parent, adjList)) {
                return true;
            }
        }
    }

    return false;
}


console.log(detectCycle(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]));
console.log(detectCycle(5, [[0, 1], [0, 2], [2, 3], [3, 4]]));