/* Is Graph Bipartite? */

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let visited = Array.from({ length: graph.length }, () => -1);
    let level = Array.from({ length: graph.length });
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] == -1) {
            level[i] = 0;
            visited[i] = 1;
            if (bfs(i, graph, level, visited) === false) {
                return false;
            }
        }
    }
    return true;
};

var bfs = function (root, graph, level, visited) {
    let queue = [root];
    while (queue.length != 0) {
        let node = queue.shift();
        let neighbors = graph[node];
        for (let neighbor of neighbors) {
            if (visited[neighbor] === -1) {
                visited[neighbor] = 1;
                level[neighbor] = level[node] + 1;
                queue.push(neighbor);
            } else {
                if (level[neighbor] == level[node]) {
                    return false;
                }
            }
        }
    }
    return true;
};
