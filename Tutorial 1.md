# Tutorial 1

### Q1 Practicing Recurrence Relations

**(a)** $T(n) \leq 3 \cdot T(n/2) + O(n \log^3 n)$

$a = 3, b = 2$
$f(n) = O(n \log^3n)$
$n^{log_b a} = n^{\log_2 3} \approx n^{1.58}$

Compare $f(n)$ and $n^{\log_b a}$ : $n^{\log_b a}$ is larger, therefore we apply case 1.

Since $f(n) = O(n^{\log_2 3-\epsilon})$ for $\epsilon = 0.58$,
then $T(n) = O(n^{\log_2 3})$.

*Note: check whether correct $\epsilon$ was used*.



**(b)** $T(n) \leq 4 \cdot T(n/2) + O(n^2)$

 $a = 4, b = 2$
$f(n) = O(n^2)$
$n^{\log_b a} = n^{\log_2 4} = n^2$

Compare $f(n)$ and $n^{\log_b a}$: They are the same, therefore we apply case 2.

Since $f(n) = O(n^{\log_2 4} \log^k n)$ for $k=0$,
then $T(n) = O(n^{\log_2 4}\log n) = O(n^2 \log n)$.



**(c)** $T(n) \leq 2 \cdot T(n/2) + O(n \log^2 n)$

$a = 2, b = 2$
$f(n) = O(n\log^2 n)$
$n^{\log_b a} = n^{\log_2 2} = n$

Compare $f(n)$ and $n^{\log_b a}$: They are the same (they are different by a logarithmic factor, not a polynomial factor), therefore we apply case 2.

Since $f(n) = O(n^{\log_2 2}\log^k n)$ for $k = 2$,
then $T(n) = O(n \log^{k+1} n) = O(n \log^3n)$.



**(d)** $T(n) \leq 2 \cdot T(n/4) + O(n^{0.5001})$

$a = 2, b = 4$
$f(n) = O(n^{0.5001})$
$n^{log_b a} = n^{\log_4 2} = n^{0.5}$

Compare $f(n)$ and $n^{\log_b a}$: $f(n)$ is larger, therefore we apply case 3.

Since $f(n)= \Omega(n^{\log_4 2+\epsilon})$ for $\epsilon = 0.001$,
and for sufficiently large $n$, we have that 
$af(n/b) = 2(n/4)^{0.5} \leq n^{0.5} = cf(n)$ for $c = 1$, thus $f$ satisfies the regularity condition.
Therefore, $T(n) = O(n^{5.001})$.



### Q2 Monotonic Function Evaluation

We are given the property that $f(i) > f(i+1)$ for all $i \in \mathbb{N}$. 
Based on this property, we can use a binary search algorithm.

Let $min = 1, max = n, mid = \lceil{n/2}\rceil$

Check if $f(mid) \leq 0$.
If it is, perform recursion on the left half between $min$ and $mid$, with the new $mid = \lceil{(min+mid)/2}\rceil$
If it is not, perform recursion on the right half between $mid$ and $max$, with the new $mid = \lceil{(mid+max)/2}\rceil$

As the algorithm is recursing, keep track of min. 
Since we are using a binary search algorithm, the runtime would be $O(\log n)$.

*Note: Check how complete the algorithm has to be, or if this is good enough.*

### Q3 Maximum Subarray Sum

