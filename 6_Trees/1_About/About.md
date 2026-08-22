**Tree**: A Non-Linear Data Structure

        1
       / \
      2   3
     / \   \
    4   5   6

**Node**: Every individual element in a tree

        [1]
       /   \
     [2]   [3]

class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

(each node can have left and right nodes)

**Root Node**: Topmost node in a tree

**Leaf Node**: A node with no children

        1
       / \
      2   3
     / \
    4   5

**3, 4 and 5 are leaf nodes**

**Edge**: The connection between two nodes

1
|
| ← Edge
|
2

**Important property**
If a tree has N nodes:
Number of edges = N - 1

**Siblings**: Nodes with same parent

**Ancestor and Descendent**

            1
           /
          2
         /
        4

For node 4: Ancestors = 2, 1
And 4 is descendent of 2 and 1

**Subtree**
Any node along with all of its descendants forms a subtree

            1
           / \
          2   3
         / \
        4   5

The tree starting from 2 is itself a subtree:

        2
       / \
      4   5

A huge no. of tree problems basically say:
**Solve the problem for the left subtree, solve it for the right subtree, then combine the answers**

**Depth**: How far a node is from the root.

Usually, we consider the root to have depth 0

          1       depth 0
         / \
        2   3     depth 1
       / \
      4   5       depth 2

So:
depth(1) = 0
depth(2) = 1
depth(4) = 2

**Height**: measured downward
For a node:
    Height = number of edges in the longest path from that node to a leaf.

Example:

          1
         /
        2
       /
      4

Starting from 4:
height = 0

Starting from 2: 2 → 4
height = 1

Starting from 1: 1 → 2 → 4
height = 2

So:

          1  ← height 2
         /
        2    ← height 1
       /
      4      ← height 0

**Level**: Nodes at the same distance from the root are on the same level.

Using this convention:

          1        Level 0
         / \
        2   3      Level 1
       / \
      4   5        Level 2

So:

Level 0 → 1
Level 1 → 2, 3
Level 2 → 4, 5

**What makes a tree different?**

A tree has some important properties:

1. **No cycles**: We cannot keep following connections and eventually come back to where you started.

This is not a tree:

    1
   / \
  2───3

Because there is a cycle.

2. **Exactly one path between two nodes**

For example:

        1
       / \
      2   3
     /
    4

To go from 4 to 3:

4 → 2 → 1 → 3

There is exactly one path.

3. **Hierarchical relationship**
Every node except the root has exactly one parent.

**Tree Traversal**

        1
       / \
      2   3
     / \
    4   5

**Preorder**
Order: Node -> Left -> Right
Result: 1, 2, 4, 5, 3

**Inorder**
Order: Left -> Node -> Right
Result: 4, 2, 5, 1, 3

**Level Order Traversal**

        1
       / \
      2   3
     / \
    4   5

Output:

1
2, 3
4, 5

or

[1, 2, 3, 4, 5]