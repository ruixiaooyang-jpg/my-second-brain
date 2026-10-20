/* ETF5248 supplementary cards for slide pages that no built-in entry cites. Paraphrased; physical PDF pages. Loaded only by button; see etx5500-pack.js. */
window.ETF5248Pack={
 "version": 1,
 "course": "ETF5248",
 "cards": [
  {
   "id": "etf5248-vectors-matrices-notation",
   "kind": "concept",
   "title": "向量、矩阵记号与线性方程组 Ax=b",
   "titleEn": "Vector and matrix notation, and the system Ax=b",
   "body": "讲义 2 复习线性代数记号：n 维向量写成 \\(x=(x_1,\\dots,x_n)\\)，全体实 n 维向量记作 \\(\\mathbb R^n\\)；特殊向量有零向量 \\(0\\)、全 1 向量 \\(1\\)，以及第 i 个分量为 1、其余为 0 的基（单位）向量 \\(e_i\\)。\\(m\\times n\\) 矩阵的全体记作 \\(\\mathbb R^{m\\times n}\\)，\\(A_{ij}\\) 是第 i 行第 j 列元素；向量可看作只有一列的矩阵；特殊矩阵有零矩阵和单位矩阵 \\(I\\)（对角线为 1，其余为 0）。含 n 个变量的 m 个线性方程可以写成矩阵形式 \\(Ax=b\\)，这正是后面把线性规划约束写成 \\(Ax\\le b\\) 的基础。",
   "bodyEn": "Lecture 2 reviews the notation. An n-vector is \\(x=(x_1,\\dots,x_n)\\) and the set of real n-vectors is \\(\\mathbb R^n\\); special vectors are the zero vector \\(0\\), the all-ones vector \\(1\\), and the unit vector \\(e_i\\) with a 1 in position i and 0 elsewhere. The set of \\(m\\times n\\) matrices is \\(\\mathbb R^{m\\times n}\\), \\(A_{ij}\\) is the entry in row i, column j, and a vector is a matrix with one column; special matrices are the zero matrix and the identity \\(I\\). A system of m linear equations in n variables is written \\(Ax=b\\), which is the basis for writing LP constraints as \\(Ax\\le b\\) later.",
   "category": "补充 · Supplement (Lecture 2)",
   "source": "ETF2480_ETF5248_Lecture_2 (2).pdf · 补充要点（改写）/ paraphrased supplement",
   "sourcePage": "p. 4, 7, 10",
   "tags": [
    "ETF5248",
    "补充",
    "linear algebra",
    "notation"
   ],
   "related": []
  },
  {
   "id": "etf5248-simplex-complexity",
   "kind": "concept",
   "title": "单纯形法的复杂度：最坏情形与实际表现",
   "titleEn": "Simplex complexity: worst case versus practice",
   "body": "最坏情形下，对大多数主元（pivoting）规则都存在例子，使迭代次数随变量数 n 和约束数 m 呈指数增长；是否存在一种主元规则使迭代次数被 n、m 的多项式所限制，仍是开放问题。但在实践中单纯形法非常高效，迭代次数通常随 m、n 近似线性增长。学习时要区分理论保证（最坏情形）与经验表现（典型情形），不要因为最坏情形指数而认为单纯形法在实践中很慢。",
   "bodyEn": "In the worst case, for most pivoting rules there are examples where the number of iterations grows exponentially with n and m, and it is an open question whether some pivoting rule bounds the iterations by a polynomial in n and m. In practice the simplex method is very efficient, with the number of iterations typically growing roughly linearly in m and n. Keep the theoretical guarantee (worst case) separate from empirical behaviour (typical case): an exponential worst case does not make simplex slow in practice.",
   "category": "补充 · Supplement (Lecture 4)",
   "source": "ETF2480_ETF5248__Lecture_4 (1).pdf · 补充要点（改写）/ paraphrased supplement",
   "sourcePage": "p. 16",
   "tags": [
    "ETF5248",
    "补充",
    "simplex",
    "complexity"
   ],
   "related": []
  },
  {
   "id": "etf5248-ip-algorithm-families",
   "kind": "concept",
   "title": "整数规划的三类算法",
   "titleEn": "Three families of integer-programming algorithms",
   "body": "与线性规划不同，整数规划（IP）通常很难求解，没有已知的高效通用算法。讲义把算法分成三类：精确算法（保证找到最优解，但迭代次数可能呈指数增长，如分支定界、割平面）；近似算法（在多项式时间内给出次优解，并带有次优程度的界）；启发式算法（给出次优解，但不保证质量）。选择时是在最优性保证、运行时间和解的质量保证之间取舍。",
   "bodyEn": "Unlike LPs, IPs are generally hard and no efficient general algorithm is known. The lecture groups algorithms into three families: exact algorithms (guaranteed optimal but possibly exponential in iterations, e.g. branch-and-bound and cutting planes); approximation algorithms (a suboptimal solution in polynomial time with a bound on suboptimality); and heuristics (a suboptimal solution with no guarantee on quality). The choice trades off optimality guarantees, running time and quality guarantees.",
   "category": "补充 · Supplement (Lecture 7)",
   "source": "ETF2480_ETF5248_Lecture_7.pdf · 补充要点（改写）/ paraphrased supplement",
   "sourcePage": "p. 29",
   "tags": [
    "ETF5248",
    "补充",
    "integer programming",
    "algorithms"
   ],
   "related": []
  },
  {
   "id": "etf5248-lpsolveapi-workflow",
   "kind": "practice",
   "title": "工作坊：用 lpSolveAPI 建模并读取灵敏度信息",
   "titleEn": "Workshop: modelling with lpSolveAPI and reading sensitivity output",
   "body": "问题：当决策变量是自由变量（可取非正和非负值）时，lpSolve 需要手工做变量变换，还有什么工具能自然处理？答案要点：安装并使用 lpSolveAPI 包。流程为：准备目标系数 c、约束矩阵 A、右端项 b 和不等号向量；用 make.lp 建立模型，逐列 set.column 写入 A，lp.control 设置 min 或 max，set.objfn、set.constr.type、set.rhs 写入目标、约束类型和右端项；solve 求解后用 get.objective 和 get.variables 读取最优值与最优解。灵敏度信息可参照 Dakota Furniture 例题，输出含义见 get.sensitivity.rhs 的文档。",
   "bodyEn": "Question: when a decision variable is free (can be non-positive or non-negative), lpSolve needs a manual transformation; which tool handles this naturally? Answer sketch: the lpSolveAPI package. Workflow: prepare the objective coefficients c, the constraint matrix A, the right-hand side b and the inequality vector; build the model with make.lp, load A column by column with set.column, set min or max with lp.control, then set.objfn, set.constr.type and set.rhs; call solve and read get.objective and get.variables. For sensitivity information use the Dakota Furniture example, and read the output with the get.sensitivity.rhs documentation.",
   "category": "补充 · Supplement (Lecture 5)",
   "source": "ETF2480_ETF5248_Lecture_5.pdf · 补充要点（改写）/ paraphrased supplement",
   "sourcePage": "p. 43, 44, 45",
   "tags": [
    "ETF5248",
    "补充",
    "R",
    "lpSolveAPI",
    "workshop"
   ],
   "related": []
  },
  {
   "id": "etf5248-stigler-diet-history",
   "kind": "case",
   "title": "原始饮食问题：Stigler 的估计",
   "titleEn": "The original diet problem: Stigler's estimate",
   "body": "饮食问题是 20 世纪 30–40 年代最早研究的优化问题之一，起因是美军希望在保证健康饮食的同时，尽量降低野战部队的伙食成本。早期研究者之一 George Stigler 凭经验猜测最优饮食的成本约为每年 39.93 美元（1939 年价格）。讲义提到会在工作坊中重新计算这一最优饮食，可与课程里的饮食 LP 例题对照。",
   "bodyEn": "The diet problem was among the first optimisation problems studied, in the 1930s and 1940s, motivated by the U.S. Army wanting to minimise the cost of feeding soldiers in the field while keeping a healthy diet. One early researcher, George Stigler, made an educated guess that an optimal diet would cost about 39.93 dollars per year (1939 prices). The lecture says this optimal diet is recomputed in the workshop; compare it with the diet LP example in the course.",
   "category": "补充 · Supplement (Lecture 3)",
   "source": "ETF2480_ETF5248_Lecture_3 (1).pdf · 补充要点（改写）/ paraphrased supplement",
   "sourcePage": "p. 9",
   "tags": [
    "ETF5248",
    "补充",
    "diet problem",
    "history"
   ],
   "related": []
  }
 ]
};
