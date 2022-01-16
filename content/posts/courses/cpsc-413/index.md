---
layout: post
title: "CPSC 413: Design & Analysis of Algorithms I"
date: "2019-09-01"
categories:
  - Courses
excerpt: "Design & Analysis of Algorithms I"
---

# Asymptotics (4)

## L01: Introduction to course, asymptotics

Order the following functions in order of increasing asymptotic growth

- $$n^{1/2}$$
- $$\frac{1}{8}n^{3}$$
- $$n^{3}-2n$$
- $$n^{2}-\sqrt{n}+7$$
- $$\frac{1}{2}n-n^{\frac{1}{2}}$$
- $$\frac{n^{2}}{n^{0.6}}$$
- $$\sqrt{n^{3}}$$
- $$7n-13$$
- $$83$$
- $$\sqrt[3]{n} + 20$$

One way of comparing algorithms is by comparing their asymptotic growth. Increasing order

1. $$83$$
2. $$\sqrt[3]{n} + 20$$
3. $$n^{1/2}$$
4. $$7n-13 \equiv \frac{1}{2}n-n^{\frac{1}{2}}$$
5. $$\frac{n^{2}}{n^{0.6}}$$
6. $$\sqrt{n^{3}}$$
7. $$n^{2}-\sqrt{n}+7$$
8. $$\frac{1}{8}n^{3} \equiv n^{3}-2n$$

Theorem: $$f_{1}(n)\ \epsilon\ O(g_{1}(n))$$
Def: $$O(g) = \{f:R \Rightarrow R\ |\ \exists n_{0} > 0, \exists c_{2} > 0, f_{1}(n) \leq c_{2}g_{1}(n)\ for\ all\ n \geq n_{0}\}$$

- The purpose of $$c_2$$ is to say that no matter what value of $$c_{2}$$ is used, $$f_{1}(n)$$ will always be smaller than $$g_{1}(n)$$.
- $$c_{2}g_{1}(n)$$ will always be slower than or equal to $$f_{1}(n)$$ above the threshold of $$n_{0}$$ where $$n_{0}$$ is ~~the intersection between~~ $$f_{1}(n)$$ ~~and~~ $$g_{1}(n)$$; correction: where $$n_{0}$$ is an arbitrarily chosen constant.
- $$n_{0}$$ and $$c_{2}$$ are correlated.

## L02: (Asymp) Asymptotics, big-Oh notation

| notion         | idea      | interpretation                 | pronunciation  |
| -------------- | --------- | ------------------------------ | -------------- |
| $$o(g)$$       | $$<$$     | f grows strictly slower than g | little-oh      |
| $$O(g)$$       | $$\leq$$  | f grows no faster than g       | big-oh         |
| $$\theta(g)$$  | $$=$$     | f grows as fast as g           | theta          |
| $$\Omega(g)$$  | $$\geq$$  | f grows no slower than g       | big-omega      |
| $$\omega(g)$$  | $$>$$     | f grows strictly faster than g | little-omega   |

Ex: If $$f_{1}(n) = n^{2}$$, $$g_{1}(n) = n^{3}$$, then $$f_{1}(n)\ \epsilon\ O(g_{1}(n))$$.
Proof: Let $$n_{0} = 1$$ and $$c_{2} = 1$$.

Def: $$o(g) = \{f, \forall c_{2}>0, \exists n_{0} > 0, 0 \leq f(n) \leq c_{2}g(n)\ for\ all\ n \geq n_{0}\}$$.

- No matter how much we speed up algorithm $$g$$ (speed up comes in the form of $$c_{2}$$), the algorithm $$f$$ will always be faster once the input size is big enough (the threshold comes in the form of $$n_{0}$$.

Ex: If $$f_{1}(n) = n^{2}$$, $$g_{1}(n) = n^{3}$$, then $$f_{1}(n)\ \epsilon\ o(g_{1}(n))$$.
Proof: Let $$n_{0} = 500$$ and $$c_{2} = \frac{1}{500}$$, then we want $$n^{2} \leq c_{2}n^{3}$$.
Given $$c_{2}$$, set $$n_{0} = \frac{1}{c_{2}} + 1$$ so there is always a threshold for any given speedup. The plus one is just to guarantee the threshold but it could be any number added.

- Theta is a combination of big-oh and big-omega; it isn’t faster and isn’t slower, it’s the same.
- $$c_{1}$$ is the slow down factor, $$c_{2}$$ is the speedup factor.

Properties of big-O

- $$f\ \epsilon\ o(g) \Rightarrow f\ \epsilon\ O(g)$$. If $$f$$ is strictly slower than $$g$$, then $$f$$ is slower (no faster) than $$g$$.
- $$f\ \epsilon\ \omega(g) \Rightarrow f\ \epsilon\ \Omega(g)$$.
- $$f\ \epsilon\ O(g)\ \&\ f\ \epsilon\ \Omega(g) \Leftrightarrow f\ \epsilon\ \Theta(g)$$.
- $$f\ \epsilon\ O(g) \Leftrightarrow g\ \epsilon\ \Omega(f)$$.
- $$f\ \epsilon\ \Theta(g) \Leftrightarrow g\ \epsilon\ \Theta(f)$$.
- $$f\ \epsilon\ o(g) \Leftrightarrow g\ \epsilon\ \omega(f)$$.

## L03: (Asymp) Limit test, logarithms, exponentials

- Logs come from cutting the search space usually in half hence $$log_2()$$.
- We assume all logs have base 2.
- Theorem: $$\forall a, b > 1, n > 0, log_{a}(n)=\frac{log_{b}(n)}{log_{b}(a)}$$. Lets you switch the log base.
- Examples
    - $$7log(n)\ \epsilon\ \Theta(log(n))$$
    - $$(log(n))^{7}\ \epsilon\ \omega(log(n))$$
    - $$log(7^{n}) = n\ log(7)\ \epsilon\ \Theta(n)$$
- Theorem: $$\forall a, b > 0, \lim_{n\to\infty} \frac{(log(n))^{b}}{n^{a}} = 0$$
    - The intuition is that the top is faster than the bottom.
    - Any log-power is smaller than any polynomial.
- Examples
    - $$(log(n))^{2}\ \epsilon\ o(n)$$
    - $$(log(n))^{2}\ \epsilon\ o(\sqrt{n})$$
    - $$(log(n))^{7}\ \epsilon\ o(n^{1/100})$$
    - $$(log(n))^{2}\ \epsilon\ o(\frac{n}{(log(n))^{2}})$$
- Ordering example
    - $$\frac{n}{log\ n}$$
    - $$log\ n$$
    - $$\sqrt n$$
    - $$log(log\ n)$$
    - $$(log\ n)^{2}$$
    - $$n$$
    - $$\sqrt{log\ n}$$
    - $$(log\ n)(log\ log\ n)$$
    - $$\frac{n}{(log\ n)^{2}}$$
    - $$\frac{(log\ n)^{2}}{n}$$ (Not an algorithm)
- Answer in increasing growth order
    1. $$\frac{(log\ n)^{2}}{n}$$
    2. $$log(log\ n)$$
    3. $$\sqrt{log\ n}$$
    4. $$log\ n$$
    5. $$(log\ n)(log\ log\ n)$$
    6. $$(log\ n)^{2}$$
    7. $$\sqrt{n}$$
    8. $$\frac{n}{(log\ n)^{2}}$$
    9. $$\frac{n}{log\ n}$$
    10. $$n$$
- One helpful tip for ordering algorithms is to cancel the same terms on both sides.
- Theorem: $$log(n!)\ \epsilon\ \Theta(n\ log(n))$$
    - Suppose we have a deck of cards, we want to find some permutation where they’re sorted.
    - The search space is $$n!$$ and applying $$log()$$ to it means we split the search space in half for every iteration.
    - $$n! \leq n^{n}$$, then log both sides to get $$log(n!) \leq n\ log(n)$$ which is the big-O bound of the theorem.
    - $$n! = n \cdot (n-1) \cdot (\frac{n}{2} + 1)(\frac{n}{2})...1 \geq (\frac{n}{2})^{\frac{n}{2}}$$, then log both sides to get $$log(n!) \geq \frac{n}{2}log(\frac{n}{2})$$ which is the big-Theta bound of the theorem.

## L04: (Asymp) Classification of exponentials, polynomials, and logarithms

- An algorithm transforms an input into an output by performing some transformation on the input.
- What is an efficient algorithm?
    - An algorithm that is fast. Doesn’t have to be optimal.
    - **An algorithm is efficient if it runs in polynomial time in the input size. (Will show up on final exam)**
- $$2^{n} < n! < n^{n}$$
- Poly logs, subpolys, polys are efficient. Super polys, exps, and superexps aren’t efficient. (For exams, if asked for an efficient algorithm, then it must be in the first three groups).

# Greedy (5)

## L05: (Greedy) Interval scheduling 1

- Proof techniques
    - Our greedy algorithm never makes a bad choice.
    - Our greedy algorithm always makes a good choice.
    - Our greedy algorithm stays ahead.
    - Our greedy algorithm is on the way to produce an optimal.
    - At any stage r during the computation subset Ar can be extended to an optimal solution.
- Pieces of Candy
    - You can pick 4 pieces of candy.
    - We want to maximize the total weight of candy.
    - Greedy heuristic: Always pick the heaviest remaining piece.
- Greedy algorithms are typically simple and can be stated in one line.
- Candy pickings
    - Input: Integers $$n,\ k$$ with $$1\leq k\leq n$$. Weights $$w_{1}, w_{2}, ..., w_{n}$$.
    - Output: Heaviest subset $$A \subseteq \{1, 2, ..., n\}$$ of size k. $$weight(A) = \sum_{i\ \epsilon\ A} w_{i}$$.
    - Theorems
        - Our algorithm produces a valid solution.
        - Our algorithm produces an optimal solution.
        - Our algorithm runs in polynomial time.
    - Proof
        - What we want: Subset $$A_{r}$$ can be extended to an optimal solution for all $$0 \leq r \leq k$$. (If we can proof this then we are done).
        - Proof by contradiction. Assume there is some $$j$$ such that $$A_{j}$$ can’t be extended to an optimal solution. Aka assume there’s a state that can’t be extended to an optimal solution.
        - Let $$r = smallest\ j$$ such that $$A_{j}$$ can’t be extended to an optimal solution.
            - $$A_{0} = \{\} \cup \{9, 4, 8, 10\}$$ where $$\{9, 4, 8, 10\}$$ is an extension that would lead to an optimal solution.
        - $$A_{1} = \{9\} \cup \{4, 8, 10\}$$
            - $$A_{r-1} = \{a_{1}, a_{2}, ..., a_{r-1}\} \cup \{b_{r}, b_{r+1}, ..., b_{n}\}$$ where $$\{b_{r}, b_{r+1}, ..., b_{n}\}$$ is an extension that would lead to an optimal solution.
        - $$A_{r} = \{a_{1}, a_{2}, ..., a_{r-1}\} \cup \{a_{r}\}$$ ← The step where we made a mistake aka we can’t extend to an optimal solution.
            - Fact 1: $$\bar{A_{r}} = \{a_{1}, a_{2}, ..., a_{r-1}\} \cup \{a_{r}\} \cup \{b_{r+1}, b_{k}\}$$
                - Observation 1: $$\bar{A_{r}}$$ has size $$k$$ so it is a valid set.
          1. The indices $$\{a_{1},..., a_{r-1}, a_{r}\}$$ are all distinct because the greedy algorithm picks only distinct indices by definition of our greedy algorithm.
          2. The indices $$\{a_{1}, ..., a_{r-1}, b_{r+1}, ..., b_{k}\}$$ are distinct because it’s part of an optimal solution by definition.
          3. The index of $$a_{r}$$ is distinct from $$\{b_{r+1}, ..., b_{k}\}$$ because had it been one of them, then $$A_{r}$$ could have been extended.
        - $$A_{r-1}^{*} = \{a_{1}, ..., a_{r-1}\} \cup \{b_{r}\} \cup \{b_{r+1}, ..., b_{k}\}$$ is an optimal solution.
    - $$\bar{A_{r}} = \{a_{1}, ..., a_{r-1}\} \cup \{a_{r}\} \cup \{b_{r+1}, ..., b_{k}\}$$ is our greedy solution.
        - Fact 2: We want to argue $$value(\bar{A_{r}}) \geq value(A_{r-1}^{*})$$ by arguing that $$weight(a_{r}) \geq weight(b_{r})$$.
        - **We know that** $$weight(a_{r}) \geq weight(b_{r})$$ **because the greedy algorithm picks the heaviest among the remaining pieces.**
        - From Fact 1 and Fact 2, we can conclude that $$\bar{A_{r}}$$ is a valid and optimal solution. That is a contradiction to our assumption that $$A_{r}$$ can’t be extended to an optimal solution.
- Proof by contradiction is the same as proof by induction.

## L06: (Greedy) Interval scheduling 2

- Interval scheduling
    - Input: Set of n jobs. Each job has a starting time $$s_{i}$$ and a finishing time $$f_{i}$$.
    - Output: Select as many non-overlapping jobs as possible.
- Approaches
    - ~~Pick the shortest job of the next available jobs.~~
    - ~~Pick the next available job / job that starts first.~~
    - Pick the job that ends the first.
        - Split ties arbitrarily.
        - Among jobs that do not overlap already picked jobs.
- Answer to handout: {4, 11, 8, 1, 10}
- A good algorithm
    - Outputs a valid solution.
    - Outputs an optimal solution.
    - Runs in poly time.
- For the interval scheduling GA
    - By definition of the GA, we will never pick a job that overlaps so the solution is valid.
    - The proof that it gives an optimal solution is given below.
    - The GA is poly time as we can sort the job deadlines in $$n log(n)$$ time.
    - Proof idea: GA never makes a bad choice (on our way to construct an optimal solution).
    - Theorem: Subset $$A_{s}$$ can be extended to an optimal solution for all $$0 \leq s \leq k^{*}$$.
        - Proof by contradiction.
        - Assume there exists some $$j$$ such that $$A_{j}$$ cannot be extended to an optimal solution.
        - Let $$r$$ be the smallest $$j$$ such that $$A_{j}$$ cannot be extended to an optimal solution. In other words, let $$r$$ be the first time we make a mistake.
        - Then $$A_{r-1} = \{a_{1}, a_{2}, ..., a_{r-1}\} \cup \{b_{r},...\}$$ can be extended to an optimal solution but $$A_{r} = \{a_{1}, a_{2}, ..., a_{r-1}\} \cup \{a_{r}\}$$ cannot be extended.
        - Let the extension be $$\{b_{r}, b_{r+1},...,b_{k}\}$$ be an optimal extension.
        - We aren’t going to argue that $$A_{r}$$ is in the optimal extension because there might be multiple optimal solutions.
        - We’re going to argue that $$A_{r}$$ can be extended to an optimal solution to contradict our assumption.
        - Because $$A_{r}$$ is the greedy choice, we know that $$a_{r}$$ will end before or at the same time as $$b_{r}$$.
        - Then extend $$A_{r}$$ by $$\{b_{r+1}, ..., b_{k}\}$$ but the extension is not necessarily valid because $$a_{r}$$ and $$b_{r+1}$$ could overlap.
        - The solution to this problem is to sort the optimal extension and to replace the earliest job with the greedy choice. Let $$b_{r}$$ be the job that finishes the earliest among jobs $$\{b_{r}, b_{r+1}, ...\}$$.
        - There’s a greedy choice and that choice can be substituted into an optimal extension.

## L07: (Greedy) Shortest paths in graphs

- Dijkstra’s Greedy Algorithm
    1. For all $$u\ \epsilon\ V$$, set $$d(u) = \infty$$. Set $$S_{0}=\{s\}$$, $$d(s)=0$$, $$A_{0}=\{\}$$.
    2. For $$k=1$$ to $$n-1$$, do
        1. Find $$v\ \epsilon\ V\ not\ in\ S$$ with $$min\{d(u) + l(u,v)\}$$ ← Greedy choice
        2. Set $$d(v) = d(u) + l(u,v)$$, $$S_{k}=S_{k-1} \cup \{v\}$$, $$A_{k} = A_{k-1} \cup \{(u,v)\}$$
- Single source shortest path problem
    - Input: Directed graph $$G=(V,E)$$, connected source $$s\ \epsilon\ V$$. Non-negative weights for each edge.
    - Goal: A shortest path from s to every other vertex $$v\ \epsilon\ V$$.
- Solution is a tree rooted at s.
- GA is to grow a shortest-path tree.
- The proof depends on choosing paths that we will never regret.
- Proof
    - We only pick edges that we’ll never regret.

## L08: (Greedy) Minimum spanning tree

- Kruskal algorithm
    1. Presort edges $$e_{1}, e_{2},...,e_{m}$$ so that $$c(e_{1}) \leq c(e_{2}) \leq c(e_{m})$$ where $$c(...)$$ is the cost of the edge.
    2. $$F_{o} = \{\}$$, $$k=0$$
    3. For i = 1 to m
        1. If $$F_{k} \cup \{e_{i}\}$$ is acyclic then $$F_{k+1} = F_{k} \cup \{e_{i}\}$$ and $$k=k+1$$.
    4. Return $$F_{k}$$ and $$k_{gr}$$ where $$k_{gr} = k$$.
- Minimum Spanning Tree (MST)
    - Undirected graph with non-negative edge costs.
- Trees are paths that are unique paths.
- A spanning tree has n - 1 edges.
- A tree contains a unique path from every vertex to every other vertex.
- If we add an edge to a spanning tree, then we introduce a unique cycle.
- One GA to obtain the MST is to remove the edge with the greatest cost without making the graph disconnected.
- Kruskal’s Heuristic
    - Pick the cheapest cost edge that doesn’t introduce a cycle.
- Whenever we have a cycle, we can remove the edge with the most cost.
- Theorem: Kruskal’s algorithm outputs a MST. (Assume Kruskal’s alg outputs a tree)
    - Proof by contradiction.
    - Assume there is some $$k$$ such that $$F_{k}$$ can’t be extended to an optimal solution. Aka Kruskal’s algorithm made a mistake.
    - Let r = smallest such k. So $$F_{r-1}$$ can be extended to an optimal solution but $$F_{r}$$ can’t.
    - Let $$F_{r-1}^{*} = F_{r-1} \cup \{e_{r},...,e_{n-1}\}$$ be the optimal solution and $$F_{r} = F_{r-1} \cup \{e_{x}\}$$ be the set where we made the mistake.
    - Because of the greedy choice, the edge GA picked must be at least the same cost as the optimal solution.
    - So we can extend $$F_{r}$$ to an optimal solution by $$\bar{F_{r}} = (F_{r-1} \cup \{e_{x}\} - \{e_{y}\})$$.

## L09: (Greedy) Huffman codes

- Huffman Codes
    - Input: A set of n symbols. $$S = \{s_{1}, s_{2}, s_{n}\}$$ with frequencies $$f_{1}, f_{2}, f_{n}$$.
    - Output: An optimal prefix-free code over {0, 1} for those frequencies
- Example
    - Message (M) = “appletrees”
    - StdEnc(M) = 01.1.1.00.0.000.10.0.0.11 ← Not an accurate encoding because the decimal is a third symbol.
    - Prefix-free code: a code that is unambiguous by having each encoding not have the same prefix.

| symbol        | frequency | standard encoding (std enc) |
| ------------- | --------- | --------------------------- |
| e             | 3         | 0                           |
| p             | 2         | 1                           |
| l, a, r, s, t | 1         | 00, 01, 10, 11, 000         |

- Observation 1: More frequently used characters should be have a shorter encoding. $$f_{i} > f_{j} \rightarrow \lvert E(s_{i}) \rvert \leq \lvert E(s_{j}) \rvert$$
- A prefix-free code is a binary tree.
- Swap leaves to get higher frequencies closer to the root.
- If you keep swapping subtrees until no longer possible, then we get an optimal prefix-free code.
- In practice, the tree is built bottom up.
- GA means I can locally find an improvement.
- If it seems that I can make a local improvement, then GA will probably apply.

# Divide & conquer (4)

## L10: (D&C) Simple recursive algorithms

- Recurrences
    - Mergesort ($$\Theta(nlog(n))$$)
        - $$T(2)=1$$
        - $$T(n)=2T(\frac{n}{2})+n$$
    - Bubblesort ($$\Theta(n^{2})$$)
        - $$T(1)=0$$
        - $$T(n)=T(n-1)+n$$
    - Binary search ($$\Theta(log(n))$$)
        - $$T(1)=1$$
        - $$T(n)=T(\frac{n}{2})+1$$
    - Integer multiplication ($$\Theta(n^{log_{2}(3)}) \approx \Theta(n^{1.57})$$)
        - $$T(1)=1$$
        - $$T(n)=3T(\frac{n}{2})+1$$
- Multiplication of complex numbers
    - Input: (a + bi)(c + di)
    - Output: (ac - bd) + (bc + ad)i
- Faster algorithm for multiplying two complex numbers
    - 3 multiplications (1 at r, 1 at s, 1 at t)
    - 5 additions/subtractions (2 at r, 2 at e, 1 at f)

```python
r = (a + b)(c + d) = ac - bd + bc - ad
s = bc
t = ad
e = ac - bd = r - s + t
f = ad + bc = s + t
```

- Multiplication of large integers
    - $$ab * cd$$ where a is the upper half of the bit string, b is the lower half of the bit string, and ab is the entire number represented as a bit string.
    - $$(a \cdot 2^{n/2} + b)(c \cdot 2^{n/2} + d)$$
    - $$(ac)2^{n} + (ad + bc)2^{n/2} + bd$$ where $$2^{n}$$ and $$2^{n/2}$$ are shifts.
    - Apply the same trick when multiplying two complex numbers.
    - Requires 3 multiplications, 4 additions, and 2 shifts.
- When explaining recursion, describe the recursive step, not the entire process. Avoid using iteration to describe recursion. E.g. For all, for each, etc.
- Matrix multiplication
    - For each entry in the answer matrix, it requires $$O(n)$$ operations so constructing the entire answer matrix requires $$O(n^{3})$$ since $$n \cdot n^2 = n^3$$.
    - Recursive method
        - Split each matrix into quadrants.

## L11: (D&C) Largest sum of subarray and Recursions

- Mergesort recurrence: $$T(n) = 2T(n/2) + n + n$$
    - $$2T(n/2)$$ because we split the input in half and we have to sort two subarrays.
    - $$+ n + n$$ because we divide the array and later merge it
- Example
    - $$[7, 3, -11, 5, 4, -3, 7, 2, -9, -8, 12, -2]$$
    - Sample output: $$[5, 4, -3, 7, 2] = 15$$.
- Brute force is $$\Theta(n^{3})$$ because we try all starting indices and all ending indices. Getting the starting and ending indices is $$n^{2}$$ and getting the indices between them is $$n$$.
- D&C is to split the array into two subarrays and to calculate the largest sum of those subarrays. We also need to care for the case when the solution crosses the border.
- We ask each subarray for its
    - Largest subarray
    - Largest subarray touching the dividing border
    - Largest subarray touching its edges
    - Total sum
- Each subarray returns four pieces of information.
- Whatever I ask my children, I must also give to my parent.
- The largest sum of an array must come from three cases
    - The left subarray
    - The right subarray
    - A combination of the left and right subarray
- Runtime of $$T(n) = 2T(n/2) + \Theta (n) + \Theta(1)\ \epsilon\ \Theta(n log n)$$
    - Dividing is linear time if we copy the array into two subarrays.
    - Merging is clearly constant time $$\Theta(1)$$. We need to compute 4 numbers from 8 numbers.
- $$T(n) = 2T(n/2) + \Theta (1) + \Theta(1)\ \epsilon\ \Theta(n)$$
    - If the division were constant time, then the algorithm would be linear. It can be if we pass indices for the start and end of the subarray instead of copying.
- Master Theorem
    - Let $$T(n) = aT(n/b) + f(n)$$ where $$a$$ is the number of subproblems, $$b$$ is the size of each subproblem, and $$f(n)$$ is the cost of dividing and merging.
    - Depth = $$log_{b}(n)$$.

## L12: (D&C) Closest points in the plane

- Input: n points $$(x_{1}, y_{1}), ..., (x_{n}, y_{n})$$
- Output: the two closest points
- $$\{dist(p, p') = \sqrt{|x-x'|^2 + |y-y'|^2}\}$$
- Trivial algorithm: $$\Theta(n^2)$$
- Now: $$\Theta(n\ log(n))$$
- Master theorem
    - Case 1: Many leaves so the cost is mostly the leaves. More expensive to solve subproblems.
    - Case 2: Leaves and root are the same cost. Same to solve subproblems.
    - Case 3: Few leaves so the cost is mostly the root. Cheaper to solve subproblems.
- To solve for the closest points in a plane
    - Divide the plane into half
    - Find the half by presorting
    - Solve each half recursively and deal with the border somehow
    - Whatever we get as input, our children should get as input
- Algorithm

```none
    Presort (n log n Time)
      P_x = all n points sorted with respect to x-axis
      P_y = all n points sorted with respect to y-axis
    Divide (Linear Time)
      Q_x = left half of points sorted with respect to x-axis
      Q_y = left half of points sorted with respect to y-axis
      R_x = right half of points sorted with respect to x-axis
      R_y = right half of points sorted with respect to y-axis
    Merge
      d = min(d_left, d_right)
      d_final = min(d_left, d_right, d_border)
```

- We want to merge in linear time to get n log n time.
- Discard all points that are delta (d) away from the border.
- We use P_y to get the points closer to the border in linear time.

## L13: (D&C) FFT - Fast Fourier Transforms

- D&C = Recursion with non-overlapping
- DP = Recursion with overlapping subproblems
    - Develop recursively
    - Implement iteratively
- Don’t use memoization because it doesn’t speak enough about recursion.
- Master theorem
    - $$f(n)$$ is the cost of the root, $$n^{log_b(a)}$$ is the cost of the leaves.
    - Master theorem doesn’t apply to non-polynomial separated functions, only to poly-separated functions.

# Dynamic programming (5)

## L14: (DP) Scheduling

- Job selection
    - Input: wages $$w_1, w_2, ..., w_n$$ (wages for 1 day of work)
    - Output: Earn as much as possible
    - Constraint: You cannot work 2 days in a row
    - Examples
        - E.g. $$[4, 3, 2, 4, 1]$$ (n = 5)
        - Work on days 1 and 4 to earn 8.
        - E.g. $$[6, 9, 2, 1, 4, 5, 3]$$ (n = 7)
        - Work on days 2, 5, and 7 to earn 16.
        - E.g. $$[6, 9, 2, 1, 4, 5, 3, 4]$$ (n = 8)
        - Work on days 2, 4, 6, and 8 to earn 19.
    - Greedy doesn’t work because we can’t extend the solution from n = 7 to n = 8.
    - A small change at the end changes the solution so this is a global problem.
    - Solution
        - Recursively think about solving the subproblems.
        - Either we work day n or we don’t work day n.
        - If we work day n, then we can’t work day n - 1. Work optimally among the first n - 2 days.
        - If we don’t work day n, then we work optimally among the first n - 1 days.
        - We pick the better of the two conditionals.
    - Proof
        - Base case
            - (n = 1) work day 1
            - (n = 2) work the day with the higher wage
        - The important idea is to ask what is the optimal value from the children.
        - What value do you want from your children?
        - $$C[k]$$ = optimal value we can earn among days $$1, 2, ..., k$$. **CORE OF ALGORITHM**
    - $$C[n] = max\{w_n + C[n-2], C[n-1]\}$$. Either we work for wage $$w_n$$ or we don’t work.
        - $$C[k] = max\{w_k + C[k-2], C[k-1]\}$$ for $$k \geq 3$$.
    - $$C[2] = max\{w_1, w_2\}$$
        - $$C[1] = w_1$$
- Implementation (Bottom-Up)
    - E.g. $$[6, 9, 2, 1, 4, 5, 3, 4]$$ (n = 8)
    - Base case: $$C = [6, 9]$$
    - Completed C: $$C = [6, 9, 9, 10, 13, 15, 16, 19]$$
    - Output 19 as the total we will earn.
    - Remember to output a value from your algorithm.
- Weighted Interval Scheduling
    - We can make a small change to the problem (changing a weight to infinity) that changes the entire solution.
    - Think in terms of the number of jobs (n), not the number of days (d).
    - Solution
        - Presort the intervals with respect to finishing time. (Break ties arbitrarily)
        - Either we work job n and earn wage w
            - Work optimally among jobs that finishes before job n starts.
        - Or we don’t work job n and don’t earn w
            - Work optimally among jobs 1, …, n-1
        - $$C[n]$$ = maximum amount we can earn among jobs 1 through n.
    - $$C[k]$$ = max amount we can earn among jobs 1 through k ($$k \geq 1$$)
        - Either we work job n so: $$w_n + max_j\{C[j] \vert f_j \leq s_n\}$$ (we want to maximize the wage for jobs that finish before n starts)
        - Or we don’t work job n so: $$C[n-1]$$ (work optimally among $$n-1$$ jobs)
        - Then we take the max of both cases to get $$C[n]$$.
        - $$C[1] = w_1$$ for the base case.

## L15: (DP) Knapsack and Subset Sum

- Our algorithm developed today is not poly-time.
- Problem
    - Input
        - n items
        - weights $$w_1, w_2, ..., w_n$$
        - values $$v_1, v_2, ..., v_n$$.
        - Knapsack of capacity W
    - Output
        - Fill knapsack with as valuable load as possible (not overfill)
    - Example
        - (w=10, \$25), (w=15, \$30), (w=20, \$80), (w=30, \$100)
        - Knapsack of size 45
        - An optimal solution: $$\{1, 2, 3\}$$. The optimal value: \$135
    - Solution
        - Either we pick item n
            - The knapsack capacity changes. Remaining capacity is $$W - w_n$$ where $$W$$ is the knapsack capacity before we chose n. If it doesn’t fit then don’t consider it.
            - We earn the the value of n plus the optimal value among 1 to $$n-1$$.
        - Or we don’t pick item n
            - Earn optimally among items 1 to $$n-1$$.
            - Remaining capacity doesn’t change.
        - $$C[n, W]$$ = maximum value in knapsack of capacity $$W$$ among items 1 through n.
    - $$C[k, T]$$ = maximum value in knapsack of capacity $$T$$ among items 1 through k.
        - A 2D array where the rows are the number of items and the columns are the capacity of the knapsack.
        - Populating the array takes $$\Theta(n \cdot W)$$ which is not poly-time. Poly-time means an algorithm that runs in polynomial time on the input size. It’s actually exponential.
        - $$C[n, W] = max(C[n-1, W- w_n] + v_n (either\ case), C[n-1,W] (or\ case))$$
        - $$C[k, T] = max(C[k-1, T-w_k] + v_k (either\ case), C[k-1,T] (or\ case))$$
        - Base cases
            - 0 capacity = 0 value
            - 0 items = 0 value
    - DP = Recursion

## L16: (DP) Word problems

- Longest common subsequence
    - Input: Two string X and Y of lengths n and m. $$X = x_1, x_2, ..., x_n$$ and $$Y = y_1, y_2, ..., y_n$$.
    - Output: Length of a LCS of X and Y.
    - A subsequence, Z, of a string can be obtained by deleting some symbols in the string.
    - Examples
        - X = dynamic, Y = static, Z = aic
        - X = algorithms, Y = matchings, Z = aths
    - Solution
        - LCS($$X_a, X_b$$) = LCS(X, Y) (if $$a = b$$) or LCS($$X_a, Y$$) or LCS($$X, Y_b$$) (if $$a \neq b$$)
        - LengthLCS($$X_a, X_b$$) = lengthLCS(X, Y) + 1 (if $$a = b$$) or max{lengthLCS($$X_a, Y$$), lengthLCS($$X, Y_b$$)} (if $$a \neq b$$)
        - $$LCS(X, \epsilon) =  \epsilon$$, $$LCS(\epsilon, Y) = \epsilon$$, $$lengthLCS(\epsilon, Y) = 0$$, $$lengthLCS(X, \epsilon) = 0$$.
    - Starting from the end/back of X and Y. Recursively apply the following function.
        - If the end symbols match, then remove the end symbols and call this algorithm again.
        - If the end symbols don’t match, then call this algorithm twice. Once on the full first string and the second string with the end symbol removed, and once on the first string with the end symbol removed and the full second string.
        - Subproblem is a prefix of X and a prefix of Y.
        - $$C[i,j]$$ = value of the subproblem $$LCS(x_1, ..., x_i, y_1, ..., y_j)$$.
    - The storage of the subproblem solutions is a 2D array where the rows are prefixes of Y and the columns are prefixes of X. Each cell holds the length of the LCS of $$x_1, ..., x_i$$ and $$y_1, ..., y_j$$. The output is the value at the top right of the 2D array.
        - Number of subproblems is $$\Theta(nm)$$ because subproblems is $$(n+1)(m+1)$$. Since each subproblem takes constant time, the runtime is $$\Theta(nm)$$.
    - Printing the LCS

```python
PrintLCS(C, n, m, X, Y)  # Call subroutine
PrintLCSRec(C, i, j, X, Y):  # Define subroutine
if i == 0 or j == 0:
    return
if C[i, j] == "Diagonal":
    PrintLCSRec(C, i - 1, j - 1, X, Y)
    print(X[i])
elif C[i, j] == "Horizontal":
    PrintLCSRec(C, i - 1, j, X, Y)
else:
    PrintLCSRec(C, i, j - 1, X, Y)
```

## L17: (DP) Matrix problems

- Matrix Chain Multiplication
    - Input
        - matrices $$A_1, A_2, .., A_n$$
        - integer n
        - dimensions $$p_0, p_1, ..., p_n$$. (Matrix $$A_i$$ has dimensions ($$p_{i-1}, p_i$$))
    - Output
        - the fastest way (order of multiplication) to compute the product $$B = A_1 A_2 ... A_n$$.
    - Dimensions of B $$(p_0, p_n)$$, $$A_1$$ $$(p_0, p_1)$$, $$A_2$$ $$(p_1, p_2)$$, … $$A_n$$ $$(p_{n-1}, p_n)$$.
    - Cost of multiplying two matrices, one of $$(p, q)$$ and one of $$(q, r)$$, is $$pqr$$.
    - Example
        - $$A_1 (4, 6), A_2 (6, 2), A_3 (2, 2), B (4, 2)$$
        - Two multiplications: $$(A_1 A_2)A_3$$ or $$A_1(A_2 A_3)$$.
        - The first one costs 64, the second one costs 72. So the first chain multiplication is cheaper.
    - The key insight is that there’s a last multiplication, we just don’t know where.
    - Last multiplication
        - $$Cost(A_{1-n}) = min\{cost(A_{1-k}) + cost(A_{(k+1)-n}) + (p_0p_kp_n)\}$$ where $$1 \leq k \leq n - 1$$.
    - The cost equation is the smallest cost to compute the product $$(A_1A_2...A_n)$$.
        - General cost: $$Cost(A_{i-j}) = min\{cost(A_{i-k}) + cost(A_{(k + 1) - j}) + (p_{i-1}p_kp_j)\}$$ where $$i \leq k \leq j - 1$$.
        - Base cases: $$Cost(A_{i-i}) = 0$$ where $$1 \leq i \leq n$$.
    - Solution storage: $$C[i, j] = cost(A_{i-j})$$ which is a 2D array.
        - Rows are j, columns are i.
        - Output the cell at i = 1 and j = n so $$C[1, n]$$.
        - Base cases are the diagonal so we get a diagonal of zeros.
        - We don’t use half of C (bottom-right triangle) because i must be less than j.
        - We fill out C diagonally.
        - Solving one cell in C requires the solutions down and right.
        - It takes $$\Theta(n)$$ per cell for $$\Theta(n^2)$$ cells so the algorithm takes $$\Theta(n^3)$$.

## L18: Algorithmic thinking

- Problem 1 Asymptotics
    - $$f_1 = n log_4(n)$$
    - $$f_2 = 4 log_2(n)$$
    - $$f_3 = n^4$$
    - $$f_4 = n^{1/4}$$
    - $$f_5 = 2^{log_4(n)} = n^{log_4(2)} = n^{0.5}$$
- Running Times
    - $$S(n) = S(\sqrt{n}) + \frac{n}{2} \approx n$$ > $$T(n) = T(\frac{n}{2}) + \sqrt{n} \approx \sqrt{n}$$
    - $$S(n) = 4S(\frac{n}{2}) + nlog(n) \approx n^2$$ > $$T(n) = 8T(\frac{n}{4}) + nlog(n) \approx n^2$$
    - $$S(n) = log(n!) \approx nlog(n)$$, = $$T(n) = 3T(\frac{n}{3}) + n \approx nlog(n)$$
    - $$S(n) = S(\frac{n}{2}) + S(\frac{n}{2}) + 1 \approx n$$ = $$T(n) = 5T(\frac{n}{5}) + 3 \approx n$$

# NP and Reducibility (6)

## L19: (NP) Reducibility

- How hard is problem X?
    - Problem X can be solved in polynomial time.
    - Problem X can be solved in exponential time.
    - Problem X can not be solved in polynomial time.
    - I do not know whether problem X can be solved in polynomial time or not.
- The biggest problem with NP is that we aren’t trying to solve the problem, but we are trying to classify problems.
- Relative difficultly of Problem X and Problem Y
    - Problem Y is at least as hard as problem X.
    - If problem Y can be solved in poly-time, so can X.
    - If problem X cannot be solved in poly-time, then neither can Y.
    - Problem X and problem y are equally hard.
    - $$X \leq Y$$ = Problem X is easier than Problem Y
- Independent Set
    - Input: Graph $$G=(V, E)$$ on $$n = \lvert V \rvert$$ vertices and an integer k, $$0 \leq k \leq n$$.
    - Output: “Yes”, if G contains an independent set of size k or “No” otherwise.
    - An independent set is a set of vertices such that they don’t share an edge.
- Even-Independent Set
    - The same as the independent set problem but where k is even.
- It’s easier to solve the even-independent set problem because there are fewer (half) inputs to consider.
- To convert from the even-independent set problem to the independent set problem, duplicate the graph and double k.
- Another conversion is to add an independent node and add one to k.
- Vertex Cover
    - Input: Graph G = (V, E) and integer T, $$0 \leq t \leq n$$.
    - Output: “Yes” if G has a vertex cover of size t or “No” otherwise.
    - A vertex cover is a set of vertices such that every edge has at least one endpoint in T.
- We can convert between independent set and vertex cover by doing $$\lvert V \rvert - t = k$$.
- If S is an independent set, then V - S is a vertex cover.
- Set Cover
    - Input: A set $$U = \{u_1, ..., u_n\}$$, a collection of subsets $$S_1, S_2, ..., S_m$$ of U, and an integer r $$0 \leq r \leq m$$.
    - Output: “Yes” if there exists a set cover of size r or “No” otherwise.
    - A set cover is a collection of subsets who’s union is U. The size of a set cover is the number of subsets in the collections.
- Example
    - $$U = \{1, 2, 3, 4, 5, 6, 7\}$$
    - $$S_1 = \{1, 4, 6\}$$, $$S_2 = \{2, 5, 6\}$$, $$S_3 = \{1, 4, 5, 7\}$$, $$S_4 = \{3, 5\}$$, $$S_5 = \{1, 2, 7\}$$, $$S_6 = \{1, 3, 4\}$$.
    - A set cover of size 3 = $$S_2, S_5, S_6$$.
- To convert from vertex cover to set cover, turn each vertex into a subset of edges that are connected to it. Label each edge and use that numbering for each subset.

## L20: (NP) Satisfiability and NP

- Satisfiability
    - Input: Formula F
    - Output: “Yes” if F is satisfiable, “No” otherwise
- 3SAT
    - Input: A formula F in which every clause has exactly 3 distinct literals
    - Output: “Yes” if F is satisfiable, “No” otherwise
- Formulas
    - $$F = (x_1 \lor x_3 \lor \bar{x_4}) \land (x_1 \lor \bar{x_2} \lor \bar{x_3}) \land (\bar{x_2} \lor \bar{x_3} \lor x_4) \land (\bar{x_1} \lor x_3 \lor x_4)$$
    - n = # of variables = 4
    - m = # of clauses = 4
    - 2n literals since the negations count
    - Evaluate $$F = F(x)$$ where $$x_1 = 1, x_2 = 1, x_3 = 0, x_4 = 1$$, then F = 1 which means this assignment causes F to be satisfiable.
- Theorem: $$SAT \leq_m 3SAT$$
    - Given a formula, we want to output a formula with exactly three distinct clauses
    - Proof sketch
        - Use of dummy variable: $$(x_1 \lor x_2 \lor x_3 \lor x_4) \rightarrow (x_1 \lor x_2 \lor d) \land (\bar{d} \lor x_3 \lor x_4)$$ to turn one clause with 4 literals to two clauses with 3 literals.
        - $$(x_1 \lor x_2 \lor x_3 \lor x_4 \lor x_5) \rightarrow (x_1\lor x_2\lor d_1)\land(\bar{d_1}\lor x_3\lor d_2)\land(\bar{d_2}\lor x_4\lor x_5)$$
        - $$(x_1 \lor x_2) \rightarrow (x_1 \lor x_2 \lor d)\land(x_1 \lor x_2 \lor \bar{d})$$
        - $$(x_1) \rightarrow (x_1 \lor d_1 \lor d_2)\land(x_1 \lor d_1 \lor \bar{d_2})\land(x_1 \lor \bar{d_1} \lor d_2)\land(x_1 \lor \bar{d_1} \lor \bar{d_2})$$
        - The above formulas are a reduction.
- Independent Set (IS)
    - Input: Graph G = (V, E) and integer k where $$0 \leq k \leq n$$
    - Output: “Yes” if G has an IS of at least size k, “No” otherwise
    - An IS is a set of nodes with no edges between them.
- Theorem: $$3SAT \leq_m Independent\ Set$$
    - If the formula is satisfiable, then there must be an IS with size k.
    - Reduction
        - Turn each literal into a node so we get 3m nodes.
        - For each clause, connect all literals in the clause to each other to build a triangle.
        - Pick one literal in each clause to be true.
        - Between the triangles, connect the nodes of variables and their negations because we cannot pick both the variable and its negation.
        - Let k = the number of clauses.
- Lemma: If F is satisfiable, then G has an IS of size k.
    - Assuming that F is satisfiable, pick a satisfying assignment.
- Lemma: If F is not satisfiable, then G does not have an IS of size k.
    - It’s easier to prove the contrapositive: If G has an IS of size k, then F is satisfiable.
    - Assuming the triangles are clauses, we pick exactly one node from each triangle.

## L21: (NP) Hamiltonian cycle, 3-Coloring — reductions

- Directed Hamiltonian Cycle
    - Input: Directed graph G = (V, E)
    - Output: “Yes” if G has a Hamiltonian cycle, “No” otherwise
    - Hamiltonian cycle: a path that visits every vertex exactly once.
- 3-Color
    - Input: Graph G = (V, E) on n vertices
    - Output: “Yes” if G is 3-colorable, “No” otherwise
- 3SAT
    - Input: 3SAT formula F
- Output: “Yes” if F is satisfiable, “No” otherwise
- Theorem: 3SAT $$\leq$$ Directed Hamiltonian Cycle
    - Given: Formula F
    - Want: To construct a directed graph G = (V, E) such that F is satisfiable if and only if G has a Hamiltonian cycle
    - 3SAT: There exists an assignment that satisfies all of the clauses
    - DHC: There exists a path that touches all vertices
    - Reduction
        - Stage 1: Encode an assignment to the n variables $$x_1, x_2, ..., x_n$$ in F as a subgraph.
            - There are $$2^n$$ possible assignments.
            - Every Hamiltonian cycle of the graph corresponds to an assignment of F.
        - Stage 2: Encode each clause of F into the subgraph as a node C.
            - We can visit C in both directions (true/false) but only one direction doesn’t lead to a cycle.
            - We can use C to shortcut to other parts of the graph but that doesn’t lead to a Hamiltonian cycle if we don’t revisit the variable.
    - Claim: Our reduction is poly-time.
        - Total number of vertices in G is (4n + 2) + (13m).
    - Claim: If F is satisfiable, then G has a Hamiltonian cycle.
        - Assume F is satisfiable. Let z be an assignment that satisfies F.
        - Observe that if a clause $$C_i$$ can be satisfied in 2 or 3 ways, then pick the first variable that satisfies the clause. Then use that variable to visit $$C_i$$.
    - Claim: If G has a Hamiltonian cycle, then F is satisfiable.
        - Assume G has a Hamiltonian cycle.
        - Argue that the structure of the graph and that a Hamiltonian cycle results in a satisfiable formula.
- Theorem: 3-Color $$\leq$$ 3SAT
    - Given: Graph G of n vertices and m edges.
    - Want: To construct a formula F such that F on (5n + 3m + 4) clauses and (3n + 3) variables is satisfiable if and only if G is 3-colourable.
    - 3-Color: There exists a colouring such that no no same-coloured nodes touch.
    - 3SAT: There exists an assignment that satisfies all of the clauses
    - Reduction
        - Stage 1: Pick one of the $$3^n$$ possible colourings.
            - We’ll use 3 variables for each vertex $$x_j: v_j, w_j, z_j$$.
            - $$v_j = 1$$ iff $$x_j$$ gets colour v, $$w_j = 1$$ iff $$x_j$$ gets colour w, $$z_j = 1$$ iff $$x_j$$ gets colour z.
            - Start with $$(v_j \lor w_j \lor z_j) \land (\bar{v_j} \lor \bar{w_j} \lor \bar{z_j})$$ to say each node gets at least one color, but not all three colors.
            - AND it with $$(v_j \lor \bar{w_j} \lor \bar{z_j}) \land (\bar{v_j} \lor w_j \lor \bar{z_j}) \land (\bar{v_j} \lor \bar{w_j} \lor z_j)$$ to rule out nodes with two colors.
            - Used to rule out 5 out of 8 combinations in the truth table.
        - Stage 2: The two endpoints $$x_i\ \&\ x_j$$ of an edge $$(x_i, x_j)$$ have different colors.
            - They can’t both have the colour v, nor colour w, nor colour z.
            - This is captured by the formula $$(\bar{v_i} \lor \bar{v_j} \lor f) \land (\bar{w_i} \lor \bar{w_j} \lor f) \land (\bar{z_i} \lor \bar{z_j} \lor f)$$
            - Ensure f evaluates to false by using a dummy variable $$(\bar{f} \lor d_1 \lor d_2) \land (\bar{f} \lor d_1 \lor \bar{d_2}) \land (\bar{f} \lor \bar{d_1} \lor d_2) \land (\bar{f} \lor \bar{d_1} \lor \bar{d_2})$$

## L22: (NP) NP and efficient algorithms

- It is easy to verify a solution, provided one exists.
    - SAT = There exists an assignment s.t. the formula is satisfiable
    - 3SAT = There exists an assignment s.t. the formula is satisfiable
    - Independent set = There exists a set of vertices s.t. there are no edges between any vertices
    - Vertex cover = There exists a set of vertices s.t. every edge touches a vertex
    - Set cover = There exists indices s.t. subsets of those indices cover the original set
- Solution = Certificate = Proof = Witness
- It takes poly-time to verify that the certificate indeed satisfies the property.
- Definition: Let X be a decision problem
    - $$X \in NP$$ if there exists a poly-time witness, p(), and a poly-time verifier, B(), such that (s.t.)
      1. $$x \in X: \exists y : \lvert y \rvert  \leq p(\lvert x \rvert),\ B(x, y)\ accepts$$ (If we are given a satisfying assignment, we can verify that assignment in poly-time)
      2. $$x \notin X: \forall y : \lvert y \rvert \leq p(\lvert x \rvert),\ B(x, y)\ rejects$$ (If we are given an unsatisfying assignment, we can verify that assignment in poly-time)
    - There’s an asymmetry between true and false answers as described above.
    - This is the definition of NP.
    - Non-deterministic polynomial time (NP): we can verify a witness in poly-time.
- Proof vertex cover is in NP
    - Assume r vertices are the witness
    - Check r is distinct
    - Check every edge touches one of the vertices in r
    - Then the check runs in poly-time
- Theorem: A problem is in NP iff the problem many-to-one reduces to 3SAT.
    - $$X \in NP \Leftrightarrow X \leq 3SAT$$
    - X is NP-complete iff $$(X \leq 3SAT) \land (3SAT \leq X)$$
    - X is NP-hard if $$3SAT \leq X$$
    - The Halting problem is NP-hard
- Theorem: $$(A \leq B) \land (B \leq C) \Rightarrow (A \leq C)$$
    - Many-to-one reductions are transitive
    - We can assume this is true and use it in the final
- We have seen that $$(3SAT \leq Independent\ Set) \land (Independent\ Set \leq Vertex\ Cover)$$
    - Now we show that $$3SAT \leq Vertex\ Cover$$
    - Let $$A \leq B = f(x)$$ and $$B \leq C = g(y)$$, then $$A \leq C = g(f(x))$$.
    - It isn’t obvious that the reduction is poly-time.
    - We know that f(x) is poly and g(y) is poly so f(g(y)) a poly(poly(x)) is still a polynomial.
    - $$(n^3)^2 = n^6$$

## L23: (NP) NP, NP-completeness, NP-hardness, co-NP

- Handout answers

|                                               |                                                     |                                                |
| --------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| 1. **T**                                      | 9. **F (Let X = SORT, Y = HALT)**                   | 17. **F (SORT easier than 3SAT)**              |
| 2. **F (reduce to halting)**                  | 10. **U (Don’t know if 3SAT is in co-NP complete)** | 18. **U (same as q23)**                        |
| 3. **U (co-NP ?= NP)**                        | 11. **T (HALT is as difficult as 3SAT)**            | 19. **F**                                      |
| 4. **F (halting)**                            | 12. **F (sorted array)**                            | 20. **T**                                      |
| 5. **U**                                      | 13. **F (not in scope)**                            | 21. **T (poly can reduce to NP)**              |
| 6. **Halting Problem**                        | 14. **U (co-NP ?= NP)**                             | 22. **F (3SAT reduces to HALT)**               |
| 7. **U (integer factor)**                     | 15. **F**                                           | 23. **U**                                      |
| 8. **F (Let X = HALT, Y = FINITE, Z = 3SAT)** | 16. **F (transitive)**                              | 24. **T (reduction flips, 2SAT is poly-time)** |

- You can’t flip the yes/no in a many-to-one reduction.
- Halting problem is very useful for these problems.
- 3SAT can be reduced to Halting Problem.
- These types of questions will be on the final exam.
- $$A \leq B \Leftrightarrow \bar{A} \leq \bar{B}$$
- NP-Hard: am I at least as hard as 3SAT?
- Q13 will not be on the final (out of course scope)

## L24: (NP) NP completeness and hardness, exam preps

- Complete L23 questions
- Knapsack
    - We saw a DP-algorithm that runs in O(nW) steps.
    - Doesn’t run in poly-time because W is a very large integer, not the input length
    - E.g. W = 91034550189173 = 14 digits = 50 bits
    - W is exponential growth
- Assignment 4
    - Subset Sum
        - Input: n integers $$w_1, w_2,..., w_n$$ and a target T
        - Output: Yes if there is a subset that sums to T, No otherwise.
        - NP-Complete
    - $$Vertex\ Cover \leq Subset\ Sum$$

| Vertex | (1, 2) | (1, 4) | (2, 3) | (2, 4) | (3, 4) | (4, 5) |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| 1      | 1      | 1      | 0      | 0      | 0      | 0      |
| 2      | 1      | 0      | 1      | 1      | 0      | 0      |
| 3      | 0      | 0      | 1      | 0      | 1      | 0      |
| 4      | 0      | 1      | 0      | 1      | 1      | 1      |
| 5      | 0      | 0      | 0      | 0      | 0      | 1      |

- We can cover the graph by selecting vertex 2 and 4.
- We can consider rows 2 and 4 as integers. Row 2 = 101100, Row 4 = 010111
- We add along the columns. However, each column doesn’t add up to a consistent number.
- Introduce dummy rows such that we can increase the the sum from 1 to 2 but not from 0 to 2.
- Big integers are powerful.

## L25: Exam preparations

- Fall 2014, Problem 6
    - Q2
        - X is NP hard and $$X \leq HighInt$$, then coNP = NP
        - Answer: True
        - If P = NP, then NP = coNP
    - Q9
        - If $$3SAT \leq X$$ and $$SETCOVER \nleq X$$, then $$X \in P$$
        - Answer: True
        - Premise is false, therefore the conditional is true.
    - Q12
        - If $$NP \neq coNP \Rightarrow P \neq NP$$
        - Answer: True
- Fall 2018, Problem 6
    - Q5
        - $$P = NP \Rightarrow \overline{IS}\ is\ NPcomplete$$
        - Is not 3SAT the hardest problem in P?
        - Answer: True
        - $$X \in P \Rightarrow \bar{X} \in P$$
    - Q8
        - $$X \in NPhard\ and\ \bar{X} \leq 3SAT \Rightarrow X \leq \bar{X}$$
        - $$\bar{X} \leq 3SAT \leq X$$
        - $$\bar{X} \leq X \Leftrightarrow X \leq \bar{X}$$
    - Q9
        - Every non-trivial problem in P is NP-complete.
        - Answer: Unknown
- Final notes
    - Similar format
    - Write example
    - Don’t write template for proof
