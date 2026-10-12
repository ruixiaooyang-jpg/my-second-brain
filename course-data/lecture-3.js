window.ETF5248Lectures=window.ETF5248Lectures||{};
window.ETF5248Lectures[3]={
  "lecture": 3,
  "source": "ETF2480_ETF5248_Lecture_3 (1).pdf",
  "sha256": "495147fc8a144052e607a3933da0b7a40f7f9238f7205d16607d3cad002a3226",
  "pages": [
    {
      "page": 1,
      "text": "Linear\nProgramming\nExamples 1\nLecture 3\nETF2480&ETF5248 - S2, 2026\nJessica Leung, PhD, CAP-X, SFHEA\n1 / 29",
      "image": "course-materials/etf5248/lecture-3/page-001.jpg"
    },
    {
      "page": 2,
      "text": "T oday’s Goal\nThe Diet Problem (and product mix)\nDynamic (multi-period) Problems\nProduction Process\nHow are they related to Businesses?\nThese problems occur in different parts of a business in different\nscenarios, taking different forms or shapes. Recognising these\nare LPs and therefore can be solved efficiently is key.\n2 / 29",
      "image": "course-materials/etf5248/lecture-3/page-002.jpg"
    },
    {
      "page": 3,
      "text": "Have you used a meal\nplanning app?\nWhat do you use it for?\n3 / 29",
      "image": "course-materials/etf5248/lecture-3/page-003.jpg"
    },
    {
      "page": 4,
      "text": ".\nMeal planning: Choosing the\nright recipe or choices of food\nwith a budget or a target calo-\nrie/protein/ﬁbre intake?\nShelf cooking: helping you use\nup what’s in your pantry to stop\nwaste and overspending\n4 / 29",
      "image": "course-materials/etf5248/lecture-3/page-004.jpg"
    },
    {
      "page": 5,
      "text": "The Diet Problem\nDiet problem:choose quantitiesx 1, . . . ,xn ofnfoods\none unit of foodjcostsc j , contains amounta ij of nutrienti\nhealthy diet requires nutrientiin quantity at leastb i\nThe goal is to ﬁnd cheapest healthy diet.\nMathematically, the problem can be formulated as:\nminimizec T x\nsubject toAx≥b\nSeveral variations on this problem can also be formulated as LPs:\n▶can insist on an exact amount of a nutrient in the diet (which gives a\nlinear equality constraint)\n▶can impose an upper bound on the amount of a nutrient\n▶etc.\n5 / 29",
      "image": "course-materials/etf5248/lecture-3/page-005.jpg"
    },
    {
      "page": 6,
      "text": "The Diet Problem\nConsider an instance of the diet optimisation problem:\n▶there are six diﬀerent foods: bread, milk, cheese, potato, ﬁsh, and yogurt\n▶the cost and nutrition values per unit are displayed in the table below\nThe objective is to ﬁnd a minimum-cost diet that contains\n▶at least 300 calories\n▶not more than 10 grams of protein\n▶not less than 10 grams of carbohydrates\n▶and not less than 8 grams of fat\n▶in addition, the diet should contain at least 0.5 unit of ﬁsh and no more than 1 unit\nof milk\nBread Milk Cheese Potato Fish Y ogurt\nCost, $ 2.0 3.5 8.0 1.5 11.0 1.0\nProtein, g 4.0 8.0 7.0 1.3 8.0 9.2\nFat, g 1.0 5.0 9.0 0.1 7.0 1.0\nCarbohydrates, g 15.0 11.7 0.4 22.6 0.0 17.0\nCalories, cal 90 120 106 97 130 180\n6 / 29",
      "image": "course-materials/etf5248/lecture-3/page-006.jpg"
    },
    {
      "page": 7,
      "text": "The Diet Problem: solution\nLetx j be the quantity of foodjchosen. Then the diet problem can be\nformulated as\nminimize2x 1 +3.5x 2 +8x 3 +1.5x 4 +11x 5 +x 6\nsubject to90x 1 +120x 2 +106x 3 +97x 4 +130x 5 +180x 6 ≥300\n4x1 +8x 2 +7x 3 +1.3x 4 +8x 5 +9.2x 6 ≤10\n15x1 +11.7x 2 +0.4x 3 +22.6x 4 +17x 6 ≥10\nx1 +5x 2 +9x 3 +0.1x 4 +7x 5 +x 6 ≥8\nx5 ≥0.5\nx2 ≤1\nxj ≥0,j=1, . . . ,6\nsolution:x ⋆ = (0,0.053,0.449,1.865,0.500,0)withp ⋆ =12.081\n7 / 29",
      "image": "course-materials/etf5248/lecture-3/page-007.jpg"
    },
    {
      "page": 8,
      "text": "Live Coding Time!\nLet’s code the Diet problem together!\n8 / 29",
      "image": "course-materials/etf5248/lecture-3/page-008.jpg"
    },
    {
      "page": 9,
      "text": "The Original Diet Problem\nThe diet problem was one of the ﬁrst optimization problems studied in the 1930s and 1940s. The\nproblem was motivated by the U.S. Army’s desire to minimize the cost of feeding soldiers in the ﬁeld while\nstill providing a healthy diet. George Stigler, one of the early researchers to study the problem made an\neducated guess for the cost of an optimal diet was $39.93 per year (1939 prices).\nLet’s look at the data set. We will re-compute this optimal diet in the workshop. (Let’s hope the meals\nfrom this diet is delicious.)\n9 / 29",
      "image": "course-materials/etf5248/lecture-3/page-009.jpg"
    },
    {
      "page": 10,
      "text": "Product Mix\nWe’ve already seen a few product mix examples by now. The ApplePie (the company\nthat sells laptops and desktops - lecture 1), the Giapetto’s Woodcarving (selling wooden\ntrain and soldier - lecture 2), the Gurobi advertisements (marketing - lecture 2), and the\ndiet problem are problems that solving for optimal mix of product to\norder/produce/prescribe.\n10 / 29",
      "image": "course-materials/etf5248/lecture-3/page-010.jpg"
    },
    {
      "page": 11,
      "text": "Dynamic\n(multi-period)\nProblems\nOften we need to make decisions for business operations for periods ahead.\n11 / 29",
      "image": "course-materials/etf5248/lecture-3/page-011.jpg"
    },
    {
      "page": 12,
      "text": "Multi-period inventory\nSailco Corporation must determine how many sailboats should be produced during each\nof the next four quarters. Demand is known for the next four quarters. Sailco must meet\ndemands on time. At the beginning of the ﬁrst quarter Sailco has an inventory of 10\nsailboats. Sailco must decide at the beginning of each quarter how many sailboats\nshould be produced during each quarter.\nDuring each quarter, Sailco can produce up to 40 sailboats with regular-time labor at a\ntotal cost of $400 per sailboat. By having employees work overtime during the quarter,\nSailco can produce additional sailboats at a total cost of $450 per sailboat. At the end of\neach quarter a carrying or holding cost of $20 per sailboat is incurred.\nUse LP to determine a production schedule to minimize the sum of production and\ninventory costs during the next four quarters.\nT able: Demand for the next four quarters\nQuarter 1 2 3 4\nDemand 40 60 75 25\n12 / 29",
      "image": "course-materials/etf5248/lecture-3/page-012.jpg"
    },
    {
      "page": 13,
      "text": "Multi-period inventory: solution\nDeﬁne variables\nxt - number of sailboats produced by regular-time labour during quartert\nyt - number of sailboats produced by overtime labour during quartert\nit - number of sailboats on hand at the end of quartert\nThen the problem can be formulated as:\nminimize400(x 1 +· · ·+x 4) +450(y 1 +. . .y 4) +20(i 1 +· · ·+i 4)\nsubject toi 1 =10+x 1 +y 1 −40\ni2 =i 1 +x 2 +y 2 −60\ni3 =i 2 +x 3 +y 3 −75\ni4 =i 3 +x 4 +y 4 −25\nxt ≤40\nxt ≥0,y t ≥0,i t ≥0,t=1, . . . ,4\nsolution:x ⋆ = (40,40,40,25),y ⋆ = (0,10,35,0),i ⋆ = (10,0,0,0)withp ⋆ =78450.\n13 / 29",
      "image": "course-materials/etf5248/lecture-3/page-013.jpg"
    },
    {
      "page": 14,
      "text": "Multi-period investment (Finance)\nFinco investment corporation must determine investment strategy for the ﬁrm during\nthe next three years. Currently (time 0), $100,000 is available for investment.\nInvestments A, B, C, D and E are available. The cash ﬂow associated with investing $1 in\neach investment is given in the table below.\ncash ﬂow ($) at time\n0 1 2 3\nA -1 0.5 1 0\nB 0 -1 0.5 1\nC -1 1.2 0 0\nD -1 0 0 1.9\nE 0 0 -1 1.5\nT o ensure that the company’s portfolio is diversiﬁed, Finco requires that at most\n$75,000 be placed in any single investment. In addition to investments A-E, Finco can\nearn interest at 8% per year by keeping uninvested cash in money market funds.\nReturns from investments may be immediately reinvested. Finco cannot borrow funds,\nso the cash available for investment at any time is limited to cash on hand. Formulate an\nLP that will maximise cash on hand at time 3.\n14 / 29",
      "image": "course-materials/etf5248/lecture-3/page-014.jpg"
    },
    {
      "page": 15,
      "text": "Multi-period investment (Finance): solution\nLet\nxi be the amount invested in investmenti\nst be the amount invested in money market funds at timet\nThen the problem is:\nmaximizex B +1.9x D +1.5x E +1.08s 2\nsubject tox A +x C +x D +s 0 =100000\n0.5xA +1.2x C +1.08s 0 =x B +s 1\nxA +0.5x B +1.08s 1 =x E +s 2\nxi ≤75000,i=A, . . . ,E\nxi ≥0,i=A, . . . ,E\nst ≥0,t=0, . . . ,2\nsolution:x ⋆ = (60000,30000,0,40000,75000),s ⋆ = (0,0,0)withp ⋆ =218500.\n15 / 29",
      "image": "course-materials/etf5248/lecture-3/page-015.jpg"
    },
    {
      "page": 16,
      "text": "Multi-period work-scheduling\n(Human Resources Management)\nA post oﬃce requires diﬀerent number of employees on diﬀerent days of\nthe week (see T able). Union rules state that each employee must work\nﬁve consecutive days and then receive two days oﬀ. For example, an\nemployee who works Monday to Friday must be oﬀ on Saturday and\nSunday. Formulate an LP that the post oﬃce can use to minimise the\nnumber of employees who must be hired.\nT able: Requirements for post oﬃce\nDay Mon T ue Wed Thu Fri Sat Sun\n# of employees 17 13 15 19 14 16 11\n16 / 29",
      "image": "course-materials/etf5248/lecture-3/page-016.jpg"
    },
    {
      "page": 17,
      "text": "Multi-period work-scheduling\n(Human Resources Management):\nincorrectformulation\nLetx i be the number of employees working on dayi, then\nminimize\n7X\ni=1\nxi\nsubject tox 1 ≥17\nx2 ≥13\nx3 ≥15\nx4 ≥19\nx5 ≥14\nx6 ≥16\nx7 ≥11\nxi ≥0i=1, . . . ,7\n17 / 29",
      "image": "course-materials/etf5248/lecture-3/page-017.jpg"
    },
    {
      "page": 18,
      "text": "Multi-period work-scheduling\n(Human Resources Management):\ncorrectformulation\nLetx i be the number of employees beginning work on dayi, then\nminimize\n7X\ni=1\nxi\nsubject tox 1 +x 4 +x 5 +x 6 +x 7 ≥17\nx1 +x 2 +x 5 +x 6 +x 7 ≥13\nx1 +x 2 +x 3 +x 6 +x 7 ≥15\nx1 +x 2 +x 3 +x 4 +x 7 ≥19\nx1 +x 2 +x 3 +x 4 +x 5 ≥14\nx2 +x 3 +x 4 +x 5 +x 6 ≥16\nx3 +x 4 +x 5 +x 6 +x 7 ≥11\nxi ≥0i=1, . . . ,7\nsolution:x ⋆ = ( 4\n3, 10\n3 ,2, 22\n3 ,0, 10\n3 ,5)withp ⋆ = 67\n3\n18 / 29",
      "image": "course-materials/etf5248/lecture-3/page-018.jpg"
    },
    {
      "page": 19,
      "text": "How to get integer solution?\nBut it doesn’t make sense to have 0.33 employee to work in one day...\nYou are right! So what do you think we should do?\nsolution:x ⋆ = ( 4\n3 , 10\n3 ,2, 22\n3 ,0, 10\n3 ,5)withp ⋆ = 67\n3\nrounded solution:˜x= (2,4,2,8,0,4,5)with˜p=25\ninteger solution:x ⋆\nip = (4,4,2,6,0,4,3)withp ⋆\nip =23\nLet’s come back to this in a few weeks (when we talk about Integer\nprogramming)! For now, keep your LP optimal solutions x ∗ and p∗ to 4\ndecimal places in your assessments.\n19 / 29",
      "image": "course-materials/etf5248/lecture-3/page-019.jpg"
    },
    {
      "page": 20,
      "text": "Production Process\nProduction process of good and services in diﬀerent lines of business can be modelled as an LP .\n20 / 29",
      "image": "course-materials/etf5248/lecture-3/page-020.jpg"
    },
    {
      "page": 21,
      "text": "Blending or Mixing\nSunco Oil manufactures three types of gasoline (gas 1, gas2, gas3). Each type is produced by blending three\ntypes of crude oil (crude 1, crude2, crude3). The sales price per barrel of gasoline and the purchase price\nper barrel of crude oil are given in the table. Sunco can purchase up to 5000 barrels of each type of crude\noil daily. Three types of gasoline diﬀer in their octane rating and sulphur content. The crude oil blended to\nform gas1 must have an average octane rating of at least 10 and contain at most 1% sulphur. The crude oil\nblended to form gas 2 must have an average octane rating of at least 8 and contain at most 2% sulphur.\nFor gas3 the values are 6 and 1% respectively. The octane rating and the sulphur content are given in the\ntable. It costs $4 to transform one barrel of oil into one barrel of gasoline, and Sunco’s reﬁnery can\nproduce up to 14000 barrels of gasoline daily. Sunco’s customers require the following amounts of each\ngasoline daily: gas 1 - 3000 barrels; gas 2 - 2000 barrels; gas 3 - 1000 barrels. The company considers it an\nobligation to meet these demands. Sunco also has the option of advertising to stimulate demand for its\nproducts. Each dollar spent daily in advertising a particular type of gasoline increases the daily demand for\nthat type by 10 barrels. Formulate an LP that will enable Sunco to maximise daily proﬁts.\n21 / 29",
      "image": "course-materials/etf5248/lecture-3/page-021.jpg"
    },
    {
      "page": 22,
      "text": "Blending or Mixing\nT able: prices\ngas price, $ crude price, $\n1 70 1 45\n2 60 2 35\n3 50 3 25\nT able: octane ratings and sulphur content\ncrude octane rating sulphur content, %\n1 12 0.5\n2 6 2.0\n3 8 3.0\n22 / 29",
      "image": "course-materials/etf5248/lecture-3/page-022.jpg"
    },
    {
      "page": 23,
      "text": "Blending or Mixing Solution\nsolution:letx ij be the number of barrels of crude i used to produce gas j and leta j be the amount of $ spent on advertising gas j\nmaximize21x 11 +11x 12 +x 13 +31x 21 +21x 22 +11x 23 +41x 31 +31x 32 +21x 33\n−a 1 −a 2 −a 3\nsubject tox 11 +x 21 +x 31 −10a 1 =3000\nx12 +x 22 +x 32 −10a 2 =2000\nx13 +x 23 +x 33 −10a 3 =1000\nx11 +x 12 +x 13 ≤5000\nx21 +x 22 +x 23 ≤5000\nx31 +x 32 +x 33 ≤5000\nx11 +x 12 +x 13 +x 21 +x 22 +x 23 +x 31 +x 32 +x 33 ≤14000\n12x11 +6x 21 +8x 31 ≥10(x 11 +x 21 +x 31)\n12x12 +6x 22 +8x 32 ≥8(x 12 +x 22 +x 32)\n12x13 +6x 23 +8x 33 ≥6(x 13 +x 23 +x 33)\n0.005x11 +0.02x 21 +0.03x 31 ≤0.01(x 11 +x 21 +x 31)\n0.005x12 +0.02x 22 +0.03x 32 ≤0.02(x 12 +x 22 +x 32)\n0.005x13 +0.02x 23 +0.03x 33 ≤0.01(x 13 +x 23 +x 33)\nxij ≥0,a i ≥0,i,j=1, . . . ,3 23 / 29",
      "image": "course-materials/etf5248/lecture-3/page-023.jpg"
    },
    {
      "page": 24,
      "text": "Live Coding Time!\nLet’s code the Blending problem together!\n24 / 29",
      "image": "course-materials/etf5248/lecture-3/page-024.jpg"
    },
    {
      "page": 25,
      "text": "Perfumes Production Process\nRylon Corporation manufactures Brute and Chanelle perfumes. The raw material\nneeded to manufacture each type of perfume can be purchased for $3 per pound.\nProcessing 1 lb of raw material requires 1 hour of laboratory time. Each pound of\nprocessed raw material yields 3 oz of Regular Brute Perfume and 4 oz of Regular\nChanelle Perfume. Regular Brute can be sold for $7/oz and Regular Chanelle for $6/oz.\nRylon also has the option of further processing Regular Brute and Regular Chanelle to\nproduce Luxury Brute, sold at $18/oz and Luxury Chanelle, sold at $14/oz. Each ounce\nof Regular Brute precessed further requires an additional 3 hours of laboratory time and\n$4 processing cost and yields 1 oz of Luxury Brute. Each ounce of Regular Chanelle\nprecessed further requires an additional 2 hours of laboratory time and $4 processing\ncost and yields 1 oz of Luxury Chanelle. Each year Rylon has 6000 hours of laboratory\ntime available and can purchase up to 4000 lb of raw material.\nFormulate an LP that can be used to determine how Rylon can maximise proﬁts.\nAssume that the cost of laboratory hours is a ﬁxed cost.\n25 / 29",
      "image": "course-materials/etf5248/lecture-3/page-025.jpg"
    },
    {
      "page": 26,
      "text": "Perfume Production Process Solution\n–x 1 - number of ounces of Regular Brute sold annually\n–x 2 - number of ounces of Luxury Brute sold annually\n–x 3 - number of ounces of Regular Chanelle sold annually\n–x 4 - number of ounces of Luxury Chanelle sold annually\n–x 5 - number of pounds of raw material purchased annually\nmaximize7x 1 +14x 2 +6x 3 +10x 4 −3x 5\nsubject tox 5 ≤4000\n3x2 +2x 4 +x 5 ≤6000\nx1 +x 2 =3x 5\nx3 +x 4 =4x 5\nxi ≥0,i=1, . . . ,5\nsolution:x ⋆ = (11333,666.67,16000,0,4000)withp ⋆ =172666.67\n26 / 29",
      "image": "course-materials/etf5248/lecture-3/page-026.jpg"
    },
    {
      "page": 27,
      "text": "Perfume Production Process Extension\nSuppose that in the previous example, 1 lb of raw material could be used to produce\neither 3 oz of Bruteor4 oz of Chanelle. How would this change the formulation?\nAdd variables:\nx6 - number of pounds of raw material to produce Brute\nx7 - number of pounds of raw material to produce Chanelle\nmaximize7x 1 +14x 2 +6x 3 +10x 4 −3x 5\nsubject tox 5 ≤4000\n3x2 +2x 4 +x 5 ≤6000\nx1 +x 2 =3x 6\nx3 +x 4 =4x 7\nx6 +x 7 =x 5\nxi ≥0,i=1, . . . ,7\nsolution:x ⋆ = (0,666.67,15111.11,0,4000,222.22,3777.78)withp ⋆ =88000 27 / 29",
      "image": "course-materials/etf5248/lecture-3/page-027.jpg"
    },
    {
      "page": 28,
      "text": "Quick Summary\nWe have covered 3 types of LPs today\n1 Product Mix\n2 Dynamic (multi-period) Problems\n3 Production Process\nEach of them is formulated diﬀerently and requires diﬀerent modelling\ntechniques.\nThese types of problem occur in diﬀerent departments of a business in\ndiﬀerent scenarios, taking diﬀerent forms or shapes. The important thing\nhere is recognising these are actually LPs and therefore can be solved\neﬃciently.\nWe will cover feasibility and the solving mechanism next week, where we\nwill learn more about what is happening in R/Python under the hood.\n28 / 29",
      "image": "course-materials/etf5248/lecture-3/page-028.jpg"
    },
    {
      "page": 29,
      "text": "Workshop: The original Stigler Diet Problem\nLet’s re-compute the solutions to the original Stigler Diet Problem in 1943.\nNote that the units in the original problem is slightly diﬀerent from the example we see\nduring the lecture. In the Stigler problem, we divided each type of food into $1 portions,\ni.e. the amount of each type of food we can buy with $1. The nutrient columns are also\nrescaled to reﬂect this. For example, the amount of ﬂour that I can get for $1 is 12600\ngram and it contains 44.7 thousands of calories.\nThe csv ﬁles ‘Stigler Food Info.csv’ and ‘Stigler Nutrient Requirement.csv’ are provided\nto you alongside with the R code to execute them.\nDiscuss\n▶what operations does the R code perform?\n▶how did the mathematical formulation changed depending on the data that we\nhave?\n▶what is the optimal solution and the corresponding diet?\nRead more: Wikipedia page on Stigler Diet.\nWe will revisit the diet problem in various forms later in this unit.\n29 / 29",
      "image": "course-materials/etf5248/lecture-3/page-029.jpg"
    }
  ],
  "version": 1,
  "title": [
    "配餐、多期决策与生产过程",
    "Diet, multi-period decisions and production"
  ],
  "overview": [
    "把业务规则转换为单位贡献、守恒、覆盖和品质约束。",
    "Translate business rules into contribution, conservation, coverage and quality constraints."
  ],
  "goals": [
    [
      "正确选择带时间或产品索引的变量",
      "Choose variables with appropriate time/product indices"
    ],
    [
      "建立库存与现金流平衡",
      "Build inventory and cash-flow balances"
    ],
    [
      "区别混合、联产和替代生产",
      "Distinguish blending, joint and alternative production"
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
        "配餐与产品组合的共同结构",
        "Diet and product-mix structure"
      ],
      "lecture": [
        "本讲讨论产品组合、多期决策和生产过程。配餐选择 n 种食物数量 xⱼ，单位成本 cⱼ、营养含量 aᵢⱼ、营养需求下限 bᵢ；目标是最低成本。营养也可有上限或精确等式要求。餐食规划与减少食材浪费是引入情境。",
        "This lecture covers product mix, multi-period decisions and production processes. Diet variables xⱼ are food quantities, cⱼ unit costs, aᵢⱼ nutrient contents and bᵢ minimum requirements. Minimize cost; nutrients may also have upper bounds or exact requirements. Meal planning and reducing pantry waste motivate the topic."
      ],
      "formulas": [
        "\\min c^Tx\\quad\\text{s.t. }Ax\\ge b"
      ],
      "explanation": [
        "食物数量还应非负；第 7 页具体模型明确写出了该条件。第 5 页紧凑式没有单列它。",
        "Food quantities must also be nonnegative; the detailed model on page 7 includes this explicitly, unlike the compact page-5 display."
      ],
      "terms": [
        [
          "diet problem",
          "配餐问题"
        ],
        [
          "product mix",
          "产品组合"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k01"
    },
    {
      "pages": [
        6
      ],
      "title": [
        "六种食物的数据与单位",
        "Six-food data and units"
      ],
      "lecture": [
        "食物顺序：面包、牛奶、奶酪、土豆、鱼、酸奶。单位成本：(2,3.5,8,1.5,11,1)；蛋白质 g：(4,8,7,1.3,8,9.2)；脂肪 g：(1,5,9,0.1,7,1)；碳水 g：(15,11.7,0.4,22.6,0,17)；热量 cal：(90,120,106,97,130,180)。要求热量≥300、蛋白质≤10、碳水≥10、脂肪≥8，鱼≥0.5 单位、牛奶≤1 单位。",
        "Order: bread, milk, cheese, potato, fish, yogurt. Unit costs: (2,3.5,8,1.5,11,1); protein g: (4,8,7,1.3,8,9.2); fat g: (1,5,9,0.1,7,1); carbohydrates g: (15,11.7,0.4,22.6,0,17); calories: (90,120,106,97,130,180). Require calories≥300, protein≤10, carbohydrates≥10, fat≥8, fish≥0.5 and milk≤1."
      ],
      "formulas": [],
      "explanation": [
        "蛋白质在本题是上限，不能凭生活常识改成下限。这是教学模型，不是个人饮食建议。",
        "Protein is an upper bound in this example; do not reverse it based on intuition. This is a teaching model, not personal dietary advice."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k02"
    },
    {
      "pages": [
        7,
        8
      ],
      "title": [
        "配餐模型与课件给出的解",
        "Diet formulation and reported solution"
      ],
      "lecture": [
        "x₁ 至 x₆ 按上一页食物顺序。课件解约为 (0,0.053,0.449,1.865,0.500,0)，成本 12.081。第 8 页仅为现场编程提示。",
        "x₁ through x₆ follow the food order on the preceding page. The reported solution is approximately (0,0.053,0.449,1.865,0.500,0), cost 12.081. Page 8 only prompts live coding."
      ],
      "formulas": [
        "\\min 2x_1+3.5x_2+8x_3+1.5x_4+11x_5+x_6",
        "\\begin{aligned}90x_1+120x_2+106x_3+97x_4+130x_5+180x_6&\\ge300\\\\4x_1+8x_2+7x_3+1.3x_4+8x_5+9.2x_6&\\le10\\\\15x_1+11.7x_2+0.4x_3+22.6x_4+17x_6&\\ge10\\\\x_1+5x_2+9x_3+0.1x_4+7x_5+x_6&\\ge8\\\\x_5&\\ge0.5,\\quad x_2\\le1,\\quad x\\ge0\\end{aligned}"
      ],
      "explanation": [
        "代入已舍入的数量会出现微小约束或成本误差；不能把三位小数当作精确解。课件未列单纯形迭代过程。",
        "Substituting rounded quantities can produce small residuals or cost differences; three-decimal figures are not exact. No simplex iterations are supplied."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k03"
    },
    {
      "pages": [
        9,
        10
      ],
      "title": [
        "Stigler 历史背景与跨案例联系",
        "Stigler background and connections"
      ],
      "lecture": [
        "课件介绍 1930–1940 年代的配餐研究，提及 Stigler 在 1939 年价格下估计年成本 39.93 美元。ApplePie、Giapetto、广告组合与配餐均是选择最佳产品组合。",
        "The slides introduce diet research in the 1930s–1940s and cite Stigler’s estimated annual cost of $39.93 at 1939 prices. ApplePie, Giapetto, advertising and diet models all choose an optimal mix."
      ],
      "formulas": [],
      "explanation": [
        "成本最小化的营养下限与利润最大化的资源上限，方向不同但都具有“单位贡献×数量”的线性结构。历史数字按课件记录，未另作历史文献核验。",
        "Nutrient lower bounds in cost minimization and resource upper bounds in profit maximization have different directions but share the unit-contribution-times-quantity structure. Historical figures are reported from the slides, not independently verified."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k04"
    },
    {
      "pages": [
        11,
        12,
        13
      ],
      "title": [
        "Sailco 多期库存：平衡方程",
        "Sailco inventory: balance equations"
      ],
      "lecture": [
        "四季度需求 (40,60,75,25)，期初库存 10。每季正常产能 40，成本 400/艘，加班 450/艘，季末库存 20/艘。xₜ 为正常生产，yₜ 为加班生产，iₜ 为期末库存。必须准时满足需求。课件解 x=(40,40,40,25)、y=(0,10,35,0)、i=(10,0,0,0)，成本 78,450。",
        "Quarterly demand is (40,60,75,25), with initial inventory 10. Regular capacity is 40 per quarter at 400/boat, overtime costs 450/boat, and end-of-quarter inventory costs 20/boat. xₜ is regular production, yₜ overtime and iₜ ending inventory. Demand must be met on time. The reported solution is x=(40,40,40,25), y=(0,10,35,0), i=(10,0,0,0), costing 78,450."
      ],
      "formulas": [
        "\\min\\sum_{t=1}^4(400x_t+450y_t+20i_t)",
        "i_t=i_{t-1}+x_t+y_t-d_t,\\quad i_0=10,\\quad0\\le x_t\\le40,\\ y_t,i_t\\ge0"
      ],
      "explanation": [
        "核算：145×400+45×450+10×20=78,450。库存把相邻季度连接起来；iₜ≥0 排除了欠交。",
        "Check: 145×400+45×450+10×20=78,450. Inventory links adjacent periods; iₜ≥0 rules out backlogs."
      ],
      "terms": [
        [
          "inventory balance",
          "库存平衡"
        ],
        [
          "holding cost",
          "持有成本"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k05"
    },
    {
      "pages": [
        14
      ],
      "title": [
        "Finco：现金流时间表",
        "Finco: cash-flow timeline"
      ],
      "lecture": [
        "时点 0 可用资金 100,000；单项投资上限 75,000；闲置资金每年收益 8%，不能借款，回款可立即再投。每投资 1 元在时点 (0,1,2,3) 的现金流：A=(−1,0.5,1,0)，B=(0,−1,0.5,1)，C=(−1,1.2,0,0)，D=(−1,0,0,1.9)，E=(0,0,−1,1.5)。",
        "Initial cash is 100,000, each investment is capped at 75,000, money-market cash earns 8% yearly, borrowing is prohibited and proceeds may be reinvested immediately. Per-dollar cash flows at times (0,1,2,3): A=(−1,0.5,1,0), B=(0,−1,0.5,1), C=(−1,1.2,0,0), D=(−1,0,0,1.9), E=(0,0,−1,1.5)."
      ],
      "formulas": [],
      "explanation": [
        "",
        ""
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k06"
    },
    {
      "pages": [
        15
      ],
      "title": [
        "Finco：资金守恒与终值",
        "Finco: cash balance and terminal wealth"
      ],
      "lecture": [
        "xᵢ 是投资 i 金额，sₜ 是时点 t 进入货币市场的金额。课件解 (xA,xB,xC,xD,xE)=(60000,30000,0,40000,75000)，s=(0,0,0)，终值 218,500。",
        "xᵢ is the amount invested in asset i; sₜ enters the money market at time t. The reported solution is (60000,30000,0,40000,75000), with s=(0,0,0), terminal wealth 218,500."
      ],
      "formulas": [
        "\\max x_B+1.9x_D+1.5x_E+1.08s_2",
        "\\begin{aligned}x_A+x_C+x_D+s_0&=100000\\\\0.5x_A+1.2x_C+1.08s_0&=x_B+s_1\\\\x_A+0.5x_B+1.08s_1&=x_E+s_2\\\\0\\le x_i&\\le75000,\\quad s_t\\ge0\\end{aligned}"
      ],
      "explanation": [
        "核算时点 1：0.5×60,000=30,000；时点 2：60,000+0.5×30,000=75,000；终值 30,000+76,000+112,500=218,500。现金守恒与库存守恒形式相同。",
        "At time 1, 0.5×60,000=30,000. At time 2, 60,000+0.5×30,000=75,000. Terminal wealth is 30,000+76,000+112,500=218,500. Cash and inventory conservation have the same structure."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k07"
    },
    {
      "pages": [
        16,
        17
      ],
      "title": [
        "排班：错误变量为什么失效",
        "Scheduling: why the wrong variables fail"
      ],
      "lecture": [
        "周一到周日需求为 (17,13,15,19,14,16,11)，每人连续工作五天、休息两天。第 17 页故意给出错误模型：把 xᵢ 定义为每天上班人数，逐日满足需求并最小化其和；它没有表达五连班与休息规则。",
        "Monday–Sunday requirements are (17,13,15,19,14,16,11). Each employee works five consecutive days then takes two off. Page 17 deliberately shows an incorrect model using daily attendance variables and minimizing their sum; it fails to enforce the work/rest pattern."
      ],
      "formulas": [],
      "explanation": [
        "每日在岗人次总和不等于雇员人数；应把变量改为某一天开始五天班的人数。",
        "Total employee-days are not the employee count. Use the number starting a five-day shift on each day."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k08"
    },
    {
      "pages": [
        18,
        19
      ],
      "title": [
        "排班覆盖约束与整数差别",
        "Coverage constraints and integrality"
      ],
      "lecture": [
        "xᵢ 表示第 i 天开始工作的雇员人数，目标最小化总人数。课件连续解 (4/3,10/3,2,22/3,0,10/3,5)，总数 67/3；全部向上取整得 (2,4,2,8,0,4,5)，总数 25；课件整数解 (4,4,2,6,0,4,3)，总数 23。因此直接取整不保证最优。",
        "xᵢ counts employees starting on day i; minimize their total. The LP solution is (4/3,10/3,2,22/3,0,10/3,5), total 67/3. Rounding upward gives (2,4,2,8,0,4,5), total 25, while the reported integer solution is (4,4,2,6,0,4,3), total 23. Rounding need not be optimal."
      ],
      "formulas": [
        "\\min\\sum_{i=1}^7x_i,\\quad x_i\\ge0",
        "\\begin{aligned}x_1+x_4+x_5+x_6+x_7&\\ge17\\\\x_1+x_2+x_5+x_6+x_7&\\ge13\\\\x_1+x_2+x_3+x_6+x_7&\\ge15\\\\x_1+x_2+x_3+x_4+x_7&\\ge19\\\\x_1+x_2+x_3+x_4+x_5&\\ge14\\\\x_2+x_3+x_4+x_5+x_6&\\ge16\\\\x_3+x_4+x_5+x_6+x_7&\\ge11\\end{aligned}"
      ],
      "explanation": [
        "周一覆盖来自周一、周四、周五、周六、周日开始的班。课件要求该阶段作业的 LP 解保留四位小数；这是本份讲义的要求。",
        "Monday coverage comes from starts on Monday, Thursday, Friday, Saturday and Sunday. These slides request four decimal places for LP assessment answers; this records the lecture instruction."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k09"
    },
    {
      "pages": [
        20,
        21,
        22
      ],
      "title": [
        "Sunco 混合：价格、品质与广告",
        "Sunco blending: prices, quality and advertising"
      ],
      "lecture": [
        "三种汽油售价 (70,60,50)，三种原油价格 (45,35,25)，辛烷值 (12,6,8)，硫含量 (0.5%,2%,3%)。汽油最低辛烷值 (10,8,6)，最高硫含量 (1%,2%,1%)。每种原油每天最多 5000 桶，总加工≤14000 桶，加工费 4/桶。基础需求 (3000,2000,1000)，每 1 元广告增加对应需求 10 桶。",
        "Gasoline prices are (70,60,50), crude costs (45,35,25), octane ratings (12,6,8) and sulphur (0.5%,2%,3%). Required gasoline octane minima are (10,8,6), sulphur maxima (1%,2%,1%). Each crude is limited to 5000 barrels/day, total refining to 14000, at 4/barrel. Base demands are (3000,2000,1000); each advertising dollar raises the corresponding demand by 10 barrels."
      ],
      "formulas": [],
      "explanation": [
        "",
        ""
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k10"
    },
    {
      "pages": [
        23,
        24
      ],
      "title": [
        "Sunco 模型：加权平均线性化",
        "Sunco model: linearized weighted averages"
      ],
      "lecture": [
        "xᵢⱼ 是原油 i 用于汽油 j 的桶数，aⱼ 是对应广告费。收益系数矩阵按原油为行、汽油为列是 [[21,11,1],[31,21,11],[41,31,21]]，即售价减原料和加工成本。第 23 页给完整模型，第 24 页仅现场编程提示，没有数值最优解。",
        "xᵢⱼ is crude i used in gasoline j and aⱼ its advertising expenditure. Profit coefficients, with crude rows and gasoline columns, are [[21,11,1],[31,21,11],[41,31,21]], subtracting crude and refining costs. Page 23 gives the model; page 24 only prompts coding, with no numerical optimum."
      ],
      "formulas": [
        "\\max\\sum_{i,j}(p_j-c_i-4)x_{ij}-\\sum_j a_j",
        "\\sum_i x_{ij}-10a_j=d_j,\\quad d=(3000,2000,1000)",
        "\\sum_jx_{ij}\\le5000,\\quad\\sum_{i,j}x_{ij}\\le14000,\\quad x_{ij},a_j\\ge0",
        "12x_{1j}+6x_{2j}+8x_{3j}\\ge q_j\\sum_i x_{ij},\\quad q=(10,8,6)",
        "0.005x_{1j}+0.02x_{2j}+0.03x_{3j}\\le s_j\\sum_i x_{ij},\\quad s=(0.01,0.02,0.01)"
      ],
      "explanation": [
        "这里把加权平均的分母移到右侧，仍是线性的，因为品质标准 qⱼ、sⱼ 是常数。基础需求为正，模型下各产品总量为正。广告需求式采用课件的等式口径。",
        "Moving the weighted-average denominator to the right remains linear because qⱼ and sⱼ are constants. Positive base demand guarantees positive product totals. Demand equalities follow the slide formulation."
      ],
      "terms": [
        [
          "blending",
          "混合配比"
        ],
        [
          "weighted average",
          "加权平均"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k11"
    },
    {
      "pages": [
        25,
        26
      ],
      "title": [
        "Rylon 联产品与再加工",
        "Rylon joint products and further processing"
      ],
      "lecture": [
        "每磅原料 3 元，用 1 小时同时产出 3 盎司 Brute 和 4 盎司 Chanelle。普通售价 7、6；豪华售价 18、14，再加工均花费 4/盎司，分别用 3、2 小时。实验室 6000 小时，原料≤4000 磅，实验室小时成本视为固定。x₁/x₂ 是普通/豪华 Brute 销量，x₃/x₄ 是普通/豪华 Chanelle，x₅ 是原料。",
        "Each pound of material costs 3 and takes one hour to jointly yield 3 oz Brute and 4 oz Chanelle. Regular prices are 7 and 6; luxury prices 18 and 14. Further processing costs 4/oz and takes 3/2 hours. There are 6000 laboratory hours and at most 4000 lb material; laboratory-hour cost is fixed. x₁/x₂ are regular/luxury Brute, x₃/x₄ regular/luxury Chanelle and x₅ material."
      ],
      "formulas": [
        "\\max 7x_1+14x_2+6x_3+10x_4-3x_5",
        "x_5\\le4000,\\quad3x_2+2x_4+x_5\\le6000,\\quad x_1+x_2=3x_5,\\quad x_3+x_4=4x_5,\\quad x\\ge0"
      ],
      "explanation": [
        "推导核算：x₅=4000 后剩 2000 小时；Brute 再加工每小时增加 (18−4−7)/3=7/3，Chanelle 为 (14−4−6)/2=2，所以优先 Brute。得到 x₂=2000/3、x₁=34000/3、x₃=16000、x₄=0，利润 172666.67。这是补充推导；PDF 的可见第 26 页没有显示该数值行，文本层却含有它，需人工核对。",
        "Additional calculation: x₅=4000 leaves 2000 hours. Brute further processing adds (18−4−7)/3=7/3 per hour versus 2 for Chanelle. Prioritizing Brute gives x₂=2000/3, x₁=34000/3, x₃=16000, x₄=0 and profit 172666.67. The numerical line exists in extracted text but is not visible on page 26; verify manually."
      ],
      "terms": [],
      "review": [
        "第 26 页隐藏文本层与可见页不同；数值解按补充推导呈现，不作为可见课件答案。",
        "Page 26 has a text-layer/visible-page discrepancy; the numerical solution is presented as an added derivation."
      ],
      "id": "etf5248-l3-k12"
    },
    {
      "pages": [
        27,
        28
      ],
      "title": [
        "替代生产与联产品的差别",
        "Alternative versus joint production"
      ],
      "lecture": [
        "若一磅原料只能产 3 盎司 Brute 或 4 盎司 Chanelle，新增 x₆、x₇ 表示两类原料分配。目标和工时不变，物料平衡改为 x₁+x₂=3x₆、x₃+x₄=4x₇、x₆+x₇=x₅。课件解约 (0,666.67,15111.11,0,4000,222.22,3777.78)，利润 88,000。本讲总结三种 LP：产品组合、多期问题、生产过程。",
        "If a pound yields either 3 oz Brute or 4 oz Chanelle, add material allocations x₆ and x₇. Keep the objective and time constraint but use x₁+x₂=3x₆, x₃+x₄=4x₇ and x₆+x₇=x₅. The reported solution is approximately (0,666.67,15111.11,0,4000,222.22,3777.78), profit 88,000. The lecture concludes with product mix, multi-period and production-process models."
      ],
      "formulas": [
        "x_1+x_2=3x_6,\\quad x_3+x_4=4x_7,\\quad x_6+x_7=x_5"
      ],
      "explanation": [
        "“同时产生”和“二选一生产”是不同技术条件，不能只改变文字而保留原来的两条联产平衡式。",
        "Joint output and alternative output are different technologies; the original two joint-production equations cannot remain unchanged."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l3-k13"
    },
    {
      "pages": [
        29
      ],
      "title": [
        "Stigler Workshop 的单位转换",
        "Stigler workshop units"
      ],
      "lecture": [
        "Workshop 将食物按 1 元可买到的份量计量，营养列也相应缩放。例如 1 元面粉为 12600 克、44.7 千卡（课件表述为 thousands of calories）。课件引用 Stigler Food Info.csv、Stigler Nutrient Requirement.csv 和 R 代码，要求讨论模型与最优饮食。PDF 没有完整数据表和答案。",
        "The workshop measures food in one-dollar portions and rescales nutrients accordingly. One dollar of flour gives 12600 grams and 44.7 thousand calories as stated in the slides. It references Stigler Food Info.csv, Stigler Nutrient Requirement.csv and R code and asks about the model and optimum. Full data and answers are absent from the PDF."
      ],
      "formulas": [],
      "explanation": [
        "以美元份量为变量时，每个变量的成本系数为 1；这与按物理单位计量时使用不同 cⱼ 的模型等价，但营养系数必须同步缩放。",
        "With one-dollar portions, every cost coefficient is 1. This is equivalent to physical-unit variables only if nutrient coefficients are rescaled consistently."
      ],
      "terms": [],
      "review": [
        "需要配套 CSV 与课堂代码才能核对完整 Stigler 结果；本次未推测缺失数据。",
        "The companion CSVs and classroom code are needed to verify the complete Stigler result; missing data were not guessed."
      ],
      "id": "etf5248-l3-k14"
    }
  ],
  "summary": [
    "模型的关键是变量含义与单位。库存/现金用平衡式；排班用覆盖式；混合用品质加权式。连续解不一定能直接执行。",
    "Variable meaning and units are central. Use balances for inventory/cash, coverage for shifts and weighted quality for blends. Continuous solutions may not be directly implementable."
  ],
  "exercises": [
    {
      "question": [
        "Sailco 若第二季正常生产 40、加班 10、期初库存 10，期末库存？",
        "Sailco: starting inventory 10, regular 40 and overtime 10 in quarter 2. Ending inventory?"
      ],
      "answer": [
        "10+40+10−60=0。",
        "10+40+10−60=0."
      ],
      "pages": [
        12,
        13
      ]
    },
    {
      "question": [
        "为什么豪华 Brute 的目标系数是 14 而不是 18？",
        "Why is the luxury Brute coefficient 14 rather than 18?"
      ],
      "answer": [
        "18 元售价扣除 4 元再加工成本；原料成本由 −3x₅ 另计。",
        "Subtract the further-processing cost of 4; material costs are separately counted in −3x₅."
      ],
      "pages": [
        25,
        26
      ]
    }
  ],
  "reviewPages": [
    {
      "pages": [
        8,
        24
      ],
      "reason": [
        "现场编程内容未包含在 PDF 中。",
        "Live code is absent."
      ]
    },
    {
      "pages": [
        26
      ],
      "reason": [
        "隐藏文本层有数值解，但可见页面未显示；已将数值计算标为 Codex 推导。",
        "A numerical result exists in hidden text but not on the visible page; calculations are labeled Codex derivations."
      ]
    },
    {
      "pages": [
        29
      ],
      "reason": [
        "配套 CSV/R 数据未包含在 PDF 内，未重建缺失的完整解。",
        "Companion CSV/R data are not in the PDF; no missing complete solution was invented."
      ]
    }
  ]
};
