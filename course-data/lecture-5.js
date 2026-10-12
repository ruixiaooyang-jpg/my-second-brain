window.ETF5248Lectures=window.ETF5248Lectures||{};
window.ETF5248Lectures[5]={
  "lecture": 5,
  "source": "ETF2480_ETF5248_Lecture_5.pdf",
  "sha256": "0431353484df7f6274d789aebb62d937f771c722380776a5e1df7a35b0568d71",
  "pages": [
    {
      "page": 1,
      "text": "Duality\nLecture 5\nETF2480&ETF5248 - S2, 2026\nJessica Leung, PhD, CAP-X, SFHEA\nReference Reading:\nBertsimas and T sitsiklis,Introduction to Linear Optimization, Chapters 4.1-4.4.\nWinston,Operations Research, Chapter 6.\nVanderbei,Linear Programming, Chapter 5.\n1 / 49",
      "image": "course-materials/etf5248/lecture-5/page-001.jpg"
    },
    {
      "page": 2,
      "text": "Lecture Overview\nThe dual problem of an LP\nWeak and strong duality\nComplementary slackness\nVariants and examples\nSensitivity analysis\n2 / 49",
      "image": "course-materials/etf5248/lecture-5/page-002.jpg"
    },
    {
      "page": 3,
      "text": "The Dual Problem\nThe dual problem acts like a twin problem to an optimization problem.\n3 / 49",
      "image": "course-materials/etf5248/lecture-5/page-003.jpg"
    },
    {
      "page": 4,
      "text": "Motivation\nConsider an LP:\nmaximize4x 1 +x 2 +3x 3\nsubject tox 1 +4x 2 ≤1\n3x1 −x 2 +x 3 ≤3\nx1,x 2,x 3 ≥0\nObserve that every feasible solution provides a lower bound onp ⋆, for\nexample:\n▶x= (1,0,0)tells us thatp ⋆ ≥4\n▶x= (0,0,3)tells us thatp ⋆ ≥9\nBut how good are these bounds? Are they close to optimal value?\nT o answer, we need to provide upper bounds.\n4 / 49",
      "image": "course-materials/etf5248/lecture-5/page-004.jpg"
    },
    {
      "page": 5,
      "text": "Upper bounds on the optimal objective value\nLet’s multiply the ﬁrst constraint by 2 and add that to 3 times the second\nconstraint:\n2(x1 +4x 2)≤2(1)\n+3(3x1 −x 2 +x 3)≤3(3)\n11x1 +5x 2 +3x 3 ≤11\nsince each variable is nonnegative, we have:\n4x1 +x 2 +3x 3 ≤11x 1 +5x 2 +3x 3 ≤11\nHence,p ⋆ ≤11.\nCombining with the result from previous slide, we have:\n9≤p ⋆ ≤11\nThese bounds can be improved. 5 / 49",
      "image": "course-materials/etf5248/lecture-5/page-005.jpg"
    },
    {
      "page": 6,
      "text": "Improving the bounds\nWe apply the same upper bounding technique, but replace the speciﬁc\nnumbers we used before with variables:\ny1(x1 +4x 2)≤y 1\n+y2(3x1 −x 2 +x 3)≤3y 2\n(y1 +3y 2)x1 + (4y1 −y 2)x2 + (y2)x3 ≤y 1 +3y 2\nIf we stipulate that each of the coeﬃcients of thex i ’s be at least as large\nas the corresponding coeﬃcient in the objective function,\ny1 +3y 2 ≥4\n4y1 −y 2 ≥1\ny2 ≥3\nwe can compare the objective function against this sum (and its bound):\np=4x 1 +x 2 +3x 3\n≤(y 1 +3y 2)x1 + (4y1 −y 2)x2 + (y2)x3\n≤y 1 +3y 2\n6 / 49",
      "image": "course-materials/etf5248/lecture-5/page-006.jpg"
    },
    {
      "page": 7,
      "text": "Getting the best upper bound\nWe now have an upper bound,y 1 +3y 2, which we should minimise in our\neﬀort to obtain the best possible upper bound:\nminimizey 1 +3y 2\nsubject toy 1 +3y 2 ≥4\n4y1 −y 2 ≥1\ny2 ≥3\ny1,y 2 ≥0\nThis problem is called thedual linear programming problemassociated\nwith the given linear programming problem.\n7 / 49",
      "image": "course-materials/etf5248/lecture-5/page-007.jpg"
    },
    {
      "page": 8,
      "text": "Dual of LP in canonical form\nGiven an LP in canonical form with parametersc∈R n,A∈R m×n,b∈R m\nmaximizec T x\nsubject toAx≤b\nx≥0\n(1)\nitsdualis\nminimizeb T y\nsubject toA T y≥c\ny≥0\n(2)\nin the context of duality, the LP (1) is called theprimalproblem\n8 / 49",
      "image": "course-materials/etf5248/lecture-5/page-008.jpg"
    },
    {
      "page": 9,
      "text": "The dual of the dual\nLet’s show that taking the dual of the dual returns us to the primal.\nFirst, convert the dual to canonical form:\nminimizeb T y\nsubject toA T y≥c\ny≥0\n=⇒\nmaximize−b T y\nsubject to−A T y≤ −c\ny≥0\nNow let’s take the dual and convert it to canonical form:\nminimize−c T x\nsubject to−(A T )T x≥ −b\nx≥0\n=⇒\nmaximizec T x\nsubject toAx≤b\nx≥0\n9 / 49",
      "image": "course-materials/etf5248/lecture-5/page-009.jpg"
    },
    {
      "page": 10,
      "text": "Weak and strong duality\nWith the help of duality, we can obtain very helpful bounds on the primal objective value based on the\ndual objective value. Note that this concept of duality extends beyond linear programming and applies to\nother class of mathematical optimization.\n10 / 49",
      "image": "course-materials/etf5248/lecture-5/page-010.jpg"
    },
    {
      "page": 11,
      "text": "Weak duality\nTheorem (weak duality)\nConsider maximization LP in canonical form. If˜xis primal feasible and˜yis\ndual feasible, then\nc T ˜x≤b T ˜y\nProof.\nc T ˜x≤˜yT A˜x≤˜yT b\nThe ﬁrst inequality follows fromx≥0andc≤y T A. The second\ninequality follows fromy≥0andAx≤b.\n11 / 49",
      "image": "course-materials/etf5248/lecture-5/page-011.jpg"
    },
    {
      "page": 12,
      "text": "Weak duality\nCorollary\nIf an LP and its dual are both feasible, then both are bounded feasible.\nIf the primal is unbounded, then the dual must be infeasible.\nIf the dual is unbounded, then the primal must be infeasible.\n12 / 49",
      "image": "course-materials/etf5248/lecture-5/page-012.jpg"
    },
    {
      "page": 13,
      "text": "Strong duality\nCorollary\nIf there exist feasiblex ⋆ andy ⋆ for LP(1)and its dual(2)such that\nc T x ⋆ =b T y ⋆, then bothx ⋆ andy ⋆ are optimal for their respective problems.\nProof.\nIf˜xis any feasible vector for (1), then\nc T ˜x≤b T y ⋆ =c T x ⋆\nwhich shows thatx ⋆ is optimal. A symmetric argument works fory ⋆.\nTheorem (The duality theorem)\nIf LP(1)is bounded feasible, then so is its dual, their values are equal\n(p⋆ =d ⋆), and there exist optimal vectors for both problems.\n13 / 49",
      "image": "course-materials/etf5248/lecture-5/page-013.jpg"
    },
    {
      "page": 14,
      "text": "Example: Dakota furniture company\nThe Dakota Furniture company manufactures desk, tables, and chairs.\nThe manufacture of each type of furniture requires lumber and two types\nof skilled labor: ﬁnishing and carpentry. The amount of each resource\nneeded to make each type of furniture is given in the table below.\nCurrently, 48 board feet of lumber, 20 ﬁnishing hours, 8 carpentry hours\nare available. A desk sells for $60, a table for $30, and a chair for $20.\nDakota believes that demand for desks and chairs is unlimited, but at\nmost 5 tables can be sold. Because the available resources have already\nbeen purchased, Dakota wants to maximize total revenue.\nresource desk table chair\nlumber (board feet) 8 6 1\nﬁnishing (hours) 4 2 1.5\ncarpentry (hours) 2 1.5 0.5\n14 / 49",
      "image": "course-materials/etf5248/lecture-5/page-014.jpg"
    },
    {
      "page": 15,
      "text": "Example: Dakota furniture company\nprimal problem:\nmaximize60x 1 +30x 2 +20x 3\nsubject to8x 1 +6x 2 +x 3 ≤48\n4x1 +2x 2 +1.5x 3 ≤20\n2x1 +1.5x 2 +0.5x 3 ≤8\nx2 ≤5\nxi ≥0i=1, . . . ,3\nprimal solution:\nx ⋆ = (2,0,8)\np⋆ =280\ndual problem:\nminimize48y 1 +20y 2 +8y 3 +5y 4\nsubject to8y 1 +4y 2 +2y 3 ≥60\n6y1 +2y 2 +1.5y 3 +y 4 ≥30\ny1 +1.5y 2 +0.5y 3 ≥20\nyi ≥0i=1, . . . ,4\ndual solution:\ny ⋆ = (0,10,10,0)\nd ⋆ =280\n15 / 49",
      "image": "course-materials/etf5248/lecture-5/page-015.jpg"
    },
    {
      "page": 16,
      "text": "Dakota furniture: interpretation of dual variables\ny ⋆\n1 andy ⋆\n4 are both 0:\n⇒constraints 1 and 4 of the primal are loose (not binding)\n⇒neither the amount of lumber nor the maximum demand for tables keep Dakota furniture from\ngetting a higher revenue;\ny ⋆\n2 =10\n⇒constraint 2 of the primal is binding\n⇒changing the RHS of this constraint byuwill change the value of the objective byuy ⋆\n2 =10u\n⇒$10 is the maximum Dakota should be willing to pay for an additional unit (hour) of ﬁnishing labor;\ny ⋆\n3 =10\n⇒constraint 3 of the primal is also binding\n⇒changing the RHS of this constraint byuwill change the value of the objective byuy ⋆\n3 =10u\n⇒$10 is the maximum Dakota should be willing to pay for an additional unit (hour) of carpentry\nlabor;\nif Dakota furniture is presented with a choice to get either one more hour of ﬁnishing labor or one\nmore hour of carpentry labor, it will be indiﬀerent between the two because both have the same\nimpact on the objective function of the primal problem (revenue).\n16 / 49",
      "image": "course-materials/etf5248/lecture-5/page-016.jpg"
    },
    {
      "page": 17,
      "text": "General interpretation of dual variables\nDual variable (shadow price) for theith constraint of an LP is the amount\nby whichp ⋆ isimprovedif the right-hand side of theith constraint is\nloosenedby one (provided the same variables remain basic).\n▶for a maximisation LP , the shadow price of theith constraint is equal\nto+(ith optimal dual variable)\n▶for a minimisation LP , the shadow price of theith constraint is equal\nto−(ith optimal dual variable)\nInterpretationof shadow prices is not always straightforward:\n▶in most cases, a constraint represents a limit on some resource. The\nshadow price of a≤constraint is the maximum price you would be\nwilling to pay for an additional unit of that resource;\n▶however, be very careful with interpretation of dual variables for\nother types of constraints: make sure your interpretation makes\nsense. 17 / 49",
      "image": "course-materials/etf5248/lecture-5/page-017.jpg"
    },
    {
      "page": 18,
      "text": "Complementary Slackness\nVariables in one problem are complementary to constraints in the other. That is, for each variable in the Primal, there is a\nconstraint in the Dual. For each variable in the Dual, there is a constraint in the Primal. Complementary Slackness refers to a\nrelationship between the slackness in a primal constraint and the slackness (positivity) of the associated dual variable.\n18 / 49",
      "image": "course-materials/etf5248/lecture-5/page-018.jpg"
    },
    {
      "page": 19,
      "text": "Optimality conditions\nprimal and dual LP\nmaximizec T x\nsubject toAx≤b\nx≥0\nminimizeb T y\nsubject toA T y≥c\ny≥0\noptimality conditions:˜xand˜yare primal and dual optimal if and only if\n▶˜xis primal feasible:A˜x≤band˜x≥0\n▶˜yis dual feasible:A T ˜y≥cand˜y≥0\n▶the duality gap is zero:c T ˜x=b T ˜y\n19 / 49",
      "image": "course-materials/etf5248/lecture-5/page-019.jpg"
    },
    {
      "page": 20,
      "text": "Complimentary slackness\nSupposex ⋆ is primal optimal,y ⋆ is dual optimal. From strong duality:\nc T x ⋆ ≤(y ⋆)T Ax ⋆ ≤(y ⋆)T b=c T x ⋆\nHence, the two inequalities hold with equality and lead to:\n(y ⋆)T Ax ⋆ = (y ⋆)T b=⇒(y ⋆)T (b−Ax ⋆) =0\n20 / 49",
      "image": "course-materials/etf5248/lecture-5/page-020.jpg"
    },
    {
      "page": 21,
      "text": "Complimentary slackness\nThis leads to complementary slackness (a T\ni are the rows ofA):\ny ⋆\ni (bi −a T\ni x ⋆) =0fori=1, . . . ,m\ny ⋆\ni >0=⇒a T\ni x ⋆ =b i ,\nbi −a T\ni x ⋆ >0=⇒y ⋆\ni =0.\nin other words:\ny ⋆\ni =0for allifor which\nnX\nj=1\naij x ⋆\nj <b i .\nx ⋆\nj =0for alljfor which\nmX\ni=1\naij y ⋆\ni >c j .\n21 / 49",
      "image": "course-materials/etf5248/lecture-5/page-021.jpg"
    },
    {
      "page": 22,
      "text": "Variants and examples\n22 / 49",
      "image": "course-materials/etf5248/lecture-5/page-022.jpg"
    },
    {
      "page": 23,
      "text": "Inequality form LP and its dual\nConsider an inequality form LP and its dual, whereA∈R m×n andx∈R n:\nminimizec T x\nsubject toAx≥b\nmaximizeb T y\nsubject toA T y=c\ny≥0\nObserve that:\n▶y∈R m ⇒there is a dual variable for every primal constraint;\n▶primal constraints are≥ ⇒dual variablesy≥0;\n▶xis unrestricted⇒dual constraints are equalities;\n▶the vector of coeﬃcients of the objective function of the primalc\nbecame the right hand side of the dual constraints;\n▶the vector of the right hand side of the primal constraintsbbecame\nthe vector of coeﬃcients of the objective function of the dual. 23 / 49",
      "image": "course-materials/etf5248/lecture-5/page-023.jpg"
    },
    {
      "page": 24,
      "text": "Standard form LP and its dual\nConsider a standard form LP and its dual, whereA∈R m×n andx∈R n:\nminimizec T x\nsubject toAx=b\nx≥0\nmaximizeb T y\nsubject toA T y≤c\nObserve that:\n▶y∈R m ⇒there is a dual variable for every primal constraint;\n▶primal constraints are equalities⇒dual variablesyare unrestricted;\n▶x≥0⇒dual constraints are≤;\n▶the vector of coeﬃcients of the objective function of the primalc\nbecame the right hand side of the dual constraints;\n▶the vector of the right hand side of the primal constraintsbbecame\nthe vector of coeﬃcients of the objective function of the dual.\n24 / 49",
      "image": "course-materials/etf5248/lecture-5/page-024.jpg"
    },
    {
      "page": 25,
      "text": "Relation between primal and dual variables and constraints\nWe can summarise our previous observations in the following table:\nminimize maximize\n≥b i ≥0\nconstraints ≤b i ≤0 variables\n=b i free\n≥0 ≤c j\nvariables ≤0 ≥c j constraints\nfree =c j\nExample:an LP (left) and its dual (right):\nmaximize−x 1 −x 2\nsubject to−2x 1 −x 2 ≤4\n2x1 −4x 2 ≥8\nx1 −3x 2 ≥7\nx1,x 2 ≥0\nminimize4y 1 +8y 2 +7y 3\nsubject to−2y 1 +2y 2 +y 3 ≥ −1\n−y 1 −4y 2 −3y 3 ≥ −1\ny1 ≥0\ny2,y 3 ≤0\n25 / 49",
      "image": "course-materials/etf5248/lecture-5/page-025.jpg"
    },
    {
      "page": 26,
      "text": "General form LP and its dual: another way of putting it\nLetAbe a matrix with rows˜a T\ni and columnsa j . Given aprimalproblem\nwith structure shown on the left, it’sdualis deﬁned to be the\nmaximisation problem shown on the right:\nminimizec T x\nsubject to˜a T\ni x≥b i ,i∈M 1\n˜aT\ni x≤b i ,i∈M 2\n˜aT\ni x=b i ,i∈M 3\nxj ≥0,j∈N 1\nxj ≤0,j∈N 2\nxj free,j∈N 3\nmaximizey T b\nsubject toy i ≥0,i∈M 1\nyi ≤0,i∈M 2\nyi free,i∈M 3\ny T aj ≤c j ,j∈N 1\ny T aj ≥c j ,j∈N 2\ny T aj =c j ,j∈N 3\nnote:\nM1,M 2,M 3,N 1,N 2, andN 3 are sets of indices that correspond to\nvarious types of variables and constraints. 26 / 49",
      "image": "course-materials/etf5248/lecture-5/page-026.jpg"
    },
    {
      "page": 27,
      "text": "Sensitivity Analysis\nWe study the dependence of the optimal cost and the optimal solutions on the coeﬃcient matrixA, the\nrequirement vectorb, and the cost vectorc. This is an important issue in practice because we often have\nincomplete knowledge of the problem data and we may wish to predict the eﬀects of certain parameter\nchanges.\n27 / 49",
      "image": "course-materials/etf5248/lecture-5/page-027.jpg"
    },
    {
      "page": 28,
      "text": "Business Motivation: Commitment Before Full Knowledge\nFarmers\n(Chickens, Pigs)\nDistribution\nCentre\nBranch C\nChicken Necks\nBranch B\nPork Belly\nBranch A\nChicken Feet\nCompanies often have to commit resources months in advance — long before actual\ndemand and prices are known with certainty. T ake a supermarket chain as example:\n▶A major supermarket chain asked us to help with an optimization problem involving\nmeat supply planning.\n▶Diﬀerent suburbs prefer diﬀerent cuts: chicken feet vs chicken necks, pork belly vs\npork insides, etc.\n▶They need to place orders with farmers months in advance, since it takes time to\nraise chickens or pigs.\n▶Once the livestock is committed, the cuts cannot be rebalanced easily.\n28 / 49",
      "image": "course-materials/etf5248/lecture-5/page-028.jpg"
    },
    {
      "page": 29,
      "text": "Business Motivation: Commitment Before Full Knowledge\nThe Optimisation Problem\nDecision variables: how much of each cut to order for each branch.\nConstraints:\n▶T otal supply must match what farmers can produce.\n▶Each branch requires a minimum of certain cuts (local preferences).\nObjective: maximize overall proﬁt (revenue minus cost).\n29 / 49",
      "image": "course-materials/etf5248/lecture-5/page-029.jpg"
    },
    {
      "page": 30,
      "text": "Business Motivation: Commitment Before Full Knowledge\nWhy Sensitivity AnalysisEven after the optimization, uncertainty\nremains:\n▶What if demand shifts and one suburb needs more chicken feet than\nforecast?\n▶What if a farmer raises the price of pork by 5\n▶What if supply of one cut is unexpectedly reduced?\nThe supermarket doesn’t want to re-solve the whole massive LP from\nscratch every time a parameter changes slightly. Instead, they need:\n▶RHS sensitivity: How much can branch demand change before the\ncurrent solution breaks?\n▶Dual prices: If demand increases by 1 unit, how much will that change\nthe total proﬁt?\n▶Range analysis: How low can they price an item and still make a\nproﬁt? 30 / 49",
      "image": "course-materials/etf5248/lecture-5/page-030.jpg"
    },
    {
      "page": 31,
      "text": "Sensitivity analysis\nPurpose: extract from the solution of an LP information about the\nsensitivity of the solution to changes in problem data\nTypes of perturbations:\n▶changing the right-hand side of a constraint\n▶changing the objective function coeﬃcient of a nonbasic variable\n▶changing the objective function coeﬃcient of a basic variable\n31 / 49",
      "image": "course-materials/etf5248/lecture-5/page-031.jpg"
    },
    {
      "page": 32,
      "text": "Changing the right-hand side of a constraint\n(unperturbed) normal form LP and its dual\nmaximizec T x\nsubject toAx≤b\nx≥0\nminimizeb T y\nsubject toA T y≥c\ny≥0\nperturbed normal form LP and its dual\nmaximizec T x\nsubject toAx≤b+u\nx≥0\nminimizeb T y+u T y\nsubject toA T y≥c\ny≥0\nxis primal variable;uis a vector of parameters\np⋆(u)is optimal value as a function ofu\nwe are interested in information aboutp ⋆(u)that we can obtain from\nthe solution of the unperturbed problem and its dual\n32 / 49",
      "image": "course-materials/etf5248/lecture-5/page-032.jpg"
    },
    {
      "page": 33,
      "text": "Global sensitivity result\nAssume thaty ⋆ is dual optimal for unperturbed problem.\nApply weak duality to perturbed problem:\np⋆(u)≤b T y ⋆ +u T y ⋆\nSensitivity interpretation:\n▶ify ⋆\ni is large:p ⋆ decreases greatly if we tighten constrainti(u i <0)\n▶ify ⋆\ni is large:p ⋆ increases greatly if we loosen constrainti(u i >0)\n▶ify ⋆\ni is small:p ⋆ doesn’t decrease much if we tighten constraint\ni(u i <0)\n▶ify ⋆\ni is small:p ⋆ doesn’t increase much if we loosen constraint\ni(u i >0)\n33 / 49",
      "image": "course-materials/etf5248/lecture-5/page-033.jpg"
    },
    {
      "page": 34,
      "text": "Local sensitivity result\nSuppose now that the perturbation vectoruis small such that the same\nbasic feasible solution is optimal for the perturbed problem.\nThis implies that the optimal objective value in the perturbed problem is\np⋆(u) =b T y ⋆ +u T y ⋆ =p ⋆(0) +u T y ⋆\nTherefore, a small change ofuto the right-hand side vectorbresults in a\nchange ofu T y ⋆ in the objective value.\nHence, each componenty i of the optimal dual vector can be interpreted\nas themarginal cost(orshadow price) per unit increase of theith\ncomponent ofb.\n34 / 49",
      "image": "course-materials/etf5248/lecture-5/page-034.jpg"
    },
    {
      "page": 35,
      "text": "Changing the objective function coeﬃcient of a nonbasic\nvariable - Example: Dakota furniture\nmaximize60x 1+30x 2+20x 3\nsubject to8x 1+6x 2+x 3 ≤48\n4x1+2x 2+1.5x 3 ≤20\n2x1+1.5x 2+0.5x 3 ≤8\nx2 ≤5\nx1,x 2,x 3 ≥0\nis equivalent to:\nmaximize60x 1+30x 2+20x 3\nsubject to8x 1+6x 2+x 3+s 1 =48\n4x1+2x 2+1.5x 3 +s 2 =20\n2x1+1.5x 2+0.5x 3 +s 3 =8\nx2 +s 4 =5\nx1,x 2,x 3,s 1,s 2,s 3,s 4 ≥0\n35 / 49",
      "image": "course-materials/etf5248/lecture-5/page-035.jpg"
    },
    {
      "page": 36,
      "text": "Example: initial and ﬁnal simplex tableau\nT able: initial simplex tableau\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 -60 -30 -20 0 0 0 0 0z= 0\nrow 1 0 8 6 1 1 0 0 0 48s 1 = 48\nrow 2 0 4 2 1.5 0 1 0 0 20s 2 = 20\nrow 3 0 2 1.5 0.5 0 0 1 0 8s 3 = 8\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\nT able: ﬁnal simplex tableau\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 0 5 0 0 10 10 0 280z= 280\nrow 1 0 0 -2 0 1 2 -8 0 24s 1 = 24\nrow 2 0 0 -2 1 0 2 -4 0 8x 3 = 8\nrow 3 0 1 1.25 0 0 -0.5 1.5 0 2x 1 = 2\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\n36 / 49",
      "image": "course-materials/etf5248/lecture-5/page-036.jpg"
    },
    {
      "page": 37,
      "text": "Changing the objective function coeﬃcient of a nonbasic\nvariable\nConsider the question: how much the objective-function coeﬃcients of\nnon-basic variables can vary without changing the values of the decision\nvariables in the optimal solution?\nT o answer that, suppose that we increase the objective function\ncoeﬃcient ofx 2 in the original problem by∆c 2, giving us:\nz−60x 1 −(30+ ∆c 2)x2 −20x 3 =0.\n37 / 49",
      "image": "course-materials/etf5248/lecture-5/page-037.jpg"
    },
    {
      "page": 38,
      "text": "Changing the objective function coeﬃcient of a nonbasic\nvariable\nThis leads to the following modiﬁed ﬁnal tableau\nT able: ﬁnal simplex tableau\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 0 5-∆c 2 0 0 10 10 0 280z= 280\nrow 1 0 0 -2 0 1 2 -8 0 24s 1 = 24\nrow 2 0 0 -2 1 0 2 -4 0 8x 3 = 8\nrow 3 0 1 1.25 0 0 -0.5 1.5 0 2x 1 = 2\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\nThe optimal solution remains unchanged so long as:\n5−∆c 2 ≥0or∆c 2 ≤5=⇒c 2 ≤35\n38 / 49",
      "image": "course-materials/etf5248/lecture-5/page-038.jpg"
    },
    {
      "page": 39,
      "text": "Changing the objective function coeﬃcient of a basic\nvariable\nWhat happens when the objective-function coeﬃcient of a basic variable\nis varied?\nT o answer that, suppose that we increase the objective function\ncoeﬃcient ofx 1 in the original problem by∆c 1, giving us:\nz−(60+ ∆c 1)x1 −30x 2 −20x 3 =0.\n39 / 49",
      "image": "course-materials/etf5248/lecture-5/page-039.jpg"
    },
    {
      "page": 40,
      "text": "Changing the objective function coeﬃcient of a basic\nvariable\nThis leads to the following modiﬁed ﬁnal tableau\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\nrow 0 1 -∆c 1 5 0 0 10 10 0 280z= 280\nrow 1 0 0 -2 0 1 2 -8 0 24s 1 = 24\nrow 2 0 0 -2 1 0 2 -4 0 8x 3 = 8\nrow 3 0 1 1.25 0 0 -0.5 1.5 0 2x 1 = 2\nrow 4 0 0 1 0 0 0 0 1 5s 4 = 5\nHowever, the simplex method requires that the ﬁnal system of equations\nbe in canonical form with respect to the basic variables. Since the basis is\nto be unchanged, in order to make the coeﬃcient ofx 1 zero in the ﬁnal\ntableau we must add∆c 1 times row 3 to row 0 in the ﬁnal tableau. The\nresult is the T ableau on the next slide.\n40 / 49",
      "image": "course-materials/etf5248/lecture-5/page-040.jpg"
    },
    {
      "page": 41,
      "text": "Changing the objective function coeﬃcient of a basic\nvariable\nThis leads to the following modiﬁed ﬁnal tableau:\nz x 1 x2 x3 s1 s2 s3 s4 rhs BV\n1 0 5+1.25∆c 1 0 0 10-0.5∆c 1 10+1.5∆c1 0 280+2∆c 1 z= 280\n0 0 -2 0 1 2 -8 0 24s 1 = 24\n0 0 -2 1 0 2 -4 0 8x 3 = 8\n0 1 1.25 0 0 -0.5 1.5 0 2x 1 = 2\n0 0 1 0 0 0 0 1 5s 4 = 5\n41 / 49",
      "image": "course-materials/etf5248/lecture-5/page-041.jpg"
    },
    {
      "page": 42,
      "text": "Changing the objective function coeﬃcient of a basic\nvariable\nBy the simplex optimality criterion, all the objective-function coeﬃcients\nin the ﬁnal tableau must be nonnegative in order to maintain the current\nsolution. Hence, we must have:\n\n\n\n5+1.25∆c 1 ≥0\n10−0.5∆c 1 ≥0\n10+1.5∆c 1 ≥0\n=⇒\n\n\n\n∆c1 ≥ −5/1.25\n∆c1 ≤10/0.5\n∆c1 ≥ −10/1.5\nwhich leads to\n−4≤∆c 1 ≤20=⇒56≤c 1 ≤80\n42 / 49",
      "image": "course-materials/etf5248/lecture-5/page-042.jpg"
    },
    {
      "page": 43,
      "text": "Workshop:lpSolveAPI\nWe have now encounter situations where the decision variable is free (it\ncan take non-positive and non-negative values). WhilelpSolvecan\nhandle this by manual variable transformation, it is good to learn another\ntool that can handle this naturally.\nFirst, install the packagelpsolveAPIusing the following command:\nR\ninstall.packages(‘lpSolveAPI’)\n43 / 49",
      "image": "course-materials/etf5248/lecture-5/page-043.jpg"
    },
    {
      "page": 44,
      "text": "R code to solve the LP\nlibrary(lpSolveAPI)\nc <- c(...)\nA <- matrix(c(...),nrow=..., byrow=T)\nb <- c(...)\nineq <- c(...)\nres <- make.lp(nrow(A),ncol(A))\nfor (i in 1:ncol(A)){\nset.column(res, i, A[,i])\n}\nlp.control(res, sense = ‘min’)\nset.objfn(res, c)\nset.constr.type(res, ineq)\nset.rhs(res, b)\nres\nsolve(res)\nget.objective(res)\nget.variables(res)\n44 / 49",
      "image": "course-materials/etf5248/lecture-5/page-044.jpg"
    },
    {
      "page": 45,
      "text": "Workshop: Sensitivity Analysis Information from Modern\nSolvers\nLet’s obtain sensitivity information from the Dakota Furniture Company\nexample.\nDocumentation that helps you to read the output:\nhttps://www.rdocumentation.org/packages/lpSolveAPI/versions/5.5.\n2.0-17.9/topics/get.sensitivity.rhs\n45 / 49",
      "image": "course-materials/etf5248/lecture-5/page-045.jpg"
    },
    {
      "page": 46,
      "text": "For Python Users\nIn the Gurobi Python interface, you can adjust the lower bound of a\nvariable when you deﬁne the variable.\nSet thelbargument as a Gurobi negative inﬁnity object\n-grb.GRB.INFINITY.\nIf you do not include thelbargument when you deﬁne your variables,\nGurobi will assume your variable is non-negative.\nPython\nimport gurobipy as grb\nM = grb.Model(\"example\")\nx = M.addVar(lb = -grb.GRB.INFINITY)\n46 / 49",
      "image": "course-materials/etf5248/lecture-5/page-046.jpg"
    },
    {
      "page": 47,
      "text": "Sensitivity Information in Python Gurobi\nPython\nM.Pi[ind]\nM.SARHSLow[ind]\nM.SARHSUp[ind]\nM.RC[ind]\nM.SAObjUp[ind]\nM.SAObjLow[ind]\nFor other solvers, please refer to the documentation of the package for\nsensitivity information as the syntax varies. If you need help with this,\nplease feel free to ask Jessica.\n47 / 49",
      "image": "course-materials/etf5248/lecture-5/page-047.jpg"
    },
    {
      "page": 48,
      "text": "Quick Summary\n▶Given a (primal) linear programming problem we can associate with it\nanother (dual) linear programming problem, by following a set of\nmechanical rules.\n▶Each dual variable is associated with a particular primal constraint.\n▶Each dual constraint is associated with a particular primal variable.\n▶Every dual feasible vector leads to an upper bound on the optimal\nvalue of the primal problem. This is the essence of the weak duality\ntheorem.\n▶The minimisation in the dual problem is then a search for the tightest\nsuch upper bound. The strong duality theorem asserts that the\ntightest such upper bound is equal to the optimal primal value.\n▶A useful relation between the optimal primal and dual solutions is\nprovided by the complimentary slackness conditions.\n48 / 49",
      "image": "course-materials/etf5248/lecture-5/page-048.jpg"
    },
    {
      "page": 49,
      "text": "Quick Summary\n▶Sensitivity analysis provides some (limited) extra insights without\nresolving the problem.\n▶Most model parameters (data) are estimates and are subject to\nuncertainty.\n▶Sensitivity analysis allows us to determine how “sensitive” the optimal\nsolution is to changes in data values.\n▶Modern solvers produce sensitivity analysis “for free” .\n▶However, when data changes the best thing to do is to resolve the\nproblem.\n▶There are other ways of dealing with data uncertainty:robust\noptimisationandstochastic optimisation.\n49 / 49",
      "image": "course-materials/etf5248/lecture-5/page-049.jpg"
    }
  ],
  "version": 1,
  "title": [
    "对偶、互补松弛与敏感性",
    "Duality, complementary slackness and sensitivity"
  ],
  "overview": [
    "用对偶界证明最优，再解释资源边际价值与参数变化范围。",
    "Certify optimality with dual bounds, then interpret marginal values and parameter ranges."
  ],
  "goals": [
    [
      "按符号构造对偶",
      "Construct duals with correct signs"
    ],
    [
      "证明弱对偶并使用强对偶",
      "Prove weak duality and apply strong duality"
    ],
    [
      "检查互补松弛与敏感性条件",
      "Check complementary slackness and sensitivity conditions"
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
        "对偶的动机：夹住最优值",
        "Duality motivation: bounding the optimum"
      ],
      "lecture": [
        "本讲讨论对偶、弱强对偶、互补松弛和敏感性。例题最大化 4x₁+x₂+3x₃，约束 x₁+4x₂≤1、3x₁−x₂+x₃≤3、x≥0。可行点 (1,0,0) 给下界 4，(0,0,3) 给下界 9。把第一约束乘 2、第二乘 3，相加得 11x₁+5x₂+3x₃≤11，由非负性得到目标≤11，因此 9≤p*≤11。",
        "Topics are duality, weak/strong duality, complementary slackness and sensitivity. Maximize 4x₁+x₂+3x₃ subject to x₁+4x₂≤1, 3x₁−x₂+x₃≤3 and x≥0. Feasible points (1,0,0) and (0,0,3) give lower bounds 4 and 9. Multipliers 2 and 3 yield 11x₁+5x₂+3x₃≤11, hence 9≤p*≤11."
      ],
      "formulas": [],
      "explanation": [
        "",
        ""
      ],
      "terms": [
        [
          "primal",
          "原问题"
        ],
        [
          "dual",
          "对偶问题"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k01"
    },
    {
      "pages": [
        6,
        7
      ],
      "title": [
        "寻找最紧上界",
        "Finding the tightest upper bound"
      ],
      "lecture": [
        "用非负 y₁、y₂ 代替固定乘数。加权约束的各变量系数至少为目标系数，就能保证 y₁+3y₂ 是上界；对偶最小化该上界。",
        "Replace fixed multipliers with nonnegative y₁,y₂. If weighted constraint coefficients dominate objective coefficients, y₁+3y₂ is an upper bound; the dual minimizes it."
      ],
      "formulas": [
        "\\min y_1+3y_2\\quad\\text{s.t. }y_1+3y_2\\ge4,\\ 4y_1-y_2\\ge1,\\ y_2\\ge3,\\ y\\ge0"
      ],
      "explanation": [
        "补充验证：y=(1,3) 给上界 10；x=(0,1/4,13/4) 可行且目标为 10，因此二者最优。这一数值配对是 Codex 推导。",
        "Added certificate: y=(1,3) gives bound 10; x=(0,1/4,13/4) is feasible with objective 10. Both are optimal. This numerical pair is a Codex derivation."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k02"
    },
    {
      "pages": [
        8,
        9
      ],
      "title": [
        "规范形式与对偶的对偶",
        "Canonical dual and dual of the dual"
      ],
      "lecture": [
        "原问题有 n 个非负变量、m 条≤约束，对偶有 m 个非负变量、n 条≥约束。A 变为 Aᵀ，b 与 c 交换作用。把对偶转换为最大化规范形式再取对偶，会回到原问题。",
        "An n-variable maximization primal with m ≤ constraints has m nonnegative dual variables and n ≥ constraints. A is transposed and b,c exchange roles. Canonicalizing the dual and dualizing again returns the primal."
      ],
      "formulas": [
        "\\max\\{c^Tx:Ax\\le b,x\\ge0\\}\\quad\\longleftrightarrow\\quad\\min\\{b^Ty:A^Ty\\ge c,y\\ge0\\}",
        "\\min b^Ty= -\\max(-b^Ty)\\quad\\text{over the same feasible set}"
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
      "id": "etf5248-l5-k03"
    },
    {
      "pages": [
        10,
        11,
        12
      ],
      "title": [
        "弱对偶及状态推论",
        "Weak duality and status implications"
      ],
      "lecture": [
        "只要 x、y 分别原可行和对偶可行，便有 cᵀx≤bᵀy。证明利用 x≥0、Aᵀy≥c 得第一个不等式，再利用 y≥0、Ax≤b 得第二个。若双方可行，目标都具有有限界；原无界则对偶不可行，对偶无界则原不可行。",
        "For any primal-feasible x and dual-feasible y, cᵀx≤bᵀy. The first inequality uses x≥0 and Aᵀy≥c; the second uses y≥0 and Ax≤b. If both are feasible their objectives are bounded. Unboundedness of one implies infeasibility of the other."
      ],
      "formulas": [
        "c^Tx\\le y^TAx\\le y^Tb"
      ],
      "explanation": [
        "“不可行”不能反推另一方一定无界：也可能双方都不可行。“目标有界”不表示可行域在空间中有界。",
        "Infeasibility does not imply that the other problem is unbounded: both may be infeasible. Bounded objective values do not imply a bounded feasible region."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k04"
    },
    {
      "pages": [
        13
      ],
      "title": [
        "强对偶与最优性证书",
        "Strong duality and optimality certificates"
      ],
      "lecture": [
        "若原 LP 可行且目标有界，对偶也如此，双方存在最优解且 p*=d*。如果找到一对可行解使目标相等，弱对偶已经足以证明它们都最优：任意原可行点的目标≤该对偶值=候选原目标。",
        "If the primal is feasible with bounded objective, so is the dual; both attain optima and p*=d*. A feasible pair with equal objectives is already an optimality certificate by weak duality: every primal value is bounded above by that dual value, equal to the candidate primal value."
      ],
      "formulas": [
        "c^Tx^*=b^Ty^*\\quad\\text{with primal and dual feasibility}"
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
      "id": "etf5248-l5-k05"
    },
    {
      "pages": [
        14,
        15
      ],
      "title": [
        "Dakota 的原对偶解",
        "Dakota primal and dual solutions"
      ],
      "lecture": [
        "沿用 Lecture 4 模型：原解 x*=(2,0,8)，收入 280。对偶解 y*=(0,10,10,0)，对应木材、精加工、木工和 table 需求上限；对偶值也是 280。",
        "Using Lecture 4’s model, x*=(2,0,8) gives revenue 280. The dual solution y*=(0,10,10,0) corresponds to lumber, finishing, carpentry and the table-demand cap, also yielding 280."
      ],
      "formulas": [
        "\\min48y_1+20y_2+8y_3+5y_4",
        "8y_1+4y_2+2y_3\\ge60,\\quad6y_1+2y_2+1.5y_3+y_4\\ge30,\\quad y_1+1.5y_2+0.5y_3\\ge20,\\quad y\\ge0"
      ],
      "explanation": [
        "代入 y*：三条左端为 60、35、20，均≥(60,30,20)；目标 200+80=280。这给 Lecture 4 单纯形结果一个独立最优性证书。",
        "At y*, the three left sides are 60,35,20, satisfying ≥(60,30,20); the objective is 200+80=280. This independently certifies the Lecture 4 simplex result."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k06"
    },
    {
      "pages": [
        16,
        17
      ],
      "title": [
        "影子价格的含义和范围",
        "Shadow-price meaning and validity"
      ],
      "lecture": [
        "Dakota 中木材与 table 上限有松弛，对偶值均为 0；精加工、木工对偶值均为 10。维持同一最优基的范围内，多一小时可增加 10 收入。课件要求按约束方向和目标方向仔细解释“放松”和“改善”，不能机械套价格。",
        "Lumber and table-demand constraints are slack with zero dual values. Finishing and carpentry each have dual value 10. Within the same optimal-basis range, one extra hour increases revenue by 10. Interpret relaxation and improvement using constraint and objective directions."
      ],
      "formulas": [],
      "explanation": [
        "零对偶值不必然推出约束有松弛；这里的松弛是直接由 Dakota 解核实的。影子价格不能无限外推，也不是所有约束都代表可购买的资源。",
        "A zero dual value does not generally imply a slack constraint; Dakota’s slacks are checked directly. Shadow prices cannot be extrapolated indefinitely, and not every constraint represents a purchasable resource."
      ],
      "terms": [
        [
          "shadow price",
          "影子价格"
        ],
        [
          "marginal value",
          "边际价值"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k07"
    },
    {
      "pages": [
        18,
        19,
        20,
        21
      ],
      "title": [
        "互补松弛与三项最优条件",
        "Complementary slackness and optimality"
      ],
      "lecture": [
        "最优性需要原可行、对偶可行和零对偶间隙。强对偶使弱对偶链中两处不等式都取等号，得到 yᵢ(bᵢ−aᵢᵀx)=0。正对偶变量对应紧原约束；正原松弛对应零对偶变量。若某对偶约束严格大于 cⱼ，对应原变量 xⱼ=0。",
        "Optimality requires primal feasibility, dual feasibility and zero gap. Strong duality makes both inequalities in the weak-duality chain equalities, giving yᵢ(bᵢ−aᵢᵀx)=0. Positive dual variables force binding primal constraints; positive primal slack forces zero dual variables. Strict dual slack forces the corresponding xⱼ to zero."
      ],
      "formulas": [
        "y_i(b_i-a_i^Tx)=0\\quad(i=1,\\ldots,m)",
        "x_j((A^Ty)_j-c_j)=0\\quad(j=1,\\ldots,n)"
      ],
      "explanation": [
        "单独满足乘积为零还不够；必须先检查两侧可行性。反向命题“约束紧所以变量正”也不成立。",
        "Zero products alone are insufficient without feasibility. The converse “binding constraint implies positive variable” also fails."
      ],
      "terms": [
        [
          "complementary slackness",
          "互补松弛"
        ],
        [
          "duality gap",
          "对偶间隙"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k08"
    },
    {
      "pages": [
        22,
        23,
        24
      ],
      "title": [
        "自由变量和等式的对偶",
        "Free variables and equality constraints"
      ],
      "lecture": [
        "最小化 cᵀx、Ax≥b、x 自由的对偶为最大化 bᵀy、Aᵀy=c、y≥0。标准形式最小化 cᵀx、Ax=b、x≥0 的对偶为最大化 bᵀy、Aᵀy≤c、y 自由。每条原约束对应一个对偶变量，每个原变量对应一条对偶约束。",
        "For min cᵀx with Ax≥b and free x, the dual is max bᵀy with Aᵀy=c,y≥0. For min cᵀx with Ax=b,x≥0, the dual is max bᵀy with Aᵀy≤c and free y. Each primal constraint corresponds to a dual variable and each primal variable to a dual constraint."
      ],
      "formulas": [
        "\\min\\{c^Tx:Ax\\ge b,x\\text{ free}\\}\\leftrightarrow\\max\\{b^Ty:A^Ty=c,y\\ge0\\}",
        "\\min\\{c^Tx:Ax=b,x\\ge0\\}\\leftrightarrow\\max\\{b^Ty:A^Ty\\le c,y\\text{ free}\\}"
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
      "id": "etf5248-l5-k09"
    },
    {
      "pages": [
        25,
        26
      ],
      "title": [
        "混合符号规则与例题",
        "Mixed-sign rules and example"
      ],
      "lecture": [
        "以最小化原问题为准：原约束 ≥、≤、= 对应对偶变量 ≥0、≤0、自由；原变量 ≥0、≤0、自由对应对偶约束 ≤cⱼ、≥cⱼ、=cⱼ。第 25 页例题原问题是最大化 −x₁−x₂，三条约束为 −2x₁−x₂≤4、2x₁−4x₂≥8、x₁−3x₂≥7，x≥0。",
        "For a minimization primal, ≥,≤,= constraints yield dual variables ≥0,≤0,free. Primal variables ≥0,≤0,free yield dual constraints ≤cⱼ,≥cⱼ,=cⱼ. The page-25 maximization example has objective −x₁−x₂, constraints −2x₁−x₂≤4, 2x₁−4x₂≥8, x₁−3x₂≥7, and x≥0."
      ],
      "formulas": [
        "\\min4y_1+8y_2+7y_3\\quad\\text{s.t. }-2y_1+2y_2+y_3\\ge-1,\\ -y_1-4y_2-3y_3\\ge-1,\\ y_1\\ge0,\\ y_2,y_3\\le0"
      ],
      "explanation": [
        "表格先确定哪边是最小化、哪边是最大化，再逐行逐列转换，避免把两套方向混用。",
        "First identify the minimization and maximization sides, then transform row by row and column by column."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k10"
    },
    {
      "pages": [
        27,
        28,
        29,
        30,
        31
      ],
      "title": [
        "敏感性分析的业务动机",
        "Business motivation for sensitivity"
      ],
      "lecture": [
        "肉类供应案例：农场提前养殖，配送中心向偏好不同部位的门店分配；决定各店订购数量，受总供给和最低需求约束，以利润最大化。需求、价格和供应有不确定性。课件区分 RHS、非基变量目标系数、基变量目标系数三类变化。",
        "In meat supply planning, farmers commit production early and a distribution centre allocates cuts to branches with different preferences. Choose branch orders subject to supply and minimum demand to maximize profit. Demand, prices and supply are uncertain. The lecture separates RHS, nonbasic objective-coefficient and basic objective-coefficient changes."
      ],
      "formulas": [],
      "explanation": [
        "",
        ""
      ],
      "terms": [],
      "review": [
        "第 30 页“价格增加 5”缺少单位或百分号，需人工核对，未补猜。",
        "Page 30 says a price increases by 5 without a unit or percent sign; manual checking is needed."
      ],
      "id": "etf5248-l5-k11"
    },
    {
      "pages": [
        32,
        33,
        34
      ],
      "title": [
        "右端变化：全局界与局部等式",
        "RHS changes: global bound and local equality"
      ],
      "lecture": [
        "把原约束改为 Ax≤b+u，对偶可行域不变而目标变为 bᵀy+uᵀy。旧最优对偶解 y* 仍给出全局上界。若同一基保持最优，则有精确的局部线性关系，yᵢ* 是相应边际值。",
        "Changing constraints to Ax≤b+u leaves dual feasibility unchanged and changes the dual objective to bᵀy+uᵀy. The old optimal dual y* gives a global upper bound. If the same basis remains optimal, the local linear relation is exact and yᵢ* is the marginal value."
      ],
      "formulas": [
        "p^*(u)\\le p^*(0)+u^Ty^*",
        "p^*(u)=p^*(0)+u^Ty^*\\quad\\text{if the same basis stays optimal}"
      ],
      "explanation": [
        "全局不等式不能保证放松后真的增加 uᵀy*；第 33 页定性说明应结合第 34 页有效范围阅读。RHS 改变时通常是“同一基”，而不是基变量数值完全不变。",
        "The global bound does not guarantee an actual increase of uᵀy*. Read page 33’s qualitative statements with page 34’s validity condition. RHS changes typically preserve a basis, not identical basic-variable values."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k12"
    },
    {
      "pages": [
        35,
        36,
        37,
        38
      ],
      "title": [
        "非基产品售价范围：table",
        "Nonbasic price range: tables"
      ],
      "lecture": [
        "Dakota 最优解 x₂=0。将 table 收益 30 改为 30+Δc₂，最终表中该列第 0 行系数从 5 变为 5−Δc₂，其他行与最优值 280 不变。维持非负要求 Δc₂≤5，即 c₂≤35。第 36 页保留初始与最终完整表。",
        "At Dakota’s optimum x₂=0. Changing its coefficient from 30 to 30+Δc₂ changes the final row-0 coefficient from 5 to 5−Δc₂, leaving other rows and value 280 unchanged. Nonnegativity requires Δc₂≤5, hence c₂≤35. Page 36 contains the full initial and final tableaux."
      ],
      "formulas": [
        "5-\\Delta c_2\\ge0\\iff c_2\\le35"
      ],
      "explanation": [
        "35 是当前解保持最优的边界，不意味着该边界仍唯一最优。只单独改变这一系数。",
        "At 35 the current solution remains optimal, but uniqueness is not guaranteed. This range assumes only this coefficient changes."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k13"
    },
    {
      "pages": [
        39,
        40,
        41,
        42
      ],
      "title": [
        "基产品售价范围：desk",
        "Basic price range: desks"
      ],
      "lecture": [
        "将 desk 收益 60 改为 60+Δc₁ 后，第 0 行出现 −Δc₁x₁。为了保持基列规范形式，要加上 Δc₁ 倍第 3 行。三个非基系数变为 5+1.25Δc₁、10−0.5Δc₁、10+1.5Δc₁；目标值变为 280+2Δc₁。",
        "Changing the desk coefficient to 60+Δc₁ introduces −Δc₁x₁ in row 0. Add Δc₁ times row 3 to restore the canonical basic column. Nonbasic coefficients become 5+1.25Δc₁, 10−0.5Δc₁ and 10+1.5Δc₁; the value becomes 280+2Δc₁."
      ],
      "formulas": [
        "\\begin{cases}5+1.25\\Delta c_1\\ge0\\\\10-0.5\\Delta c_1\\ge0\\\\10+1.5\\Delta c_1\\ge0\\end{cases}\\iff -4\\le\\Delta c_1\\le20\\iff56\\le c_1\\le80"
      ],
      "explanation": [
        "",
        ""
      ],
      "terms": [],
      "review": [
        "第 41 页表格右侧仍标 z=280，但同一行 RHS 为 280+2Δc₁；按 RHS 表达式解释，原标注需人工核对。",
        "Page 41 still labels z=280 at the right although RHS is 280+2Δc₁; use the RHS expression and manually check the label."
      ],
      "id": "etf5248-l5-k14"
    },
    {
      "pages": [
        43,
        44,
        45,
        46,
        47
      ],
      "title": [
        "求解器接口与自由变量",
        "Solver interfaces and free variables"
      ],
      "lecture": [
        "课件介绍 lpSolveAPI：make.lp 建模、set.column 填列、lp.control 设方向、set.objfn/set.constr.type/set.rhs 设数据，solve 后用 get.objective/get.variables 读取结果。第 44 页含省略号，是模板。Python Gurobi 自由变量示例为 M.addVar(lb=-grb.GRB.INFINITY)。敏感性属性列出 Pi、SARHSLow、SARHSUp、RC、SAObjUp、SAObjLow。",
        "The slides introduce lpSolveAPI: make.lp, set.column, lp.control, set.objfn, set.constr.type and set.rhs, then solve and get.objective/get.variables. Page 44 contains placeholders and is a template. Gurobi’s free-variable example is M.addVar(lb=-grb.GRB.INFINITY). Listed sensitivity attributes are Pi, SARHSLow, SARHSUp, RC, SAObjUp and SAObjLow."
      ],
      "formulas": [],
      "explanation": [
        "这里只整理课件接口，未安装或运行 R/Gurobi，不能将模板视为已通过运行测试的程序。自由变量的下界需要明确设置，不能依赖非负默认值。",
        "These are lecture interface notes; R/Gurobi was not installed or executed. The template is not a tested program. Explicitly set free-variable bounds rather than relying on nonnegative defaults."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l5-k15"
    },
    {
      "pages": [
        48,
        49
      ],
      "title": [
        "对偶与敏感性复习",
        "Duality and sensitivity recap"
      ],
      "lecture": [
        "每条原约束对应一个对偶变量，每个原变量对应一条对偶约束。弱对偶给界，强对偶在有界可行情形给相等最优值，互补松弛联系解。敏感性提供有限范围的额外信息；数据改变后重新求解通常更可靠。课件最后仅提及鲁棒优化和随机优化作为其他不确定性方法。",
        "Constraints and variables exchange roles. Weak duality gives bounds, strong duality gives equal attained optima for bounded feasible LPs, and complementary slackness links solutions. Sensitivity supplies limited additional information; re-solving after data changes is often preferable. Robust and stochastic optimization are only mentioned as other approaches."
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
      "id": "etf5248-l5-k16"
    }
  ],
  "summary": [
    "先验证可行性，再比较目标与松弛。影子价格须注明方向、单位和有效基范围；边界内保持最优不保证唯一。",
    "Check feasibility before objectives and slackness. State shadow-price direction, units and basis validity. Retaining optimality at a boundary does not guarantee uniqueness."
  ],
  "exercises": [
    {
      "question": [
        "Dakota 的 table 收益升至 34，原解仍最优吗？",
        "If table revenue rises to 34, does the old solution remain optimal?"
      ],
      "answer": [
        "是，34≤35；x₂=0，收入仍为 280。",
        "Yes, 34≤35; x₂=0 and revenue stays 280."
      ],
      "pages": [
        38
      ]
    },
    {
      "question": [
        "desk 收益变为 70，范围内收入是多少？",
        "With desk revenue 70, what is the value within the valid range?"
      ],
      "answer": [
        "Δc₁=10，在 [−4,20] 内；280+2×10=300。",
        "Δc₁=10 lies in [−4,20]; 280+2×10=300."
      ],
      "pages": [
        41,
        42
      ]
    }
  ],
  "reviewPages": [
    {
      "pages": [
        30
      ],
      "reason": [
        "价格变化 5 的单位缺失。",
        "The unit of the price change 5 is missing."
      ]
    },
    {
      "pages": [
        41
      ],
      "reason": [
        "右侧 z=280 与参数化 RHS 标注不一致。",
        "The z=280 label conflicts with the parameterized RHS."
      ]
    }
  ]
};
