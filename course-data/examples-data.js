/* Worked examples paraphrased from the owner's lecture slides and tutorial solutions (physical PDF pages). Generated; see examples.js. */
window.CourseExamples={
 "version": 1,
 "examples": [
  {
   "id": "ex-etf5248-l1-applepie",
   "course": "ETF5248",
   "topic": "e5248-1",
   "topicName": [
    "引言与 LP 建模",
    "Introduction and LP modelling"
   ],
   "title": [
    "ApplePie 电脑店：建模为 LP 并写成矩阵形式",
    "ApplePie computer store: LP formulation and matrix form"
   ],
   "problem": [
    "ApplePie 是一家电脑零售店，卖台式机和笔记本。每台台式机利润 600 美元，每台笔记本利润 900 美元。受供应链影响，供应商下个月最多供货 80 台台式机和 75 台笔记本。员工每台台式机需 2 小时安装和检测软件，每台笔记本需 3 小时，下个月可用工时约 300 小时。管理层确信进货都能卖完，问应订多少台台式机和笔记本才能使利润最大。请建立 LP，写成 \\(\\max c^Tx,\\ Ax\\le b,\\ x\\ge 0\\) 的矩阵形式，并说明如何用 R 求解。",
    "ApplePie is a computer retail store selling desktops and laptops. It earns 600 dollars per desktop and 900 dollars per laptop. Because of supply disruption the supplier can ship at most 80 desktops and 75 laptops next month. Staff spend 2 hours installing and checking each desktop and 3 hours for each laptop, with about 300 hours available next month. Management is sure everything ordered can be sold. How many desktops and laptops should be ordered to maximise profit? Formulate the LP, write it in matrix form \\(\\max c^Tx,\\ Ax\\le b,\\ x\\ge 0\\), and explain how to solve it in R."
   ],
   "solution": [
    "1. 决策变量：令 \\(x_1\\) 为订购的台式机数量，\\(x_2\\) 为笔记本数量。\n2. 目标函数：利润 \\(600x_1+900x_2\\)，求最大。\n3. 约束：工时 \\(2x_1+3x_2\\le 300\\)；供货 \\(x_1\\le 80\\)，\\(x_2\\le 75\\)；非负 \\(x_1,x_2\\ge 0\\)。\n4. 矩阵形式：\\(c=\\begin{pmatrix}600\\\\900\\end{pmatrix}\\)，\\(A=\\begin{pmatrix}2&3\\\\1&0\\\\0&1\\end{pmatrix}\\)，\\(b=\\begin{pmatrix}300\\\\80\\\\75\\end{pmatrix}\\)，问题即 \\(\\max c^Tx\\) s.t. \\(Ax\\le b,\\ x\\ge0\\)。这里 \\(c^Tx\\) 是内积（sumproduct），\\(Ax\\) 把所有约束左边一次写出。\n5. R 代码（lpSolve）：c <- c(600,900); A <- matrix(c(2,3,1,0,0,1), nrow=3, byrow=T); b <- c(300,80,75); res <- lp(\"max\", c, A, \"<=\", b); 再查看 res 及其 solution 分量。Python 可用 gurobipy 的 addMVar 与 A@x <= b。\n6. 幻灯片没有给出数值结果。按题目数据自行推算：目标系数与工时系数成比例（600/2=900/3=300），所以每小时利润恒为 300，只要工时用满就有 \\(600x_1+900x_2=90000\\)。可行的最优解不唯一，例如 \\(x_1=80,\\ x_2=140/3\\) 或 \\(x_1=37.5,\\ x_2=75\\)，最优值 90000。",
    "1. Decision variables: let \\(x_1\\) = number of desktops ordered, \\(x_2\\) = number of laptops ordered.\n2. Objective: maximise profit \\(600x_1+900x_2\\).\n3. Constraints: labour \\(2x_1+3x_2\\le 300\\); supply \\(x_1\\le 80\\), \\(x_2\\le 75\\); non-negativity \\(x_1,x_2\\ge0\\).\n4. Matrix form: \\(c=\\begin{pmatrix}600\\\\900\\end{pmatrix}\\), \\(A=\\begin{pmatrix}2&3\\\\1&0\\\\0&1\\end{pmatrix}\\), \\(b=\\begin{pmatrix}300\\\\80\\\\75\\end{pmatrix}\\), so the problem is \\(\\max c^Tx\\) s.t. \\(Ax\\le b,\\ x\\ge0\\). Here \\(c^Tx\\) is an inner product (sumproduct) and \\(Ax\\) stacks all constraint left-hand sides.\n5. R (lpSolve): c <- c(600,900); A <- matrix(c(2,3,1,0,0,1), nrow=3, byrow=T); b <- c(300,80,75); res <- lp(\"max\", c, A, \"<=\", b); then inspect res and its solution component. In Python use gurobipy with addMVar and A@x <= b.\n6. The slides do not show the numerical output. From the given data (my own working): the objective is proportional to the labour row (600/2 = 900/3 = 300), so profit equals 300 per labour hour and any plan using all 300 hours earns 90000. The optimum is therefore not unique, e.g. \\(x_1=80,\\ x_2=140/3\\) or \\(x_1=37.5,\\ x_2=75\\), with optimal value 90000."
   ],
   "answer": [
    "模型：max 600x1+900x2，s.t. 2x1+3x2≤300，x1≤80，x2≤75，x1,x2≥0；矩阵形式 max c^T x, Ax≤b, x≥0。按数据推算最优值为 90000（最优解不唯一，幻灯片未给数值）。",
    "Model: max 600x1+900x2 s.t. 2x1+3x2≤300, x1≤80, x2≤75, x1,x2≥0, i.e. max c^T x, Ax≤b, x≥0. Working from the data the optimal profit is 90000 (optimal solution not unique; slides give no numbers)."
   ],
   "pages": [
    17,
    18,
    23,
    24,
    25
   ],
   "concepts": [
    "case-applepie",
    "concept-variables",
    "concept-matrix",
    "concept-constraints"
   ],
   "source": "ETF2480_ETF5248_Lecture_1 (2).pdf",
   "tags": [
    "LP formulation",
    "matrix form",
    "lpSolve",
    "product mix"
   ]
  },
  {
   "id": "ex-etf5248-l1-inequality-form",
   "course": "ETF5248",
   "topic": "e5248-1",
   "topicName": [
    "引言与 LP 建模",
    "Introduction and LP modelling"
   ],
   "title": [
    "把一般 LP 化成 \\(\\min c^Tx,\\ Ax\\ge b\\) 形式",
    "Converting an LP to inequality form"
   ],
   "problem": [
    "把下面的 LP 写成矩阵形式 \\(\\min c^Tx\\) s.t. \\(Ax\\ge b\\)，求出 \\(A,b,c\\)（变量为 \\(x_1,\\dots,x_4\\)）：\n\\(\\min\\ 2x_1-x_2+4x_3\\)\ns.t. \\(x_1+x_2+x_4\\le 2\\)；\\(3x_2-x_3=5\\)；\\(x_3+x_4\\ge 3\\)；\\(x_1\\ge0\\)；\\(x_3\\le0\\)。",
    "Write the following LP in matrix form \\(\\min c^Tx\\) s.t. \\(Ax\\ge b\\) and give \\(A,b,c\\) (variables \\(x_1,\\dots,x_4\\)):\n\\(\\min\\ 2x_1-x_2+4x_3\\)\ns.t. \\(x_1+x_2+x_4\\le 2\\); \\(3x_2-x_3=5\\); \\(x_3+x_4\\ge 3\\); \\(x_1\\ge0\\); \\(x_3\\le0\\)."
   ],
   "solution": [
    "1. 目标已是 min，直接取 \\(c=(2,-1,4,0)^T\\)（\\(x_4\\) 不在目标中，系数为 0）。\n2. 把每条约束都化成 \\(\\ge\\)：\\(a^Tx\\le b\\) 等价于 \\((-a)^Tx\\ge -b\\)；\\(a^Tx=b\\) 等价于 \\(a^Tx\\ge b\\) 与 \\((-a)^Tx\\ge -b\\) 两条。\n3. 第一条 \\(\\le\\)：\\(-x_1-x_2-x_4\\ge -2\\)，行 \\((-1,-1,0,-1)\\)，右端 \\(-2\\)。\n4. 等式拆成两条：\\(3x_2-x_3\\ge5\\) 行 \\((0,3,-1,0)\\)，右端 5；以及 \\(-3x_2+x_3\\ge-5\\) 行 \\((0,-3,1,0)\\)，右端 \\(-5\\)。\n5. 第三条本来就是 \\(\\ge\\)：\\(x_3+x_4\\ge3\\)，行 \\((0,0,1,1)\\)，右端 3。\n6. 符号约束也当作约束：\\(x_1\\ge0\\) 行 \\((1,0,0,0)\\)，右端 0；\\(x_3\\le0\\) 即 \\(-x_3\\ge0\\)，行 \\((0,0,-1,0)\\)，右端 0。\n7. 依次堆叠即得 \\(A\\)（6 行 4 列）和 \\(b=(-2,5,-5,3,0,0)^T\\)。",
    "1. The objective is already a minimisation, so \\(c=(2,-1,4,0)^T\\) (\\(x_4\\) does not appear, coefficient 0).\n2. Turn every constraint into \\(\\ge\\): \\(a^Tx\\le b\\) is equivalent to \\((-a)^Tx\\ge -b\\); \\(a^Tx=b\\) is equivalent to the pair \\(a^Tx\\ge b\\) and \\((-a)^Tx\\ge -b\\).\n3. First constraint (\\(\\le\\)): \\(-x_1-x_2-x_4\\ge -2\\), row \\((-1,-1,0,-1)\\), right-hand side \\(-2\\).\n4. The equality becomes two rows: \\(3x_2-x_3\\ge5\\), row \\((0,3,-1,0)\\), rhs 5; and \\(-3x_2+x_3\\ge-5\\), row \\((0,-3,1,0)\\), rhs \\(-5\\).\n5. Third constraint is already \\(\\ge\\): \\(x_3+x_4\\ge3\\), row \\((0,0,1,1)\\), rhs 3.\n6. Sign restrictions are treated as constraints: \\(x_1\\ge0\\) gives row \\((1,0,0,0)\\), rhs 0; \\(x_3\\le0\\) means \\(-x_3\\ge0\\), row \\((0,0,-1,0)\\), rhs 0.\n7. Stack the rows to get the 6 by 4 matrix \\(A\\) and \\(b=(-2,5,-5,3,0,0)^T\\)."
   ],
   "answer": [
    "c=(2,-1,4,0)^T；A 的各行依次为 (-1,-1,0,-1)、(0,3,-1,0)、(0,-3,1,0)、(0,0,1,1)、(1,0,0,0)、(0,0,-1,0)；b=(-2,5,-5,3,0,0)^T。",
    "c=(2,-1,4,0)^T; the rows of A are (-1,-1,0,-1), (0,3,-1,0), (0,-3,1,0), (0,0,1,1), (1,0,0,0), (0,0,-1,0); b=(-2,5,-5,3,0,0)^T."
   ],
   "pages": [
    29,
    30,
    31
   ],
   "concepts": [
    "concept-sign-transform",
    "concept-matrix",
    "concept-constraints"
   ],
   "source": "ETF2480_ETF5248_Lecture_1 (2).pdf",
   "tags": [
    "transformation",
    "inequality form",
    "matrix notation"
   ]
  },
  {
   "id": "ex-etf5248-l1-steves-shop",
   "course": "ETF5248",
   "topic": "e5248-1",
   "topicName": [
    "引言与 LP 建模",
    "Introduction and LP modelling"
   ],
   "title": [
    "Steve 的网店：蜡烛与香薰机（Workshop）",
    "Steve's online shop: candles and diffusers (workshop)"
   ],
   "problem": [
    "Steve 开网店卖手工蜡烛和香薰机。蜡烛售价 20 美元，香薰机 40 美元。平均每个蜡烛需 20 分钟准备，每个香薰机需 35 分钟。他每周最多只能花 8 小时制作；另外每周蜡烛不超过 50 个，香薰机不超过 10 个。每个蜡烛成本 15 美元，每个香薰机成本 18 美元。问每周各做多少个才能使利润最大？请建立并求解 LP。",
    "Steve sells hand-made candles (price 20 dollars) and diffusers (price 40 dollars) online. Preparing a candle takes 20 minutes and a diffuser 35 minutes on average. He can spend at most 8 hours a week making them, and at most 50 candles and 10 diffusers per week. A candle costs 15 dollars to make and a diffuser 18 dollars. How many of each per week maximise profit? Formulate and solve the LP."
   ],
   "solution": [
    "幻灯片只给出题目，没有给出答案；以下是根据题目数据自行推导的解法。\n1. 变量：\\(x_1\\) 为每周蜡烛数，\\(x_2\\) 为每周香薰机数。\n2. 单位利润：蜡烛 \\(20-15=5\\)，香薰机 \\(40-18=22\\)，目标 \\(\\max 5x_1+22x_2\\)。\n3. 时间约束统一用分钟：8 小时 = 480 分钟，所以 \\(20x_1+35x_2\\le480\\)。\n4. 数量约束 \\(x_1\\le50\\)，\\(x_2\\le10\\)，且 \\(x_1,x_2\\ge0\\)。\n5. 矩阵形式：\\(c=(5,22)^T\\)，\\(A=\\begin{pmatrix}20&35\\\\1&0\\\\0&1\\end{pmatrix}\\)，\\(b=(480,50,10)^T\\)，用 lp(\"max\", c, A, \"<=\", b) 求解。\n6. 手算：香薰机每分钟利润 \\(22/35\\approx0.63\\) 高于蜡烛 \\(5/20=0.25\\)，所以先把 \\(x_2\\) 做到上限 10，用时 350 分钟，剩 130 分钟做蜡烛，\\(x_1=130/20=6.5\\)（小于 50，满足）。利润 \\(5(6.5)+22(10)=252.5\\) 美元。LP 允许小数；若要求整数则属于整数规划，课程后面才讲。",
    "The slides only pose this question and give no answer; the following solution is my own working from the stated data.\n1. Variables: \\(x_1\\) = candles per week, \\(x_2\\) = diffusers per week.\n2. Unit profit: candle \\(20-15=5\\), diffuser \\(40-18=22\\), so \\(\\max 5x_1+22x_2\\).\n3. Time constraint in minutes: 8 hours = 480 minutes, so \\(20x_1+35x_2\\le480\\).\n4. Quantity limits \\(x_1\\le50\\), \\(x_2\\le10\\), and \\(x_1,x_2\\ge0\\).\n5. Matrix form: \\(c=(5,22)^T\\), \\(A=\\begin{pmatrix}20&35\\\\1&0\\\\0&1\\end{pmatrix}\\), \\(b=(480,50,10)^T\\); solve with lp(\"max\", c, A, \"<=\", b).\n6. By hand: a diffuser earns \\(22/35\\approx0.63\\) per minute versus \\(5/20=0.25\\) for a candle, so set \\(x_2\\) at its cap 10 (350 minutes), leaving 130 minutes for candles, \\(x_1=130/20=6.5\\) (below 50). Profit \\(5(6.5)+22(10)=252.5\\) dollars. The LP allows fractions; requiring integers would be an integer programme, covered later."
   ],
   "answer": [
    "max 5x1+22x2，s.t. 20x1+35x2≤480，x1≤50，x2≤10，x1,x2≥0。自行推导：x1=6.5，x2=10，周利润 252.5 美元（幻灯片未给答案）。",
    "max 5x1+22x2 s.t. 20x1+35x2≤480, x1≤50, x2≤10, x1,x2≥0. My working: x1=6.5, x2=10, weekly profit 252.5 dollars (slides give no answer)."
   ],
   "pages": [
    33,
    34,
    35
   ],
   "concepts": [
    "case-steve",
    "concept-variables",
    "concept-objective",
    "concept-constraints"
   ],
   "source": "ETF2480_ETF5248_Lecture_1 (2).pdf",
   "tags": [
    "LP formulation",
    "workshop",
    "product mix",
    "unit conversion"
   ]
  },
  {
   "id": "ex-etf5248-l1-giapetto",
   "course": "ETF5248",
   "topic": "e5248-1",
   "topicName": [
    "引言与 LP 建模",
    "Introduction and LP modelling"
   ],
   "title": [
    "Giapetto 木雕厂：士兵与火车（课后题）",
    "Giapetto's Woodcarving: soldiers and trains (take-home)"
   ],
   "problem": [
    "Giapetto 木雕公司生产木制士兵和火车。每个士兵售价 27 美元，原材料 10 美元，增加可变人工/管理成本 14 美元，需要 2 小时精加工和 1 小时木工。每列火车售价 21 美元，原材料 9 美元，可变成本 10 美元，需要 1 小时精加工和 1 小时木工。每周原材料不限，精加工只有 100 小时，木工只有 80 小时。火车需求无限，士兵每周最多卖出 40 个。Giapetto 要使每周利润最大，请建立 LP 并用 R 求解。",
    "Giapetto's Woodcarving makes wooden soldiers and trains. Each soldier sells for 27 dollars, uses 10 dollars of raw material, adds 14 dollars of variable labour/overhead cost, and needs 2 finishing hours and 1 carpentry hour. Each train sells for 21 dollars, uses 9 dollars of raw material, adds 10 dollars of variable cost, and needs 1 finishing hour and 1 carpentry hour. Each week raw material is unlimited, but only 100 finishing hours and 80 carpentry hours are available. Demand for trains is unlimited; at most 40 soldiers are bought per week. Giapetto wants to maximise weekly profit. Formulate an LP and solve it using R."
   ],
   "solution": [
    "幻灯片只给出题目，没有给答案；以下为根据题目数据自行推导。\n1. 变量：\\(x_1\\) 为每周士兵数，\\(x_2\\) 为每周火车数。\n2. 单位利润（售价减原材料减可变成本）：士兵 \\(27-10-14=3\\)，火车 \\(21-9-10=2\\)。目标 \\(\\max 3x_1+2x_2\\)。\n3. 约束：精加工 \\(2x_1+x_2\\le100\\)；木工 \\(x_1+x_2\\le80\\)；士兵需求 \\(x_1\\le40\\)；\\(x_1,x_2\\ge0\\)（火车需求无限，所以没有 \\(x_2\\) 的上限）。\n4. 矩阵形式：\\(c=(3,2)^T\\)，\\(A=\\begin{pmatrix}2&1\\\\1&1\\\\1&0\\end{pmatrix}\\)，\\(b=(100,80,40)^T\\)，在 R 中用 lp(\"max\", c, A, \"<=\", b)。\n5. 手算检验各顶点：\\((0,0)\\) 利润 0；\\((0,80)\\) 利润 160；精加工与木工两条线交点 \\(2x_1+x_2=100,\\ x_1+x_2=80\\) 得 \\((20,60)\\)，利润 \\(60+120=180\\)；\\((40,20)\\) 利润 \\(120+40=160\\)；\\((40,0)\\) 利润 120。最大为 180。",
    "The slides only pose the question; the solution below is my own working from the stated data.\n1. Variables: \\(x_1\\) = soldiers per week, \\(x_2\\) = trains per week.\n2. Unit profit (price minus raw material minus variable cost): soldier \\(27-10-14=3\\), train \\(21-9-10=2\\). Objective \\(\\max 3x_1+2x_2\\).\n3. Constraints: finishing \\(2x_1+x_2\\le100\\); carpentry \\(x_1+x_2\\le80\\); soldier demand \\(x_1\\le40\\); \\(x_1,x_2\\ge0\\) (train demand is unlimited, so no cap on \\(x_2\\)).\n4. Matrix form: \\(c=(3,2)^T\\), \\(A=\\begin{pmatrix}2&1\\\\1&1\\\\1&0\\end{pmatrix}\\), \\(b=(100,80,40)^T\\); in R use lp(\"max\", c, A, \"<=\", b).\n5. Check the corner points by hand: \\((0,0)\\) gives 0; \\((0,80)\\) gives 160; the finishing and carpentry lines meet where \\(2x_1+x_2=100\\) and \\(x_1+x_2=80\\), i.e. \\((20,60)\\), profit \\(60+120=180\\); \\((40,20)\\) gives \\(120+40=160\\); \\((40,0)\\) gives 120. The maximum is 180."
   ],
   "answer": [
    "max 3x1+2x2，s.t. 2x1+x2≤100，x1+x2≤80，x1≤40，x1,x2≥0。自行推导：x1=20，x2=60，周利润 180 美元（幻灯片未给答案）。",
    "max 3x1+2x2 s.t. 2x1+x2≤100, x1+x2≤80, x1≤40, x1,x2≥0. My working: x1=20, x2=60, weekly profit 180 dollars (slides give no answer)."
   ],
   "pages": [
    36
   ],
   "concepts": [
    "case-giapetto",
    "concept-variables",
    "concept-objective",
    "concept-constraints"
   ],
   "source": "ETF2480_ETF5248_Lecture_1 (2).pdf",
   "tags": [
    "LP formulation",
    "take-home",
    "product mix",
    "corner points"
   ]
  },
  {
   "id": "ex-etf5248-l2-giapetto-woodcarving",
   "course": "ETF5248",
   "topic": "e5248-2",
   "topicName": [
    "线性代数与 LP 标准形",
    "Linear algebra and LP forms"
   ],
   "title": [
    "Giapetto 木工厂：建模并图解求解 LP",
    "Giapetto's Woodcarving: formulate and solve graphically"
   ],
   "problem": [
    "Giapetto 木工厂生产木制士兵和火车。每个士兵售价 27 美元（dollars），原材料 10 美元，增加可变人工/管理成本 14 美元，需要 2 小时 finishing 人工和 1 小时 carpentry 人工。每列火车售价 21 美元，原材料 9 美元，可变成本 10 美元，需要 1 小时 finishing 和 1 小时 carpentry。每周原材料不限，但 finishing 只有 100 小时，carpentry 只有 80 小时。火车需求无限，士兵每周最多卖出 40 个。目标是最大化每周利润。请建立 LP 并求解。",
    "Giapetto's Woodcarving makes wooden soldiers and trains. Each soldier sells for 27 dollars, uses 10 dollars of raw material, adds 14 dollars of variable labour/overhead cost, and needs 2 finishing hours and 1 carpentry hour. Each train sells for 21 dollars, uses 9 dollars of raw material, adds 10 dollars of variable cost, and needs 1 finishing hour and 1 carpentry hour. Each week: unlimited raw material, only 100 finishing hours and 80 carpentry hours. Train demand is unlimited; at most 40 soldiers are bought per week. Maximise weekly profit. Formulate and solve an LP."
   ],
   "solution": [
    "1. 设 \\(x_1\\) 为每周生产的士兵数，\\(x_2\\) 为火车数。\n2. 单位利润 = 售价 − 原材料 − 可变成本：士兵 \\(27-10-14=3\\)，火车 \\(21-9-10=2\\)。所以目标为 \\(\\max 3x_1+2x_2\\)。\n3. 约束：finishing \\(2x_1+x_2\\le 100\\)；carpentry \\(x_1+x_2\\le 80\\)；士兵需求 \\(x_1\\le 40\\)；\\(x_1,x_2\\ge 0\\)。\n4. 矩阵形式 \\(\\max c^Tx\\) s.t. \\(Ax\\le b\\)，其中 \\(c=(3,2)\\)，\\(b=(100,80,40,0,0)\\)，A 的各行为 \\((2,1),(1,1),(1,0),(-1,0),(0,-1)\\)（非负约束写成 \\(-x\\le 0\\)）。\n5. 图解：画出可行域（多面体），再画目标函数等值线 \\(3x_1+2x_2=\\alpha\\)（如 60、120、180、240、300），沿梯度方向 \\(c\\) 平移，直到刚好离开可行域的最后一点。\n6. 该点是 finishing 与 carpentry 两条约束的交点：解 \\(2x_1+x_2=100,\\ x_1+x_2=80\\) 得 \\(x_1=20,\\ x_2=60\\)，且满足 \\(x_1\\le 40\\)。\n7. 检验其他顶点：\\((0,0)\\to 0\\)，\\((40,0)\\to 120\\)，\\((40,20)\\to 160\\)，\\((0,80)\\to 160\\)，都小于 \\(3\\cdot20+2\\cdot60=180\\)。",
    "1. Let \\(x_1\\) = soldiers per week and \\(x_2\\) = trains per week.\n2. Unit profit = price minus raw material minus variable cost: soldier \\(27-10-14=3\\), train \\(21-9-10=2\\). Objective: \\(\\max 3x_1+2x_2\\).\n3. Constraints: finishing \\(2x_1+x_2\\le 100\\); carpentry \\(x_1+x_2\\le 80\\); soldier demand \\(x_1\\le 40\\); \\(x_1,x_2\\ge 0\\).\n4. Matrix form \\(\\max c^Tx\\) s.t. \\(Ax\\le b\\) with \\(c=(3,2)\\), \\(b=(100,80,40,0,0)\\), and rows of A equal to \\((2,1),(1,1),(1,0),(-1,0),(0,-1)\\) (non-negativity written as \\(-x\\le 0\\)).\n5. Graphically: draw the feasible polyhedron, then the objective level lines \\(3x_1+2x_2=\\alpha\\) (60, 120, 180, 240, 300) and slide them in the direction of \\(c\\) until the last point of contact with the feasible region.\n6. That point is the intersection of the finishing and carpentry lines: solving \\(2x_1+x_2=100,\\ x_1+x_2=80\\) gives \\(x_1=20,\\ x_2=60\\), which satisfies \\(x_1\\le 40\\).\n7. Check of other vertices: \\((0,0)\\to 0\\), \\((40,0)\\to 120\\), \\((40,20)\\to 160\\), \\((0,80)\\to 160\\), all below \\(3\\cdot20+2\\cdot60=180\\)."
   ],
   "answer": [
    "最优解 \\(x^\\star=(20,60)\\)，最优值 \\(p^\\star=180\\)（每周利润 180 美元）。",
    "Optimal solution \\(x^\\star=(20,60)\\) with optimal value \\(p^\\star=180\\) (weekly profit of 180 dollars)."
   ],
   "pages": [
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27
   ],
   "concepts": [
    "case-giapetto",
    "concept-geometry",
    "concept-feasible",
    "concept-optimal"
   ],
   "source": "ETF2480_ETF5248_Lecture_2 (2).pdf",
   "tags": [
    "LP formulation",
    "graphical method",
    "maximisation",
    "Giapetto"
   ]
  },
  {
   "id": "ex-etf5248-l2-workshop-graphical-min",
   "course": "ETF5248",
   "topic": "e5248-2",
   "topicName": [
    "线性代数与 LP 标准形",
    "Linear algebra and LP forms"
   ],
   "title": [
    "Workshop：二维 LP 的图解",
    "Workshop example: graphical solution of a 2-variable LP"
   ],
   "problem": [
    "考虑 LP：minimize \\(-x_1-x_2\\)，subject to \\(2x_1+x_2\\le 3\\)，\\(x_1+4x_2\\le 5\\)，\\(x_1\\ge0,\\ x_2\\ge0\\)。用图解法找最优解和最优值。",
    "Consider the LP: minimize \\(-x_1-x_2\\) subject to \\(2x_1+x_2\\le 3\\), \\(x_1+4x_2\\le 5\\), \\(x_1\\ge 0\\), \\(x_2\\ge 0\\). Find the optimal solution and value graphically."
   ],
   "solution": [
    "1. 画可行域：由 \\(2x_1+x_2\\le3\\)、\\(x_1+4x_2\\le5\\) 和两个坐标轴围成的多边形，顶点为 \\((0,0)\\)、\\((1.5,0)\\)、\\((0,1.25)\\) 以及两条约束线的交点。\n2. 两条约束线的交点：由 \\(2x_1+x_2=3\\) 与 \\(x_1+4x_2=5\\) 解得 \\(x_1=1,\\ x_2=1\\)。\n3. 目标函数的等值线为 \\(-x_1-x_2=\\alpha\\)（如 0、−1、−2、−3…）。因为是最小化，沿 \\(-c=(1,1)\\) 的方向平移等值线，使 \\(\\alpha\\) 尽量小（即 \\(x_1+x_2\\) 尽量大）。\n4. 等值线最后接触可行域的点是交点 \\((1,1)\\)，此时 \\(-x_1-x_2=-2\\)。\n5. 验证顶点：\\((0,0)\\to0\\)，\\((1.5,0)\\to-1.5\\)，\\((0,1.25)\\to-1.25\\)，\\((1,1)\\to-2\\) 最小。",
    "1. Draw the feasible region: the polygon cut out by \\(2x_1+x_2\\le3\\), \\(x_1+4x_2\\le5\\) and the axes, with vertices \\((0,0)\\), \\((1.5,0)\\), \\((0,1.25)\\) and the intersection of the two constraint lines.\n2. Intersection: solving \\(2x_1+x_2=3\\) and \\(x_1+4x_2=5\\) gives \\(x_1=1,\\ x_2=1\\).\n3. Objective level lines are \\(-x_1-x_2=\\alpha\\) (0, -1, -2, -3, ...). Since we minimise, slide the lines in the direction \\(-c=(1,1)\\) to make \\(\\alpha\\) as small as possible (i.e. \\(x_1+x_2\\) as large as possible).\n4. The last point of contact with the feasible region is the intersection \\((1,1)\\), where \\(-x_1-x_2=-2\\).\n5. Vertex check: \\((0,0)\\to0\\), \\((1.5,0)\\to-1.5\\), \\((0,1.25)\\to-1.25\\), \\((1,1)\\to-2\\) is the smallest."
   ],
   "answer": [
    "最优解 \\(x^\\star=(1,1)\\)，\\(p^\\star=-2\\)。",
    "Optimal solution \\(x^\\star=(1,1)\\) with \\(p^\\star=-2\\)."
   ],
   "pages": [
    38,
    39
   ],
   "concepts": [
    "concept-geometry",
    "concept-feasible",
    "concept-optimal"
   ],
   "source": "ETF2480_ETF5248_Lecture_2 (2).pdf",
   "tags": [
    "graphical method",
    "minimisation",
    "level sets",
    "workshop"
   ]
  },
  {
   "id": "ex-etf5248-l2-gurobi-advertising",
   "course": "ETF5248",
   "topic": "e5248-2",
   "topicName": [
    "线性代数与 LP 标准形",
    "Linear algebra and LP forms"
   ],
   "title": [
    "Gurobi 广告投放（Product Mix）：最小成本 LP",
    "Gurobi advertising (marketing product mix): minimum-cost LP"
   ],
   "problem": [
    "Gurobi 打算在两本杂志 \"Analytics Today\" 和 \"Analytics Tomorrow\" 各买整版广告。每期 \"Analytics Today\" 广告被 700 万学者和 200 万业界人士看到，费用 50,000 美元（dollars）；每期 \"Analytics Tomorrow\" 广告被 200 万学者和 1200 万业界人士看到，费用 100,000 美元。Gurobi 希望广告至少被 2800 万学者和 2400 万业界人士看到。用 LP 确定以最低成本满足要求的购买方案。",
    "Gurobi will buy full-page ads in two magazines. An \"Analytics Today\" ad (per issue) is seen by 7 million academics and 2 million industry practitioners and costs 50,000 dollars. An \"Analytics Tomorrow\" ad is seen by 2 million academics and 12 million practitioners and costs 100,000 dollars. Gurobi wants at least 28 million academics and 24 million practitioners to see its ads. Use LP to meet the requirements at minimum cost."
   ],
   "solution": [
    "1. 决策变量：\\(x_1\\) 为购买的 \"Analytics Today\" 广告数，\\(x_2\\) 为 \"Analytics Tomorrow\" 广告数。\n2. 目标：最小化成本（单位：千美元）\\(50x_1+100x_2\\)。\n3. 学者覆盖约束：\\(7x_1+2x_2\\ge28\\)；业界覆盖约束：\\(2x_1+12x_2\\ge24\\)；\\(x_1,x_2\\ge0\\)。这就是幻灯片给出的模型。\n4. 幻灯片只给出建模，没有给出数值解。以下是按同样方法的补充计算：最优解应在两条覆盖约束的交点。由 \\(7x_1+2x_2=28\\) 与 \\(2x_1+12x_2=24\\)（即 \\(x_1=12-6x_2\\)）代入得 \\(84-40x_2=28\\)，所以 \\(x_2=1.4,\\ x_1=3.6\\)，成本 \\(50(3.6)+100(1.4)=320\\)（千美元）。\n5. 对比其他顶点：\\((12,0)\\) 成本 600，\\((0,14)\\) 成本 1400，故交点最小（假设广告可取分数；若须取整数则需整数规划，幻灯片未涉及）。",
    "1. Decision variables: \\(x_1\\) = number of \"Analytics Today\" ads, \\(x_2\\) = number of \"Analytics Tomorrow\" ads.\n2. Objective: minimise cost (in thousands of dollars) \\(50x_1+100x_2\\).\n3. Academic reach: \\(7x_1+2x_2\\ge28\\); practitioner reach: \\(2x_1+12x_2\\ge24\\); \\(x_1,x_2\\ge0\\). This is the formulation on the slides.\n4. The slides give only the formulation, not a numerical solution. The following is a supplementary calculation: the optimum lies at the intersection of the two reach constraints. From \\(2x_1+12x_2=24\\) we get \\(x_1=12-6x_2\\); substituting into \\(7x_1+2x_2=28\\) gives \\(84-40x_2=28\\), so \\(x_2=1.4,\\ x_1=3.6\\), with cost \\(50(3.6)+100(1.4)=320\\) (thousand dollars).\n5. Other vertices: \\((12,0)\\) costs 600 and \\((0,14)\\) costs 1400, so the intersection is cheapest (assuming fractional ads are allowed; integer ads would need integer programming, which the slides do not cover)."
   ],
   "answer": [
    "模型：min \\(50x_1+100x_2\\)，s.t. \\(7x_1+2x_2\\ge28\\)，\\(2x_1+12x_2\\ge24\\)，\\(x\\ge0\\)。（补充计算）最优 \\(x=(3.6,1.4)\\)，成本 320,000 美元。",
    "Model: min \\(50x_1+100x_2\\) s.t. \\(7x_1+2x_2\\ge28\\), \\(2x_1+12x_2\\ge24\\), \\(x\\ge0\\). (Supplementary calculation) optimum \\(x=(3.6,1.4)\\) with cost 320,000 dollars."
   ],
   "pages": [
    41,
    42
   ],
   "concepts": [
    "case-advertising",
    "concept-requirements",
    "concept-geometry"
   ],
   "source": "ETF2480_ETF5248_Lecture_2 (2).pdf",
   "tags": [
    "LP formulation",
    "marketing",
    "minimisation",
    "product mix"
   ]
  },
  {
   "id": "ex-etf5248-l3-diet",
   "course": "ETF5248",
   "topic": "e5248-3",
   "topicName": [
    "饮食问题与产品组合",
    "Diet problem and product mix"
   ],
   "title": [
    "饮食问题（六种食物的最低成本膳食）",
    "Diet problem: cheapest diet from six foods"
   ],
   "problem": [
    "有六种食物：面包、牛奶、奶酪、土豆、鱼、酸奶。每单位的成本和营养含量如下（成本为美元）：成本 2.0, 3.5, 8.0, 1.5, 11.0, 1.0；蛋白质(g) 4.0, 8.0, 7.0, 1.3, 8.0, 9.2；脂肪(g) 1.0, 5.0, 9.0, 0.1, 7.0, 1.0；碳水(g) 15.0, 11.7, 0.4, 22.6, 0.0, 17.0；热量(cal) 90, 120, 106, 97, 130, 180（顺序依次为 bread, milk, cheese, potato, fish, yogurt）。要求总成本最低，且膳食至少 300 卡路里、蛋白质不超过 10 克、碳水不少于 10 克、脂肪不少于 8 克；此外鱼至少 0.5 单位，牛奶至多 1 单位。请建立 LP 并给出最优解。",
    "Six foods: bread, milk, cheese, potato, fish, yogurt. Cost per unit (dollars): 2.0, 3.5, 8.0, 1.5, 11.0, 1.0. Protein (g): 4.0, 8.0, 7.0, 1.3, 8.0, 9.2. Fat (g): 1.0, 5.0, 9.0, 0.1, 7.0, 1.0. Carbohydrates (g): 15.0, 11.7, 0.4, 22.6, 0.0, 17.0. Calories: 90, 120, 106, 97, 130, 180 (in the order bread, milk, cheese, potato, fish, yogurt). Find the minimum-cost diet with at least 300 calories, at most 10 g protein, at least 10 g carbohydrates, at least 8 g fat, at least 0.5 unit of fish and at most 1 unit of milk. Formulate the LP and report the optimal solution."
   ],
   "solution": [
    "1. 设 \\(x_j\\) 为第 j 种食物的数量（j=1,...,6 对应面包、牛奶、奶酪、土豆、鱼、酸奶）。\n2. 目标：最小化总成本 \\(2x_1+3.5x_2+8x_3+1.5x_4+11x_5+x_6\\)。\n3. 热量约束（下限）：\\(90x_1+120x_2+106x_3+97x_4+130x_5+180x_6\\ge 300\\)。\n4. 蛋白质约束（上限）：\\(4x_1+8x_2+7x_3+1.3x_4+8x_5+9.2x_6\\le 10\\)。\n5. 碳水约束（下限）：\\(15x_1+11.7x_2+0.4x_3+22.6x_4+17x_6\\ge 10\\)（鱼的碳水为 0，所以 \\(x_5\\) 不出现）。\n6. 脂肪约束（下限）：\\(x_1+5x_2+9x_3+0.1x_4+7x_5+x_6\\ge 8\\)。\n7. 单变量界：\\(x_5\\ge 0.5\\)，\\(x_2\\le 1\\)，且 \\(x_j\\ge 0\\)。\n8. 用求解器（课上用代码现场求解）得到最优解。",
    "1. Let \\(x_j\\) be the quantity of food j (bread, milk, cheese, potato, fish, yogurt for j=1..6).\n2. Objective: minimise cost \\(2x_1+3.5x_2+8x_3+1.5x_4+11x_5+x_6\\).\n3. Calories (lower bound): \\(90x_1+120x_2+106x_3+97x_4+130x_5+180x_6\\ge 300\\).\n4. Protein (upper bound): \\(4x_1+8x_2+7x_3+1.3x_4+8x_5+9.2x_6\\le 10\\).\n5. Carbohydrates (lower bound): \\(15x_1+11.7x_2+0.4x_3+22.6x_4+17x_6\\ge 10\\) (fish has 0 carbohydrate, so \\(x_5\\) is absent).\n6. Fat (lower bound): \\(x_1+5x_2+9x_3+0.1x_4+7x_5+x_6\\ge 8\\).\n7. Simple bounds: \\(x_5\\ge 0.5\\), \\(x_2\\le 1\\), and \\(x_j\\ge 0\\).\n8. Solve with a solver (done by live coding in the lecture) to get the optimum."
   ],
   "answer": [
    "最优解 \\(x^\\star=(0,\\,0.053,\\,0.449,\\,1.865,\\,0.500,\\,0)\\)，最小成本 \\(p^\\star=12.081\\)（美元）。",
    "Optimal solution \\(x^\\star=(0,\\,0.053,\\,0.449,\\,1.865,\\,0.500,\\,0)\\) with minimum cost \\(p^\\star=12.081\\) dollars."
   ],
   "pages": [
    6,
    7
   ],
   "concepts": [
    "case-diet",
    "concept-requirements",
    "concept-objective"
   ],
   "source": "ETF2480_ETF5248_Lecture_3 (1).pdf",
   "tags": [
    "diet problem",
    "formulation",
    "min cost"
   ]
  },
  {
   "id": "ex-etf5248-l3-sailco-inventory",
   "course": "ETF5248",
   "topic": "e5248-3",
   "topicName": [
    "饮食问题与产品组合",
    "Diet problem and product mix"
   ],
   "title": [
    "Sailco 多期库存生产计划",
    "Sailco multi-period inventory and production"
   ],
   "problem": [
    "Sailco 需要决定未来四个季度各生产多少帆船，四个季度需求依次为 40, 60, 75, 25，必须按时满足需求。第一季度初库存为 10 艘。每季度用正常工时最多生产 40 艘，每艘总成本 400 美元；加班可额外生产，每艘 450 美元。每季度末每艘库存产生 20 美元持有成本。用 LP 求使四个季度生产成本加库存成本之和最小的生产计划。",
    "Sailco must decide how many sailboats to produce in each of the next four quarters. Demands are 40, 60, 75, 25 and must be met on time. Initial inventory is 10 boats. Each quarter, regular-time labour can produce up to 40 boats at 400 dollars each; overtime can produce additional boats at 450 dollars each. A holding cost of 20 dollars per boat is charged on the inventory at the end of each quarter. Use an LP to minimise total production plus inventory cost over the four quarters."
   ],
   "solution": [
    "1. 定义变量：\\(x_t\\) 为第 t 季度正常工时产量，\\(y_t\\) 为加班产量，\\(i_t\\) 为第 t 季度末库存。\n2. 目标：\\(\\min\\ 400\\sum_t x_t+450\\sum_t y_t+20\\sum_t i_t\\)。\n3. 库存平衡（期初库存 + 产量 - 需求 = 期末库存）：\\(i_1=10+x_1+y_1-40\\)，\\(i_2=i_1+x_2+y_2-60\\)，\\(i_3=i_2+x_3+y_3-75\\)，\\(i_4=i_3+x_4+y_4-25\\)。\n4. 产能与符号：\\(x_t\\le 40\\)，且 \\(x_t,y_t,i_t\\ge 0\\)；\\(i_t\\ge 0\\) 保证需求按时满足。\n5. 求解得到的计划：第 1 季度多生产 10 艘留作库存（利用较便宜的正常工时），第 2、3 季度需求超过 40 艘的部分用加班补足。验算成本：\\(400\\times145+450\\times 45+20\\times 10=78450\\)。",
    "1. Variables: \\(x_t\\) regular-time output, \\(y_t\\) overtime output, \\(i_t\\) end-of-quarter inventory in quarter t.\n2. Objective: \\(\\min\\ 400\\sum_t x_t+450\\sum_t y_t+20\\sum_t i_t\\).\n3. Inventory balance (opening stock + production - demand = closing stock): \\(i_1=10+x_1+y_1-40\\), \\(i_2=i_1+x_2+y_2-60\\), \\(i_3=i_2+x_3+y_3-75\\), \\(i_4=i_3+x_4+y_4-25\\).\n4. Capacity and signs: \\(x_t\\le 40\\) and \\(x_t,y_t,i_t\\ge 0\\); \\(i_t\\ge0\\) enforces that demand is met on time.\n5. In the optimal plan, quarter 1 produces 10 extra boats at the cheaper regular rate to carry as stock, and overtime covers the part of demand above 40 in quarters 2 and 3. Check: \\(400\\times145+450\\times45+20\\times10=78450\\)."
   ],
   "answer": [
    "\\(x^\\star=(40,40,40,25)\\)，\\(y^\\star=(0,10,35,0)\\)，\\(i^\\star=(10,0,0,0)\\)，最小总成本 \\(p^\\star=78450\\) 美元。",
    "\\(x^\\star=(40,40,40,25)\\), \\(y^\\star=(0,10,35,0)\\), \\(i^\\star=(10,0,0,0)\\), minimum total cost \\(p^\\star=78450\\) dollars."
   ],
   "pages": [
    12,
    13
   ],
   "concepts": [
    "case-sailco",
    "concept-inventory",
    "concept-variables"
   ],
   "source": "ETF2480_ETF5248_Lecture_3 (1).pdf",
   "tags": [
    "dynamic",
    "inventory",
    "multi-period"
   ]
  },
  {
   "id": "ex-etf5248-l3-finco-investment",
   "course": "ETF5248",
   "topic": "e5248-3",
   "topicName": [
    "饮食问题与产品组合",
    "Diet problem and product mix"
   ],
   "title": [
    "Finco 多期投资组合",
    "Finco multi-period investment"
   ],
   "problem": [
    "Finco 未来三年做投资决策。时刻 0 有 100000 美元可投资。投资 A–E 每投入 1 美元的现金流（时刻 0,1,2,3）为：A: -1, 0.5, 1, 0；B: 0, -1, 0.5, 1；C: -1, 1.2, 0, 0；D: -1, 0, 0, 1.9；E: 0, 0, -1, 1.5。为分散风险，任一项投资至多 75000 美元。此外未投资的现金可放入货币市场基金，年利率 8%。投资回报可立即再投资，且不能借款（任一时刻可投资额不超过手头现金）。建立 LP，使时刻 3 的手头现金最大。",
    "Finco has 100000 dollars at time 0 to invest over three years. Investments A–E have cash flows per dollar invested at times 0,1,2,3: A: -1, 0.5, 1, 0; B: 0, -1, 0.5, 1; C: -1, 1.2, 0, 0; D: -1, 0, 0, 1.9; E: 0, 0, -1, 1.5. At most 75000 dollars may go into any single investment. Uninvested cash earns 8% per year in a money market fund. Returns may be reinvested immediately, and borrowing is not allowed (cash invested at any time cannot exceed cash on hand). Formulate an LP maximising cash on hand at time 3."
   ],
   "solution": [
    "1. 变量：\\(x_i\\) 为投资 i 的金额（i=A..E），\\(s_t\\) 为时刻 t 投入货币市场的金额（t=0,1,2）。\n2. 目标：时刻 3 的现金来自 B 的 1、D 的 1.9、E 的 1.5 以及货币市场 \\(s_2\\) 的 1.08 倍：\\(\\max\\ x_B+1.9x_D+1.5x_E+1.08s_2\\)。\n3. 时刻 0 现金约束（全部投出）：\\(x_A+x_C+x_D+s_0=100000\\)。\n4. 时刻 1：到手现金 = 再投出的现金，即 \\(0.5x_A+1.2x_C+1.08s_0=x_B+s_1\\)。\n5. 时刻 2：\\(x_A+0.5x_B+1.08s_1=x_E+s_2\\)。\n6. 分散化与符号：\\(x_i\\le 75000\\)，\\(x_i\\ge0\\)，\\(s_t\\ge0\\)。等式约束使每期现金恰好用完或存入货币市场，因此无法借款。\n7. 验算：\\(x_A=60000\\) 时时刻 0 刚好投完 \\(60000+40000=100000\\)；时刻 1 得 30000 全投 B；时刻 2 得 \\(60000+15000=75000\\) 全投 E；时刻 3 得 \\(30000+76000+112500=218500\\)。",
    "1. Variables: \\(x_i\\) is the amount put into investment i (A..E); \\(s_t\\) is the amount placed in the money market at time t (t=0,1,2).\n2. Objective: cash at time 3 comes from B (1 per dollar), D (1.9), E (1.5) and the money market amount \\(s_2\\) grown by 1.08: \\(\\max\\ x_B+1.9x_D+1.5x_E+1.08s_2\\).\n3. Time 0 cash balance: \\(x_A+x_C+x_D+s_0=100000\\).\n4. Time 1: cash received equals cash redeployed: \\(0.5x_A+1.2x_C+1.08s_0=x_B+s_1\\).\n5. Time 2: \\(x_A+0.5x_B+1.08s_1=x_E+s_2\\).\n6. Diversification and signs: \\(x_i\\le75000\\), \\(x_i\\ge0\\), \\(s_t\\ge0\\). Equalities mean each period's cash is fully used or parked in the money market, so no borrowing occurs.\n7. Check: \\(x_A=60000\\) and \\(x_D=40000\\) use all 100000 at time 0; time 1 gives 30000, all into B; time 2 gives \\(60000+15000=75000\\), all into E; time 3 gives \\(30000+76000+112500=218500\\)."
   ],
   "answer": [
    "\\(x^\\star=(60000,30000,0,40000,75000)\\)（A–E），\\(s^\\star=(0,0,0)\\)，时刻 3 最大现金 \\(p^\\star=218500\\) 美元。",
    "\\(x^\\star=(60000,30000,0,40000,75000)\\) for A–E, \\(s^\\star=(0,0,0)\\), maximum cash at time 3 \\(p^\\star=218500\\) dollars."
   ],
   "pages": [
    14,
    15
   ],
   "concepts": [
    "case-finco",
    "concept-cashflow",
    "concept-variables"
   ],
   "source": "ETF2480_ETF5248_Lecture_3 (1).pdf",
   "tags": [
    "dynamic",
    "finance",
    "cash flow"
   ]
  },
  {
   "id": "ex-etf5248-l3-post-office-scheduling",
   "course": "ETF5248",
   "topic": "e5248-3",
   "topicName": [
    "饮食问题与产品组合",
    "Diet problem and product mix"
   ],
   "title": [
    "邮局排班（连续工作五天）",
    "Post office work scheduling (five consecutive days)"
   ],
   "problem": [
    "邮局每周各天所需员工数为：周一 17、周二 13、周三 15、周四 19、周五 14、周六 16、周日 11。工会规定每名员工连续工作五天，然后休息两天（例如周一到周五上班则周六、周日休息）。建立 LP，使需雇佣的员工总数最少。注意哪种建模是错误的，并讨论如何得到整数解。",
    "A post office needs 17, 13, 15, 19, 14, 16, 11 employees on Mon to Sun respectively. Union rules: each employee works five consecutive days then has two days off. Formulate an LP minimising the number of employees hired. Identify why the naive formulation is wrong and discuss how to get an integer solution."
   ],
   "solution": [
    "1. 错误建模：令 \\(x_i\\) 为第 i 天上班的人数，约束 \\(x_i\\ge\\) 当天需求，目标 \\(\\min\\sum x_i\\)。这是错的，因为同一个员工会连续上五天班，被重复计数，目标变成了“人天”而非“人数”，也没有体现五连班规则。\n2. 正确建模：令 \\(x_i\\) 为第 i 天开始上班的员工数（i=1 为周一）。每人从第 i 天起连上五天，所以某天的在岗人数 = 在该天及前四天内开始上班的人数之和。\n3. 目标：\\(\\min\\sum_{i=1}^7 x_i\\)。\n4. 约束（每天的在岗人数不少于需求）：周一 \\(x_1+x_4+x_5+x_6+x_7\\ge17\\)；周二 \\(x_1+x_2+x_5+x_6+x_7\\ge13\\)；周三 \\(x_1+x_2+x_3+x_6+x_7\\ge15\\)；周四 \\(x_1+x_2+x_3+x_4+x_7\\ge19\\)；周五 \\(x_1+x_2+x_3+x_4+x_5\\ge14\\)；周六 \\(x_2+x_3+x_4+x_5+x_6\\ge16\\)；周日 \\(x_3+x_4+x_5+x_6+x_7\\ge11\\)；\\(x_i\\ge0\\)。\n5. LP 最优解含分数（如 4/3），不可能雇 0.33 个人。四舍五入得 \\(\\tilde x=(2,4,2,8,0,4,5)\\)，人数 25，但并不最优；真正的整数规划最优解为 (4,4,2,6,0,4,3)，人数 23。课上说明几周后学习整数规划再回到此问题。",
    "1. Wrong model: letting \\(x_i\\) be the number working on day i with \\(x_i\\ge\\) demand and \\(\\min\\sum x_i\\) is incorrect: an employee works five consecutive days and is counted repeatedly, so the objective counts person-days not people, and the five-day rule is not modelled.\n2. Correct model: let \\(x_i\\) be the number of employees who start work on day i (i=1 is Monday). Someone starting on day i works five consecutive days, so the staff on a given day is the sum of starts over that day and the previous four.\n3. Objective: \\(\\min\\sum_{i=1}^7 x_i\\).\n4. Constraints (staff on duty at least demand): Mon \\(x_1+x_4+x_5+x_6+x_7\\ge17\\); Tue \\(x_1+x_2+x_5+x_6+x_7\\ge13\\); Wed \\(x_1+x_2+x_3+x_6+x_7\\ge15\\); Thu \\(x_1+x_2+x_3+x_4+x_7\\ge19\\); Fri \\(x_1+x_2+x_3+x_4+x_5\\ge14\\); Sat \\(x_2+x_3+x_4+x_5+x_6\\ge16\\); Sun \\(x_3+x_4+x_5+x_6+x_7\\ge11\\); \\(x_i\\ge0\\).\n5. The LP optimum is fractional (e.g. 4/3), which cannot be hired. Rounding gives \\(\\tilde x=(2,4,2,8,0,4,5)\\) with 25 people, not optimal; the true integer optimum is (4,4,2,6,0,4,3) with 23 people. The lecture defers integer programming to a few weeks later."
   ],
   "answer": [
    "LP 最优：\\(x^\\star=(\\tfrac43,\\tfrac{10}3,2,\\tfrac{22}3,0,\\tfrac{10}3,5)\\)，\\(p^\\star=\\tfrac{67}{3}\\approx22.33\\)；四舍五入解 25 人；整数最优解 (4,4,2,6,0,4,3)，23 人。",
    "LP optimum \\(x^\\star=(\\tfrac43,\\tfrac{10}3,2,\\tfrac{22}3,0,\\tfrac{10}3,5)\\) with \\(p^\\star=\\tfrac{67}{3}\\approx22.33\\); rounded solution uses 25 people; integer optimum (4,4,2,6,0,4,3) uses 23."
   ],
   "pages": [
    16,
    17,
    18,
    19
   ],
   "concepts": [
    "case-schedule",
    "concept-shift-coverage",
    "concept-requirements"
   ],
   "source": "ETF2480_ETF5248_Lecture_3 (1).pdf",
   "tags": [
    "scheduling",
    "HR",
    "integer rounding"
   ]
  },
  {
   "id": "ex-etf5248-l3-sunco-blending",
   "course": "ETF5248",
   "topic": "e5248-3",
   "topicName": [
    "饮食问题与产品组合",
    "Diet problem and product mix"
   ],
   "title": [
    "Sunco 汽油调和问题",
    "Sunco gasoline blending"
   ],
   "problem": [
    "Sunco Oil 用三种原油 crude1–3 调和三种汽油 gas1–3。汽油售价（美元/桶）：70, 60, 50；原油买价：45, 35, 25。原油每种每天最多买 5000 桶。原油辛烷值：12, 6, 8；含硫量(%)：0.5, 2.0, 3.0。gas1 调和油平均辛烷值至少 10、含硫至多 1%；gas2 至少 8、至多 2%；gas3 至少 6、至多 1%。把一桶原油加工成一桶汽油成本 4 美元，炼油厂每天最多生产 14000 桶汽油。每天客户需求：gas1 3000 桶、gas2 2000 桶、gas3 1000 桶，必须满足。公司还可做广告：某种汽油每天每多花 1 美元广告费，该种汽油日需求增加 10 桶。建立 LP 使日利润最大。",
    "Sunco Oil blends three crudes (crude1–3) into three gasolines (gas1–3). Selling prices per barrel: 70, 60, 50; crude purchase prices: 45, 35, 25. Up to 5000 barrels of each crude may be bought daily. Crude octane ratings: 12, 6, 8; sulphur content (%): 0.5, 2.0, 3.0. Gas1 needs average octane at least 10 and sulphur at most 1%; gas2 at least 8 and at most 2%; gas3 at least 6 and at most 1%. Turning a barrel of crude into gasoline costs 4 dollars; the refinery makes at most 14000 barrels of gasoline daily. Daily demand that must be met: gas1 3000, gas2 2000, gas3 1000 barrels. Each dollar of daily advertising for a gasoline raises its daily demand by 10 barrels. Formulate an LP maximising daily profit."
   ],
   "solution": [
    "1. 变量：\\(x_{ij}\\) 为用于生产 gas j 的 crude i 的桶数；\\(a_j\\) 为花在 gas j 上的广告费（美元）。\n2. 单位利润：用 crude i 生产 gas j 每桶利润 = 汽油价 - 原油价 - 4，例如 \\(70-45-4=21\\)、\\(70-35-4=31\\)、\\(70-25-4=41\\)（gas1）；gas2 为 11, 21, 31；gas3 为 1, 11, 21。广告费从利润中扣除。目标：\\(\\max\\ 21x_{11}+11x_{12}+x_{13}+31x_{21}+21x_{22}+11x_{23}+41x_{31}+31x_{32}+21x_{33}-a_1-a_2-a_3\\)。\n3. 需求：产量 = 基础需求 + 广告带来的需求，即 \\(x_{11}+x_{21}+x_{31}-10a_1=3000\\)，\\(x_{12}+x_{22}+x_{32}-10a_2=2000\\)，\\(x_{13}+x_{23}+x_{33}-10a_3=1000\\)。\n4. 原油供应：每种原油 \\(\\sum_j x_{ij}\\le5000\\)（i=1,2,3）。\n5. 炼油能力：九个 \\(x_{ij}\\) 之和 \\(\\le 14000\\)。\n6. 辛烷值（平均值至少）：把平均值不等式乘以总量以保持线性，例如 gas1：\\(12x_{11}+6x_{21}+8x_{31}\\ge10(x_{11}+x_{21}+x_{31})\\)；gas2 右边系数 8；gas3 右边系数 6。\n7. 含硫量（平均值至多）：gas1：\\(0.005x_{11}+0.02x_{21}+0.03x_{31}\\le0.01(x_{11}+x_{21}+x_{31})\\)；gas2 右边系数 0.02；gas3 右边系数 0.01。\n8. 符号：\\(x_{ij}\\ge0\\)，\\(a_j\\ge0\\)。幻灯片只给出模型，课上用代码求解，未给出数值解。",
    "1. Variables: \\(x_{ij}\\) barrels of crude i used to make gas j; \\(a_j\\) dollars spent advertising gas j.\n2. Unit margins: crude i into gas j earns price of gas j minus crude price minus 4, e.g. for gas1 \\(70-45-4=21\\), \\(70-35-4=31\\), \\(70-25-4=41\\); gas2 gives 11, 21, 31; gas3 gives 1, 11, 21. Advertising is subtracted. Objective: \\(\\max\\ 21x_{11}+11x_{12}+x_{13}+31x_{21}+21x_{22}+11x_{23}+41x_{31}+31x_{32}+21x_{33}-a_1-a_2-a_3\\).\n3. Demand: output = base demand + advertising-induced demand: \\(x_{11}+x_{21}+x_{31}-10a_1=3000\\), \\(x_{12}+x_{22}+x_{32}-10a_2=2000\\), \\(x_{13}+x_{23}+x_{33}-10a_3=1000\\).\n4. Crude supply: \\(\\sum_j x_{ij}\\le5000\\) for each crude i.\n5. Refinery capacity: the sum of all nine \\(x_{ij}\\) is at most 14000.\n6. Octane (average at least target): multiply the average by the total volume to stay linear, e.g. gas1 \\(12x_{11}+6x_{21}+8x_{31}\\ge10(x_{11}+x_{21}+x_{31})\\); right-hand coefficient 8 for gas2 and 6 for gas3.\n7. Sulphur (average at most target): gas1 \\(0.005x_{11}+0.02x_{21}+0.03x_{31}\\le0.01(x_{11}+x_{21}+x_{31})\\); right-hand coefficient 0.02 for gas2 and 0.01 for gas3.\n8. Signs: \\(x_{ij}\\ge0\\), \\(a_j\\ge0\\). The slides give only the model (solved by live coding) and no numeric optimum."
   ],
   "answer": [
    "以上 LP 即为 Sunco 日利润最大化模型；幻灯片未给出最优数值。",
    "The LP above is the Sunco daily-profit model; the slides do not state a numeric optimum."
   ],
   "pages": [
    21,
    22,
    23
   ],
   "concepts": [
    "case-blend",
    "concept-blending",
    "concept-variables"
   ],
   "source": "ETF2480_ETF5248_Lecture_3 (1).pdf",
   "tags": [
    "blending",
    "production process",
    "advertising"
   ]
  },
  {
   "id": "ex-etf5248-l3-rylon-perfume",
   "course": "ETF5248",
   "topic": "e5248-3",
   "topicName": [
    "饮食问题与产品组合",
    "Diet problem and product mix"
   ],
   "title": [
    "Rylon 香水生产过程（含扩展）",
    "Rylon perfume production process (with extension)"
   ],
   "problem": [
    "Rylon 公司生产 Brute 和 Chanelle 香水。原料每磅 3 美元，处理 1 磅原料需 1 小时实验室时间，每磅处理后的原料产出 3 盎司 Regular Brute 和 4 盎司 Regular Chanelle。Regular Brute 售价 7 美元/盎司，Regular Chanelle 6 美元/盎司。也可进一步加工：每盎司 Regular Brute 再加工需额外 3 小时实验室时间和 4 美元，产出 1 盎司 Luxury Brute（售价 18 美元/盎司）；每盎司 Regular Chanelle 再加工需额外 2 小时和 4 美元，产出 1 盎司 Luxury Chanelle（14 美元/盎司）。每年实验室共 6000 小时，最多购买 4000 磅原料。实验室工时成本视为固定成本。建立 LP 使利润最大。扩展：若 1 磅原料只能二选一，用来生产 3 盎司 Brute 或 4 盎司 Chanelle，模型如何改变？",
    "Rylon makes Brute and Chanelle perfumes. Raw material costs 3 dollars per pound; processing 1 lb needs 1 hour of lab time and yields 3 oz of Regular Brute and 4 oz of Regular Chanelle. Regular Brute sells at 7 dollars/oz, Regular Chanelle at 6 dollars/oz. Each oz of Regular Brute can be processed further (3 extra lab hours, 4 dollars cost) into 1 oz of Luxury Brute selling at 18 dollars/oz; each oz of Regular Chanelle (2 extra lab hours, 4 dollars) into 1 oz of Luxury Chanelle at 14 dollars/oz. Rylon has 6000 lab hours a year and can buy up to 4000 lb of raw material. Lab hours are a fixed cost. Formulate an LP maximising profit. Extension: if 1 lb of raw material could produce either 3 oz of Brute or 4 oz of Chanelle (not both), how does the model change?"
   ],
   "solution": [
    "1. 变量（按“卖出”的盎司数定义）：\\(x_1\\) 卖出 Regular Brute，\\(x_2\\) 卖出 Luxury Brute，\\(x_3\\) 卖出 Regular Chanelle，\\(x_4\\) 卖出 Luxury Chanelle，\\(x_5\\) 购买原料磅数。\n2. 利润系数：Regular 的售价分别是 7 和 6；Luxury 的净贡献是售价减再加工费，\\(18-4=14\\)、\\(14-4=10\\)；原料成本 \\(-3x_5\\)。目标：\\(\\max\\ 7x_1+14x_2+6x_3+10x_4-3x_5\\)。\n3. 原料上限：\\(x_5\\le4000\\)。\n4. 实验室时间：处理原料 \\(x_5\\) 小时，加上 Luxury Brute 每盎司 3 小时、Luxury Chanelle 每盎司 2 小时：\\(3x_2+2x_4+x_5\\le6000\\)。\n5. 物料守恒：Brute 总量（regular + luxury，luxury 由 regular 加工而来）等于原料产出 \\(x_1+x_2=3x_5\\)；\\(x_3+x_4=4x_5\\)。\n6. 符号：\\(x_i\\ge0\\)。\n7. 扩展：新增 \\(x_6\\) 为用于生产 Brute 的原料磅数，\\(x_7\\) 为用于生产 Chanelle 的原料磅数。目标和前两个约束不变；守恒改为 \\(x_1+x_2=3x_6\\)，\\(x_3+x_4=4x_7\\)，并加 \\(x_6+x_7=x_5\\)，\\(x_i\\ge0\\)（i=1..7）。\n8. 验算扩展解：实验室 \\(3\\times666.67+4000=6000\\)；利润 \\(14\\times666.67+6\\times15111.11-12000\\approx88000\\)。",
    "1. Variables (defined as ounces sold): \\(x_1\\) Regular Brute, \\(x_2\\) Luxury Brute, \\(x_3\\) Regular Chanelle, \\(x_4\\) Luxury Chanelle, and \\(x_5\\) pounds of raw material bought.\n2. Coefficients: regular perfumes earn their prices 7 and 6; luxury ones net price minus processing cost, \\(18-4=14\\) and \\(14-4=10\\); raw material costs \\(-3x_5\\). Objective: \\(\\max\\ 7x_1+14x_2+6x_3+10x_4-3x_5\\).\n3. Raw material limit: \\(x_5\\le4000\\).\n4. Lab time: 1 hour per pound processed, plus 3 hours per oz of Luxury Brute and 2 per oz of Luxury Chanelle: \\(3x_2+2x_4+x_5\\le6000\\).\n5. Material balance (luxury is made from regular, so the totals equal raw-material yield): \\(x_1+x_2=3x_5\\) and \\(x_3+x_4=4x_5\\).\n6. Signs: \\(x_i\\ge0\\).\n7. Extension: add \\(x_6\\) = pounds used for Brute and \\(x_7\\) = pounds used for Chanelle. Objective and the first two constraints stay; the balances become \\(x_1+x_2=3x_6\\), \\(x_3+x_4=4x_7\\), plus \\(x_6+x_7=x_5\\), with \\(x_i\\ge0\\) for i=1..7.\n8. Check of the extension solution: lab \\(3\\times666.67+4000=6000\\); profit \\(14\\times666.67+6\\times15111.11-12000\\approx88000\\)."
   ],
   "answer": [
    "原模型：\\(\\max\\ 7x_1+14x_2+6x_3+10x_4-3x_5\\)，约束见上。扩展模型的最优解 \\(x^\\star=(0,666.67,15111.11,0,4000,222.22,3777.78)\\)，\\(p^\\star=88000\\) 美元（原模型幻灯片未给数值解）。",
    "Base model as above. Extension optimum \\(x^\\star=(0,666.67,15111.11,0,4000,222.22,3777.78)\\) with \\(p^\\star=88000\\) dollars (the slides give no numeric optimum for the base model)."
   ],
   "pages": [
    25,
    26,
    27
   ],
   "concepts": [
    "case-rylon",
    "concept-joint-production",
    "concept-variables"
   ],
   "source": "ETF2480_ETF5248_Lecture_3 (1).pdf",
   "tags": [
    "production process",
    "yield",
    "extension"
   ]
  },
  {
   "id": "ex-etf5248-l4-leon-burnit-feasibility",
   "course": "ETF5248",
   "topic": "e5248-4",
   "topicName": [
    "单纯形法",
    "Simplex method"
   ],
   "title": [
    "Leon Burnit 广告排期：可行性问题",
    "Leon Burnit advertising schedule: a feasibility problem"
   ],
   "problem": [
    "Leon Burnit 广告公司要为 Priceler 汽车公司安排电视广告。目标：至少 4000 万 high impact manager (HIM)、6000 万 leaders in private sector (LIP)、3500 万 health informatics worker (HIW) 看到广告；广告总预算最多 60 万美元（dollars）。两种一分钟广告（观众单位：百万人）：football：HIM 7、LIP 10、HIW 5，成本 100,000 dollars；soap opera：HIM 3、LIP 5、HIW 4，成本 60,000 dollars。问：这个计划是否可行（feasible）？feasible set 长什么样？",
    "Leon Burnit must schedule one-minute TV ads for Priceler Auto. Ads must reach at least 40 million HIM, 60 million LIP and 35 million HIW, with total spend at most 600,000 dollars. Football ad (per minute): HIM 7, LIP 10, HIW 5 (millions), cost 100,000 dollars. Soap opera ad: HIM 3, LIP 5, HIW 4, cost 60,000 dollars. Decide whether the plan is feasible, i.e. whether the feasible set is non-empty."
   ],
   "solution": [
    "1. 设 \\(x_1\\)、\\(x_2\\) 分别为 football 和 soap opera 的广告分钟数。因为只问可行性，目标函数取 0：\\(\\min 0\\)，约束为 \\(7x_1+3x_2\\ge 40\\)，\\(10x_1+5x_2\\ge 60\\)，\\(5x_1+4x_2\\ge 35\\)，\\(100x_1+60x_2\\le 600\\)（成本以千 dollars 计），\\(x_1,x_2\\ge 0\\)。\n2. 课件在此只提出问题 “What can you say about the feasible set?”，没有给出答案。以下是我按课件的模型自行补的检查：三个观众约束的可行域是一个无界区域，其角点为 \\((4,4)\\)（HIM 与 LIP 同时取等）、\\((13/3,10/3)\\)（LIP 与 HIW 同时取等）以及两坐标轴上的点 \\((7,0)\\) 和 \\((0,40/3)\\)。\n3. 在这些角点上算成本：\\((4,4)\\) 为 640，\\((13/3,10/3)\\) 约为 633.3，\\((7,0)\\) 为 700，\\((0,40/3)\\) 为 800（单位：千 dollars）。成本最小值约 633.3 > 600。\n4. 因此预算约束 \\(100x_1+60x_2\\le 600\\) 与前三个约束无交集，feasible set 为空，计划不可行。",
    "1. Let \\(x_1,x_2\\) be minutes of football and soap opera ads. Since only feasibility matters, use objective \\(\\min 0\\) with constraints \\(7x_1+3x_2\\ge 40\\), \\(10x_1+5x_2\\ge 60\\), \\(5x_1+4x_2\\ge 35\\), \\(100x_1+60x_2\\le 600\\) (cost in thousands of dollars), \\(x_1,x_2\\ge 0\\).\n2. The slides only pose the question 'What can you say about the feasible set?' and give no answer; the following check is my own, using the slides' model. The audience constraints define an unbounded region with corner points \\((4,4)\\) (HIM and LIP tight), \\((13/3,10/3)\\) (LIP and HIW tight) and the axis points \\((7,0)\\) and \\((0,40/3)\\).\n3. Costs at these corners: 640, about 633.3, 700 and 800 (thousand dollars). The minimum cost over the audience region is about 633.3 > 600.\n4. So the budget constraint has no point in common with the audience constraints: the feasible set is empty and the plan is infeasible."
   ],
   "answer": [
    "按课件模型自行核算：最低成本约 63.33 万 dollars，超过 60 万预算，feasible set 为空，计划不可行（课件本身未给结论）。",
    "By my own check of the slides' model: minimum cost is about 633,300 dollars > 600,000 budget, so the feasible set is empty and the plan is infeasible (the slides leave the answer open)."
   ],
   "pages": [
    3,
    4,
    5
   ],
   "concepts": [
    "case-ad-feasibility",
    "concept-feasibility-objective",
    "concept-feasible"
   ],
   "source": "ETF2480_ETF5248__Lecture_4 (1).pdf",
   "tags": [
    "feasibility",
    "LP formulation",
    "advertising"
   ]
  },
  {
   "id": "ex-etf5248-l4-dakota-simplex",
   "course": "ETF5248",
   "topic": "e5248-4",
   "topicName": [
    "单纯形法",
    "Simplex method"
   ],
   "title": [
    "Dakota 家具公司：单纯形法求解",
    "Dakota furniture company: solving by the simplex method"
   ],
   "problem": [
    "Dakota Furniture 生产 desk、table、chair。每件所需资源：lumber（board feet）desk 8、table 6、chair 1；finishing（小时）4、2、1.5；carpentry（小时）2、1.5、0.5。现有 48 board feet lumber、20 finishing 小时、8 carpentry 小时。售价：desk 60 dollars、table 30 dollars、chair 20 dollars。desk 和 chair 需求不限，table 最多卖 5 张。资源已购入，目标是最大化总收入。请建立 LP、化为标准形，并用 simplex 法求最优解。",
    "Dakota Furniture makes desks, tables and chairs. Per unit: lumber (board feet) 8, 6, 1; finishing hours 4, 2, 1.5; carpentry hours 2, 1.5, 0.5. Available: 48 board feet of lumber, 20 finishing hours, 8 carpentry hours. Prices: desk 60 dollars, table 30 dollars, chair 20 dollars. Demand for desks and chairs is unlimited, at most 5 tables can be sold. Maximise total revenue: formulate the LP, put it in standard form and solve it with the simplex method."
   ],
   "solution": [
    "1. 设 \\(x_1,x_2,x_3\\) 为 desk、table、chair 的产量。模型：\\(\\max 60x_1+30x_2+20x_3\\)，约束 \\(8x_1+6x_2+x_3\\le 48\\)，\\(4x_1+2x_2+1.5x_3\\le 20\\)，\\(2x_1+1.5x_2+0.5x_3\\le 8\\)，\\(x_2\\le 5\\)，\\(x_i\\ge 0\\)。\n2. 每个约束加 slack 变量 \\(s_1,\\dots,s_4\\) 化为标准形。因为全是 \\(\\le\\) 约束，可取 slack 为初始 basic variables：初始 bfs 为 \\(s=(48,20,8,5)\\)，\\(z=0\\)。Row 0 为 \\(z-60x_1-30x_2-20x_3=0\\)。\n3. 最优性检验：row 0 中 \\(x_1,x_2,x_3\\) 的系数均为负，当前 bfs 不是最优。选系数最负的 \\(x_1\\) 进基。\n4. Ratio test：row 1 \\(48/8=6\\)，row 2 \\(20/4=5\\)，row 3 \\(8/2=4\\)（row 4 中 \\(x_1\\) 系数为 0，不参与）。最小为 4，row 3 获胜，所以 \\(s_3\\) 出基。\n5. Pivot：row 3 除以 2 使 \\(x_1\\) 系数为 1，再用新的 row 3 消去其他行的 \\(x_1\\)（row 1 减 8 倍，row 2 减 4 倍，row 0 加 60 倍）。得到 iteration 1：\\(z=240\\)，\\(x_1=4\\)，\\(s_1=16\\)，\\(s_2=4\\)，\\(s_4=5\\)；row 0 为 \\(x_2:15,\\ x_3:-5,\\ s_3:30\\)。\n6. \\(x_3\\) 的系数仍为负，继续迭代：\\(x_3\\) 进基，ratio test 在 row 2 获胜（\\(4/0.5=8\\)，row 3 为 \\(4/0.25=16\\)），\\(s_2\\) 出基。Pivot 后得到 iteration 2：row 0 为 \\(x_2:5,\\ s_2:10,\\ s_3:10\\)，\\(z=280\\)，基变量 \\(s_1=24\\)，\\(x_3=8\\)，\\(x_1=2\\)，\\(s_4=5\\)。\n7. 所有非基变量在 row 0 的系数均非负，当前 bfs 最优。备注：每次 pivot 后各约束的 rhs 必须非负；row 0 中决策变量的系数称为 reduced cost；binding 约束对应的 slack 为 0（此处 \\(s_2=s_3=0\\)，即 finishing 和 carpentry 用尽）。",
    "1. Let \\(x_1,x_2,x_3\\) be the numbers of desks, tables and chairs. Model: \\(\\max 60x_1+30x_2+20x_3\\) s.t. \\(8x_1+6x_2+x_3\\le 48\\), \\(4x_1+2x_2+1.5x_3\\le 20\\), \\(2x_1+1.5x_2+0.5x_3\\le 8\\), \\(x_2\\le 5\\), \\(x_i\\ge 0\\).\n2. Add slacks \\(s_1,\\dots,s_4\\) to get standard form. All constraints are \\(\\le\\), so the slacks form the starting basis: bfs \\(s=(48,20,8,5)\\), \\(z=0\\). Row 0 reads \\(z-60x_1-30x_2-20x_3=0\\).\n3. Optimality test: \\(x_1,x_2,x_3\\) all have negative row-0 coefficients, so the bfs is not optimal. Pick the most negative one, \\(x_1\\), to enter.\n4. Ratio test: row 1 gives \\(48/8=6\\), row 2 \\(20/4=5\\), row 3 \\(8/2=4\\) (row 4 has a zero in the \\(x_1\\) column and is ignored). Row 3 wins, so \\(s_3\\) leaves.\n5. Pivot: divide row 3 by 2, then eliminate \\(x_1\\) from the other rows (row 1 minus 8 times new row 3, row 2 minus 4 times, row 0 plus 60 times). Iteration 1: \\(z=240\\), \\(x_1=4\\), \\(s_1=16\\), \\(s_2=4\\), \\(s_4=5\\); row 0 has \\(x_2:15,\\ x_3:-5,\\ s_3:30\\).\n6. \\(x_3\\) is still negative, so iterate: \\(x_3\\) enters, row 2 wins the ratio test (\\(4/0.5=8\\) versus \\(4/0.25=16\\) in row 3), \\(s_2\\) leaves. Iteration 2: row 0 has \\(x_2:5,\\ s_2:10,\\ s_3:10\\), \\(z=280\\), basis \\(s_1=24\\), \\(x_3=8\\), \\(x_1=2\\), \\(s_4=5\\).\n7. All nonbasic variables now have nonnegative row-0 coefficients, so the bfs is optimal. Remarks: rhs must stay nonnegative after every pivot; a decision variable's row-0 coefficient is its reduced cost; binding constraints have zero slack (here \\(s_2=s_3=0\\): finishing and carpentry are used up)."
   ],
   "answer": [
    "最优解 \\(x_1=2,\\ x_2=0,\\ x_3=8\\)，最大总收入 \\(z=280\\) dollars（slack：\\(s_1=24\\)，\\(s_4=5\\)，\\(s_2=s_3=0\\)）。",
    "Optimal: \\(x_1=2\\) desks, \\(x_2=0\\) tables, \\(x_3=8\\) chairs, maximum revenue \\(z=280\\) dollars (slacks \\(s_1=24\\), \\(s_4=5\\), \\(s_2=s_3=0\\))."
   ],
   "pages": [
    9,
    10,
    11,
    12,
    13,
    14,
    15
   ],
   "concepts": [
    "case-dakota",
    "concept-simplex-optimality",
    "concept-ratio-pivot",
    "concept-basis"
   ],
   "source": "ETF2480_ETF5248__Lecture_4 (1).pdf",
   "tags": [
    "simplex",
    "tableau",
    "ratio test",
    "standard form"
   ]
  },
  {
   "id": "ex-etf5248-l5-upper-bound-dual",
   "course": "ETF5248",
   "topic": "e5248-5",
   "topicName": [
    "对偶与灵敏度分析",
    "Duality and sensitivity"
   ],
   "title": [
    "用上界推导对偶问题",
    "Deriving the dual by bounding the primal from above"
   ],
   "problem": [
    "考虑线性规划：maximize \\(4x_1+x_2+3x_3\\)，约束 \\(x_1+4x_2\\le 1\\)，\\(3x_1-x_2+x_3\\le 3\\)，\\(x_1,x_2,x_3\\ge 0\\)。(a) 用可行解给出 \\(p^\\star\\) 的下界；(b) 把第一个约束乘 2、第二个约束乘 3 后相加，给出上界；(c) 把乘数换成变量 \\(y_1,y_2\\ge0\\)，写出能得到的最好上界所对应的问题。",
    "Consider the LP: maximize \\(4x_1+x_2+3x_3\\) subject to \\(x_1+4x_2\\le 1\\), \\(3x_1-x_2+x_3\\le 3\\), \\(x_1,x_2,x_3\\ge 0\\). (a) Use feasible points to give lower bounds on \\(p^\\star\\). (b) Multiply constraint 1 by 2 and constraint 2 by 3 and add them to get an upper bound. (c) Replace the multipliers by variables \\(y_1,y_2\\ge 0\\) and write the problem that finds the best such upper bound."
   ],
   "solution": [
    "1. 下界：任何可行解都是下界。\\(x=(1,0,0)\\) 可行，目标值 4，所以 \\(p^\\star\\ge 4\\)；\\(x=(0,0,3)\\) 可行，目标值 9，所以 \\(p^\\star\\ge 9\\)。\n2. 上界：第一式乘 2、第二式乘 3 再相加，得 \\(11x_1+5x_2+3x_3\\le 11\\)。因为变量非负且 \\(4\\le 11,\\ 1\\le 5,\\ 3\\le 3\\)，所以 \\(4x_1+x_2+3x_3\\le 11x_1+5x_2+3x_3\\le 11\\)，即 \\(p^\\star\\le 11\\)。合起来 \\(9\\le p^\\star\\le 11\\)。\n3. 一般化：用 \\(y_1,y_2\\ge0\\) 作乘数，相加得 \\((y_1+3y_2)x_1+(4y_1-y_2)x_2+y_2x_3\\le y_1+3y_2\\)。要让左边每个系数不小于目标函数对应系数：\\(y_1+3y_2\\ge4\\)，\\(4y_1-y_2\\ge1\\)，\\(y_2\\ge3\\)，这样 \\(p\\le y_1+3y_2\\)。\n4. 最好的上界就是最小化 \\(y_1+3y_2\\)，得到对偶问题：minimize \\(y_1+3y_2\\) s.t. 上述三个不等式及 \\(y_1,y_2\\ge0\\)。（补充验算：这个小问题的最优为 \\(y=(1,3)\\)，值 10；原问题 \\(x=(0,\\tfrac14,\\tfrac{13}{4})\\) 也给出 10，所以 \\(p^\\star=10\\)。幻灯片只说“界还可以改进”。）",
    "1. Lower bounds: any feasible point works. \\(x=(1,0,0)\\) is feasible with objective 4, so \\(p^\\star\\ge4\\); \\(x=(0,0,3)\\) is feasible with objective 9, so \\(p^\\star\\ge 9\\).\n2. Upper bound: 2 times constraint 1 plus 3 times constraint 2 gives \\(11x_1+5x_2+3x_3\\le 11\\). Since the variables are nonnegative and \\(4\\le11,\\ 1\\le5,\\ 3\\le3\\), we get \\(4x_1+x_2+3x_3\\le 11x_1+5x_2+3x_3\\le 11\\), so \\(p^\\star\\le 11\\). Hence \\(9\\le p^\\star\\le 11\\).\n3. Generalise: with multipliers \\(y_1,y_2\\ge0\\) the sum is \\((y_1+3y_2)x_1+(4y_1-y_2)x_2+y_2x_3\\le y_1+3y_2\\). Require each coefficient to be at least the objective coefficient: \\(y_1+3y_2\\ge4\\), \\(4y_1-y_2\\ge1\\), \\(y_2\\ge3\\). Then \\(p\\le y_1+3y_2\\).\n4. The best bound minimises \\(y_1+3y_2\\) under these constraints and \\(y_1,y_2\\ge0\\): this is the dual LP. (Extra check, not on the slides: the dual optimum is \\(y=(1,3)\\) with value 10, and the primal point \\(x=(0,\\tfrac14,\\tfrac{13}{4})\\) also gives 10, so \\(p^\\star=10\\). The slides only say the bounds can be improved.)"
   ],
   "answer": [
    "对偶问题：min \\(y_1+3y_2\\)，s.t. \\(y_1+3y_2\\ge4,\\ 4y_1-y_2\\ge1,\\ y_2\\ge3,\\ y\\ge0\\)；初始界 \\(9\\le p^\\star\\le 11\\)。",
    "Dual: min \\(y_1+3y_2\\) s.t. \\(y_1+3y_2\\ge4,\\ 4y_1-y_2\\ge1,\\ y_2\\ge3,\\ y\\ge0\\); initial bounds \\(9\\le p^\\star\\le 11\\)."
   ],
   "pages": [
    4,
    5,
    6,
    7
   ],
   "concepts": [
    "case-dual-bounds",
    "concept-weak-duality",
    "concept-dual"
   ],
   "source": "ETF2480_ETF5248_Lecture_5.pdf",
   "tags": [
    "duality",
    "upper bound",
    "dual construction"
   ]
  },
  {
   "id": "ex-etf5248-l5-dakota-dual",
   "course": "ETF5248",
   "topic": "e5248-5",
   "topicName": [
    "对偶与灵敏度分析",
    "Duality and sensitivity"
   ],
   "title": [
    "Dakota 家具：对偶问题与影子价格",
    "Dakota furniture: the dual and shadow prices"
   ],
   "problem": [
    "Dakota 公司生产书桌(desk)、桌子(table)、椅子(chair)。每件所需资源：lumber 8/6/1 板英尺，finishing 4/2/1.5 小时，carpentry 2/1.5/0.5 小时。可用资源：lumber 48，finishing 20，carpentry 8。售价 60/30/20 美元；桌子最多卖 5 张，书桌和椅子需求不限。资源已购入，目标是最大化总收入。(a) 写出原问题和对偶问题；(b) 已知 \\(x^\\star=(2,0,8)\\)，\\(y^\\star=(0,10,10,0)\\)，验证最优并解释对偶变量。",
    "Dakota Furniture makes desks, tables and chairs. Each unit needs lumber 8/6/1 board feet, finishing 4/2/1.5 hours, carpentry 2/1.5/0.5 hours (desk/table/chair). Available: 48 lumber, 20 finishing, 8 carpentry. Prices are 60/30/20 dollars; at most 5 tables can be sold, desk and chair demand is unlimited. Resources are already bought, so maximise total revenue. (a) Write the primal and the dual. (b) Given \\(x^\\star=(2,0,8)\\) and \\(y^\\star=(0,10,10,0)\\), check optimality and interpret the dual variables."
   ],
   "solution": [
    "1. 原问题：maximize \\(60x_1+30x_2+20x_3\\)，s.t. \\(8x_1+6x_2+x_3\\le48\\)，\\(4x_1+2x_2+1.5x_3\\le20\\)，\\(2x_1+1.5x_2+0.5x_3\\le8\\)，\\(x_2\\le5\\)，\\(x\\ge0\\)。\n2. 对偶（每个约束一个变量，4 个）：minimize \\(48y_1+20y_2+8y_3+5y_4\\)，s.t. \\(8y_1+4y_2+2y_3\\ge60\\)，\\(6y_1+2y_2+1.5y_3+y_4\\ge30\\)，\\(y_1+1.5y_2+0.5y_3\\ge20\\)，\\(y\\ge0\\)。\n3. 验证：原目标 \\(60\\cdot2+20\\cdot8=280\\)；对偶目标 \\(20\\cdot10+8\\cdot10=280\\)。两者均可行且值相等，由强对偶两者都最优，\\(p^\\star=d^\\star=280\\)。\n4. 解释：\\(y_1^\\star=y_4^\\star=0\\)，说明 lumber 与桌子需求约束不紧（lumber 只用了 24 < 48），它们不限制收入。\\(y_2^\\star=10\\)：finishing 约束紧，右端项增加 \\(u\\) 会使目标改变 \\(10u\\)，所以多一小时 finishing 最多值 10 美元。\\(y_3^\\star=10\\)：carpentry 同理，多一小时最多值 10 美元。两者影响相同，所以多一小时 finishing 或 carpentry 对 Dakota 无差别。",
    "1. Primal: maximize \\(60x_1+30x_2+20x_3\\) s.t. \\(8x_1+6x_2+x_3\\le48\\), \\(4x_1+2x_2+1.5x_3\\le20\\), \\(2x_1+1.5x_2+0.5x_3\\le8\\), \\(x_2\\le5\\), \\(x\\ge0\\).\n2. Dual (one variable per primal constraint, four in all): minimize \\(48y_1+20y_2+8y_3+5y_4\\) s.t. \\(8y_1+4y_2+2y_3\\ge60\\), \\(6y_1+2y_2+1.5y_3+y_4\\ge30\\), \\(y_1+1.5y_2+0.5y_3\\ge20\\), \\(y\\ge0\\).\n3. Check: primal objective \\(60\\cdot2+20\\cdot8=280\\); dual objective \\(20\\cdot10+8\\cdot10=280\\). Both points are feasible and the values are equal, so by strong duality both are optimal: \\(p^\\star=d^\\star=280\\).\n4. Interpretation: \\(y_1^\\star=y_4^\\star=0\\) means the lumber and table-demand constraints are loose (lumber use is only 24 of 48), so they do not limit revenue. \\(y_2^\\star=10\\): finishing is binding; raising its right-hand side by \\(u\\) changes revenue by \\(10u\\), so an extra finishing hour is worth at most 10 dollars. \\(y_3^\\star=10\\): same for carpentry. Both have the same effect, so Dakota is indifferent between one more finishing hour and one more carpentry hour."
   ],
   "answer": [
    "\\(x^\\star=(2,0,8)\\)，\\(y^\\star=(0,10,10,0)\\)，\\(p^\\star=d^\\star=280\\)；finishing 与 carpentry 的影子价格都是 10 美元/小时，lumber 与桌子上限的影子价格为 0。",
    "\\(x^\\star=(2,0,8)\\), \\(y^\\star=(0,10,10,0)\\), \\(p^\\star=d^\\star=280\\); shadow price 10 dollars per hour for both finishing and carpentry, 0 for lumber and the table limit."
   ],
   "pages": [
    14,
    15,
    16,
    17
   ],
   "concepts": [
    "case-dakota",
    "concept-dual",
    "concept-sensitivity",
    "concept-complementarity"
   ],
   "source": "ETF2480_ETF5248_Lecture_5.pdf",
   "tags": [
    "duality",
    "shadow price",
    "Dakota",
    "strong duality"
   ]
  },
  {
   "id": "ex-etf5248-l5-dual-mixed-constraints",
   "course": "ETF5248",
   "topic": "e5248-5",
   "topicName": [
    "对偶与灵敏度分析",
    "Duality and sensitivity"
   ],
   "title": [
    "含混合约束的 LP 求对偶",
    "Dual of an LP with mixed constraint types"
   ],
   "problem": [
    "写出下列 LP 的对偶：maximize \\(-x_1-x_2\\)，s.t. \\(-2x_1-x_2\\le4\\)，\\(2x_1-4x_2\\ge8\\)，\\(x_1-3x_2\\ge7\\)，\\(x_1,x_2\\ge0\\)。",
    "Write the dual of this LP: maximize \\(-x_1-x_2\\) s.t. \\(-2x_1-x_2\\le4\\), \\(2x_1-4x_2\\ge8\\), \\(x_1-3x_2\\ge7\\), \\(x_1,x_2\\ge0\\)."
   ],
   "solution": [
    "1. 用幻灯片的对应表（原问题为 maximize）：约束 \\(\\le b_i\\) 对应对偶变量 \\(\\ge0\\)，约束 \\(\\ge b_i\\) 对应对偶变量 \\(\\le0\\)，等式对应自由变量；原变量 \\(\\ge0\\) 对应对偶约束 \\(\\ge c_j\\)。\n2. 对偶变量：三个约束各配一个 \\(y_i\\)。第 1 个是 \\(\\le\\)，所以 \\(y_1\\ge0\\)；第 2、3 个是 \\(\\ge\\)，所以 \\(y_2,y_3\\le0\\)。\n3. 对偶目标：右端项 \\((4,8,7)\\) 作系数，原问题 max 所以对偶 min：minimize \\(4y_1+8y_2+7y_3\\)。\n4. 对偶约束：每个原变量一个。\\(x_1\\) 的列为 \\((-2,2,1)\\)，右端为 \\(c_1=-1\\)：\\(-2y_1+2y_2+y_3\\ge-1\\)。\\(x_2\\) 的列为 \\((-1,-4,-3)\\)，\\(c_2=-1\\)：\\(-y_1-4y_2-3y_3\\ge-1\\)。",
    "1. Use the primal-dual table from the slides (primal is a maximisation): a \\(\\le b_i\\) constraint gives a dual variable \\(\\ge0\\), a \\(\\ge b_i\\) constraint gives a dual variable \\(\\le0\\), equalities give free variables; primal variables \\(\\ge0\\) give dual constraints \\(\\ge c_j\\).\n2. Dual variables: one \\(y_i\\) per constraint. Constraint 1 is \\(\\le\\), so \\(y_1\\ge0\\); constraints 2 and 3 are \\(\\ge\\), so \\(y_2,y_3\\le0\\).\n3. Dual objective: the right-hand sides \\((4,8,7)\\) become the coefficients, and the dual of a max is a min: minimize \\(4y_1+8y_2+7y_3\\).\n4. Dual constraints, one per primal variable. Column of \\(x_1\\) is \\((-2,2,1)\\) with \\(c_1=-1\\): \\(-2y_1+2y_2+y_3\\ge-1\\). Column of \\(x_2\\) is \\((-1,-4,-3)\\) with \\(c_2=-1\\): \\(-y_1-4y_2-3y_3\\ge-1\\)."
   ],
   "answer": [
    "minimize \\(4y_1+8y_2+7y_3\\) s.t. \\(-2y_1+2y_2+y_3\\ge-1\\)，\\(-y_1-4y_2-3y_3\\ge-1\\)，\\(y_1\\ge0\\)，\\(y_2,y_3\\le0\\)。",
    "minimize \\(4y_1+8y_2+7y_3\\) s.t. \\(-2y_1+2y_2+y_3\\ge-1\\), \\(-y_1-4y_2-3y_3\\ge-1\\), \\(y_1\\ge0\\), \\(y_2,y_3\\le0\\)."
   ],
   "pages": [
    25
   ],
   "concepts": [
    "concept-dual-signs",
    "concept-dual"
   ],
   "source": "ETF2480_ETF5248_Lecture_5.pdf",
   "tags": [
    "duality",
    "dual rules",
    "mixed constraints"
   ]
  },
  {
   "id": "ex-etf5248-l5-dakota-nonbasic-cost",
   "course": "ETF5248",
   "topic": "e5248-5",
   "topicName": [
    "对偶与灵敏度分析",
    "Duality and sensitivity"
   ],
   "title": [
    "Dakota：非基变量目标系数的范围",
    "Dakota: range for a nonbasic variable's objective coefficient"
   ],
   "problem": [
    "Dakota 问题的最终 simplex 表为（列 \\(z,x_1,x_2,x_3,s_1,s_2,s_3,s_4\\mid\\)rhs）：row0: \\(1,0,5,0,0,10,10,0\\mid280\\)；row1: \\(0,0,-2,0,1,2,-8,0\\mid24\\)；row2: \\(0,0,-2,1,0,2,-4,0\\mid8\\)；row3: \\(0,1,1.25,0,0,-0.5,1.5,0\\mid2\\)；row4: \\(0,0,1,0,0,0,0,1\\mid5\\)。基变量为 \\(s_1,x_3,x_1,s_4\\)。原问题中 \\(x_2\\) 的利润系数为 30。当 \\(x_2\\) 的系数增加 \\(\\Delta c_2\\) 时，最优解保持不变的范围是多少？",
    "The final simplex tableau of the Dakota problem (columns \\(z,x_1,x_2,x_3,s_1,s_2,s_3,s_4\\mid\\)rhs) is: row0: \\(1,0,5,0,0,10,10,0\\mid280\\); row1: \\(0,0,-2,0,1,2,-8,0\\mid24\\); row2: \\(0,0,-2,1,0,2,-4,0\\mid8\\); row3: \\(0,1,1.25,0,0,-0.5,1.5,0\\mid2\\); row4: \\(0,0,1,0,0,0,0,1\\mid5\\). Basic variables are \\(s_1,x_3,x_1,s_4\\). The original profit coefficient of \\(x_2\\) is 30. How far can it increase by \\(\\Delta c_2\\) before the optimal solution changes?"
   ],
   "solution": [
    "1. \\(x_2\\) 是非基变量，把目标写成 \\(z-60x_1-(30+\\Delta c_2)x_2-20x_3=0\\)。\n2. 因为 \\(x_2\\) 不在基中，改动它只影响最终表 row 0 中 \\(x_2\\) 的那一格，变成 \\(5-\\Delta c_2\\)，其余行不变，\\(z=280\\) 也不变。\n3. 最优性条件：row 0 的所有系数非负，故 \\(5-\\Delta c_2\\ge0\\)，即 \\(\\Delta c_2\\le5\\)。\n4. 因此 \\(c_2\\le35\\)：只要桌子的价格不超过 35 美元，当前最优解 \\(x^\\star=(2,0,8)\\) 不变。",
    "1. \\(x_2\\) is nonbasic. Write the objective as \\(z-60x_1-(30+\\Delta c_2)x_2-20x_3=0\\).\n2. Since \\(x_2\\) is not in the basis, the change only affects the \\(x_2\\) entry of row 0 in the final tableau, which becomes \\(5-\\Delta c_2\\); the other rows and \\(z=280\\) are unchanged.\n3. Optimality requires all row-0 coefficients to be nonnegative, so \\(5-\\Delta c_2\\ge0\\), i.e. \\(\\Delta c_2\\le5\\).\n4. Hence \\(c_2\\le35\\): as long as the table price is at most 35 dollars, the current optimum \\(x^\\star=(2,0,8)\\) stays optimal."
   ],
   "answer": [
    "\\(\\Delta c_2\\le5\\)，即 \\(c_2\\le35\\)，最优解不变。",
    "\\(\\Delta c_2\\le5\\), i.e. \\(c_2\\le35\\); the optimal solution is unchanged."
   ],
   "pages": [
    35,
    36,
    37,
    38
   ],
   "concepts": [
    "concept-objective-range",
    "case-dakota",
    "concept-simplex-optimality"
   ],
   "source": "ETF2480_ETF5248_Lecture_5.pdf",
   "tags": [
    "sensitivity",
    "nonbasic",
    "objective coefficient",
    "simplex tableau"
   ]
  },
  {
   "id": "ex-etf5248-l5-dakota-basic-cost",
   "course": "ETF5248",
   "topic": "e5248-5",
   "topicName": [
    "对偶与灵敏度分析",
    "Duality and sensitivity"
   ],
   "title": [
    "Dakota：基变量目标系数的范围",
    "Dakota: range for a basic variable's objective coefficient"
   ],
   "problem": [
    "沿用 Dakota 问题的最终 simplex 表（row0: \\(1,0,5,0,0,10,10,0\\mid280\\)；row1: \\(0,0,-2,0,1,2,-8,0\\mid24\\)；row2: \\(0,0,-2,1,0,2,-4,0\\mid8\\)；row3: \\(0,1,1.25,0,0,-0.5,1.5,0\\mid2\\)；row4: \\(0,0,1,0,0,0,0,1\\mid5\\)，列为 \\(z,x_1,x_2,x_3,s_1,s_2,s_3,s_4\\mid\\)rhs）。\\(x_1\\)（书桌）是基变量，原利润系数 60。当其系数变为 \\(60+\\Delta c_1\\) 时，保持当前基仍最优的 \\(\\Delta c_1\\) 与 \\(c_1\\) 范围是多少？",
    "Use the same final simplex tableau for Dakota (row0: \\(1,0,5,0,0,10,10,0\\mid280\\); row1: \\(0,0,-2,0,1,2,-8,0\\mid24\\); row2: \\(0,0,-2,1,0,2,-4,0\\mid8\\); row3: \\(0,1,1.25,0,0,-0.5,1.5,0\\mid2\\); row4: \\(0,0,1,0,0,0,0,1\\mid5\\); columns \\(z,x_1,x_2,x_3,s_1,s_2,s_3,s_4\\mid\\)rhs). \\(x_1\\) (desks) is basic with original profit 60. For the coefficient \\(60+\\Delta c_1\\), find the range of \\(\\Delta c_1\\) and \\(c_1\\) for which the current basis stays optimal."
   ],
   "solution": [
    "1. 目标变为 \\(z-(60+\\Delta c_1)x_1-30x_2-20x_3=0\\)，最终表 row 0 中 \\(x_1\\) 的系数变成 \\(-\\Delta c_1\\)。\n2. 但 \\(x_1\\) 是基变量，最终表必须对基变量保持 canonical form（\\(x_1\\) 在 row 0 的系数为 0）。所以把 row 3 的 \\(\\Delta c_1\\) 倍加到 row 0。\n3. 新的 row 0：\\(x_2\\) 系数 \\(5+1.25\\Delta c_1\\)，\\(s_2\\) 系数 \\(10-0.5\\Delta c_1\\)，\\(s_3\\) 系数 \\(10+1.5\\Delta c_1\\)，rhs 为 \\(280+2\\Delta c_1\\)。\n4. 最优性要求这些系数都非负：\\(5+1.25\\Delta c_1\\ge0\\Rightarrow\\Delta c_1\\ge-4\\)；\\(10-0.5\\Delta c_1\\ge0\\Rightarrow\\Delta c_1\\le20\\)；\\(10+1.5\\Delta c_1\\ge0\\Rightarrow\\Delta c_1\\ge-10/1.5\\)（约 \\(-6.67\\)，比 \\(-4\\) 宽松）。\n5. 合并得 \\(-4\\le\\Delta c_1\\le20\\)，即 \\(56\\le c_1\\le80\\)。",
    "1. The objective becomes \\(z-(60+\\Delta c_1)x_1-30x_2-20x_3=0\\), so the \\(x_1\\) entry in row 0 of the final tableau becomes \\(-\\Delta c_1\\).\n2. But \\(x_1\\) is basic, and the final tableau must stay in canonical form (a zero for \\(x_1\\) in row 0). So add \\(\\Delta c_1\\) times row 3 to row 0.\n3. New row 0: \\(x_2\\) coefficient \\(5+1.25\\Delta c_1\\), \\(s_2\\) coefficient \\(10-0.5\\Delta c_1\\), \\(s_3\\) coefficient \\(10+1.5\\Delta c_1\\), rhs \\(280+2\\Delta c_1\\).\n4. Optimality needs all of these nonnegative: \\(5+1.25\\Delta c_1\\ge0\\Rightarrow\\Delta c_1\\ge-4\\); \\(10-0.5\\Delta c_1\\ge0\\Rightarrow\\Delta c_1\\le20\\); \\(10+1.5\\Delta c_1\\ge0\\Rightarrow\\Delta c_1\\ge-10/1.5\\) (about \\(-6.67\\), weaker than \\(-4\\)).\n5. Combining: \\(-4\\le\\Delta c_1\\le20\\), i.e. \\(56\\le c_1\\le80\\)."
   ],
   "answer": [
    "\\(-4\\le\\Delta c_1\\le20\\)，即 \\(56\\le c_1\\le80\\)，此范围内基不变。",
    "\\(-4\\le\\Delta c_1\\le20\\), i.e. \\(56\\le c_1\\le80\\); the basis is unchanged in this range."
   ],
   "pages": [
    39,
    40,
    41,
    42
   ],
   "concepts": [
    "concept-objective-range",
    "case-dakota",
    "concept-basis"
   ],
   "source": "ETF2480_ETF5248_Lecture_5.pdf",
   "tags": [
    "sensitivity",
    "basic variable",
    "objective coefficient",
    "simplex tableau"
   ]
  },
  {
   "id": "ex-etf5248-l6-konigsberg",
   "course": "ETF5248",
   "topic": "e5248-6",
   "topicName": [
    "网络流问题",
    "Network flow problems"
   ],
   "title": [
    "柯尼斯堡七桥问题（欧拉回路）",
    "Königsberg bridges and Euler's graph argument"
   ],
   "problem": [
    "普鲁士城市柯尼斯堡的 Pregel 河把城市分成四块陆地 A、B、C、D，河上共有七座桥（其中五座连接 Kneiphof 岛与陆地，另两座跨过河的两个支流）。问：能否走遍七座桥，且每座桥恰好只走一次？",
    "The river Pregel splits Königsberg into four land areas A, B, C, D joined by seven bridges (five of them touch the island Kneiphof, the other two cross the two river branches). Is there a walk that crosses every bridge exactly once? Explain using a graph."
   ],
   "solution": [
    "1. 把四块陆地当作节点，桥当作连边，得到一个图（节点 A, B, C, D，7 条边）。\n2. 欧拉的观察：若存在一条每座桥恰走一次的路径，则度数为奇数的节点只能是路径的起点或终点——因为走进一个奇度节点后，可能已经没有未用过的边可以离开。\n3. 利用度数公式 \\(L=\\tfrac12\\sum_i k_i\\)：七座桥意味着度数之和为 14；柯尼斯堡图中四个节点的度数都是奇数（slides 只明确给出节点 C 的度数为 3，其余按标准图为 5、3、3 ）。\n4. 一条路径至多只有两个端点，而图里有四个奇度节点，因此这样的路径不可能存在。\n5. 重点：路径是否存在是图结构的性质，与我们的聪明程度无关。",
    "1. Model land areas as nodes and bridges as edges: a graph with nodes A, B, C, D and 7 edges.\n2. Euler's observation: if a walk uses every bridge exactly once, any node with an odd number of links must be the start or the end of the walk, because after entering such a node you may have no unused link left to leave by.\n3. With \\(L=\\tfrac12\\sum_i k_i\\), seven bridges give a degree sum of 14. In the Königsberg graph all four nodes have odd degree (the slides state only that node C has degree 3; the others are the standard 5, 3, 3).\n4. A walk has at most two endpoints, but there are four odd-degree nodes, so no such walk exists.\n5. Takeaway: existence of the walk is a structural property of the graph, not a matter of ingenuity."
   ],
   "answer": [
    "不存在这样的路径；这是图本身结构（奇度节点太多）决定的，欧拉据此给出了严格证明。",
    "No such walk exists; the graph structure (too many odd-degree nodes) rules it out, which is Euler's proof."
   ],
   "pages": [
    8,
    9
   ],
   "concepts": [
    "case-bridges",
    "concept-incidence"
   ],
   "source": "ETF2480_ETF5248_Lecture_6.pdf",
   "tags": [
    "graph theory",
    "Euler",
    "degree"
   ]
  },
  {
   "id": "ex-etf5248-l6-incidence-matrix",
   "course": "ETF5248",
   "topic": "e5248-6",
   "topicName": [
    "网络流问题",
    "Network flow problems"
   ],
   "title": [
    "由节点-弧关联矩阵读出网络",
    "Reading a network from its node-arc incidence matrix"
   ],
   "problem": [
    "一个有 5 个节点、7 条弧的有向网络，其节点-弧关联矩阵为（行=节点 1–5，列=弧 1–7）：\n行1: 1 1 1 -1 0 0 0；行2: -1 0 0 1 -1 0 0；行3: 0 -1 0 0 1 1 -1；行4: 0 0 -1 0 0 0 1；行5: 0 0 0 0 0 -1 0。\n约定：\\(A_{ij}=1\\) 表示弧 j 从节点 i 出发，\\(-1\\) 表示弧 j 在节点 i 结束，0 表示无关。请写出每条弧的方向，并检验矩阵的列性质。",
    "A directed network has 5 nodes and 7 arcs with node-arc incidence matrix (rows = nodes 1-5, columns = arcs 1-7):\nrow1: 1 1 1 -1 0 0 0; row2: -1 0 0 1 -1 0 0; row3: 0 -1 0 0 1 1 -1; row4: 0 0 -1 0 0 0 1; row5: 0 0 0 0 0 -1 0.\nConvention: \\(A_{ij}=1\\) if arc j starts at node i, \\(-1\\) if it ends at node i, 0 otherwise. Recover each arc's direction and check the column structure."
   ],
   "solution": [
    "1. 每一列恰有一个 +1（起点）和一个 -1（终点）。\n2. 第1列：+1 在行1，-1 在行2，弧 1 为 \\(1\\to2\\)；第2列：\\(1\\to3\\)；第3列：\\(1\\to4\\)。\n3. 第4列：-1 在行1，+1 在行2，弧 4 为 \\(2\\to1\\)；第5列：+1 在行3，-1 在行2，弧 5 为 \\(3\\to2\\)。\n4. 第6列：+1 在行3，-1 在行5，弧 6 为 \\(3\\to5\\)；第7列：+1 在行4，-1 在行3，弧 7 为 \\(4\\to3\\)。\n5. 每列元素之和为 0，这正是关联矩阵的特征；若 x 是流量向量，则 \\((Ax)_i\\) 是节点 i 的净流出量，平衡方程 \\(Ax=b\\)。",
    "1. Every column has exactly one +1 (tail) and one -1 (head).\n2. Column 1: +1 in row 1, -1 in row 2, so arc 1 is \\(1\\to2\\); column 2 is \\(1\\to3\\); column 3 is \\(1\\to4\\).\n3. Column 4: -1 in row 1, +1 in row 2, so arc 4 is \\(2\\to1\\); column 5: +1 in row 3, -1 in row 2, so arc 5 is \\(3\\to2\\).\n4. Column 6: +1 in row 3, -1 in row 5, so arc 6 is \\(3\\to5\\); column 7: +1 in row 4, -1 in row 3, so arc 7 is \\(4\\to3\\).\n5. Every column sums to 0, the signature of an incidence matrix. For a flow vector x, \\((Ax)_i\\) is the net outflow of node i and the balance equations read \\(Ax=b\\)."
   ],
   "answer": [
    "弧：1→2, 1→3, 1→4, 2→1, 3→2, 3→5, 4→3；每列和为 0。",
    "Arcs: 1→2, 1→3, 1→4, 2→1, 3→2, 3→5, 4→3; each column sums to zero."
   ],
   "pages": [
    10,
    11
   ],
   "concepts": [
    "concept-incidence",
    "concept-flow-balance"
   ],
   "source": "ETF2480_ETF5248_Lecture_6.pdf",
   "tags": [
    "incidence matrix",
    "network",
    "arcs"
   ]
  },
  {
   "id": "ex-etf5248-l6-powerco-transportation",
   "course": "ETF5248",
   "topic": "e5248-6",
   "topicName": [
    "网络流问题",
    "Network flow problems"
   ],
   "title": [
    "Powerco 运输问题建模",
    "Powerco transportation problem formulation"
   ],
   "problem": [
    "Powerco 有三座发电厂供应四个城市。供电能力（百万 kWh）：电厂1 35、电厂2 50、电厂3 40。高峰（下午2点）需求：城市1 45、城市2 20、城市3 30、城市4 30（百万 kWh）。每百万 kWh 从电厂到城市的运输成本（美元）：\n电厂1：8, 6, 10, 9；电厂2：9, 12, 13, 7；电厂3：14, 9, 16, 5（依次对应城市1–4）。\n建立线性规划，使满足所有城市高峰需求的总成本最小，并判断问题是否平衡。",
    "Powerco has three power plants supplying four cities. Supplies (million kWh): plant 1 35, plant 2 50, plant 3 40. Peak demands at 2 pm (million kWh): city 1 45, city 2 20, city 3 30, city 4 30. Cost (dollars) per million kWh from plant to city 1-4: plant 1: 8, 6, 10, 9; plant 2: 9, 12, 13, 7; plant 3: 14, 9, 16, 5. Formulate an LP minimising the cost of meeting every city's peak demand, and decide whether the problem is balanced."
   ],
   "solution": [
    "1. 决策变量：\\(x_{ij}\\) 为从电厂 i 运往城市 j 的电量（百万 kWh），\\(i=1,2,3\\)，\\(j=1,\\dots,4\\)。\n2. 目标：\\(\\min \\sum_{i=1}^3\\sum_{j=1}^4 c_{ij}x_{ij}\\)，即 \\(8x_{11}+6x_{12}+10x_{13}+9x_{14}+9x_{21}+12x_{22}+13x_{23}+7x_{24}+14x_{31}+9x_{32}+16x_{33}+5x_{34}\\)。\n3. 供给约束：\\(\\sum_j x_{ij}=s_i\\)，即 35、50、40。\n4. 需求约束：\\(\\sum_i x_{ij}=d_j\\)，即 45、20、30、30。\n5. 非负：\\(x_{ij}\\ge0\\)。\n6. 平衡检验：总供给 \\(35+50+40=125\\)，总需求 \\(45+20+30+30=125\\)，两者相等，所以按定义是平衡的运输问题（若供给大于需求，加零成本的虚拟需求节点；若供给小于需求，则不可行，可加带惩罚的虚拟供给节点）。slides 中的 live coding 把它称为“unbalanced”，但数据本身是平衡的；slides 没有给出数值最优解。",
    "1. Variables: \\(x_{ij}\\) = million kWh sent from plant i to city j, \\(i=1,2,3\\), \\(j=1,\\dots,4\\).\n2. Objective: \\(\\min \\sum_{i=1}^3\\sum_{j=1}^4 c_{ij}x_{ij}\\), i.e. \\(8x_{11}+6x_{12}+10x_{13}+9x_{14}+9x_{21}+12x_{22}+13x_{23}+7x_{24}+14x_{31}+9x_{32}+16x_{33}+5x_{34}\\).\n3. Supply constraints: \\(\\sum_j x_{ij}=s_i\\) with values 35, 50, 40.\n4. Demand constraints: \\(\\sum_i x_{ij}=d_j\\) with values 45, 20, 30, 30.\n5. Non-negativity: \\(x_{ij}\\ge0\\).\n6. Balance check: total supply \\(35+50+40=125\\) equals total demand \\(45+20+30+30=125\\), so the data are balanced (if supply exceeded demand add a zero-cost dummy demand node; if supply fell short the problem is infeasible unless a dummy supply node with a penalty is added). The slides' live-coding slide calls it unbalanced, yet the numbers are balanced, and the slides give no numerical optimum."
   ],
   "answer": [
    "模型：最小化 \\(\\sum c_{ij}x_{ij}\\)，3 个供给等式、4 个需求等式、\\(x\\ge0\\)；总供给=总需求=125，为平衡问题。",
    "Model: minimise \\(\\sum c_{ij}x_{ij}\\) with 3 supply equalities, 4 demand equalities and \\(x\\ge0\\); total supply = total demand = 125, so it is balanced."
   ],
   "pages": [
    28,
    29,
    30,
    31
   ],
   "concepts": [
    "case-powerco",
    "concept-transport",
    "concept-dummy"
   ],
   "source": "ETF2480_ETF5248_Lecture_6.pdf",
   "tags": [
    "transportation",
    "Hitchcock",
    "balanced",
    "formulation"
   ]
  },
  {
   "id": "ex-etf5248-l6-machineco-assignment",
   "course": "ETF5248",
   "topic": "e5248-6",
   "topicName": [
    "网络流问题",
    "Network flow problems"
   ],
   "title": [
    "Machineco 指派问题建模",
    "Machineco assignment problem formulation"
   ],
   "problem": [
    "Machineco 有四台机器和四项工作，每台机器必须恰好完成一项工作。机器 i 为工作 j 做准备所需的 setup 时间（小时）：\n机器1：14, 5, 8, 7；机器2：2, 12, 6, 5；机器3：7, 8, 3, 9；机器4：2, 4, 6, 10（依次对应工作1–4）。目标：使总 setup 时间最小。请建立模型，并说明为何可以用 LP 松弛求解。",
    "Machineco has four machines and four jobs, and each machine is assigned exactly one job. Setup time (hours) of machine i for job j: machine 1: 14, 5, 8, 7; machine 2: 2, 12, 6, 5; machine 3: 7, 8, 3, 9; machine 4: 2, 4, 6, 10 (jobs 1-4). Minimise total setup time. Formulate the model and explain why the LP relaxation can be used."
   ],
   "solution": [
    "1. 变量：\\(x_{ij}=1\\) 若机器 i 被分配到工作 j，否则 0。\n2. 目标：\\(\\min\\sum_{i=1}^4\\sum_{j=1}^4 c_{ij}x_{ij}\\)，\\(c_{ij}\\) 取上表数据。\n3. 约束：每台机器一项工作 \\(\\sum_j x_{ij}=1\\)（\\(i=1..4\\)）；每项工作一台机器 \\(\\sum_i x_{ij}=1\\)（\\(j=1..4\\)）；\\(x_{ij}\\in\\{0,1\\}\\)。\n4. 这是运输问题的特例：供给节点数等于需求节点数，每个供给为 1，每个需求为 1，矩阵形式为 \\(Ax=b\\)，A 是 \\(2m\\times m^2\\) 的节点-弧关联矩阵。\n5. 因为 A 是 totally unimodular，且 b、l=0、u=1 都是整数向量，所以可把 \\(x\\in\\{0,1\\}\\) 放松成 \\(0\\le x\\le 1\\)，单纯形法得到的极点最优解自动是整数。\n6. slides 在此处只给出建模，没有给出数值最优指派。",
    "1. Variables: \\(x_{ij}=1\\) if machine i is assigned to job j, else 0.\n2. Objective: \\(\\min\\sum_{i=1}^4\\sum_{j=1}^4 c_{ij}x_{ij}\\) with the table as \\(c_{ij}\\).\n3. Constraints: each machine gets one job \\(\\sum_j x_{ij}=1\\) for \\(i=1..4\\); each job gets one machine \\(\\sum_i x_{ij}=1\\) for \\(j=1..4\\); \\(x_{ij}\\in\\{0,1\\}\\).\n4. This is a special transportation problem: equal numbers of supply and demand nodes, unit supplies and unit demands, written \\(Ax=b\\) with A the \\(2m\\times m^2\\) node-arc incidence matrix.\n5. Since A is totally unimodular and b, l=0, u=1 are integer, relax \\(x\\in\\{0,1\\}\\) to \\(0\\le x\\le1\\); an extreme-point optimum is automatically integer.\n6. The slides only formulate the model here and give no numerical optimal assignment."
   ],
   "answer": [
    "模型：最小化总 setup 时间，行列各和为 1；因 TU 性质，LP 松弛的极点最优解即为 0-1 指派（slides 未给数值解）。",
    "Model: minimise total setup time with every row and column summing to 1; by total unimodularity the LP relaxation has 0-1 extreme optima (numerical solution not given in the slides)."
   ],
   "pages": [
    33,
    34,
    35,
    36
   ],
   "concepts": [
    "case-machineco",
    "concept-assignment",
    "concept-integrality"
   ],
   "source": "ETF2480_ETF5248_Lecture_6.pdf",
   "tags": [
    "assignment",
    "total unimodularity",
    "LP relaxation"
   ]
  },
  {
   "id": "ex-etf5248-l6-shortest-path-1-7",
   "course": "ETF5248",
   "topic": "e5248-6",
   "topicName": [
    "网络流问题",
    "Network flow problems"
   ],
   "title": [
    "最短路径问题的 LP 建模（节点1到节点7）",
    "Shortest path LP formulation (node 1 to node 7)"
   ],
   "problem": [
    "在一个有 7 个节点、12 条弧的有向网络中，每条弧有长度 \\(c_j\\)，求从节点 1 到节点 7 的最短路径。节点-弧关联矩阵 A 已给出（7 行 12 列）。请把它写成数学规划，并说明为什么 LP 松弛的最优解是 0-1 的。",
    "In a directed network with 7 nodes and 12 arcs, each arc j has length \\(c_j\\). Find a shortest path from node 1 to node 7, given the 7 x 12 node-arc incidence matrix A. Write it as a mathematical program and explain why the LP relaxation returns 0-1 flows."
   ],
   "solution": [
    "1. 把一条从节点 1 到节点 m（这里 m=7）的路径看作 1 单位的流：\\(x_j=1\\) 表示路径用了弧 j。\n2. 平衡约束：\\(Ax=(1,0,\\dots,0,-1)^T\\)，即节点 1 净流出 1，节点 7 净流入 1，中间节点流入等于流出。\n3. 整数模型：\\(\\min c^Tx\\) s.t. \\(Ax=(1,0,\\dots,0,-1)\\), \\(x\\in\\{0,1\\}^n\\)。\n4. LP 形式：把 \\(x\\in\\{0,1\\}^n\\) 换成 \\(0\\le x\\le1\\)。因为 A 是 TU，右端项和上下界都是整数，所以极点最优解满足 \\(x_i\\in\\{0,1\\}\\)。\n5. 弧长标在 slides 的网络图上，文字提取无法可靠还原，因此这里不给数值解。",
    "1. Treat a path from node 1 to node m (here m=7) as one unit of flow: \\(x_j=1\\) if the path uses arc j.\n2. Balance constraints: \\(Ax=(1,0,\\dots,0,-1)^T\\): net outflow 1 at node 1, net inflow 1 at node 7, conservation at intermediate nodes.\n3. Integer model: \\(\\min c^Tx\\) s.t. \\(Ax=(1,0,\\dots,0,-1)\\), \\(x\\in\\{0,1\\}^n\\).\n4. LP form: replace \\(x\\in\\{0,1\\}^n\\) by \\(0\\le x\\le1\\). A is TU and the right-hand side and bounds are integer, so optimal extreme points satisfy \\(x_i\\in\\{0,1\\}\\).\n5. The arc lengths sit in the slide's network figure, which the text extraction cannot reliably recover, so no numerical solution is given here."
   ],
   "answer": [
    "\\(\\min c^Tx\\)，\\(Ax=(1,0,\\dots,0,-1)\\)，\\(0\\le x\\le 1\\)；最优解自动为 0-1，对应一条最短路径。",
    "\\(\\min c^Tx\\), \\(Ax=(1,0,\\dots,0,-1)\\), \\(0\\le x\\le 1\\); the optimum is automatically 0-1 and encodes a shortest path."
   ],
   "pages": [
    37,
    38,
    39
   ],
   "concepts": [
    "case-shortest-network",
    "concept-shortest-path",
    "concept-integrality",
    "concept-tu"
   ],
   "source": "ETF2480_ETF5248_Lecture_6.pdf",
   "tags": [
    "shortest path",
    "network flow",
    "formulation"
   ]
  },
  {
   "id": "ex-etf5248-l6-car-replacement",
   "course": "ETF5248",
   "topic": "e5248-6",
   "topicName": [
    "网络流问题",
    "Network flow problems"
   ],
   "title": [
    "汽车更换策略（最短路径的非显然应用）",
    "Car replacement policy as a shortest path"
   ],
   "problem": [
    "现在拥有一辆新车，新车购价 10,000 美元。使用年限对应的转售价和年运营成本（美元）：\n车龄1年：转售 7,000，运营 300（第1年）；2年：6,000，500；3年：4,000，800；4年：3,000，1,200；5年：2,000，1,600；6年：1,000，2,200。\n要求决定未来六年的更换策略，使拥有并运营汽车的净成本最小。",
    "You own a new car now; buying a new one costs 10,000 dollars. Resale value and operating cost (dollars) by age: age 1: resale 7,000, operating 300 (year 1); age 2: 6,000, 500; age 3: 4,000, 800; age 4: 3,000, 1,200; age 5: 2,000, 1,600; age 6: 1,000, 2,200. Find the replacement policy that minimises the net cost of owning and operating a car over the next six years."
   ],
   "solution": [
    "1. 建立网络：节点 1,…,7 代表时间 0,…,6（年初/年末），弧 \\((i,j)\\)（\\(i<j\\)）表示在时间 i 买新车并持有到时间 j 卖掉，共 21 条弧。\n2. 弧成本 = 购车价 + 持有期间的运营成本之和 − 持有年数对应的转售价。例如持有 2 年：\\(10000+300+500-6000=4800\\)；持有 1 年：\\(10000+300-7000=3300\\)；持有 3 年：\\(10000+300+500+800-4000=7600\\)。\n3. 问题变为求节点 1 到节点 7 的最短路径，用 \\(Ax=(1,0,\\dots,0,-1)\\)、\\(0\\le x\\le1\\) 的 LP 求解。\n4. 结果：\\(p^*=14400\\)，\\(x^*\\) 在第 2、13、20 个分量取 1，其余为 0，对应三条弧，每条跨 2 年，每条成本 4800，共 \\(3\\times4800=14400\\)。\n5. 解释：在时间 2、4、6 换车（最后一次在时间 6 为期末卖出）。",
    "1. Network: nodes 1,...,7 represent times 0,...,6; arc \\((i,j)\\) with \\(i<j\\) means buying a new car at time i and selling it at time j, giving 21 arcs.\n2. Arc cost = purchase price + operating costs over the holding period - resale value for that age. E.g. hold 2 years: \\(10000+300+500-6000=4800\\); hold 1 year: \\(10000+300-7000=3300\\); hold 3 years: \\(10000+300+500+800-4000=7600\\).\n3. The task becomes a shortest path from node 1 to node 7, solved via the LP \\(Ax=(1,0,\\dots,0,-1)\\), \\(0\\le x\\le1\\).\n4. Result: \\(p^*=14400\\), with \\(x^*\\) equal to 1 in components 2, 13 and 20 and 0 elsewhere: three arcs of two years each costing 4800, so \\(3\\times4800=14400\\).\n5. Interpretation: replace the car at times 2, 4 and 6 (the last at time 6 is the end-of-horizon sale)."
   ],
   "answer": [
    "在时间 2、4、6 更换，最小净成本为 14,400 美元。",
    "Replace at times 2, 4 and 6; minimum net cost is 14,400 dollars."
   ],
   "pages": [
    40,
    41,
    42
   ],
   "concepts": [
    "case-replacement",
    "concept-shortest-path"
   ],
   "source": "ETF2480_ETF5248_Lecture_6.pdf",
   "tags": [
    "shortest path",
    "replacement",
    "dynamic",
    "network"
   ]
  },
  {
   "id": "ex-etf5248-l6-sunco-max-flow",
   "course": "ETF5248",
   "topic": "e5248-6",
   "topicName": [
    "网络流问题",
    "Network flow problems"
   ],
   "title": [
    "Sunco Oil 最大流问题",
    "Sunco Oil maximum flow problem"
   ],
   "problem": [
    "Sunco Oil 想用管道把尽可能多的石油（每小时）从节点 1 运到节点 5，途中经过部分或全部中转站 2、3、4。每条弧表示一条管径不同的管道，弧上标注其最大流量（桶/小时）。请建立 LP，求从 1 到 5 每小时最多可送多少桶。",
    "Sunco Oil wants to ship the maximum amount of oil per hour by pipeline from node 1 to node 5, passing through some or all of stations 2, 3, 4. Each arc is a pipeline whose maximum throughput (barrels per hour) is printed on it. Formulate an LP for the maximum flow from node 1 to node 5."
   ],
   "solution": [
    "1. 变量：每条弧 \\((i,j)\\) 上的流量 \\(x_{ij}\\)，容量上界 \\(u_{ij}\\) 为管道最大流量，下界为 0。\n2. 最大流写成 \\(\\max t\\) s.t. \\(Ax=tb\\)，\\(l\\le x\\le u\\)，其中 \\(b=(1,0,\\dots,0,-1)\\)（t 是总流量）。\n3. 化为最小费用网络流：所有原弧费用为 0，新增一条返回弧 \\((5,1)\\)，费用 \\(c_{51}=-1\\)，容量 \\(u_{51}=+\\infty\\)，目标 \\(\\min -x_{51}\\)（即 \\(-t\\)），约束为各节点流量平衡 \\(\\sum_{\\text{out}}x-\\sum_{\\text{in}}x=0\\) 和 \\(0\\le x_{ij}\\le u_{ij}\\)。\n4. 增广后的矩阵 \\([A\\ -b]\\) 仍是节点-弧关联矩阵，所以是 TU，整数容量下最优流为整数。\n5. 图中各弧容量的数字在文本提取中顺序混乱，无法可靠还原，slides 也没有给出最大流数值，所以这里只给出建模。",
    "1. Variables: flow \\(x_{ij}\\) on each pipeline arc \\((i,j)\\), with lower bound 0 and upper bound \\(u_{ij}\\) equal to its capacity.\n2. Max flow: \\(\\max t\\) s.t. \\(Ax=tb\\), \\(l\\le x\\le u\\), where \\(b=(1,0,\\dots,0,-1)\\) and t is the total flow.\n3. As a min cost network flow: give every original arc cost 0, add a return arc \\((5,1)\\) with cost \\(c_{51}=-1\\) and capacity \\(u_{51}=+\\infty\\), and minimise \\(-x_{51}\\) (that is \\(-t\\)) subject to flow balance at every node and \\(0\\le x_{ij}\\le u_{ij}\\).\n4. The augmented matrix \\([A\\ -b]\\) is still a node-arc incidence matrix, hence TU, so integer capacities give an integer optimal flow.\n5. The capacity numbers in the figure come out scrambled in the text extraction and the slides give no max-flow value, so only the formulation is given."
   ],
   "answer": [
    "模型：增加返回弧 \\((5,1)\\)（成本 -1，无容量上限），最小化 \\(-x_{51}\\)，其余弧费用为 0 且受容量限制；数值结果 slides 未给出。",
    "Model: add return arc \\((5,1)\\) with cost -1 and infinite capacity, minimise \\(-x_{51}\\) with capacity-bounded zero-cost arcs elsewhere; no numerical value given in the slides."
   ],
   "pages": [
    43,
    44,
    45,
    46
   ],
   "concepts": [
    "case-pipeline",
    "concept-maxflow",
    "concept-flow-balance"
   ],
   "source": "ETF2480_ETF5248_Lecture_6.pdf",
   "tags": [
    "maximum flow",
    "MCNFP",
    "formulation"
   ]
  },
  {
   "id": "ex-etf5248-l7-two-var-ip-rounding",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "两变量整数规划：LP 松弛、取整与截断",
    "Two-variable IP: LP relaxation, rounding and truncation"
   ],
   "problem": [
    "考虑整数规划 \\(\\max 3x_1+4x_2\\)，约束 \\(5x_1+8x_2\\le 24\\)，\\(x_1,x_2\\ge 0\\) 且 \\(x_1,x_2\\in\\mathbb{Z}\\)。求整数最优解；求 LP 松弛解；判断能否通过对 LP 解取整或截断来解 IP。",
    "Consider the integer program maximize \\(3x_1+4x_2\\) subject to \\(5x_1+8x_2\\le 24\\), \\(x_1,x_2\\ge 0\\), \\(x_1,x_2\\in\\mathbb{Z}\\). Find the integer optimum and the LP relaxation optimum, and decide whether rounding or truncating the LP solution solves the IP."
   ],
   "solution": [
    "1. 去掉整数约束解 LP：最优解为 \\(x^\\star_{lp}=(4.8,0)\\)，目标值 \\(3\\cdot4.8=14.4\\)。2. 四舍五入得 \\(x_r=(5,0)\\)：\\(5\\cdot5=25>24\\)，不可行。3. 截断得 \\(x_t=(4,0)\\)：可行，目标值 12。4. 真正的整数最优解为 \\(x^\\star_{ip}=(3,1)\\)：约束 \\(15+8=23\\le 24\\)，目标值 \\(9+4=13\\)，比截断解好。5. 结论：取整和截断都不可靠（前者可能不可行，后者可能次优），需要专门的整数规划算法。LP 值 14.4 同时是 IP 最优值 13 的上界。",
    "1. Solve the LP ignoring integrality: \\(x^\\star_{lp}=(4.8,0)\\) with value \\(3\\cdot4.8=14.4\\). 2. Rounding gives \\(x_r=(5,0)\\): \\(5\\cdot5=25>24\\), infeasible. 3. Truncating gives \\(x_t=(4,0)\\): feasible, objective 12. 4. The true integer optimum is \\(x^\\star_{ip}=(3,1)\\): \\(15+8=23\\le24\\), objective \\(9+4=13\\), better than the truncated point. 5. Hence neither rounding nor truncating is reliable (one can be infeasible, the other suboptimal); a dedicated IP method is needed. Note the LP value 14.4 is an upper bound on the IP optimum 13."
   ],
   "answer": [
    "LP 解 (4.8,0)，值 14.4；整数最优解 (3,1)，值 13；取整不可行，截断只得 12。",
    "LP optimum (4.8,0) with value 14.4; integer optimum (3,1) with value 13; rounding is infeasible and truncation gives only 12."
   ],
   "pages": [
    5,
    6
   ],
   "concepts": [
    "concept-relaxation",
    "concept-integer"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "integer programming",
    "LP relaxation",
    "rounding"
   ]
  },
  {
   "id": "ex-etf5248-l7-work-scheduling",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "邮局排班（连续工作五天）",
    "Post office work scheduling (five consecutive days)"
   ],
   "problem": [
    "邮局每周每天所需全职员工数为：周一至周日 17, 13, 15, 19, 14, 16, 11。工会规定每位员工连续工作五天后休息两天。只用全职员工，建立使雇用人数最少的模型，并比较 LP 解、取整解、截断解与整数解。",
    "A post office needs 17, 13, 15, 19, 14, 16, 11 full-time employees on Mon to Sun. Each employee works five consecutive days then has two days off. Formulate a model minimising the number of employees hired, and compare the LP, rounded, truncated and integer solutions."
   ],
   "solution": [
    "1. 设 \\(x_i\\) 为第 \\(i\\) 天开始上班的人数（\\(i=1,\\dots,7\\) 对应周一至周日）。2. 目标：\\(\\min\\sum_{i=1}^7 x_i\\)。3. 某天在岗的人是前五天内（含当天）开始上班的人，所以周一约束为 \\(x_1+x_4+x_5+x_6+x_7\\ge17\\)，周二为 \\(x_1+x_2+x_5+x_6+x_7\\ge13\\)，依此类推，周日为 \\(x_3+x_4+x_5+x_6+x_7\\ge11\\)，且 \\(x_i\\ge0\\)。4. LP 解 \\(x_{lp}=(1\\tfrac13,3\\tfrac13,2,7\\tfrac13,0,3\\tfrac13,5)\\)，目标 \\(22\\tfrac13\\)。5. 取整 \\(x_r=(2,4,2,8,0,4,5)\\)，目标 25。6. 截断 \\(x_t=(1,3,2,7,0,3,5)\\) 不可行。7. 整数最优 \\(x_{ip}=(4,4,2,6,0,4,3)\\)，目标 23。",
    "1. Let \\(x_i\\) be the number starting work on day \\(i\\) (\\(i=1,\\dots,7\\) for Mon to Sun). 2. Objective: \\(\\min\\sum_{i=1}^7 x_i\\). 3. Staff on duty on a day are those who started within the previous five days including that day, so Monday reads \\(x_1+x_4+x_5+x_6+x_7\\ge17\\), Tuesday \\(x_1+x_2+x_5+x_6+x_7\\ge13\\), and so on until Sunday \\(x_3+x_4+x_5+x_6+x_7\\ge11\\), with \\(x_i\\ge0\\). 4. LP solution \\(x_{lp}=(1\\tfrac13,3\\tfrac13,2,7\\tfrac13,0,3\\tfrac13,5)\\), value \\(22\\tfrac13\\). 5. Rounded \\(x_r=(2,4,2,8,0,4,5)\\), value 25. 6. Truncated \\(x_t=(1,3,2,7,0,3,5)\\) is infeasible. 7. Integer optimum \\(x_{ip}=(4,4,2,6,0,4,3)\\), value 23."
   ],
   "answer": [
    "最少雇用 23 人，\\(x=(4,4,2,6,0,4,3)\\)；LP 值 22⅓，取整 25，截断不可行。",
    "Hire 23 employees with \\(x=(4,4,2,6,0,4,3)\\); LP value is 22 1/3, rounding gives 25, truncation is infeasible."
   ],
   "pages": [
    7,
    8
   ],
   "concepts": [
    "concept-relaxation",
    "concept-integer",
    "case-schedule"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "formulation",
    "scheduling",
    "LP relaxation"
   ]
  },
  {
   "id": "ex-etf5248-l7-stockco-investment",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "Stockco 投资选择（0-1 背包）",
    "Stockco investment selection (0-1 knapsack)"
   ],
   "problem": [
    "Stockco 考虑 6 项投资，所需现金（千元）依次为 5, 7, 4, 3, 4, 6，带来的 NPV（千元）依次为 16, 22, 12, 8, 11, 19。目前可用资金为 14,000 元。最优策略是什么？",
    "Stockco considers 6 investments needing cash (in thousands) 5, 7, 4, 3, 4, 6 and adding NPV (in thousands) 16, 22, 12, 8, 11, 19. It has 14,000 dollars available now. What is the optimal strategy?"
   ],
   "solution": [
    "1. 这是 binary choice（背包）结构：设 \\(x_j=1\\) 表示选择投资 \\(j\\)，否则为 0。2. 目标：\\(\\max 16x_1+22x_2+12x_3+8x_4+11x_5+19x_6\\)。3. 资金约束：\\(5x_1+7x_2+4x_3+3x_4+4x_5+6x_6\\le14\\)。4. \\(x_j\\in\\{0,1\\}\\)，\\(j=1,\\dots,6\\)。5. 幻灯片只给出题目和背包模型的一般形式，没有给出最优选择的数值答案，所以这里只给出模型，求解需用 IP 求解器或枚举。",
    "1. This is the binary-choice (knapsack) pattern: let \\(x_j=1\\) if investment \\(j\\) is taken, else 0. 2. Objective: \\(\\max 16x_1+22x_2+12x_3+8x_4+11x_5+19x_6\\). 3. Budget: \\(5x_1+7x_2+4x_3+3x_4+4x_5+6x_6\\le14\\). 4. \\(x_j\\in\\{0,1\\}\\), \\(j=1,\\dots,6\\). 5. The slides pose the question and the general knapsack model but do not state the optimal selection, so only the formulation is given here; solving needs an IP solver or enumeration."
   ],
   "answer": [
    "模型：最大化 NPV，满足资金 \\(\\le14\\) 的 0-1 约束；幻灯片未给出最优投资组合。",
    "Model: maximise NPV subject to the 0-1 budget constraint with limit 14; the slides leave the optimal portfolio open."
   ],
   "pages": [
    11,
    12
   ],
   "concepts": [
    "case-stockco",
    "concept-knapsack",
    "concept-implication-binary"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "binary choice",
    "knapsack",
    "formulation"
   ]
  },
  {
   "id": "ex-etf5248-l7-facility-location",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "设施选址模型（强制约束）",
    "Facility location with forcing constraints"
   ],
   "problem": [
    "有 \\(n\\) 个候选设施地点和 \\(m\\) 个客户。在地点 \\(j\\) 开设设施的固定成本为 \\(c_j\\)，由设施 \\(j\\) 服务客户 \\(i\\) 的成本为 \\(d_{ij}\\)。要选择若干地点并把每个客户分配到一个设施，使总成本最小。建立 0-1 模型。",
    "There are \\(n\\) candidate facility locations and \\(m\\) clients. Opening location \\(j\\) costs \\(c_j\\) and serving client \\(i\\) from \\(j\\) costs \\(d_{ij}\\). Choose locations and assign each client to one facility to minimise total cost. Formulate a 0-1 model."
   ],
   "solution": [
    "1. 设 \\(y_j=1\\) 表示在地点 \\(j\\) 开设设施，\\(x_{ij}=1\\) 表示客户 \\(i\\) 由设施 \\(j\\) 服务。2. 目标：\\(\\min\\sum_j c_jy_j+\\sum_i\\sum_j d_{ij}x_{ij}\\)。3. 每个客户恰好由一个设施服务：\\(\\sum_{j}x_{ij}=1\\)，对所有 \\(i\\)。4. 强制约束 \\(x_{ij}\\le y_j\\)：若 \\(y_j=0\\)（不建设施），则必须 \\(x_{ij}=0\\)，客户不能在那里被服务。5. 所有变量取 \\(\\{0,1\\}\\)。这里 \\(x\\le y\\) 就是“决定 A 只有在决定 B 已做出时才能做”的建模方式。",
    "1. Let \\(y_j=1\\) if a facility is opened at \\(j\\) and \\(x_{ij}=1\\) if client \\(i\\) is served by \\(j\\). 2. Objective: \\(\\min\\sum_j c_jy_j+\\sum_i\\sum_j d_{ij}x_{ij}\\). 3. Each client is served by exactly one facility: \\(\\sum_{j}x_{ij}=1\\) for all \\(i\\). 4. Forcing constraint \\(x_{ij}\\le y_j\\): if \\(y_j=0\\) (no facility) then \\(x_{ij}=0\\), so nobody can be served there. 5. All variables are binary. The constraint \\(x\\le y\\) is the standard way to say decision A is allowed only if decision B is made."
   ],
   "answer": [
    "最小化 \\(\\sum c_jy_j+\\sum d_{ij}x_{ij}\\)，约束 \\(\\sum_jx_{ij}=1\\)、\\(x_{ij}\\le y_j\\)、变量为 0-1。",
    "Minimise \\(\\sum c_jy_j+\\sum d_{ij}x_{ij}\\) subject to \\(\\sum_jx_{ij}=1\\), \\(x_{ij}\\le y_j\\), binary variables."
   ],
   "pages": [
    13,
    14
   ],
   "concepts": [
    "case-facility",
    "concept-implication-binary",
    "concept-integer"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "forcing constraints",
    "facility location",
    "binary"
   ]
  },
  {
   "id": "ex-etf5248-l7-restricted-range",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "限制变量取值范围",
    "Restricting a variable to a discrete set of values"
   ],
   "problem": [
    "变量 \\(x\\) 只能取值 0.0, 0.5, 1.0, 1.5, 2.0 之一。如何用二元变量写成线性约束？",
    "A variable \\(x\\) may only take the values 0.0, 0.5, 1.0, 1.5 or 2.0. How can this be written with binary variables and linear constraints?"
   ],
   "solution": [
    "1. 为每个允许值引入一个二元变量 \\(y_1,\\dots,y_5\\)，\\(y_j=1\\) 表示选中第 \\(j\\) 个值。2. 让 \\(x\\) 等于被选中值：\\(x=0.0y_1+0.5y_2+1.0y_3+1.5y_4+2.0y_5\\)。3. 恰好选一个值：\\(y_1+y_2+y_3+y_4+y_5=1\\)。4. \\(y_j\\in\\{0,1\\}\\)。一般地，若 \\(x\\in\\{a_1,\\dots,a_m\\}\\)，用 \\(x=\\sum a_jy_j\\)，\\(\\sum y_j=1\\)。",
    "1. Introduce one binary variable per allowed value, \\(y_1,\\dots,y_5\\), with \\(y_j=1\\) meaning value \\(j\\) is chosen. 2. Tie \\(x\\) to the chosen value: \\(x=0.0y_1+0.5y_2+1.0y_3+1.5y_4+2.0y_5\\). 3. Choose exactly one: \\(y_1+\\dots+y_5=1\\). 4. \\(y_j\\in\\{0,1\\}\\). In general, for \\(x\\in\\{a_1,\\dots,a_m\\}\\) use \\(x=\\sum a_jy_j\\), \\(\\sum y_j=1\\)."
   ],
   "answer": [
    "\\(x=0.0y_1+0.5y_2+1.0y_3+1.5y_4+2.0y_5\\)，\\(\\sum y_j=1\\)，\\(y_j\\in\\{0,1\\}\\)。",
    "\\(x=0.0y_1+0.5y_2+1.0y_3+1.5y_4+2.0y_5\\), \\(\\sum y_j=1\\), \\(y_j\\in\\{0,1\\}\\)."
   ],
   "pages": [
    16
   ],
   "concepts": [
    "concept-cardinality",
    "concept-integer"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "restricted range",
    "binary",
    "modelling"
   ]
  },
  {
   "id": "ex-etf5248-l7-dorian-auto",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "Dorian Auto 生产（either-or 约束）",
    "Dorian Auto production (either-or constraints)"
   ],
   "problem": [
    "Dorian Auto 考虑生产紧凑型、中型和大型车。每辆车需钢材 1.5, 3, 5 吨，工时 30, 25, 40 小时，利润 2,000, 3,000, 4,000 元。现有钢材 6,000 吨，工时 60,000 小时。某类车要在经济上可行，至少要生产 1,000 辆。建立使利润最大的整数规划。",
    "Dorian Auto may make compact, midsize and large cars needing 1.5, 3, 5 tons of steel and 30, 25, 40 labour hours, with profits of 2,000, 3,000, 4,000 dollars each. 6,000 tons of steel and 60,000 labour hours are available. Producing a type is economically feasible only if at least 1,000 of it are made. Formulate an IP maximising profit."
   ],
   "solution": [
    "1. 设 \\(x_i\\) 为三种车的产量（整数）。2. 目标：\\(\\max 2000x_1+3000x_2+4000x_3\\)。3. 资源约束：钢材 \\(1.5x_1+3x_2+5x_3\\le6000\\)，工时 \\(30x_1+25x_2+40x_3\\le60000\\)。4. 可行性条件对紧凑型是 \\(x_1\\le0\\) 或 \\(x_1\\ge1000\\)。令 \\(f(x)=x_1\\)，\\(g(x)=1000-x_1\\)，引入二元 \\(y_1\\) 和足够大的 \\(M_1\\)：\\(x_1\\le M_1y_1\\)，\\(1000-x_1\\le M_1(1-y_1)\\)，\\(y_1\\in\\{0,1\\}\\)。5. 中型、大型同理各加一个二元变量和大 M 约束。幻灯片只写出紧凑型的约束，其余两类按同样模式类推。",
    "1. Let \\(x_i\\) be the (integer) production of each type. 2. Objective: \\(\\max 2000x_1+3000x_2+4000x_3\\). 3. Resources: steel \\(1.5x_1+3x_2+5x_3\\le6000\\), labour \\(30x_1+25x_2+40x_3\\le60000\\). 4. For compacts the feasibility rule is \\(x_1\\le0\\) or \\(x_1\\ge1000\\). With \\(f(x)=x_1\\), \\(g(x)=1000-x_1\\), a binary \\(y_1\\) and a large \\(M_1\\): \\(x_1\\le M_1y_1\\), \\(1000-x_1\\le M_1(1-y_1)\\), \\(y_1\\in\\{0,1\\}\\). 5. Midsize and large cars get the same pair of constraints with their own binary and big-M. The slides write out only the compact case; the others follow by analogy."
   ],
   "answer": [
    "目标 \\(\\max 2000x_1+3000x_2+4000x_3\\)，两条资源约束，加每种车的 either-or（大 M）约束。",
    "Maximise \\(2000x_1+3000x_2+4000x_3\\) subject to the two resource limits plus an either-or big-M pair for each car type."
   ],
   "pages": [
    20
   ],
   "concepts": [
    "case-dorian",
    "concept-bigm",
    "concept-ifthen"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "disjunctive",
    "big-M",
    "formulation"
   ]
  },
  {
   "id": "ex-etf5248-l7-kilroy-fire-stations",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "Kilroy County 消防站选址（集合覆盖）",
    "Kilroy County fire stations (set covering)"
   ],
   "problem": [
    "Kilroy County 有 6 个城市，需要建尽量少的消防站，使每个城市 15 分钟车程内至少有一个消防站。城市间车程（分钟）：City1 到 1..6 为 0,10,20,30,30,20；City2 为 10,0,25,35,20,10；City3 为 20,25,0,15,30,20；City4 为 30,35,15,0,15,25；City5 为 30,20,30,15,0,14；City6 为 20,10,20,25,14,0。建立 IP，并说明建几个、建在哪里。",
    "Kilroy County has six cities and wants the fewest fire stations so that every city has a station within 15 minutes of driving. Drive times (minutes), rows City 1 to 6 against columns City 1 to 6: 0,10,20,30,30,20 / 10,0,25,35,20,10 / 20,25,0,15,30,20 / 30,35,15,0,15,25 / 30,20,30,15,0,14 / 20,10,20,25,14,0. Formulate an IP and say how many stations to build and where."
   ],
   "solution": [
    "1. 设 \\(x_i=1\\) 表示在城市 \\(i\\) 建站。目标：\\(\\min\\sum_{i=1}^6x_i\\)。2. 找出每个城市 15 分钟内可到达的站点：City 1 为 {1,2}，City 2 为 {1,2,6}，City 3 为 {3,4}，City 4 为 {3,4,5}，City 5 为 {4,5,6}，City 6 为 {2,5,6}。3. 每个城市写一条覆盖约束：\\(x_1+x_2\\ge1\\)，\\(x_1+x_2+x_6\\ge1\\)，\\(x_3+x_4\\ge1\\)，\\(x_3+x_4+x_5\\ge1\\)，\\(x_4+x_5+x_6\\ge1\\)，\\(x_2+x_5+x_6\\ge1\\)，\\(x_i\\in\\{0,1\\}\\)。4. 最优解 \\(x^\\star=(0,1,0,1,0,0)\\)，\\(p^\\star=2\\)：城市 2 的站覆盖 1,2,6，城市 4 的站覆盖 3,4,5。",
    "1. Let \\(x_i=1\\) if a station is built in city \\(i\\); objective \\(\\min\\sum_{i=1}^6x_i\\). 2. From the table list which sites are within 15 minutes of each city: City 1 {1,2}, City 2 {1,2,6}, City 3 {3,4}, City 4 {3,4,5}, City 5 {4,5,6}, City 6 {2,5,6}. 3. One covering constraint per city: \\(x_1+x_2\\ge1\\), \\(x_1+x_2+x_6\\ge1\\), \\(x_3+x_4\\ge1\\), \\(x_3+x_4+x_5\\ge1\\), \\(x_4+x_5+x_6\\ge1\\), \\(x_2+x_5+x_6\\ge1\\), with \\(x_i\\in\\{0,1\\}\\). 4. Optimum \\(x^\\star=(0,1,0,1,0,0)\\), \\(p^\\star=2\\): the City 2 station covers 1, 2, 6 and the City 4 station covers 3, 4, 5."
   ],
   "answer": [
    "建 2 个消防站，分别在城市 2 和城市 4，\\(p^\\star=2\\)。",
    "Build two stations, in City 2 and City 4; \\(p^\\star=2\\)."
   ],
   "pages": [
    22,
    23,
    24
   ],
   "concepts": [
    "case-kilroy",
    "concept-set-cover"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "set covering",
    "binary",
    "formulation"
   ]
  },
  {
   "id": "ex-etf5248-l7-kilroy-equity-tradeoff",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "消防站选址的公平性权衡（多目标加权）",
    "Fire stations with equity: weighted multi-objective trade-off"
   ],
   "problem": [
    "在 Kilroy 问题上增加公平影响分数 EIS：城市 1 到 6 分别为 8, 2, 4, 3, 9, 7（越高越需要投资）。要在保证所有城市 15 分钟覆盖的前提下，平衡建站数量与公平影响。用线性加权把两个目标合并，并比较 \\((w_1,w_2)=(1,0)\\) 与 \\((10,1)\\) 两个方案。",
    "Add Equity Impact Scores to the Kilroy problem: Cities 1 to 6 score 8, 2, 4, 3, 9, 7 (higher means the community benefits more from investment). Keep 15-minute coverage for all cities while balancing the number of stations against equity. Combine the objectives linearly and compare weights \\((w_1,w_2)=(1,0)\\) and \\((10,1)\\)."
   ],
   "solution": [
    "1. 两个目标：效率 \\(f_1=\\sum x_i\\)（越小越好），公平 \\(f_2=\\sum E_ix_i\\)（越大越好）。2. 合并为单目标：\\(\\min Z=w_1\\sum_i x_i-w_2\\sum_iE_ix_i\\)，即 \\(w_1(x_1+\\dots+x_6)-w_2(8x_1+2x_2+4x_3+3x_4+9x_5+7x_6)\\)，覆盖约束不变。3. 方案 A（\\(w_1=1,w_2=0\\)）：\\(x^\\star=(0,1,0,1,0,0)\\)，2 个站，公平总分 \\(2+3=5\\)。4. 方案 B（\\(w_1=10,w_2=1\\)）：\\(x^\\star=(1,0,1,0,1,0)\\)，3 个站（城市 1、3、5），公平总分 \\(8+4+9=21\\)。5. 多建一个站，公平影响从 5 升到 21，仍满足响应时间约束。改变权重可沿 Pareto frontier 探索。选哪个方案属于讨论题，幻灯片没有给出标准答案。",
    "1. Two objectives: efficiency \\(f_1=\\sum x_i\\) (minimise) and equity \\(f_2=\\sum E_ix_i\\) (maximise). 2. Merge: \\(\\min Z=w_1\\sum_i x_i-w_2\\sum_iE_ix_i\\), i.e. \\(w_1(x_1+\\dots+x_6)-w_2(8x_1+2x_2+4x_3+3x_4+9x_5+7x_6)\\), with the same coverage constraints. 3. Scenario A (\\(w_1=1,w_2=0\\)): \\(x^\\star=(0,1,0,1,0,0)\\), 2 stations, equity \\(2+3=5\\). 4. Scenario B (\\(w_1=10,w_2=1\\)): \\(x^\\star=(1,0,1,0,1,0)\\), 3 stations (Cities 1, 3, 5), equity \\(8+4+9=21\\). 5. One extra station raises equity from 5 to 21 while still meeting coverage. Varying the weights traces the Pareto frontier. Which plan to choose is a discussion question; the slides give no single answer."
   ],
   "answer": [
    "A：2 站、公平分 5；B：3 站、公平分 21。多建 1 站使公平影响翻四倍多；最终取舍由政策权重决定。",
    "A: 2 stations, equity 5; B: 3 stations, equity 21. One more station more than quadruples equity; the final choice depends on policy weights."
   ],
   "pages": [
    26,
    27,
    28
   ],
   "concepts": [
    "case-kilroy",
    "concept-multiobjective",
    "concept-set-cover"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "multi-objective",
    "weights",
    "Pareto",
    "set covering"
   ]
  },
  {
   "id": "ex-etf5248-l7-branch-and-bound",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "分支定界法完整例子",
    "Branch-and-bound worked example"
   ],
   "problem": [
    "用分支定界法求解：\\(\\max 8x_1+5x_2\\)，约束 \\(x_1+x_2\\le6\\)，\\(9x_1+5x_2\\le45\\)，\\(x_1,x_2\\ge0\\) 且为整数。按 backtracking 顺序给出各子问题及最终最优解。",
    "Solve by branch-and-bound: \\(\\max 8x_1+5x_2\\) subject to \\(x_1+x_2\\le6\\), \\(9x_1+5x_2\\le45\\), \\(x_1,x_2\\ge0\\) integer. Show the subproblems in backtracking order and the final optimum."
   ],
   "solution": [
    "1. 根节点 \\(P_0\\)（LP 松弛）：\\(x=(3.75,2.25)\\)，值 41.25，上界 41.25，下界 \\(-\\infty\\)。2. 对 \\(x_1\\) 分支：\\(P_1\\)：\\(x_1\\ge4\\)；\\(P_2\\)：\\(x_1\\le3\\)。3. \\(P_1\\) 解为 \\((4,1.8)\\)，值 41。对 \\(x_2\\) 分支：\\(P_3\\)：\\(x_2\\ge2\\) 不可行，fathomed；\\(P_4\\)：\\(x_2\\le1\\)，解 \\((4.44,1)\\)，值 40.55。4. 对 \\(P_4\\) 的 \\(x_1\\) 分支：\\(P_5\\)：\\(x_1\\ge5\\)，解 \\((5,0)\\)，值 40，是整数解，成为 incumbent，下界变为 40。\\(P_6\\)：\\(x_1\\le4\\)，解 \\((4,1)\\)，值 37，低于下界，fathomed。5. 回到 \\(P_2\\)：\\(x_1\\le3\\)，解 \\((3,3)\\)，值 39，低于下界 40，fathomed。6. 没有未解子问题，最优为 \\(P_5\\)：\\(x_1^\\star=5,\\ x_2^\\star=0\\)，\\(p^\\star=40\\)。fathomed 的三种情形：整数解、LP 不可行、LP 值不优于 incumbent。上界与下界之差为 optimality gap，为 0 时证明最优。",
    "1. Root \\(P_0\\) (LP relaxation): \\(x=(3.75,2.25)\\), value 41.25, upper bound 41.25, lower bound \\(-\\infty\\). 2. Branch on \\(x_1\\): \\(P_1\\): \\(x_1\\ge4\\); \\(P_2\\): \\(x_1\\le3\\). 3. \\(P_1\\) gives \\((4,1.8)\\), value 41. Branch on \\(x_2\\): \\(P_3\\): \\(x_2\\ge2\\) is infeasible, fathomed; \\(P_4\\): \\(x_2\\le1\\) gives \\((4.44,1)\\), value 40.55. 4. Branch \\(P_4\\) on \\(x_1\\): \\(P_5\\): \\(x_1\\ge5\\) gives \\((5,0)\\), value 40, integer, so it becomes the incumbent and the lower bound is 40. \\(P_6\\): \\(x_1\\le4\\) gives \\((4,1)\\), value 37, below the bound, fathomed. 5. Back to \\(P_2\\): \\(x_1\\le3\\) gives \\((3,3)\\), value 39, below 40, fathomed. 6. No unsolved nodes remain; the best is \\(P_5\\): \\(x_1^\\star=5,\\ x_2^\\star=0\\), \\(p^\\star=40\\). A node is fathomed when it is integer, LP-infeasible, or no better than the incumbent. The gap between upper and lower bounds is the optimality gap; zero gap proves optimality."
   ],
   "answer": [
    "最优解 \\(x^\\star=(5,0)\\)，\\(p^\\star=40\\)（LP 上界 41.25）。",
    "Optimal solution \\(x^\\star=(5,0)\\), \\(p^\\star=40\\) (LP bound was 41.25)."
   ],
   "pages": [
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42
   ],
   "concepts": [
    "concept-branch-bound",
    "concept-relaxation"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "branch and bound",
    "fathomed",
    "incumbent"
   ]
  },
  {
   "id": "ex-etf5248-l7-gomory-cut-example",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "Gomory 割平面例子",
    "Gomory cutting plane example"
   ],
   "problem": [
    "对上一个例子 \\(\\max 8x_1+5x_2\\)，\\(x_1+x_2\\le6\\)，\\(9x_1+5x_2\\le45\\)，整数，LP 松弛最优 \\((3.75,2.25)\\)，值 41.25，最优表（基变量 \\(x_2\\)、\\(x_1\\)）为：\\(z\\) 行 \\(1.25s_1+0.75s_2\\) 系数、rhs 41.25；\\(x_2\\) 行 \\(x_2+2.25s_1-0.25s_2=2.25\\)；\\(x_1\\) 行 \\(x_1-1.25s_1+0.25s_2=3.75\\)。选取分数基变量所在行，推导一个割平面。",
    "For the IP \\(\\max 8x_1+5x_2\\), \\(x_1+x_2\\le6\\), \\(9x_1+5x_2\\le45\\), integer, the LP relaxation optimum is \\((3.75,2.25)\\) with value 41.25. The optimal tableau has rows \\(x_2+2.25s_1-0.25s_2=2.25\\) and \\(x_1-1.25s_1+0.25s_2=3.75\\) (objective row coefficients 1.25 and 0.75). Pick a row with a fractional basic variable and derive a cutting plane."
   ],
   "solution": [
    "1. 选第二个约束（\\(x_1\\) 行）：\\(x_1-1.25s_1+0.25s_2=3.75\\)。2. 把每个系数写成 \\(\\lfloor a\\rfloor+f\\)（\\(0\\le f<1\\)）：\\(-1.25=-2+0.75\\)，\\(0.25=0+0.25\\)，\\(3.75=3+0.75\\)。3. 整理成 \\(x_1-2s_1+0s_2-3=0.75-0.75s_1-0.25s_2\\)。4. 对整数点，左边是整数，右边小于 1，故右边必须 \\(\\le0\\)：\\(0.75-0.75s_1-0.25s_2\\le0\\)。5. 代入 \\(s_1=6-x_1-x_2\\)，\\(s_2=45-9x_1-5x_2\\)，化简得割：\\(3x_1+2x_2\\le15\\)。6. 性质：所有整数可行点都满足；当前 LP 解 \\((3.75,2.25)\\) 给出 \\(11.25+4.5=15.75>15\\)，被割掉。把割加入 LP 后重复求解。该割由 Gomory 于 1958 年提出。",
    "1. Choose the second row (the \\(x_1\\) row): \\(x_1-1.25s_1+0.25s_2=3.75\\). 2. Write each coefficient as \\(\\lfloor a\\rfloor+f\\) with \\(0\\le f<1\\): \\(-1.25=-2+0.75\\), \\(0.25=0+0.25\\), \\(3.75=3+0.75\\). 3. Rearrange: \\(x_1-2s_1+0s_2-3=0.75-0.75s_1-0.25s_2\\). 4. At integer points the left side is an integer and the right side is below 1, so it must be \\(\\le0\\): \\(0.75-0.75s_1-0.25s_2\\le0\\). 5. Substitute \\(s_1=6-x_1-x_2\\), \\(s_2=45-9x_1-5x_2\\) to get the cut \\(3x_1+2x_2\\le15\\). 6. Properties: every integer feasible point satisfies it; the current LP point gives \\(11.25+4.5=15.75>15\\) and is cut off. Add the cut and re-solve. This is Gomory's 1958 cut."
   ],
   "answer": [
    "割平面 \\(3x_1+2x_2\\le15\\)，切掉 LP 解 (3.75,2.25) 而保留所有整数可行点。",
    "Cut \\(3x_1+2x_2\\le15\\), which removes the LP point (3.75, 2.25) but keeps every integer feasible point."
   ],
   "pages": [
    43,
    44,
    45,
    46
   ],
   "concepts": [
    "concept-cuts",
    "case-branch"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "cutting plane",
    "Gomory",
    "tableau"
   ]
  },
  {
   "id": "ex-etf5248-l7-giapetto-gomory-workshop",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "修改版 Giapetto：Gomory 割（工作坊）",
    "Modified Giapetto: Gomory cut (workshop)"
   ],
   "problem": [
    "整数规划 \\(\\max Z=4x_1+3x_2\\)，约束 \\(3x_1+2x_2\\le100\\)（finishing），\\(2x_1+3x_2\\le102\\)（carpentry），\\(x_1,x_2\\ge0\\) 且为整数。LP 松弛最优表：Z 行 \\(\\tfrac65s_1+\\tfrac15s_2\\)，rhs \\(702/5=140.4\\)；\\(x_1\\) 行 \\(x_1+\\tfrac35s_1-\\tfrac25s_2=\\tfrac{96}{5}=19.2\\)；\\(x_2\\) 行 \\(x_2-\\tfrac25s_1+\\tfrac35s_2=\\tfrac{106}{5}=21.2\\)。问：为什么该 LP 解对 IP 无效？写出 \\(x_1\\) 行并推导 Gomory 割；再用 \\(x_1,x_2\\) 表示该割。",
    "IP: \\(\\max Z=4x_1+3x_2\\) s.t. \\(3x_1+2x_2\\le100\\) (finishing), \\(2x_1+3x_2\\le102\\) (carpentry), \\(x_1,x_2\\ge0\\) integer. The LP relaxation tableau has Z-row coefficients \\(\\tfrac65,\\tfrac15\\) on \\(s_1,s_2\\) with rhs 140.4; the \\(x_1\\) row is \\(x_1+\\tfrac35s_1-\\tfrac25s_2=19.2\\) and the \\(x_2\\) row is \\(x_2-\\tfrac25s_1+\\tfrac35s_2=21.2\\). Why is the LP solution invalid for the IP? Derive the Gomory fractional cut from the \\(x_1\\) row and express it in \\(x_1,x_2\\)."
   ],
   "solution": [
    "1. LP 解 \\(x_1=19.2,\\ x_2=21.2\\) 是小数，不能卖零点几个火车或士兵，因此对 IP 不可行。2. \\(x_1\\) 行：\\(x_1+\\tfrac35s_1-\\tfrac25s_2=\\tfrac{96}{5}\\)。3. 拆分：\\(-\\tfrac25=-1+\\tfrac35\\)，\\(\\tfrac{96}{5}=19+\\tfrac15\\)，得 \\(x_1-s_2-19=\\tfrac15-\\tfrac35s_1-\\tfrac35s_2\\)。4. 整数点上左边为整数、右边小于 1，故 \\(\\tfrac15-\\tfrac35s_1-\\tfrac35s_2\\le0\\)，即 \\(s_1+s_2\\ge\\tfrac13\\)。5. 代入 \\(s_1=100-3x_1-2x_2\\)，\\(s_2=102-2x_1-3x_2\\)：\\(s_1+s_2=202-5x_1-5x_2\\)，所以 \\(202-5(x_1+x_2)\\ge\\tfrac13\\)，即 \\(x_1+x_2\\le\\tfrac{605}{15}=\\tfrac{121}{3}\\approx40.33\\)（等价于 \\(15x_1+15x_2\\le605\\)）。6. 检查：当前 LP 点 \\(19.2+21.2=40.4>40.33\\)，被切掉；例如整数点 (20,20) 满足 \\(40\\le40.33\\)。幻灯片只提出问题，没有给出答案，以上由给定的最优表推出。",
    "1. The LP point \\(x_1=19.2,\\ x_2=21.2\\) is fractional, and fractional trains or soldiers cannot be sold, so it is infeasible for the IP. 2. The \\(x_1\\) row: \\(x_1+\\tfrac35s_1-\\tfrac25s_2=\\tfrac{96}{5}\\). 3. Split: \\(-\\tfrac25=-1+\\tfrac35\\), \\(\\tfrac{96}{5}=19+\\tfrac15\\), giving \\(x_1-s_2-19=\\tfrac15-\\tfrac35s_1-\\tfrac35s_2\\). 4. At integer points the left side is an integer and the right side is below 1, so \\(\\tfrac15-\\tfrac35s_1-\\tfrac35s_2\\le0\\), i.e. \\(s_1+s_2\\ge\\tfrac13\\). 5. Substitute \\(s_1=100-3x_1-2x_2\\), \\(s_2=102-2x_1-3x_2\\): \\(s_1+s_2=202-5x_1-5x_2\\), so \\(202-5(x_1+x_2)\\ge\\tfrac13\\), i.e. \\(x_1+x_2\\le\\tfrac{605}{15}=\\tfrac{121}{3}\\approx40.33\\) (equivalently \\(15x_1+15x_2\\le605\\)). 6. Check: the LP point has \\(19.2+21.2=40.4>40.33\\) and is cut off; the integer point (20,20) satisfies \\(40\\le40.33\\). The slides only pose the questions; the answer above is derived from the given tableau."
   ],
   "answer": [
    "LP 解含小数故无效；Gomory 割为 \\(x_1+x_2\\le 121/3\\)（即 \\(15x_1+15x_2\\le605\\)）。",
    "The LP solution is fractional, hence invalid; the Gomory cut is \\(x_1+x_2\\le 121/3\\) (i.e. \\(15x_1+15x_2\\le605\\))."
   ],
   "pages": [
    59,
    60
   ],
   "concepts": [
    "concept-cuts",
    "case-giapetto"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "Gomory",
    "cutting plane",
    "workshop"
   ]
  },
  {
   "id": "ex-etf5248-l7-facility-formulation-strength",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "设施选址：原始与聚合形式的强弱比较",
    "Facility location: strong versus aggregate formulation"
   ],
   "problem": [
    "设施选址问题有两种等价的 IP 形式：原始形式用约束 \\(x_{ij}\\le y_j\\)（对所有 \\(i,j\\)），聚合形式用 \\(\\sum_{i=1}^m x_{ij}\\le my_j\\)（对所有 \\(j\\)）。比较两者的约束数量与 LP 松弛的强度，哪个更好？",
    "The facility location problem has two equivalent IP formulations: the original with \\(x_{ij}\\le y_j\\) for all \\(i,j\\), and the aggregate one with \\(\\sum_{i=1}^m x_{ij}\\le my_j\\) for all \\(j\\). Compare the number of constraints and the strength of the LP relaxations. Which is better?"
   ],
   "solution": [
    "1. 对 0-1 变量，\\(\\sum_ix_{ij}\\le my_j\\) 与所有 \\(x_{ij}\\le y_j\\) 等价，所以两个 IP 的可行集和最优值相同。2. 约束数：聚合形式 \\(m+n\\) 条，原始形式 \\(m+mn\\) 条。3. 看 LP 松弛：原始形式的松弛可行域更接近整数解集合。设 \\(p_{ip}\\) 为 IP 最优值，\\(p_{lp}\\)、\\(p_{alp}\\) 为两个松弛的最优值，则 \\(p_{alp}\\le p_{lp}\\le p_{ip}\\)。4. 许多 IP 算法依赖 \\(p_{lp}\\) 这样的界，因此界更紧的原始形式更强，尽管它约束更多。",
    "1. For binary variables, \\(\\sum_ix_{ij}\\le my_j\\) is equivalent to all \\(x_{ij}\\le y_j\\), so both IPs have the same feasible set and optimal cost. 2. Constraint counts: aggregate \\(m+n\\), original \\(m+mn\\). 3. In the LP relaxations, the original form has a feasible region closer to the integer solutions. With \\(p_{ip}\\) the IP optimum and \\(p_{lp},p_{alp}\\) the two relaxation optima, \\(p_{alp}\\le p_{lp}\\le p_{ip}\\). 4. Many IP algorithms rely on bounds like \\(p_{lp}\\), so the tighter original formulation is stronger despite having more constraints."
   ],
   "answer": [
    "原始形式更强：\\(p_{alp}\\le p_{lp}\\le p_{ip}\\)，尽管约束更多（\\(m+mn\\) 对 \\(m+n\\)）。",
    "The original formulation is stronger: \\(p_{alp}\\le p_{lp}\\le p_{ip}\\), despite more constraints (\\(m+mn\\) vs \\(m+n\\))."
   ],
   "pages": [
    50,
    51,
    52
   ],
   "concepts": [
    "concept-strength",
    "case-facility",
    "concept-implication-binary"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "strong formulation",
    "LP relaxation",
    "facility location"
   ]
  },
  {
   "id": "ex-etf5248-l7-tsp-subtours",
   "course": "ETF5248",
   "topic": "e5248-7",
   "topicName": [
    "整数规划",
    "Integer programming"
   ],
   "title": [
    "旅行商问题与子回路",
    "TSP and subtours"
   ],
   "problem": [
    "旅行商问题：无向图 \\(G=(N,E)\\)，边成本 \\(c_{ij}\\)，求访问所有节点的最小成本回路。用变量 \\(x_{ij}\\)（边在回路中为 1）建模为：\\(\\min\\sum c_{ij}x_{ij}\\)，每个节点 \\(i\\) 满足 \\(\\sum_jx_{ij}=1\\)，每个节点 \\(j\\) 满足 \\(\\sum_ix_{ij}=1\\)，\\(x_{ij}\\in\\{0,1\\}\\)。该模型有什么问题？如何修正？",
    "TSP: undirected graph \\(G=(N,E)\\), edge costs \\(c_{ij}\\), find a minimum-cost tour visiting every node. Model with \\(x_{ij}=1\\) if the edge is used: \\(\\min\\sum c_{ij}x_{ij}\\), \\(\\sum_jx_{ij}=1\\) for each node \\(i\\), \\(\\sum_ix_{ij}=1\\) for each node \\(j\\), \\(x_{ij}\\in\\{0,1\\}\\). What is wrong with this model and how can it be fixed?"
   ],
   "solution": [
    "1. 问题：上述分配式约束只保证每个节点进出各一次，但可能产生子回路。2. 例（6 个节点）：合法回路 \\(1-5-2-4-3-6-1\\)，以及两个子回路 \\(1-2-6-1\\) 与 \\(3-4-5-3\\)；两者都满足上述约束，都是该模型的可行解，但后者不是一条完整回路。3. 修正：加入 subtour elimination constraints。MTZ（1960）：\\(u_i-u_j+nx_{ij}\\le n-1\\)，\\(u_i\\ge0\\) 整数，增加 \\(n\\) 个整数变量，约束少（\\(|E|+n\\) 条）但较弱。DFJ（1954）：对所有 \\(S\\subset N,\\ |S|\\ge2\\)，\\(\\sum_{i,j\\in S}x_{ij}\\le|S|-1\\)，约束数指数级但更强。两者都能正确解 TSP。",
    "1. Problem: these assignment-type constraints only force one in and one out per node, so subtours can appear. 2. Example (6 nodes): a proper tour \\(1-5-2-4-3-6-1\\) versus two subtours \\(1-2-6-1\\) and \\(3-4-5-3\\); both satisfy the constraints and are feasible for the model, yet the latter is not a single tour. 3. Fix: add subtour elimination constraints. MTZ (1960): \\(u_i-u_j+nx_{ij}\\le n-1\\), \\(u_i\\ge0\\) integer, adds \\(n\\) integer variables, few constraints (\\(|E|+n\\)) but weaker. DFJ (1954): \\(\\sum_{i,j\\in S}x_{ij}\\le|S|-1\\) for all \\(S\\subset N,\\ |S|\\ge2\\), exponentially many constraints but much stronger. Both solve the TSP correctly."
   ],
   "answer": [
    "需加入子回路消除约束（MTZ 或 DFJ）；DFJ 更强，MTZ 约束更少。",
    "Add subtour elimination constraints (MTZ or DFJ); DFJ is stronger, MTZ has far fewer constraints."
   ],
   "pages": [
    55,
    56,
    57
   ],
   "concepts": [
    "case-tsp",
    "concept-subtour"
   ],
   "source": "ETF2480_ETF5248_Lecture_7.pdf",
   "tags": [
    "TSP",
    "subtour",
    "formulation"
   ]
  },
  {
   "id": "ex-etx5500-intro-variable-types-tutorial",
   "course": "ETX5500",
   "topic": "e5500-intro",
   "topicName": [
    "导论",
    "Introduction"
   ],
   "title": [
    "变量类型：非度量与度量变量举例",
    "Types of variables: non-metric vs metric examples"
   ],
   "problem": [
    "各举一个非度量（non-metric）变量和一个度量（metric）变量的例子。对每个变量回答：它是 nominal、ordinal 还是 ratio 尺度？用什么汇总统计量或图形可以初步了解这类数据？",
    "Think of one non-metric and one metric variable. For each, state whether it is measured on a nominal, ordinal or ratio scale, and say what summary or plot would give a good first idea of the data."
   ],
   "solution": [
    "1. 非度量例子：出行方式（bike、car、train）。类别之间没有大小之分，属于 nominal 尺度。\n2. 度量例子：股票收益率（stock return）。差值和比值都有意义，属于 ratio 尺度。\n3. 汇总方式：对出行方式，计算选择每种交通方式的人所占比例（可画条形图）；对股票收益率，用均值、众数、中位数描述集中趋势。",
    "1. Non-metric example: mode of transport (bike, car or train). The categories carry no notion of size, so it is on a nominal scale.\n2. Metric example: stock return. Differences and ratios are meaningful, so it is on a ratio scale.\n3. Summaries: for transport mode, the proportion of individuals using each mode; for stock returns, the mean, mode and median describe central tendency."
   ],
   "answer": [
    "出行方式=nominal（非度量），用各类比例汇总；股票收益=ratio（度量），用均值/中位数/众数汇总。",
    "Transport mode is nominal (non-metric), summarised by category proportions; stock return is ratio (metric), summarised by mean, median and mode."
   ],
   "pages": [
    20,
    21
   ],
   "concepts": [
    "etx5500-intro-variable-types",
    "etx5500-intro-beer-data"
   ],
   "source": "Intro.pdf",
   "tags": [
    "variable types",
    "nominal",
    "ratio",
    "metric"
   ]
  },
  {
   "id": "ex-etx5500-intro-us-states-data-structure",
   "course": "ETX5500",
   "topic": "e5500-intro",
   "topicName": [
    "导论",
    "Introduction"
   ],
   "title": [
    "美国各州数据：观测、变量与数据结构",
    "US states data: observations, variables and data structure"
   ],
   "problem": [
    "数据集给出 1977 年美国 50 个州的五项生活质量指标：Income、Illiteracy（文盲率）、LifeExp（预期寿命）、Murder（谋杀率）、HSGrad（高中毕业率），另有州名和缩写。例如 Alabama：Income 3624，Illiteracy 2.1，LifeExp 69.05，Murder 15.1，HSGrad 41.3。问：什么是观测、什么是变量？数据属于哪种结构？哪些变量是 metric？",
    "The data record five quality-of-life indicators for the 50 US states in 1977: Income, Illiteracy, LifeExp, Murder and HSGrad, plus the state name and abbreviation. E.g. Alabama: Income 3624, Illiteracy 2.1, LifeExp 69.05, Murder 15.1, HSGrad 41.3. What is an observation, what is a variable, what data structure is this, and which variables are metric?"
   ],
   "solution": [
    "1. 每一行是一个观测（一个州）。\n2. 每一列是一个变量（州的一个属性）。\n3. 所有州都在同一时间点（1977 年）被观测，所以是 cross-sectional 数据。\n4. 五个指标（Income、Illiteracy、LifeExp、Murder、HSGrad）都是 metric 变量；州名（State）是 categorical 变量。\n5. 每个观测可看作五维空间中的一个点，这就是高维数据的视角。",
    "1. Each row is an observation, i.e. one state.\n2. Each column is a variable, i.e. an attribute of each state.\n3. All states are observed at one point in time (1977), so the data are cross-sectional.\n4. The five indicators (Income, Illiteracy, LifeExp, Murder, HSGrad) are metric; State is categorical.\n5. Each observation can be viewed as a point in a five-dimensional space, which is the high-dimensional viewpoint."
   ],
   "answer": [
    "行=州（观测），列=属性（变量）；cross-sectional；五个指标为 metric，州名为 categorical。",
    "Rows are states (observations), columns are attributes (variables); cross-sectional data; five metric indicators and one categorical variable (State)."
   ],
   "pages": [
    10,
    24,
    25,
    26
   ],
   "concepts": [
    "etx5500-intro-observations-variables",
    "etx5500-intro-data-structures",
    "etx5500-intro-variable-types"
   ],
   "source": "Intro.pdf",
   "tags": [
    "US states",
    "cross-sectional",
    "observations",
    "variables"
   ]
  },
  {
   "id": "ex-etx5500-intro-beer-variable-types",
   "course": "ETX5500",
   "topic": "e5500-intro",
   "topicName": [
    "导论",
    "Introduction"
   ],
   "title": [
    "啤酒数据集：变量个数与类型判断",
    "Beer dataset: counting variables and classifying their types"
   ],
   "problem": [
    "beer 数据集的列为：beer（品牌名）、rating（VeryGood/Good/Fair）、origin（产地，如 USA、Germany、Mexico）、avail（National/Regional）、price、cost、calories、sodium、alcohol、light（LIGHT/NONLIGHT）。例如 Budweiser Light：Good，USA，National，price 2.63，cost 0.44，calories 113，sodium 8，alcohol 3.7，LIGHT。问：数据集有多少个变量？哪些是 metric、nominal、ordinal？",
    "The beer dataset has the columns beer (brand name), rating (VeryGood/Good/Fair), origin (e.g. USA, Germany, Mexico), avail (National/Regional), price, cost, calories, sodium, alcohol and light (LIGHT/NONLIGHT). E.g. Budweiser Light: Good, USA, National, price 2.63, cost 0.44, calories 113, sodium 8, alcohol 3.7, LIGHT. How many variables are there, and which are metric, nominal and ordinal?"
   ],
   "solution": [
    "1. 数一数列：共 10 列，其中 beer 是品牌标签，其余 9 个是描述啤酒的变量（课件没有给出确切个数，这是按表头数出的）。\n2. 课件明确给出的三个判断：price 是 numerical（metric）变量；origin 是 nominal 变量；rating 是 ordinal 变量，因为 very good 比 good 好，但我们不知道好多少。\n3. 按同样的标准推广（课件未逐一列出，属于推断）：cost、calories、sodium、alcohol 是数值，差值和比值有意义，所以是 metric；avail 与 light 只是类别标签，所以是 nominal。",
    "1. Counting the header gives 10 columns: beer is the brand label and the other 9 describe each beer (the slides do not state the count; this is read off the table).\n2. The slides state three classifications explicitly: price is numerical (metric); origin is nominal; rating is ordinal, since a very good beer is better than a good one but we do not know by how much.\n3. Applying the same criteria to the rest (an inference, not listed on the slides): cost, calories, sodium and alcohol are numerical so metric; avail and light are just category labels so nominal."
   ],
   "answer": [
    "price 为 metric，origin 为 nominal，rating 为 ordinal；cost/calories/sodium/alcohol 同为 metric，avail/light 为 nominal（后者为按准则的推断）。",
    "price is metric, origin nominal, rating ordinal; by the same logic cost/calories/sodium/alcohol are metric and avail/light nominal (the latter is inferred)."
   ],
   "pages": [
    42,
    43,
    44
   ],
   "concepts": [
    "etx5500-intro-beer-data",
    "etx5500-intro-variable-types"
   ],
   "source": "Intro.pdf",
   "tags": [
    "beer",
    "ordinal",
    "nominal",
    "metric"
   ]
  },
  {
   "id": "ex-etx5500-intro-beer-crosstab-rating-origin",
   "course": "ETX5500",
   "topic": "e5500-intro",
   "topicName": [
    "导论",
    "Introduction"
   ],
   "title": [
    "交叉表：啤酒评级与产地是否相关",
    "Cross tabulation: is beer rating associated with origin?"
   ],
   "problem": [
    "rating 是 ordinal、origin 是 nominal，均为非 metric，不能用均值之类的方法研究它们的相关性，可用交叉表（cross tabulation）。先把产地合并为 Int.（美国以外）与 US：VeryGood：Int. 4，US 7；Good：Int. 3，US 11；Fair：Int. 1，US 9。再看全部国家的表：VeryGood：USA 7，Canada 2，France 1，Holland 1，Mexico 0，Germany 0，Japan 0；Good：11，0，0，0，1，1，1；Fair：9，0，0，0，0，1，0。问：origin 与 rating 是否有关联？表变大后还容易看出关系吗？",
    "Rating (ordinal) and origin (nominal) are non-metric, so means and similar tools cannot study their dependence; use a cross tabulation. First collapse origin to Int. (non-US) vs US: VeryGood: Int. 4, US 7; Good: Int. 3, US 11; Fair: Int. 1, US 9. Then the full table: VeryGood: USA 7, Canada 2, France 1, Holland 1, Mexico 0, Germany 0, Japan 0; Good: 11, 0, 0, 0, 1, 1, 1; Fair: 9, 0, 0, 0, 0, 1, 0. Is there an association between origin and rating? Is it as easy to see once all countries are used?"
   ],
   "solution": [
    "1. 因为多数啤酒来自美国，课件先把非美国国家合并成 Int.，得到 3×2 小表。\n2. 列和：Int. 共 4+3+1=8 瓶，US 共 7+11+9=27 瓶。\n3. 列内比例（这是按课件数据计算的补充）：Int. 中 VeryGood 占 4/8=50%，Fair 占 1/8=12.5%；US 中 VeryGood 占 7/27≈26%，Fair 占 9/27≈33%。国际啤酒的评级略偏高，但样本很小，课件只提出问题，没有给出结论。\n4. 展开到 7 个国家后，大量单元格为 0 或 1，很难直接看出关系，课件的问题就是 Is it as easy to find a relationship now?，答案是不容易。\n5. 大型交叉表要用 Correspondence Analysis 来汇总和可视化；这里的高维来自类别数量多，而不是变量多。",
    "1. Since most beers are American, the slides first merge all other countries into Int., giving a small 3x2 table.\n2. Column totals: Int. has 4+3+1=8 beers, US has 7+11+9=27.\n3. Within-column shares (my own computation from the slide data): Int. has VeryGood 4/8=50% and Fair 1/8=12.5%; US has VeryGood 7/27, about 26%, and Fair 9/27, about 33%. International beers look slightly better rated, but the sample is tiny; the slides only pose the question and give no verdict.\n4. With all seven countries the table is full of 0s and 1s and the pattern is hard to see; the slide asks whether it is still as easy, and the implied answer is no.\n5. Large cross tabulations are summarised and visualised with Correspondence Analysis; the dimensionality here comes from the number of categories rather than the number of variables."
   ],
   "answer": [
    "小表中国际啤酒评级略高（VeryGood 50% 对 26%），但样本小；七国大表难以判断，需用 Correspondence Analysis。",
    "In the small table international beers rate somewhat higher (VeryGood 50% vs 26%) but the sample is small; the seven-country table is hard to read, which motivates Correspondence Analysis."
   ],
   "pages": [
    45,
    46,
    47,
    48
   ],
   "concepts": [
    "etx5500-intro-cross-tabulation",
    "etx5500-intro-variable-types",
    "etx5500-intro-beer-data"
   ],
   "source": "Intro.pdf",
   "tags": [
    "cross tabulation",
    "association",
    "correspondence analysis",
    "beer"
   ]
  },
  {
   "id": "ex-etx5500-intro-r-beer-histogram-crosstab",
   "course": "ETX5500",
   "topic": "e5500-intro",
   "topicName": [
    "导论",
    "Introduction"
   ],
   "title": [
    "R 入门：啤酒价格直方图与交叉表",
    "R practice: beer price histogram and cross tabulation"
   ],
   "problem": [
    "加载 ggplot2，用 readRDS('beer.rds') 读入 beer 数据。(a) 用 qplot 画 price 的直方图，并问是否有离群值。(b) 用 table 函数做 rating 对 origin 的交叉表。",
    "Load ggplot2 and read the data with beer <- readRDS('beer.rds'). (a) Use qplot to draw a histogram of price and say whether there are outliers. (b) Use the function table to cross-tabulate rating against origin."
   ],
   "solution": [
    "1. 载入包并画图：library(ggplot2)，然后 qplot(beer[['price']])。新版 ggplot2 会提示 qplot 已弃用，并提示 bins=30 的默认值，可换更合适的 binwidth；提示不影响结果。\n2. 读直方图：有一个明显离群值，price 超过 7 美元。\n3. 交叉表：table(beer[['rating']], beer[['origin']])，行是 rating，列是 origin。\n4. 输出（列依次为 USA、Canada、France、Holland、Mexico、Germany、Japan）：VeryGood 7 2 1 1 0 0 0；Good 11 0 0 0 1 1 1；Fair 9 0 0 0 0 1 0。",
    "1. Load the package and plot: library(ggplot2), then qplot(beer[['price']]). Newer ggplot2 warns that qplot is deprecated and that bins=30 was used by default (a better binwidth can be chosen); the warnings do not change the result.\n2. Reading the histogram: there is one clear outlier with a price above 7 dollars.\n3. Cross tabulation: table(beer[['rating']], beer[['origin']]), with rating in rows and origin in columns.\n4. Output (columns USA, Canada, France, Holland, Mexico, Germany, Japan): VeryGood 7 2 1 1 0 0 0; Good 11 0 0 0 1 1 1; Fair 9 0 0 0 0 1 0."
   ],
   "answer": [
    "price 有一个明显离群值（超过 7 美元）；交叉表与课件中全国家表一致（如 USA：VeryGood 7，Good 11，Fair 9）。",
    "One clear price outlier above 7 dollars; the cross tabulation matches the all-countries table (e.g. USA: VeryGood 7, Good 11, Fair 9)."
   ],
   "pages": [
    42,
    47
   ],
   "concepts": [
    "etx5500-intro-cross-tabulation",
    "etx5500-intro-beer-data",
    "etx5500-intro-visualising-limits"
   ],
   "source": "Intro.pdf",
   "tags": [
    "R",
    "qplot",
    "histogram",
    "outlier",
    "table"
   ]
  },
  {
   "id": "ex-etx5500-matrix-vector-addition-data",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "向量加法：笼子与贸易赤字数据",
    "Vector addition with data: cages and trade deficits"
   ],
   "problem": [
    "两个向量 \\(v_1=\\begin{bmatrix}1\\\\2\\end{bmatrix}\\)、\\(v_2=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\)。(a) 求 \\(v_1+v_2\\)。(b) 解释含义：笼子 1 有 1 只鸡 3 只兔（按课件设定向量的两个分量分别是鸡数和兔数），笼子 2 有 2 只鸡 1 只兔，合并后是什么？(c) 澳大利亚 2016、2017 年贸易赤字为 1B、3B 美元，新西兰为 2B、1B 美元，两国组成货币联盟后合并的贸易赤字是多少？",
    "Let \\(v_1=\\begin{bmatrix}1\\\\2\\end{bmatrix}\\) and \\(v_2=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\). (a) Compute \\(v_1+v_2\\). (b) Interpret it for data: a cage with 1 chicken and 3 rabbits is combined with a cage with 2 chickens and 1 rabbit - what cage results? (c) Australia ran a trade deficit of USD 1B in 2016 and USD 3B in 2017; New Zealand ran USD 2B in 2016 and USD 1B in 2017. They form a currency union - what is the combined trade deficit for each year?"
   ],
   "solution": [
    "1. 向量加法就是对应分量相加：\\(\\begin{bmatrix}1\\\\2\\end{bmatrix}+\\begin{bmatrix}3\\\\1\\end{bmatrix}=\\begin{bmatrix}1+3\\\\2+1\\end{bmatrix}=\\begin{bmatrix}4\\\\3\\end{bmatrix}\\)。几何上是把一个向量沿另一个向量平移（translation），且 \\(v_1+v_2=v_2+v_1\\)（交换律 commutativity）。2. 数据解释：把每个向量看作一个“观测”，相加就是把两个观测的各变量加总，所以两个笼子合并后是 3 只鸡、4 只兔（课件原文即给出该结果）。3. 贸易赤字：2016 年 \\(1+2=3\\)B，2017 年 \\(3+1=4\\)B，即联盟的赤字向量为 \\((3,4)\\)。",
    "1. Vector addition adds corresponding components: \\(\\begin{bmatrix}1\\\\2\\end{bmatrix}+\\begin{bmatrix}3\\\\1\\end{bmatrix}=\\begin{bmatrix}1+3\\\\2+1\\end{bmatrix}=\\begin{bmatrix}4\\\\3\\end{bmatrix}\\). Geometrically one vector is slid along the other (translation), and \\(v_1+v_2=v_2+v_1\\) (commutativity). 2. Data reading: each vector is an observation, so adding vectors pools every variable; the merged cage has 3 chickens and 4 rabbits, as the slides state. 3. Trade deficits: 2016 gives \\(1+2=3\\)B and 2017 gives \\(3+1=4\\)B, so the union's deficit vector is \\((3,4)\\)."
   ],
   "answer": [
    "\\(v_1+v_2=(4,3)^\\top\\)；合并的笼子有 3 只鸡 4 只兔；货币联盟赤字为 2016 年 3B、2017 年 4B 美元。",
    "\\(v_1+v_2=(4,3)^\\top\\); the merged cage has 3 chickens and 4 rabbits; the union's deficit is USD 3B in 2016 and USD 4B in 2017."
   ],
   "pages": [
    12,
    13,
    19,
    23,
    24
   ],
   "concepts": [
    "etx5500-matrix-vector-data-cases",
    "etx5500-matrix-vectors-basis"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "vector",
    "addition",
    "data"
   ]
  },
  {
   "id": "ex-etx5500-matrix-scalar-multiplication-data",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "标量乘法：向量缩放与货币换算",
    "Scalar multiplication: scaling vectors and currency conversion"
   ],
   "problem": [
    "设 \\(v_1=\\begin{bmatrix}1\\\\2\\end{bmatrix}\\)，\\(v_2=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\)。(a) 计算 \\(2v_1\\) 和 \\(0.5v_2\\)。(b) 贸易赤字若改用人民币计价（6 元 = 1 美元），澳大利亚 2016 年赤字 1B 美元、2017 年 3B 美元，换算后各是多少？",
    "Let \\(v_1=\\begin{bmatrix}1\\\\2\\end{bmatrix}\\) and \\(v_2=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\). (a) Compute \\(2v_1\\) and \\(0.5v_2\\). (b) Trade deficit is now measured in Chinese Yuan with 6 Yuan = 1 USD. Australia's deficit was USD 1B in 2016 and USD 3B in 2017 - what is it in Yuan?"
   ],
   "solution": [
    "1. 标量乘法是把向量的每个分量都乘同一个数（注意这是乘一个数，不是乘另一个向量，也不同于矩阵乘法）。2. \\(2v_1=2\\begin{bmatrix}1\\\\2\\end{bmatrix}=\\begin{bmatrix}2\\times1\\\\2\\times2\\end{bmatrix}=\\begin{bmatrix}2\\\\4\\end{bmatrix}\\)，向量被拉长一倍。3. \\(0.5v_2=\\begin{bmatrix}0.5\\times3\\\\0.5\\times1\\end{bmatrix}=\\begin{bmatrix}1.5\\\\0.5\\end{bmatrix}\\)，向量缩短一半。4. 换算货币相当于乘标量 6：\\(6\\times(1,3)^\\top=(6,18)^\\top\\)，即 2016 年 6B 元、2017 年 18B 元。",
    "1. Scalar multiplication multiplies every component by the same number (a single number, not another vector, so it differs from matrix multiplication). 2. \\(2v_1=2\\begin{bmatrix}1\\\\2\\end{bmatrix}=\\begin{bmatrix}2\\times1\\\\2\\times2\\end{bmatrix}=\\begin{bmatrix}2\\\\4\\end{bmatrix}\\): the arrow doubles in length. 3. \\(0.5v_2=\\begin{bmatrix}0.5\\times3\\\\0.5\\times1\\end{bmatrix}=\\begin{bmatrix}1.5\\\\0.5\\end{bmatrix}\\): the arrow halves. 4. Changing currency is multiplication by the scalar 6: \\(6\\times(1,3)^\\top=(6,18)^\\top\\), i.e. 6B Yuan in 2016 and 18B Yuan in 2017."
   ],
   "answer": [
    "\\(2v_1=(2,4)^\\top\\)，\\(0.5v_2=(1.5,0.5)^\\top\\)；赤字为 2016 年 6B 元、2017 年 18B 元。",
    "\\(2v_1=(2,4)^\\top\\), \\(0.5v_2=(1.5,0.5)^\\top\\); the deficit is 6B Yuan (2016) and 18B Yuan (2017)."
   ],
   "pages": [
    25,
    30,
    31,
    32
   ],
   "concepts": [
    "etx5500-matrix-vector-data-cases",
    "etx5500-matrix-vectors-basis"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "vector",
    "scalar multiplication",
    "units"
   ]
  },
  {
   "id": "ex-etx5500-matrix-standard-basis-build",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "用标准基向量构造向量",
    "Building a vector from the standard basis"
   ],
   "problem": [
    "标准基为 \\(b_1=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\)、\\(b_2=\\begin{bmatrix}0\\\\1\\end{bmatrix}\\)。写出任意向量 \\((x,y)^\\top\\) 用基向量的表达式，并用它构造 \\(v_2=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\)；再对 \\(v=\\begin{bmatrix}4\\\\5\\end{bmatrix}\\) 给出它在标准基下的坐标。",
    "With standard basis \\(b_1=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\) and \\(b_2=\\begin{bmatrix}0\\\\1\\end{bmatrix}\\), express a generic vector \\((x,y)^\\top\\) in terms of the basis, use this to build \\(v_2=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\), and give the coordinates of \\(v=\\begin{bmatrix}4\\\\5\\end{bmatrix}\\) in the standard basis."
   ],
   "solution": [
    "1. 任何 \\(\\mathbb{R}^2\\) 中的向量都可由标量乘法加向量加法配合两个基向量得到：\\(\\begin{bmatrix}x\\\\y\\end{bmatrix}=x\\begin{bmatrix}1\\\\0\\end{bmatrix}+y\\begin{bmatrix}0\\\\1\\end{bmatrix}=xb_1+yb_2\\)。2. 取 \\(x=3,y=1\\)：\\(v_2=3b_1+1b_2=\\begin{bmatrix}3\\\\0\\end{bmatrix}+\\begin{bmatrix}0\\\\1\\end{bmatrix}=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\)。3. 同理 \\(v=(4,5)^\\top=4b_1+5b_2\\)，所以 \\(x=4,y=5\\) 就是它在标准基下的坐标（coordinates）。",
    "1. Any vector in \\(\\mathbb{R}^2\\) is obtained by scalar multiplication and addition of the two basis vectors: \\(\\begin{bmatrix}x\\\\y\\end{bmatrix}=x\\begin{bmatrix}1\\\\0\\end{bmatrix}+y\\begin{bmatrix}0\\\\1\\end{bmatrix}=xb_1+yb_2\\). 2. With \\(x=3,y=1\\): \\(v_2=3b_1+1b_2=\\begin{bmatrix}3\\\\0\\end{bmatrix}+\\begin{bmatrix}0\\\\1\\end{bmatrix}=\\begin{bmatrix}3\\\\1\\end{bmatrix}\\). 3. Likewise \\(v=(4,5)^\\top=4b_1+5b_2\\), so \\(x=4,y=5\\) are its coordinates in the standard basis."
   ],
   "answer": [
    "\\((x,y)^\\top=xb_1+yb_2\\)；\\(v_2=3b_1+b_2\\)；\\((4,5)^\\top\\) 的标准基坐标为 \\((4,5)\\)。",
    "\\((x,y)^\\top=xb_1+yb_2\\); \\(v_2=3b_1+b_2\\); the standard-basis coordinates of \\((4,5)^\\top\\) are \\((4,5)\\)."
   ],
   "pages": [
    33,
    34,
    35,
    127,
    128
   ],
   "concepts": [
    "etx5500-matrix-vectors-basis"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "basis",
    "vector"
   ]
  },
  {
   "id": "ex-etx5500-matrix-matrix-add-scalar",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "矩阵加法与标量乘法",
    "Adding matrices and multiplying by a scalar"
   ],
   "problem": [
    "设 \\(A=\\begin{bmatrix}1&2\\\\3&3\\\\4&5\\end{bmatrix}\\)，\\(B=\\begin{bmatrix}6&2\\\\4&2\\\\5&6\\end{bmatrix}\\)。计算 \\(A+B\\) 与 \\(3A\\)，并说明矩阵相加需要什么条件。",
    "Let \\(A=\\begin{bmatrix}1&2\\\\3&3\\\\4&5\\end{bmatrix}\\) and \\(B=\\begin{bmatrix}6&2\\\\4&2\\\\5&6\\end{bmatrix}\\). Compute \\(A+B\\) and \\(3A\\), and state when two matrices can be added."
   ],
   "solution": [
    "1. 只有维数相同的矩阵才能相加；这里两个都是 \\(3\\times2\\)，可以相加。2. 对应元素相加：\\(A+B=\\begin{bmatrix}1+6&2+2\\\\3+4&3+2\\\\4+5&5+6\\end{bmatrix}=\\begin{bmatrix}7&4\\\\7&5\\\\9&11\\end{bmatrix}\\)。3. 标量乘法是每个元素乘 3：\\(3A=\\begin{bmatrix}3&6\\\\9&9\\\\12&15\\end{bmatrix}\\)。",
    "1. Only matrices of the same dimension can be added; both are \\(3\\times2\\), so the sum is defined. 2. Add corresponding entries: \\(A+B=\\begin{bmatrix}1+6&2+2\\\\3+4&3+2\\\\4+5&5+6\\end{bmatrix}=\\begin{bmatrix}7&4\\\\7&5\\\\9&11\\end{bmatrix}\\). 3. Scalar multiplication multiplies every entry by 3: \\(3A=\\begin{bmatrix}3&6\\\\9&9\\\\12&15\\end{bmatrix}\\)."
   ],
   "answer": [
    "\\(A+B=\\begin{bmatrix}7&4\\\\7&5\\\\9&11\\end{bmatrix}\\)，\\(3A=\\begin{bmatrix}3&6\\\\9&9\\\\12&15\\end{bmatrix}\\)；加法要求维数相同。",
    "\\(A+B=\\begin{bmatrix}7&4\\\\7&5\\\\9&11\\end{bmatrix}\\), \\(3A=\\begin{bmatrix}3&6\\\\9&9\\\\12&15\\end{bmatrix}\\); addition needs equal dimensions."
   ],
   "pages": [
    37,
    38,
    39
   ],
   "concepts": [
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "matrix",
    "addition",
    "scalar"
   ]
  },
  {
   "id": "ex-etx5500-matrix-row-times-column",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "行向量乘列向量与平方和",
    "Row times column, and the sum of squares"
   ],
   "problem": [
    "计算 \\([1\\ \\ 3\\ \\ 4]\\begin{bmatrix}6\\\\4\\\\5\\end{bmatrix}\\)，说明结果的维数；再说明当 \\(z=(z_1,\\dots,z_n)^\\top\\) 时 \\(z^\\top z\\) 等于什么。",
    "Compute \\([1\\ \\ 3\\ \\ 4]\\begin{bmatrix}6\\\\4\\\\5\\end{bmatrix}\\), state the dimension of the result, and then say what \\(z^\\top z\\) equals for \\(z=(z_1,\\dots,z_n)^\\top\\)."
   ],
   "solution": [
    "1. 行乘列：把对应元素相乘后相加，\\(1\\times6+3\\times4+4\\times5=6+12+20=38\\)。2. 这是 \\(1\\times3\\) 乘 \\(3\\times1\\)，结果是 \\(1\\times1\\)，即一个标量。3. 对一般的 \\(z\\)：\\(z^\\top z=z_1^2+z_2^2+\\cdots+z_n^2=\\sum_{i=1}^n z_i^2\\)，也就是平方和（长度的平方）。",
    "1. Row times column: multiply matching entries and add, \\(1\\times6+3\\times4+4\\times5=6+12+20=38\\). 2. A \\(1\\times3\\) times a \\(3\\times1\\) gives a \\(1\\times1\\) result, i.e. a scalar. 3. For general \\(z\\): \\(z^\\top z=z_1^2+z_2^2+\\cdots+z_n^2=\\sum_{i=1}^n z_i^2\\), the sum of squares (squared length)."
   ],
   "answer": [
    "结果为 38（标量）；\\(z^\\top z=\\sum_{i=1}^n z_i^2\\)。",
    "The result is 38 (a scalar); \\(z^\\top z=\\sum_{i=1}^n z_i^2\\)."
   ],
   "pages": [
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    54
   ],
   "concepts": [
    "etx5500-matrix-transpose-inner-product",
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "matrix multiplication",
    "vector",
    "sum of squares"
   ]
  },
  {
   "id": "ex-etx5500-matrix-general-matrix-product",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "一般矩阵乘法：2×3 乘 3×2",
    "General matrix product: a 2x3 times a 3x2"
   ],
   "problem": [
    "设 \\(A=\\begin{bmatrix}a&b&c\\\\d&e&f\\end{bmatrix}\\)，\\(B=\\begin{bmatrix}g&h\\\\i&j\\\\k&l\\end{bmatrix}\\)。先检查乘积 \\(AB\\) 是否有定义及其维数，再写出 \\(AB\\) 的每个元素。",
    "Let \\(A=\\begin{bmatrix}a&b&c\\\\d&e&f\\end{bmatrix}\\) and \\(B=\\begin{bmatrix}g&h\\\\i&j\\\\k&l\\end{bmatrix}\\). Check whether \\(AB\\) is defined and find its dimension, then write each entry of \\(AB\\)."
   ],
   "solution": [
    "1. 检查清单：先看“内侧”维数，\\(A\\) 是 \\(2\\times3\\)、\\(B\\) 是 \\(3\\times2\\)，内侧都是 3，所以可乘（conformable）。2. 再看“外侧”维数，结果是 \\(2\\times2\\)。3. 第一行乘以每一列：\\((1,1)\\) 元素 \\(ag+bi+ck\\)，\\((1,2)\\) 元素 \\(ah+bj+cl\\)。4. 第二行：\\((2,1)\\) 元素 \\(dg+ei+fk\\)，\\((2,2)\\) 元素 \\(dh+ej+fl\\)。5. 注意反过来 \\(BA\\) 是 \\(3\\times2\\) 乘 \\(2\\times3\\)，也可乘但结果是 \\(3\\times3\\)，说明一般 \\(AB\\ne BA\\)，矩阵乘法不满足交换律。",
    "1. Checklist: compare the inside dimensions first - \\(A\\) is \\(2\\times3\\) and \\(B\\) is \\(3\\times2\\), both inner sizes are 3, so the product is conformable. 2. The outside dimensions give the result size: \\(2\\times2\\). 3. First row times each column: entry (1,1) is \\(ag+bi+ck\\) and entry (1,2) is \\(ah+bj+cl\\). 4. Second row: entry (2,1) is \\(dg+ei+fk\\) and entry (2,2) is \\(dh+ej+fl\\). 5. Note \\(BA\\) (a \\(3\\times2\\) by a \\(2\\times3\\)) is also defined but is \\(3\\times3\\), so in general \\(AB\\ne BA\\): matrix multiplication is not commutative."
   ],
   "answer": [
    "\\(AB=\\begin{bmatrix}ag+bi+ck&ah+bj+cl\\\\dg+ei+fk&dh+ej+fl\\end{bmatrix}\\)，大小 \\(2\\times2\\)。",
    "\\(AB=\\begin{bmatrix}ag+bi+ck&ah+bj+cl\\\\dg+ei+fk&dh+ej+fl\\end{bmatrix}\\), a \\(2\\times2\\) matrix."
   ],
   "pages": [
    55,
    56,
    57,
    58,
    59,
    60,
    61
   ],
   "concepts": [
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "matrix multiplication",
    "conformable",
    "dimension"
   ]
  },
  {
   "id": "ex-etx5500-matrix-regression-matrix-form",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "回归模型的矩阵形式与维数检查",
    "Regression model in matrix form: dimension check"
   ],
   "problem": [
    "线性回归模型 \\(y_i=\\beta_1x_{i1}+\\beta_2x_{i2}+\\dots+\\beta_kx_{ik}+\\varepsilon_i\\)，\\(i=1,\\dots,n\\)。把这 \\(n\\) 个方程写成矩阵形式，并写出 \\(y, X, \\beta, \\varepsilon\\) 各自的维数，验证乘法是否 conformable；若要含截距，\\(X\\) 应如何设置？",
    "The linear regression model is \\(y_i=\\beta_1x_{i1}+\\beta_2x_{i2}+\\dots+\\beta_kx_{ik}+\\varepsilon_i\\) for \\(i=1,\\dots,n\\). Write the \\(n\\) equations in matrix form, give the dimensions of \\(y, X, \\beta, \\varepsilon\\), check the multiplication is conformable, and say how to include an intercept."
   ],
   "solution": [
    "1. 把 \\(n\\) 个 \\(y_i\\) 叠成列向量 \\(y\\)，系数叠成 \\(\\beta\\)，误差叠成 \\(\\varepsilon\\)，\\(x_{ij}\\) 排成矩阵 \\(X\\)，则所有方程合写为 \\(y=X\\beta+\\varepsilon\\)。2. 维数：\\(y\\) 是 \\(n\\times1\\)（\\(y_i\\) 是第 \\(i\\) 个因变量观测）；\\(X\\) 是 \\(n\\times k\\)（\\(x_{ij}\\) 是第 \\(i\\) 个观测的第 \\(j\\) 个解释变量）；\\(\\beta\\) 是 \\(k\\times1\\)；\\(\\varepsilon\\) 是 \\(n\\times1\\)。3. 检查：\\(X\\beta\\) 是 \\((n\\times k)(k\\times1)\\)，内侧都是 \\(k\\)，结果 \\(n\\times1\\)，可与 \\(\\varepsilon\\) 相加，所以等式两边都是 \\(n\\times1\\)。4. 截距：令 \\(x_{i1}=1\\) 对所有 \\(i\\)（即 \\(X\\) 的第一列全为 1）。",
    "1. Stack the \\(y_i\\) into a column \\(y\\), the coefficients into \\(\\beta\\), the errors into \\(\\varepsilon\\) and the \\(x_{ij}\\) into a matrix \\(X\\); all equations then read \\(y=X\\beta+\\varepsilon\\). 2. Dimensions: \\(y\\) is \\(n\\times1\\) (\\(y_i\\) is the ith observation of the dependent variable); \\(X\\) is \\(n\\times k\\) (\\(x_{ij}\\) is the ith observation of the jth predictor); \\(\\beta\\) is \\(k\\times1\\); \\(\\varepsilon\\) is \\(n\\times1\\). 3. Check: \\(X\\beta\\) is \\((n\\times k)(k\\times1)\\), inner sizes both \\(k\\), giving \\(n\\times1\\), which can be added to \\(\\varepsilon\\); both sides are \\(n\\times1\\). 4. Intercept: set \\(x_{i1}=1\\) for all \\(i\\) (first column of \\(X\\) all ones)."
   ],
   "answer": [
    "\\(y=X\\beta+\\varepsilon\\)，维数 \\(n\\times1 = (n\\times k)(k\\times1)+n\\times1\\)，截距用全 1 的第一列。",
    "\\(y=X\\beta+\\varepsilon\\) with dimensions \\(n\\times1=(n\\times k)(k\\times1)+n\\times1\\); the intercept uses a first column of ones."
   ],
   "pages": [
    63,
    64,
    65
   ],
   "concepts": [
    "etx5500-matrix-regression-matrix-case",
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "regression",
    "matrix form",
    "dimension"
   ]
  },
  {
   "id": "ex-etx5500-matrix-covariance-matrix-2d",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "二维向量的方差协方差矩阵",
    "The variance-covariance matrix of a 2-dimensional vector"
   ],
   "problem": [
    "设 \\(y=\\begin{bmatrix}y_1\\\\y_2\\end{bmatrix}\\)，其中 \\(y_1,y_2\\) 是两个不同的变量，假设 \\(\\mu=0\\)。\\(yy^\\top\\) 的维数是多少？求 \\(\\Sigma=E[yy^\\top]\\) 的各个元素，并说明对角元与非对角元的含义，推广到 \\(p\\) 维情形。",
    "Let \\(y=\\begin{bmatrix}y_1\\\\y_2\\end{bmatrix}\\) where \\(y_1,y_2\\) are two different variables, and assume \\(\\mu=0\\). What is the dimension of \\(yy^\\top\\)? Find the entries of \\(\\Sigma=E[yy^\\top]\\), interpret the diagonal and off-diagonal elements, and generalise to \\(p\\) dimensions."
   ],
   "solution": [
    "1. \\(y\\) 是 \\(2\\times1\\)，\\(y^\\top\\) 是 \\(1\\times2\\)，所以 \\(yy^\\top\\) 是 \\(2\\times2\\) 矩阵。2. 展开：\\(yy^\\top=\\begin{bmatrix}y_1^2&y_1y_2\\\\y_2y_1&y_2^2\\end{bmatrix}\\)。3. 取期望：\\(\\Sigma=E[yy^\\top]=\\begin{bmatrix}E[y_1^2]&E[y_1y_2]\\\\E[y_2y_1]&E[y_2^2]\\end{bmatrix}\\)。4. 对角元 \\(E[y_i^2]\\) 是方差（均值为 0），非对角元 \\(E[y_1y_2]\\) 是协方差。5. 对 \\(p\\) 维向量，协方差矩阵是 \\(p\\times p\\)：第 \\((i,i)\\) 个元素是 \\(y_i\\) 的方差，第 \\((i,j)\\)（\\(i\\ne j\\)）个元素是 \\(y_i\\) 与 \\(y_j\\) 的协方差。一般情形的样本版本为 \\(S=\\frac{1}{n-1}\\sum_i(y_i-\\bar y)(y_i-\\bar y)^\\top\\)。",
    "1. \\(y\\) is \\(2\\times1\\) and \\(y^\\top\\) is \\(1\\times2\\), so \\(yy^\\top\\) is a \\(2\\times2\\) matrix. 2. Expanding: \\(yy^\\top=\\begin{bmatrix}y_1^2&y_1y_2\\\\y_2y_1&y_2^2\\end{bmatrix}\\). 3. Taking expectations: \\(\\Sigma=E[yy^\\top]=\\begin{bmatrix}E[y_1^2]&E[y_1y_2]\\\\E[y_2y_1]&E[y_2^2]\\end{bmatrix}\\). 4. The diagonal entries \\(E[y_i^2]\\) are variances (mean zero) and the off-diagonal entry \\(E[y_1y_2]\\) is the covariance. 5. For a \\(p\\)-vector the covariance matrix is \\(p\\times p\\): entry \\((i,i)\\) is the variance of \\(y_i\\) and entry \\((i,j)\\), \\(i\\ne j\\), is the covariance of \\(y_i\\) and \\(y_j\\). The sample version is \\(S=\\frac{1}{n-1}\\sum_i(y_i-\\bar y)(y_i-\\bar y)^\\top\\)."
   ],
   "answer": [
    "\\(yy^\\top\\) 为 \\(2\\times2\\)；\\(\\Sigma\\) 的对角元是方差，非对角元是协方差；\\(p\\) 维时为 \\(p\\times p\\) 的对称矩阵。",
    "\\(yy^\\top\\) is \\(2\\times2\\); the diagonal of \\(\\Sigma\\) holds variances and the off-diagonal holds covariances; for \\(p\\) variables it is \\(p\\times p\\) and symmetric."
   ],
   "pages": [
    66,
    67,
    68,
    69,
    70,
    71
   ],
   "concepts": [
    "etx5500-matrix-covariance-matrix"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "covariance",
    "variance",
    "symmetric"
   ]
  },
  {
   "id": "ex-etx5500-matrix-symmetric-matrix-proofs",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "对称矩阵的证明练习",
    "Symmetric matrix exercises"
   ],
   "problem": [
    "(a) 设 \\(x\\) 为 \\(n\\) 维列向量，求 \\(xx^\\top\\) 与 \\(x^\\top x\\) 的维数，并证明 \\(x^\\top x\\) 对称。(b) 设 \\(A\\) 为 \\(n\\times m\\) 矩阵，求 \\(AA^\\top\\) 的维数，并证明 \\(A^\\top A\\) 与 \\(AA^\\top\\) 都是对称矩阵。(c) 对任意方阵 \\(A\\)，证明 \\((A+A^\\top)/2\\) 对称。（矩阵 \\(M\\) 对称指 \\(M=M^\\top\\)。）",
    "(a) Let \\(x\\) be an \\(n\\)-dimensional column vector. Find the dimensions of \\(xx^\\top\\) and \\(x^\\top x\\), and show that \\(x^\\top x\\) is symmetric. (b) Let \\(A\\) be \\(n\\times m\\). Find the dimension of \\(AA^\\top\\) and show both \\(A^\\top A\\) and \\(AA^\\top\\) are symmetric. (c) For any square matrix \\(A\\), show that \\((A+A^\\top)/2\\) is symmetric. (A matrix \\(M\\) is symmetric if \\(M=M^\\top\\).)"
   ],
   "solution": [
    "说明：课件只提出这些问题、没有给出解答，下面是用课件列出的转置性质 \\((A^\\top)^\\top=A\\)、\\((A+B)^\\top=A^\\top+B^\\top\\)、\\((AB)^\\top=B^\\top A^\\top\\) 推出的证明。(a) \\(x\\) 是 \\(n\\times1\\)：\\(xx^\\top\\) 为 \\(n\\times n\\)，\\(x^\\top x\\) 为 \\(1\\times1\\)（标量）。\\((x^\\top x)^\\top=x^\\top(x^\\top)^\\top=x^\\top x\\)，故对称（标量显然等于自己的转置）。(b) \\(AA^\\top\\) 是 \\((n\\times m)(m\\times n)=n\\times n\\)；\\(A^\\top A\\) 是 \\(m\\times m\\)。\\((A^\\top A)^\\top=A^\\top(A^\\top)^\\top=A^\\top A\\)，\\((AA^\\top)^\\top=(A^\\top)^\\top A^\\top=AA^\\top\\)，都对称。(c) \\(\\left(\\tfrac{A+A^\\top}{2}\\right)^\\top=\\tfrac{A^\\top+(A^\\top)^\\top}{2}=\\tfrac{A^\\top+A}{2}=\\tfrac{A+A^\\top}{2}\\)，对称。注意对称矩阵必须是方阵。",
    "Note: the slides only pose these questions; the proofs below use the transpose rules listed on the slides, \\((A^\\top)^\\top=A\\), \\((A+B)^\\top=A^\\top+B^\\top\\), \\((AB)^\\top=B^\\top A^\\top\\). (a) \\(x\\) is \\(n\\times1\\): \\(xx^\\top\\) is \\(n\\times n\\) and \\(x^\\top x\\) is \\(1\\times1\\) (a scalar). \\((x^\\top x)^\\top=x^\\top(x^\\top)^\\top=x^\\top x\\), so it is symmetric (a scalar trivially equals its transpose). (b) \\(AA^\\top\\) is \\((n\\times m)(m\\times n)=n\\times n\\); \\(A^\\top A\\) is \\(m\\times m\\). \\((A^\\top A)^\\top=A^\\top(A^\\top)^\\top=A^\\top A\\) and \\((AA^\\top)^\\top=(A^\\top)^\\top A^\\top=AA^\\top\\), so both are symmetric. (c) \\(\\left(\\tfrac{A+A^\\top}{2}\\right)^\\top=\\tfrac{A^\\top+(A^\\top)^\\top}{2}=\\tfrac{A^\\top+A}{2}=\\tfrac{A+A^\\top}{2}\\), so it is symmetric. A symmetric matrix must be square."
   ],
   "answer": [
    "\\(xx^\\top\\) 为 \\(n\\times n\\)，\\(x^\\top x\\) 为 \\(1\\times1\\)；\\(AA^\\top\\) 为 \\(n\\times n\\)；\\(x^\\top x,\\ A^\\top A,\\ AA^\\top,\\ (A+A^\\top)/2\\) 都对称。",
    "\\(xx^\\top\\) is \\(n\\times n\\), \\(x^\\top x\\) is \\(1\\times1\\), \\(AA^\\top\\) is \\(n\\times n\\); \\(x^\\top x\\), \\(A^\\top A\\), \\(AA^\\top\\) and \\((A+A^\\top)/2\\) are all symmetric."
   ],
   "pages": [
    52,
    53,
    72,
    73
   ],
   "concepts": [
    "etx5500-matrix-covariance-matrix",
    "etx5500-matrix-transpose-inner-product"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "symmetric",
    "transpose",
    "proof"
   ]
  },
  {
   "id": "ex-etx5500-matrix-r-matrix-det-inverse",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "R 中的 3×3 矩阵：转置、行列式与逆矩阵",
    "A 3x3 matrix in R: transpose, determinant and inverse"
   ],
   "problem": [
    "在 R 中用 matrix(c(1,0,2,2,1,1,0,1,4), nrow=3, ncol=3, byrow=TRUE) 建立矩阵 \\(A=\\begin{bmatrix}1&0&2\\\\2&1&1\\\\0&1&4\\end{bmatrix}\\)。求 \\(A^\\top\\)、\\(\\det(A)\\)、\\(A^{-1}\\)，并验证 \\(AA^{-1}=I\\)。同时说明按列（默认）填充与 byrow=TRUE 的区别。",
    "In R build \\(A=\\begin{bmatrix}1&0&2\\\\2&1&1\\\\0&1&4\\end{bmatrix}\\) with matrix(c(1,0,2,2,1,1,0,1,4), nrow=3, ncol=3, byrow=TRUE). Find \\(A^\\top\\), \\(\\det(A)\\), \\(A^{-1}\\), and verify \\(AA^{-1}=I\\). Also explain the difference between the default column-wise fill and byrow=TRUE."
   ],
   "solution": [
    "1. R 默认按列优先（column major）存储：不加 byrow 时，同一数据向量会被填成 \\(\\begin{bmatrix}1&2&0\\\\0&1&1\\\\2&1&4\\end{bmatrix}\\)；加 byrow=TRUE 才按行填成上面的 \\(A\\)。2. 转置 t(amat)：\\(A^\\top=\\begin{bmatrix}1&2&0\\\\0&1&1\\\\2&1&4\\end{bmatrix}\\)。3. 行列式 det(amat) 的输出为 7（手算：\\(1(4-1)-0+2(2-0)=7\\)，非零所以可逆）。4. 逆矩阵 solve(amat) 的输出约为 \\(\\begin{bmatrix}0.4286&0.2857&-0.2857\\\\-1.1429&0.5714&0.4286\\\\0.2857&-0.1429&0.1429\\end{bmatrix}\\)，即 \\(\\tfrac17\\begin{bmatrix}3&2&-2\\\\-8&4&3\\\\2&-1&1\\end{bmatrix}\\)。5. amat %*% amat_inv 的输出是单位矩阵（个别位置是 \\(10^{-17}\\) 量级的浮点误差，如 \\(5.55\\times10^{-17}\\)）。",
    "1. R stores matrices column-major: without byrow the same data vector fills as \\(\\begin{bmatrix}1&2&0\\\\0&1&1\\\\2&1&4\\end{bmatrix}\\); byrow=TRUE fills row by row to give the \\(A\\) above. 2. Transpose t(amat): \\(A^\\top=\\begin{bmatrix}1&2&0\\\\0&1&1\\\\2&1&4\\end{bmatrix}\\). 3. det(amat) prints 7 (by hand: \\(1(4-1)-0+2(2-0)=7\\), non-zero so \\(A\\) is invertible). 4. solve(amat) prints approximately \\(\\begin{bmatrix}0.4286&0.2857&-0.2857\\\\-1.1429&0.5714&0.4286\\\\0.2857&-0.1429&0.1429\\end{bmatrix}\\), i.e. \\(\\tfrac17\\begin{bmatrix}3&2&-2\\\\-8&4&3\\\\2&-1&1\\end{bmatrix}\\). 5. amat %*% amat_inv prints the identity matrix, with floating-point noise of order \\(10^{-17}\\) (e.g. \\(5.55\\times10^{-17}\\))."
   ],
   "answer": [
    "\\(\\det(A)=7\\)；\\(A^{-1}=\\tfrac17\\begin{bmatrix}3&2&-2\\\\-8&4&3\\\\2&-1&1\\end{bmatrix}\\)；\\(AA^{-1}=I\\)（至浮点误差）。",
    "\\(\\det(A)=7\\); \\(A^{-1}=\\tfrac17\\begin{bmatrix}3&2&-2\\\\-8&4&3\\\\2&-1&1\\end{bmatrix}\\); \\(AA^{-1}=I\\) up to floating-point error."
   ],
   "pages": [
    92,
    93,
    94,
    99,
    100,
    101
   ],
   "concepts": [
    "etx5500-matrix-determinant",
    "etx5500-matrix-matrix-inverse",
    "etx5500-matrix-transpose-inner-product"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "R",
    "determinant",
    "inverse",
    "transpose"
   ]
  },
  {
   "id": "ex-etx5500-matrix-r-recycling-rbind",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "R 小测：rbind 与向量回收",
    "R check: rbind and recycling"
   ],
   "problem": [
    "课件提问：在 R 中执行 rbind(1:2, 1:3) 和 c(1, 2, 3, 4) + c(1, 2)，会得到什么？（提示：想想长度不同的向量如何处理。）",
    "The slides ask: what do you get in R from rbind(1:2, 1:3) and from c(1, 2, 3, 4) + c(1, 2)? (Hint: think about how vectors of different lengths are handled.)"
   ],
   "solution": [
    "说明：课件只提出了问题，没有给出输出；以下按 R 的标准回收（recycling）规则作答。1. rbind(1:2, 1:3) 把两个向量作为行粘合，较短的向量被回收补齐到长度 3，即第一行变成 1 2 1，第二行 1 2 3，得到 \\(2\\times3\\) 矩阵 \\(\\begin{bmatrix}1&2&1\\\\1&2&3\\end{bmatrix}\\)（因 3 不是 2 的倍数，R 会给出警告）。2. c(1,2,3,4) + c(1,2)：短向量重复为 (1,2,1,2)，逐元素相加得 (2,4,4,6)，因为 4 是 2 的倍数，没有警告。",
    "Note: the slides pose the question without showing the output; the answer below follows R's standard recycling rule. 1. rbind(1:2, 1:3) glues the vectors as rows, and the shorter one is recycled to length 3, so row 1 becomes 1 2 1 and row 2 is 1 2 3, giving the \\(2\\times3\\) matrix \\(\\begin{bmatrix}1&2&1\\\\1&2&3\\end{bmatrix}\\) (R warns because 3 is not a multiple of 2). 2. In c(1,2,3,4) + c(1,2) the short vector is repeated as (1,2,1,2) and added element by element, giving (2,4,4,6); no warning since 4 is a multiple of 2."
   ],
   "answer": [
    "rbind 得到 \\(\\begin{bmatrix}1&2&1\\\\1&2&3\\end{bmatrix}\\)（带警告）；向量加法得到 (2, 4, 4, 6)。",
    "rbind gives \\(\\begin{bmatrix}1&2&1\\\\1&2&3\\end{bmatrix}\\) (with a warning); the sum is (2, 4, 4, 6)."
   ],
   "pages": [
    95,
    96
   ],
   "concepts": [
    "etx5500-matrix-vectors-basis",
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "R",
    "recycling",
    "rbind"
   ]
  },
  {
   "id": "ex-etx5500-matrix-eigenvector-check",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "检验特征向量：A=[1 4; 1 1]",
    "Checking eigenvectors of A = [1 4; 1 1]"
   ],
   "problem": [
    "设 \\(A=\\begin{bmatrix}1&4\\\\1&1\\end{bmatrix}\\)，\\(x_1=\\begin{bmatrix}2\\\\1\\end{bmatrix}\\)，\\(x_2=\\begin{bmatrix}2\\\\-2\\end{bmatrix}\\)。判断 \\(x_1\\)、\\(x_2\\) 是否为 \\(A\\) 的特征向量，若是，对应的特征值是多少？",
    "Let \\(A=\\begin{bmatrix}1&4\\\\1&1\\end{bmatrix}\\), \\(x_1=\\begin{bmatrix}2\\\\1\\end{bmatrix}\\), \\(x_2=\\begin{bmatrix}2\\\\-2\\end{bmatrix}\\). Decide whether \\(x_1\\) and \\(x_2\\) are eigenvectors of \\(A\\); if so, find the eigenvalue."
   ],
   "solution": [
    "定义：特征向量 \\(v\\ne0\\) 满足 \\(Av=\\lambda v\\)。1. \\(Ax_1=\\begin{bmatrix}1\\cdot2+4\\cdot1\\\\1\\cdot2+1\\cdot1\\end{bmatrix}=\\begin{bmatrix}6\\\\3\\end{bmatrix}=3\\begin{bmatrix}2\\\\1\\end{bmatrix}=3x_1\\)，所以 3 是特征值，\\(x_1\\) 是对应的特征向量。2. \\(Ax_2=\\begin{bmatrix}1\\cdot2+4\\cdot(-2)\\\\1\\cdot2+1\\cdot(-2)\\end{bmatrix}=\\begin{bmatrix}-6\\\\0\\end{bmatrix}\\)，它不是 \\(x_2=(2,-2)^\\top\\) 的任何倍数（第二个分量要求 \\(c=0\\)，第一个分量要求 \\(c=-3\\)，矛盾），所以 \\(x_2\\) 不是特征向量。",
    "Definition: an eigenvector \\(v\\ne0\\) satisfies \\(Av=\\lambda v\\). 1. \\(Ax_1=\\begin{bmatrix}1\\cdot2+4\\cdot1\\\\1\\cdot2+1\\cdot1\\end{bmatrix}=\\begin{bmatrix}6\\\\3\\end{bmatrix}=3\\begin{bmatrix}2\\\\1\\end{bmatrix}=3x_1\\), so 3 is an eigenvalue and \\(x_1\\) is its eigenvector. 2. \\(Ax_2=\\begin{bmatrix}1\\cdot2+4\\cdot(-2)\\\\1\\cdot2+1\\cdot(-2)\\end{bmatrix}=\\begin{bmatrix}-6\\\\0\\end{bmatrix}\\), which is not a multiple of \\(x_2=(2,-2)^\\top\\) (the second entry forces \\(c=0\\), the first forces \\(c=-3\\)), so \\(x_2\\) is not an eigenvector."
   ],
   "answer": [
    "\\(x_1\\) 是特征向量，特征值为 3；\\(x_2\\) 不是特征向量。",
    "\\(x_1\\) is an eigenvector with eigenvalue 3; \\(x_2\\) is not an eigenvector."
   ],
   "pages": [
    103,
    104,
    105,
    106
   ],
   "concepts": [
    "etx5500-matrix-eigen-definition"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "eigenvalue",
    "eigenvector"
   ]
  },
  {
   "id": "ex-etx5500-matrix-class-activity-eigen",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "课堂练习：A=[4 2; 1 3] 的特征值与特征向量",
    "Class activity: eigenvalues and eigenvectors of A = [4 2; 1 3]"
   ],
   "problem": [
    "求 \\(A=\\begin{bmatrix}4&2\\\\1&3\\end{bmatrix}\\) 的特征值和特征向量，并用 \\(\\det(A)=\\prod\\lambda_j\\)、\\(\\mathrm{tr}(A)=\\sum\\lambda_j\\) 做检验。",
    "Find the eigenvalues and eigenvectors of \\(A=\\begin{bmatrix}4&2\\\\1&3\\end{bmatrix}\\), and check them with \\(\\det(A)=\\prod\\lambda_j\\) and \\(\\mathrm{tr}(A)=\\sum\\lambda_j\\)."
   ],
   "solution": [
    "说明：课件只给出题目，没有给出答案；以下按课件的方法（特征方程 \\(\\det(A-\\lambda I)=0\\)）求解。1. 特征方程：\\((4-\\lambda)(3-\\lambda)-2\\cdot1=0\\)，展开得 \\(\\lambda^2-7\\lambda+10=0\\)，即 \\((\\lambda-5)(\\lambda-2)=0\\)，故 \\(\\lambda_1=5,\\ \\lambda_2=2\\)。2. \\(\\lambda_1=5\\)：\\((A-5I)v=\\begin{bmatrix}-1&2\\\\1&-2\\end{bmatrix}v=0\\)，得 \\(v_1=2v_2\\)，取 \\(v=(2,1)^\\top\\)。3. \\(\\lambda_2=2\\)：\\((A-2I)v=\\begin{bmatrix}2&2\\\\1&1\\end{bmatrix}v=0\\)，得 \\(v_1=-v_2\\)，取 \\(v=(1,-1)^\\top\\)。4. 检验：\\(5\\times2=10=\\det(A)=4\\cdot3-2\\cdot1\\)；\\(5+2=7=\\mathrm{tr}(A)=4+3\\)。特征向量可乘任意非零常数。",
    "Note: the slides only pose the question; the solution below uses the slides' method (characteristic equation \\(\\det(A-\\lambda I)=0\\)). 1. Characteristic equation: \\((4-\\lambda)(3-\\lambda)-2\\cdot1=0\\), i.e. \\(\\lambda^2-7\\lambda+10=0=(\\lambda-5)(\\lambda-2)\\), so \\(\\lambda_1=5,\\ \\lambda_2=2\\). 2. For \\(\\lambda_1=5\\): \\((A-5I)v=\\begin{bmatrix}-1&2\\\\1&-2\\end{bmatrix}v=0\\) gives \\(v_1=2v_2\\); take \\(v=(2,1)^\\top\\). 3. For \\(\\lambda_2=2\\): \\((A-2I)v=\\begin{bmatrix}2&2\\\\1&1\\end{bmatrix}v=0\\) gives \\(v_1=-v_2\\); take \\(v=(1,-1)^\\top\\). 4. Check: \\(5\\times2=10=\\det(A)=4\\cdot3-2\\cdot1\\); \\(5+2=7=\\mathrm{tr}(A)=4+3\\). Eigenvectors may be rescaled by any non-zero constant."
   ],
   "answer": [
    "\\(\\lambda=5\\)，\\(v=(2,1)^\\top\\)；\\(\\lambda=2\\)，\\(v=(1,-1)^\\top\\)（行列式 10、迹 7 均吻合）。",
    "\\(\\lambda=5\\) with \\(v=(2,1)^\\top\\); \\(\\lambda=2\\) with \\(v=(1,-1)^\\top\\) (consistent with determinant 10 and trace 7)."
   ],
   "pages": [
    107,
    109,
    110,
    111,
    124
   ],
   "concepts": [
    "etx5500-matrix-eigen-definition",
    "etx5500-matrix-determinant"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "eigenvalue",
    "eigenvector",
    "characteristic equation",
    "trace"
   ]
  },
  {
   "id": "ex-etx5500-matrix-eigen-real-illustrations",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "实特征值的三个例子：对角、非对称、对称矩阵",
    "Real eigenvalues: diagonal, asymmetric and symmetric matrices"
   ],
   "problem": [
    "课件给出三个 \\(2\\times2\\) 矩阵及其特征对：(i) \\(A=\\begin{bmatrix}2&0\\\\0&0.5\\end{bmatrix}\\)，\\(\\lambda=2,\\,0.5\\)；(ii) \\(A=\\begin{bmatrix}3&1\\\\0&2\\end{bmatrix}\\)，\\(\\lambda=3,\\,2\\)，\\(v_1=(1,0)^\\top,\\ v_2=(-1,1)^\\top\\)；(iii) \\(A=\\begin{bmatrix}5&2\\\\2&5\\end{bmatrix}\\)，\\(\\lambda=7,\\,3\\)，\\(v_1=(1,1)^\\top,\\ v_2=(1,-1)^\\top\\)。验证 (ii)(iii) 中的特征对，并比较三种情形中两个特征向量的夹角。",
    "The slides list three \\(2\\times2\\) matrices with their eigenpairs: (i) \\(A=\\begin{bmatrix}2&0\\\\0&0.5\\end{bmatrix}\\), \\(\\lambda=2,\\,0.5\\); (ii) \\(A=\\begin{bmatrix}3&1\\\\0&2\\end{bmatrix}\\), \\(\\lambda=3,\\,2\\), \\(v_1=(1,0)^\\top,\\ v_2=(-1,1)^\\top\\); (iii) \\(A=\\begin{bmatrix}5&2\\\\2&5\\end{bmatrix}\\), \\(\\lambda=7,\\,3\\), \\(v_1=(1,1)^\\top,\\ v_2=(1,-1)^\\top\\). Verify the eigenpairs in (ii) and (iii) and compare the angle between the two eigenvectors in the three cases."
   ],
   "solution": [
    "1. (i) 对角矩阵：特征值就是对角元 2 和 0.5，特征向量沿坐标轴；点沿 x 轴拉伸 2 倍、沿 y 轴压缩为 0.5 倍，两特征向量夹角 90 度。2. (ii) \\(Av_1=\\begin{bmatrix}3\\\\0\\end{bmatrix}=3v_1\\)；\\(Av_2=\\begin{bmatrix}-3+1\\\\2\\end{bmatrix}=\\begin{bmatrix}-2\\\\2\\end{bmatrix}=2v_2\\)，吻合。点沿最大特征值 3 对应的主特征向量拉得更多；因 \\(v_1^\\top v_2=-1\\ne0\\)，夹角不是 90 度（矩阵不对称）。3. (iii) \\(Av_1=\\begin{bmatrix}7\\\\7\\end{bmatrix}=7v_1\\)；\\(Av_2=\\begin{bmatrix}3\\\\-3\\end{bmatrix}=3v_2\\)，吻合；\\(v_1^\\top v_2=1-1=0\\)，夹角为 90 度（对称矩阵）。4. 结论：实特征值表示变换只沿特征向量方向缩放、不旋转；对称矩阵的特征向量互相正交。",
    "1. (i) Diagonal matrix: the eigenvalues are the diagonal entries 2 and 0.5 with eigenvectors along the axes; points are stretched by 2 along the x-axis and squeezed by 0.5 along the y-axis; the eigenvectors are at 90 degrees. 2. (ii) \\(Av_1=\\begin{bmatrix}3\\\\0\\end{bmatrix}=3v_1\\); \\(Av_2=\\begin{bmatrix}-3+1\\\\2\\end{bmatrix}=\\begin{bmatrix}-2\\\\2\\end{bmatrix}=2v_2\\), as stated. Points are pulled most along the dominant eigenvector (largest \\(\\lambda=3\\)); since \\(v_1^\\top v_2=-1\\ne0\\), the angle is not 90 degrees (the matrix is asymmetric). 3. (iii) \\(Av_1=\\begin{bmatrix}7\\\\7\\end{bmatrix}=7v_1\\); \\(Av_2=\\begin{bmatrix}3\\\\-3\\end{bmatrix}=3v_2\\), as stated; \\(v_1^\\top v_2=1-1=0\\), so the angle is 90 degrees (symmetric matrix). 4. Conclusion: real eigenvalues mean pure scaling along eigenvector directions with no rotation; eigenvectors of a symmetric matrix are orthogonal."
   ],
   "answer": [
    "三例中特征对均成立；对角和对称矩阵的特征向量夹角为 90 度，非对称矩阵 (ii) 的不是。",
    "All stated eigenpairs check out; the eigenvectors are at 90 degrees for the diagonal and symmetric matrices but not for the asymmetric one in (ii)."
   ],
   "pages": [
    113,
    114,
    115,
    116,
    117,
    118
   ],
   "concepts": [
    "etx5500-matrix-eigen-geometry",
    "etx5500-matrix-eigen-definition",
    "etx5500-matrix-covariance-matrix"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "eigenvalue",
    "eigenvector",
    "symmetric",
    "geometry"
   ]
  },
  {
   "id": "ex-etx5500-matrix-eigen-complex-rotation",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "复特征值：缩放加旋转",
    "Complex eigenvalues: scaling and rotation"
   ],
   "problem": [
    "课件给出：\\(A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}\\) 的特征值为 \\(\\pm i\\)，特征向量 \\(v_1=(1,-i)^\\top\\)，变换是逆时针旋转 90 度；\\(\\begin{bmatrix}0&-2\\\\2&0\\end{bmatrix}\\) 的特征值为 \\(\\pm2i\\)，缩放 2 倍并旋转 90 度；\\(\\sqrt2\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}\\) 的特征值为 \\(\\sqrt2(1\\pm i)\\)，缩放 2 倍并旋转 45 度。请求 \\(A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}\\) 的特征值，验证 \\(v_1\\)，并说明特征值的模和辐角与缩放、旋转的关系。",
    "The slides state: \\(A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}\\) has eigenvalues \\(\\pm i\\) with \\(v_1=(1,-i)^\\top\\) and rotates points anticlockwise by 90 degrees; \\(\\begin{bmatrix}0&-2\\\\2&0\\end{bmatrix}\\) has eigenvalues \\(\\pm2i\\) (scale 2, rotation 90 degrees); \\(\\sqrt2\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}\\) has eigenvalues \\(\\sqrt2(1\\pm i)\\) (scale 2, rotation 45 degrees). Find the eigenvalues of \\(A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}\\), verify \\(v_1\\), and relate the modulus and angle of the eigenvalues to the scaling and rotation."
   ],
   "solution": [
    "1. 特征方程：\\(\\det\\begin{bmatrix}-\\lambda&-1\\\\1&-\\lambda\\end{bmatrix}=\\lambda^2+1=0\\)，没有实根，\\(\\lambda=\\pm i\\)。2. 验证 \\(v_1=(1,-i)^\\top\\)：\\(Av_1=\\begin{bmatrix}0\\cdot1+(-1)(-i)\\\\1\\cdot1+0\\end{bmatrix}=\\begin{bmatrix}i\\\\1\\end{bmatrix}=i\\begin{bmatrix}1\\\\-i\\end{bmatrix}=iv_1\\)，吻合。3. 没有实特征值说明没有任何实方向只被缩放，变换是纯旋转：点不被缩放，逆时针转 90 度。4. 对 \\(\\begin{bmatrix}0&-2\\\\2&0\\end{bmatrix}\\)，\\(\\lambda=\\pm2i\\)，模为 2，即缩放因子 2，辐角 90 度。5. 对 \\(\\sqrt2\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}\\)，\\(\\lambda=\\sqrt2(1\\pm i)\\)，模 \\(\\sqrt2\\cdot\\sqrt2=2\\)，辐角 45 度，所以缩放 2 倍并旋转 45 度。同理课件中 \\(\\tfrac{1}{2\\sqrt2}\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}\\) 的特征值模为 0.5，缩放 0.5 倍并旋转 45 度。",
    "1. Characteristic equation: \\(\\det\\begin{bmatrix}-\\lambda&-1\\\\1&-\\lambda\\end{bmatrix}=\\lambda^2+1=0\\), which has no real root, so \\(\\lambda=\\pm i\\). 2. Check \\(v_1=(1,-i)^\\top\\): \\(Av_1=\\begin{bmatrix}0\\cdot1+(-1)(-i)\\\\1\\cdot1+0\\end{bmatrix}=\\begin{bmatrix}i\\\\1\\end{bmatrix}=i\\begin{bmatrix}1\\\\-i\\end{bmatrix}=iv_1\\), as stated. 3. No real eigenvalue means no real direction is merely scaled; the map is a pure rotation: points are not scaled and turn anticlockwise by 90 degrees. 4. For \\(\\begin{bmatrix}0&-2\\\\2&0\\end{bmatrix}\\), \\(\\lambda=\\pm2i\\) has modulus 2 (scale factor 2) and angle 90 degrees. 5. For \\(\\sqrt2\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}\\), \\(\\lambda=\\sqrt2(1\\pm i)\\) has modulus \\(\\sqrt2\\cdot\\sqrt2=2\\) and angle 45 degrees: scale 2, rotate 45 degrees. Likewise the slides' \\(\\tfrac{1}{2\\sqrt2}\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}\\) has eigenvalue modulus 0.5: scale 0.5, rotate 45 degrees."
   ],
   "answer": [
    "\\(\\lambda=\\pm i\\)，变换为逆时针旋转 90 度；一般地，复特征值的模给出缩放因子，辐角给出旋转角。",
    "\\(\\lambda=\\pm i\\), a pure anticlockwise rotation by 90 degrees; in general the modulus of a complex eigenvalue gives the scale factor and its angle gives the rotation."
   ],
   "pages": [
    115,
    119,
    120,
    121,
    122,
    123
   ],
   "concepts": [
    "etx5500-matrix-eigen-geometry",
    "etx5500-matrix-rotation-matrix",
    "etx5500-matrix-eigen-definition"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "eigenvalue",
    "complex",
    "rotation"
   ]
  },
  {
   "id": "ex-etx5500-matrix-change-of-basis-matrix",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "基变换：M=[2 -1; 1 1] 作用在向量上",
    "Change of basis: the matrix M = [2 -1; 1 1] acting on vectors"
   ],
   "problem": [
    "设 \\(M=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}\\)。(a) \\(M\\) 把标准基 \\(b_1=(1,0)^\\top,\\ b_2=(0,1)^\\top\\) 分别移到哪里？(b) 对一般向量 \\(v=(x,y)^\\top\\)，写出 \\(v^*=Mv\\)。(c) 求 \\(v=(3,2)^\\top\\) 的像 \\(v^*\\)。",
    "Let \\(M=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}\\). (a) Where does \\(M\\) send the standard basis vectors \\(b_1=(1,0)^\\top\\) and \\(b_2=(0,1)^\\top\\)? (b) For a general \\(v=(x,y)^\\top\\) write down \\(v^*=Mv\\). (c) Find the image \\(v^*\\) of \\(v=(3,2)^\\top\\)."
   ],
   "solution": [
    "1. \\(Mb_1=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}\\begin{bmatrix}1\\\\0\\end{bmatrix}=\\begin{bmatrix}2\\\\1\\end{bmatrix}=b_1^*\\)，\\(Mb_2=\\begin{bmatrix}-1\\\\1\\end{bmatrix}=b_2^*\\)。即 \\(M\\) 的两列就是新基向量，它编码了 \\(b_1,b_2\\) 被移到哪里。2. 一般向量：\\(v^*=xb_1^*+yb_2^*=x\\begin{bmatrix}2\\\\1\\end{bmatrix}+y\\begin{bmatrix}-1\\\\1\\end{bmatrix}=\\begin{bmatrix}2x-y\\\\x+y\\end{bmatrix}=Mv\\)；\\(x,y\\) 是新基下的坐标，\\(v^*\\) 是标准基下的坐标。3. 也可看作 \\(M\\) 的每一行乘以列向量 \\(v\\)。4. 取 \\(v=(3,2)^\\top\\)：\\(v^*=\\begin{bmatrix}2\\cdot3-2\\\\3+2\\end{bmatrix}=\\begin{bmatrix}4\\\\5\\end{bmatrix}\\)。",
    "1. \\(Mb_1=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}\\begin{bmatrix}1\\\\0\\end{bmatrix}=\\begin{bmatrix}2\\\\1\\end{bmatrix}=b_1^*\\) and \\(Mb_2=\\begin{bmatrix}-1\\\\1\\end{bmatrix}=b_2^*\\). The columns of \\(M\\) are the new basis vectors: \\(M\\) encodes where \\(b_1,b_2\\) are moved. 2. For general \\(v\\): \\(v^*=xb_1^*+yb_2^*=x\\begin{bmatrix}2\\\\1\\end{bmatrix}+y\\begin{bmatrix}-1\\\\1\\end{bmatrix}=\\begin{bmatrix}2x-y\\\\x+y\\end{bmatrix}=Mv\\); \\(x,y\\) are coordinates in the new basis and \\(v^*\\) gives the coordinates in the standard basis. 3. Equivalently, multiply each row of \\(M\\) by the column \\(v\\). 4. For \\(v=(3,2)^\\top\\): \\(v^*=\\begin{bmatrix}2\\cdot3-2\\\\3+2\\end{bmatrix}=\\begin{bmatrix}4\\\\5\\end{bmatrix}\\)."
   ],
   "answer": [
    "\\(b_1\\to(2,1)^\\top\\)，\\(b_2\\to(-1,1)^\\top\\)；\\(Mv=(2x-y,\\ x+y)^\\top\\)；\\((3,2)^\\top\\mapsto(4,5)^\\top\\)。",
    "\\(b_1\\to(2,1)^\\top\\), \\(b_2\\to(-1,1)^\\top\\); \\(Mv=(2x-y,\\ x+y)^\\top\\); \\((3,2)^\\top\\mapsto(4,5)^\\top\\)."
   ],
   "pages": [
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135
   ],
   "concepts": [
    "etx5500-matrix-change-of-basis",
    "etx5500-matrix-vectors-basis"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "change of basis",
    "matrix",
    "linear transformation"
   ]
  },
  {
   "id": "ex-etx5500-matrix-matrix-new-variables",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "用矩阵构造新变量：头/脚数与平均/变化",
    "Creating new variables with a matrix: heads and feet, average and change"
   ],
   "problem": [
    "(a) 一个笼子里有 \\(c\\) 只鸡和 \\(r\\) 只兔，求矩阵把 (鸡数, 兔数) 变换成 (头数, 脚数)。(b) 一个国家 2016 年贸易赤字为 \\(x\\)，2017 年为 \\(y\\)，求矩阵把 (2016, 2017) 变换成 (两年平均赤字, 赤字变化量)。写出两个矩阵并说明各列的含义。",
    "(a) A cage has \\(c\\) chickens and \\(r\\) rabbits. Find the matrix that transforms (chickens, rabbits) into (number of heads, number of feet). (b) A country's trade deficit is \\(x\\) in 2016 and \\(y\\) in 2017. Find the matrix that transforms (2016, 2017) into (average deficit over the two years, change in the deficit). Write both matrices and explain the columns."
   ],
   "solution": [
    "思路：矩阵的第 \\(j\\) 列就是第 \\(j\\) 个标准基向量被送到的位置。(a) 每只鸡 1 个头、2 只脚，每只兔 1 个头、4 只脚，所以第一列 \\((1,2)^\\top\\)，第二列 \\((1,4)^\\top\\)：\\(\\begin{bmatrix}\\text{heads}\\\\\\text{feet}\\end{bmatrix}=\\begin{bmatrix}1&1\\\\2&4\\end{bmatrix}\\begin{bmatrix}c\\\\r\\end{bmatrix}\\)。(b) 若 2016 年为 1、2017 年为 0，则平均 0.5、变化 \\(0-1=-1\\)，第一列 \\((0.5,-1)^\\top\\)；若 2016 年为 0、2017 年为 1，则平均 0.5、变化 \\(+1\\)，第二列 \\((0.5,1)^\\top\\)：\\(\\begin{bmatrix}\\text{average}\\\\\\text{change}\\end{bmatrix}=\\begin{bmatrix}0.5&0.5\\\\-1&1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}\\)，即平均 \\(=(x+y)/2\\)，变化 \\(=y-x\\)。",
    "Idea: column \\(j\\) of the matrix is where the jth standard basis vector is sent. (a) Each chicken has 1 head and 2 feet, each rabbit 1 head and 4 feet, so column 1 is \\((1,2)^\\top\\) and column 2 is \\((1,4)^\\top\\): \\(\\begin{bmatrix}\\text{heads}\\\\\\text{feet}\\end{bmatrix}=\\begin{bmatrix}1&1\\\\2&4\\end{bmatrix}\\begin{bmatrix}c\\\\r\\end{bmatrix}\\). (b) With deficit 1 in 2016 and 0 in 2017 the average is 0.5 and the change is \\(0-1=-1\\), so column 1 is \\((0.5,-1)^\\top\\); with 0 in 2016 and 1 in 2017 the average is 0.5 and the change is \\(+1\\), so column 2 is \\((0.5,1)^\\top\\): \\(\\begin{bmatrix}\\text{average}\\\\\\text{change}\\end{bmatrix}=\\begin{bmatrix}0.5&0.5\\\\-1&1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}\\), i.e. average \\(=(x+y)/2\\) and change \\(=y-x\\)."
   ],
   "answer": [
    "(a) \\(\\begin{bmatrix}1&1\\\\2&4\\end{bmatrix}\\)；(b) \\(\\begin{bmatrix}0.5&0.5\\\\-1&1\\end{bmatrix}\\)。",
    "(a) \\(\\begin{bmatrix}1&1\\\\2&4\\end{bmatrix}\\); (b) \\(\\begin{bmatrix}0.5&0.5\\\\-1&1\\end{bmatrix}\\)."
   ],
   "pages": [
    136,
    137,
    138,
    139
   ],
   "concepts": [
    "etx5500-matrix-change-of-basis",
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "matrix",
    "new variables",
    "change of basis"
   ]
  },
  {
   "id": "ex-etx5500-matrix-non-square-matrix",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "非方阵：3×2 矩阵把 2 维映射到 3 维",
    "Non-square matrix: a 3x2 matrix maps 2D to 3D"
   ],
   "problem": [
    "设 \\(M=\\begin{bmatrix}1&1\\\\1&0\\\\0&1\\end{bmatrix}\\)，\\(v=\\begin{bmatrix}x\\\\y\\end{bmatrix}\\)。计算 \\(Mv\\)，并说明输入、输出的维数以及像点所在的位置。",
    "Let \\(M=\\begin{bmatrix}1&1\\\\1&0\\\\0&1\\end{bmatrix}\\) and \\(v=\\begin{bmatrix}x\\\\y\\end{bmatrix}\\). Compute \\(Mv\\) and state the input and output dimensions and where the image points lie."
   ],
   "solution": [
    "1. \\(Mv=x\\begin{bmatrix}1\\\\1\\\\0\\end{bmatrix}+y\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}=\\begin{bmatrix}x+y\\\\x\\\\y\\end{bmatrix}\\)，即 \\(M\\) 的列的线性组合。2. \\(M\\) 是 \\(3\\times2\\)，输入是 2 维向量、输出是 3 维向量：乘以非方阵会改变维数（\\((3\\times2)(2\\times1)=3\\times1\\)）。3. 虽然输出在 3 维空间中，所有像点仍落在 3 维空间里的一个 2 维子空间（由两列张成的平面）上。",
    "1. \\(Mv=x\\begin{bmatrix}1\\\\1\\\\0\\end{bmatrix}+y\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}=\\begin{bmatrix}x+y\\\\x\\\\y\\end{bmatrix}\\), a linear combination of the columns of \\(M\\). 2. \\(M\\) is \\(3\\times2\\): the input is a 2D vector and the output a 3D vector, so a non-square matrix changes the dimension (\\((3\\times2)(2\\times1)=3\\times1\\)). 3. Although the output lives in 3D, all image points still lie in a 2D subspace (the plane spanned by the two columns) of 3D space."
   ],
   "answer": [
    "\\(Mv=(x+y,\\ x,\\ y)^\\top\\)；2 维输入变成 3 维输出，像点位于 3 维空间中的一个 2 维子空间。",
    "\\(Mv=(x+y,\\ x,\\ y)^\\top\\); a 2D input becomes a 3D output, with image points in a 2D subspace of 3D space."
   ],
   "pages": [
    140,
    141,
    142,
    143
   ],
   "concepts": [
    "etx5500-matrix-change-of-basis",
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "non-square",
    "linear transformation",
    "dimension"
   ]
  },
  {
   "id": "ex-etx5500-matrix-inner-product-length",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "内积、向量长度与正交",
    "Inner product, length and orthogonality"
   ],
   "problem": [
    "设 \\(v=\\begin{bmatrix}3\\\\4\\end{bmatrix}\\)。用内积求 \\(v\\) 的长度；并说明两个向量 \\(x,y\\) 在 \\(x^\\top y=0\\) 时有什么几何关系。",
    "Let \\(v=\\begin{bmatrix}3\\\\4\\end{bmatrix}\\). Use the inner product to find the length of \\(v\\), and say what the condition \\(x^\\top y=0\\) means geometrically for two vectors."
   ],
   "solution": [
    "1. 内积定义为 \\(x^\\top y\\)；向量自己的内积 \\(x^\\top x\\) 是长度的平方。2. \\(v^\\top v=3^2+4^2=9+16=25\\)，所以长度为 \\(\\sqrt{25}=5\\)。3. 当 \\(x^\\top y=0\\) 时，两向量成 90 度夹角，称为正交（orthogonal）。",
    "1. The inner product is \\(x^\\top y\\); the inner product of a vector with itself, \\(x^\\top x\\), is its squared length. 2. \\(v^\\top v=3^2+4^2=9+16=25\\), so the length is \\(\\sqrt{25}=5\\). 3. When \\(x^\\top y=0\\) the two vectors are at 90 degrees to each other, called orthogonal."
   ],
   "answer": [
    "\\(v\\) 的长度为 5；\\(x^\\top y=0\\) 表示 \\(x,y\\) 正交（夹角 90 度）。",
    "The length of \\(v\\) is 5; \\(x^\\top y=0\\) means \\(x\\) and \\(y\\) are orthogonal (at 90 degrees)."
   ],
   "pages": [
    145,
    146
   ],
   "concepts": [
    "etx5500-matrix-transpose-inner-product"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "inner product",
    "length",
    "orthogonality"
   ]
  },
  {
   "id": "ex-etx5500-matrix-rotation-matrix-check",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "验证旋转矩阵 R=[0.8 -0.6; 0.6 0.8]",
    "Verifying the rotation matrix R = [0.8 -0.6; 0.6 0.8]"
   ],
   "problem": [
    "课件给出二维旋转矩阵 \\(R=\\begin{bmatrix}0.8&-0.6\\\\0.6&0.8\\end{bmatrix}\\)。验证它的列是单位长度且互相正交，并检查 \\(R^\\top R=I\\)、\\(\\det(R)=1\\)，说明 \\(R^{-1}\\) 是什么。",
    "The slides give the 2D rotation matrix \\(R=\\begin{bmatrix}0.8&-0.6\\\\0.6&0.8\\end{bmatrix}\\). Verify that its columns have unit length and are orthogonal, check \\(R^\\top R=I\\) and \\(\\det(R)=1\\), and say what \\(R^{-1}\\) is."
   ],
   "solution": [
    "设列为 \\(r_1=(0.8,0.6)^\\top,\\ r_2=(-0.6,0.8)^\\top\\)。1. 长度：\\(r_1^\\top r_1=0.64+0.36=1\\)，\\(r_2^\\top r_2=0.36+0.64=1\\)，都是单位向量。2. 正交：\\(r_1^\\top r_2=0.8(-0.6)+0.6(0.8)=-0.48+0.48=0\\)。3. 因此 \\(R^\\top R=\\begin{bmatrix}r_1^\\top r_1&r_1^\\top r_2\\\\r_2^\\top r_1&r_2^\\top r_2\\end{bmatrix}=I\\)，同理 \\(RR^\\top=I\\)，这说明 \\(R^\\top=R^{-1}\\)。4. 行列式：\\(0.8\\cdot0.8-(-0.6)(0.6)=0.64+0.36=1\\)，满足 \\(\\det(R)=1\\)。所以 \\(R\\) 旋转点而保持它们到原点的距离及彼此距离不变。",
    "Write the columns as \\(r_1=(0.8,0.6)^\\top\\) and \\(r_2=(-0.6,0.8)^\\top\\). 1. Length: \\(r_1^\\top r_1=0.64+0.36=1\\) and \\(r_2^\\top r_2=0.36+0.64=1\\), so both are unit vectors. 2. Orthogonality: \\(r_1^\\top r_2=0.8(-0.6)+0.6(0.8)=-0.48+0.48=0\\). 3. Hence \\(R^\\top R=\\begin{bmatrix}r_1^\\top r_1&r_1^\\top r_2\\\\r_2^\\top r_1&r_2^\\top r_2\\end{bmatrix}=I\\), and likewise \\(RR^\\top=I\\), so \\(R^\\top=R^{-1}\\). 4. Determinant: \\(0.8\\cdot0.8-(-0.6)(0.6)=0.64+0.36=1\\), so \\(\\det(R)=1\\). Thus \\(R\\) spins points while preserving distances to the origin and between points."
   ],
   "answer": [
    "列为单位正交向量，\\(R^\\top R=RR^\\top=I\\)，\\(R^{-1}=R^\\top\\)，\\(\\det(R)=1\\)。",
    "The columns are orthonormal, \\(R^\\top R=RR^\\top=I\\), \\(R^{-1}=R^\\top\\), and \\(\\det(R)=1\\)."
   ],
   "pages": [
    147,
    148,
    149,
    150
   ],
   "concepts": [
    "etx5500-matrix-rotation-matrix",
    "etx5500-matrix-transpose-inner-product",
    "etx5500-matrix-matrix-inverse"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "rotation",
    "orthogonal",
    "inverse"
   ]
  },
  {
   "id": "ex-etx5500-matrix-tutorial-vectors",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "练习：向量运算 a, b, c",
    "Tutorial: vector calculations with a, b, c"
   ],
   "problem": [
    "设 \\(\\mathbf{a}=\\begin{bmatrix}2\\\\4\\end{bmatrix}\\)，\\(\\mathbf{b}=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\)，\\(\\mathbf{c}=\\begin{bmatrix}-2\\\\1\\end{bmatrix}\\)。不用 R，按矩阵乘法计算：(1) \\(\\mathbf{a}+\\mathbf{b}\\)；(2) \\(\\mathbf{a}^\\top\\mathbf{a}\\)；(3) \\(\\mathbf{a}^\\top\\mathbf{b}\\)；(4) \\(\\mathbf{a}^\\top\\mathbf{c}\\)；(5) \\(\\mathbf{a}\\mathbf{b}^\\top\\)。",
    "Let \\(\\mathbf{a}=\\begin{bmatrix}2\\\\4\\end{bmatrix}\\), \\(\\mathbf{b}=\\begin{bmatrix}1\\\\0\\end{bmatrix}\\), \\(\\mathbf{c}=\\begin{bmatrix}-2\\\\1\\end{bmatrix}\\). Without R, treating all products as matrix multiplication, compute (1) \\(\\mathbf{a}+\\mathbf{b}\\); (2) \\(\\mathbf{a}^\\top\\mathbf{a}\\); (3) \\(\\mathbf{a}^\\top\\mathbf{b}\\); (4) \\(\\mathbf{a}^\\top\\mathbf{c}\\); (5) \\(\\mathbf{a}\\mathbf{b}^\\top\\)."
   ],
   "solution": [
    "1. \\(\\mathbf{a}+\\mathbf{b}=(2+1,\\,4+0)^\\top=(3,4)^\\top\\)。2. \\(\\mathbf{a}^\\top\\mathbf{a}=2^2+4^2=4+16=20\\)（\\(1\\times1\\)）。3. \\(\\mathbf{a}^\\top\\mathbf{b}=2\\cdot1+4\\cdot0=2\\)。4. \\(\\mathbf{a}^\\top\\mathbf{c}=2(-2)+4(1)=0\\)，所以 \\(\\mathbf{a}\\) 与 \\(\\mathbf{c}\\) 正交。5. \\(\\mathbf{a}\\mathbf{b}^\\top\\) 是 \\((2\\times1)(1\\times2)=2\\times2\\)：\\(\\begin{bmatrix}2\\\\4\\end{bmatrix}\\begin{bmatrix}1&0\\end{bmatrix}=\\begin{bmatrix}2&0\\\\4&0\\end{bmatrix}\\)。这些结果与 R 输出（t(a) %*% a 为 20 等）一致。",
    "1. \\(\\mathbf{a}+\\mathbf{b}=(2+1,\\,4+0)^\\top=(3,4)^\\top\\). 2. \\(\\mathbf{a}^\\top\\mathbf{a}=2^2+4^2=4+16=20\\) (a \\(1\\times1\\)). 3. \\(\\mathbf{a}^\\top\\mathbf{b}=2\\cdot1+4\\cdot0=2\\). 4. \\(\\mathbf{a}^\\top\\mathbf{c}=2(-2)+4(1)=0\\), so \\(\\mathbf{a}\\) and \\(\\mathbf{c}\\) are orthogonal. 5. \\(\\mathbf{a}\\mathbf{b}^\\top\\) is \\((2\\times1)(1\\times2)=2\\times2\\): \\(\\begin{bmatrix}2\\\\4\\end{bmatrix}\\begin{bmatrix}1&0\\end{bmatrix}=\\begin{bmatrix}2&0\\\\4&0\\end{bmatrix}\\). These agree with the R output (e.g. t(a) %*% a gives 20)."
   ],
   "answer": [
    "(3,4)；20；2；0；\\(\\begin{bmatrix}2&0\\\\4&0\\end{bmatrix}\\)。",
    "(3,4); 20; 2; 0; \\(\\begin{bmatrix}2&0\\\\4&0\\end{bmatrix}\\)."
   ],
   "pages": [],
   "concepts": [
    "etx5500-matrix-vectors-basis",
    "etx5500-matrix-transpose-inner-product"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "tutorial",
    "vector",
    "inner product",
    "outer product"
   ]
  },
  {
   "id": "ex-etx5500-matrix-tutorial-matrices",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "练习：矩阵 X 与 Y 的加法和乘法",
    "Tutorial: sums and products of the matrices X and Y"
   ],
   "problem": [
    "设 \\(\\mathbf{X}=\\begin{bmatrix}1&2\\\\1&4\\\\0&-1\\end{bmatrix}\\)，\\(\\mathbf{Y}=\\begin{bmatrix}2&-1\\\\3&0\\\\3&-1\\end{bmatrix}\\)。不用 R，按矩阵乘法计算 \\(\\mathbf{X}+\\mathbf{Y}\\)、\\(\\mathbf{X}\\mathbf{Y}\\) 和 \\(\\mathbf{X}^\\top\\mathbf{Y}\\)；若某个运算无法进行请说明原因。",
    "Let \\(\\mathbf{X}=\\begin{bmatrix}1&2\\\\1&4\\\\0&-1\\end{bmatrix}\\) and \\(\\mathbf{Y}=\\begin{bmatrix}2&-1\\\\3&0\\\\3&-1\\end{bmatrix}\\). Without R, compute \\(\\mathbf{X}+\\mathbf{Y}\\), \\(\\mathbf{X}\\mathbf{Y}\\) and \\(\\mathbf{X}^\\top\\mathbf{Y}\\); explain if any operation is impossible."
   ],
   "solution": [
    "1. 两个矩阵都是 \\(3\\times2\\)，可相加：\\(\\mathbf{X}+\\mathbf{Y}=\\begin{bmatrix}3&1\\\\4&4\\\\3&-2\\end{bmatrix}\\)。2. \\(\\mathbf{X}\\mathbf{Y}\\) 是 \\((3\\times2)(3\\times2)\\)，内侧维数 2 与 3 不相等，不可乘（non-conformable）。3. \\(\\mathbf{X}^\\top\\) 是 \\(2\\times3\\)，所以 \\(\\mathbf{X}^\\top\\mathbf{Y}\\) 是 \\((2\\times3)(3\\times2)=2\\times2\\)：(1,1) 元素 \\(1\\cdot2+1\\cdot3+0\\cdot3=5\\)；(1,2) 元素 \\(1(-1)+1\\cdot0+0(-1)=-1\\)；(2,1) 元素 \\(2\\cdot2+4\\cdot3+(-1)\\cdot3=13\\)；(2,2) 元素 \\(2(-1)+4\\cdot0+(-1)(-1)=-1\\)。",
    "1. Both matrices are \\(3\\times2\\), so they can be added: \\(\\mathbf{X}+\\mathbf{Y}=\\begin{bmatrix}3&1\\\\4&4\\\\3&-2\\end{bmatrix}\\). 2. \\(\\mathbf{X}\\mathbf{Y}\\) would be \\((3\\times2)(3\\times2)\\); the inner dimensions 2 and 3 differ, so it is non-conformable. 3. \\(\\mathbf{X}^\\top\\) is \\(2\\times3\\), so \\(\\mathbf{X}^\\top\\mathbf{Y}\\) is \\((2\\times3)(3\\times2)=2\\times2\\): entry (1,1) is \\(1\\cdot2+1\\cdot3+0\\cdot3=5\\); (1,2) is \\(1(-1)+1\\cdot0+0(-1)=-1\\); (2,1) is \\(2\\cdot2+4\\cdot3+(-1)\\cdot3=13\\); (2,2) is \\(2(-1)+4\\cdot0+(-1)(-1)=-1\\)."
   ],
   "answer": [
    "\\(\\mathbf{X}+\\mathbf{Y}=\\begin{bmatrix}3&1\\\\4&4\\\\3&-2\\end{bmatrix}\\)；\\(\\mathbf{X}\\mathbf{Y}\\) 不可乘；\\(\\mathbf{X}^\\top\\mathbf{Y}=\\begin{bmatrix}5&-1\\\\13&-1\\end{bmatrix}\\)。",
    "\\(\\mathbf{X}+\\mathbf{Y}=\\begin{bmatrix}3&1\\\\4&4\\\\3&-2\\end{bmatrix}\\); \\(\\mathbf{X}\\mathbf{Y}\\) is non-conformable; \\(\\mathbf{X}^\\top\\mathbf{Y}=\\begin{bmatrix}5&-1\\\\13&-1\\end{bmatrix}\\)."
   ],
   "pages": [],
   "concepts": [
    "etx5500-matrix-matrix-multiplication",
    "etx5500-matrix-transpose-inner-product"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "tutorial",
    "matrix",
    "conformable",
    "transpose"
   ]
  },
  {
   "id": "ex-etx5500-matrix-tutorial-data-matrix",
   "course": "ETX5500",
   "topic": "e5500-matrix",
   "topicName": [
    "矩阵基础",
    "Matrix basics"
   ],
   "title": [
    "练习：数据矩阵 Y 与样本协方差矩阵 S",
    "Tutorial: the data matrix Y and the sample covariance matrix S"
   ],
   "problem": [
    "数据矩阵 \\(\\mathbf{Y}\\) 为 \\(n\\times p\\)，元素 \\(y_{ij}\\) 是第 \\(i\\) 个观测在第 \\(j\\) 个变量上的取值。问：(a) \\(\\mathbf{Y}\\) 有多少行、多少列、维数是多少？(b) \\(\\mathbf{Y}^\\top\\mathbf{Y}\\) 何时对称？(c) 求 \\(\\mathbf{S}=\\frac{1}{n-1}\\mathbf{Y}^\\top\\mathbf{Y}\\) 第 1 行第 1 列的表达式，并解释其含义。",
    "The data matrix \\(\\mathbf{Y}\\) is \\(n\\times p\\) with \\(y_{ij}\\) the value of observation \\(i\\) on variable \\(j\\). (a) How many rows and columns does \\(\\mathbf{Y}\\) have, and what are its dimensions? (b) When is \\(\\mathbf{Y}^\\top\\mathbf{Y}\\) symmetric? (c) Find an expression for the (1,1) element of \\(\\mathbf{S}=\\frac{1}{n-1}\\mathbf{Y}^\\top\\mathbf{Y}\\) and interpret it."
   ],
   "solution": [
    "1. 每个观测是一行，所以有 \\(n\\) 行；每个变量是一列，所以有 \\(p\\) 列；维数为 \\(n\\times p\\)。2. \\(\\mathbf{Y}^\\top\\mathbf{Y}\\) 无论 \\(\\mathbf{Y}\\) 取什么值都对称（因为 \\((\\mathbf{Y}^\\top\\mathbf{Y})^\\top=\\mathbf{Y}^\\top\\mathbf{Y}\\)），它是 \\(p\\times p\\)。3. (1,1) 元素是第一列 \\((y_{11},y_{21},\\dots,y_{n1})\\) 与自身的内积：\\(y_{11}^2+y_{21}^2+\\dots+y_{n1}^2\\)，再除以 \\(n-1\\)，得 \\(\\frac{1}{n-1}\\sum_{i=1}^n y_{i1}^2\\)。4. 如果变量均值为零，这就是第一个变量的样本方差。",
    "1. Each observation is a row, so there are \\(n\\) rows; each variable is a column, so there are \\(p\\) columns; the dimension is \\(n\\times p\\). 2. \\(\\mathbf{Y}^\\top\\mathbf{Y}\\) is symmetric regardless of the values in \\(\\mathbf{Y}\\) (since \\((\\mathbf{Y}^\\top\\mathbf{Y})^\\top=\\mathbf{Y}^\\top\\mathbf{Y}\\)); it is \\(p\\times p\\). 3. The (1,1) element is the first column \\((y_{11},y_{21},\\dots,y_{n1})\\) multiplied by its own transpose: \\(y_{11}^2+y_{21}^2+\\dots+y_{n1}^2\\); dividing by \\(n-1\\) gives \\(\\frac{1}{n-1}\\sum_{i=1}^n y_{i1}^2\\). 4. If the variables have mean zero, this is the sample variance of the first variable."
   ],
   "answer": [
    "\\(n\\) 行、\\(p\\) 列，\\(n\\times p\\)；\\(\\mathbf{Y}^\\top\\mathbf{Y}\\) 恒对称；\\(S_{11}=\\frac{1}{n-1}\\sum_i y_{i1}^2\\)，均值为零时即样本方差。",
    "\\(n\\) rows, \\(p\\) columns, \\(n\\times p\\); \\(\\mathbf{Y}^\\top\\mathbf{Y}\\) is always symmetric; \\(S_{11}=\\frac{1}{n-1}\\sum_i y_{i1}^2\\), the sample variance when the mean is zero."
   ],
   "pages": [],
   "concepts": [
    "etx5500-matrix-covariance-matrix",
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "matrix_basics.pdf",
   "tags": [
    "tutorial",
    "data matrix",
    "covariance",
    "symmetric"
   ]
  },
  {
   "id": "ex-etx5500-distance-pink-orange-green",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "三个人谁最相似：Euclidean 距离",
    "Which two of Pink, Orange, Green are most similar?"
   ],
   "problem": [
    "三位个体的（年龄，年收入（千元））为：Mr Pink \\(P=(31,67)\\)，Mr Orange \\(O=(37,75)\\)，Mr Green \\(G=(30,68)\\)。用勾股定理为每一对计算距离，并判断哪一对最相似。",
    "Three individuals described by (age, income in thousands of dollars): Mr Pink \\(P=(31,67)\\), Mr Orange \\(O=(37,75)\\), Mr Green \\(G=(30,68)\\). Use Pythagoras' theorem to compute the distance for each pair and decide which pair is the most similar."
   ],
   "solution": [
    "1. 距离就是两点连线作为斜边的直角三角形：横向差为年龄差，纵向差为收入差，所以 \\(D=\\sqrt{(\\Delta\\text{age})^2+(\\Delta\\text{income})^2}\\)。\n2. P 与 O：差为 \\((6,8)\\)，\\(D(P,O)=\\sqrt{36+64}=10\\)。\n3. P 与 G：差为 \\((1,1)\\)，\\(D(P,G)=\\sqrt{1+1}=\\sqrt2\\approx1.41\\)。\n4. O 与 G：差为 \\((7,7)\\)，\\(D(O,G)=\\sqrt{49+49}=7\\sqrt2\\approx9.90\\)。\n5. 比较三个数，最小的是 P 与 G。（幻灯片在散点图上提出该问题，具体数值由上述公式算出。）",
    "1. The distance is the hypotenuse of a right triangle whose legs are the age gap and the income gap: \\(D=\\sqrt{(\\Delta\\text{age})^2+(\\Delta\\text{income})^2}\\).\n2. P and O: differences \\((6,8)\\), so \\(D(P,O)=\\sqrt{36+64}=10\\).\n3. P and G: differences \\((1,1)\\), so \\(D(P,G)=\\sqrt2\\approx1.41\\).\n4. O and G: differences \\((7,7)\\), so \\(D(O,G)=7\\sqrt2\\approx9.90\\).\n5. The smallest is P-G. (The slides pose the question on a scatter plot; the numbers here come from applying the stated formula to the given data.)"
   ],
   "answer": [
    "Pink 与 Green 最相似，\\(D=\\sqrt2\\approx1.41\\)；Pink-Orange 为 10，Orange-Green 约 9.90。",
    "Pink and Green are most similar with \\(D=\\sqrt2\\approx1.41\\); Pink-Orange is 10 and Orange-Green is about 9.90."
   ],
   "pages": [
    4,
    5,
    6,
    17
   ],
   "concepts": [
    "etx5500-distance-euclidean-manhattan",
    "etx5500-distance-standardising",
    "etx5500-distance-why-distance"
   ],
   "source": "distance.pdf",
   "tags": [
    "Euclidean",
    "distance"
   ]
  },
  {
   "id": "ex-etx5500-distance-axioms-matrix",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "这是一个距离矩阵吗？检验距离公理",
    "Is this a valid matrix of pairwise distances?"
   ],
   "problem": [
    "对点 x, y, z，给出如下成对距离矩阵：行/列顺序 x,y,z；第 x 行 (0, 2, 1)，第 y 行 (2, 0, 4)，第 z 行 (1, 4, 0)。问：它是否可以是一个距离矩阵？请用距离的四条公理检验。",
    "For points x, y, z the pairwise matrix (rows and columns ordered x, y, z) is: x-row (0, 2, 1), y-row (2, 0, 4), z-row (1, 4, 0). Could this be a matrix of distances? Test it against the four distance axioms."
   ],
   "solution": [
    "1. 非负性：所有元素都 \\(\\ge 0\\)，满足。\n2. 对称性：\\(d(x,y)=d(y,x)=2\\)，\\(d(x,z)=d(z,x)=1\\)，\\(d(y,z)=d(z,y)=4\\)，矩阵对称，满足。\n3. 同一性：对角线为 0，且非对角元素都为正，满足。\n4. 三角不等式：取 \\(d(y,z)\\le d(y,x)+d(x,z)\\)，即 \\(4\\le 2+1=3\\)，不成立。\n5. 因此违反第 4 条公理，它不是距离矩阵。（幻灯片只提出问题，此答案由四条公理直接检验得到。）",
    "1. Non-negativity: every entry is \\(\\ge 0\\); holds.\n2. Symmetry: \\(d(x,y)=d(y,x)=2\\), \\(d(x,z)=d(z,x)=1\\), \\(d(y,z)=d(z,y)=4\\); holds.\n3. Identity: the diagonal is 0 and all off-diagonal entries are positive; holds.\n4. Triangle inequality: \\(d(y,z)\\le d(y,x)+d(x,z)\\) would need \\(4\\le 2+1=3\\), which is false.\n5. Axiom 4 fails, so this is not a distance matrix. (The slide only poses the question; the verdict follows from checking the axioms.)"
   ],
   "answer": [
    "不是。三角不等式失效：\\(d(y,z)=4>d(y,x)+d(x,z)=3\\)。",
    "No. The triangle inequality fails: \\(d(y,z)=4>d(y,x)+d(x,z)=3\\)."
   ],
   "pages": [
    21,
    22
   ],
   "concepts": [
    "etx5500-distance-axiom-check-case",
    "etx5500-distance-axioms"
   ],
   "source": "distance.pdf",
   "tags": [
    "axioms",
    "triangle inequality"
   ]
  },
  {
   "id": "ex-etx5500-distance-units-income",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "单位如何影响 Euclidean 距离",
    "How units of measurement drive the Euclidean distance"
   ],
   "problem": [
    "两个人：A 身高 170 cm、体重 60 kg、收入 30000 元；B 身高 160 cm、体重 62 kg、收入 40000 元。计算两人的 Euclidean 距离，并说明为什么通常要先标准化。",
    "Person A: height 170 cm, weight 60 kg, income 30000 dollars. Person B: height 160 cm, weight 62 kg, income 40000 dollars. Compute the Euclidean distance between A and B and explain why data are usually standardised first."
   ],
   "solution": [
    "1. 各变量差：身高 \\(10\\)，体重 \\(2\\)，收入 \\(10000\\)。\n2. \\(D=\\sqrt{10^2+2^2+10000^2}=\\sqrt{100+4+100{,}000{,}000}\\approx 10000\\)。\n3. 收入的单位量级最大，几乎完全决定了距离，身高和体重的差别可以忽略。\n4. 因此在变量单位不同时，先标准化（减均值除标准差）再算距离；若所有变量单位相同则不必。Mahalanobis 距离对单位不敏感。",
    "1. Differences: height \\(10\\), weight \\(2\\), income \\(10000\\).\n2. \\(D=\\sqrt{10^2+2^2+10000^2}=\\sqrt{100+4+100{,}000{,}000}\\approx10000\\).\n3. Income has by far the largest scale, so it essentially determines the distance and the height and weight gaps are negligible.\n4. When variables are in different units, standardise (subtract mean, divide by standard deviation) before computing distance; this is unnecessary if all variables share the same units. Mahalanobis distance is not sensitive to units."
   ],
   "answer": [
    "距离约为 10000，几乎完全由收入决定；故不同单位的变量应先标准化。",
    "The distance is about 10000, driven almost entirely by income; hence standardise variables measured in different units."
   ],
   "pages": [
    23
   ],
   "concepts": [
    "etx5500-distance-standardising",
    "etx5500-distance-euclidean-manhattan"
   ],
   "source": "distance.pdf",
   "tags": [
    "standardise",
    "units"
   ]
  },
  {
   "id": "ex-etx5500-distance-beer-dist-r",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "用 R 的 dist 计算标准化后的啤酒距离",
    "Standardised Euclidean distances between expensive beers in R"
   ],
   "problem": [
    "使用 beers 数据集：只保留价格大于 4.50 美元的啤酒，只用数值变量，先标准化，再用 dist 函数求 Euclidean 距离，并给矩阵加上啤酒名称标签。解读结果：哪两种啤酒最相似、哪两种最不同？",
    "With the beer dataset: keep only beers priced above 4.50 dollars, use numeric variables only, standardise, then use dist to get Euclidean distances and attach beer names as labels. Interpret the result: which two beers are most similar and which most different?"
   ],
   "solution": [
    "1. 代码流程：filter(price > 4.5) 然后 select_if(is.numeric)，再 scale()，最后 dist()。\n2. dist 只用了数值列，不带名字；通过 attributes(d) 的 Labels 属性赋入 beer 名称（取自同样过滤后的 beer 列）。\n3. 得到的距离矩阵（Anchor Steam, Becks, Heineken, Kirin, St Pauli Girl）：Anchor-Becks 3.4298，Anchor-Heineken 3.8333，Anchor-Kirin 4.1632，Anchor-St Pauli 4.1950，Becks-Heineken 2.3009，Becks-Kirin 2.8076，Becks-St Pauli 1.6260，Heineken-Kirin 1.1482，Heineken-St Pauli 3.2339，Kirin-St Pauli 3.3188。\n4. 最小值 1.1482 对应 Heineken 与 Kirin（最相似）；最大值 4.1950 对应 Anchor Steam 与 St Pauli Girl（最不同）。",
    "1. Pipeline: filter(price > 4.5), select_if(is.numeric), scale(), then dist().\n2. dist uses only the numeric columns, so no names are attached; assign them to the Labels attribute of d from the same filtered beer column.\n3. Distances (Anchor Steam, Becks, Heineken, Kirin, St Pauli Girl): Anchor-Becks 3.4298, Anchor-Heineken 3.8333, Anchor-Kirin 4.1632, Anchor-St Pauli 4.1950, Becks-Heineken 2.3009, Becks-Kirin 2.8076, Becks-St Pauli 1.6260, Heineken-Kirin 1.1482, Heineken-St Pauli 3.2339, Kirin-St Pauli 3.3188.\n4. The smallest value 1.1482 is Heineken-Kirin (most similar); the largest 4.1950 is Anchor Steam-St Pauli Girl (most different)."
   ],
   "answer": [
    "Heineken 与 Kirin 最相似（1.1482）；Anchor Steam 与 St Pauli Girl 最不同（4.1950）。",
    "Heineken and Kirin are most similar (1.1482); Anchor Steam and St Pauli Girl are most different (4.1950)."
   ],
   "pages": [
    24,
    25,
    26,
    27,
    28
   ],
   "concepts": [
    "etx5500-distance-beer-dist-r",
    "etx5500-distance-standardising",
    "etx5500-distance-euclidean-manhattan"
   ],
   "source": "distance.pdf",
   "tags": [
    "R",
    "dist",
    "standardise"
   ]
  },
  {
   "id": "ex-etx5500-distance-your-turn-beer",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "Your turn：另外三种距离计算",
    "Your turn: Euclidean/Manhattan on standardised and unstandardised beer data"
   ],
   "problem": [
    "沿用上例的啤酒数据（价格大于 4.50 美元、只用数值变量），(a) 计算未标准化数据的 Euclidean 距离；(b) 计算标准化数据的 Manhattan 距离；(c) 计算未标准化数据的 Manhattan 距离。",
    "Using the same beer subset (price above 4.50 dollars, numeric variables only): (a) Euclidean distance on unstandardised data; (b) Manhattan distance on standardised data; (c) Manhattan distance on unstandardised data."
   ],
   "solution": [
    "1. 幻灯片只给出任务，没有给出答案或数据数值，因此这里不报数字。\n2. 方法：用 dist(x, method = \\\"euclidean\\\") 或 dist(x, method = \\\"manhattan\\\")；标准化版本先加 scale()，未标准化版本省略 scale()。\n3. Euclidean 用 \\(\\sqrt{\\sum_j (x_j-y_j)^2}\\)，Manhattan 用 \\(\\sum_j |x_j-y_j|\\)。\n4. 预期现象（来自同一讲义的结论）：未标准化时量级大的变量（如 calories）会主导距离。",
    "1. The slide only states the tasks; it gives neither data values nor answers, so no numbers are reported here.\n2. Method: call dist(x, method = \\\"euclidean\\\") or dist(x, method = \\\"manhattan\\\"); add scale() first for the standardised version and omit it for the unstandardised one.\n3. Euclidean uses \\(\\sqrt{\\sum_j (x_j-y_j)^2}\\), Manhattan uses \\(\\sum_j |x_j-y_j|\\).\n4. Expected behaviour (from the lecture's own point on units): without standardising, large-scale variables such as calories dominate the distance."
   ],
   "answer": [
    "留作练习：幻灯片未给出答案；方法是 dist 配合 method 参数，并按需 scale。",
    "Left open by the slides; use dist with the method argument and scale() as required."
   ],
   "pages": [
    29,
    18
   ],
   "concepts": [
    "etx5500-distance-beer-dist-r",
    "etx5500-distance-standardising",
    "etx5500-distance-euclidean-manhattan"
   ],
   "source": "distance.pdf",
   "tags": [
    "Manhattan",
    "exercise"
   ]
  },
  {
   "id": "ex-etx5500-distance-jaccard-artists",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "Jaccard 相似度与距离：音乐品味",
    "Jaccard similarity and distance for music taste"
   ],
   "problem": [
    "三位客户喜欢的艺人：A：Maroon 5、Ariana Grande、Ed Sheeran、Cardi B；B：Maroon 5、Ed Sheeran、BTS；C：Cardi B、Drake、Future。用 Jaccard 系数 \\(J(A,B)=|A\\cap B|/|A\\cup B|\\) 衡量 A 与 B 的相似度，并给出 Jaccard 距离。",
    "Favourite artists: A: Maroon 5, Ariana Grande, Ed Sheeran, Cardi B; B: Maroon 5, Ed Sheeran, BTS; C: Cardi B, Drake, Future. Use the Jaccard coefficient \\(J(A,B)=|A\\cap B|/|A\\cup B|\\) to measure how similar customers A and B are, and give the Jaccard distance."
   ],
   "solution": [
    "1. 交集 \\(A\\cap B=\\{\\text{Maroon 5, Ed Sheeran}\\}\\)，\\(|A\\cap B|=2\\)。\n2. 并集 \\(A\\cup B=\\{\\text{Maroon 5, Ariana Grande, Ed Sheeran, Cardi B, BTS}\\}\\)，\\(|A\\cup B|=5\\)（也可用 \\(4+3-2=5\\) 验证）。\n3. \\(J=2/5=0.4\\)。\n4. \\(d_J=1-J=0.6\\)。A 与 B 有 40% 的相似度。J 总在 0 到 1 之间。",
    "1. Intersection \\(A\\cap B=\\{\\text{Maroon 5, Ed Sheeran}\\}\\), so \\(|A\\cap B|=2\\).\n2. Union \\(A\\cup B=\\{\\text{Maroon 5, Ariana Grande, Ed Sheeran, Cardi B, BTS}\\}\\), so \\(|A\\cup B|=5\\) (check: \\(4+3-2=5\\)).\n3. \\(J=2/5=0.4\\).\n4. \\(d_J=1-J=0.6\\). A and B are 40% similar. J always lies between 0 and 1."
   ],
   "answer": [
    "\\(J(A,B)=0.4\\)，Jaccard 距离 \\(d_J=0.6\\)。",
    "\\(J(A,B)=0.4\\) and the Jaccard distance is \\(d_J=0.6\\)."
   ],
   "pages": [
    32,
    34,
    36
   ],
   "concepts": [
    "etx5500-distance-jaccard"
   ],
   "source": "distance.pdf",
   "tags": [
    "Jaccard",
    "sets"
   ]
  },
  {
   "id": "ex-etx5500-distance-jaccard-sentences",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "Jaccard 距离：两句话的词集",
    "Jaccard distance between two sentences"
   ],
   "problem": [
    "A 的词集为 {data, is, the, new, oil, of, digital, economy}，B 的词集为 {data, is, the, new, snake, oil}。求两者的 Jaccard 距离与相似度。",
    "Word set A = {data, is, the, new, oil, of, digital, economy}; word set B = {data, is, the, new, snake, oil}. Find the Jaccard distance and similarity."
   ],
   "solution": [
    "1. 共有的词：data, is, the, new, oil，共 5 个，\\(|A\\cap B|=5\\)。\n2. 全部不同的词共 9 个（\\(8+6-5=9\\)），\\(|A\\cup B|=9\\)。\n3. \\(J=5/9\\)，所以 \\(d_J=1-5/9=4/9\\)。\n4. 相似度约为 56%。",
    "1. Common words: data, is, the, new, oil, so \\(|A\\cap B|=5\\).\n2. Unique words in total: 9 (\\(8+6-5=9\\)), so \\(|A\\cup B|=9\\).\n3. \\(J=5/9\\), hence \\(d_J=1-5/9=4/9\\).\n4. The similarity is about 56%."
   ],
   "answer": [
    "\\(d_J=4/9\\approx0.44\\)，相似度 \\(5/9\\approx56\\%\\)。",
    "\\(d_J=4/9\\approx0.44\\); similarity \\(5/9\\approx56\\%\\)."
   ],
   "pages": [
    37,
    38
   ],
   "concepts": [
    "etx5500-distance-jaccard"
   ],
   "source": "distance.pdf",
   "tags": [
    "Jaccard",
    "text"
   ]
  },
  {
   "id": "ex-etx5500-distance-cosine-docs",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "两个文档的 Cosine 相似度",
    "Cosine similarity of two short documents"
   ],
   "problem": [
    "文档 A=\\\"I love high-dimensional data analysis\\\"，B=\\\"High-dimensional data analysis is amazing\\\"。词汇表为 [I, love, high-dimensional, data, analysis, is, amazing]。把文档表示成词频向量并计算 cosine similarity；再解释用 R 的 tm 与 proxy 包（会去掉 \\\"I\\\"、\\\"is\\\" 等常见词）得到的结果。",
    "Documents A = \\\"I love high-dimensional data analysis\\\" and B = \\\"High-dimensional data analysis is amazing\\\". The vocabulary is [I, love, high-dimensional, data, analysis, is, amazing]. Encode each document as a word-count vector and compute the cosine similarity; then explain the value produced in R with the tm and proxy packages (which drop common words such as \\\"I\\\" and \\\"is\\\")."
   ],
   "solution": [
    "1. 编码：\\(a=[1,1,1,1,1,0,0]\\)，\\(b=[0,0,1,1,1,1,1]\\)。\n2. 公式 \\(\\cos_s(x,y)=\\dfrac{\\sum x_iy_i}{\\sqrt{\\sum x_i^2}\\sqrt{\\sum y_i^2}}\\)。\n3. 按此完整词汇表：分子 \\(=3\\)，\\(\\|a\\|=\\|b\\|=\\sqrt5\\)，所以相似度 \\(3/5=0.6\\)。\n4. R 中 TermDocumentMatrix 去掉 \\\"I\\\"、\\\"is\\\"，只剩 analysis, data, high-dimensional, love, amazing；向量 \\((1,1,1,1,0)\\) 与 \\((1,1,1,0,1)\\)：分子 \\(3\\)，模长均为 \\(2\\)，相似度 \\(3/4=0.75\\)，与输出一致。\n5. 注意 \"high-dimensional\" 与 \"High-dimensional\" 被当作同一个词（已转小写）；cosine distance \\(=1-\\)cosine similarity。",
    "1. Encoding: \\(a=[1,1,1,1,1,0,0]\\), \\(b=[0,0,1,1,1,1,1]\\).\n2. Formula \\(\\cos_s(x,y)=\\dfrac{\\sum x_iy_i}{\\sqrt{\\sum x_i^2}\\sqrt{\\sum y_i^2}}\\).\n3. With the full vocabulary: numerator \\(=3\\), \\(\\|a\\|=\\|b\\|=\\sqrt5\\), so similarity \\(3/5=0.6\\).\n4. In R, TermDocumentMatrix removes \\\"I\\\" and \\\"is\\\", leaving analysis, data, high-dimensional, love, amazing; the vectors \\((1,1,1,1,0)\\) and \\((1,1,1,0,1)\\) give numerator \\(3\\), norms both \\(2\\), so similarity \\(3/4=0.75\\), matching the printed output.\n5. Cosine distance is \\(1-\\)cosine similarity; magnitude of the vectors does not matter."
   ],
   "answer": [
    "完整词汇表下为 0.6；R 去掉停用词后为 0.75（输出 0.75）。cosine distance = 1 - 相似度。",
    "0.6 with the full vocabulary; 0.75 in R after common words are dropped (matches the output). Cosine distance = 1 - similarity."
   ],
   "pages": [
    39,
    43,
    45,
    46,
    49,
    51
   ],
   "concepts": [
    "etx5500-distance-cosine-text-case",
    "etx5500-distance-cosine"
   ],
   "source": "distance.pdf",
   "tags": [
    "cosine",
    "text mining"
   ]
  },
  {
   "id": "ex-etx5500-distance-tut-giannis-messi",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "教程：身高年龄距离与单位影响",
    "Tutorial: Euclidean and Manhattan distance, effect of units"
   ],
   "problem": [
    "Giannis（身高 211 cm，年龄 30）与 Messi（身高 170 cm，年龄 38）。(1) 求 Euclidean 距离；(2) 求 Manhattan 距离；(3) 把身高改为米后重算 Manhattan 距离，并说明单位的影响。",
    "Giannis (height 211 cm, age 30) and Messi (height 170 cm, age 38). (1) Compute the Euclidean distance. (2) Compute the Manhattan distance. (3) Recompute the Manhattan distance with height in metres and comment on the effect of units."
   ],
   "solution": [
    "1. 差：身高 \\(41\\)，年龄 \\(8\\)。\\(D=\\sqrt{41^2+8^2}=\\sqrt{1745}\\approx41.77\\)。\n2. Manhattan：\\(41+8=49\\)。\n3. 身高用米：\\(|2.11-1.70|+|30-38|=0.41+8=8.41\\)。（解答文本中的算式写成 \\\"abs(38-20)\\\"，疑为笔误，年龄差应为 8。）\n4. 同一对人的距离从 49 变到约 8.41，说明距离受单位影响；这就是不同单位的数据要先标准化的原因，同单位变量（如手长与脚长都用 cm）则无需。",
    "1. Differences: height \\(41\\), age \\(8\\). \\(D=\\sqrt{41^2+8^2}=\\sqrt{1745}\\approx41.77\\).\n2. Manhattan: \\(41+8=49\\).\n3. With height in metres: \\(|2.11-1.70|+|30-38|=0.41+8=8.41\\). (The printed solution writes \\\"abs(38-20)\\\", which looks like a typo; the age gap is 8.)\n4. The same pair goes from 49 to about 8.41, so units influence distance; this is why variables in different units are standardised, while same-unit variables (e.g. hand length and height both in cm) need not be."
   ],
   "answer": [
    "Euclidean 约 41.77，Manhattan 为 49；身高改米后 Manhattan 约 8.41，单位改变距离。",
    "Euclidean about 41.77, Manhattan 49; with height in metres Manhattan is about 8.41, so units change distances."
   ],
   "pages": [],
   "concepts": [
    "etx5500-distance-euclidean-manhattan",
    "etx5500-distance-standardising"
   ],
   "source": "distance.pdf",
   "tags": [
    "tutorial",
    "units"
   ]
  },
  {
   "id": "ex-etx5500-distance-tut-cuisine-jaccard",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "教程：菜系口味的 Jaccard 相似度与组合距离",
    "Tutorial: Jaccard similarity of cuisine tastes and a combined distance"
   ],
   "problem": [
    "一个人只喜欢 Chinese 菜，另一个人喜欢 Chinese、Thai、Italian、Japanese 四种菜系。计算两者的 Jaccard 相似度与距离；并提出一个同时考虑身高、年龄和菜系偏好的距离定义。",
    "One person likes only Chinese food; another likes Chinese, Thai, Italian and Japanese. Compute their Jaccard similarity and distance, then propose a distance that accounts for height, age and food preference together."
   ],
   "solution": [
    "1. 共同喜欢 1 种（Chinese）；合计不同菜系 4 种。\n2. \\(J=1/4=0.25\\)。\n3. \\(d_J=1-0.25=0.75\\)。\n4. 组合距离：把 Manhattan（或 Euclidean）距离与 Jaccard 距离相加。解答指出这样仍满足四条距离公理（非负、同一性、对称、三角不等式）；证明“两个距离之和仍是距离”留作进阶练习。",
    "1. They share 1 cuisine (Chinese); 4 distinct cuisines in total.\n2. \\(J=1/4=0.25\\).\n3. \\(d_J=1-0.25=0.75\\).\n4. Combined distance: add the Manhattan (or Euclidean) distance to the Jaccard distance. The solution notes the sum still satisfies the four axioms (non-negativity, identity, symmetry, triangle inequality); proving that the sum of two distances is a distance is left as an advanced exercise."
   ],
   "answer": [
    "\\(J=0.25\\)，\\(d_J=0.75\\)；组合距离可取数值距离加 Jaccard 距离。",
    "\\(J=0.25\\), \\(d_J=0.75\\); a combined distance can be the numeric distance plus the Jaccard distance."
   ],
   "pages": [],
   "concepts": [
    "etx5500-distance-jaccard",
    "etx5500-distance-euclidean-manhattan"
   ],
   "source": "distance.pdf",
   "tags": [
    "tutorial",
    "Jaccard"
   ]
  },
  {
   "id": "ex-etx5500-distance-tut-beer-pabst-augsberger",
   "course": "ETX5500",
   "topic": "e5500-distance",
   "topicName": [
    "距离",
    "Distance"
   ],
   "title": [
    "教程：Pabst Extra Light 与 Augsberger 的距离",
    "Tutorial: distance between Pabst Extra Light and Augsberger, raw vs standardised"
   ],
   "problem": [
    "在 beer 数据集中只用数值变量（price, cost, calories, sodium, alcohol）。Pabst Extra Light 为 (2.29, 0.38, 68, 15, 2.3)，Augsberger 为 (2.39, 0.40, 175, 24, 5.5)。不用 dist 函数，先对未标准化数据求 Euclidean 距离，再标准化后重算。全体啤酒的均值为 (3.03, 0.506, 140, 14.7, 4.58)，标准差为 (1.12, 0.187, 24.4, 6.15, 0.603)。",
    "In the beer data use numeric variables only (price, cost, calories, sodium, alcohol). Pabst Extra Light is (2.29, 0.38, 68, 15, 2.3) and Augsberger is (2.39, 0.40, 175, 24, 5.5). Without using dist, find the Euclidean distance on the raw data, then repeat after standardising. Variable means over all beers are (3.03, 0.506, 140, 14.7, 4.58) and standard deviations (1.12, 0.187, 24.4, 6.15, 0.603)."
   ],
   "solution": [
    "1. 未标准化差：\\((-0.1,-0.02,-107,-9,-3.2)\\)。\n2. 平方：\\((0.01, 0.0004, 11449, 81, 10.24)\\)，总和约 11540.25，开方得 \\(107.4256\\)。calories 的差完全主导。\n3. 标准化：每个变量减均值除标准差，再求差，得 \\((-0.0890,-0.1068,-4.3768,-1.4646,-5.3070)\\)。\n4. 平方：\\((0.0079, 0.0114, 19.1566, 2.1451, 28.1644)\\)，总和约 49.485，开方得 \\(7.0346\\)。\n5. 标准化后 calories 仍有较大差异但不再主导，alcohol 的差反而更大。用管道也可：scale() 后选出两行再 dist()，得到同样的 7.034585。",
    "1. Raw differences: \\((-0.1,-0.02,-107,-9,-3.2)\\).\n2. Squares: \\((0.01, 0.0004, 11449, 81, 10.24)\\), sum about 11540.25, square root \\(107.4256\\). The calories gap completely dominates.\n3. Standardise each variable (subtract mean, divide by sd) and take differences: \\((-0.0890,-0.1068,-4.3768,-1.4646,-5.3070)\\).\n4. Squares: \\((0.0079, 0.0114, 19.1566, 2.1451, 28.1644)\\), sum about 49.485, square root \\(7.0346\\).\n5. After standardising, calories is still large but no longer dominant; the alcohol gap is now bigger. A pipe with scale(), filtering the two beers and dist() gives the same 7.034585."
   ],
   "answer": [
    "未标准化 \\(D\\approx107.43\\)（calories 主导）；标准化后 \\(D\\approx7.0346\\)。",
    "Raw \\(D\\approx107.43\\) (calories dominate); standardised \\(D\\approx7.0346\\)."
   ],
   "pages": [],
   "concepts": [
    "etx5500-distance-euclidean-manhattan",
    "etx5500-distance-standardising",
    "etx5500-distance-beer-dist-r"
   ],
   "source": "distance.pdf",
   "tags": [
    "tutorial",
    "beer",
    "standardise"
   ]
  },
  {
   "id": "ex-etx5500-clustering-average-vs-centroid",
   "course": "ETX5500",
   "topic": "e5500-clustering",
   "topicName": [
    "聚类分析",
    "Cluster analysis"
   ],
   "title": [
    "平均连接与质心连接的距离比较",
    "Average vs centroid linkage distance"
   ],
   "problem": [
    "一维数据下有两个簇 \\(A=\\{0,2\\}\\) 和 \\(B=\\{3,5\\}\\)。分别用 average linkage 和 centroid linkage 计算两个簇之间的距离，并比较两种方法的区别。",
    "Two one-variable clusters are \\(A=\\{0,2\\}\\) and \\(B=\\{3,5\\}\\). Compute the distance between A and B using (a) average linkage and (b) centroid linkage, and explain how the two procedures differ."
   ],
   "solution": [
    "1. Average linkage：先算所有跨簇点对的距离：\\(D(0,3)=3\\)，\\(D(0,5)=5\\)，\\(D(2,3)=1\\)，\\(D(2,5)=3\\)。\n2. 对这 \\(I\\times J=4\\) 个距离取平均：\\(\\frac{3+5+1+3}{4}=3\\)。\n3. Centroid linkage：先求每个簇的质心 \\(\\bar a=(0+2)/2=1\\)，\\(\\bar b=(3+5)/2=4\\)。\n4. 质心之间的距离 \\(|4-1|=3\\)。\n5. 本例两种方法恰好都得 3；但当观测是向量（多变量）时通常不相等。流程区别：average 是先算点对距离再平均；centroid 是先平均得到质心再算距离。",
    "1. Average linkage: list all between-cluster pairwise distances: \\(D(0,3)=3\\), \\(D(0,5)=5\\), \\(D(2,3)=1\\), \\(D(2,5)=3\\).\n2. Average the \\(I\\times J=4\\) distances: \\(\\frac{3+5+1+3}{4}=3\\).\n3. Centroid linkage: compute the centroids \\(\\bar a=(0+2)/2=1\\) and \\(\\bar b=(3+5)/2=4\\).\n4. Distance between centroids: \\(|4-1|=3\\).\n5. Here both methods happen to give 3, but with vector observations they generally differ. Procedure: average linkage computes pairwise distances first and then averages; centroid linkage averages the points first and then takes one distance."
   ],
   "answer": [
    "两种方法都给出 3（本例巧合相同，多变量时一般不同）。",
    "Both give a distance of 3 (a coincidence in one dimension; in general they differ for vectors)."
   ],
   "pages": [
    73,
    74,
    75,
    76
   ],
   "concepts": [
    "etx5500-clustering-average-centroid"
   ],
   "source": "clustering.pdf",
   "tags": [
    "average linkage",
    "centroid linkage",
    "hierarchical"
   ]
  },
  {
   "id": "ex-etx5500-clustering-wholesaler-kmeans",
   "course": "ETX5500",
   "topic": "e5500-clustering",
   "topicName": [
    "聚类分析",
    "Cluster analysis"
   ],
   "title": [
    "批发商客户的 k-means 聚类与簇画像",
    "k-means on wholesaler customers: centroids, nstart and label switching"
   ],
   "problem": [
    "某批发商有 440 位客户，变量为六个品类的年消费额：Fresh、Milk、Grocery、Frozen、Detergents_Paper、Delicassen。要求用 R 函数 kmeans 找出 3 个簇，解释输出中的 cluster、centers、size，用簇中心给各簇画像；再说明为什么要用 nstart，以及为何重复运行时簇的编号会变化。",
    "A wholesaler has 440 customers with annual spend in six categories: Fresh, Milk, Grocery, Frozen, Detergents_Paper, Delicassen. Run k-means with 3 clusters in R, say what the components cluster, centers and size contain, profile the clusters using the centroids, and explain why nstart is used and why the cluster numbering can change between runs."
   ],
   "solution": [
    "1. 运行 km_wholesale <- kmeans(wholesale, centers = 3)。结果是列表：cluster 为每位客户的簇编号，centers 为各簇质心，size 为各簇人数；质心可用来给簇画像。\n2. 看质心：一个簇 Fresh 约 35941，远高于其他簇，其余品类中等偏低；另一个簇 Milk 约 18511、Grocery 约 27574、Detergents_Paper 约 12407，三项都很高；第三个簇各项都较低（Fresh 约 8253，Grocery 约 5280）。\n3. 讲义的解读：这三类可能分别对应酒店、超市和咖啡馆（cafes）。\n4. k-means 对初始值敏感，所以用 kmeans(wholesale, centers = 3, nstart = 25) 从多组随机起点运行并取最优结果。\n5. 第二次运行得到的质心数值与第一次完全相同，只是行的顺序变了（原来第一簇是 Fresh 最高，现在变成第二簇）。这就是 label switching：簇的编号本身没有意义，重要的是簇均值。",
    "1. Run km_wholesale <- kmeans(wholesale, centers = 3). The output is a list: cluster (membership of each customer), centers (centroids) and size (number of observations per cluster). The centroids are used to profile the clusters.\n2. Read the centroids: one cluster has a very high Fresh spend (about 35941) with moderate/low other categories; another has very high Milk (about 18511), Grocery (about 27574) and Detergents_Paper (about 12407); the third has low spend everywhere (Fresh about 8253, Grocery about 5280).\n3. The slides' interpretation: the clusters may represent hotels, supermarkets and cafes.\n4. Because k-means is sensitive to the starting values, rerun with kmeans(wholesale, centers = 3, nstart = 25), which tries many random starts and keeps the best.\n5. The second set of centroids is numerically identical to the first, only listed in a different order (the high-Fresh cluster moved from first to second). This is label switching: the cluster labels are arbitrary, the cluster means are what matter."
   ],
   "answer": [
    "三个簇的质心：(Fresh 35941, Milk 6044, Grocery 6289, Frozen 6714, Det_Paper 1040, Delicassen 3049)，(8253, 3825, 5280, 2573, 1773, 1137)，(8000, 18511, 27574, 1997, 12407, 2252)。编号可能互换（label switching），因此要看均值而非编号。",
    "The centroids are (35941, 6044, 6289, 6714, 1040, 3049), (8253, 3825, 5280, 2573, 1773, 1137) and (8000, 18511, 27574, 1997, 12407, 2252) for the six categories. Labels may switch between runs, so interpret the means, not the numbers."
   ],
   "pages": [
    14,
    15,
    102,
    103,
    104,
    105,
    106,
    107
   ],
   "concepts": [
    "etx5500-clustering-kmeans",
    "etx5500-clustering-wholesaler-nesting"
   ],
   "source": "clustering.pdf",
   "tags": [
    "k-means",
    "nstart",
    "label switching",
    "centroid profiling"
   ]
  },
  {
   "id": "ex-etx5500-clustering-mtcars-hclust-r",
   "course": "ETX5500",
   "topic": "e5500-clustering",
   "topicName": [
    "聚类分析",
    "Cluster analysis"
   ],
   "title": [
    "mtcars 的层次聚类：R 流程与树状图",
    "Hierarchical clustering of mtcars in R: workflow and cutting the dendrogram"
   ],
   "problem": [
    "mtcars 数据含 32 辆车、11 个变量（mpg、cyl、hp、wt 等）。要求用欧氏距离和 complete linkage 做层次聚类，结果存为 hc_mtcars，画出树状图，并取出 2 个簇的成员编号。",
    "The mtcars data has 32 cars measured on 11 variables (mpg, cyl, hp, wt, ...). Cluster the cars with Euclidean distance and complete linkage, store the result as hc_mtcars, draw the dendrogram, and extract the 2-cluster membership."
   ],
   "solution": [
    "1. 变量单位不同，先 scale() 标准化。\n2. 用 dist() 求所有观测两两之间的（欧氏）距离。\n3. 用 hclust(method = \"complete\") 聚类，即 hc_mtcars <- mtcars %>% scale() %>% dist() %>% hclust(method = \"complete\")。\n4. 用 factoextra::fviz_dend(hc_mtcars, ...) 画树状图；加上 k = 2, rect = TRUE 会在图上框出 2 个簇。\n5. 用 k2 <- cutree(hc_mtcars, k = 2) 得到成员变量：Mazda RX4 与 Mazda RX4 Wag 在簇 1，Datsun 710 与 Hornet 4 Drive 在簇 2。",
    "1. The variables are in different units, so standardise with scale().\n2. Compute all pairwise Euclidean distances with dist().\n3. Cluster with hclust(method = \"complete\"): hc_mtcars <- mtcars %>% scale() %>% dist() %>% hclust(method = \"complete\").\n4. Draw the dendrogram with factoextra::fviz_dend(hc_mtcars, ...); adding k = 2, rect = TRUE boxes the 2 clusters.\n5. Extract membership with k2 <- cutree(hc_mtcars, k = 2): Mazda RX4 and Mazda RX4 Wag fall in cluster 1; Datsun 710 and Hornet 4 Drive fall in cluster 2."
   ],
   "answer": [
    "流程为 scale、dist、hclust，再用 cutree(hc_mtcars, k = 2) 取成员；前几辆车的簇为 1, 1, 2, 2。",
    "The workflow is scale, dist, hclust, then cutree(hc_mtcars, k = 2); the first four cars get clusters 1, 1, 2, 2."
   ],
   "pages": [
    11,
    12,
    39,
    40,
    41,
    43,
    54
   ],
   "concepts": [
    "etx5500-clustering-dendrogram-choose",
    "etx5500-clustering-why-and-methods",
    "etx5500-distance-standardising"
   ],
   "source": "clustering.pdf",
   "tags": [
    "hclust",
    "dendrogram",
    "cutree",
    "complete linkage",
    "R"
   ]
  },
  {
   "id": "ex-etx5500-clustering-choose-k-stability",
   "course": "ETX5500",
   "topic": "e5500-clustering",
   "topicName": [
    "聚类分析",
    "Cluster analysis"
   ],
   "title": [
    "用树状图的稳定性选择簇数",
    "Choosing the number of clusters from dendrogram stability"
   ],
   "problem": [
    "某树状图的 3 簇解对应的容忍度（tolerance，纵轴距离）约为 5.9。已知容忍度略微增大会得到 2 簇解，略微减小会得到 4 簇解。根据“簇数在较长的容忍度区间内不变”的准则，判断 2、3、4 簇解哪些稳定，并说明为什么簇数既不能太多也不能太少。",
    "In a dendrogram, the 3-cluster solution corresponds to a tolerance (height on the distance axis) of about 5.9. A slightly larger tolerance gives a 2-cluster solution and a slightly smaller one gives a 4-cluster solution. Using the criterion that the number of clusters should stay unchanged over a long stretch of tolerance, decide which of the 2, 3 and 4 cluster solutions are stable, and explain why the number of clusters should be neither too large nor too small."
   ],
   "solution": [
    "1. 把纵轴看作容忍度：两簇距离在容忍度之内就合并，容忍度越大簇越少。\n2. 3 簇解只在 5.9 附近一个很窄的区间成立：稍微增大就变 2 簇，稍微减小就变 4 簇，所以 3 簇解不稳定。\n3. 2 簇和 4 簇解各自在较长的容忍度区间内保持不变，因此是稳定的。\n4. 一般做法：找一段很长的、簇数不变的容忍度区间。\n5. 不能选太多簇：公司没有资源为每个细分市场设计不同策略；也不能选 1 簇，因为这样聚类就没有意义。簇数没有唯一正确答案，取决于背景。",
    "1. Read the vertical axis as a tolerance: clusters closer than the tolerance are merged, so a larger tolerance gives fewer clusters.\n2. The 3-cluster solution holds only over a very narrow range around 5.9: a small increase gives 2 clusters and a small decrease gives 4 clusters, so it is not stable.\n3. The 2- and 4-cluster solutions each persist over a long range of tolerance, so they are stable.\n4. General rule: look for a long stretch of tolerance over which the number of clusters does not change.\n5. Too many clusters are impractical (a firm cannot build a separate strategy for every segment) and the 1-cluster solution makes clustering pointless. There is no single correct number; it depends on context."
   ],
   "answer": [
    "3 簇解不稳定，2 簇和 4 簇解稳定；最终选择还要结合业务背景。",
    "The 3-cluster solution is unstable, while the 2- and 4-cluster solutions are stable; the final choice also depends on context."
   ],
   "pages": [
    46,
    47,
    48,
    50,
    53
   ],
   "concepts": [
    "etx5500-clustering-dendrogram-choose"
   ],
   "source": "clustering.pdf",
   "tags": [
    "dendrogram",
    "number of clusters",
    "tolerance"
   ]
  },
  {
   "id": "ex-etx5500-clustering-seven-obs-nested",
   "course": "ETX5500",
   "topic": "e5500-clustering",
   "topicName": [
    "聚类分析",
    "Cluster analysis"
   ],
   "title": [
    "七个观测的凝聚式聚类：嵌套解",
    "Agglomerative clustering of seven observations: nested solutions"
   ],
   "problem": [
    "有 7 个观测 1 到 7，用欧氏距离和 single linkage 做凝聚式层次聚类，每步合并距离最小的两个簇。已知合并顺序使得 7 簇解为 {1},...,{7}，且依次得到 6 簇、5 簇、4 簇、3 簇、2 簇和 1 簇解。写出每个解的簇，并说明树状图中如何读出它们。（坐标数据在讲义图中给出，文本中没有。）",
    "Seven observations 1 to 7 are clustered agglomeratively with Euclidean distance and single linkage, merging the two closest clusters at each step. Write out the 7, 6, 5, 4, 3, 2 and 1 cluster solutions and explain how they are read from the dendrogram. (The coordinates appear only in the slide figures, not in the text.)"
   ],
   "solution": [
    "1. 起点：7 簇解，每个点单独成簇 {1},{2},{3},{4},{5},{6},{7}。\n2. 合并 1、2 得 6 簇解 {1,2},{3},{4},{5},{6},{7}。\n3. 再合并 3、4 得 5 簇解 {1,2},{3,4},{5},{6},{7}。\n4. 点 5 并入 {3,4} 得 4 簇解 {1,2},{3,4,5},{6},{7}。\n5. {1,2} 与 {3,4,5} 合并得 3 簇解 {1,2,3,4,5},{6},{7}。\n6. 6 与 7 合并得 2 簇解 {1,2,3,4,5},{6,7}。\n7. 最后全部合并为 1 簇。\n8. 在树状图上，纵轴是容忍度：每次合并发生的高度就是两簇的距离；在某一高度画水平线，与竖线相交的个数就是该容忍度下的簇数。这些解是嵌套的，每个解都由上一个解合并而来。",
    "1. Start with the 7-cluster solution: every point alone, {1},{2},{3},{4},{5},{6},{7}.\n2. Merge 1 and 2: 6 clusters {1,2},{3},{4},{5},{6},{7}.\n3. Merge 3 and 4: 5 clusters {1,2},{3,4},{5},{6},{7}.\n4. Point 5 joins {3,4}: 4 clusters {1,2},{3,4,5},{6},{7}.\n5. {1,2} and {3,4,5} merge: 3 clusters {1,2,3,4,5},{6},{7}.\n6. 6 and 7 merge: 2 clusters {1,2,3,4,5},{6,7}.\n7. Finally everything merges into 1 cluster.\n8. On the dendrogram the vertical axis is the tolerance: the height of each merge is the distance between the two clusters. A horizontal line at a given height crosses as many vertical lines as there are clusters at that tolerance. The solutions are nested: each one arises by merging clusters of the previous one."
   ],
   "answer": [
    "依次为 7、6、5、4、3、2、1 簇解，如上；每个解都由前一个解合并而来（嵌套）。",
    "The solutions are as listed above for 7 down to 1 clusters; each is obtained by merging clusters of the previous one (nested)."
   ],
   "pages": [
    27,
    28,
    36,
    37,
    38
   ],
   "concepts": [
    "etx5500-clustering-toy-hierarchy",
    "etx5500-clustering-single-complete"
   ],
   "source": "clustering.pdf",
   "tags": [
    "agglomerative",
    "single linkage",
    "dendrogram",
    "nested"
   ]
  },
  {
   "id": "ex-etx5500-clustering-nested-hier-vs-kmeans",
   "course": "ETX5500",
   "topic": "e5500-clustering",
   "topicName": [
    "聚类分析",
    "Cluster analysis"
   ],
   "title": [
    "层次聚类与 k-means 的嵌套性比较",
    "Nestedness: Ward hierarchical clustering vs k-means on the wholesale data"
   ],
   "problem": [
    "对 440 条 Wholesale 数据，分别用 Ward（ward.D2）层次聚类和 kmeans 得到 2 簇解（解 A）和 3 簇解（解 B），列联表 table(A, B) 如下。层次聚类：A=1 行为 261, 0, 45；A=2 行为 0, 134, 0。k-means：A=1 行为 59, 317, 0；A=2 行为 1, 13, 50。判断两种方法的解是否嵌套，并说明 k-means 的 3 簇解中哪一簇在变成 2 簇时被拆开。",
    "On the 440-observation Wholesale data, a 2-cluster solution (A) and a 3-cluster solution (B) are obtained by Ward (ward.D2) hierarchical clustering and by kmeans, and compared with table(A, B). Hierarchical: row A=1 is 261, 0, 45; row A=2 is 0, 134, 0. k-means: row A=1 is 59, 317, 0; row A=2 is 1, 13, 50. Decide for each method whether the solutions are nested, and say which B cluster is split when going from 3 to 2 clusters under k-means."
   ],
   "solution": [
    "1. 嵌套的含义：如果两个观测在解 B 中同簇，则它们在解 A 中也同簇；即列联表的每一列只有一个非零行。\n2. 层次聚类：B 的第 1、2、3 列分别只在 A 的一行有非零数 (261, 134, 45)，因此嵌套；B 的簇 1 和 3 合并成 A 的簇 1，B 的簇 2 变为 A 的簇 2。\n3. k-means：B 的第 1 列有 59 和 1 两个非零值，第 2 列有 317 和 13，所以不嵌套；2 簇解不是由 3 簇解简单合并得到。\n4. 被拆开的簇：B 中的 317+13=330 个观测，其中 317 个去了新的簇 1，13 个去了新的簇 2。（讲义文字称其为 “cluster 3”，但按表中数字，这是第 2 列。）\n5. 结论：不同 k 的 k-means 解可能互相矛盾，这与层次聚类不同。",
    "1. Nested means that two observations in the same cluster of B are also in the same cluster of A, i.e. each column of the table has a single non-zero row.\n2. Hierarchical: each column of B has non-zero entries in only one row (261, 134, 45), so the solutions are nested: B clusters 1 and 3 merge into A cluster 1, and B cluster 2 becomes A cluster 2.\n3. k-means: column 1 has non-zero entries 59 and 1, and column 2 has 317 and 13, so the solutions are not nested; the 2-cluster solution is not just a merge of the 3-cluster one.\n4. The split cluster: the 317+13=330 observations of that B cluster go 317 to new cluster 1 and 13 to new cluster 2. (The slide text calls it \"cluster 3\", but with the table's numbers it is column 2.)\n5. Conclusion: k-means solutions for different k can contradict one another, unlike hierarchical clustering."
   ],
   "answer": [
    "层次聚类的 2、3 簇解嵌套；k-means 的不嵌套（B 中一个簇的 317 个观测去簇 1，13 个去簇 2）。",
    "Hierarchical solutions are nested; the k-means ones are not (one B cluster sends 317 observations to cluster 1 and 13 to cluster 2)."
   ],
   "pages": [
    108,
    109,
    110,
    111,
    112,
    113
   ],
   "concepts": [
    "etx5500-clustering-wholesaler-nesting",
    "etx5500-clustering-ward",
    "etx5500-clustering-kmeans"
   ],
   "source": "clustering.pdf",
   "tags": [
    "nested",
    "hierarchical",
    "k-means",
    "table"
   ]
  },
  {
   "id": "ex-etx5500-clustering-credit-card-segmentation",
   "course": "ETX5500",
   "topic": "e5500-clustering",
   "topicName": [
    "聚类分析",
    "Cluster analysis"
   ],
   "title": [
    "信用卡客户细分（Ward、k-means、调整兰德指数）",
    "Credit card customer segmentation: Ward, k-means and adjusted Rand index"
   ],
   "problem": [
    "credit_card_customers.csv 记录 9000 位信用卡用户 6 个月的信息，变量包括 credit_limit、balance、balance_freq、payments、purchases、purchase_freq、oneoff_purchases、oneoff_freq、installment_purchases、installment_freq、cash_advance、cash_advance_freq（各 freq 为 0 到 1 的评分）和 cust_id。要求：(a) 检查数据质量；(b) 用 Ward D2 和欧氏距离聚类，画树状图定簇数；(c) 保存成员，并做 k=3 的 k-means，用 adjusted Rand index 比较；(d) 根据层次聚类的簇均值描述各簇。簇均值（部分列）：簇1 credit_limit 3129、balance 876、payments 892、purchases 226、purchase_freq 0.196；簇2 7692、4596、3641、655、0.378；簇3 4787、1166、1942、2005、0.862。",
    "credit_card_customers.csv summarises 9000 credit cardholders over 6 months, with credit_limit, balance, balance_freq, payments, purchases, purchase_freq, oneoff_purchases, oneoff_freq, installment_purchases, installment_freq, cash_advance, cash_advance_freq (the freq variables are scores in 0 to 1) and cust_id. Tasks: (a) check data quality; (b) cluster with Ward D2 and Euclidean distance and use the dendrogram to choose the number of clusters; (c) store membership, run k-means with k=3 and compare with the adjusted Rand index; (d) describe the clusters from the hierarchical cluster means. Cluster means (some columns): cluster 1 credit_limit 3129, balance 876, payments 892, purchases 226, purchase_freq 0.196; cluster 2 7692, 4596, 3641, 655, 0.378; cluster 3 4787, 1166, 1942, 2005, 0.862."
   ],
   "solution": [
    "1. 数据质量：cash_advance_freq 应在 0 到 1 之间，故过滤掉越界的行并用 na.omit() 去掉缺失值；另外有些客户 balance 高于 credit_limit，可能是银行允许带费用的小幅超限，或 balance 含未入账的待处理金额，不一定是错误。\n2. 层次聚类：对去掉 cust_id 的数据 scale()，dist()，再 hclust(method = \"ward.D2\")。\n3. 画 plot(hcl, label = FALSE) 并用 rect.hclust(hcl, k = 3, border = \"red\") 框出 3 簇（数据量大，fviz_dend 太慢）；用 cutree(hcl, k = 3) 存入 mem_hc。\n4. k-means：对标准化数据 kmeans(centers = 3, nstart = 10)，成员存入 mem_km。\n5. mclust::adjustedRandIndex(mem_hc, mem_km) = 0.400，说明两种解中度吻合。\n6. 簇 1：credit_limit、balance、payments、purchases 最低，主要用卡取现而非消费，可能是低收入、用卡作流动性的用户；建议用日常品类（超市、加油）返现鼓励消费。\n7. 簇 2：credit_limit、balance、payments 和 cash_advance 及其频率最高，购买适中，是高风险的取现重度用户；先做风险管理，强调消费用卡的低费用和奖励，并可引导申请利率更低的个人贷款。\n8. 簇 3：购买和一次性购买及其频率最高，取现最低，余额小于还款，是高频消费客户；可提供高级奖励计划、机场休息室、礼宾等福利和个性化优惠，因为竞争对手也想争取这类客户。",
    "1. Data quality: cash_advance_freq must lie in [0,1], so filter out rows outside that range and drop missing values with na.omit(). Some customers have balance above credit_limit; this need not be an error (banks may allow slight overspending with fees, or balance may include pending unbilled amounts).\n2. Hierarchical: drop cust_id, scale(), dist(), then hclust(method = \"ward.D2\").\n3. Plot with plot(hcl, label = FALSE) and box 3 clusters with rect.hclust(hcl, k = 3, border = \"red\") (fviz_dend is slow for this size); store cutree(hcl, k = 3) as mem_hc.\n4. k-means: kmeans(centers = 3, nstart = 10) on the scaled data, membership stored as mem_km.\n5. mclust::adjustedRandIndex(mem_hc, mem_km) = 0.400, so the two solutions are moderately aligned.\n6. Cluster 1: lowest credit_limit, balance, payments and purchases; it mostly uses the card for cash advances rather than purchases (likely lower-income users using the card for liquidity). Encourage spending with cashback on groceries and fuel.\n7. Cluster 2: highest credit_limit, balance, payments and cash advances and their frequency, with moderate purchases; high-risk cash-advance heavy users. Do risk management first, highlight lower fees and rewards for purchases, and suggest personal loans, which may be cheaper than cash advances.\n8. Cluster 3: highest purchases and one-off purchases and their frequencies, lowest cash advances, balance below payments; heavy card shoppers. Offer premium rewards, lounges, concierge and personalised offers, since competitors would want these customers."
   ],
   "answer": [
    "3 簇；ARI 约 0.400（中度一致）。簇 1 低使用、取现为主；簇 2 高风险取现重度用户；簇 3 高频消费的重度购物用户。",
    "Three clusters; ARI about 0.400 (moderate agreement). Cluster 1: low-usage, cash-advance leaning; cluster 2: high-risk cash-advance heavy users; cluster 3: heavy shoppers with frequent purchases."
   ],
   "pages": [],
   "concepts": [
    "etx5500-clustering-ward",
    "etx5500-clustering-kmeans",
    "etx5500-clustering-rand-index"
   ],
   "source": "clustering.pdf",
   "tags": [
    "tutorial",
    "Ward",
    "k-means",
    "adjusted Rand index",
    "segmentation"
   ]
  },
  {
   "id": "ex-etx5500-mds-beer-classical",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "啤酒数据的经典 MDS（classical MDS）",
    "Classical MDS on the fair-rated beer data"
   ],
   "problem": [
    "数据：10 款评级为 Fair 的啤酒（Olympia Gold Light、Pabst Extra Light、Schlitz Light、Blatz、Hamms、Heilmans Old Style、Rolling Rock、Scotch Buy、St Pauli Girl、Tuborg），每款有 5 个数值变量：price、cost、calories、sodium、alcohol（非数值变量不用）。要求：(1) 如何得到原始距离矩阵 \\(\\Delta\\)；(2) 用 classical MDS 得到 2 维坐标；(3) 已知 Blatz 的 2D 坐标为 (-0.339, 1.493)，Tuborg 为 (0.808, 0.703)，计算二者的 2D 距离并与原始距离 \\(\\delta=1.4762\\) 比较；(4) 报告拟合优度 GoF 并解释。",
    "Data: ten beers rated Fair (Olympia Gold Light, Pabst Extra Light, Schlitz Light, Blatz, Hamms, Heilmans Old Style, Rolling Rock, Scotch Buy, St Pauli Girl, Tuborg), each with five metric variables: price, cost, calories, sodium, alcohol (non-metric variables are dropped). Tasks: (1) obtain the original distance matrix \\(\\Delta\\); (2) get the 2D classical MDS coordinates; (3) given 2D coordinates Blatz (-0.339, 1.493) and Tuborg (0.808, 0.703), compute their 2D distance and compare with the original \\(\\delta=1.4762\\); (4) report and interpret the goodness of fit (GoF)."
   ],
   "solution": [
    "1. 只保留 rating 为 Fair 的啤酒和数值列，先标准化（R 中 scale），再对所有啤酒两两计算 5 维 Euclidean 距离（dist），得到 \\(\\Delta\\)；例如 \\(\\delta(\\text{Blatz},\\text{Tuborg})^2=\\sum_{h=1}^5(\\text{Blatz}_h-\\text{Tuborg}_h)^2\\)。为了用 Euclidean 距离，只用 metric 变量（类别变量需要别的距离）。\n2. 调用 cmdscale(delta) 得到每款啤酒的两列新坐标 V1、V2（如 Olympia Gold Light 约 (-1.976, -1.628)），用 geom_point 或 geom_text(label=名字) 画散点图，就是 MDS 图。\n3. 2D 距离：\\(d=\\sqrt{(-0.339-0.808)^2+(1.493-0.703)^2}=\\sqrt{1.3156+0.6241}\\approx1.3927\\)。\n4. 原始距离 \\(\\delta=1.4762\\)，所以 \\(d\\ne\\delta\\)，但很接近：MDS 只是近似，不是精确复原。\n5. 用 cmdscale(delta, eig=TRUE) 的 GOF 得到 0.854 和 0.854，两个 GoF 相同，因为 Euclidean 距离下所有特征值非负；约 85% 的信息被 2 维保留。\n6. 解读：Olympia Gold Light 与 Pabst Extra Light 靠得近（都是 light 啤酒）；St Pauli Girl 周围竞争者很少。",
    "1. Keep only Fair beers and the numeric columns, standardise (scale), then compute Euclidean distances between every pair (dist) to obtain \\(\\Delta\\); e.g. \\(\\delta(\\text{Blatz},\\text{Tuborg})^2=\\sum_{h=1}^5(\\text{Blatz}_h-\\text{Tuborg}_h)^2\\). Only metric variables are used so Euclidean distance applies (categorical data would need another distance).\n2. Run cmdscale(delta) to get two new variables V1, V2 per beer (e.g. Olympia Gold Light about (-1.976, -1.628)); plot with geom_point, or geom_text with the beer names as labels.\n3. 2D distance: \\(d=\\sqrt{(-0.339-0.808)^2+(1.493-0.703)^2}=\\sqrt{1.3156+0.6241}\\approx1.3927\\).\n4. The original distance is \\(\\delta=1.4762\\), so \\(d\\ne\\delta\\) but they are close: MDS approximates, it does not reproduce distances exactly.\n5. the GOF from cmdscale(delta, eig=TRUE) is 0.854 and 0.854. The two measures coincide because all eigenvalues are non-negative for Euclidean distances; about 85% of the information is retained in 2D.\n6. Reading the map: Olympia Gold Light and Pabst Extra Light are close (both light beers); St Pauli Girl has few close competitors."
   ],
   "answer": [
    "2D 距离 \\(d(\\text{Blatz},\\text{Tuborg})\\approx1.3927\\)，原始 \\(\\delta=1.4762\\)（近似但不相等）；GoF1 = GoF2 = 0.854。",
    "2D distance d(Blatz, Tuborg) is about 1.3927 versus original delta = 1.4762 (close but not equal); GoF1 = GoF2 = 0.854."
   ],
   "pages": [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    21,
    39,
    40
   ],
   "concepts": [
    "etx5500-mds-beer-example",
    "etx5500-mds-r-workflow",
    "etx5500-mds-gof",
    "etx5500-mds-classical-algorithm"
   ],
   "source": "MDS.pdf",
   "tags": [
    "classical MDS",
    "cmdscale",
    "GoF",
    "beer"
   ]
  },
  {
   "id": "ex-etx5500-mds-australia-roads",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "澳大利亚城市公路距离的 MDS 与拟合评估",
    "MDS of Australian road distances and its fit"
   ],
   "problem": [
    "给定 8 个城市（Cairns、Brisbane、Sydney、Melbourne、Adelaide、Perth、Darwin、Alice Springs）之间的公路距离（km），例如 Brisbane–Sydney 996，Sydney–Melbourne 868，Melbourne–Adelaide 728，Cairns–Perth 5954，Darwin–Alice Springs 1511。公路弯曲，所以距离不是 Euclidean。要求：只用这些距离做 2 维 classical MDS 画出城市位置图，说明旋转的作用，并根据特征值与 GoF 评价结果（课件给出：cmdscale(doz, eig=TRUE) 的 GOF 为 0.8372 和 0.9231，最小的两个特征值为 -1.083e+06 与 -2.180e+06）。",
    "Given road distances (km) between 8 Australian cities (Cairns, Brisbane, Sydney, Melbourne, Adelaide, Perth, Darwin, Alice Springs), e.g. Brisbane-Sydney 996, Sydney-Melbourne 868, Melbourne-Adelaide 728, Cairns-Perth 5954, Darwin-Alice Springs 1511. Roads wiggle, so the distances are non-Euclidean. Task: build a 2D classical MDS map of the cities from these distances alone, explain the role of rotation, and evaluate the fit from the eigenvalues and GoF (slides report the GOF from cmdscale(doz, eig=TRUE) = 0.8372 and 0.9231, with the two smallest eigenvalues -1.083e+06 and -2.180e+06)."
   ],
   "solution": [
    "1. 把公路距离矩阵当作 \\(\\Delta\\)，对它做 cmdscale，得到每个城市的二维坐标。非 Euclidean 距离也可以用 classical MDS，只是要更小心。\n2. 得到的图可能朝向不对；2D 旋转不改变任何两点间距离，所以可以随意旋转以便解释坐标轴。课件中旋转后 x 轴代表东西方向，y 轴代表南北方向，结果与真实地图非常接近。\n3. 评价拟合：看特征值。最后两个特征值为负（约 -1.08e+06、-2.18e+06），原因是公路距离不是 Euclidean。\n4. 有负特征值意味着 classical MDS 不一定使 strain 最小，而且两个 GoF 不再相等：GoF1 = 0.837，GoF2 = 0.923。\n5. 两个 GoF 都相当高，所以 2D 解是准确的表示。",
    "1. Treat the road-distance matrix as \\(\\Delta\\) and apply cmdscale to get 2D coordinates. Classical MDS can be applied to non-Euclidean distances, but with more care.\n2. The raw picture may be oriented oddly; a 2D rotation leaves all inter-point distances unchanged, so rotate to help interpret the axes. In the slides after rotation the x-axis reads East-West and the y-axis North-South, close to the real map.\n3. Assess fit via the eigenvalues: the last two are negative (about -1.08e+06 and -2.18e+06) because road distances are not Euclidean.\n4. Negative eigenvalues mean classical MDS no longer necessarily minimises strain, and the two GoF measures differ: GoF1 = 0.837, GoF2 = 0.923.\n5. Both GoF values are fairly high, so the 2D solution is an accurate representation."
   ],
   "answer": [
    "得到接近真实地图的 2D 布局；有负特征值（非 Euclidean），GoF1=0.837、GoF2=0.923，二者不同但都很高，2D 解是准确的表示。",
    "A map close to the real one; negative eigenvalues (non-Euclidean), GoF1 = 0.837 and GoF2 = 0.923 differ but are both high, so the representation is accurate."
   ],
   "pages": [
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    41,
    42,
    43
   ],
   "concepts": [
    "etx5500-mds-roads-case",
    "etx5500-mds-gof",
    "etx5500-mds-rotation"
   ],
   "source": "MDS.pdf",
   "tags": [
    "classical MDS",
    "road distance",
    "negative eigenvalues",
    "rotation",
    "GoF"
   ]
  },
  {
   "id": "ex-etx5500-mds-cheese-sorting",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "奶酪分组调查：由分组数据构造距离",
    "Cheese sorting survey: building distances from groupings"
   ],
   "problem": [
    "研究想可视化 16 种奶酪的差异，但不可能让顾客直接给 Euclidean 距离。(1) 说明为什么不让每位顾客对所有奶酪两两打分；(2) 顾客改为把相似奶酪分组，如何定义距离；(3) 4 位顾客分组：A：Brie 与 Camembert 一组，Roquefort 与 Blue Vein 一组；B：只有 Roquefort 与 Blue Vein 一组，其余各自独立；C：每种奶酪各自一组；D：所有奶酪在同一组。求 Brie–Camembert 和 Roquefort–Blue Vein 的距离。",
    "A study wants to visualise differences among 16 cheeses, but customers cannot give Euclidean distances. (1) Why not ask each customer to rate every pair? (2) Customers instead group similar cheeses: how is distance defined? (3) Four customers: A puts Brie with Camembert and Roquefort with Blue Vein; B groups only Roquefort with Blue Vein, others separate; C puts every cheese in its own group; D puts all cheeses in one group. Find the distances for Brie-Camembert and Roquefort-Blue Vein."
   ],
   "solution": [
    "1. 16 种奶酪有 \\(\\binom{16}{2}=120\\) 个两两比较，让参与者做 120 次比较不现实（且产品多时打分法不好）。\n2. 改成分组：两种奶酪被放在同一组的顾客比例是相似度，放在不同组的顾客比例就是距离（dissimilarity）。\n3. Brie 与 Camembert：A 和 D 放同组，B 和 C 放不同组，不同组比例 2/4，距离 = 0.5。\n4. Roquefort 与 Blue Vein：A、B、D 同组，只有 C 不同组，不同组比例 1/4，距离 = 0.25。\n5. 这样得到的距离矩阵可用于 MDS（原研究用的是 Kruskal 算法而非 classical MDS）。",
    "1. With 16 cheeses there are \\(\\binom{16}{2}=120\\) pairs; asking participants for 120 comparisons is impractical (and the rating approach does not suit many products).\n2. Use grouping instead: the proportion of customers who put two cheeses in the same group is the similarity, and the proportion who put them in different groups is the dissimilarity (distance).\n3. Brie and Camembert: A and D group them together, B and C do not; 2 of 4 separate them, so distance = 0.5.\n4. Roquefort and Blue Vein: A, B, D group them, only C separates them; 1 of 4, so distance = 0.25.\n5. The resulting distance matrix feeds MDS (the original study used Kruskal's algorithm, not classical MDS)."
   ],
   "answer": [
    "d(Brie, Camembert) = 0.5；d(Roquefort, Blue Vein) = 0.25；共 120 对比较。",
    "d(Brie, Camembert) = 0.5; d(Roquefort, Blue Vein) = 0.25; 120 pairwise comparisons for 16 cheeses."
   ],
   "pages": [
    44,
    45,
    46,
    47,
    48,
    49
   ],
   "concepts": [
    "etx5500-mds-cheese-case",
    "etx5500-mds-non-euclidean"
   ],
   "source": "MDS.pdf",
   "tags": [
    "cheese",
    "survey",
    "dissimilarity",
    "Kruskal"
   ]
  },
  {
   "id": "ex-etx5500-mds-seriation-sammon",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "把 2D 点降到 1 维（seriation）：classical MDS 与 Sammon 比较",
    "Seriation: reducing 2D points to 1D with classical MDS versus Sammon mapping"
   ],
   "problem": [
    "课件的玩具例子：原始数据是 2D 平面上的点，目标是把它们概括到 1 维（一条直线），这种降到 1 维的 MDS 称为 seriation，给出观测的排序。分别用 classical MDS（最小化 strain）和 Sammon mapping（最小化 stress）保留 1 维，比较 rug plot，并解释为什么深蓝点和黄点在两种方法中的距离不同。（课件只给图，没有数值。）",
    "Toy example from the slides: points lie in a 2D plane and are to be summarised on a line (1D). MDS with a 1D target is called seriation and yields a ranking of observations. Keep one dimension with classical MDS (minimises strain) and with Sammon mapping (minimises stress), compare the rug plots, and explain why the dark-blue and yellow points are at different distances under the two methods. (The slides give only plots, no numbers.)"
   ],
   "solution": [
    "1. Classical MDS 先对 2D 数据做旋转，再保留第一维得到 1 维解（rug plot）。它基于特征值分解，是线性的，不能处理非线性结构，所以深蓝点与黄点在 1D 中显得很近。\n2. Sammon 的 stress 为 \\(\\frac{1}{\\sum_{l<k}\\delta_{lk}}\\sum_{i<j}\\frac{(\\delta_{ij}-d_{ij})^2}{\\delta_{ij}}\\)，权重 \\(1/\\delta_{ij}\\)：原始距离大的点对容许较大误差，距离小的点对几乎不容许误差，所以局部结构被保留。\n3. 因此 Sammon 把两个点表示得较远：它们在原空间里并不很远，但相对局部结构被降权。\n4. Sammon 用数值优化求解，不基于特征值分解、不是旋转，是非线性映射。",
    "1. Classical MDS rotates the 2D data and keeps the first dimension (rug plot). It is eigen-decomposition based and linear, cannot capture non-linearity, so dark-blue and yellow points appear close in 1D.\n2. Sammon minimises \\(\\frac{1}{\\sum_{l<k}\\delta_{lk}}\\sum_{i<j}\\frac{(\\delta_{ij}-d_{ij})^2}{\\delta_{ij}}\\); the weight \\(1/\\delta_{ij}\\) tolerates errors for far-apart pairs but not for nearby pairs, so local structure is preserved.\n3. Hence Sammon shows those two points far apart: they are not that far in the original space, but are down-weighted relative to local structure.\n4. Sammon is solved by numerical optimisation: not eigen-decomposition, not a rotation, a non-linear mapping."
   ],
   "answer": [
    "Classical MDS 把深蓝与黄点放得很近（线性）；Sammon 把它们放得较远（非线性、保局部结构）。",
    "Classical MDS puts the dark-blue and yellow points close (linear); Sammon puts them far apart (non-linear, preserves local structure)."
   ],
   "pages": [
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61
   ],
   "concepts": [
    "etx5500-mds-stress-sammon",
    "etx5500-mds-strain"
   ],
   "source": "MDS.pdf",
   "tags": [
    "Sammon",
    "stress",
    "seriation",
    "non-linearity"
   ]
  },
  {
   "id": "ex-etx5500-mds-kruskal-invariance",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "Kruskal 算法对单调变换的不变性（isoMDS）",
    "Invariance of Kruskal's algorithm to monotone transformations (isoMDS)"
   ],
   "problem": [
    "对啤酒距离 d 先用 isoMDS(d)，再用 isoMDS(d^2)（距离平方，单调变换）。课件输出：isoMDS(d) 的最终 stress 5.611143；isoMDS(d^2) 的最终 stress 5.603035。问：两次得到的 2D 图有何关系？为何 Kruskal 算法有这种性质？exp 与 sin 哪个是单调函数？",
    "For the beer distances d, run isoMDS(d) and then isoMDS(d^2) (squaring is a monotone transformation). The slides report final stress 5.611143 for isoMDS(d) and 5.603035 for isoMDS(d^2). How do the two 2D plots relate, and why does Kruskal's algorithm behave this way? Which of exp and sin is monotone?"
   ],
   "solution": [
    "1. Kruskal 最小化 \\(\\left[\\frac{1}{\\sum_{l<k}d_{lk}}\\sum_{i<j}[f(\\delta_{ij})-d_{ij}]^2\\right]^{1/2}\\)，其中 f 是单调函数，由算法自行选择，因此输入距离做任何单调变换，解不应改变。\n2. 单调指处处递增或处处递减：exp 是单调的，sin 不是。\n3. 数值结果：stress 5.611 与 5.603，略有不同；图基本相同，只是整体稍微旋转，因为数值优化依赖起始值。\n4. 重要性：解只依赖距离的排序（rank，排名本身是单调变换），所以可用于只知道顺序的 ordinal 数据。",
    "1. Kruskal minimises \\(\\left[\\frac{1}{\\sum_{l<k}d_{lk}}\\sum_{i<j}[f(\\delta_{ij})-d_{ij}]^2\\right]^{1/2}\\) where f is a monotone function chosen by the algorithm, so any monotone transformation of the input distances should not change the solution.\n2. Monotone means always increasing or always decreasing: exp is monotone, sin is not.\n3. Numerically stress is 5.611 versus 5.603, slightly different; the plots are essentially the same up to a slight rotation, because numerical optimisation depends on starting values.\n4. Why it matters: the solution depends only on the ordering of distances (ranks are themselves a monotone transform), so it works for ordinal data."
   ],
   "answer": [
    "两张图本质相同（略有旋转，stress 5.611 vs 5.603）；原因是 f 单调可调；exp 单调，sin 不单调。",
    "Same solution up to a slight rotation (stress 5.611 vs 5.603), because f is a free monotone function; exp is monotone, sin is not."
   ],
   "pages": [
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69
   ],
   "concepts": [
    "etx5500-mds-kruskal-nonmetric"
   ],
   "source": "MDS.pdf",
   "tags": [
    "Kruskal",
    "isoMDS",
    "stress",
    "monotone"
   ]
  },
  {
   "id": "ex-etx5500-mds-nonmetric-ordinal",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "只有顺序信息时的 non-metric MDS",
    "Non-metric MDS with ordinal dissimilarities"
   ],
   "problem": [
    "假设只知道三对奶酪的相异度顺序：\\(\\delta_{\\text{Bri,Cam}}<\\delta_{\\text{Roq,Cam}}<\\delta_{\\text{Roq,Bri}}\\)，即 Brie 与 Roquefort 的差异比 Brie 与 Camembert 大，但不知道大多少。如何做 MDS？为什么这对市场调研有用？",
    "Suppose only the ordering of three dissimilarities is known: \\(\\delta_{\\text{Bri,Cam}}<\\delta_{\\text{Roq,Cam}}<\\delta_{\\text{Roq,Bri}}\\); Brie and Roquefort differ more than Brie and Camembert, but by how much is unknown. How can MDS be done, and why is this useful in marketing?"
   ],
   "solution": [
    "1. 距离不是 metric 而是 ordinal，用 non-metric MDS：在约束 \\(f(\\delta_{\\text{Bri,Cam}})<f(\\delta_{\\text{Roq,Cam}})<f(\\delta_{\\text{Roq,Bri}})\\) 下最小化 stress，同时求 \\(f(\\delta_{ij})\\) 与 \\(d_{ij}\\)。\n2. 取排名是一种单调变换，所以 isoMDS 只需要距离的排名（得到排名需要先有一次距离），不需要距离本身。\n3. 这对市场营销很有用：受访者难以可靠地给产品差异打数字，但能给出排序。",
    "1. The dissimilarities are ordinal, not metric, so use non-metric MDS: minimise stress subject to \\(f(\\delta_{\\text{Bri,Cam}})<f(\\delta_{\\text{Roq,Cam}})<f(\\delta_{\\text{Roq,Bri}})\\), finding both \\(f(\\delta_{ij})\\) and \\(d_{ij}\\).\n2. Taking ranks is a monotone transformation, so isoMDS needs only the ranks of the distances (you need distances once to rank them), not the distances themselves.\n3. This suits marketing: survey participants cannot easily or reliably attach numbers to product differences, but they can rank them."
   ],
   "answer": [
    "用 isoMDS 在顺序约束下最小化 stress，只需距离排名；适合受访者只能排序的调查。",
    "Minimise stress under ordering constraints with isoMDS; only the ranks of distances are needed, ideal when respondents can only rank."
   ],
   "pages": [
    70,
    71,
    72
   ],
   "concepts": [
    "etx5500-mds-kruskal-nonmetric"
   ],
   "source": "MDS.pdf",
   "tags": [
    "non-metric MDS",
    "ordinal",
    "isoMDS"
   ]
  },
  {
   "id": "ex-etx5500-mds-cereal-classical",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "Tutorial 6：UScereal 的标准化、classical MDS、异常点与拟合",
    "Tutorial 6: UScereal scaling, classical MDS, outliers and fit"
   ],
   "problem": [
    "MASS 包中的 UScereal 数据：65 个早餐麦片品牌，去掉非数值变量 vitamins、shelf、mfr 后剩 8 个变量（calories、protein、fat、sodium、fibre、carbo、sugars、potassium）。要求：(a) 用 8 维 Euclidean 距离作 MDS 输入，是否应先标准化？(b) 求 2 维 classical MDS 并作图；(c) 图中哪些品牌可能是异常点，原因？(d) 两个 GoF 是多少，相同吗？(e) 有无不可忽略的负特征值，为什么？(f) 若改用 Manhattan 距离，(d)(e) 预期如何变化？",
    "UScereal data (MASS): 65 breakfast cereal brands; after removing non-metric vitamins, shelf, mfr, 8 variables remain (calories, protein, fat, sodium, fibre, carbo, sugars, potassium). Tasks: (a) should the data be scaled before computing 8-dimensional Euclidean distances for MDS? (b) find and plot the 2D classical MDS; (c) which brands look like outliers and why? (d) what are the two GoF values and are they equal? (e) are there non-negligible negative eigenvalues, and why? (f) how would (d) and (e) change with Manhattan distance?"
   ],
   "solution": [
    "(a) 应该标准化：变量单位不同（多数是克，sodium 用微克，calories 是卡路里），不标准化时若把 calories 换成 kJ 或其它变量换成盎司，结果会变。\n(b) scale() 后 dist()，给距离加上麦片名字，cmdscale(cereal_dist, eig=TRUE)，用其 points 部分画 geom_text。\n(c) All Bran、All Bran with extra Fibre、100% Bran、Grape Nuts、Great Grains Pecan 可能是异常点：前三个纤维和蛋白质很高，Grape Nuts 与 Great Grains Pecan 的 calories 和 carbohydrates 很高。\n(d) GOF = 0.698 和 0.698，相同。\n(e) 最小的特征值约 -1e-14，等同于 0，所以特征值都非负，这是预期的，因为输入距离矩阵是 Euclidean。\n(f) Manhattan 距离下可能出现负特征值，这时两个 GoF 可能不同。",
    "(a) Yes, scale: units differ (mostly grams, sodium in micrograms, calories in calories); without standardisation, converting calories to kJ or other variables to ounces would change the result.\n(b) scale() then dist(), attach cereal names, run cmdscale(cereal_dist, eig=TRUE) and plot its points component with geom_text.\n(c) All Bran, All Bran with extra Fibre, 100% Bran, Grape Nuts and Great Grains Pecan are potential outliers: the first three are very high in fibre and protein; Grape Nuts and Great Grains Pecan are high in calories and carbohydrates.\n(d) GOF = 0.698 and 0.698: the same.\n(e) The smallest eigenvalues are about -1e-14, indistinguishable from zero, so all eigenvalues are non-negative, as expected since the input distance matrix is Euclidean.\n(f) With Manhattan distance some eigenvalues can be negative, and then the two GoF measures may differ."
   ],
   "answer": [
    "应标准化；Bran 类与 Grape Nuts/Great Grains Pecan 为潜在异常点；GOF 均为 0.698；无负特征值（Euclidean）；Manhattan 下可能有负值且 GoF 可能不同。",
    "Scale first; bran cereals plus Grape Nuts/Great Grains Pecan are potential outliers; GOF both 0.698; no negative eigenvalues (Euclidean); Manhattan could give negatives and differing GoF."
   ],
   "pages": [],
   "concepts": [
    "etx5500-mds-r-workflow",
    "etx5500-mds-gof",
    "etx5500-distance-standardising",
    "etx5500-mds-classical-algorithm"
   ],
   "source": "MDS.pdf",
   "tags": [
    "tutorial",
    "UScereal",
    "classical MDS",
    "GoF",
    "outliers"
   ]
  },
  {
   "id": "ex-etx5500-mds-cereal-manufacturer-sammon",
   "course": "ETX5500",
   "topic": "e5500-mds",
   "topicName": [
    "多维尺度分析 MDS",
    "Multidimensional scaling"
   ],
   "title": [
    "Tutorial 6：按厂商着色的 MDS 与 Sammon mapping",
    "Tutorial 6: MDS coloured by manufacturer, then Sammon mapping"
   ],
   "problem": [
    "沿用 UScereal 的标准化后距离 cereal_dist 与 2D classical MDS 坐标。(a) 按生产商 mfr 给标签着色重画图，能得出什么结论？有何局限？(b) 用 MASS::sammon(cereal_dist) 重做分析（初始 stress 0.09834，迭代后降至约 0.029），结论是否改变？",
    "Continuing with the UScereal standardised distances cereal_dist and the 2D classical MDS. (a) Redraw the plot with labels coloured by manufacturer: what conclusions can you draw, and what are the limitations? (b) Redo the analysis with MASS::sammon(cereal_dist) (initial stress 0.09834, falling to about 0.029): do the conclusions change?"
   ],
   "solution": [
    "(a) 把 UScereal 的 mfr 列加到 MDS 坐标数据框并用 colour = manufacturer 画图。两大厂商是 General Mills 和 Kellogg's；Kellogg's 品牌更分散（只用点而不用名字更易看出）。General Mills 可能有太多相似品牌互相竞争，可考虑多元化，推出类似 All-Bran 或 100% Bran 的产品。\n局限：bran 市场可能太小而无利可图；相似性只基于营养成分，没有考虑市场需求、销量和盈利能力。\n(b) sammon(cereal_dist) 的 stress 从 0.09834 逐步降到约 0.02897（数值迭代），用同样方式着色画图。结果相当相似，Kellogg's 品牌更多样这一结论反而更清晰一点。报告中只需展示一个解，并说明另一个给出了大致相同的结果。",
    "(a) Add the mfr column of UScereal to the MDS coordinates and plot with colour = manufacturer. The two big manufacturers are General Mills and Kellogg's; Kellogg's brands are more spread out (easier to see with points instead of names). General Mills may have too many similar brands competing and could diversify into something like All-Bran or 100% Bran.\nLimitations: the bran market may be too small to be profitable; similarity is based only on nutrient content, ignoring demand, sales and profitability.\n(b) sammon(cereal_dist) lowers stress from 0.09834 to about 0.02897 over the iterations; plot it in the same coloured way. Results are fairly similar, and the conclusion that Kellogg's brands are more diverse is perhaps a bit clearer. In a report, present just one solution and state that the other gave mostly similar results."
   ],
   "answer": [
    "Kellogg's 品牌更分散，General Mills 品牌相互相似、可考虑多元化（有局限）；Sammon 结论基本不变，Kellogg's 更多样更明显。",
    "Kellogg's brands are more diverse; General Mills' are similar and could diversify (with caveats). Sammon gives similar conclusions, with Kellogg's diversity slightly clearer."
   ],
   "pages": [],
   "concepts": [
    "etx5500-mds-stress-sammon",
    "etx5500-mds-r-workflow"
   ],
   "source": "MDS.pdf",
   "tags": [
    "tutorial",
    "UScereal",
    "Sammon",
    "manufacturer"
   ]
  },
  {
   "id": "ex-etx5500-pca-states-loadings",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "美国各州人类发展数据：PC1/PC2 的权重（loadings）解读",
    "US states human development data: interpreting PC1 and PC2 loadings"
   ],
   "problem": [
    "数据集 states（美国各州）含 5 个变量：Income、Illiteracy、LifeExp、Murder、HSGrad。对标准化数据做 PCA，得到权重：PC1 = (Income 0.347, Illiteracy -0.480, LifeExp 0.469, Murder -0.459, HSGrad 0.467)；PC2 = (0.732, 0.069, -0.324, 0.492, 0.336)。部分州的 PC1 得分如 Alabama -3.47、Alaska 0.55、Colorado 1.73、Connecticut 1.83。请解释 PC1 和 PC2 的含义，并说明 Alabama 的 PC1 得分为何很低。",
    "The states dataset has five variables: Income, Illiteracy, LifeExp, Murder, HSGrad. PCA on the standardised data gives weights PC1 = (Income 0.347, Illiteracy -0.480, LifeExp 0.469, Murder -0.459, HSGrad 0.467) and PC2 = (0.732, 0.069, -0.324, 0.492, 0.336). Some PC1 scores: Alabama -3.47, Alaska 0.55, Colorado 1.73, Connecticut 1.83. Interpret PC1 and PC2 and explain why Alabama's PC1 score is so low."
   ],
   "solution": [
    "1. 每个 PC 是原变量（标准化后）的线性组合 \\(PC_k=\\sum_j w_{jk} y_j^*\\)；PC1 是方差最大的组合，PC2 是在与 PC1 不相关的前提下方差最大的组合。\n2. 权重符号：正权重表示该变量的高值推高该 PC，负权重表示该变量的缺失（低值）推高该 PC；权重绝对值越大越重要。\n3. PC1：Income、LifeExp、HSGrad 为正（约 0.35 到 0.47），Illiteracy、Murder 为负（约 -0.46 到 -0.48），五个权重大小接近。所以 PC1 近似是一个综合“发展水平”指数：收入高、寿命长、毕业率高、文盲率和谋杀率低的州得分高。\n4. PC2：Income 权重 0.732 最大，Murder 0.492、HSGrad 0.336 为正，LifeExp -0.324 为负，Illiteracy 几乎为 0，因此 PC2 主要刻画与 PC1 不同的信息（主要是收入，同时伴随较高谋杀率）。解释带主观性，需谨慎。\n5. Alabama 的 PC1 得分为 -3.47，是低收入、高文盲、高谋杀率、低寿命和低毕业率共同作用的结果，与表中原始数据（Income 3624、Illiteracy 2.1、Murder 15.1、HSGrad 41.3）一致。",
    "1. Each PC is a linear combination of the standardised variables, \\(PC_k=\\sum_j w_{jk} y_j^*\\). PC1 has maximal variance; PC2 has maximal variance subject to being uncorrelated with PC1.\n2. Sign reading: a positive weight means a high value of the variable raises the PC; a negative weight means the variable's absence (a low value) raises it; larger magnitude means more important.\n3. PC1: Income, LifeExp and HSGrad are positive (about 0.35 to 0.47), Illiteracy and Murder are negative (about -0.46 to -0.48), all of similar size. So PC1 is roughly an overall development index: states with high income, long life, high graduation and low illiteracy and murder score high.\n4. PC2: Income has the largest weight 0.732, Murder 0.492 and HSGrad 0.336 are positive, LifeExp -0.324 negative, Illiteracy almost 0. PC2 captures information not in PC1 (mostly income, with higher murder rate). Such interpretations are subjective, so be cautious.\n5. Alabama's PC1 score of -3.47 reflects low income, high illiteracy, high murder rate, low life expectancy and low graduation together, consistent with its raw values (Income 3624, Illiteracy 2.1, Murder 15.1, HSGrad 41.3)."
   ],
   "answer": [
    "PC1 是综合发展指数（Income、LifeExp、HSGrad 正向，Illiteracy、Murder 负向）；PC2 主要由 Income（0.732）驱动，与 PC1 不相关。Alabama 各项指标都差，故 PC1 很低。",
    "PC1 is an overall development index (Income, LifeExp, HSGrad positive; Illiteracy, Murder negative). PC2 is driven mainly by Income (0.732) and is uncorrelated with PC1. Alabama is poor on all indicators, hence its very low PC1."
   ],
   "pages": [
    14,
    15,
    17,
    20
   ],
   "concepts": [
    "etx5500-pca-loadings",
    "etx5500-pca-states-case",
    "etx5500-pca-second-pc"
   ],
   "source": "PCA.pdf",
   "tags": [
    "PCA",
    "loadings",
    "interpretation"
   ]
  },
  {
   "id": "ex-etx5500-pca-states-correlation-biplot",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "根据相关矩阵与 correlation biplot 判断变量间夹角",
    "Reading variable angles in the correlation biplot against the correlation matrix"
   ],
   "problem": [
    "states 数据的相关矩阵：Income-HSGrad 0.620，LifeExp-Income 0.340，Murder-LifeExp -0.781，Illiteracy-Murder 0.703，Income-Murder -0.230。在 correlation biplot 中，Income 与 HSGrad、LifeExp 与 Income、Murder 与 LifeExp 这三对变量的箭头夹角分别大约是多少？为什么？另外，如何从 biplot 近似读出某个州在某变量上的取值？",
    "Correlation matrix of the states data: Income-HSGrad 0.620, LifeExp-Income 0.340, Murder-LifeExp -0.781, Illiteracy-Murder 0.703, Income-Murder -0.230. In the correlation biplot, roughly what angle do the arrows make for Income vs HSGrad, LifeExp vs Income, and Murder vs LifeExp, and why? Also, how do you read off approximately a state's value on a variable from the biplot?"
   ],
   "solution": [
    "1. correlation biplot 中，两个变量箭头的夹角近似反映它们的相关性：夹角接近 0 度表示高度正相关，接近 90 度表示近似不相关，接近 180 度表示高度负相关。\n2. Income 与 HSGrad：相关系数 0.620，较高的正相关，幻灯片指出夹角接近 0。\n3. LifeExp 与 Income：相关系数仅 0.340，较弱，幻灯片指出两者近似不相关，夹角接近 90 度。\n4. Murder 与 LifeExp：相关系数 -0.781，强负相关，夹角接近 180 度。\n5. 读取取值：把每个变量看作一条坐标轴，从某个点向该轴作最短（垂直）线，垂足在轴上的位置就近似该州此变量的取值。\n6. 另外，当数据已中心化或标准化时，correlation biplot 中观测点间的 Mahalanobis 距离近似原空间距离；保留全部 PC 时则完全相等。",
    "1. In a correlation biplot the angle between two variable arrows approximates their correlation: near 0 degrees means strongly positive, near 90 degrees means roughly uncorrelated, near 180 degrees means strongly negative.\n2. Income vs HSGrad: correlation 0.620, strongly positive; the slides say the angle is close to zero.\n3. LifeExp vs Income: correlation only 0.340; the slides say they are close to uncorrelated, angle near 90 degrees.\n4. Murder vs LifeExp: correlation -0.781, strongly negative; angle near 180 degrees.\n5. Reading values: treat each variable as an axis, draw the shortest (perpendicular) line from the point to the axis; the foot position approximates that state's value of the variable.\n6. Also, for centred or standardised data, Mahalanobis distance between points in the biplot approximates their distance in the original space, and equals it if all PCs are retained."
   ],
   "answer": [
    "约 0 度、约 90 度、约 180 度。从点向变量轴作垂线，垂足位置近似该变量取值。",
    "About 0, 90 and 180 degrees respectively. Drop a perpendicular from the point to the variable's axis; the foot approximates the variable's value."
   ],
   "pages": [
    29,
    30,
    31,
    32
   ],
   "concepts": [
    "etx5500-pca-biplots",
    "etx5500-pca-states-case"
   ],
   "source": "PCA.pdf",
   "tags": [
    "biplot",
    "correlation",
    "angle"
   ]
  },
  {
   "id": "ex-etx5500-pca-states-standardisation",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "标准化对 PCA 权重的影响（states 数据）",
    "Effect of standardisation on PCA weights (states data)"
   ],
   "problem": [
    "states 数据中 Income 约在 3000 到 6500 美元之间，LifeExp 约在 67 到 74 岁之间。对三种版本数据做 PCA 并比较 PC1 权重：Std（z-score 标准化）、Unstd（原始数据）、Diff units（Income 以千美元计，LifeExp 以天计）。PC1 权重（Income, Illiteracy, LifeExp, Murder, HSGrad）：Std = (0.3473, -0.4803, 0.4686, -0.4594, 0.4670)；Unstd = (1.0000, -0.0004, 0.0007, -0.0014, 0.0081)；Diff units = (0.0004, -0.0007, 0.9999, -0.0059, 0.0096)。请解释三列为何不同，并说明什么时候该标准化。",
    "In the states data, Income ranges from about 3000 to 6500 dollars and LifeExp from about 67 to 74 years. PCA is run on three versions: Std (z-scores), Unstd (raw data) and Diff units (Income in thousands of dollars, LifeExp in days). PC1 weights (Income, Illiteracy, LifeExp, Murder, HSGrad): Std = (0.3473, -0.4803, 0.4686, -0.4594, 0.4670); Unstd = (1.0000, -0.0004, 0.0007, -0.0014, 0.0081); Diff units = (0.0004, -0.0007, 0.9999, -0.0059, 0.0096). Explain why the columns differ and when to standardise."
   ],
   "solution": [
    "1. PCA 最大化方差，所以尺度大的变量天然方差大，会主导 PC1。\n2. Unstd：Income 的数值范围（几千）远大于其他变量，方差最大，故 PC1 权重几乎全落在 Income 上（1.0000），其余接近 0。\n3. Diff units：把 Income 改为千美元，数值只有约 3 到 6.5，而 LifeExp 改为天后约 24471 到 27029，LifeExp 方差变得最大，PC1 权重变成 LifeExp 0.9999。\n4. Std：z-score 标准化后每个变量方差为 1，没有变量因单位占优，五个权重大小相近（约 0.35 到 0.48），反映的是变量之间的相关结构。\n5. 结论：PCA 权重受数据尺度影响。变量单位相同时无需标准化；单位不同则应标准化；拿不准就标准化。标准化公式 \\(y_j^*=(y_j-\\bar y_j)/s_j\\)。",
    "1. PCA maximises variance, so a variable on a larger scale has a larger variance and dominates PC1.\n2. Unstd: Income (thousands) has by far the largest variance, so PC1 puts almost all weight on Income (1.0000) and about zero on the rest.\n3. Diff units: Income in thousands is only about 3 to 6.5, while LifeExp in days runs from about 24471 to 27029, so LifeExp now has the largest variance and PC1 puts weight 0.9999 on it.\n4. Std: after z-scoring every variable has variance 1, no variable wins because of its unit, and the five weights are of similar size (about 0.35 to 0.48), reflecting the correlation structure.\n5. Conclusion: PCA weights depend on data scale. Same units: no need to standardise; different units: standardise; if in doubt, standardise. Formula \\(y_j^*=(y_j-\\bar y_j)/s_j\\)."
   ],
   "answer": [
    "不标准化时 PC1 被尺度最大的变量主导（Income 或以天计的 LifeExp）；单位不同或拿不准时应标准化。",
    "Without standardisation PC1 is dominated by the variable with the largest scale (Income, or LifeExp in days). Standardise when units differ or when in doubt."
   ],
   "pages": [
    43,
    44,
    45,
    46
   ],
   "concepts": [
    "etx5500-pca-standardisation",
    "etx5500-pca-covariance-eigen"
   ],
   "source": "PCA.pdf",
   "tags": [
    "standardisation",
    "scale",
    "PCA weights"
   ]
  },
  {
   "id": "ex-etx5500-pca-states-number-of-pcs",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "states 数据：方差解释比例、Kaiser 规则与主成分个数",
    "States data: variance explained, Kaiser's rule and how many PCs"
   ],
   "problem": [
    "对标准化的 states 数据（5 个变量）运行 prcomp，summary 输出：标准差 PC1 到 PC5 = 1.7892, 0.9686, 0.6317, 0.55561, 0.3909；方差比例 = 0.6403, 0.1876, 0.0798, 0.06174, 0.0305；累计比例 = 0.6403, 0.8279, 0.9077, 0.96943, 1.0000。(a) 验证 PC1 的方差占比；(b) 前两个 PC 解释多少总方差？(c) 按 Kaiser 规则应选几个 PC？",
    "prcomp on the standardised states data (5 variables) gives standard deviations for PC1 to PC5 of 1.7892, 0.9686, 0.6317, 0.55561, 0.3909; proportion of variance 0.6403, 0.1876, 0.0798, 0.06174, 0.0305; cumulative proportion 0.6403, 0.8279, 0.9077, 0.96943, 1.0000. (a) Verify PC1's variance share; (b) how much total variance do the first two PCs explain? (c) How many PCs does Kaiser's rule select?"
   ],
   "solution": [
    "1. 标准化后总方差等于变量个数 \\(p=5\\)（因为 \\(\\sum \\mathrm{var}(C_i)=\\sum \\mathrm{var}(Y_j)\\)）。\n2. (a) PC1 方差 \\(1.7892^2\\approx 3.201\\)，占比 \\(3.201/5\\approx 0.640\\)，与输出的 0.6403 一致。\n3. (b) 累计比例表中 PC2 处为 0.8279，即前两个 PC 解释约 82.8% 的方差（幻灯片总结页文字写作 84%，与此输出略有出入，以 summary 输出为准）。对 biplot 来说这个数越高，图越准确。\n4. (c) Kaiser 规则（用于标准化数据）：选方差大于 1 的 PC。PC1 方差 3.201 大于 1；PC2 方差 \\(0.9686^2\\approx 0.938<1\\)，不满足，所以只选 1 个 PC。\n5. 若目的是画 biplot，则必须取 2 个 PC，并检查它们的累计解释比例。",
    "1. After standardisation total variance equals the number of variables \\(p=5\\), since \\(\\sum \\mathrm{var}(C_i)=\\sum \\mathrm{var}(Y_j)\\).\n2. (a) PC1 variance \\(1.7892^2\\approx 3.201\\), share \\(3.201/5\\approx 0.640\\), matching the 0.6403 in the output.\n3. (b) The cumulative proportion at PC2 is 0.8279, so the first two PCs explain about 82.8% (the slides' text elsewhere says 84%, slightly different; use the summary output). For a biplot, the higher this number the more accurate the plot.\n4. (c) Kaiser's rule (for standardised data) keeps PCs with variance greater than 1. PC1 variance 3.201 > 1; PC2 variance \\(0.9686^2\\approx 0.938<1\\), so it fails. Only 1 PC is kept.\n5. If the goal is a biplot, two PCs must be used regardless; check their cumulative explained proportion."
   ],
   "answer": [
    "PC1 占 64.0%；前两个 PC 累计约 82.8%；Kaiser 规则只选 1 个 PC。",
    "PC1 explains 64.0%; the first two PCs together about 82.8%; Kaiser's rule selects just 1 PC."
   ],
   "pages": [
    37,
    38,
    50,
    55,
    56
   ],
   "concepts": [
    "etx5500-pca-number-of-pcs",
    "etx5500-pca-variance-decomposition"
   ],
   "source": "PCA.pdf",
   "tags": [
    "variance explained",
    "Kaiser",
    "scree"
   ]
  },
  {
   "id": "ex-etx5500-pca-stock-watson-macro",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "Stock and Watson 宏观数据：用少数 PC 概括 109 个时间序列",
    "Stock and Watson macro data: summarising 109 time series with a few PCs"
   ],
   "problem": [
    "Stock and Watson 数据集含 109 个宏观经济变量，分属 Output、Prices、Labour、Finance 四类。无法逐一查看 109 条时间序列。如何用 PCA 概括整体宏观状况？取前 3 个 PC 时解释多少总方差？这说明什么？",
    "The Stock and Watson dataset has 109 macroeconomic variables in the categories Output, Prices, Labour and Finance. One cannot inspect 109 time series plots. How can PCA summarise general macro conditions, and how much total variance do the first 3 PCs explain? What does it show?"
   ],
   "solution": [
    "1. 对 109 个变量做 PCA，会得到 109 个 PC，全部合起来解释全部方差 \\(\\sum_{i=1}^{p}\\mathrm{var}(C_i)=\\sum_{j=1}^{p}\\mathrm{var}(Y_j)\\)。\n2. 不看 109 条原序列，而是画前几个 PC 的时间序列图，用它们代表整体宏观状况。\n3. 幻灯片给出的结果：3 个 PC 解释 109 个变量总变异的 35%。\n4. 含义：少数 PC 通常能解释较大比例的方差（第一个 states 例子 2 个 PC 解释 84% 的 5 个变量），但这里变量多、相关性相对弱，3 个 PC 只有 35%，所以降维的效果取决于数据的相关结构。幻灯片没有给出每个 PC 的具体权重或更多数字。",
    "1. PCA on 109 variables gives 109 PCs which together explain all the variance, \\(\\sum_{i=1}^{p}\\mathrm{var}(C_i)=\\sum_{j=1}^{p}\\mathrm{var}(Y_j)\\).\n2. Instead of 109 raw series, plot the time series of the first few PCs to represent general macro conditions.\n3. Result stated in the slides: 3 PCs explain 35% of the total variation of the 109 variables.\n4. Meaning: a few PCs often explain a large share (the first states example: 2 PCs explain 84% of 5 variables), but here with many, less strongly related variables, 3 PCs give only 35%, so the payoff of dimension reduction depends on the correlation structure. The slides give no individual weights or further numbers."
   ],
   "answer": [
    "用前 3 个 PC 的时间序列代替 109 条序列，它们共解释约 35% 的总变异。",
    "Plot the first 3 PCs as time series in place of the 109 series; together they explain about 35% of total variation."
   ],
   "pages": [
    33,
    34,
    35,
    37,
    38
   ],
   "concepts": [
    "etx5500-pca-why-index",
    "etx5500-pca-first-pc",
    "etx5500-pca-number-of-pcs"
   ],
   "source": "PCA.pdf",
   "tags": [
    "time series",
    "variance explained",
    "dimension reduction"
   ]
  },
  {
   "id": "ex-etx5500-pca-boston-variance-kaiser-scree",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "Boston 房价数据：标准化、方差解释、Kaiser 规则与碎石图",
    "Boston housing data: standardisation, variance explained, Kaiser's rule and scree plot"
   ],
   "problem": [
    "Boston 数据每行是一个城镇，含 14 个变量（CRIM、ZN、INDUS、CHAS、NOX、RM、AGE、DIS、RAD、TAX、PTRATIO、B、LSTAT、MEDV），单位各不相同。(a) 做 PCA 前是否要标准化？(b) 对标准化数据 prcomp 后，标准差 PC1 到 PC8 = 2.5098, 1.3058, 1.2335, 1.0033, 0.89191, 0.87632, 0.7427, 0.61795；方差比例 = 0.4499, 0.1218, 0.1087, 0.0719, 0.05682, 0.05485, 0.0394, 0.02728；累计前 4 个为 0.7523。前 4 个 PC 共解释多少方差？PC2 单独解释多少？(c) Kaiser 规则选几个 PC？(d) 碎石图（scree plot）的肘部出现在第 2 个 PC，应选几个 PC？与 Kaiser 规则一致吗？",
    "The Boston data has one row per town and 14 variables (CRIM, ZN, INDUS, CHAS, NOX, RM, AGE, DIS, RAD, TAX, PTRATIO, B, LSTAT, MEDV) in different units. (a) Should the data be standardised before PCA? (b) After prcomp on standardised data the standard deviations for PC1 to PC8 are 2.5098, 1.3058, 1.2335, 1.0033, 0.89191, 0.87632, 0.7427, 0.61795; proportions of variance 0.4499, 0.1218, 0.1087, 0.0719, 0.05682, 0.05485, 0.0394, 0.02728; cumulative proportion at PC4 is 0.7523. How much variance do the first four PCs explain, and PC2 alone? (c) How many PCs does Kaiser's rule select? (d) The scree plot elbow appears at the second PC; how many PCs should be used, and does this agree with Kaiser's rule?"
   ],
   "solution": [
    "1. (a) 变量单位不同，所以必须标准化，使结果不受计量单位影响；R 中用 prcomp(scale. = TRUE)，并把 Town 列设为行名。\n2. (b) 读 summary 的 Cumulative Proportion：前 4 个 PC 累计 0.7523，即 75.23%。PC2 的 Proportion of Variance 为 0.1218，即 12.18%。\n3. (c) Kaiser 规则：选方差（或标准差）大于 1 的 PC。PC1 到 PC4 的标准差分别为 2.5098、1.3058、1.2335、1.0033，都大于 1；PC5 为 0.89191 小于 1。所以选 4 个。\n4. (d) 碎石图在第 2 个 PC 处出现肘部（曲线开始变平），因此按碎石图应选 2 个 PC。\n5. 比较：碎石图给 2 个，Kaiser 规则给 4 个，两种准则结论不同，实际选择取决于分析目的。",
    "1. (a) The variables are in different units, so standardise so that results are not sensitive to units; in R use prcomp(scale. = TRUE) with Town as row names.\n2. (b) Read the Cumulative Proportion row: the first four PCs reach 0.7523, i.e. 75.23%. PC2's Proportion of Variance is 0.1218, i.e. 12.18%.\n3. (c) Kaiser's rule keeps PCs with variance (or standard deviation) above 1. PC1 to PC4 have standard deviations 2.5098, 1.3058, 1.2335, 1.0033, all above 1; PC5 is 0.89191, below 1. So 4 PCs.\n4. (d) The scree plot has its elbow at the second PC (the curve flattens), so the scree plot suggests 2 PCs.\n5. Comparison: scree gives 2, Kaiser gives 4; the two criteria disagree, and the choice depends on the purpose of the analysis."
   ],
   "answer": [
    "需要标准化；前 4 个 PC 解释 75.23%，PC2 单独 12.18%；Kaiser 规则选 4 个，碎石图肘部建议 2 个，两者不一致。",
    "Standardise; first four PCs explain 75.23%, PC2 alone 12.18%; Kaiser's rule picks 4, the scree elbow suggests 2, so they differ."
   ],
   "pages": [],
   "concepts": [
    "etx5500-pca-number-of-pcs",
    "etx5500-pca-variance-decomposition",
    "etx5500-pca-standardisation"
   ],
   "source": "PCA.pdf",
   "tags": [
    "tutorial",
    "Kaiser",
    "scree",
    "Boston"
   ]
  },
  {
   "id": "ex-etx5500-pca-boston-biplot-questions",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "Boston 数据：用 correlation / distance biplot 回答解读问题",
    "Boston data: answering interpretation questions from the correlation and distance biplots"
   ],
   "problem": [
    "对标准化的 Boston 数据做 PCA 后画出 correlation biplot（biplot(boston_pca)）和 distance biplot（biplot(boston_pca, scale = 0)）。请回答：(a) 举出两个强正相关的变量；(b) 两个强负相关的变量；(c) 两个弱相关的变量；(d) 两个相似的城镇与两个差异大的城镇；(e) 描述城镇 354 的特征；(f) 哪个城镇犯罪率高且师生比高？（图本身不在题目中，答案以标准解答给出的例子为准。）",
    "After PCA on the standardised Boston data, draw the correlation biplot (biplot(boston_pca)) and the distance biplot (biplot(boston_pca, scale = 0)). Answer: (a) two strongly positively associated variables; (b) two strongly negatively associated variables; (c) two weakly associated variables; (d) two similar towns and two different towns; (e) describe the characteristics of town 354; (f) name a town with high crime and a high pupil-teacher ratio. (The plots are not reproduced here; answers follow the model solution's examples.)"
   ],
   "solution": [
    "1. (a) correlation biplot 中箭头方向相同表示正相关，例如 AGE 与 NOX。\n2. (b) 箭头方向相反表示负相关，例如 AGE 与 DIS。\n3. (c) 箭头成 90 度表示弱相关，例如 NOX 与 PTRATIO。\n4. (d) distance biplot 中点靠得近表示城镇相似，例如 153 与 155；点相距很远表示差异大，例如 284 与 381。\n5. (e) 城镇 354（两种 biplot 均可）：与高 DIS（远离就业中心）和高 ZN（以住宅区为主）相关联，与 AGE、INDUS 负相关，MEDV 很可能较高。\n6. (f) 把 CRIM 与 PTRATIO 的箭头向外延长，从各城镇点向这两条轴作垂线，垂足离中心越远，该变量取值越高；答案为城镇 381。\n7. 注意：biplot 读数只是近似。",
    "1. (a) In the correlation biplot, arrows pointing in the same direction mean positive correlation, e.g. AGE and NOX.\n2. (b) Arrows pointing in opposite directions mean negative correlation, e.g. AGE and DIS.\n3. (c) Arrows at 90 degrees mean weak association, e.g. NOX and PTRATIO.\n4. (d) In the distance biplot, close points are similar towns, e.g. 153 and 155; far-apart points are different, e.g. 284 and 381.\n5. (e) Town 354 (either biplot works): associated with high DIS (far from employment centres) and high ZN (mostly residential), negatively associated with AGE and INDUS, and MEDV is likely high.\n6. (f) Extend the CRIM and PTRATIO arrows, drop perpendiculars from the town points onto these axes; the further the foot is from the centre, the higher the value. The answer is town 381.\n7. Remember that biplot readings are only approximations."
   ],
   "answer": [
    "例：AGE-NOX 正相关，AGE-DIS 负相关，NOX-PTRATIO 弱相关；153 与 155 相似，284 与 381 差异大；354 高 DIS、高 ZN；城镇 381 高犯罪且高师生比。",
    "E.g. AGE-NOX positive, AGE-DIS negative, NOX-PTRATIO weak; 153 and 155 similar, 284 and 381 different; 354 has high DIS and ZN; town 381 has high crime and high pupil-teacher ratio."
   ],
   "pages": [],
   "concepts": [
    "etx5500-pca-biplots",
    "etx5500-pca-loadings"
   ],
   "source": "PCA.pdf",
   "tags": [
    "tutorial",
    "biplot",
    "Boston"
   ]
  },
  {
   "id": "ex-etx5500-pca-boston-distance-pc-space",
   "course": "ETX5500",
   "topic": "e5500-pca",
   "topicName": [
    "主成分分析 PCA",
    "Principal component analysis"
   ],
   "title": [
    "Boston 数据：PC 空间中的欧氏距离与原始标准化距离比较",
    "Boston data: Euclidean distance in PC space versus standardised data space"
   ],
   "problem": [
    "可选练习：对 Boston 标准化数据做 PCA。(a) 用全部 PC 得分计算城镇 153 与其他城镇的欧氏距离，找出最近的 5 个；(b) 用标准化后的原始数据（scale()）计算同样的距离并比较；(c) 只用前 3 个 PC 计算距离并比较。已知结果：全部 PC 时，城镇 153 最近的是 155（1.65）、220（3.56）、152（3.77）、154（3.97）；前 3 个 PC 时是 155（0.876）、160（1.44）、152（1.51）、154（1.54）。",
    "Optional exercise: run PCA on the standardised Boston data. (a) Using all PC scores, compute Euclidean distances from town 153 to the other towns and find the 5 closest; (b) compute the same distances on the standardised raw data (scale()) and compare; (c) use only the first 3 PCs and compare. Reported results: with all PCs, the closest to town 153 are 155 (1.65), 220 (3.56), 152 (3.77), 154 (3.97); with 3 PCs they are 155 (0.876), 160 (1.44), 152 (1.51), 154 (1.54)."
   ],
   "solution": [
    "1. (a) 在 R 中对 the x component of boston_pca 用 dist() 计算距离矩阵，取 153 这一列最小的 5 项：153（0）、155（1.65）、220（3.56）、152（3.77）、154（3.97）。\n2. (b) 对 scale() 后的原始数据做同样的 dist()，得到完全相同的数值：155 为 1.65，220 为 3.56，152 为 3.77，154 为 3.97。\n3. (c) 两者相同的原因：保留全部 PC 时，PC 空间是标准化数据空间的一个旋转，距离不变。\n4. (d) 只用前 3 个 PC：最近邻变成 155（0.876）、160（1.44）、152（1.51）、154（1.54）。距离都变小，且排序中 220 被 160 取代。\n5. 结论：降维后的 PC 空间距离只是原距离的近似（舍去了后面 PC 的差异），所以距离变小、近邻顺序可能改变。",
    "1. (a) In R apply dist() to the x component of boston_pca and take the 5 smallest entries in column 153: 153 (0), 155 (1.65), 220 (3.56), 152 (3.77), 154 (3.97).\n2. (b) The same dist() on the scale()d raw data gives identical values: 155 is 1.65, 220 is 3.56, 152 is 3.77, 154 is 3.97.\n3. (c) They agree because with all PCs retained, PC space is a rotation of the standardised data space, so distances are preserved.\n4. (d) With only the first 3 PCs the nearest are 155 (0.876), 160 (1.44), 152 (1.51), 154 (1.54). Distances shrink and 160 replaces 220 in the list.\n5. Conclusion: distances in the reduced PC space are only approximations (differences in dropped PCs are lost), so distances shrink and neighbour ranking can change."
   ],
   "answer": [
    "全部 PC 的距离与标准化数据距离完全相同（如 153 到 155 为 1.65）；只用前 3 个 PC 时距离只是近似（153 到 155 为 0.876）。",
    "With all PCs the distances equal those on standardised data (e.g. 153 to 155 is 1.65); with only 3 PCs they are merely approximations (153 to 155 is 0.876)."
   ],
   "pages": [
    27
   ],
   "concepts": [
    "etx5500-pca-pca-mds",
    "etx5500-pca-biplots",
    "etx5500-pca-variance-decomposition"
   ],
   "source": "PCA.pdf",
   "tags": [
    "tutorial",
    "distance",
    "Euclidean",
    "approximation"
   ]
  },
  {
   "id": "ex-etx5500-factor-conformable-dims",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "练习：因子模型的矩阵维度是否相容",
    "Your turn: conformability and the dimension of cov(xi)"
   ],
   "problem": [
    "因子模型写成 \\(\\mathbf{y}_i=\\Lambda\\mathbf{f}_i+\\boldsymbol\\xi_i\\)，其中 \\(\\mathbf{y}_i\\) 是 \\(p\\times1\\) 的观测向量，\\(\\Lambda\\) 是 \\(p\\times r\\) 的载荷矩阵，\\(\\mathbf{f}_i\\) 是 \\(r\\times1\\) 的因子向量，\\(\\boldsymbol\\xi_i\\) 是 \\(p\\times1\\) 的特有误差向量。(a) 验证所有矩阵乘法和加法都是相容的；(b) \\(\\boldsymbol\\xi_i\\) 的协方差矩阵是几乘几？",
    "In the factor model \\(\\mathbf{y}_i=\\Lambda\\mathbf{f}_i+\\boldsymbol\\xi_i\\), \\(\\mathbf{y}_i\\) is a \\(p\\times1\\) vector of observed values, \\(\\Lambda\\) is the \\(p\\times r\\) loading matrix, \\(\\mathbf{f}_i\\) is the \\(r\\times1\\) factor vector and \\(\\boldsymbol\\xi_i\\) is the \\(p\\times1\\) vector of variation not explained by the common factors. (a) Verify that every matrix product and sum is conformable. (b) What are the dimensions of the covariance matrix of \\(\\boldsymbol\\xi_i\\)?"
   ],
   "solution": [
    "1. 乘法 \\(\\Lambda\\mathbf{f}_i\\)：\\(\\Lambda\\) 的列数 \\(r\\) 等于 \\(\\mathbf{f}_i\\) 的行数 \\(r\\)，所以可以相乘，结果是 \\(p\\times1\\)。2. 加法：\\(\\Lambda\\mathbf{f}_i\\) 和 \\(\\boldsymbol\\xi_i\\) 都是 \\(p\\times1\\)，可以相加，结果与 \\(\\mathbf{y}_i\\) 同为 \\(p\\times1\\)，等式两边维度一致。3. \\(\\boldsymbol\\xi_i\\) 有 \\(p\\) 个分量，其协方差矩阵 \\(\\mathrm{cov}(\\boldsymbol\\xi_i)\\) 是 \\(p\\times p\\)。按照模型假设（各变量误差互不相关、各自方差为 \\(\\psi_j\\)），它是对角矩阵 \\(\\Psi=\\mathrm{diag}(\\psi_1,\\dots,\\psi_p)\\)。（幻灯片只提出问题，这里的答案由已给维度直接推出。）",
    "1. Product \\(\\Lambda\\mathbf{f}_i\\): the number of columns of \\(\\Lambda\\) is \\(r\\), equal to the number of rows of \\(\\mathbf{f}_i\\), so the product exists and is \\(p\\times1\\). 2. Sum: \\(\\Lambda\\mathbf{f}_i\\) and \\(\\boldsymbol\\xi_i\\) are both \\(p\\times1\\), so they can be added and the result matches \\(\\mathbf{y}_i\\), which is \\(p\\times1\\); both sides of the equation have the same dimension. 3. \\(\\boldsymbol\\xi_i\\) has \\(p\\) components, so \\(\\mathrm{cov}(\\boldsymbol\\xi_i)\\) is \\(p\\times p\\). Under the model assumptions (errors uncorrelated across variables with variances \\(\\psi_j\\)) it is the diagonal matrix \\(\\Psi=\\mathrm{diag}(\\psi_1,\\dots,\\psi_p)\\). (The slides only pose the question; this answer follows directly from the stated dimensions.)"
   ],
   "answer": [
    "所有乘法/加法都相容，\\(\\Lambda\\mathbf{f}_i\\) 为 \\(p\\times1\\)；\\(\\mathrm{cov}(\\boldsymbol\\xi_i)\\) 是 \\(p\\times p\\)（对角矩阵 \\(\\Psi\\)）。",
    "All products and sums are conformable, with \\(\\Lambda\\mathbf{f}_i\\) being \\(p\\times1\\); \\(\\mathrm{cov}(\\boldsymbol\\xi_i)\\) is \\(p\\times p\\) (the diagonal matrix \\(\\Psi\\))."
   ],
   "pages": [
    14,
    16,
    19
   ],
   "concepts": [
    "etx5500-factor-model-form",
    "etx5500-factor-covariance-structure",
    "etx5500-matrix-matrix-multiplication"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "dimensions",
    "model",
    "your-turn"
   ]
  },
  {
   "id": "ex-etx5500-factor-rotation-correlation",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "练习：用矩阵代数验证旋转后因子的相关性",
    "Your turn: factor correlation after orthogonal vs oblique rotation"
   ],
   "problem": [
    "因子模型 \\(\\mathbf{y}_i=\\Lambda\\mathbf{f}_i+\\boldsymbol\\xi_i\\)，正交因子模型满足 \\(\\mathrm{cov}(\\mathbf{f}_i)=I_r\\)。设 \\(R\\) 是 \\(r\\times r\\) 正交旋转矩阵（\\(R^\\top R=RR^\\top=I\\)），\\(G\\) 是可逆矩阵（\\(GG^{-1}=I\\)），新载荷与新因子分别为 \\(\\tilde\\Lambda=\\Lambda R^\\top,\\ \\tilde{\\mathbf{f}}_i=R\\mathbf{f}_i\\)（正交旋转），以及 \\(\\tilde\\Lambda=\\Lambda G,\\ \\tilde{\\mathbf{f}}_i=G^{-1}\\mathbf{f}_i\\)（斜交旋转）。用矩阵代数验证：(1) 正交旋转保持因子不相关；(2) 斜交旋转使因子相关。",
    "Take the factor model \\(\\mathbf{y}_i=\\Lambda\\mathbf{f}_i+\\boldsymbol\\xi_i\\) with \\(\\mathrm{cov}(\\mathbf{f}_i)=I_r\\). Let \\(R\\) be an \\(r\\times r\\) orthogonal rotation matrix (\\(R^\\top R=RR^\\top=I\\)) and \\(G\\) an invertible matrix (\\(GG^{-1}=I\\)). The rotated loadings and factors are \\(\\tilde\\Lambda=\\Lambda R^\\top,\\ \\tilde{\\mathbf{f}}_i=R\\mathbf{f}_i\\) (orthogonal) and \\(\\tilde\\Lambda=\\Lambda G,\\ \\tilde{\\mathbf{f}}_i=G^{-1}\\mathbf{f}_i\\) (oblique). Use matrix algebra to verify: (1) orthogonal rotation keeps the factors uncorrelated; (2) oblique rotation makes the factors correlated."
   ],
   "solution": [
    "1. 正交旋转：因子均值仍为 0，\\(\\mathrm{cov}(\\tilde{\\mathbf{f}}_i)=R\\,\\mathrm{cov}(\\mathbf{f}_i)R^\\top=R\\,I\\,R^\\top=RR^\\top=I\\)。新因子方差仍为 1 且互不相关，并且 \\(\\Lambda R^\\top R\\mathbf{f}_i=\\Lambda\\mathbf{f}_i\\)，模型对数据的拟合不变。2. 斜交旋转：\\(\\mathrm{cov}(\\tilde{\\mathbf{f}}_i)=G^{-1}I(G^{-1})^\\top=G^{-1}(G^{-1})^\\top=(G^\\top G)^{-1}\\)。除非 \\(G\\) 是正交矩阵，这个矩阵不是单位阵，非对角元素非零，因此新因子相关，其协方差即斜交情形的 \\(\\Phi\\)。3. 与教程的数值结果一致：无旋转与 varimax 的因子得分相关矩阵接近单位阵，promax 的则有明显的非零相关。（幻灯片只提出问题，上述推导依据幻灯片给出的定义。）",
    "1. Orthogonal rotation: the mean is still zero and \\(\\mathrm{cov}(\\tilde{\\mathbf{f}}_i)=R\\,\\mathrm{cov}(\\mathbf{f}_i)R^\\top=R\\,I\\,R^\\top=RR^\\top=I\\). The new factors still have unit variance and are uncorrelated, and \\(\\Lambda R^\\top R\\mathbf{f}_i=\\Lambda\\mathbf{f}_i\\) so the fit to the data is unchanged. 2. Oblique rotation: \\(\\mathrm{cov}(\\tilde{\\mathbf{f}}_i)=G^{-1}I(G^{-1})^\\top=G^{-1}(G^{-1})^\\top=(G^\\top G)^{-1}\\). Unless \\(G\\) is orthogonal this is not the identity, so it has non-zero off-diagonal entries: the new factors are correlated, and this matrix plays the role of \\(\\Phi\\) in the oblique case. 3. This matches the tutorial numbers: the factor-score correlation matrices for no rotation and varimax are close to the identity, whereas promax shows clearly non-zero correlations. (The slides only pose the question; the derivation uses the definitions on the slides.)"
   ],
   "answer": [
    "正交旋转后 \\(\\mathrm{cov}(\\tilde f)=RR^\\top=I\\)（仍不相关）；斜交旋转后 \\(\\mathrm{cov}(\\tilde f)=(G^\\top G)^{-1}\\neq I\\)（因子相关）。",
    "After orthogonal rotation \\(\\mathrm{cov}(\\tilde f)=RR^\\top=I\\) (still uncorrelated); after oblique rotation \\(\\mathrm{cov}(\\tilde f)=(G^\\top G)^{-1}\\neq I\\) (correlated factors)."
   ],
   "pages": [
    42,
    43,
    48,
    55
   ],
   "concepts": [
    "etx5500-factor-oblique",
    "etx5500-factor-rotations",
    "etx5500-factor-assumptions"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "rotation",
    "orthogonal",
    "oblique",
    "your-turn"
   ]
  },
  {
   "id": "ex-etx5500-factor-boston-pca",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "Boston housing 数据：PCA 能否给出可解释的成分",
    "Boston housing: can the principal components be interpreted?"
   ],
   "problem": [
    "Boston housing 数据含 100 个城镇（观测）和 13 个变量（去掉 CHAS 后）：CRIM、ZN、INDUS、NOX、RM、AGE、DIS、RAD、TAX、PTRATIO、B、LSTAT、MEDV。对数据标准化后用 prcomp 做 PCA，得到 PC1 的标准差 2.5094、PC2 的标准差 1.2755，PC1 方差占比 0.4844、PC2 方差占比 0.1251，累计比例 0.6096。问：两个主成分解释了多少方差？这些主成分能否被解释？为什么？",
    "The Boston housing data has 100 towns (observations) and 13 variables once CHAS is dropped: CRIM, ZN, INDUS, NOX, RM, AGE, DIS, RAD, TAX, PTRATIO, B, LSTAT and MEDV. PCA is run with prcomp on the standardised data. The output gives standard deviations 2.5094 (PC1) and 1.2755 (PC2), proportions of variance 0.4844 and 0.1251, and cumulative proportion 0.6096. How much variation do two PCs explain? Can the PCs be interpreted, and why or why not?"
   ],
   "solution": [
    "1. 读取输出：PC1 解释 48.44% 的方差，PC2 解释 12.51%，累计 60.96%，所以仅 2 个 PC 就解释了所有变量近 60% 的变化。2. 能否解释？幻灯片的结论是：有时可以，但在这个例子里很难。3. 原因：PCA 只是寻找使方差最大的线性组合，并没有设定模型，所以得到的成分不一定对应有意义的概念（distance biplot 也看不出清晰含义）。4. 要获得具有解释意义的因子，需要引入因子模型（factor model），这就引出后面的 factor analysis。",
    "1. Read the output: PC1 explains 48.44% of the variance, PC2 explains 12.51%, cumulative 60.96%, so just 2 PCs capture nearly 60% of the variation in all variables. 2. Can they be interpreted? The slides say sometimes, but in this example it is difficult. 3. Reason: PCA just finds linear combinations that maximise variance and assumes no model, so the components need not correspond to meaningful concepts (the distance biplot does not reveal clear meaning either). 4. To obtain factors with some interpretation we need a factor model, which motivates factor analysis."
   ],
   "answer": [
    "2 个 PC 解释约 60% 的方差，但很难解释，因为 PCA 只最大化方差；需要因子模型才能得到可解释的因子。",
    "Two PCs explain about 60% of the variance but are hard to interpret because PCA only maximises variance; a factor model is needed for interpretable factors."
   ],
   "pages": [
    4,
    8,
    10,
    12
   ],
   "concepts": [
    "etx5500-factor-pca-vs-fa",
    "etx5500-pca-loadings",
    "etx5500-factor-boston-two-factor"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "PCA",
    "Boston",
    "interpretation"
   ]
  },
  {
   "id": "ex-etx5500-factor-boston-2factor-unrotated",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "Boston housing：两因子模型（不旋转）的载荷与解释",
    "Boston housing: two-factor model without rotation"
   ],
   "problem": [
    "对 Boston housing 数据（100 个城镇，去掉 CHAS 后 13 个变量）用 R 的 factanal 拟合 2 个因子且不旋转（factors = 2, rotation = 'none'）。输出的载荷（小载荷被隐藏）为：Factor1 的 TAX 0.977、RAD 0.925、INDUS 0.750、NOX 0.629、MEDV -0.622、DIS -0.612、LSTAT 0.533、AGE 0.532、CRIM 0.549、PTRATIO 0.473、B -0.459、ZN -0.404、RM -0.280；Factor2 的 NOX -0.625、AGE -0.572、DIS 0.569、INDUS -0.515、ZN 0.454、LSTAT -0.389、RM 0.380、MEDV 0.304、RAD 0.285、PTRATIO 0.247。SS loadings 为 5.076 和 2.069，累计方差比例 0.390 和 0.550。问：这些因子是否容易解释？",
    "Fit a two-factor model without rotation to the Boston housing data (100 towns, 13 variables after dropping CHAS) with factanal(factors = 2, rotation = 'none'). The printed loadings (small ones suppressed) are: Factor1: TAX 0.977, RAD 0.925, INDUS 0.750, NOX 0.629, MEDV -0.622, DIS -0.612, LSTAT 0.533, AGE 0.532, CRIM 0.549, PTRATIO 0.473, B -0.459, ZN -0.404, RM -0.280; Factor2: NOX -0.625, AGE -0.572, DIS 0.569, INDUS -0.515, ZN 0.454, LSTAT -0.389, RM 0.380, MEDV 0.304, RAD 0.285, PTRATIO 0.247. The SS loadings are 5.076 and 2.069, with cumulative variance proportions 0.390 and 0.550. Are the factors easy to interpret?"
   ],
   "solution": [
    "1. 看 Factor1：几乎所有变量都有明显载荷（从 0.28 到 0.98 的绝对值），所以它“把所有东西都考虑进去了”。2. 看 Factor2：除了 CRIM、TAX、B 外，其余变量也都有较大载荷。3. 比例方差：Factor1 解释 39.0%，Factor2 再解释 15.9%，累计 55.0%。4. 结论：由于两个因子都在大多数变量上有载荷，很难给出清楚的含义。如果 Factor1 只在一小组变量上有载荷、Factor2 只在另一小组变量上有载荷，解释就容易得多，这就引出旋转（rotation）。",
    "1. Factor1: almost every variable has a visible loading (absolute values from 0.28 up to 0.98), so it takes everything into account. 2. Factor2: all variables except CRIM, TAX and B also load clearly. 3. Variance shares: Factor1 explains 39.0%, Factor2 a further 15.9%, cumulative 55.0%. 4. Conclusion: because both factors load on most variables, no clean meaning emerges. Interpretation would be much easier if factor 1 loaded on a small set of variables and factor 2 on a different small set, which motivates rotation."
   ],
   "answer": [
    "未旋转的两因子难以解释：Factor1 涉及几乎所有变量，Factor2 涉及除 CRIM、TAX、B 外的所有变量；需要旋转。",
    "The unrotated two factors are hard to interpret: Factor1 involves nearly everything and Factor2 everything except crime, taxes and the race variable; rotation is needed."
   ],
   "pages": [
    35,
    36,
    38,
    41
   ],
   "concepts": [
    "etx5500-factor-boston-two-factor",
    "etx5500-factor-mle",
    "etx5500-factor-model-form"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "factanal",
    "loadings",
    "Boston",
    "unrotated"
   ]
  },
  {
   "id": "ex-etx5500-factor-boston-2factor-rotations",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "Boston housing：两因子的 varimax 与 promax 旋转及解释",
    "Boston housing: varimax versus promax rotation of the two-factor model"
   ],
   "problem": [
    "接上例，对 Boston housing 的两因子模型分别设 rotation = 'varimax' 和 rotation = 'promax'。varimax 的载荷（fl1, fl2）为：CRIM (0.216, 0.509)、ZN (-0.595, -0.123)、INDUS (0.821, 0.393)、NOX (0.856, 0.233)、RM (-0.469, -0.053)、AGE (0.762, 0.175)、DIS (-0.799, -0.246)、RAD (0.215, 0.944)、TAX (0.401, 0.897)、PTRATIO (0.022, 0.534)、B (-0.315, -0.348)、LSTAT (0.603, 0.268)、MEDV (-0.574, -0.387)。promax 的载荷为：CRIM (0.078, 0.506)、ZN (-0.649, 0.079)、INDUS (0.818, 0.148)、NOX (0.913, -0.048)、RM (-0.526, 0.113)、AGE (0.824, -0.081)、DIS (-0.843, 0.013)、RAD (-0.072, 1.007)、TAX (0.159, 0.884)、PTRATIO (-0.156, 0.606)、B (-0.248, -0.284)、LSTAT (0.609, 0.085)、MEDV (-0.534, -0.233)。问：旋转是否让因子更好解释？给出 promax 下两个因子的解释。",
    "Continuing the Boston housing two-factor model, refit with rotation = 'varimax' and with rotation = 'promax'. Varimax loadings (fl1, fl2): CRIM (0.216, 0.509), ZN (-0.595, -0.123), INDUS (0.821, 0.393), NOX (0.856, 0.233), RM (-0.469, -0.053), AGE (0.762, 0.175), DIS (-0.799, -0.246), RAD (0.215, 0.944), TAX (0.401, 0.897), PTRATIO (0.022, 0.534), B (-0.315, -0.348), LSTAT (0.603, 0.268), MEDV (-0.574, -0.387). Promax loadings: CRIM (0.078, 0.506), ZN (-0.649, 0.079), INDUS (0.818, 0.148), NOX (0.913, -0.048), RM (-0.526, 0.113), AGE (0.824, -0.081), DIS (-0.843, 0.013), RAD (-0.072, 1.007), TAX (0.159, 0.884), PTRATIO (-0.156, 0.606), B (-0.248, -0.284), LSTAT (0.609, 0.085), MEDV (-0.534, -0.233). Does rotation make the factors easier to interpret? Interpret the two promax factors."
   ],
   "solution": [
    "1. 旋转的原理：对 \\(\\mathbf{y}_i=\\Lambda\\mathbf{f}_i+\\boldsymbol\\xi_i\\) 乘以正交矩阵 \\(R\\)，得到 \\(\\mathbf{y}_i=(\\Lambda R^\\top)(R\\mathbf{f}_i)+\\boldsymbol\\xi_i\\)，新载荷和新因子对数据解释得一样好，且满足全部假设，所以可以选最容易解释的版本。varimax 就是寻找尽可能多接近 0 的载荷。2. varimax 结果：虽然载荷更集中（例如 RAD、TAX 主要在 fl2，NOX、INDUS、AGE、DIS 主要在 fl1），但幻灯片的结论是“解释仍不清楚”。3. 改用斜交旋转 \\(\\tilde\\Lambda=\\Lambda G,\\ \\tilde{\\mathbf{f}}_i=G^{-1}\\mathbf{f}_i\\)，即 promax。4. promax 的 Factor1：与 AGE、NOX、INDUS（非住宅用地比例）、LSTAT 正相关，与 DIS、ZN、RM、MEDV 负相关，解释为“城市工业因子”（urban industrial factor）。5. Factor2：与 CRIM、PTRATIO、TAX、RAD 正相关，与 B 负相关，代表高速公路可达性与城市压力。",
    "1. Idea of rotation: multiply by an orthogonal \\(R\\) to get \\(\\mathbf{y}_i=(\\Lambda R^\\top)(R\\mathbf{f}_i)+\\boldsymbol\\xi_i\\); the new loadings and factors explain the data equally well and satisfy all assumptions, so we may pick the version that is easiest to interpret. Varimax searches for as many loadings close to zero as possible. 2. Varimax result: loadings are more concentrated (RAD and TAX load mainly on fl2; NOX, INDUS, AGE, DIS mainly on fl1), but the slides conclude the interpretation is still unclear. 3. Switch to an oblique rotation \\(\\tilde\\Lambda=\\Lambda G,\\ \\tilde{\\mathbf{f}}_i=G^{-1}\\mathbf{f}_i\\), i.e. promax. 4. Promax Factor 1: positively associated with age, nitric oxide, the share of non-retail area (INDUS) and lower-status residents; negatively associated with distance to employment centres, residential zoning, rooms and house value; it is an urban industrial factor. 5. Factor 2: positively associated with crime, pupil-teacher ratio, taxes and radial-highway access, negatively with the race variable B; it represents highway accessibility and urban pressure."
   ],
   "answer": [
    "varimax 后解释仍不清楚；promax 下 Factor1 是城市工业因子，Factor2 代表高速公路可达性与城市压力。",
    "Varimax still leaves the interpretation unclear; with promax, Factor 1 is an urban industrial factor and Factor 2 represents highway accessibility and urban pressure."
   ],
   "pages": [
    42,
    43,
    44,
    46,
    47,
    48,
    50,
    52
   ],
   "concepts": [
    "etx5500-factor-rotations",
    "etx5500-factor-oblique",
    "etx5500-factor-boston-two-factor"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "varimax",
    "promax",
    "rotation",
    "Boston",
    "interpretation"
   ]
  },
  {
   "id": "ex-etx5500-factor-tut-fourfactor-loading-uniqueness",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "教程：四因子模型的载荷与 uniqueness（MEDV、CRIM）",
    "Tutorial: four-factor loading on PTRATIO and uniqueness of MEDV and CRIM"
   ],
   "problem": [
    "在 Boston housing 数据（去掉 CHAS，因为它是 0/1 的分组变量，不是连续的住房或社会经济特征）上，用 factanal 拟合四因子模型且不旋转：fit_fa <- boston |> column_to_rownames('Town') |> factanal(factors = 4, rotation = 'none')。(1) 第三个因子在变量 PTRATIO 上的载荷是多少？(2) 变量 MEDV 和 CRIM 的 uniqueness 是多少？(3) 解释并比较这两个 uniqueness。",
    "On the Boston housing data (CHAS removed, because it is a 0/1 grouping variable rather than a continuous housing or socioeconomic measure), fit a four-factor model without rotation: fit_fa <- boston |> column_to_rownames('Town') |> factanal(factors = 4, rotation = 'none'). (1) What is the loading of the third factor on PTRATIO? (2) What are the uniquenesses of MEDV and CRIM? (3) Interpret and compare these two uniquenesses."
   ],
   "solution": [
    "1. 载荷存放在 the loadings component of fit_fa 中，取行 PTRATIO、第 3 列，得到 -0.7032。2. uniqueness 存放在 the uniquenesses component of fit_fa 中，取 CRIM 和 MEDV：CRIM 为 0.7081，MEDV 为 0.1053。3. 解释：uniqueness 是变量中不能由所有变量共有的因子解释的方差比例（变量已被标准化，方差为 1）。MEDV 的 0.1053 表示房价中位数有 10.53% 的变化不能被共同因子解释；CRIM 的 0.7081 表示犯罪率有 70.81% 的变化不能被共同因子解释。4. 比较：相比房价，犯罪率中大得多的一部分是特有的（idiosyncratic），而房价的绝大部分变化可由共同因子解释。",
    "1. Loadings are stored in the loadings component of fit_fa; take the row PTRATIO and column 3 to get -0.7032. 2. Uniquenesses are in the uniquenesses component of fit_fa; for CRIM it is 0.7081 and for MEDV 0.1053. 3. Interpretation: the uniqueness is the share of a variable's variance not explained by the common factors (the variables are standardised, so each has variance 1). For MEDV, 0.1053 means 10.53% of the variation in median house value cannot be explained by the common factors; for CRIM, 0.7081 means 70.81% of the variation in crime cannot be explained. 4. Comparison: a much larger part of crime than of house value is idiosyncratic, while most of the variation in house value is explained by the common factors."
   ],
   "answer": [
    "PTRATIO 在第 3 因子上的载荷约为 -0.7032；uniqueness：CRIM 0.7081，MEDV 0.1053，犯罪率的特有成分远大于房价。",
    "The loading of factor 3 on PTRATIO is about -0.7032; uniquenesses are 0.7081 for CRIM and 0.1053 for MEDV, so crime is far more idiosyncratic than house value."
   ],
   "pages": [],
   "concepts": [
    "etx5500-factor-covariance-structure",
    "etx5500-factor-model-form",
    "etx5500-factor-choose-r"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "tutorial",
    "uniqueness",
    "loadings",
    "factanal"
   ]
  },
  {
   "id": "ex-etx5500-factor-tut-standardise",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "教程：先标准化数据，uniqueness 会变吗",
    "Tutorial: does standardising first change the uniquenesses?"
   ],
   "problem": [
    "在上一题的四因子模型（不旋转）基础上，先对 Boston housing 数据用 scale() 标准化，再调用 factanal(factors = 4, rotation = 'none')。MEDV 和 CRIM 的 uniqueness（原来分别为 0.1053 和 0.7081）是否改变？为什么相同或不同？",
    "Starting from the previous four-factor model (no rotation), first standardise the Boston housing data with scale() and then call factanal(factors = 4, rotation = 'none'). Do the uniquenesses of MEDV and CRIM (previously 0.1053 and 0.7081) change? Why are the results the same or different?"
   ],
   "solution": [
    "1. 重新拟合后，标准化数据的结果为 CRIM 0.7081、MEDV 0.1053，与未标准化时完全相同。2. 原因：factanal 函数会自动对数据做标准化（实际上是基于相关矩阵估计），所以事先再标准化不会产生任何变化。3. 这也意味着每个变量的方差为 1，因此 uniqueness 可以直接当成“该变量方差中不能被共同因子解释的比例”来解释。",
    "1. After refitting on the standardised data, CRIM is 0.7081 and MEDV is 0.1053, exactly the same as before. 2. Reason: the factanal function automatically standardises the data (it effectively works with the correlation matrix), so standardising beforehand makes no difference. 3. It also means each variable has variance 1, so a uniqueness can be read directly as the proportion of that variable's variance not explained by the common factors."
   ],
   "answer": [
    "不变：factanal 自动标准化数据，因此 CRIM 仍为 0.7081，MEDV 仍为 0.1053。",
    "No change: factanal standardises automatically, so CRIM is still 0.7081 and MEDV still 0.1053."
   ],
   "pages": [],
   "concepts": [
    "etx5500-factor-covariance-structure",
    "etx5500-pca-standardisation",
    "etx5500-factor-mle"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "tutorial",
    "standardise",
    "uniqueness"
   ]
  },
  {
   "id": "ex-etx5500-factor-tut-fourfactor-interpret-loadings",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "教程：四因子（不旋转）载荷的大小与接近零的识别",
    "Tutorial: large and near-zero loadings of the unrotated four-factor model"
   ],
   "problem": [
    "继续使用 Boston housing 的四因子不旋转模型。载荷表（空白表示接近零）为：CRIM 0.538；ZN (-0.354, 0.488, 0.197, -0.484)；INDUS (0.718, -0.514, 0.123, 0.113)；NOX (0.584, -0.637, 0.327, 空)；RM (-0.265, 0.571, 0.335, 0.425)；AGE (0.480, -0.580, 0.102, 0.256)；DIS (-0.561, 0.553, -0.227, -0.390)；RAD (0.928, 0.200, 空, 空)；TAX 0.996；PTRATIO (0.489, 0.168, -0.703, 0.349)；B (-0.447, 0.170, 空, 空)；LSTAT (0.505, -0.553, -0.294, -0.186)；MEDV (-0.612, 0.508, 0.448, 0.249)。SS loadings 为 4.808、2.541、1.121、0.873，累计方差比例 0.719。对每个因子，指出载荷接近零的变量和载荷最大的变量。",
    "Continue with the unrotated four-factor Boston housing model. The loadings table (blank means close to zero) is: CRIM 0.538; ZN (-0.354, 0.488, 0.197, -0.484); INDUS (0.718, -0.514, 0.123, 0.113); NOX (0.584, -0.637, 0.327, blank); RM (-0.265, 0.571, 0.335, 0.425); AGE (0.480, -0.580, 0.102, 0.256); DIS (-0.561, 0.553, -0.227, -0.390); RAD (0.928, 0.200, blank, blank); TAX 0.996; PTRATIO (0.489, 0.168, -0.703, 0.349); B (-0.447, 0.170, blank, blank); LSTAT (0.505, -0.553, -0.294, -0.186); MEDV (-0.612, 0.508, 0.448, 0.249). SS loadings are 4.808, 2.541, 1.121, 0.873, cumulative variance 0.719. For each factor, identify the loadings close to zero and the large ones."
   ],
   "solution": [
    "1. Factor1：所有变量都有载荷，最大的是 TAX（0.996，表中印成 TX）和 RAD（0.928）。2. Factor2：除 CRIM 和 TAX 外所有变量都有载荷，最大的是 NOX（-0.637）。3. Factor3：除 CRIM、RAD、TAX、B 外都有载荷，最大的是 PTRATIO（-0.703）。4. Factor4：除 CRIM、NOX、RAD、TAX、B 外都有载荷，最大的是 ZN（-0.484）。5. 四个因子累计解释 71.9% 的方差（37.0%、19.5%、8.6%、6.7%）。因为大多数变量同时落在多个因子上，未旋转的解不好解释。",
    "1. Factor1: all variables load, with the largest for TAX (0.996, printed as TX) and RAD (0.928). 2. Factor2: all variables except CRIM and TAX load, with the largest for NOX (-0.637). 3. Factor3: all except CRIM, RAD, TAX and B load, with the largest for PTRATIO (-0.703). 4. Factor4: all except CRIM, NOX, RAD, TAX and B load, with the largest for ZN (-0.484). 5. The four factors together explain 71.9% of the variance (37.0%, 19.5%, 8.6%, 6.7%). Because most variables load on several factors at once, the unrotated solution is hard to interpret."
   ],
   "answer": [
    "Factor1 最大载荷：TAX、RAD；Factor2：NOX；Factor3：PTRATIO；Factor4：ZN；多数变量跨多个因子，难解释。",
    "Largest loadings: TAX and RAD for Factor1, NOX for Factor2, PTRATIO for Factor3, ZN for Factor4; most variables load on several factors, so it is hard to interpret."
   ],
   "pages": [],
   "concepts": [
    "etx5500-factor-model-form",
    "etx5500-factor-rotations"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "tutorial",
    "loadings",
    "interpretation"
   ]
  },
  {
   "id": "ex-etx5500-factor-tut-varimax-4factor",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "教程：四因子模型的 varimax 旋转",
    "Tutorial: varimax rotation of the four-factor model"
   ],
   "problem": [
    "对 Boston housing 做四因子分析并使用 varimax 旋转：factanal(factors = 4, rotation = 'varimax', scores = 'none')。旋转后的载荷为：CRIM (0.169, 0.478, -0.149, 0.112)；ZN (-0.659, 空, 0.175, -0.412)；INDUS (0.694, 0.462, -0.336, 空)；NOX (0.764, 0.333, -0.323, -0.241)；RM (-0.140, 空, 0.816, 空)；AGE (0.735, 0.197, -0.249, 空)；DIS (-0.857, -0.277, 0.110, 空)；RAD (0.172, 0.906, 空, 0.220)；TAX (0.293, 0.926, -0.183, 0.136)；PTRATIO (空, 0.358, -0.136, 0.858)；B (-0.216, -0.353, 0.252, 空)；LSTAT (0.352, 0.243, -0.695, 0.129)；MEDV (-0.270, -0.346, 0.803, -0.240)。SS loadings 为 3.179、2.782、2.258、1.123，累计 0.719。varimax 的效果好吗？",
    "Carry out the four-factor analysis with a varimax rotation: factanal(factors = 4, rotation = 'varimax', scores = 'none'). The rotated loadings are: CRIM (0.169, 0.478, -0.149, 0.112); ZN (-0.659, blank, 0.175, -0.412); INDUS (0.694, 0.462, -0.336, blank); NOX (0.764, 0.333, -0.323, -0.241); RM (-0.140, blank, 0.816, blank); AGE (0.735, 0.197, -0.249, blank); DIS (-0.857, -0.277, 0.110, blank); RAD (0.172, 0.906, blank, 0.220); TAX (0.293, 0.926, -0.183, 0.136); PTRATIO (blank, 0.358, -0.136, 0.858); B (-0.216, -0.353, 0.252, blank); LSTAT (0.352, 0.243, -0.695, 0.129); MEDV (-0.270, -0.346, 0.803, -0.240). SS loadings are 3.179, 2.782, 2.258, 1.123, cumulative 0.719. Did varimax work well?"
   ],
   "solution": [
    "1. 先看总方差：旋转后四个因子累计解释的方差仍是 71.9%（与未旋转相同），只是在因子之间重新分配（24.5%、21.4%、17.4%、8.6%），说明旋转不改变拟合优度。2. 再看模式：varimax 追求尽可能多的接近 0 的载荷。这里只有第 4 因子较清晰地由 PTRATIO（0.858）主导；前三个因子仍有许多非零载荷（例如 Factor1 同时涉及 ZN、INDUS、NOX、AGE、DIS，Factor2 同时涉及 CRIM、INDUS、NOX、RAD、TAX 等）。3. 结论：varimax 的效果不太好，前三个因子几乎没有零载荷，解释依然困难。",
    "1. Total variance: the four rotated factors still explain 71.9% cumulatively (same as unrotated), merely redistributed across factors (24.5%, 21.4%, 17.4%, 8.6%), so rotation does not change goodness of fit. 2. Pattern: varimax aims for as many near-zero loadings as possible. Here only factor 4 is cleanly dominated by one variable, PTRATIO (0.858); the first three factors still have many non-zero loadings (Factor1 involves ZN, INDUS, NOX, AGE and DIS together, Factor2 involves CRIM, INDUS, NOX, RAD, TAX and so on). 3. Conclusion: varimax has not worked too well, since the first three factors have very few zero loadings and interpretation remains difficult."
   ],
   "answer": [
    "varimax 不改变累计方差（71.9%），但前三个因子几乎没有零载荷，效果不佳、仍难解释。",
    "Varimax leaves cumulative variance unchanged (71.9%), but the first three factors have very few zero loadings, so it works poorly and is still hard to interpret."
   ],
   "pages": [],
   "concepts": [
    "etx5500-factor-rotations",
    "etx5500-factor-boston-two-factor"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "tutorial",
    "varimax",
    "rotation"
   ]
  },
  {
   "id": "ex-etx5500-factor-tut-promax-4factor",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "教程：四因子模型的 promax 旋转与因子命名",
    "Tutorial: promax rotation of the four-factor model and naming the factors"
   ],
   "problem": [
    "对 Boston housing 做四因子分析并使用 promax（斜交）旋转：factanal(factors = 4, rotation = 'promax', scores = 'none')。载荷为：CRIM (空, 空, 0.456, 空)；ZN (-0.755, 空, 0.269, -0.398)；INDUS (0.665, -0.123, 0.258, 空)；NOX (0.799, -0.113, 0.135, -0.325)；RM (0.121, 0.981, 0.183, 空)；AGE (0.806, 空, 空, 空)；DIS (-0.994, -0.189, 空, 空)；RAD (空, 0.114, 0.959, 0.151)；TAX (空, 空, 0.937, 空)；PTRATIO (-0.156, 空, 0.218, 0.866)；B (-0.106, 0.191, -0.288, 空)；LSTAT (0.143, -0.721, 空, 空)；MEDV (空, 0.865, 空, -0.161)。SS loadings 为 3.374、2.355、2.338、1.087，累计 0.704。请解释每个因子的含义。",
    "Carry out the four-factor analysis with a promax (oblique) rotation: factanal(factors = 4, rotation = 'promax', scores = 'none'). The loadings are: CRIM (blank, blank, 0.456, blank); ZN (-0.755, blank, 0.269, -0.398); INDUS (0.665, -0.123, 0.258, blank); NOX (0.799, -0.113, 0.135, -0.325); RM (0.121, 0.981, 0.183, blank); AGE (0.806, blank, blank, blank); DIS (-0.994, -0.189, blank, blank); RAD (blank, 0.114, 0.959, 0.151); TAX (blank, blank, 0.937, blank); PTRATIO (-0.156, blank, 0.218, 0.866); B (-0.106, 0.191, -0.288, blank); LSTAT (0.143, -0.721, blank, blank); MEDV (blank, 0.865, blank, -0.161). SS loadings are 3.374, 2.355, 2.338, 1.087, cumulative 0.704. Interpret each factor."
   ],
   "solution": [
    "1. Factor1：AGE（0.806）和 DIS（-0.994）载荷很大且几乎不落在其他因子上，ZN、NOX、INDUS 的载荷也较大。较高的得分对应更老、更工业化、污染更重、离就业中心更近的城镇，称为“城市工业因子”。2. Factor2：RM（0.981）、LSTAT（-0.721）、MEDV（0.865）载荷高且在其他因子上很弱。较高得分对应房子更贵更大、低社会经济阶层居民更少，称为“社会经济因子”。3. Factor3：RAD（0.959）和 TAX（0.937）载荷高，且 CRIM 只落在这个因子上（0.456）。较高得分对应更高的财产税和更好的高速公路可达性，称为“基础设施因子”。4. Factor4：PTRATIO（0.866）最高，ZN 和 NOX 也有一些载荷但不大。较高得分对应更高的师生比，即教育投入较少，可能是“教育因子”。（教程原文在介绍因子编号时有笔误，这里按载荷表中的因子顺序整理。）",
    "1. Factor1: AGE (0.806) and DIS (-0.994) load strongly with almost zero loadings elsewhere; ZN, NOX and INDUS also load fairly high. Higher scores go with older, more industrialised, more polluted towns closer to employment centres: an urban industrial factor. 2. Factor2: RM (0.981), LSTAT (-0.721) and MEDV (0.865) load high and only weakly on the other factors. Higher scores go with more expensive, larger houses and fewer low-status residents: a socioeconomic factor. 3. Factor3: RAD (0.959) and TAX (0.937) load high, and CRIM loads only on this factor (0.456). Higher scores go with higher property taxes and better highway access: an infrastructure factor. 4. Factor4: PTRATIO (0.866) is the highest; ZN and NOX load on it but not by much. Higher scores mean more students per teacher, i.e. less investment in education: possibly an education factor. (The tutorial text mislabels the factor numbers in places; the factors are ordered here by column of the loadings table.)"
   ],
   "answer": [
    "promax 下四个因子可解释为：城市工业因子、社会经济因子、基础设施因子（RAD、TAX、CRIM）、教育因子（PTRATIO）。",
    "Under promax the four factors read as: urban industrial, socioeconomic, infrastructure (RAD, TAX, CRIM) and education (PTRATIO)."
   ],
   "pages": [],
   "concepts": [
    "etx5500-factor-oblique",
    "etx5500-factor-rotations"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "tutorial",
    "promax",
    "oblique",
    "interpretation"
   ]
  },
  {
   "id": "ex-etx5500-factor-tut-factor-scores-correlation",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "教程：Bartlett 因子得分的相关矩阵（无旋转、varimax、promax）",
    "Tutorial: correlation of Bartlett factor scores under no rotation, varimax and promax"
   ],
   "problem": [
    "对 Boston housing 的四因子模型，用 Bartlett 方法估计因子得分（factanal(..., scores = 'Bartlett')），分别在无旋转、varimax、promax 下计算因子得分的相关矩阵 cor() of the fitted scores。结果：无旋转时所有非对角元素在 \\(10^{-15}\\) 到 \\(10^{-16}\\) 量级；varimax 时非对角元素最大约 0.059（如 Factor1 与 Factor3 为 0.0590，与 Factor2 为 -0.0308）；promax 时 Factor1 与 Factor2 为 -0.573，Factor1 与 Factor3 为 0.516，Factor2 与 Factor3 为 -0.489，Factor3 与 Factor4 为 0.280，Factor1 与 Factor4 为 0.228，Factor2 与 Factor4 为 -0.203。这些结果是否符合预期？为什么？",
    "For the four-factor Boston housing model, estimate factor scores by Bartlett's method (factanal(..., scores = 'Bartlett')) and compute the correlation matrix cor() of the fitted scores under no rotation, varimax and promax. Results: with no rotation all off-diagonal entries are of order 1e-15 to 1e-16; with varimax the largest off-diagonal entry is about 0.059 (Factor1 and Factor3 give 0.0590, Factor1 and Factor2 give -0.0308); with promax Factor1-Factor2 is -0.573, Factor1-Factor3 0.516, Factor2-Factor3 -0.489, Factor3-Factor4 0.280, Factor1-Factor4 0.228 and Factor2-Factor4 -0.203. Are these results what you would expect, and why?"
   ],
   "solution": [
    "1. 无旋转：相关矩阵几乎就是单位阵（非对角元素只有数值误差），说明估计的因子得分互不相关，符合正交因子模型 \\(\\mathrm{cov}(\\mathbf{f}_i)=I_r\\)。2. varimax：非对角元素都很小（最大约 0.06），也近似单位阵，因为 varimax 是正交旋转，保持因子不相关；剩余的小相关来自得分是估计值而不是真实因子。3. promax：非对角元素明显非零（绝对值 0.20 到 0.57），因为 promax 是斜交旋转，会让因子相关，对应 \\(\\mathrm{cov}(\\mathbf{f}_i)=\\Phi\\)。4. 结论：这些结果正如预期。",
    "1. No rotation: the correlation matrix is essentially the identity (off-diagonals are only numerical noise), so the estimated factor scores are uncorrelated, consistent with the orthogonal model \\(\\mathrm{cov}(\\mathbf{f}_i)=I_r\\). 2. Varimax: off-diagonals are all small (at most about 0.06), again close to the identity because varimax is an orthogonal rotation and keeps the factors uncorrelated; the small remaining correlations arise because scores are estimates rather than the true factors. 3. Promax: off-diagonals are clearly non-zero (absolute values 0.20 to 0.57) because promax is an oblique rotation that lets the factors be correlated, corresponding to \\(\\mathrm{cov}(\\mathbf{f}_i)=\\Phi\\). 4. Conclusion: the results are as expected."
   ],
   "answer": [
    "符合预期：无旋转与 varimax 的得分相关矩阵近似单位阵，promax 引入了明显的因子相关。",
    "As expected: unrotated and varimax scores give a near-identity correlation matrix, while promax induces clear correlation between factors."
   ],
   "pages": [
    56,
    57,
    60,
    61
   ],
   "concepts": [
    "etx5500-factor-factor-scores",
    "etx5500-factor-rotations",
    "etx5500-factor-oblique"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "tutorial",
    "factor-scores",
    "Bartlett",
    "rotation"
   ]
  },
  {
   "id": "ex-etx5500-factor-tut-pca-vs-fa",
   "course": "ETX5500",
   "topic": "e5500-factor",
   "topicName": [
    "因子模型",
    "Factor models"
   ],
   "title": [
    "教程：因子分析与 PCA 有何不同",
    "Tutorial: how does factor analysis differ from PCA?"
   ],
   "problem": [
    "在 Boston housing 的分析之后，回答：因子分析（FA）与主成分分析（PCA）有什么区别？请从是否有模型、方差的分解、成分/因子之间的相关性、以及对解释性的关注等方面比较。",
    "After working through the Boston housing analyses, answer: how does factor analysis (FA) differ from PCA? Compare them in terms of whether there is a model, how the variance is decomposed, correlation among components or factors, and focus on interpretation."
   ],
   "solution": [
    "1. PCA 没有假设模型（结构），目标只是找出能解释最大方差的线性组合。主成分之间不相关，但不一定可解释；PCA 最多只能算 FA 的一个粗略起点。2. FA 建立在统计模型之上：每个变量的方差分成共同方差（common variance，由潜在因子解释）和特有方差（unique variance，包含变量特有变化和测量误差）。3. FA 通常假设因子不相关，但这个假设可以放宽（斜交旋转允许因子相关）。4. FA 更关心因子的解释，会努力给出变量的清晰分组，因此在某种程度上比 PCA 更不主观。",
    "1. PCA assumes no model (or structure); its aim is simply to find linear combinations that explain the maximum variance. The principal components are uncorrelated but not necessarily interpretable, and PCA is at most a crude starting point for FA. 2. FA is built around a statistical model: each variable's variance consists of common variance (explained by the latent factors) and unique variance (variable-specific variation and measurement error). 3. Uncorrelated factors are often assumed in FA, but this can be relaxed (oblique rotations allow correlated factors). 4. FA is much more concerned with interpreting the factors and tries hard to give a clear grouping of variables, so it is in a way slightly less subjective than PCA."
   ],
   "answer": [
    "PCA 无模型、只最大化方差；FA 有统计模型，把方差分为共同与特有部分，允许因子相关，更强调解释。",
    "PCA has no model and only maximises variance; FA has a statistical model splitting variance into common and unique parts, can allow correlated factors, and stresses interpretation."
   ],
   "pages": [
    12,
    23
   ],
   "concepts": [
    "etx5500-factor-pca-vs-fa",
    "etx5500-pca-pca-mds"
   ],
   "source": "factor-analysis.pdf",
   "tags": [
    "tutorial",
    "PCA",
    "FA",
    "concept"
   ]
  }
 ]
};
