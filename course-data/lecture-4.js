window.ETF5248Lectures=window.ETF5248Lectures||{};
window.ETF5248Lectures[4]={
  "lecture": 4,
  "source": "ETF2480_ETF5248__Lecture_4 (1).pdf",
  "sha256": "8e01d8db5a371a35f90c006b9ead195602ef8516b207656d16f1a54f82f9cb14",
  "pages": [
    {
      "page": 1,
      "text": "Linear\nProgramming\nExamples 2\nLecture 4\nETF2480&ETF5248 - S2, 2026\nJessica Leung, PhD, CAP-X, SFHEA\n1 / 16",
      "image": "course-materials/etf5248/lecture-4/page-001.jpg"
    },
    {
      "page": 2,
      "text": "T oday’s Goal\nFeasibility problem\nBehind the scene: Simplex Algorithm\n2 / 16",
      "image": "course-materials/etf5248/lecture-4/page-002.jpg"
    },
    {
      "page": 3,
      "text": "Feasibility Problem\nWe talked about feasibility problem in Lecture 2. Let’s look at an example of one.\n3 / 16",
      "image": "course-materials/etf5248/lecture-4/page-003.jpg"
    },
    {
      "page": 4,
      "text": "Leon Burnit advertising agency\nLeon Burnit adveritsing agency is trying to determine a TV advertising schedule for\nPriceler Auto Company. Priceler has three goals:\n– its ads should be seen by at least 40 million high impact manager (HIM)\n– its ads should be seen by at least 60 million leaders in private sector (LIP)\n– its ads should be seen by at least 35 million health informatics worker (HIW)\nLeon Burnit can purchase two types of ads: those shown during football games and\nthose shown during soap operas where, at most, $600,000 can be spent on ads.\nThe advertising costs and potential audiences (in millions of viewers) of a one-minute ad\nof each type are shown in the table\nad HIM LIP HIW cost, $\nfootball 7 10 5 100,000\nsoap opera 3 5 4 60,000\nLeon Burnit must determine the feasibility of this plan.\n4 / 16",
      "image": "course-materials/etf5248/lecture-4/page-004.jpg"
    },
    {
      "page": 5,
      "text": "Leon Burnit advertising agency: formulation\nLet\n–x 1 be the number of minutes of ads shown during football games\n–x 2 be the number of minutes of ads shown during soap operas\nThen we can formulate Leon Burnit’s problem as:\nminimize0\nsubject to7x 1 +3x 2 ≥40\n10x1 +5x 2 ≥60\n5x1 +4x 2 ≥35\n100x1 +60x 2 ≤600\nx1,x 2 ≥0\nWhat can you say about the feasible set? 5 / 16",
      "image": "course-materials/etf5248/lecture-4/page-005.jpg"
    },
    {
      "page": 6,
      "text": "Simplex Algorithm\nEver wondered how R is solving the LPs behind the scene?\n6 / 16",
      "image": "course-materials/etf5248/lecture-4/page-006.jpg"
    },
    {
      "page": 7,
      "text": "Simplex algorithm\n▶invented in 1947 (George Dantzig)\n▶usually developed for LPs in standard form (‘primal’ simplex method)\n▶can also be developed for inequality form LP (‘dual’ simplex method)\n▶in fact, simplex is a family of algorithms\nStep 1.Convert LP to standard form.\nStep 2.Obtain a starting bfs (if possible) from the standard form.\nStep 3.Determine whether the current bfs is optimal.\nifoptimal,quit\nelse,continue\nStep 4.Determine which nonbasic variable should enter (become basic)\nand which basic variable should exit (become nonbasic) to ﬁnd a bfs\nwith a better objective function value.\nStep 5.Pivot, i.e., ﬁnd a new bfs and return to Step 3.\n7 / 16",
      "image": "course-materials/etf5248/lecture-4/page-007.jpg"
    },
    {
      "page": 8,
      "text": "Simplex algorithm\nkey idea: move from a bfs to an adjacent bfs with better objective value\nquestions:\n▶how do we ﬁnd a starting bfs?\nif all constraints are≤, use slack variables as basic\notherwise, use big-M or two-phase method (see later)\n▶when does the algorithm terminate, i.e, when are we optimal?\nfor a max. problem: a bfs is optimal if each nonbasic variable has a\nnonnegative coeﬃcient in row 0\n▶how do we ﬁnd an entering variable?\nchoose nonbasic var. with the smallest negative coeﬃcient in row 0\n▶how do we ﬁnd an exiting variable?\nchoose the winner of the ratio test\n▶how do we pivot?\n8 / 16",
      "image": "course-materials/etf5248/lecture-4/page-008.jpg"
    },
    {
      "page": 9,
      "text": "Example 1: Dakota furniture company\nThe Dakota Furniture company manufactures desk, tables, and chairs. The manufacture\nof each type of furniture requires lumber and two types of skilled labor: ﬁnishing and\ncarpentry. The amount of each resource needed to make each type of furniture is given\nin the table below.\nCurrently, 48 board feet of lumber, 20 ﬁnishing hours, 8 carpentry hours are available. A\ndesk sells for $60, a table for $30, and a chair for $20. Dakota believes that demand for\ndesks and chairs is unlimited, but at most 5 tables can be sold. Because the available\nresources have already been purchased, Dakota wants to maximise total revenue.\nresource desk table chair\nlumber (board feet) 8 6 1\nﬁnishing (hours) 4 2 1.5\ncarpentry (hours) 2 1.5 0.5\n9 / 16",
      "image": "course-materials/etf5248/lecture-4/page-009.jpg"
    },
    {
      "page": 10,
      "text": "Example 1: problem formulation\nmaximize60x 1+30x 2+20x 3\nsubject to8x 1+6x 2+x 3 ≤48\n4x1+2x 2+1.5x 3 ≤20\n2x1+1.5x 2+0.5x 3 ≤8\nx2 ≤5\nxi ≥0\nequivalent to:\nmaximize60x 1+30x 2+20x 3\nsubject to8x 1+6x 2+x 3+s 1 =48\n4x1+2x 2+1.5x 3 +s 2 =20\n2x1+1.5x 2+0.5x 3 +s 3 =8\nx2 +s 4 =5\nx1,x 2,x 3,s 1,s 2,s 3,s 4 ≥0\n10 / 16",
      "image": "course-materials/etf5248/lecture-4/page-010.jpg"
    },
    {
      "page": 11,
      "text": "Example 1: simplex tableau\nmaximizez=60x 1+30x 2+20x 3\nsubject to8x 1+6x 2+x 3+s 1 =48\n4x1+2x 2+1.5x 3 +s 2 =20\n2x1+1.5x 2+0.5x 3 +s 3 =8\nx2 +s 4 =5\nx1,x 2,x 3,s 1,s 2,s 3,s 4 ≥0\nresulting simplex tableau:\nT able: simplex tableau (initial)\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 -60 -30 -20 0 0 0 0 0z= 0\nrow 1 0 8 6 1 1 0 0 0 48s 1 = 48\nrow 2 0 4 2 1.5 0 1 0 0 20s 2 = 20\nrow 3 0 2 1.5 0.5 0 0 1 0 8s 3 = 8\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\n11 / 16",
      "image": "course-materials/etf5248/lecture-4/page-011.jpg"
    },
    {
      "page": 12,
      "text": "Example 1: step 3, 4\nT able: simplex tableau (initial)\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 -60 -30 -20 0 0 0 0 0z= 0\nrow 1 0 8 6 1 1 0 0 0 48s 1 = 48\nrow 2 0 4 2 1.5 0 1 0 0 20s 2 = 20\nrow 3 0 2 1.5 0.5 0 0 1 0 8s 3 = 8\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\n▶Is the current bfs optimal?\nno, three nonbasic variables have negative coeﬃcients in row 0\n▶Choose entering variable\nx1 has the smallest negative coeﬃcient in row 0\n▶Choose exiting variable: perform ratio test to determine how large we can make the entering\nvariable:\nasx 1 increases, the values of the current BVs change to satisfy equations\nneed to make sure current BVs remain nonnegative, for example:\ns1 ≥0=⇒x 1 ≤48/8⇐ ⇒x 1 ≤6\ns2 ≥0=⇒x 1 ≤20/4⇐ ⇒x 1 ≤5 12 / 16",
      "image": "course-materials/etf5248/lecture-4/page-012.jpg"
    },
    {
      "page": 13,
      "text": "Example 1: step 3, 4\nT able: simplex tableau (initial)\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 -60 -30 -20 0 0 0 0 0z= 0\nrow 1 0 8 6 1 1 0 0 0 48s 1 = 48\nrow 2 0 4 2 1.5 0 1 0 0 20s 2 = 20\nrow 3 0 2 1.5 0.5 0 0 1 0 8s 3 = 8\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\n▶Is the current bfs optimal?\nno, three nonbasic variables have negative coeﬃcients in row 0\n▶Choose entering variable\nx1 has the smallest negative coeﬃcient in row 0\n▶Perform ratio test:\nrow 1:x 1 ≤48/8=6\nrow 2:x 1 ≤20/4=5\nrow 3:x 1 ≤8/2=4\n▶Row 3 wins the ratio test, sos 3 will exit (become nonbasic)\n13 / 16",
      "image": "course-materials/etf5248/lecture-4/page-013.jpg"
    },
    {
      "page": 14,
      "text": "Example 1: step 5\nPivot in the entering variable:\n▶Make the entering variable basic in a row that wins the ratio test.\n▶Use elementary row operations to turn thex 1 coeﬃcient in row 3 to 1.\nfor example, divide row 3 by 2.\n▶Use elementary row operations to turn the rest ofx 1 coeﬃcients to 0.\nfor row 1: multiply the new row 3 by 8 and subtract from row 1.\nfor row 2: multiply the new row 3 by 4 and subtract from row 2.\nT able: simplex tableau (iteration 1)\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 0 15 -5 0 0 30 0 240z= 240\nrow 1 0 0 0 -1 1 0 -4 0 16s 1 = 16\nrow 2 0 0 -1 0.5 0 1 -2 0 4s 2 = 4\nrow 3 0 1 0.75 0.25 0 0 0.5 0 4x 1 = 4\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\n14 / 16",
      "image": "course-materials/etf5248/lecture-4/page-014.jpg"
    },
    {
      "page": 15,
      "text": "Example 1: step 5\nT able: simplex tableau (iteration 2)\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 0 5 0 0 10 10 0 280z= 280\nrow 1 0 0 -2 0 1 2 -8 0 24s 1 = 24\nrow 2 0 0 -2 1 0 2 -4 0 8x 3 = 8\nrow 3 0 1 1.25 0 0 -0.5 1.5 0 2x 1 = 2\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\nis the current bfs optimal?\n▶yes, all nonbasic variables have nonnegative coeﬃcients in row 0\nremarks:\n▶after each pivot, each constraint must have a nonnegative rhs\n▶the coeﬃcient of a decision variable in row 0 is often referred to as the variable’sreduced cost\n▶binding constraints have slack variables equal to 0\n15 / 16",
      "image": "course-materials/etf5248/lecture-4/page-015.jpg"
    },
    {
      "page": 16,
      "text": "Complexity\nworst-case:\n▶for most pivoting rules, there exist examples where the number of\niterations grows exponentially withnandm\n▶it is an open question whether there exists a pivoting rule for which\nthe number of iterations is bounded by a polynomial ofnandm\nin practice: very eﬃcient (# of iterations typically grows linearly withm,n)\n16 / 16",
      "image": "course-materials/etf5248/lecture-4/page-016.jpg"
    }
  ],
  "version": 1,
  "title": [
    "可行性与单纯形算法",
    "Feasibility and the simplex algorithm"
  ],
  "overview": [
    "用广告反例理解可行性，再跟随 Dakota 表格完成两次枢轴。",
    "Study advertising feasibility and follow two Dakota simplex pivots."
  ],
  "goals": [
    [
      "解释基本可行解与松弛变量",
      "Explain basic feasible solutions and slacks"
    ],
    [
      "执行入基、比值检验和枢轴",
      "Perform entry, ratio tests and pivots"
    ],
    [
      "读取最优表和紧约束",
      "Read the final tableau and binding constraints"
    ]
  ],
  "cards": [
    {
      "pages": [
        1,
        2,
        3,
        4,
        5
      ],
      "title": [
        "广告计划可行吗？",
        "Is the advertising plan feasible?"
      ],
      "lecture": [
        "本讲从可行性转向单纯形算法。足球/肥皂剧每分钟广告分别触达 HIM (7,3)、LIP (10,5)、HIW (5,4) 百万人，成本分别 100、60 千元。要求覆盖至少 (40,60,35) 百万人，预算≤600 千元。x₁、x₂ 是两类广告分钟数；课件提出可行集问题但没有给出结论。",
        "The lecture moves from feasibility to simplex. Per-minute football/soap ads reach HIM (7,3), LIP (10,5), HIW (5,4) million at costs of 100/60 thousand. Minimum reach is (40,60,35) million with budget≤600 thousand. x₁,x₂ are ad minutes. The slides ask about feasibility without giving a conclusion."
      ],
      "formulas": [
        "\\min0\\quad\\text{s.t. }7x_1+3x_2\\ge40,\\ 10x_1+5x_2\\ge60,\\ 5x_1+4x_2\\ge35,\\ 100x_1+60x_2\\le600,\\ x\\ge0"
      ],
      "explanation": [
        "补充证明不可行：将 LIP 覆盖式乘 10 得 100x₁+50x₂≥600；与预算式比较得 x₂≤0。非负性迫使 x₂=0、x₁=6，但 HIW 仅 30<35，矛盾。",
        "Added infeasibility proof: multiplying LIP coverage by 10 gives 100x₁+50x₂≥600. Comparing with the budget forces x₂≤0, hence x₂=0 and x₁=6. HIW reach is then only 30<35, a contradiction."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k01"
    },
    {
      "pages": [
        6,
        7,
        8
      ],
      "title": [
        "单纯形算法流程与符号约定",
        "Simplex workflow and sign convention"
      ],
      "lecture": [
        "课件介绍 Dantzig 于 1947 年提出的单纯形算法族：转标准形式→找初始基本可行解→检查最优→选择入基/出基→枢轴变换→重复。最大化表格采用 z−cᵀx=0 的第 0 行写法；非基变量该行系数均非负可判最优，选最负者入基，最小比值检验决定出基。",
        "The slides introduce Dantzig’s 1947 simplex family: standardize, find an initial basic feasible solution, test optimality, choose entering/leaving variables, pivot and repeat. For maximization the tableau uses row 0 as z−cᵀx=0. Nonnegative nonbasic coefficients certify optimality; the most negative enters and the ratio test selects the leaving variable."
      ],
      "formulas": [],
      "explanation": [
        "初始松弛变量成为可行基还要求右端非负。比值检验只考虑入基列的正系数；不同教材第 0 行符号可能相反。退化时枢轴可能不严格改善目标。",
        "A slack basis is feasible only with nonnegative right-hand sides. The ratio test uses positive entering-column coefficients only. Other tableau sign conventions reverse the test; degenerate pivots need not strictly improve the objective."
      ],
      "terms": [
        [
          "basic feasible solution (BFS)",
          "基本可行解"
        ],
        [
          "pivot",
          "枢轴变换"
        ],
        [
          "entering / leaving variable",
          "入基／出基变量"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k02"
    },
    {
      "pages": [
        9,
        10
      ],
      "title": [
        "Dakota：建模和松弛变量",
        "Dakota: model and slack variables"
      ],
      "lecture": [
        "x₁、x₂、x₃ 分别是 desk、table、chair。售价 (60,30,20)。木材单位用量 (8,6,1)、精加工 (4,2,1.5)、木工 (2,1.5,0.5)，资源 (48,20,8)，table 销量≤5。资源已购入，所以目标为收入。给每条≤约束加非负松弛变量 s₁…s₄ 得标准形式。",
        "x₁,x₂,x₃ are desks, tables and chairs, with prices (60,30,20). Lumber requirements are (8,6,1), finishing (4,2,1.5), carpentry (2,1.5,0.5), with supplies (48,20,8); tables≤5. Resources are already purchased, so maximize revenue. Add nonnegative slacks s₁…s₄."
      ],
      "formulas": [
        "\\max60x_1+30x_2+20x_3",
        "\\begin{aligned}8x_1+6x_2+x_3+s_1&=48\\\\4x_1+2x_2+1.5x_3+s_2&=20\\\\2x_1+1.5x_2+0.5x_3+s_3&=8\\\\x_2+s_4&=5,\\quad x,s\\ge0\\end{aligned}"
      ],
      "explanation": [
        "",
        ""
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k03"
    },
    {
      "pages": [
        11
      ],
      "title": [
        "初始单纯形表",
        "Initial simplex tableau"
      ],
      "lecture": [
        "初始非基变量 x₁=x₂=x₃=0，基变量为 s=(48,20,8,5)，收入 z=0。表格列按 z,x₁,x₂,x₃,s₁,s₂,s₃,s₄,rhs 排列，第 0 行是 (1,−60,−30,−20,0,0,0,0,0)。四条约束的系数就是上一卡片等式的系数。原始完整表可在第 11 页查看。",
        "Initially x₁=x₂=x₃=0, slacks are (48,20,8,5), and z=0. Columns are z,x₁,x₂,x₃,s₁,s₂,s₃,s₄,rhs. Row 0 is (1,−60,−30,−20,0,0,0,0,0); constraint rows follow the preceding equations. The complete table is on page 11."
      ],
      "formulas": [],
      "explanation": [
        "识别基列：松弛变量各列组成单位矩阵。右端直接给基变量值。",
        "The slack columns form an identity matrix; right-hand sides directly give basic values."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k04"
    },
    {
      "pages": [
        12,
        13
      ],
      "title": [
        "第一次入基与最小比值",
        "First entering variable and ratio test"
      ],
      "lecture": [
        "第 0 行 −60 最负，因此 x₁ 入基。正列比值：48/8=6、20/4=5、8/2=4；最小为 4，所以 s₃ 出基。第 4 行 x₁ 系数为 0，不参加除法。",
        "The most negative row-0 coefficient is −60, so x₁ enters. Positive-column ratios are 48/8=6, 20/4=5 and 8/2=4. The minimum is 4, so s₃ leaves. Row 4 has zero x₁ coefficient and is excluded."
      ],
      "formulas": [
        "\\theta=\\min\\{48/8,20/4,8/2\\}=4"
      ],
      "explanation": [
        "比值不是选最大：最先降到 0 的基变量限制可行步长。超过 4 会让木工松弛量变负。",
        "Use the minimum, not maximum: the first basic variable reaching zero limits the feasible step. Beyond 4 the carpentry slack becomes negative."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k05"
    },
    {
      "pages": [
        14
      ],
      "title": [
        "第一次枢轴后的表",
        "Tableau after the first pivot"
      ],
      "lecture": [
        "第 3 行除以 2，使 x₁ 系数为 1；其他行消去 x₁。新基值 s₁=16、s₂=4、x₁=4、s₄=5，z=240。第 0 行变为 z+15x₂−5x₃+30s₃=240，仍有 −5，尚未最优。",
        "Divide row 3 by 2 and eliminate x₁ elsewhere. New basic values are s₁=16,s₂=4,x₁=4,s₄=5, with z=240. Row 0 is z+15x₂−5x₃+30s₃=240, still containing −5, so it is not optimal."
      ],
      "formulas": [
        "\\begin{aligned}s_1-x_3-4s_3&=16\\\\s_2-x_2+0.5x_3-2s_3&=4\\\\x_1+0.75x_2+0.25x_3+0.5s_3&=4\\\\x_2+s_4&=5\\end{aligned}"
      ],
      "explanation": [
        "下一步 x₃ 入基。正系数比值为 4/0.5=8 和 4/0.25=16，故 s₂ 出基；负系数行不能限制增大 x₃。",
        "Next x₃ enters. Positive-coefficient ratios are 4/0.5=8 and 4/0.25=16, so s₂ leaves; negative coefficients do not bound an increase in x₃."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k06"
    },
    {
      "pages": [
        15
      ],
      "title": [
        "第二次枢轴、最优解与紧约束",
        "Second pivot, optimum and binding constraints"
      ],
      "lecture": [
        "最终第 0 行为 z+5x₂+10s₂+10s₃=280，非基系数均非负。基变量 s₁=24、x₃=8、x₁=2、s₄=5，因此产量 (2,0,8)，收入 280。精加工和木工松弛为 0，是紧约束；木材剩 24，table 上限剩 5。课件称第 0 行决策变量系数为 reduced cost。",
        "Final row 0 is z+5x₂+10s₂+10s₃=280 with nonnegative nonbasic coefficients. Basic values are s₁=24,x₃=8,x₁=2,s₄=5, so production is (2,0,8) and revenue 280. Finishing and carpentry bind; lumber slack is 24 and table-demand slack 5. The lecture calls row-0 decision-variable coefficients reduced costs."
      ],
      "formulas": [
        "\\begin{aligned}s_1-2x_2+2s_2-8s_3&=24\\\\x_3-2x_2+2s_2-4s_3&=8\\\\x_1+1.25x_2-0.5s_2+1.5s_3&=2\\\\x_2+s_4&=5\\end{aligned}"
      ],
      "explanation": [
        "核算：2×60+8×20=280；精加工 2×4+8×1.5=20，木工 2×2+8×0.5=8。非负 rhs 维持基本可行性。",
        "Check: 2×60+8×20=280; finishing is 2×4+8×1.5=20 and carpentry 2×2+8×0.5=8. Nonnegative right-hand sides preserve basic feasibility."
      ],
      "terms": [
        [
          "binding constraint",
          "紧约束"
        ],
        [
          "reduced cost",
          "约化成本／检验数"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k07"
    },
    {
      "pages": [
        16
      ],
      "title": [
        "复杂度：最坏情况与实践",
        "Complexity: worst case and practice"
      ],
      "lecture": [
        "课件指出：许多枢轴规则存在迭代次数随规模指数增长的例子，但实践中单纯形通常高效；课件同时讨论多项式枢轴规则问题。这里保留讲义观点，不声称已核实最新研究进展。",
        "The slides note exponential worst-case iteration examples for many pivot rules, while simplex is usually efficient in practice. They also discuss the polynomial pivot-rule question. This records the lecture discussion, not an independently verified update on current research."
      ],
      "formulas": [],
      "explanation": [
        "“实际通常快”与“最坏情况有多项式保证”是不同结论。",
        "Typical practical speed and a polynomial worst-case guarantee are different claims."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l4-k08"
    }
  ],
  "summary": [
    "Dakota 从 z=0 到 240 再到 280。每次枢轴保留等价方程和可行性；最优判据依赖表格符号约定。",
    "Dakota moves from z=0 to 240 to 280. Pivots preserve equivalent equations and feasibility; the optimality test depends on the tableau sign convention."
  ],
  "exercises": [
    {
      "question": [
        "第一次比值检验为什么不能选择 6？",
        "Why not choose 6 in the first ratio test?"
      ],
      "answer": [
        "木工在 x₁=4 时已经用完；取 6 会违反可行性。",
        "Carpentry is exhausted at x₁=4; choosing 6 violates feasibility."
      ],
      "pages": [
        13
      ]
    },
    {
      "question": [
        "最优解还剩多少木材？",
        "How much lumber remains at the optimum?"
      ],
      "answer": [
        "48−8×2−1×8=24。",
        "48−8×2−1×8=24."
      ],
      "pages": [
        15
      ]
    }
  ],
  "reviewPages": []
};
