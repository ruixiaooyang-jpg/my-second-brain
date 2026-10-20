/* ETX5500 course note pack: paraphrased from the owner's lecture slides and tutorial solutions; page numbers are physical PDF pages.
   Loaded into a library only by an explicit button; see etx5500-pack.js. */
window.ETX5500Pack={
 "version": 1,
 "course": "ETX5500",
 "cards": [
  {
   "id": "etx5500-intro-high-dimensional-data",
   "kind": "concept",
   "title": "高维数据",
   "titleEn": "High-dimensional data",
   "body": "数据由观测（observations，行）和变量（variables，列）组成。所谓高维，通常指变量数量很多。高维数据分析不再把数据看成表格中的一行行记录，而是把每个观测看作几何空间中的一个点，每个变量对应空间的一个维度。因此，比较观测之间的相似性就变成了在这个空间里度量点与点之间的“距离”。",
   "bodyEn": "Data consist of observations (rows) and variables (columns). High-dimensional generally means the number of variables is large. Rather than viewing the data as rows in a table, high-dimensional data analysis treats each observation as a point in a geometric space with one dimension per variable. Comparing observations then becomes a question of how far apart the points are.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 10",
   "tags": [
    "ETX5500",
    "高维",
    "几何视角"
   ],
   "related": [
    "etx5500-intro-key-challenges",
    "etx5500-intro-observations-variables"
   ]
  },
  {
   "id": "etx5500-intro-key-challenges",
   "kind": "concept",
   "title": "高维数据的核心问题",
   "titleEn": "Key challenges in high-dimensional data",
   "body": "面对大量变量，我们想做的事包括：（1）理解数据中的模式，如趋势、关系或隐藏结构；（2）识别冗余信息，即哪些变量提供相似信息、相关变量能否被更高效地概括；（3）在保留重要信息的前提下降维（dimensionality reduction）；（4）发现相似观测组成的群组；（5）提取特征供后续的预测或决策分析使用。这些目标正好对应本课程后面的各类方法。",
   "bodyEn": "With many variables we want to: (1) understand patterns, such as trends, relationships or hidden structure; (2) identify redundant information, i.e. which variables carry similar information and whether correlated variables can be summarised more efficiently; (3) reduce dimensionality while preserving the important information; (4) discover groups of similar observations; and (5) extract features for later predictive or prescriptive analysis. These goals map onto the methods taught later in the unit.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 11",
   "tags": [
    "ETX5500",
    "降维",
    "目标"
   ],
   "related": [
    "etx5500-intro-high-dimensional-data",
    "etx5500-intro-supervised-vs-unsupervised"
   ]
  },
  {
   "id": "etx5500-intro-supervised-vs-unsupervised",
   "kind": "concept",
   "title": "监督学习与无监督学习",
   "titleEn": "Supervised vs unsupervised learning",
   "body": "监督学习（supervised learning）中结果（标签）已知，目标是学习一个把数据 \\(x\\) 映射到正确标签 \\(y\\) 的函数，方法有分类、回归等，例如预测房价、识别垃圾邮件。无监督学习（unsupervised learning）中结果未知，目标是在不借助已知标签的情况下推断数据集内部的模式，方法有聚类（clustering）、降维等，例如把顾客分成细分市场、发现隐藏模式。本课程的核心就是无监督学习方法的理论与实现。",
   "bodyEn": "In supervised learning the outcome (label) is known and the aim is to learn a function mapping the data \\(x\\) to the correct label \\(y\\); methods include classification and regression, e.g. predicting house prices or flagging spam. In unsupervised learning the outcome is unknown and the aim is to infer patterns in the data without reference to known labels; methods include clustering and dimension reduction, e.g. grouping customers into market segments. The core of this unit is the theory and implementation of unsupervised techniques.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 12, 14",
   "tags": [
    "ETX5500",
    "无监督",
    "监督"
   ],
   "related": [
    "etx5500-intro-key-challenges"
   ]
  },
  {
   "id": "etx5500-intro-data-structures",
   "kind": "concept",
   "title": "数据结构：截面数据与时间数据",
   "titleEn": "Cross-sectional and temporal data",
   "body": "截面数据（cross-sectional data）指在某一时间点对多个个体收集的数据，例如2025年7月澳大利亚各地区1000个家庭的收入，或2020年各大洲的面积与人口。本课程主要处理截面数据。时间数据（temporal data）则是与时间相关联的数据，例如美国月度宏观经济变量表（通胀、利率、失业率、波动率指数等），每行对应一个日期。",
   "bodyEn": "Cross-sectional data are collected at a single point in time across many subjects, e.g. incomes of 1000 Australian households in July 2025, or the land area and population of continents in 2020. This unit mostly considers cross-sectional data. Temporal data are data associated with time, such as the table of US monthly macroeconomic variables (inflation, interest rate, unemployment, volatility index), where each row is a date.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 17, 18",
   "tags": [
    "ETX5500",
    "数据类型",
    "截面"
   ],
   "related": [
    "etx5500-intro-variable-types",
    "etx5500-intro-observations-variables"
   ]
  },
  {
   "id": "etx5500-intro-variable-types",
   "kind": "concept",
   "title": "变量类型：metric 与 non-metric",
   "titleEn": "Types of variables: metric vs non-metric",
   "body": "变量分为 metric（数值型，也叫 ratio 变量）和 non-metric 两大类。metric 变量的差和比值有实际意义，例如人均收入5000美元是2500美元的两倍。non-metric 又分两种：categorical（nominal，名义变量）的取值不度量某种特征的大小，如姓名、国籍、血型；ordinal（有序变量）的取值表示特征多或少，但不说明多多少，如年龄组 Elder > Adult > Child、债券评级 AAA > AA > A、评分 Excellent > Good > Bad。",
   "bodyEn": "Variables are either metric (numerical or ratio) or non-metric. For a metric variable, differences and ratios are meaningful: a country with per capita income of 5000 dollars has twice the income of one with 2500 dollars. Non-metric variables are either categorical (nominal), whose values do not measure the size of a characteristic, e.g. name, nationality, blood type; or ordinal, whose values show more or less of a characteristic but not how much more, e.g. age group Elder > Adult > Child, bond risk AAA > AA > A, rating Excellent > Good > Bad.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 20, 21",
   "tags": [
    "ETX5500",
    "变量类型",
    "ordinal"
   ],
   "related": [
    "etx5500-intro-beer-data",
    "etx5500-distance-why-distance"
   ]
  },
  {
   "id": "etx5500-intro-observations-variables",
   "kind": "case",
   "title": "案例：美国各州数据",
   "titleEn": "Case: US states data",
   "body": "数据集给出1977年美国50个州的五项生活质量指标：收入 Income、文盲率 Illiteracy、预期寿命 LifeExp、谋杀率 Murder、高中毕业率 HSGrad，另有州名缩写。每一行是一个观测（一个州），每一列是一个变量（州的某个属性）。数据是截面数据；五个指标是 metric 变量，州名 State 是 categorical 变量。课堂用这个例子依次演示可视化、主成分、MDS、聚类等方法。",
   "bodyEn": "The data record five quality-of-life indicators for the 50 US states in 1977: income, illiteracy rate, life expectancy, murder rate and high school graduation rate, plus a state abbreviation. Each row is an observation (a state) and each column a variable (an attribute of the state). The data are cross-sectional; the five indicators are metric and State is categorical. The lecture reuses this dataset to introduce visualisation, principal components, MDS and clustering.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 24, 26",
   "tags": [
    "ETX5500",
    "US states",
    "metric"
   ],
   "related": [
    "etx5500-intro-visualising-limits",
    "etx5500-intro-variable-types"
   ]
  },
  {
   "id": "etx5500-intro-visualising-limits",
   "kind": "case",
   "title": "可视化的局限",
   "titleEn": "Limits of visualisation as variables grow",
   "body": "对州数据，单个变量可用直方图（如收入）；两个变量可用二维散点图（如收入对预期寿命），容易解读。三个变量可以画三维散点图，但在平面屏幕上不好看，也更难解读，不过仍能看出一些关系。那么五个变量、一百个变量怎么办？直接作图行不通，这就是需要降维与相似性度量等方法的原因。",
   "bodyEn": "For the states data one variable can be shown with a histogram (e.g. income), and two variables with a 2D scatter plot (income against life expectancy), which is easy to read. With three variables a 3D scatter plot is possible but looks poor on a flat screen and is harder to interpret, though some relationships remain visible. With five or a hundred variables plotting directly fails, which motivates dimension reduction and similarity-based methods.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 29, 31",
   "tags": [
    "ETX5500",
    "可视化",
    "三维"
   ],
   "related": [
    "etx5500-intro-observations-variables",
    "etx5500-intro-principal-components",
    "etx5500-intro-mds-intro"
   ]
  },
  {
   "id": "etx5500-intro-principal-components",
   "kind": "concept",
   "title": "主成分分析概览",
   "titleEn": "Principal components overview",
   "body": "主成分（principal components）方法可以把多个变量合成一个单一指数，这个指数解释了数据中的大部分变异。课堂上把第一主成分（PC1）画在美国地图上，用一个数值概括各州在五个指标上的总体情况。该方法将在课程后面详细讲解（PCA 一章）。",
   "bodyEn": "The method of principal components combines the variables into a single index that explains most of the variation in the data. In the lecture the first principal component is plotted on a map of the USA, summarising each state's overall position across the five indicators with one number. The method is covered in detail later in the unit.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 33",
   "tags": [
    "ETX5500",
    "PCA",
    "降维"
   ],
   "related": [
    "etx5500-intro-visualising-limits",
    "etx5500-intro-mds-intro",
    "etx5500-pca-why-index"
   ]
  },
  {
   "id": "etx5500-intro-mds-intro",
   "kind": "concept",
   "title": "多维尺度分析概览",
   "titleEn": "Multidimensional scaling overview",
   "body": "散点图上靠得近的两个州，在收入和预期寿命两个变量上相近。多维尺度分析（MDS）希望对全部五个变量做到同样的事：找到两个坐标，使散点图上相近的州在五个特征上整体也相近。这里的“近”需要明确定义某种几何（距离），即“在什么意义下接近”。课堂的 MDS 图以 v1、v2 为坐标。",
   "bodyEn": "Two states close together on the income-life expectancy scatter plot are similar on those two variables. Multidimensional scaling (MDS) aims to do the same across all five variables: it finds two coordinates so that states close on the plot are close across all five characteristics. Closeness needs a specific definition of geometry, i.e. close in what sense. The lecture's MDS plot uses coordinates v1 and v2.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 36, 37",
   "tags": [
    "ETX5500",
    "MDS",
    "距离"
   ],
   "related": [
    "etx5500-intro-principal-components",
    "etx5500-intro-cluster-factor-intro",
    "etx5500-intro-visualising-limits",
    "etx5500-mds-goal"
   ]
  },
  {
   "id": "etx5500-intro-cluster-factor-intro",
   "kind": "concept",
   "title": "聚类与因子分析概览",
   "titleEn": "Cluster analysis and factor analysis overview",
   "body": "从前面的简单分析可见，相似的州被归入少数几个组。用算法完成这一分组称为聚类分析（cluster analysis），在许多商业领域很有用；课堂把各州分成两类（South 与 Non-South）并在 PC1-PC2 图上用不同颜色标出。因子分析（factor analysis）则尝试给构造出的变量赋予可能的解释；这里的 factor 指不能直接观测、但可通过与可观测数据的相关性来度量的潜在构造（latent construct）。",
   "bodyEn": "Even in the simple analysis so far, similar states fall into a small number of groups. Algorithms that achieve this are called cluster analysis, which is useful across many business disciplines; the lecture splits the states into two clusters (South and Non-South), shown in colour on the PC1-PC2 plot. Factor analysis tries to give interpretations to the constructed variables; a factor is a latent construct that cannot be observed directly but can be measured through its correlation with observable data.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 39, 40",
   "tags": [
    "ETX5500",
    "聚类",
    "因子分析"
   ],
   "related": [
    "etx5500-intro-mds-intro",
    "etx5500-intro-principal-components",
    "etx5500-clustering-why-and-methods",
    "etx5500-factor-pca-vs-fa"
   ]
  },
  {
   "id": "etx5500-intro-beer-data",
   "kind": "case",
   "title": "案例：啤酒数据与变量类型",
   "titleEn": "Case: beer data and variable types",
   "body": "beer 数据集包含 beer、rating、origin、avail、price、cost、calories、sodium、alcohol、light 等变量。价格 price 是数值（metric）变量；产地 origin 是名义（nominal）变量；评分 rating 是有序（ordinal）变量：VeryGood 比 Good 好，但不知道好多少。识别变量类型是选择分析方法的第一步。",
   "bodyEn": "The beer dataset has variables such as beer, rating, origin, avail, price, cost, calories, sodium, alcohol and light. Price is a numerical (metric) variable, country of origin is nominal, and rating is ordinal: a VeryGood beer is better than a Good one but we do not know by how much. Identifying variable types is the first step in choosing a method.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 43, 44",
   "tags": [
    "ETX5500",
    "beer",
    "ordinal"
   ],
   "related": [
    "etx5500-intro-variable-types",
    "etx5500-intro-cross-tabulation",
    "etx5500-distance-beer-dist-r"
   ]
  },
  {
   "id": "etx5500-intro-cross-tabulation",
   "kind": "concept",
   "title": "交叉表与对应分析",
   "titleEn": "Cross tabulation and correspondence analysis",
   "body": "要研究 rating 与 origin 这类非 metric 变量之间的依赖，可以用交叉表（cross tabulation）。小的交叉表能直观提示类别变量间的关联：把产地合并为美国（US）与其他（Int.）时，VeryGood 为 4 对 7，Good 为 3 对 11，Fair 为 1 对 9。若列出所有国家，表变大，关系就不容易看出。大型交叉表可用对应分析（Correspondence Analysis）来概括和可视化，主要用于展示两个类别变量的关联；此时问题的“高维”来自类别数量多，而非变量数多。",
   "bodyEn": "To study dependence between non-metric variables such as rating and origin we use a cross tabulation. Small tables give a useful indication of association: with origin collapsed to US versus international (Int.), VeryGood is 4 vs 7, Good is 3 vs 11 and Fair is 1 vs 9. With all countries listed the table is larger and the relationship is harder to see. Large cross tabulations can be summarised and visualised by Correspondence Analysis, mostly used for the association between two categorical variables; the problem is high-dimensional because the number of categories, not variables, is large.",
   "category": "高维数据分析导论 · Introduction to high-dimensional data analysis",
   "source": "Intro.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 45, 46, 47, 48",
   "tags": [
    "ETX5500",
    "交叉表",
    "对应分析"
   ],
   "related": [
    "etx5500-intro-beer-data"
   ]
  },
  {
   "id": "etx5500-matrix-vectors-basis",
   "kind": "concept",
   "title": "向量与基向量",
   "titleEn": "Vectors and basis vectors",
   "body": "向量是一组数，可以写成行或列（本课默认列向量）。二维向量可以看成平面上的一个点、指向该点的箭头，或两个数字组成的数组，这些想法可推广到 \\(p\\) 维。向量只有两种基本运算：向量加法（几何上是平移，且满足交换律 \\(v_1+v_2=v_2+v_1\\)）和标量乘法（把向量自加 \\(c\\) 次，即整体伸缩，与矩阵乘法完全不同）。任何 \\(\\mathbb{R}^2\\) 中的向量都可由两个基向量 \\(b_1=(1,0)^\\top\\)、\\(b_2=(0,1)^\\top\\) 通过标量乘法和加法构造：\\(x b_1 + y b_2 = (x,y)^\\top\\)。这里的 \\(x,y\\) 就是标准基下的坐标。",
   "bodyEn": "A vector is a collection of numbers arranged as a row or a column (column vectors by convention in this lecture). A 2-dimensional vector can be seen as a point, an arrow pointing to that point, or an array of two numbers, and this extends to \\(p\\) dimensions. There are only two basic vector operations: addition (geometrically a translation, and commutative: \\(v_1+v_2=v_2+v_1\\)) and scalar multiplication (adding a vector to itself \\(c\\) times, i.e. rescaling, which is very different from matrix multiplication). Every vector in \\(\\mathbb{R}^2\\) can be built from the basis vectors \\(b_1=(1,0)^\\top\\) and \\(b_2=(0,1)^\\top\\) using these two operations: \\(x b_1 + y b_2 = (x,y)^\\top\\), so \\(x,y\\) are the coordinates in the standard basis.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 6, 7, 17, 25, 33, 34",
   "tags": [
    "ETX5500",
    "vector",
    "basis"
   ],
   "related": [
    "etx5500-matrix-vector-data-cases",
    "etx5500-matrix-change-of-basis"
   ]
  },
  {
   "id": "etx5500-matrix-vector-data-cases",
   "kind": "case",
   "title": "向量运算的数据含义：笼子与贸易赤字",
   "titleEn": "Vector operations on data: cages and trade deficits",
   "body": "课件用两个例子说明向量运算对数据的意义。(1) 笼子向量 \\((x,y)^\\top\\)：\\(x\\) 是鸡的数量，\\(y\\) 是兔的数量；把含 1 只鸡 3 只兔的笼子与含 2 只鸡 1 只兔的笼子相加，得到 3 只鸡 4 只兔。(2) 国家向量：两个分量分别是 2016 和 2017 年的贸易赤字；澳大利亚 (1B, 3B) 与新西兰 (2B, 1B) 组成货币联盟后赤字为 (3B, 4B)。标量乘法对应单位换算：若 6 元人民币 = 1 美元，则乘以标量 6，澳大利亚的 (1, 3) 十亿美元变成 (6, 18) 十亿人民币。许多这样的向量画成点，就得到散点图。",
   "bodyEn": "The slides give two data examples. (1) A cage vector \\((x,y)^\\top\\), where \\(x\\) counts chickens and \\(y\\) counts rabbits: adding a cage with 1 chicken and 3 rabbits to one with 2 chickens and 1 rabbit gives 3 chickens and 4 rabbits. (2) A country vector whose components are the trade deficits in 2016 and 2017: Australia (USD 1B, 3B) merged with New Zealand (2B, 1B) in a currency union gives (3B, 4B). Scalar multiplication models a unit change: with 6 Yuan = 1 USD, multiplying by 6 turns Australia's (1, 3) into (6, 18) billion Yuan. Plotting many such vectors as points gives a scatter plot.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 13, 23, 24, 32",
   "tags": [
    "ETX5500",
    "vector",
    "data"
   ],
   "related": [
    "etx5500-matrix-vectors-basis"
   ]
  },
  {
   "id": "etx5500-matrix-matrix-multiplication",
   "kind": "concept",
   "title": "矩阵乘法与可乘性",
   "titleEn": "Matrix multiplication and conformability",
   "body": "矩阵加法和标量乘法按元素进行（加法要求维数相同）。矩阵乘法不是对应元素相乘：结果的每个元素是第一个矩阵的某一行与第二个矩阵的某一列对应相乘再求和。\\(A_{n\\times m}B_{p\\times q}\\) 有定义当且仅当 \\(m=p\\)（内侧维数相等，即 conformable），乘积维数为 \\(n\\times q\\)（外侧维数）。例如行向量乘列向量 \\([1,3,4]\\,(6,4,5)^\\top = 6+12+20 = 38\\)，结果是标量。注意矩阵乘法一般不满足交换律：有时 \\(XY\\) 可乘而 \\(YX\\) 不可乘，即使两者都可乘也通常 \\(XY\\neq YX\\)。",
   "bodyEn": "Matrix addition and scalar multiplication work element by element (addition needs equal dimensions). Matrix multiplication does not multiply corresponding elements: each entry of the product is a row of the first matrix times a column of the second, multiplied pairwise and summed. \\(A_{n\\times m}B_{p\\times q}\\) is defined if and only if \\(m=p\\) (the inside dimensions match, i.e. conformable), and the product is \\(n\\times q\\) (the outside dimensions). For example a row times a column, \\([1,3,4]\\,(6,4,5)^\\top = 6+12+20 = 38\\), is a scalar. Matrix multiplication is generally not commutative: sometimes \\(XY\\) exists but \\(YX\\) does not, and even when both exist usually \\(XY\\neq YX\\).",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 41, 49, 60, 61",
   "tags": [
    "ETX5500",
    "multiplication",
    "conformable"
   ],
   "related": [
    "etx5500-matrix-transpose-inner-product",
    "etx5500-matrix-regression-matrix-case"
   ]
  },
  {
   "id": "etx5500-matrix-transpose-inner-product",
   "kind": "concept",
   "title": "转置、平方和与内积",
   "titleEn": "Transpose, sum of squares and inner product",
   "body": "转置把行变成列、列变成行。三条性质：\\((A^\\top)^\\top=A\\)；\\((A+B)^\\top=A^\\top+B^\\top\\)；\\((AB)^\\top=B^\\top A^\\top\\)（顺序反转）。对列向量 \\(z\\)，\\(z^\\top z=\\sum_{i=1}^n z_i^2\\) 是平方和；两个向量的内积定义为 \\(x^\\top y\\)，自身内积 \\(x^\\top x\\) 是长度的平方，例如 \\(v=(3,4)^\\top\\) 的长度为 5。若 \\(x^\\top y=0\\)，两向量成 90 度角，称为正交 (orthogonal)。",
   "bodyEn": "The transpose turns rows into columns and columns into rows. Three key properties: \\((A^\\top)^\\top=A\\); \\((A+B)^\\top=A^\\top+B^\\top\\); \\((AB)^\\top=B^\\top A^\\top\\) (order reversing). For a column vector \\(z\\), \\(z^\\top z=\\sum_{i=1}^n z_i^2\\) is the sum of squares. The inner product of two vectors is \\(x^\\top y\\); the inner product of a vector with itself, \\(x^\\top x\\), is its squared length, e.g. \\(v=(3,4)^\\top\\) has length 5. If \\(x^\\top y=0\\) the vectors are at 90 degrees, which is called orthogonality.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 52, 53, 54, 145, 146",
   "tags": [
    "ETX5500",
    "transpose",
    "inner product"
   ],
   "related": [
    "etx5500-matrix-matrix-multiplication",
    "etx5500-matrix-covariance-matrix",
    "etx5500-matrix-rotation-matrix"
   ]
  },
  {
   "id": "etx5500-matrix-regression-matrix-case",
   "kind": "case",
   "title": "例：线性回归的矩阵形式",
   "titleEn": "Example: the linear regression model in matrix form",
   "body": "\\(n\\) 个回归方程 \\(y_i=\\beta_1x_{i1}+\\dots+\\beta_kx_{ik}+\\varepsilon_i\\) 可以紧凑地写成 \\(y=X\\beta+\\varepsilon\\)。维数分别为：\\(y\\) 是 \\(n\\times1\\)（因变量的观测值）；\\(X\\) 是 \\(n\\times k\\)，\\(x_{ij}\\) 是第 \\(i\\) 个观测的第 \\(j\\) 个解释变量，若要截距则令 \\(x_{i1}=1\\)；\\(\\beta\\) 是 \\(k\\times1\\) 的系数向量；\\(\\varepsilon\\) 是 \\(n\\times1\\) 的误差向量。检查 \\((n\\times k)(k\\times1)=n\\times1\\)，可乘性成立，与 \\(\\varepsilon\\) 维数一致可相加。",
   "bodyEn": "The \\(n\\) regression equations \\(y_i=\\beta_1x_{i1}+\\dots+\\beta_kx_{ik}+\\varepsilon_i\\) can be written compactly as \\(y=X\\beta+\\varepsilon\\). The dimensions are: \\(y\\) is \\(n\\times1\\) (observations of the dependent variable); \\(X\\) is \\(n\\times k\\), where \\(x_{ij}\\) is observation \\(i\\) of predictor \\(j\\) (set \\(x_{i1}=1\\) for an intercept); \\(\\beta\\) is the \\(k\\times1\\) coefficient vector; \\(\\varepsilon\\) is the \\(n\\times1\\) error vector. Checking \\((n\\times k)(k\\times1)=n\\times1\\) shows the product is conformable and matches the dimension of \\(\\varepsilon\\) for addition.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 64, 65",
   "tags": [
    "ETX5500",
    "regression",
    "matrix form"
   ],
   "related": [
    "etx5500-matrix-matrix-multiplication",
    "etx5500-matrix-covariance-matrix",
    "etx5500-pca-optimisation"
   ]
  },
  {
   "id": "etx5500-matrix-covariance-matrix",
   "kind": "concept",
   "title": "方差协方差矩阵与对称矩阵",
   "titleEn": "Variance-covariance matrix and symmetric matrices",
   "body": "对随机向量 \\(y\\)，方差协方差矩阵为 \\(\\Sigma=E[(y-\\mu)(y-\\mu)^\\top]\\)，样本版本 \\(S=\\frac{1}{n-1}\\sum_{i=1}^n(y_i-\\bar y)(y_i-\\bar y)^\\top\\)。取 \\(\\mu=0\\) 的二维情形，\\(yy^\\top\\) 是 \\(2\\times2\\)，其期望的对角元是 \\(E[y_1^2],E[y_2^2]\\)（方差），非对角元是 \\(E[y_1y_2]\\)（协方差）。一般 \\(p\\) 维向量对应 \\(p\\times p\\) 矩阵，第 \\(i\\) 行第 \\(j\\) 列（\\(i\\neq j\\)）是 \\(y_i\\) 与 \\(y_j\\) 的协方差。协方差矩阵是对称矩阵，即 \\(A=A^\\top\\)，所以对称矩阵必为方阵。",
   "bodyEn": "For a random vector \\(y\\), the variance-covariance matrix is \\(\\Sigma=E[(y-\\mu)(y-\\mu)^\\top]\\), with sample version \\(S=\\frac{1}{n-1}\\sum_{i=1}^n(y_i-\\bar y)(y_i-\\bar y)^\\top\\). Taking \\(\\mu=0\\) in 2D, \\(yy^\\top\\) is \\(2\\times2\\) and its expectation has \\(E[y_1^2],E[y_2^2]\\) (variances) on the diagonal and \\(E[y_1y_2]\\) (covariances) off the diagonal. In general a \\(p\\)-dimensional vector gives a \\(p\\times p\\) matrix whose \\((i,j)\\) entry, \\(i\\neq j\\), is the covariance of \\(y_i\\) and \\(y_j\\). Covariance matrices are symmetric, \\(A=A^\\top\\), so a symmetric matrix must be square.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 66, 67, 70, 71, 72",
   "tags": [
    "ETX5500",
    "covariance",
    "symmetric"
   ],
   "related": [
    "etx5500-matrix-transpose-inner-product",
    "etx5500-matrix-eigen-definition",
    "etx5500-pca-covariance-eigen"
   ]
  },
  {
   "id": "etx5500-matrix-determinant",
   "kind": "concept",
   "title": "行列式",
   "titleEn": "Determinant",
   "body": "行列式是由方阵算出的一个特殊数，只对方阵有定义。若 \\(\\det(A)=0\\)，矩阵不可逆，对应线性方程组没有唯一解。二阶：\\(\\det\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}=ad-bc\\)；三阶：\\(a(ei-fh)-b(di-fg)+c(dh-eg)\\)。几何上，二阶行列式是列向量张成的平行四边形面积相对单位正方形的缩放倍数：\\(\\det=1\\) 保持面积，\\(\\det=2\\) 面积加倍，\\(\\det=0.5\\) 面积减半；\\(\\det=0\\) 时平行四边形塌缩成线（线性相关）。行列式还用于求逆和计算特征值。",
   "bodyEn": "The determinant is a special number computed from a square matrix; it is only defined for square matrices. If \\(\\det(A)=0\\) the matrix is not invertible, and the corresponding linear system has no unique solution. For 2x2: \\(\\det\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}=ad-bc\\); for 3x3: \\(a(ei-fh)-b(di-fg)+c(dh-eg)\\). Geometrically, the 2x2 determinant is the factor by which the parallelogram spanned by the columns scales area relative to a unit square: \\(\\det=1\\) preserves area, \\(\\det=2\\) doubles it, \\(\\det=0.5\\) halves it, and \\(\\det=0\\) collapses it to a line (linearly dependent). Determinants are also used for inverses and eigenvalues.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 76, 78, 79, 80",
   "tags": [
    "ETX5500",
    "determinant",
    "area"
   ],
   "related": [
    "etx5500-matrix-matrix-inverse",
    "etx5500-matrix-eigen-geometry"
   ]
  },
  {
   "id": "etx5500-matrix-matrix-inverse",
   "kind": "concept",
   "title": "单位矩阵与逆矩阵",
   "titleEn": "Identity matrix and matrix inverse",
   "body": "矩阵不能严格地相除，但可以乘以逆矩阵，类似标量中除以 \\(b\\) 等于乘以 \\(1/b\\)。矩阵代数中的“1”是单位矩阵 \\(I\\)，满足 \\(AI=IA=A\\)。方阵 \\(X\\) 的逆 \\(X^{-1}\\) 定义为 \\(X^{-1}X=XX^{-1}=I\\)，只有 \\(\\det(X)\\neq0\\) 才存在。性质：\\((A^{-1})^{-1}=A\\)，\\((AB)^{-1}=B^{-1}A^{-1}\\)，\\((kA)^{-1}=k^{-1}A^{-1}\\)，\\((A^\\top)^{-1}=(A^{-1})^\\top\\)。二阶公式：\\(A^{-1}=\\frac{1}{\\det(A)}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}\\)。R 中用 solve() 求逆，det() 求行列式，例如课件中的 3x3 例子 det 为 7。",
   "bodyEn": "Strictly speaking matrices cannot be divided, but we can multiply by an inverse, like dividing by \\(b\\) equals multiplying by \\(1/b\\). The matrix equivalent of 1 is the identity matrix \\(I\\), with \\(AI=IA=A\\). The inverse of a square matrix \\(X\\) is defined by \\(X^{-1}X=XX^{-1}=I\\) and exists only when \\(\\det(X)\\neq0\\). Properties: \\((A^{-1})^{-1}=A\\), \\((AB)^{-1}=B^{-1}A^{-1}\\), \\((kA)^{-1}=k^{-1}A^{-1}\\), \\((A^\\top)^{-1}=(A^{-1})^\\top\\). For 2x2: \\(A^{-1}=\\frac{1}{\\det(A)}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}\\). In R use solve() for the inverse and det() for the determinant; the slides' 3x3 example has determinant 7.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 84, 86, 87, 88, 89, 100",
   "tags": [
    "ETX5500",
    "inverse",
    "identity",
    "R"
   ],
   "related": [
    "etx5500-matrix-determinant",
    "etx5500-matrix-rotation-matrix"
   ]
  },
  {
   "id": "etx5500-matrix-eigen-definition",
   "kind": "concept",
   "title": "特征值与特征向量的定义及求法",
   "titleEn": "Eigenvalues and eigenvectors: definition and computation",
   "body": "对方阵 \\(A\\)，若 \\(Av=\\lambda v\\) 且 \\(v\\neq0\\)，则 \\(\\lambda\\) 是特征值，\\(v\\) 是特征向量（要求 \\(v\\) 非零，否则任何数都满足 \\(A0=c0\\)）。求法：移项得 \\((A-\\lambda I)v=0\\)；要有非零解，\\(A-\\lambda I\\) 必须不可逆，因此解特征方程 \\(\\det(A-\\lambda I)=0\\)。二阶情形化为 \\((a-\\lambda)(d-\\lambda)-bc=0\\)，是 \\(\\lambda\\) 的二次方程，给出两个特征值。例：\\(A=\\begin{bmatrix}1&4\\\\1&1\\end{bmatrix}\\)，\\(x_1=(2,1)^\\top\\) 满足 \\(Ax_1=3x_1\\)，故 3 是特征值；而 \\(x_2=(2,-2)^\\top\\) 不是特征向量。特征分解用于对角化、SVD 和 PCA。",
   "bodyEn": "For a square matrix \\(A\\), \\(\\lambda\\) is an eigenvalue and \\(v\\) an eigenvector if \\(Av=\\lambda v\\) with \\(v\\neq0\\) (otherwise every number would work since \\(A0=c0\\)). To find them, rearrange to \\((A-\\lambda I)v=0\\); a non-zero solution requires \\(A-\\lambda I\\) to be non-invertible, so solve the characteristic equation \\(\\det(A-\\lambda I)=0\\). For 2x2 this becomes \\((a-\\lambda)(d-\\lambda)-bc=0\\), a quadratic in \\(\\lambda\\) giving two eigenvalues. Example: for \\(A=\\begin{bmatrix}1&4\\\\1&1\\end{bmatrix}\\), \\(x_1=(2,1)^\\top\\) gives \\(Ax_1=3x_1\\), so 3 is an eigenvalue, while \\(x_2=(2,-2)^\\top\\) is not an eigenvector. Eigen-decomposition underlies diagonalization, SVD and PCA.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 104, 105, 107, 108, 110",
   "tags": [
    "ETX5500",
    "eigenvalue",
    "eigenvector"
   ],
   "related": [
    "etx5500-matrix-eigen-geometry",
    "etx5500-matrix-determinant",
    "etx5500-matrix-covariance-matrix",
    "etx5500-pca-covariance-eigen",
    "etx5500-mds-classical-algorithm"
   ]
  },
  {
   "id": "etx5500-matrix-eigen-geometry",
   "kind": "concept",
   "title": "特征值的几何意义、行列式与迹",
   "titleEn": "Geometry of eigenvalues, determinant and trace",
   "body": "特征值是沿特征向量方向的缩放因子：\\(\\lambda>1\\) 拉伸，\\(0<\\lambda<1\\) 压缩，\\(\\lambda=1\\) 长度不变，\\(\\lambda=0\\) 塌缩为点，负值则同时翻转方向。实特征值表示沿特征向量方向缩放而不旋转；复特征值表示缩放加旋转，例如 \\(\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}\\) 的特征值为 \\(\\pm i\\)，点被逆时针旋转 90 度而不缩放。对角矩阵 \\(\\mathrm{diag}(2,0.5)\\) 沿 x 轴拉伸 2 倍、沿 y 轴压缩一半；对称矩阵 \\(\\begin{bmatrix}5&2\\\\2&5\\end{bmatrix}\\) 的特征值为 7 和 3，特征向量夹角为 90 度，而非对称例子则不是。所有特征值之积等于行列式，\\(\\det(A)=\\prod\\lambda_j\\)；之和等于迹，\\(\\mathrm{tr}(A)=\\sum\\lambda_j\\)。",
   "bodyEn": "Eigenvalues are scaling factors along eigenvector directions: \\(\\lambda>1\\) stretches, \\(0<\\lambda<1\\) compresses, \\(\\lambda=1\\) keeps length, \\(\\lambda=0\\) collapses to a point, and negative values also flip direction. Real eigenvalues mean scaling along the eigenvector directions with no rotation; complex eigenvalues mean scaling combined with rotation, e.g. \\(\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}\\) has eigenvalues \\(\\pm i\\) and rotates points anticlockwise by 90 degrees without scaling. The diagonal matrix \\(\\mathrm{diag}(2,0.5)\\) stretches by 2 along x and halves along y; the symmetric matrix \\(\\begin{bmatrix}5&2\\\\2&5\\end{bmatrix}\\) has eigenvalues 7 and 3 with eigenvectors at 90 degrees, unlike the asymmetric example. The product of all eigenvalues equals the determinant, \\(\\det(A)=\\prod\\lambda_j\\), and their sum equals the trace, \\(\\mathrm{tr}(A)=\\sum\\lambda_j\\).",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 113, 115, 118, 119, 124",
   "tags": [
    "ETX5500",
    "eigenvalue",
    "geometry",
    "trace"
   ],
   "related": [
    "etx5500-matrix-eigen-definition",
    "etx5500-matrix-determinant",
    "etx5500-matrix-rotation-matrix"
   ]
  },
  {
   "id": "etx5500-matrix-change-of-basis",
   "kind": "concept",
   "title": "矩阵作为基的变换与非方阵",
   "titleEn": "A matrix as a change of basis, and non-square matrices",
   "body": "左乘矩阵 \\(M\\) 把空间中所有点移到新位置，\\(M\\) 的列记录了 \\(b_1,b_2\\) 被移到哪里。例如 \\(M=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}\\) 把 \\(b_1=(1,0)^\\top\\) 移到 \\((2,1)^\\top\\)，把 \\(b_2=(0,1)^\\top\\) 移到 \\((-1,1)^\\top\\)。于是 \\(v^*=Mv=x b_1^*+y b_2^*=(2x-y,\\,x+y)^\\top\\)，\\(x,y\\) 是新基下的坐标，\\(v^*\\) 是标准基下的坐标；如 \\(v=(3,2)^\\top\\) 变成 \\(v^*=(4,5)^\\top\\)。也可看作 \\(M\\) 的各行乘列向量 \\(v\\)。非方阵（如 \\(3\\times2\\)）会改变维数：输入 2 维、输出 3 维，但点仍落在 3 维空间的一个 2 维子空间内。",
   "bodyEn": "Premultiplying by a matrix \\(M\\) moves every point in space to a new address, and the columns of \\(M\\) record where \\(b_1\\) and \\(b_2\\) go. For \\(M=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}\\), \\(b_1=(1,0)^\\top\\) moves to \\((2,1)^\\top\\) and \\(b_2=(0,1)^\\top\\) to \\((-1,1)^\\top\\). Hence \\(v^*=Mv=x b_1^*+y b_2^*=(2x-y,\\,x+y)^\\top\\): \\(x,y\\) are coordinates on the new basis and \\(v^*\\) gives coordinates on the standard basis; e.g. \\(v=(3,2)^\\top\\) becomes \\(v^*=(4,5)^\\top\\). Equivalently, multiply the rows of \\(M\\) by the column \\(v\\). A non-square matrix (e.g. \\(3\\times2\\)) changes dimension: a 2D input gives a 3D output, yet the points still lie in a 2D subspace of 3D space.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 129, 130, 132, 133, 142",
   "tags": [
    "ETX5500",
    "change of basis",
    "linear map"
   ],
   "related": [
    "etx5500-matrix-vectors-basis",
    "etx5500-matrix-rotation-matrix"
   ]
  },
  {
   "id": "etx5500-matrix-rotation-matrix",
   "kind": "concept",
   "title": "正交旋转矩阵",
   "titleEn": "Orthogonal rotation matrices",
   "body": "旋转矩阵 \\(R\\) 把所有点绕原点转动，同时保持各点到原点的距离以及点与点之间的距离不变；“正交”指新的基向量互相垂直。二维例子：\\(R=\\begin{bmatrix}0.8&-0.6\\\\0.6&0.8\\end{bmatrix}\\)。条件：列 \\(r_i\\) 长度为 1，即 \\(r_i^\\top r_i=1\\)；不同列正交，\\(r_i^\\top r_j=0\\ (i\\neq j)\\)。因此 \\(R^\\top R=RR^\\top=I\\)，即 \\(R^\\top=R^{-1}\\)，并且 \\(\\det(R)=1\\)（体积保持不变）。这些性质后续在因子模型中会大量用到。",
   "bodyEn": "A rotation matrix \\(R\\) spins all points around the origin while keeping each point's distance from the origin and from the other points; orthogonal means the new basis vectors are at right angles. A 2D example is \\(R=\\begin{bmatrix}0.8&-0.6\\\\0.6&0.8\\end{bmatrix}\\). Conditions: each column \\(r_i\\) has length one, \\(r_i^\\top r_i=1\\), and different columns are orthogonal, \\(r_i^\\top r_j=0\\ (i\\neq j)\\). Hence \\(R^\\top R=RR^\\top=I\\), so \\(R^\\top=R^{-1}\\), and \\(\\det(R)=1\\) (volume is preserved). The lecture closes noting that matrices are used heavily in factor modelling.",
   "category": "矩阵基础 · Matrix basics",
   "source": "matrix_basics.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 147, 148, 150, 151",
   "tags": [
    "ETX5500",
    "rotation",
    "orthogonal"
   ],
   "related": [
    "etx5500-matrix-transpose-inner-product",
    "etx5500-matrix-matrix-inverse",
    "etx5500-matrix-eigen-geometry",
    "etx5500-mds-rotation",
    "etx5500-factor-rotations"
   ]
  },
  {
   "id": "etx5500-distance-why-distance",
   "kind": "concept",
   "title": "为什么需要距离",
   "titleEn": "Why we need a distance",
   "body": "很多问题都要判断两个观测（向量）有多相似或多不同：相似人群可以用同一套营销策略，银行倾向于把钱借给与“按时还款者”相似的申请人。课件认为距离可以说是数据分析中最重要的概念。要判断两个向量甚至矩阵是否“相似”，需要一个数值化的距离度量。观测很多时，人眼看散点图不再可行，所以要给每一对观测一个数字。课件用 Pink (31, 67)、Orange (37, 75)、Green (30, 68)（年龄、年收入千元）三个人做例子，并借助毕达哥拉斯定理把“直观上的远近”变成具体数字。",
   "bodyEn": "Many problems depend on how similar or dissimilar two observations (vectors) are: similar demographic groups may get the same marketing strategy, and a lender favours applicants who resemble people who repaid. The slides call distance arguably the most important concept in data analysis. To decide whether two vectors, or matrices, are similar we need a numerical distance. With thousands of observations we cannot eyeball a scatter plot, so each pair gets a number. The running example has Mr Pink (31, 67), Mr Orange (37, 75) and Mr Green (30, 68) as (age, income in k), and uses Pythagoras' theorem to turn visual closeness into a number.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 2, 3, 4, 6",
   "tags": [
    "ETX5500",
    "distance",
    "motivation"
   ],
   "related": [
    "etx5500-distance-euclidean-manhattan",
    "etx5500-distance-standardising",
    "etx5500-intro-variable-types",
    "etx5500-clustering-why-and-methods"
   ]
  },
  {
   "id": "etx5500-distance-euclidean-manhattan",
   "kind": "concept",
   "title": "欧氏距离与曼哈顿距离",
   "titleEn": "Euclidean and Manhattan distance",
   "body": "对两个观测 \\(x,y\\) 各测量 \\(p\\) 个变量，\\(x_j\\) 与 \\(y_j\\) 是第 \\(j\\) 个变量的取值。欧氏距离把二维毕达哥拉斯定理推广到高维：$$D(x,y)=\\sqrt{\\sum_{j=1}^{p}(x_j-y_j)^2}.$$曼哈顿距离（又称 block distance，街区距离）把平方换成绝对值：$$D(x,y)=\\sum_{j=1}^{p}|x_j-y_j|.$$本课程几乎总是使用欧氏距离，但距离还有其他定义方式。曼哈顿距离像沿街区走路，只能沿坐标轴方向累加。",
   "bodyEn": "Measure \\(p\\) variables on two observations, with \\(x_j\\) and \\(y_j\\) the values of variable \\(j\\). Euclidean distance generalises two-dimensional Pythagoras to higher dimensions: $$D(x,y)=\\sqrt{\\sum_{j=1}^{p}(x_j-y_j)^2}.$$ Manhattan (block) distance replaces squares by absolute values: $$D(x,y)=\\sum_{j=1}^{p}|x_j-y_j|.$$ The unit will nearly always use Euclidean distance, but other notions of distance exist. Manhattan distance adds up movement along the coordinate axes, like walking city blocks.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 16, 17, 18",
   "tags": [
    "ETX5500",
    "Euclidean",
    "Manhattan"
   ],
   "related": [
    "etx5500-distance-why-distance",
    "etx5500-distance-axioms",
    "etx5500-clustering-why-and-methods"
   ]
  },
  {
   "id": "etx5500-distance-axioms",
   "kind": "concept",
   "title": "距离的四条公理",
   "titleEn": "The four axioms of a distance",
   "body": "在严格数学里，距离是一个两输入函数，必须满足四条公理：(1) 非负性 \\(d(x,y)\\ge 0\\)；(2) 对称性 \\(d(x,y)=d(y,x)\\)，如同墨尔本到布里斯班与反过来一样远；(3) 不可分辨者同一性：\\(d(x,y)=0\\) 当且仅当 \\(x=y\\)；(4) 三角不等式 \\(d(x,z)\\le d(x,y)+d(y,z)\\)，即经悉尼绕行不可能比直达更近。所以使用“距离”一词要谨慎：自己设计的相似性度量必须检验这四条。",
   "bodyEn": "In formal mathematics a distance is a two-input function that must satisfy four axioms. (1) Non-negativity: \\(d(x,y)\\ge 0\\). (2) Symmetry: \\(d(x,y)=d(y,x)\\), just as Melbourne to Brisbane equals Brisbane to Melbourne. (3) Identity of indiscernibles: \\(d(x,y)=0\\) if and only if \\(x=y\\). (4) Triangle inequality: \\(d(x,z)\\le d(x,y)+d(y,z)\\), so going via Sydney can never be shorter than going direct. The word distance should therefore be used with care: any measure you design has to be checked against these four properties.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 20, 21",
   "tags": [
    "ETX5500",
    "axioms",
    "metric"
   ],
   "related": [
    "etx5500-distance-axiom-check-case",
    "etx5500-distance-euclidean-manhattan",
    "etx5500-mds-goal"
   ]
  },
  {
   "id": "etx5500-distance-axiom-check-case",
   "kind": "case",
   "title": "例：检验距离矩阵是否合法",
   "titleEn": "Example: is this a valid distance matrix?",
   "body": "课件给出点 \\(x,y,z\\) 的成对“距离”矩阵：\\(d(x,y)=2\\)，\\(d(x,z)=1\\)，\\(d(y,z)=4\\)，对角线为 0，且矩阵对称。非负、对称、对角线为零这三条都满足，所以要重点检查三角不等式。取 \\(d(y,z)=4\\)，而经由 \\(x\\) 绕行只需 \\(d(y,x)+d(x,z)=2+1=3\\)，于是 \\(4\\le 3\\) 不成立。因此这不是合法的距离矩阵。这个例子说明：只看矩阵对称、非负并不够，三角不等式需要逐个三元组验证。",
   "bodyEn": "The slide gives a pairwise matrix for points \\(x,y,z\\): \\(d(x,y)=2\\), \\(d(x,z)=1\\), \\(d(y,z)=4\\), zeros on the diagonal, and the matrix is symmetric. Non-negativity, symmetry and zero diagonal all hold, so the triangle inequality is the thing to test. The direct distance \\(d(y,z)=4\\), but going through \\(x\\) costs only \\(d(y,x)+d(x,z)=2+1=3\\), and \\(4\\le 3\\) fails. So this is not a valid distance matrix. Symmetry and non-negativity are not enough; the triangle inequality must be checked for every triple.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 22",
   "tags": [
    "ETX5500",
    "axioms",
    "triangle inequality"
   ],
   "related": [
    "etx5500-distance-axioms"
   ]
  },
  {
   "id": "etx5500-distance-standardising",
   "kind": "concept",
   "title": "单位与标准化",
   "titleEn": "Units of measurement and standardising",
   "body": "欧氏和曼哈顿距离都依赖变量的单位。课件的例子：A（身高 170cm、体重 60kg、收入 30000 元）与 B（160、62、40000），欧氏距离约为 10000，几乎完全由收入这个数值最大的变量决定。因此通常先标准化数据再算距离。如果所有变量单位相同（例如都是 cm），标准化就不必要。另外有些距离，如 Mahalanobis 距离，对测量单位不敏感。",
   "bodyEn": "Euclidean and Manhattan distances change when variables are measured in different units. In the slide example, A has height 170 cm, weight 60 kg, income 30000 and B has 160, 62, 40000; their Euclidean distance is about 10000, driven almost entirely by income, the variable with the largest numbers. It is therefore common to compute distances after standardising the data. If all variables share the same units, standardising is unnecessary. Some distances, such as Mahalanobis distance, are not sensitive to units.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 23",
   "tags": [
    "ETX5500",
    "standardising",
    "units"
   ],
   "related": [
    "etx5500-distance-euclidean-manhattan",
    "etx5500-distance-beer-dist-r",
    "etx5500-pca-standardisation"
   ]
  },
  {
   "id": "etx5500-distance-beer-dist-r",
   "kind": "case",
   "title": "例：用 R 的 dist 计算啤酒距离",
   "titleEn": "Example: beer distances with dist() in R",
   "body": "课件用 beers 数据：只保留价格高于 4.5 美元的啤酒，只取数值变量，用 scale() 标准化，再用 dist() 得到欧氏距离，输出是一个 dist 对象。因为只用数值变量，啤酒名字没有附在 dist 对象上，需要把名字赋给 dist 对象的 Labels 属性。结果中 Anchor Steam、Becks、Heineken、Kirin、St Pauli Girl 五种啤酒里，Heineken 与 Kirin 的距离最小（1.1482），Anchor Steam 与 St Pauli Girl 为 4.1950，是表中最大的距离之一，Anchor Steam 与 Kirin 的 4.1632 也很大。",
   "bodyEn": "The slides use the beer data: keep beers priced above 4.5, select only numeric variables, standardise with scale(), then call dist() to get Euclidean distances as a dist object. Because only numeric variables were used, the beer names are not attached, so they are assigned to the Labels attribute of the dist object. Among Anchor Steam, Becks, Heineken, Kirin and St Pauli Girl, Heineken and Kirin are the closest pair (1.1482), while Anchor Steam to St Pauli Girl is 4.1950, the largest entry in the printed matrix.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 24, 26, 27, 28",
   "tags": [
    "ETX5500",
    "R",
    "dist",
    "beer"
   ],
   "related": [
    "etx5500-distance-standardising",
    "etx5500-intro-beer-data",
    "etx5500-mds-beer-example"
   ]
  },
  {
   "id": "etx5500-distance-jaccard",
   "kind": "concept",
   "title": "Jaccard 相似度与距离",
   "titleEn": "Jaccard similarity and distance",
   "body": "对非度量（如文本、集合）数据也能定义距离。Jaccard 系数 = 交集大小 / 并集大小：$$J(A,B)=\\frac{|A\\cap B|}{|A\\cup B|}=\\frac{|A\\cap B|}{|A|+|B|-|A\\cap B|}\\in[0,1].$$Jaccard 距离为 \\(d_J(A,B)=1-J(A,B)\\)。例一：客户 A 喜欢 Maroon 5、Ariana Grande、Ed Sheeran、Cardi B，客户 B 喜欢 Maroon 5、Ed Sheeran、BTS，交集 2 个、并集 5 个，\\(J=0.4\\)，\\(d_J=0.6\\)。例二：两句话的不重复单词，交集 5 个、并集 9 个，\\(d_J=1-5/9=4/9\\)，相似度约 56%。",
   "bodyEn": "Distance can also be defined for non-metric data such as sets or text. The Jaccard coefficient is the size of the intersection divided by the size of the union: $$J(A,B)=\\frac{|A\\cap B|}{|A\\cup B|}=\\frac{|A\\cap B|}{|A|+|B|-|A\\cap B|}\\in[0,1].$$ Jaccard distance is \\(d_J(A,B)=1-J(A,B)\\). Example 1: customer A likes Maroon 5, Ariana Grande, Ed Sheeran, Cardi B; customer B likes Maroon 5, Ed Sheeran, BTS. The intersection has 2 artists and the union 5, so \\(J=0.4\\) and \\(d_J=0.6\\). Example 2: two sentences share 5 unique words out of 9 in total, so \\(d_J=1-5/9=4/9\\), a similarity of about 56%.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 30, 34, 36, 37, 38",
   "tags": [
    "ETX5500",
    "Jaccard",
    "sets",
    "non-metric"
   ],
   "related": [
    "etx5500-distance-cosine",
    "etx5500-distance-axioms"
   ]
  },
  {
   "id": "etx5500-distance-cosine",
   "kind": "concept",
   "title": "余弦相似度",
   "titleEn": "Cosine similarity",
   "body": "余弦相似度度量两个向量之间的“夹角”：$$\\cos_s(x,y)=\\frac{\\sum_{i=1}^n x_i y_i}{\\sqrt{\\sum_{i=1}^n x_i^2}\\sqrt{\\sum_{i=1}^n y_i^2}}.$$它不考虑向量的长度（magnitude），只看方向。夹角 \\(\\pi/2\\) 时为 0，夹角 \\(\\pi\\) 时为 \\(-1\\)。一般取值范围是 \\(-1\\) 到 1，但在文本挖掘等场合向量非负，范围缩为 0 到 1。余弦距离定义为 \\(1-\\)余弦相似度。",
   "bodyEn": "Cosine similarity measures the angle between two vectors: $$\\cos_s(x,y)=\\frac{\\sum_{i=1}^n x_i y_i}{\\sqrt{\\sum_{i=1}^n x_i^2}\\sqrt{\\sum_{i=1}^n y_i^2}}.$$ The magnitude of the vectors is ignored; only direction matters. An angle of \\(\\pi/2\\) gives 0 and an angle of \\(\\pi\\) gives \\(-1\\). In general it ranges from \\(-1\\) to 1, but when vectors are non-negative (e.g. text mining) the range is 0 to 1. Cosine distance is 1 minus cosine similarity.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 39, 41, 42, 43",
   "tags": [
    "ETX5500",
    "cosine",
    "angle"
   ],
   "related": [
    "etx5500-distance-cosine-pearson",
    "etx5500-distance-cosine-text-case",
    "etx5500-distance-jaccard"
   ]
  },
  {
   "id": "etx5500-distance-cosine-pearson",
   "kind": "concept",
   "title": "余弦相似度与皮尔逊相关",
   "titleEn": "Cosine similarity and Pearson correlation",
   "body": "样本相关系数为 $$\\mathrm{corr}(x,y)=\\frac{\\sum_i (x_i-\\bar x)(y_i-\\bar y)}{\\sqrt{\\sum_i (x_i-\\bar x)^2}\\sqrt{\\sum_i (y_i-\\bar y)^2}},$$其中 \\(\\bar x,\\bar y\\) 是样本均值。把它与余弦相似度的公式对比可见：如果 \\(x\\) 和 \\(y\\) 已经中心化（均值为 0），两者完全相等，\\(\\mathrm{corr}(x,y)=\\cos_s(x,y)\\)。换言之，相关系数就是中心化后向量的余弦相似度。",
   "bodyEn": "The sample correlation coefficient is $$\\mathrm{corr}(x,y)=\\frac{\\sum_i (x_i-\\bar x)(y_i-\\bar y)}{\\sqrt{\\sum_i (x_i-\\bar x)^2}\\sqrt{\\sum_i (y_i-\\bar y)^2}},$$ where \\(\\bar x,\\bar y\\) are the sample means. Comparing with the cosine formula shows that if \\(x\\) and \\(y\\) are centred (mean zero) the two coincide: \\(\\mathrm{corr}(x,y)=\\cos_s(x,y)\\). In other words, correlation is the cosine similarity of the centred vectors.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 44",
   "tags": [
    "ETX5500",
    "cosine",
    "correlation"
   ],
   "related": [
    "etx5500-distance-cosine",
    "etx5500-pca-biplots"
   ]
  },
  {
   "id": "etx5500-distance-cosine-text-case",
   "kind": "case",
   "title": "例：文档的余弦相似度",
   "titleEn": "Example: cosine similarity of two documents",
   "body": "要对字符串用余弦相似度，必须先编码成数值：把两个文档中所有不重复的词建成词表（vocabulary），再把每个文档表示为词频向量。课件的 A = “I love high-dimensional data analysis”，B = “High-dimensional data analysis is amazing”。在 R 里用 tm 包建 Corpus 与 TermDocumentMatrix，它会去掉 “I”、“is” 这类常见词，并且注意到 “high-dimensional” 与 “High-dimensional” 被区别对待。转置矩阵使行是文档，再用 proxy 包的 simil(method = \"cosine\") 得到相似度 0.75。可手算验证：去掉常见词后两向量各有 4 个 1，共同词 3 个，\\(3/(2\\cdot 2)=0.75\\)。",
   "bodyEn": "To use cosine similarity on strings we must encode them numerically: build a vocabulary of all unique words in both documents and represent each document as a vector of word counts. The slides use A = \"I love high-dimensional data analysis\" and B = \"High-dimensional data analysis is amazing\". In R the tm package builds a Corpus and TermDocumentMatrix, which drops common words such as \"I\" and \"is\"; the slides also point out that \"high-dimensional\" and \"High-dimensional\" are treated differently. After transposing so rows are documents, simil(method = \"cosine\") from the proxy package gives 0.75. A hand check agrees: after dropping common words each vector has four 1s and they share three words, so \\(3/(2\\cdot 2)=0.75\\).",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 45, 46, 49, 50, 51",
   "tags": [
    "ETX5500",
    "cosine",
    "text",
    "R"
   ],
   "related": [
    "etx5500-distance-cosine",
    "etx5500-distance-jaccard"
   ]
  },
  {
   "id": "etx5500-distance-matrix-distance",
   "kind": "concept",
   "title": "矩阵之间的距离",
   "titleEn": "Distance between matrices",
   "body": "要度量两个同型矩阵 \\(A,B\\) 的距离，所选度量仍须满足距离公理。若按列看，可以：对对应列的距离求和 \\(\\sum_j d(a_j,b_j)\\)；或取元素间差异的最大值或最小值。另一类做法是令 \\(C=A-B\\) 并用范数：谱范数 \\(\\|C\\|_2=\\sqrt{\\lambda_{\\max}(C^\\top C)}\\)，表示 \\(C\\) 对向量的最大拉伸；Frobenius 范数 \\(\\|C\\|_F=\\big(\\sum_{i}\\sum_{j}|c_{ij}|^2\\big)^{1/2}=\\sqrt{\\mathrm{Tr}(C^\\top C)}\\)，逐元素衡量差异，平方使较大的差异被放大。由于迹等于特征值之和，\\(\\|C\\|_2\\) 是 \\(C^\\top C\\) 的最大特征值的平方根，\\(\\|C\\|_F\\) 是其全部特征值之和的平方根。",
   "bodyEn": "To measure the distance between conformable matrices \\(A\\) and \\(B\\), the choice must still respect the distance axioms. Column-wise options are to sum the distances between corresponding columns, \\(\\sum_j d(a_j,b_j)\\), or to take the maximal or minimal elementwise difference. Another route sets \\(C=A-B\\) and uses a norm. The spectral norm \\(\\|C\\|_2=\\sqrt{\\lambda_{\\max}(C^\\top C)}\\) is the maximum stretch of a vector under \\(C\\). The Frobenius norm \\(\\|C\\|_F=\\big(\\sum_{i}\\sum_{j}|c_{ij}|^2\\big)^{1/2}=\\sqrt{\\mathrm{Tr}(C^\\top C)}\\) captures entrywise difference, with squaring emphasising large differences. Since the trace equals the sum of eigenvalues, \\(\\|C\\|_2\\) uses the largest eigenvalue of \\(C^\\top C\\) while \\(\\|C\\|_F\\) uses the square root of the sum of all of them.",
   "category": "距离 · Distance",
   "source": "distance.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 52, 53, 54, 55",
   "tags": [
    "ETX5500",
    "matrix norm",
    "Frobenius",
    "spectral"
   ],
   "related": [
    "etx5500-distance-axioms",
    "etx5500-distance-euclidean-manhattan"
   ]
  },
  {
   "id": "etx5500-clustering-why-and-methods",
   "kind": "concept",
   "title": "为什么聚类与方法分类",
   "titleEn": "Why clustering and the families of methods",
   "body": "聚类的目的是在没有标签的情况下，用所有可用变量把相似的观测分组，例如做市场细分。只按单个变量（如只看年龄或只看收入）分组可能产生误导；当变量多于两个时散点图也无法直接看出群，因此需要算法在高维下合理地找出聚类。方法分两大类：层次聚类（hierarchical）和非层次聚类（non-hierarchical）。层次聚类中，凝聚式（agglomerative）从每个观测各成一类开始，逐步合并最相似的类，直到全部合为一类；分裂式（divisive）则相反，但速度很慢，课程不讲。非层次聚类需要事先指定聚类个数，不再合并或拆分，课程以 k-means 为例。聚类需要两种距离：观测之间的距离，以及类与类之间的距离。",
   "bodyEn": "Clustering groups similar observations without labels, using all available variables; market segmentation is the motivating example. Segmenting on a single variable such as age or income alone can mislead, and with more than two variables a scatter plot no longer reveals groups, so algorithms are needed to find clusters sensibly in high dimensions. Methods fall into hierarchical and non-hierarchical families. Agglomerative hierarchical clustering starts with every observation as its own cluster and merges the most similar clusters step by step until one remains; divisive methods work the other way but are very slow and not covered. Non-hierarchical methods fix the number of clusters in advance, with no merging or splitting; the course uses k-means. Two notions of distance are needed: between observations and between clusters.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 10, 16, 17, 18",
   "tags": [
    "ETX5500",
    "clustering",
    "agglomerative",
    "k-means"
   ],
   "related": [
    "etx5500-clustering-single-complete",
    "etx5500-clustering-kmeans",
    "etx5500-intro-cluster-factor-intro",
    "etx5500-distance-euclidean-manhattan",
    "etx5500-distance-why-distance"
   ]
  },
  {
   "id": "etx5500-clustering-single-complete",
   "kind": "concept",
   "title": "单链接与全链接",
   "titleEn": "Single and complete linkage",
   "body": "设 \\(\\mathcal{A}=\\{a_1,\\dots,a_I\\}\\) 与 \\(\\mathcal{B}=\\{b_1,\\dots,b_J\\}\\) 是两个类，每个观测是属性向量（如年龄和收入）。单链接（single linkage，最近邻）定义类间距离为两类中最近两点的距离：\\(D(\\mathcal{A},\\mathcal{B})=\\min_{i,j}D(a_i,b_j)\\)。全链接（complete linkage，最远邻）取最远两点的距离：\\(D(\\mathcal{A},\\mathcal{B})=\\max_{i,j}D(a_i,b_j)\\)。名称的由来是：用全链接得到的距离，意味着一个类中的所有点与另一个类中的所有点之间的距离都不超过该值。两者的类间距离都只由一对观测决定。",
   "bodyEn": "Let \\(\\mathcal{A}=\\{a_1,\\dots,a_I\\}\\) and \\(\\mathcal{B}=\\{b_1,\\dots,b_J\\}\\) be two clusters, where each observation is a vector of attributes such as age and income. Single linkage (nearest neighbour) defines the cluster distance as the smallest distance between a point in each cluster: \\(D(\\mathcal{A},\\mathcal{B})=\\min_{i,j}D(a_i,b_j)\\). Complete linkage (furthest neighbour) uses the largest: \\(D(\\mathcal{A},\\mathcal{B})=\\max_{i,j}D(a_i,b_j)\\). The name complete comes from the fact that every point of one cluster is within the stated distance of every point of the other. In both cases the cluster distance depends on just one pair of observations.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 19, 20, 23, 26",
   "tags": [
    "ETX5500",
    "linkage",
    "single",
    "complete"
   ],
   "related": [
    "etx5500-clustering-chaining-robust",
    "etx5500-clustering-average-centroid",
    "etx5500-clustering-dendrogram-choose"
   ]
  },
  {
   "id": "etx5500-clustering-chaining-robust",
   "kind": "concept",
   "title": "链式效应与稳健性",
   "titleEn": "Chaining, inliers and robustness",
   "body": "单链接的优点是易懂且算法很快，缺点是对个别观测非常敏感，会产生链式效应（chaining）：一个新增的点就能把原本分开的类连起来。课件中新增的那个观测甚至不是离群点，而是 inlier（完全符合其余数据的模式），却显著改变了单链接的结果。不受单个观测影响的方法称为稳健（robust）。全链接避免了链式问题，得到更紧凑的类，对 inlier 稳健；但由于类间距离只取决于两个观测，它仍可能对离群点（outlier）敏感。因此更推荐更稳健的方法：average linkage、centroid linkage 和 Ward 方法。",
   "bodyEn": "Single linkage is easy to understand and very fast, but it is very sensitive to individual observations and suffers from chaining: one added point can bridge clusters that were otherwise separate. In the lecture example the added observation was not even an outlier but an inlier, one that fits the pattern of the rest of the data, yet it changed the single linkage solution dramatically. Methods unaffected by single observations are called robust. Complete linkage avoids chaining, gives more compact clusters and is robust to inliers, but since the cluster distance depends on only two observations it can still be sensitive to outliers. The more robust methods that should be preferred are average linkage, centroid linkage and Ward's method.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 55, 62, 65",
   "tags": [
    "ETX5500",
    "chaining",
    "robustness",
    "linkage"
   ],
   "related": [
    "etx5500-clustering-single-complete",
    "etx5500-clustering-average-centroid",
    "etx5500-clustering-ward"
   ]
  },
  {
   "id": "etx5500-clustering-average-centroid",
   "kind": "concept",
   "title": "平均链接与质心链接",
   "titleEn": "Average and centroid linkage",
   "body": "平均链接（average linkage）使用两类之间所有成对距离的平均：\\(D(\\mathcal{A},\\mathcal{B})=\\frac{1}{I\\times J}\\sum_{i=1}^{I}\\sum_{j=1}^{J}D(a_i,b_j)\\)，其中 \\(I\\)、\\(J\\) 分别是两类的观测个数。质心链接（centroid linkage）先求每类的质心（均值向量）\\(\\bar a=\\frac1I\\sum_{i=1}^I a_i\\)，再取两个质心之间的距离。顺序不同：平均链接是先算成对距离再平均；质心链接是先对观测求平均得到质心再算距离。例：一维下 \\(\\mathcal{A}=\\{0,2\\}\\)、\\(\\mathcal{B}=\\{3,5\\}\\)，成对距离为 3、5、1、3，平均为 3；质心为 1 和 4，距离也是 3。该例两者相同，但对向量数据一般不相同。",
   "bodyEn": "Average linkage uses all pairwise distances between the two clusters: \\(D(\\mathcal{A},\\mathcal{B})=\\frac{1}{I\\times J}\\sum_{i=1}^{I}\\sum_{j=1}^{J}D(a_i,b_j)\\), where \\(I\\) and \\(J\\) are the numbers of observations in each cluster. Centroid linkage first computes each cluster's centroid, the vector mean \\(\\bar a=\\frac1I\\sum_{i=1}^I a_i\\), and then takes the distance between the two centroids. The order of operations differs: average linkage computes pairwise distances and then averages them, while centroid linkage averages the observations and then measures distance. Example in one dimension: \\(\\mathcal{A}=\\{0,2\\}\\), \\(\\mathcal{B}=\\{3,5\\}\\). The pairwise distances are 3, 5, 1, 3 with mean 3; the centroids are 1 and 4, also 3 apart. Here the methods agree, but with vectors they generally do not.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 66, 69, 75, 76",
   "tags": [
    "ETX5500",
    "linkage",
    "average",
    "centroid"
   ],
   "related": [
    "etx5500-clustering-single-complete",
    "etx5500-clustering-ward",
    "etx5500-clustering-chaining-robust"
   ]
  },
  {
   "id": "etx5500-clustering-ward",
   "kind": "concept",
   "title": "Ward 方法与组内方差",
   "titleEn": "Ward's method and within-cluster variance",
   "body": "前面的方法都是在类间距离小时合并；Ward 方法则是合并后使组内方差（within-cluster variance）最小的两个类。类 \\(\\mathcal{A}\\) 的离差平方和为 \\(S(\\mathcal{A})=\\sum_{i=1}^{I}(a_i-\\bar a)^\\top(a_i-\\bar a)\\)，组内方差为 \\(V_W(\\mathcal{A})=\\frac{1}{I-1}S(\\mathcal{A})\\)。直观上就是每个属性相对均值的差平方，再对属性和观测求和，因此它是所有属性的总方差。算法每一步合并两个类 \\(\\mathcal{A}\\)、\\(\\mathcal{B}\\) 得到新类 \\(\\mathcal{C}\\)，选择使 \\(V_W(\\mathcal{C})\\) 尽可能小的一对。R 中有 Ward.D2（与原论文一致）和 Ward.D（基于一个错误，但有时仍表现不错）。",
   "bodyEn": "The earlier methods merge clusters when the distance between them is small; Ward's method instead merges the two clusters that minimise the within-cluster variance of the result. For a cluster \\(\\mathcal{A}\\), the sum of squares is \\(S(\\mathcal{A})=\\sum_{i=1}^{I}(a_i-\\bar a)^\\top(a_i-\\bar a)\\) and the within-cluster variance is \\(V_W(\\mathcal{A})=\\frac{1}{I-1}S(\\mathcal{A})\\). In words, take each attribute's deviation from its mean, square, and add over attributes and observations, so it is the total variance across all attributes. At each step, merging \\(\\mathcal{A}\\) and \\(\\mathcal{B}\\) into \\(\\mathcal{C}\\), the algorithm picks the pair giving the smallest \\(V_W(\\mathcal{C})\\). R offers two variants: Ward.D2 matches the original paper, while Ward.D rests on a mistake but can still work quite well.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 77, 78, 79, 83",
   "tags": [
    "ETX5500",
    "Ward",
    "variance",
    "linkage"
   ],
   "related": [
    "etx5500-clustering-average-centroid",
    "etx5500-clustering-kmeans",
    "etx5500-clustering-chaining-robust"
   ]
  },
  {
   "id": "etx5500-clustering-dendrogram-choose",
   "kind": "concept",
   "title": "树状图、R 流程与选择聚类个数",
   "titleEn": "Dendrogram, R workflow and choosing the number of clusters",
   "body": "树状图（dendrogram）把观测放在一个轴上，类间距离放在另一个轴上，显示合并的先后顺序。可把距离轴看作“容忍度”：距离在容忍度之内的类被合并，容忍度越大，类越少。R 流程至多三步：若单位不同先用 scale 标准化，用 dist 计算所有观测对的距离，再用 hclust 聚类（如 method=\"complete\" 或 \"ward.D2\"），用 cutree 取出给定 k 的类成员。聚类个数没有唯一正确答案，取决于背景：太多（例如公司无力为每个细分市场制定不同策略）或太少（取 1 类就没有意义）都不好。一个准则是稳定性：寻找在很长一段容忍度范围内类数保持不变的解。",
   "bodyEn": "A dendrogram puts observations on one axis and the distance between clusters on the other, showing the order in which clusters merge. Treat the distance axis as a tolerance level: clusters within the tolerance are merged, so a larger tolerance gives fewer clusters. In R the workflow is at most three steps: standardise with scale if variables have different units, compute all pairwise distances with dist, then cluster with hclust (for example method = \"complete\" or \"ward.D2\"); cutree extracts membership for a chosen k. There is no single correct number of clusters and it depends on context: too many (a firm may lack the resources for many strategies) or too few (one cluster is pointless) are poor choices. One criterion is stability, meaning a long stretch of tolerance over which the number of clusters does not change.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 28, 38, 39, 46, 53",
   "tags": [
    "ETX5500",
    "dendrogram",
    "number of clusters",
    "R"
   ],
   "related": [
    "etx5500-clustering-toy-hierarchy",
    "etx5500-clustering-single-complete",
    "etx5500-clustering-wholesaler-nesting"
   ]
  },
  {
   "id": "etx5500-clustering-kmeans",
   "kind": "concept",
   "title": "k-means 与 Lloyd 算法",
   "titleEn": "k-means and Lloyd's algorithm",
   "body": "k-means 事先指定 \\(k\\)。要求每个点离自己所在类的均值最近，不能离别的类均值更近。目标是在所有把数据划分为 \\(k\\) 类 \\(C=\\{C_1,\\dots,C_k\\}\\) 的方式中最小化组内平方和：\\(\\arg\\min_C\\sum_{i=1}^{k}S(C_i)\\)。这个优化问题计算机难以精确求解，所以用启发式算法。Lloyd 算法：1) 选 \\(k\\) 个初始质心（可随机）；2) 把每个观测分配给最近的质心；3) 用类内观测的均值重新计算质心；4) 重复 2、3 直到收敛。R 默认用更复杂的 Hartigan-Wong 算法。结果对初始值敏感，可用 nstart 多次随机初始化；不同运行可能只是类标签互换（label switching），重要的是质心而非编号。kmeans 返回 cluster、centers 和 size。",
   "bodyEn": "k-means fixes \\(k\\) in advance and requires each point to be closest to the mean of its own cluster rather than to any other cluster's mean. Its objective is to minimise the total within-cluster sum of squares over partitions \\(C=\\{C_1,\\dots,C_k\\}\\): \\(\\arg\\min_C\\sum_{i=1}^{k}S(C_i)\\). Computers cannot easily solve this exactly, so heuristics are used. Lloyd's algorithm: (1) choose \\(k\\) initial centroids, possibly at random; (2) allocate each observation to the nearest centroid; (3) recompute centroids as the cluster means; (4) repeat 2 and 3 until convergence. R defaults to the more sophisticated Hartigan-Wong algorithm. Results are sensitive to starting values, so use nstart to try many starts. Different runs may differ only by label switching, where cluster numbers are permuted; the centroids matter, not the order. The kmeans output gives cluster, centers and size.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 86, 87, 89, 104, 106, 107",
   "tags": [
    "ETX5500",
    "k-means",
    "Lloyd",
    "nstart"
   ],
   "related": [
    "etx5500-clustering-wholesaler-nesting",
    "etx5500-clustering-ward",
    "etx5500-clustering-why-and-methods"
   ]
  },
  {
   "id": "etx5500-clustering-rand-index",
   "kind": "concept",
   "title": "Rand 指数与调整 Rand 指数",
   "titleEn": "Rand index and adjusted Rand index",
   "body": "评价聚类很难：没有像预测那样与结果比较，也没有像回归那样的拟合优度，理论指导也很少。好策略是试几种方法：数据结构清晰时多数方法结果相近；若方法间结果差异巨大，可能数据中本就没有清晰的类。可用 Rand 指数衡量两个聚类解的一致性：任取两个观测，若在两个解中都同类或都不同类则一致，否则不一致。\\(RI=\\frac{a+b}{\\binom{n}{2}}\\)，其中 \\(a\\)、\\(b\\) 分别是在两个聚类中都同类、都不同类的点对数。RI 在 0 到 1 之间，越大越一致。调整 Rand 指数（ARI，R 包 mclust 的 adjustedRandIndex）修正随机一致：随机标签时约为 0，完全一致时为 1，比随机差时为负。",
   "bodyEn": "Evaluating a cluster solution is hard: there are no outcomes to compare with as in forecasting, no goodness of fit as in regression, and little theory. A good strategy is to try several methods; with clear structure most agree, and if they all differ wildly there may be no clear clusters. The Rand index measures agreement between two solutions: pick two observations at random; they agree if they are together in both solutions or apart in both, and disagree otherwise. \\(RI=\\frac{a+b}{\\binom{n}{2}}\\), where \\(a\\) and \\(b\\) count pairs in the same cluster, respectively different clusters, in both clusterings. RI lies in [0, 1], higher meaning more agreement. The adjusted Rand index (adjustedRandIndex in the mclust package) corrects for chance agreement: about 0 for random labelling, 1 for perfect agreement, negative if worse than chance.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 115, 116, 119, 120, 121",
   "tags": [
    "ETX5500",
    "Rand index",
    "ARI",
    "evaluation"
   ],
   "related": [
    "etx5500-clustering-kmeans",
    "etx5500-clustering-wholesaler-nesting"
   ]
  },
  {
   "id": "etx5500-clustering-toy-hierarchy",
   "kind": "case",
   "title": "七点玩具例子：逐步合并",
   "titleEn": "Toy example: seven points merged step by step",
   "body": "课件用 7 个点演示完整的凝聚式聚类，使用欧氏距离和单链接。每一步合并距离最近的两个类，得到一串嵌套的解：7 类 {1},{2},…,{7}；6 类 {1,2},{3},…；5 类 {1,2},{3,4},{5},{6},{7}；4 类 {1,2},{3,4,5},{6},{7}；3 类 {1,2,3,4,5},{6},{7}；2 类 {1,2,3,4,5},{6,7}；1 类为全体。每个解都是由前一个解合并两个类得到，这些合并顺序和距离都画在树状图上，在某个高度（容忍度）水平切开，就得到对应个数的聚类。",
   "bodyEn": "The lecture walks through full agglomerative clustering on seven points, using Euclidean distance and single linkage. At each step the two closest clusters merge, producing nested solutions: 7 clusters {1},{2},...,{7}; 6 clusters {1,2},{3},...; 5 clusters {1,2},{3,4},{5},{6},{7}; 4 clusters {1,2},{3,4,5},{6},{7}; 3 clusters {1,2,3,4,5},{6},{7}; 2 clusters {1,2,3,4,5},{6,7}; and finally one cluster of everything. Each solution comes from the previous one by merging two clusters. The merge order and distances are drawn on the dendrogram, and cutting at a given height (tolerance) gives the corresponding number of clusters.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 27, 36",
   "tags": [
    "ETX5500",
    "example",
    "agglomerative",
    "dendrogram"
   ],
   "related": [
    "etx5500-clustering-dendrogram-choose",
    "etx5500-clustering-single-complete",
    "etx5500-clustering-wholesaler-nesting"
   ]
  },
  {
   "id": "etx5500-clustering-wholesaler-nesting",
   "kind": "case",
   "title": "批发商数据：层次与 k-means 的嵌套性对比",
   "titleEn": "Wholesaler data: nestedness of hierarchical versus k-means",
   "body": "数据是 440 个批发商客户在 6 类商品（Fresh、Milk、Grocery、Frozen、Detergents/Paper、Delicassen）上的年消费。3 类 k-means 的质心显示：一类 Fresh 很高（均值约 35941），一类 Milk、Grocery 和 Detergents_Paper 很高，另一类整体较低；课件推测这些类可能对应酒店、超市和咖啡馆，质心可用于刻画（profiling）各类。关键对比：层次聚类（Ward）中，2 类解与 3 类解是嵌套的，3 类解中同一类的点在 2 类解中必在同一类（表中为 261/0/45 与 0/134/0）。k-means 则不然：3 类中的一个类有 317 个点进入 2 类解的类 1，另 13 个进入类 2，即被拆开。所以不同 k 的 k-means 结果可能互相矛盾。",
   "bodyEn": "The data cover 440 wholesaler customers with annual spend in six categories (Fresh, Milk, Grocery, Frozen, Detergents/Paper, Delicatessen). The 3-cluster k-means centroids show one cluster with very high Fresh spend (mean about 35941), one with very high Milk, Grocery and Detergents_Paper, and one with generally lower spend; the lecture suggests they may represent hotels, supermarkets and cafes, and centroids are used to profile clusters. The key contrast is nestedness. With hierarchical Ward clustering, the 2- and 3-cluster solutions are nested: observations together in the 3-cluster solution are together in the 2-cluster one (the table shows 261/0/45 and 0/134/0). With k-means this fails: one 3-cluster group sends 317 observations to the new cluster 1 and 13 to cluster 2, so it is split. Hence k-means solutions for different k can contradict one another.",
   "category": "聚类分析 · Cluster analysis",
   "source": "clustering.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 15, 109, 113",
   "tags": [
    "ETX5500",
    "wholesaler",
    "k-means",
    "nested"
   ],
   "related": [
    "etx5500-clustering-kmeans",
    "etx5500-clustering-dendrogram-choose",
    "etx5500-clustering-rand-index"
   ]
  },
  {
   "id": "etx5500-mds-goal",
   "kind": "concept",
   "title": "MDS 的目标",
   "titleEn": "Goal of multidimensional scaling",
   "body": "当有 \\(p\\) 个变量且 \\(p\\) 很大时，散点图无法直接展示观测之间的距离。多维尺度分析（MDS）要找到一个低维（通常是 2 维）表示，使这些点在低维空间中的两两欧氏距离尽可能接近原始距离。精确还原一般做不到，但可以得到很好的近似。“接近”的含义可以不同，因此 MDS 有多种做法；但所有 MDS 都从一个距离矩阵出发，最后得到可以画图的低维坐标。Beyonce 与埃菲尔铁塔的错觉照片说明：把 3D 压到 2D 会让原本很远的距离看起来很近，所以需要有原则地做降维。",
   "bodyEn": "When there are \\(p\\) variables with \\(p\\) large, a scatter plot cannot show how far apart observations are. Multidimensional scaling (MDS) looks for a low-dimensional (usually 2D) representation in which the pairwise Euclidean distances between points are as close as possible to the original distances. An exact reproduction is generally impossible, but a good approximation is. What counts as close can vary, so there are different MDS methods, yet every one starts from a matrix of distances and ends with low-dimensional coordinates that can be plotted. The Beyonce and Eiffel Tower photo shows the risk: flattening 3D to 2D can make a large distance look small, so the reduction needs to be done in a principled way.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 5, 6, 8",
   "tags": [
    "ETX5500",
    "mds",
    "distance",
    "visualisation"
   ],
   "related": [
    "etx5500-mds-classical-algorithm",
    "etx5500-mds-strain",
    "etx5500-intro-mds-intro",
    "etx5500-distance-axioms",
    "etx5500-pca-pca-mds"
   ]
  },
  {
   "id": "etx5500-mds-beer-example",
   "kind": "case",
   "title": "啤酒数据集的 MDS 示例",
   "titleEn": "Beer dataset MDS example",
   "body": "该例用只含 rating 为 Fair 的啤酒（10 个品牌），且只取数值变量（price、cost、calories、sodium、alcohol 共 5 维），这样可用欧氏距离。数据是 5 维的，不能直接画散点图。MDS 图显示 Olympia Gold Light 和 Pabst Extra Light 很接近（都是 light 啤酒）；St Pauli Girl 附近竞争者很少，这可能意味着它的特点并不为顾客所需。这类图可回答：哪些产品被认为相似、谁是最近的竞争对手、市场上是否存在空档。",
   "bodyEn": "The example keeps only beers rated Fair (10 brands) and only the metric variables (price, cost, calories, sodium, alcohol: five dimensions) so that Euclidean distance can be used. Five dimensions cannot be shown in a scatter plot. The MDS plot shows Olympia Gold Light and Pabst Extra Light close together (both are light beers), and St Pauli Girl with few nearby competitors, which may mean its attributes are not what customers want. Such a plot helps answer which products customers see as similar, who the closest competitor is, and whether there are gaps in the market where a new product could enter.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 9, 11, 12, 13",
   "tags": [
    "ETX5500",
    "beer",
    "market-profiling"
   ],
   "related": [
    "etx5500-mds-goal",
    "etx5500-mds-r-workflow",
    "etx5500-distance-beer-dist-r"
   ]
  },
  {
   "id": "etx5500-mds-r-workflow",
   "kind": "concept",
   "title": "在 R 中做经典 MDS 的流程",
   "titleEn": "Classical MDS workflow in R",
   "body": "步骤：（1）只保留数值变量；（2）用 scale() 标准化；（3）用 dist() 得到所有观测对之间的欧氏距离矩阵 \\(\\Delta\\)；（4）用 cmdscale(delta) 做经典 MDS，得到每个观测的两个新坐标（V1, V2）；（5）用 ggplot 画 V1 对 V2 的散点图，加 geom_text 可显示名字。例如 Blatz 与 Tuborg 的原始距离满足 \\(\\delta^2=\\sum_{h=1}^{5}(\\text{Blatz}_h-\\text{Tbrg}_h)^2\\)。cmdscale 加上 eig = TRUE 还会返回特征值和 GOF。这两个新变量只是为了可视化距离而构造的。",
   "bodyEn": "Steps: (1) keep only numeric variables; (2) standardise with scale(); (3) use dist() to get the Euclidean distance matrix \\(\\Delta\\) between every pair of observations; (4) run cmdscale(delta) for classical MDS, which returns two new coordinates (V1, V2) per observation; (5) plot V1 against V2 with ggplot, using geom_text to show names. For example, the original Blatz to Tuborg distance satisfies \\(\\delta^2=\\sum_{h=1}^{5}(\\text{Blatz}_h-\\text{Tbrg}_h)^2\\). Adding eig = TRUE to cmdscale also returns the eigenvalues and the GOF. The two new variables exist only to visualise the distances.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 14, 15, 16, 17",
   "tags": [
    "ETX5500",
    "R",
    "cmdscale",
    "standardise"
   ],
   "related": [
    "etx5500-mds-beer-example",
    "etx5500-mds-gof",
    "etx5500-mds-classical-algorithm"
   ]
  },
  {
   "id": "etx5500-mds-strain",
   "kind": "concept",
   "title": "Strain：经典 MDS 的目标函数",
   "titleEn": "Strain: the classical MDS objective",
   "body": "给定 \\(x_i\\in\\mathbb{R}^p\\)，先算距离矩阵 \\(\\Delta=(\\delta_{ij})\\)；目标是找 \\(y_1,\\dots,y_n\\in\\mathbb{R}^r\\)（\\(r\\) 通常为 2），使 \\(d(y_i,y_j)\\approx\\delta(x_i,x_j)\\)。经典 MDS 最小化 strain：$$\\text{strain}=\\sum_{i=1}^{n-1}\\sum_{j>i}\\left[\\delta(x_i,x_j)-d(y_i,y_j)\\right]^2.$$ 其中 \\(\\delta\\) 来自真实的高维数据，\\(d\\) 来自低维解。当使用欧氏距离时这个问题有可处理的解，依赖特征值分解。",
   "bodyEn": "Given \\(x_i\\in\\mathbb{R}^p\\), first compute the distance matrix \\(\\Delta=(\\delta_{ij})\\); the aim is to find \\(y_1,\\dots,y_n\\in\\mathbb{R}^r\\) (usually \\(r=2\\)) with \\(d(y_i,y_j)\\approx\\delta(x_i,x_j)\\). Classical MDS minimises the strain: $$\\text{strain}=\\sum_{i=1}^{n-1}\\sum_{j>i}\\left[\\delta(x_i,x_j)-d(y_i,y_j)\\right]^2.$$ Here \\(\\delta\\) comes from the true high-dimensional data and \\(d\\) from the low-dimensional solution. The problem has a tractable solution when Euclidean distance is used, based on an eigenvalue decomposition.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 23, 24, 25",
   "tags": [
    "ETX5500",
    "strain",
    "objective"
   ],
   "related": [
    "etx5500-mds-classical-algorithm",
    "etx5500-mds-stress-sammon",
    "etx5500-mds-goal"
   ]
  },
  {
   "id": "etx5500-mds-classical-algorithm",
   "kind": "concept",
   "title": "经典 MDS 的求解步骤",
   "titleEn": "Classical MDS solution steps",
   "body": "给定距离矩阵 \\(\\Delta\\)：（1）计算 \\(B=-\\tfrac12 H(\\Delta\\odot\\Delta)H\\)，其中 \\(H=I_n-\\tfrac1n \\mathbf 1_n\\mathbf 1_n^\\top\\) 是中心化矩阵，\\(\\odot\\) 是逐元素（Hadamard）乘积；（2）可以证明 \\(B=HX(HX)^\\top\\)；（3）对 \\(B\\) 做特征值分解，取最大的 \\(r\\) 个特征值 \\(\\lambda_1\\ge\\dots\\ge\\lambda_r\\)，坐标为 \\(Y=U_r\\Sigma_r^{1/2}\\)，其中 \\(U_r\\) 是对应特征向量，\\(\\Sigma_r^{1/2}\\) 是对角元为 \\(\\sqrt{\\lambda_i}\\) 的对角矩阵。直观上这相当于旋转点云，找到最能保留真实距离的 2D 视角。",
   "bodyEn": "Given the distance matrix \\(\\Delta\\): (1) compute \\(B=-\\tfrac12 H(\\Delta\\odot\\Delta)H\\), where \\(H=I_n-\\tfrac1n \\mathbf 1_n\\mathbf 1_n^\\top\\) is the centering matrix and \\(\\odot\\) is the element-wise (Hadamard) product; (2) one can show \\(B=HX(HX)^\\top\\); (3) do an eigenvalue decomposition of \\(B\\), keep the largest \\(r\\) eigenvalues \\(\\lambda_1\\ge\\dots\\ge\\lambda_r\\), and set \\(Y=U_r\\Sigma_r^{1/2}\\), where \\(U_r\\) holds the matching eigenvectors and \\(\\Sigma_r^{1/2}\\) is diagonal with entries \\(\\sqrt{\\lambda_i}\\). Intuitively this rotates the points until the 2D view represents the true distances as accurately as possible.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 25, 26, 27",
   "tags": [
    "ETX5500",
    "eigenvalue",
    "centering",
    "algorithm"
   ],
   "related": [
    "etx5500-mds-strain",
    "etx5500-mds-gof",
    "etx5500-mds-rotation",
    "etx5500-matrix-eigen-definition"
   ]
  },
  {
   "id": "etx5500-mds-rotation",
   "kind": "concept",
   "title": "旋转解释坐标轴",
   "titleEn": "Rotating the solution to interpret axes",
   "body": "MDS 解只确定点之间的相对位置，所以可以在 2 维内旋转这些点。二维旋转不会改变任何距离，但有助于解释坐标轴。在澳大利亚城市的例子里，旋转后 x 轴对应东西方向，y 轴对应南北方向，结果与真实地图非常接近。注意：这也说明 MDS 图的坐标轴方向本身没有固有含义，除非旋转后能给出合理解释。",
   "bodyEn": "An MDS solution fixes only the relative positions of the points, so the points can be rotated within the 2D plane. A 2D rotation changes none of the distances but can help interpret the axes. In the Australian cities example, after rotation the x-axis represents the East-West direction and the y-axis North-South, and the result is very close to a real map. This also shows that the axis directions of an MDS plot have no inherent meaning unless a sensible interpretation emerges after rotation.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 31, 32, 33, 35",
   "tags": [
    "ETX5500",
    "rotation",
    "interpretation"
   ],
   "related": [
    "etx5500-mds-roads-case",
    "etx5500-mds-classical-algorithm",
    "etx5500-mds-gof",
    "etx5500-matrix-rotation-matrix"
   ]
  },
  {
   "id": "etx5500-mds-gof",
   "kind": "concept",
   "title": "拟合优度 GoF1 与 GoF2",
   "titleEn": "Goodness of fit: GoF1 and GoF2",
   "body": "理论上欧氏距离下 strain 已被最小化，但最优解仍可能很差，所以需要像回归 \\(R^2\\) 那样的拟合度量，二者都基于特征值：$$\\text{GoF}_1=\\frac{\\sum_{i=1}^{2}|\\lambda_i|}{\\sum_{i=1}^{n}|\\lambda_i|},\\quad \\text{GoF}_2=\\frac{\\sum_{i=1}^{2}\\max(0,\\lambda_i)}{\\sum_{i=1}^{n}\\max(0,\\lambda_i)}.$$ 欧氏距离下特征值都非负，故 GoF1 = GoF2。R 中用 cmdscale(delta, eig = TRUE) 并取其 GOF 分量。啤酒例两者都是 0.8543，说明 2D 表示较准确。",
   "bodyEn": "Even though strain is minimised for Euclidean distances, the optimal solution can still be poor, so two fit measures, similar in spirit to \\(R^2\\) in regression, are used. Both depend on the eigenvalues: $$\\text{GoF}_1=\\frac{\\sum_{i=1}^{2}|\\lambda_i|}{\\sum_{i=1}^{n}|\\lambda_i|},\\quad \\text{GoF}_2=\\frac{\\sum_{i=1}^{2}\\max(0,\\lambda_i)}{\\sum_{i=1}^{n}\\max(0,\\lambda_i)}.$$ For Euclidean distances all eigenvalues are non-negative, so GoF1 = GoF2. In R use cmdscale(delta, eig = TRUE) and read its GOF component. For the beer data both equal 0.8543, so the 2D picture is a fairly accurate representation.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 37, 38, 39, 40",
   "tags": [
    "ETX5500",
    "GoF",
    "eigenvalue",
    "evaluation"
   ],
   "related": [
    "etx5500-mds-non-euclidean",
    "etx5500-mds-classical-algorithm",
    "etx5500-mds-r-workflow"
   ]
  },
  {
   "id": "etx5500-mds-non-euclidean",
   "kind": "concept",
   "title": "非欧氏距离与负特征值",
   "titleEn": "Non-Euclidean distances and negative eigenvalues",
   "body": "非欧氏距离理论上可能产生负特征值。出现负特征值时：（1）经典 MDS 不再保证最小化 strain；（2）GoF1 与 GoF2 会不同。因此经典 MDS 仍可用于非欧氏距离，但要更小心，应检查特征值并同时看两个 GoF。反过来，若发现有明显的负特征值，就说明输入的距离不是欧氏的；只要两个 GoF 仍然较高，解依然可以是准确的表示。",
   "bodyEn": "Non-Euclidean distances can in theory lead to negative eigenvalues. When that happens (1) classical MDS may no longer minimise strain and (2) GoF1 and GoF2 will differ. Classical MDS can still be used with non-Euclidean distances, but with more care: inspect the eigenvalues and look at both GoF values. Conversely, clearly negative eigenvalues tell us the input distances are not Euclidean; if both GoF measures are still high, the solution can nevertheless be an accurate representation.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 41, 43",
   "tags": [
    "ETX5500",
    "non-Euclidean",
    "eigenvalue"
   ],
   "related": [
    "etx5500-mds-gof",
    "etx5500-mds-roads-case"
   ]
  },
  {
   "id": "etx5500-mds-roads-case",
   "kind": "case",
   "title": "澳大利亚城市道路距离",
   "titleEn": "Australian city road distances",
   "body": "用 8 个城市（Cairns、Brisbane、Sydney、Melbourne、Adelaide、Perth、Darwin、Alice Springs）之间的道路距离，仅凭这些距离重建 2 维地图。道路弯曲，所以距离是非欧氏的。cmdscale 结果的特征值前几个为正，末尾出现负值（如 \\(-1.08\\times10^{6}\\)、\\(-2.18\\times10^{6}\\)），GoF 为 0.8372 和 0.9231，两者不同。结论：经典 MDS 在此并不最小化 strain，但两个 GoF 都较高，所以解是准确的表示，旋转后与真实地图相近。",
   "bodyEn": "Using only the road distances between 8 cities (Cairns, Brisbane, Sydney, Melbourne, Adelaide, Perth, Darwin, Alice Springs), a 2D map is rebuilt. Roads are wiggly, so the distances are non-Euclidean. The cmdscale eigenvalues start large and positive but end with negative values (such as \\(-1.08\\times10^{6}\\) and \\(-2.18\\times10^{6}\\)), and the GoF values are 0.8372 and 0.9231, which differ. Conclusion: classical MDS does not minimise strain here, but both GoF values are high, so the solution is an accurate representation and, once rotated, resembles the real map.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 28, 29, 42, 43",
   "tags": [
    "ETX5500",
    "roads",
    "case",
    "non-Euclidean"
   ],
   "related": [
    "etx5500-mds-non-euclidean",
    "etx5500-mds-rotation"
   ]
  },
  {
   "id": "etx5500-mds-cheese-case",
   "kind": "case",
   "title": "奶酪感知研究：从分组数据构造距离",
   "titleEn": "Cheese study: building distances from sorting data",
   "body": "研究想了解顾客如何感知不同奶酪，但不能在街上问人“Brie 和 Camembert 的欧氏距离是多少”。可以让顾客按 1-10 打分表示相似程度，再对顾客取平均作为不相似度，但产品多时不可行：16 种奶酪有 120 对比较。因此改为让顾客把相似奶酪分组：两种奶酪被不同顾客放在不同组的比例即为不相似度。四位顾客的例子中，Brie 与 Camembert 在 A、D 同组，在 B、C 不同组，距离为 0.5；Roquefort 与 Blue Vein 仅在 C 中不同组，距离为 0.25。该研究使用的是 Kruskal 算法而非经典 MDS。",
   "bodyEn": "The study wanted to know how customers perceive different cheeses, but one cannot ask people in the street for the Euclidean distance between Brie and Camembert. Customers could rate dissimilarity from 1 to 10 and the scores be averaged, but this fails with many products: 16 cheeses give 120 pairwise comparisons. Instead customers sort similar cheeses into groups, and the proportion of customers who put two cheeses in different groups is their dissimilarity. In the four-customer example, Brie and Camembert are together for A and D but apart for B and C, giving a distance of 0.5; Roquefort and Blue Vein are apart only for C, giving 0.25. The study used Kruskal's algorithm rather than classical MDS.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 44, 45, 46, 47, 48, 49",
   "tags": [
    "ETX5500",
    "cheese",
    "survey",
    "dissimilarity"
   ],
   "related": [
    "etx5500-mds-kruskal-nonmetric",
    "etx5500-mds-goal"
   ]
  },
  {
   "id": "etx5500-mds-stress-sammon",
   "kind": "concept",
   "title": "Stress 与 Sammon 映射",
   "titleEn": "Stress and Sammon mapping",
   "body": "另一个目标函数是 stress：$$\\text{stress}=\\frac{1}{\\sum_{l<k}\\delta_{lk}}\\sum_{i=1}^{n-1}\\sum_{j>i}\\frac{(\\delta_{ij}-d_{ij})^2}{\\delta_{ij}}.$$ \\(\\delta_{ij}-d_{ij}\\) 相当于误差，分母中的 \\(\\delta_{ij}\\) 起权重作用，\\(1/\\sum\\delta_{lk}\\) 是归一化常数。原始距离大的点对误差更容易被容忍，距离小的点对则几乎不允许有误差，因此近处的点最准确，局部结构得以保留。这种 MDS 叫 Sammon 映射，用数值优化求解，不基于特征值分解、不基于旋转，是非线性映射，与经典解不同。",
   "bodyEn": "Another objective is stress: $$\\text{stress}=\\frac{1}{\\sum_{l<k}\\delta_{lk}}\\sum_{i=1}^{n-1}\\sum_{j>i}\\frac{(\\delta_{ij}-d_{ij})^2}{\\delta_{ij}}.$$ The difference \\(\\delta_{ij}-d_{ij}\\) acts as an error, \\(\\delta_{ij}\\) in the denominator acts as a weight, and \\(1/\\sum\\delta_{lk}\\) is a normalising constant. Pairs far apart in the original space can tolerate errors more easily, while pairs close together cannot, so nearby points are the most accurate and local structure is preserved. This is called the Sammon mapping. It is solved by numerical optimisation, is not based on an eigenvalue decomposition or rotation, and is a non-linear mapping that differs from the classical solution.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 51, 52, 53, 61",
   "tags": [
    "ETX5500",
    "stress",
    "Sammon",
    "non-linear"
   ],
   "related": [
    "etx5500-mds-strain",
    "etx5500-mds-kruskal-nonmetric"
   ]
  },
  {
   "id": "etx5500-mds-kruskal-nonmetric",
   "kind": "concept",
   "title": "Kruskal 算法与非度量 MDS",
   "titleEn": "Kruskal's algorithm and non-metric MDS",
   "body": "Kruskal 算法最小化另一种（也常称为 stress 的）准则：$$\\text{stress}=\\left[\\frac{1}{\\sum_{l<k}d_{lk}^2}\\sum_{i=1}^{n-1}\\sum_{j>i}\\left[f(\\delta_{ij})-d_{ij}\\right]^2\\right]^{1/2},$$ 其中 \\(f\\) 是单调函数；R 中用 MASS 包的 isoMDS。它对距离的单调变换不变，例如 exp 是单调的而 sin 不是；啤酒例中对距离取平方后得到基本相同的解（stress 略有不同、点略有旋转）。当只知道距离的顺序（如 \\(\\delta_{Bri,Cam}<\\delta_{Roq,Cam}<\\delta_{Roq,Bri}\\)）时，可在 \\(f\\) 的约束下最小化 stress，解只需要距离的秩。这在市场营销中很有用，因为受访者难以可靠地给产品差异赋予数值。",
   "bodyEn": "Kruskal's algorithm minimises a different criterion, still often called stress: $$\\text{stress}=\\left[\\frac{1}{\\sum_{l<k}d_{lk}^2}\\sum_{i=1}^{n-1}\\sum_{j>i}\\left[f(\\delta_{ij})-d_{ij}\\right]^2\\right]^{1/2},$$ where \\(f\\) is a monotone function; in R it is isoMDS in the MASS package. It is invariant to monotone transformations of the distances (exp is monotone, sin is not); in the beer example squaring the distances gave essentially the same solution (slightly different stress, points slightly rotated). When only the order of distances is known (e.g. \\(\\delta_{Bri,Cam}<\\delta_{Roq,Cam}<\\delta_{Roq,Bri}\\)), stress is minimised subject to constraints on \\(f\\), and the solution needs only the ranks of the distances. This is useful in marketing because survey participants cannot easily and reliably assign numbers to differences between products.",
   "category": "多维尺度分析 MDS · Multidimensional Scaling (MDS)",
   "source": "MDS.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 62, 63, 69, 70, 71, 72",
   "tags": [
    "ETX5500",
    "Kruskal",
    "isoMDS",
    "non-metric"
   ],
   "related": [
    "etx5500-mds-stress-sammon",
    "etx5500-mds-cheese-case",
    "etx5500-mds-strain"
   ]
  },
  {
   "id": "etx5500-pca-why-index",
   "kind": "concept",
   "title": "为什么用 PCA:把多变量压成指数",
   "titleEn": "Why PCA: collapsing many variables into an index",
   "body": "在市场调查、信用评估、经济发展度量中，我们常有几十个相关的变量，难以直接解读。常见做法是用变量的加权线性组合 (linear combination, LC) 构造单一指数，即 signal extraction，例如课程成绩 = \\(w_1\\)×作业分 + \\(w_2\\)×考试分。关键问题是权重怎么选。成绩的目的是区分学生好坏，如果所有人分数相近，方差很小就无法区分，所以好的指数应当方差大。方差最大的线性组合就是第一主成分 (first principal component)，它是一个新变量，尽可能多地解释原变量的方差。",
   "bodyEn": "In marketing, credit and economic-development settings we often face dozens of correlated variables that are hard to interpret. A common remedy is to combine them into one index with a weighted linear combination (LC), known as signal extraction; a unit grade is \\(w_1\\) times assignment marks plus \\(w_2\\) times exam mark. The question is how to choose the weights. Grading exists to separate strong from weak students, and if everyone scores alike the variance is tiny and nothing is distinguished. So a good index has large variance, and the LC with the highest variance is the first principal component: a new variable explaining as much variance of the original variables as possible.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 3, 6, 8",
   "tags": [
    "ETX5500",
    "PCA",
    "linear combination",
    "index"
   ],
   "related": [
    "etx5500-pca-first-pc",
    "etx5500-pca-variance-decomposition",
    "etx5500-intro-principal-components"
   ]
  },
  {
   "id": "etx5500-pca-first-pc",
   "kind": "concept",
   "title": "主成分的目标与用途",
   "titleEn": "Goals and uses of principal components",
   "body": "PCA 的核心问题是：如何把大数据集中的信息重新排列成能解释变异的若干成分。目标有三点：第一个成分解释最多的变异，最后一个成分解释最少，所有成分彼此不相关 (uncorrelated)。用途主要有两类：一是创建指数，即用变量组合概括线性关系；二是特征提取 (feature extraction)，即在低维空间里使用原数据的信息。PCA 还可用于可视化高维数据，并通过 biplot 同时观察变量与观测的关系。",
   "bodyEn": "The key question of PCA is how to rearrange the information in a large dataset into components that explain its variation. The goals are: the first component explains the most variation, the last explains the least, and all components are uncorrelated. Usage falls into two groups: building an index, which summarises linear associations by combining variables, and feature extraction, which uses the information in a lower dimension. PCA is also used to visualise high-dimensional data, and the biplot shows variables and observations together.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 11, 63",
   "tags": [
    "ETX5500",
    "PCA",
    "feature extraction"
   ],
   "related": [
    "etx5500-pca-second-pc",
    "etx5500-pca-why-index",
    "etx5500-factor-pca-vs-fa"
   ]
  },
  {
   "id": "etx5500-pca-second-pc",
   "kind": "concept",
   "title": "第二主成分",
   "titleEn": "The second principal component",
   "body": "有时单一指数会过度简化数据。第二主成分 (PC2) 是满足两个条件的线性组合：(1) 与 PC1 不相关；(2) 在所有满足条件 (1) 的线性组合中方差最大。因为 PC2 不需要再去解释 PC1 已经解释的方差，所以 PC1 与 PC2 不相关。这样就可以把前两个主成分画在散点图上。同理可以找第三个主成分：在与 PC1、PC2 都不相关的前提下方差最大，但三个以上的成分无法用 biplot 展示，需要其他可视化方式，如 grand tour。",
   "bodyEn": "A single index can oversimplify the data. The second principal component (PC2) is the LC that (1) is uncorrelated with PC1 and (2) has the highest variance among all LCs meeting condition 1. Because PC2 need not explain variance already captured by PC1, the two are uncorrelated, and the first two PCs can be drawn on a scatter plot. A third PC is found the same way, with maximal variance subject to being uncorrelated with PC1 and PC2. Three or more PCs cannot be shown on a biplot, so other displays such as the grand tour are used.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 17, 33, 59",
   "tags": [
    "ETX5500",
    "PCA",
    "uncorrelated"
   ],
   "related": [
    "etx5500-pca-first-pc",
    "etx5500-pca-number-of-pcs"
   ]
  },
  {
   "id": "etx5500-pca-loadings",
   "kind": "concept",
   "title": "权重 (loadings) 的解读",
   "titleEn": "Interpreting the weights (loadings)",
   "body": "每个主成分是原变量的线性组合，组合的权重称为 loadings。正权重表示该变量的高值会推高该主成分得分；负权重表示该变量的缺失（低值）对该成分有贡献。权重的相对绝对值越大，该变量的存在或缺失对这个主成分越重要。在 R 的 prcomp 对象中，主成分得分存放在 x，权重存放在 rotation。注意：对主成分的解释常常带有主观性，PCA 本身只是找到解释方差的不相关线性组合，因此解释时要谨慎。",
   "bodyEn": "Each principal component is a linear combination of the original variables, and its coefficients are the weights or loadings. A positive weight means the variable contributes to the component; a negative weight means the variable's absence contributes to it. The larger a weight's relative magnitude, the more important the variable's presence or absence is for that component. In R's prcomp object the PC scores are stored in x and the weights in rotation. Interpretations of PCs can be subjective, since PCA only finds uncorrelated LCs that explain variance, so be cautious.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 20, 51, 58",
   "tags": [
    "ETX5500",
    "loadings",
    "interpretation",
    "prcomp"
   ],
   "related": [
    "etx5500-pca-states-case",
    "etx5500-pca-first-pc"
   ]
  },
  {
   "id": "etx5500-pca-variance-decomposition",
   "kind": "concept",
   "title": "总方差分解与方差解释比例",
   "titleEn": "Total variance preserved and proportion explained",
   "body": "一个数据集有 p 个变量就有 p 个主成分，所有主成分合起来解释全部变异：各主成分方差之和等于各原变量方差之和，即 $$\\sum_{i=1}^{p}\\mathrm{var}(C_i)=\\sum_{j=1}^{p}\\mathrm{var}(Y_j).$$ 但通常少数几个主成分就能解释大部分方差。课件例子：在 5 个变量的 states 数据中，2 个 PC 解释了总变异的 84%；而在 109 个宏观经济变量的 Stock and Watson 数据中，3 个 PC 只解释 35%。因此降维效果取决于变量间的相关程度。",
   "bodyEn": "A dataset with p variables has p principal components, and together they explain all the variation: the sum of the component variances equals the sum of the original variable variances, $$\\sum_{i=1}^{p}\\mathrm{var}(C_i)=\\sum_{j=1}^{p}\\mathrm{var}(Y_j).$$ Yet a small number of PCs can often explain a large share of the variance. In the slides, 2 PCs explain 84% of the total variation of the 5 states variables, while 3 PCs explain only 35% of the 109 Stock and Watson macroeconomic variables. How much dimension reduction is possible depends on how correlated the variables are.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 34, 37, 38",
   "tags": [
    "ETX5500",
    "variance",
    "proportion explained"
   ],
   "related": [
    "etx5500-pca-number-of-pcs",
    "etx5500-pca-covariance-eigen"
   ]
  },
  {
   "id": "etx5500-pca-optimisation",
   "kind": "concept",
   "title": "PC 的构造:带约束的方差最大化",
   "titleEn": "Constructing PCs: constrained variance maximisation",
   "body": "构造 PC 的机制是选择权重 w。若只有一个变量，\\(\\mathrm{var}(wY)=w^2\\mathrm{var}(Y)\\)，最优的 w 会趋于无穷，方差爆炸，不现实。所以要加约束 \\(\\sum_j w_j^2=1\\)。一般情形下，第一主成分是优化问题 $$\\hat{w}=\\arg\\max_{w}\\ \\mathrm{var}(w^\\top y),\\quad \\sum_{j=1}^{p}w_j^2=1.$$ 后续成分用同样方法求得，但要附加与前面成分不相关的限制。",
   "bodyEn": "PCs are built by choosing the weight vector w. With a single variable, \\(\\mathrm{var}(wY)=w^2\\mathrm{var}(Y)\\), so the optimum would be w going to infinity and the variance would explode, which is unrealistic. Hence the weights are constrained to satisfy \\(\\sum_j w_j^2=1\\). In general the first PC solves $$\\hat{w}=\\arg\\max_{w}\\ \\mathrm{var}(w^\\top y),\\quad \\sum_{j=1}^{p}w_j^2=1.$$ Later components are found the same way, with the extra restriction that they be uncorrelated with earlier ones.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 39, 40",
   "tags": [
    "ETX5500",
    "optimisation",
    "constraint"
   ],
   "related": [
    "etx5500-pca-covariance-eigen",
    "etx5500-pca-second-pc",
    "etx5500-matrix-regression-matrix-case"
   ]
  },
  {
   "id": "etx5500-pca-covariance-eigen",
   "kind": "concept",
   "title": "协方差矩阵与特征分解",
   "titleEn": "Covariance matrix and eigen-decomposition",
   "body": "PCA 与样本协方差矩阵 S 直接相关。S 是 p×p 矩阵，对角线是各变量的样本方差，非对角线是变量之间的协方差。p 个成分的 PCA 把 S 重构为 $$S=W\\Lambda W^\\top,$$ 其中 \\(\\Lambda\\) 是对角矩阵，对角元素是各主成分的方差，也就是 S 的特征值 (eigenvalues)；W 是 p×p 的权重矩阵，它的每一列是 S 的特征向量 (eigenvectors)。更技术性的推导在第 9 周讲。",
   "bodyEn": "PCA is directly tied to the sample covariance matrix S, a p by p matrix whose diagonal holds each variable's sample variance and whose off-diagonal entries are covariances. A p-component PCA reconstructs S as $$S=W\\Lambda W^\\top,$$ where \\(\\Lambda\\) is diagonal and holds the variances of the p principal components, i.e. the eigenvalues of S, and W is the p by p matrix of weights whose columns are the eigenvectors of S. The technical derivation comes in week 9.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 41, 42",
   "tags": [
    "ETX5500",
    "covariance",
    "eigenvalue",
    "eigenvector"
   ],
   "related": [
    "etx5500-pca-optimisation",
    "etx5500-pca-variance-decomposition",
    "etx5500-pca-pca-mds",
    "etx5500-matrix-covariance-matrix",
    "etx5500-matrix-eigen-definition"
   ]
  },
  {
   "id": "etx5500-pca-standardisation",
   "kind": "concept",
   "title": "是否标准化数据",
   "titleEn": "Whether to standardise",
   "body": "PCA 的权重受数据尺度影响。例如收入约 3000 到 6500 美元，预期寿命约 67 到 74 年，收入方差更大；若收入改用千美元、寿命改用天数，寿命的方差反而更大。课件中 states 数据的 PC1 权重：标准化后收入 0.3473；不标准化时收入权重为 1.0000，几乎全部权重落在收入上；换单位后寿命权重 0.9999。规则：变量单位相同则不必标准化；单位不同则标准化；拿不准就标准化。标准化用 z-score：\\(y_j^*=(y_j-\\bar y_j)/s_j\\)。R 中可用 scale 函数或 prcomp(scale. = TRUE)。",
   "bodyEn": "PCA weights depend on the scale of the data. Income runs from about 3000 to 6500 dollars while life expectancy runs from 67 to 74 years, so income has the larger variance; measure income in thousands and life expectancy in days and life expectancy dominates instead. In the slides' PC1 weights for the states data, the standardised income weight is 0.3473, the unstandardised income weight is 1.0000 (income takes essentially all the weight), and with changed units life expectancy gets 0.9999. Rule: same units, no need to standardise; different units, standardise; if in doubt, standardise. Use z-scores \\(y_j^*=(y_j-\\bar y_j)/s_j\\), via scale() or prcomp(scale. = TRUE) in R.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 43, 44, 45, 46, 48",
   "tags": [
    "ETX5500",
    "standardisation",
    "scale",
    "z-score"
   ],
   "related": [
    "etx5500-pca-states-case",
    "etx5500-pca-covariance-eigen",
    "etx5500-distance-standardising"
   ]
  },
  {
   "id": "etx5500-pca-biplots",
   "kind": "concept",
   "title": "Biplot:距离型与相关型",
   "titleEn": "Biplots: distance vs correlation",
   "body": "Biplot 把观测点（主成分得分）和变量的权重向量画在同一张图上：下轴 PC1、左轴 PC2、上轴与右轴是在 PC1、PC2 上的权重。它可以看观测之间、变量之间、观测与变量之间的关系。距离型 biplot：点之间的距离表示观测的相似度；数据中心化或标准化后，降维 PC 空间的欧氏距离近似原空间距离，保留全部 PC 时则完全相等。相关型 biplot：变量箭头夹角近似反映相关性，接近 0 度是高度正相关，接近 90 度近似不相关，接近 180 度是高度负相关；此时用马氏距离 (Mahalanobis) 近似原空间距离。比较观测与变量时，把变量看作坐标轴，从点向轴作垂线，垂足位置近似该观测的变量取值。R 中 biplot(pca) 默认是相关型，biplot(pca, scale = 0) 是距离型。",
   "bodyEn": "A biplot draws the observations (PC scores) and the variables' weight vectors on one plot: PC1 on the bottom axis, PC2 on the left, and the weights on PC1 and PC2 on the top and right axes. It shows how observations relate to each other, how variables relate to each other, and how observations relate to variables. In the distance biplot, distance between points indicates similarity; for centred or standardised data, Euclidean distance in the reduced PC space approximates that in the original space, and equals it exactly if all PCs are kept. In the correlation biplot the angle between variable arrows approximates correlation: near 0 degrees is strongly positive, near 90 is roughly uncorrelated, near 180 is strongly negative; here Mahalanobis distance plays the approximating role. To compare a point with a variable, treat the variable as an axis and drop a perpendicular from the point; its position along the axis approximates the value. In R, biplot(pca) gives the correlation biplot by default and biplot(pca, scale = 0) the distance biplot.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 22, 23, 24, 26, 27, 30, 31, 32, 52",
   "tags": [
    "ETX5500",
    "biplot",
    "distance",
    "correlation"
   ],
   "related": [
    "etx5500-pca-loadings",
    "etx5500-pca-states-case",
    "etx5500-distance-cosine-pearson"
   ]
  },
  {
   "id": "etx5500-pca-number-of-pcs",
   "kind": "concept",
   "title": "选择主成分个数:碎石图与 Kaiser 规则",
   "titleEn": "Choosing the number of PCs: scree plot and Kaiser's rule",
   "body": "碎石图 (scree plot) 横轴是主成分序号，纵轴是各 PC 对应的方差，显示每个 PC 解释总方差的多少；在 R 中用 screeplot(pca, type = \"lines\")。选 PC 数时找图开始变平的地方，即肘部 (elbow)。另一准则是 Kaiser 规则（用于标准化数据）：选方差大于 1 的所有 PC。具体选几个取决于分析目的；若要做 biplot 必须取 2 个 PC，此时应检查这两个 PC 解释的方差比例，比例越高，biplot 越准确。调查数据中，碎石图和 Kaiser 规则也可用来确定潜在因子 (factor) 的个数。",
   "bodyEn": "The scree plot has the PC number on the horizontal axis and each PC's variance on the vertical axis, showing how much of the total variance each explains; in R use screeplot(pca, type = \"lines\"). To choose the number of PCs, look for where the plot flattens out, the elbow. For standardised data a second criterion is Kaiser's rule: keep all PCs with variance greater than 1. The choice depends on the purpose; a biplot needs exactly two PCs, so check the proportion of variance those two explain, since the higher it is, the more accurate the biplot. For survey data, scree plots and Kaiser's rule can also suggest the number of underlying factors.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 53, 55, 56, 65",
   "tags": [
    "ETX5500",
    "scree plot",
    "Kaiser",
    "dimension"
   ],
   "related": [
    "etx5500-pca-variance-decomposition"
   ]
  },
  {
   "id": "etx5500-pca-pca-mds",
   "kind": "concept",
   "title": "PCA 与 MDS、grand tour、通向因子分析",
   "titleEn": "PCA, MDS, the grand tour and factor analysis",
   "body": "当输入 MDS 的距离是欧氏距离时，MDS 与 PCA 等价，只是 MDS 解可能需要旋转后才与 PCA 完全相同；但反过来对一般的 PCA 并不适用，因为第一主成分的定义是最大化方差。对高维数据的可视化，还可用 grand tour：把 k 维数据投影到 2 维，随机取许多投影并做成动画，可以对 PC 空间做这种动画。在调查数据中，多道题目可能度量同一个潜在因子（如教学质量、教材质量），这引出下一个主题 factor analysis。",
   "bodyEn": "When the input distances to MDS are Euclidean, MDS and PCA are equivalent, though they may be exactly identical only after rotating the MDS solution. The same does not hold for PCA in general, because the first PC is defined to maximise variance. For visualising high-dimensional data the grand tour projects k-dimensional data onto 2-D, cycling through many random projections as an animation; it can be applied to the PC space too. In survey data several questions may measure the same underlying factor (such as teaching quality or material quality), which leads towards factor analysis.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 57, 59, 64, 65",
   "tags": [
    "ETX5500",
    "MDS",
    "grand tour",
    "factor analysis"
   ],
   "related": [
    "etx5500-pca-covariance-eigen",
    "etx5500-pca-number-of-pcs",
    "etx5500-mds-goal"
   ]
  },
  {
   "id": "etx5500-pca-states-case",
   "kind": "case",
   "title": "案例:美国各州人类发展数据",
   "titleEn": "Case: US states human development data",
   "body": "数据包含 5 个变量：Income、Illiteracy、LifeExp、Murder、HSGrad。用 prcomp(scale. = TRUE) 对数值变量做标准化后的 PCA。PC1 权重为 Income 0.347、Illiteracy -0.480、LifeExp 0.469、Murder -0.459、HSGrad 0.467：收入、寿命、毕业率为正，文盲率与谋杀率为负，所以 PC1 可看作综合的发展水平指数，得分越高越发达（例如 Colorado 1.73 高，Alabama -3.47 低）。PC2 中 Income 0.732 最突出。summary 显示 PC1 到 PC5 的标准差为 1.7892、0.9686、0.6317、0.55561、0.3909，累计方差比例 0.6403、0.8279、0.9077、0.96943、1，所以前两个 PC 解释约 83% (幻灯片文字称 84%)。相关矩阵里 Income 与 HSGrad 相关 0.620，Murder 与 LifeExp 为 -0.781，这与 biplot 上箭头的夹角一致。",
   "bodyEn": "The data have 5 variables: Income, Illiteracy, LifeExp, Murder and HSGrad, analysed with prcomp(scale. = TRUE). PC1 weights are Income 0.347, Illiteracy -0.480, LifeExp 0.469, Murder -0.459, HSGrad 0.467. Income, life expectancy and graduation are positive while illiteracy and murder are negative, so PC1 acts as an overall development index; higher scores mean more developed (Colorado 1.73 is high, Alabama -3.47 low). In PC2, Income at 0.732 stands out. summary() gives standard deviations 1.7892, 0.9686, 0.6317, 0.55561 and 0.3909 and cumulative proportions 0.6403, 0.8279, 0.9077, 0.96943 and 1, so the first two PCs explain about 83% (the slide text quotes 84%). In the correlation matrix Income and HSGrad correlate at 0.620 and Murder and LifeExp at -0.781, matching the arrow angles on the biplot.",
   "category": "主成分分析 PCA · Principal Component Analysis",
   "source": "PCA.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 13, 15, 20, 29, 50",
   "tags": [
    "ETX5500",
    "states",
    "human development",
    "PC1"
   ],
   "related": [
    "etx5500-pca-loadings",
    "etx5500-pca-biplots",
    "etx5500-pca-standardisation"
   ]
  },
  {
   "id": "etx5500-factor-pca-vs-fa",
   "kind": "concept",
   "title": "为什么需要因子模型：PCA 与 FA 的区别",
   "titleEn": "Why a factor model: PCA versus FA",
   "body": "在 Boston housing 数据上，前 2 个主成分解释了将近 60% 的方差，但这些 PC 很难解释，因为 PCA 只是寻找使方差最大的线性组合，并没有设定模型。要得到有解释意义的因子，需要使用因子模型（factor model）。PCA 没有模型结构，主成分之间不相关但不一定可解释，最多只能当作 FA 的粗略起点。FA 建立在统计模型之上：每个变量的方差分为由潜在因子解释的共同方差（common variance）和变量特有的方差（unique variance，包含变量特有变化与测量误差）。FA 通常假设因子不相关，但这个假设可以放宽。FA 更关注因子的解释，会尽量给出清晰的变量分组。",
   "bodyEn": "On the Boston housing data, two principal components explain nearly 60% of the variation, but they are hard to interpret because PCA simply finds linear combinations that maximise variance and has no underlying model. To get interpretable factors we need a factor model. PCA has no structure; its components are uncorrelated but not necessarily interpretable, and at most it is a crude starting point for FA. FA is built on a statistical model: each variable's variance splits into common variance, explained by latent factors, and unique variance, which covers variable-specific variation and measurement error. Uncorrelated factors are usually assumed, but this can be relaxed. FA cares much more about interpreting the factors and tries to give a clear grouping of the variables.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 12",
   "tags": [
    "ETX5500",
    "PCA",
    "FA"
   ],
   "related": [
    "etx5500-factor-model-form",
    "etx5500-factor-covariance-structure",
    "etx5500-factor-rotations",
    "etx5500-intro-cluster-factor-intro",
    "etx5500-pca-first-pc"
   ]
  },
  {
   "id": "etx5500-factor-model-form",
   "kind": "concept",
   "title": "因子模型的基本形式",
   "titleEn": "The factor model equation",
   "body": "因子模型假设存在不可观测的因子驱动数据中的共同变化：\\(y_{ij}=\\mu_j+\\lambda_{j1}f_{i1}+\\dots+\\lambda_{jr}f_{ir}+\\xi_{ij}\\)。其中 \\(\\mu_j\\) 是变量 j 的均值，\\(f_{ir}\\) 是作用于观测 i 的第 r 个因子，\\(\\lambda_{jr}\\) 是因子载荷（factor loading），\\(\\xi_{ij}\\) 是不能被共同因子解释的部分。写成向量形式：$$\\mathbf{y}_i=\\boldsymbol\\mu+\\Lambda\\mathbf{f}_i+\\boldsymbol\\xi_i,$$ 其中 \\(\\mathbf{y}_i\\)、\\(\\boldsymbol\\mu\\)、\\(\\boldsymbol\\xi_i\\) 为 \\(p\\times1\\)，\\(\\mathbf{f}_i\\) 为 \\(r\\times1\\)，\\(\\Lambda\\) 为 \\(p\\times r\\) 载荷矩阵，通常 \\(r\\ll p\\)。数据中心化后 \\(\\mu=0\\)；量纲不同时通常还要标准化。与回归相比：回归的解释变量是观测到的、响应通常是单个变量；因子模型中“解释变量” \\(f_i\\) 不可观测，\\(y_i\\) 是向量，目标是找出少数潜在因子来解释变量间的共同变化。",
   "bodyEn": "The model says unobserved factors drive the common variation in the data: \\(y_{ij}=\\mu_j+\\lambda_{j1}f_{i1}+\\dots+\\lambda_{jr}f_{ir}+\\xi_{ij}\\). Here \\(\\mu_j\\) is the mean of variable j, \\(f_{ir}\\) is the r-th factor for observation i, \\(\\lambda_{jr}\\) is the factor loading, and \\(\\xi_{ij}\\) is the part of variable j not explained by the common factors. In vector form $$\\mathbf{y}_i=\\boldsymbol\\mu+\\Lambda\\mathbf{f}_i+\\boldsymbol\\xi_i,$$ where \\(\\mathbf{y}_i\\), \\(\\boldsymbol\\mu\\), \\(\\boldsymbol\\xi_i\\) are \\(p\\times1\\), \\(\\mathbf{f}_i\\) is \\(r\\times1\\), and \\(\\Lambda\\) is the \\(p\\times r\\) loading matrix, usually with \\(r\\ll p\\). If the data are centred then \\(\\mu=0\\); variables measured on different scales are often standardised too. Compared with regression, where the predictors are observed and the response is usually a single variable, here the 'predictors' \\(f_i\\) are unobserved and \\(y_i\\) is a vector; the goal is to find a few latent factors explaining the common variation among the variables.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 13, 14, 17",
   "tags": [
    "ETX5500",
    "model",
    "loadings"
   ],
   "related": [
    "etx5500-factor-assumptions",
    "etx5500-factor-covariance-structure",
    "etx5500-factor-pca-vs-fa"
   ]
  },
  {
   "id": "etx5500-factor-assumptions",
   "kind": "concept",
   "title": "模型假设与因子方差为 1 的原因",
   "titleEn": "Model assumptions and why factor variance is one",
   "body": "特有误差 \\(\\xi_i\\)：均值为 0，\\(\\mathrm{var}(\\xi_{ij})=\\psi_j\\)，不同变量的误差互不相关，所以 \\(\\mathrm{cov}(\\xi_i)=\\Psi\\) 是对角矩阵，变量之间的任何协方差都必须通过共同因子来解释。因子 \\(f_i\\)：均值为 0，且与误差不相关。正交因子模型（orthogonal factor model）还要求 \\(\\mathrm{cov}(f_i)=I_r\\)，即方差为 1 且互不相关；斜交（oblique）情形下 \\(\\mathrm{cov}(f_i)=\\Phi\\)，因子可以相关。为什么令方差为 1？因子不可观测，其尺度未知。在单因子模型中，把因子乘以常数 c、同时把载荷除以 c，\\(\\lambda_j f_i=(\\lambda_j/c)(cf_i)\\) 不变，两种表示无法区分；假设方差为 1 就消除了这种不确定性。",
   "bodyEn": "Idiosyncratic errors \\(\\xi_i\\) have mean zero, \\(\\mathrm{var}(\\xi_{ij})=\\psi_j\\), and are uncorrelated across variables, so \\(\\mathrm{cov}(\\xi_i)=\\Psi\\) is diagonal: any covariance between different observed variables must be explained through the common factors. The factors \\(f_i\\) have mean zero and are uncorrelated with the errors. In an orthogonal factor model, \\(\\mathrm{cov}(f_i)=I_r\\), i.e. unit variance and mutually uncorrelated; with an oblique rotation \\(\\mathrm{cov}(f_i)=\\Phi\\) and factors may be correlated. Why variance one? A factor is unobserved, so its scale is unknown. In a one-factor model, multiplying the factor by a constant c and dividing the loading by c leaves \\(\\lambda_j f_i=(\\lambda_j/c)(cf_i)\\) unchanged, so we cannot tell which representation is correct. Assuming variance one removes this ambiguity.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 18, 19, 20, 21, 22",
   "tags": [
    "ETX5500",
    "assumptions",
    "identifiability"
   ],
   "related": [
    "etx5500-factor-model-form",
    "etx5500-factor-covariance-structure",
    "etx5500-factor-oblique"
   ]
  },
  {
   "id": "etx5500-factor-covariance-structure",
   "kind": "concept",
   "title": "模型隐含的协方差结构：共同度与特有度",
   "titleEn": "Implied covariance: communality and uniqueness",
   "body": "在正交因子模型下，$$\\mathrm{cov}(\\mathbf{y})=\\Sigma=\\Lambda\\Lambda^\\top+\\Psi.$$ \\(\\Lambda\\Lambda^\\top\\) 是由共同因子解释的变化，称为共同度（communality）或共同方差；\\(\\Psi\\) 是变量特有、不能被共同因子解释的变化，称为特有度（uniqueness）或特有方差。对单个变量 j：$$\\mathrm{var}(y_{ij})=\\sum_{k=1}^r\\lambda_{jk}^2+\\psi_j,$$ 即载荷平方和（communality）加上 uniqueness \\(\\psi_j\\)。直观上，uniqueness 越大，说明该变量越不能由共同因子解释。",
   "bodyEn": "Under the orthogonal factor model, $$\\mathrm{cov}(\\mathbf{y})=\\Sigma=\\Lambda\\Lambda^\\top+\\Psi.$$ The term \\(\\Lambda\\Lambda^\\top\\) is the variation explained by the common factors, called the communality or common variance; \\(\\Psi\\) is the variable-specific variation not explained by the common factors, called the uniqueness or unique variance. For one variable j, $$\\mathrm{var}(y_{ij})=\\sum_{k=1}^r\\lambda_{jk}^2+\\psi_j,$$ the sum of squared loadings (communality) plus the uniqueness \\(\\psi_j\\). A larger uniqueness means the variable is less well explained by the common factors.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 23, 24",
   "tags": [
    "ETX5500",
    "communality",
    "uniqueness"
   ],
   "related": [
    "etx5500-factor-assumptions",
    "etx5500-factor-mle"
   ]
  },
  {
   "id": "etx5500-factor-mle",
   "kind": "concept",
   "title": "用最大似然估计因子模型",
   "titleEn": "Estimating the model by maximum likelihood",
   "body": "总体协方差 \\(\\Sigma\\) 可用样本协方差 S 估计，然后选取 \\(\\hat\\Lambda\\) 和 \\(\\hat\\Psi\\) 使 \\(\\hat\\Lambda\\hat\\Lambda^\\top+\\hat\\Psi\\) 接近 S，方法有多种，最大似然估计（MLE）是最流行的之一。MLE 需要分布假设，最常见的是多元正态：\\(y_i\\sim N(0,\\Sigma)\\)，\\(\\Sigma=\\Lambda\\Lambda^\\top+\\Psi\\)。观测独立时联合密度为各 \\(f(y_i\\mid\\Lambda,\\Psi)\\) 的乘积；数据观测后把参数当作未知量，同一表达式就叫似然函数 \\(L(\\Lambda,\\Psi\\mid y_1,\\dots,y_n)\\)。化简后似然只依赖数据的 S：\\(L=(2\\pi)^{-np/2}\\det(\\Sigma)^{-n/2}\\exp[-\\tfrac n2\\mathrm{tr}(\\Sigma^{-1}S)]\\)。MLE 对 L 求最大值，通常没有闭式解，需要数值求解。若正态假设被轻微违反，MLE 仍可能表现不错，但严重偏离会影响估计与推断。",
   "bodyEn": "The covariance \\(\\Sigma\\) is estimated by its sample counterpart S, and we choose \\(\\hat\\Lambda\\) and \\(\\hat\\Psi\\) so that \\(\\hat\\Lambda\\hat\\Lambda^\\top+\\hat\\Psi\\) is close to S. There are several ways to do this; maximum likelihood estimation (MLE) is one of the most popular. MLE needs a distributional assumption, most commonly multivariate normal: \\(y_i\\sim N(0,\\Sigma)\\) with \\(\\Sigma=\\Lambda\\Lambda^\\top+\\Psi\\). For independent observations the joint density is the product of the \\(f(y_i\\mid\\Lambda,\\Psi)\\); once the data are observed and the parameters are treated as unknown, the same expression is the likelihood \\(L(\\Lambda,\\Psi\\mid y_1,\\dots,y_n)\\). It simplifies to depend on the data only through S: \\(L=(2\\pi)^{-np/2}\\det(\\Sigma)^{-n/2}\\exp[-\\tfrac n2\\mathrm{tr}(\\Sigma^{-1}S)]\\). MLE maximises L, usually numerically because there is generally no closed-form solution. If normality is moderately violated MLE can still perform reasonably well, but substantial departures can affect estimates and inference.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 26, 27, 29, 30, 31",
   "tags": [
    "ETX5500",
    "MLE",
    "likelihood"
   ],
   "related": [
    "etx5500-factor-covariance-structure",
    "etx5500-factor-choose-r"
   ]
  },
  {
   "id": "etx5500-factor-choose-r",
   "kind": "concept",
   "title": "因子个数的选择与 Heywood case",
   "titleEn": "Choosing r and Heywood cases",
   "body": "因子个数 r 必须在估计之前选定，没有唯一最佳方法。常见做法：碎石图（scree plot）找特征值曲线的“拐点”；Kaiser 规则，保留特征值大于 1 的因子；假设检验，检验是否需要更多因子。实际中应结合多种方法以及因子的可解释性。Heywood case 指估计出的某个（或多个）变量的特有方差为 0 或负：\\(\\hat\\psi_j\\le0\\)，这是不允许的，因为方差必须满足 \\(\\psi_j>0\\)。可能原因包括因子过多、样本量太小、变量之间相关性很高。",
   "bodyEn": "The number of factors r must be chosen before estimating the model, and no single method is universally best. Common approaches: a scree plot, looking for an elbow in the eigenvalues; the Kaiser rule, retaining factors with eigenvalues greater than 1; and hypothesis tests of whether more factors are needed. In practice combine several methods and consider interpretability. A Heywood case occurs when the estimated unique variance of one or more variables is zero or negative, \\(\\hat\\psi_j\\le0\\). This is inadmissible because a variance must satisfy \\(\\psi_j>0\\). Possible causes are too many factors, a small sample size, and very high correlations among variables.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 32, 33",
   "tags": [
    "ETX5500",
    "number-of-factors",
    "Heywood"
   ],
   "related": [
    "etx5500-factor-mle",
    "etx5500-factor-rotations",
    "etx5500-factor-boston-two-factor"
   ]
  },
  {
   "id": "etx5500-factor-rotations",
   "kind": "concept",
   "title": "因子旋转与正交旋转（varimax）",
   "titleEn": "Rotation and orthogonal rotation (varimax)",
   "body": "模型的解不唯一。取 \\(r\\times r\\) 正交矩阵 R（\\(R^\\top R=RR^\\top=I\\)），则 $$\\mathbf{y}_i=(\\Lambda R^\\top)(R\\mathbf{f}_i)+\\boldsymbol\\xi_i,$$ 得到新载荷 \\(\\tilde\\Lambda=\\Lambda R^\\top\\) 和新因子 \\(\\tilde{\\mathbf f}_i=R\\mathbf{f}_i\\)。所有旋转后的版本对数据的拟合同样好，并满足模型的全部假设。因此可以挑选更容易解释的版本：若有许多接近 0 的载荷，因子就容易解释。Varimax 算法就是寻找使尽可能多载荷接近 0 的旋转，在 factanal 中用 rotation = 'varimax'。正交旋转保持因子不相关。注意：varimax 不一定奏效，例如在 Boston 数据上结果仍然难以解释。",
   "bodyEn": "The solution is not unique. Take an \\(r\\times r\\) orthogonal matrix R (\\(R^\\top R=RR^\\top=I\\)); then $$\\mathbf{y}_i=(\\Lambda R^\\top)(R\\mathbf{f}_i)+\\boldsymbol\\xi_i,$$ giving new loadings \\(\\tilde\\Lambda=\\Lambda R^\\top\\) and new factors \\(\\tilde{\\mathbf f}_i=R\\mathbf{f}_i\\). All rotated versions explain the data equally well and satisfy all the model assumptions, so we can choose the one that is easiest to interpret: factors are easy to interpret when there are many zero loadings. The varimax algorithm looks for a rotation with as many loadings close to zero as possible (rotation = 'varimax' in factanal). Orthogonal rotations keep the factors uncorrelated. Varimax does not always work: on the Boston data the interpretation remained unclear.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 42, 43, 44, 47",
   "tags": [
    "ETX5500",
    "rotation",
    "varimax"
   ],
   "related": [
    "etx5500-factor-oblique",
    "etx5500-factor-boston-two-factor",
    "etx5500-matrix-rotation-matrix"
   ]
  },
  {
   "id": "etx5500-factor-oblique",
   "kind": "concept",
   "title": "斜交旋转（promax）与正交/斜交对比",
   "titleEn": "Oblique rotation (promax) versus orthogonal",
   "body": "当正交旋转效果不好时，改用满足 \\(GG^{-1}=I\\) 的一般可逆矩阵 G：$$\\mathbf{y}_i=\\Lambda GG^{-1}\\mathbf{f}_i+\\boldsymbol\\xi_i,$$ 新载荷 \\(\\tilde\\Lambda=\\Lambda G\\)，新因子 \\(\\tilde{\\mathbf f}_i=G^{-1}\\mathbf{f}_i\\)。在 factanal 中设置 rotation = 'promax' 即可做斜交“旋转”。正交旋转保持因子不相关，斜交旋转则会使因子相关。正交旋转包括 Varimax、Quartimax、Equimax；斜交旋转包括 Promax、Oblimin、Quartimin、Simplimax，更多选项可见 GPArotation 包。课件还留了练习：用矩阵代数验证正交旋转保持因子不相关、斜交旋转使因子相关（提示：比较 \\(\\mathrm{cov}(R\\mathbf f)\\) 与 \\(\\mathrm{cov}(G^{-1}\\mathbf f)\\)，在 \\(\\mathrm{cov}(\\mathbf f)=I\\) 下）。",
   "bodyEn": "When an orthogonal rotation does not help, use a general invertible matrix G with \\(GG^{-1}=I\\): $$\\mathbf{y}_i=\\Lambda GG^{-1}\\mathbf{f}_i+\\boldsymbol\\xi_i,$$ with new loadings \\(\\tilde\\Lambda=\\Lambda G\\) and new factors \\(\\tilde{\\mathbf f}_i=G^{-1}\\mathbf{f}_i\\). Setting rotation = 'promax' in factanal gives an oblique 'rotation'. Orthogonal rotations keep factors uncorrelated, while oblique rotations lead to correlated factors. Orthogonal methods include Varimax, Quartimax and Equimax; oblique methods include Promax, Oblimin, Quartimin and Simplimax, and more options are in the GPArotation package. The slides pose an exercise: verify with matrix algebra that orthogonal rotation keeps factors uncorrelated and oblique rotation makes them correlated (hint: compare \\(\\mathrm{cov}(R\\mathbf f)\\) with \\(\\mathrm{cov}(G^{-1}\\mathbf f)\\) when \\(\\mathrm{cov}(\\mathbf f)=I\\)).",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 48, 54, 55",
   "tags": [
    "ETX5500",
    "oblique",
    "promax"
   ],
   "related": [
    "etx5500-factor-rotations",
    "etx5500-factor-assumptions"
   ]
  },
  {
   "id": "etx5500-factor-factor-scores",
   "kind": "concept",
   "title": "因子得分：回归法与 Bartlett 法",
   "titleEn": "Factor scores: regression and Bartlett methods",
   "body": "因子 \\(f_i\\) 不可观测，因此需要估计因子得分 \\(\\hat f_i\\)，它表示每个观测在潜在因子上的相对位置；若因子有解释意义（尤其是排序意义），分析得分会很有用。factanal 提供两种方法：scores = 'regression' 与 scores = 'Bartlett'（无偏估计）。设 \\(z_i=\\Lambda f_i+\\xi_i\\) 为标准化变量。回归法：\\(\\hat f_i=B^\\top z_i\\)，\\(B=\\mathrm{cov}(z_i)^{-1}\\mathrm{cov}(z_i,f_i)=\\mathrm{cor}(z_i)^{-1}\\Lambda\\)。Bartlett 法：最小化加权残差 \\((z_i-\\Lambda f_i)^\\top\\Psi^{-1}(z_i-\\Lambda f_i)\\)，得 $$\\hat f_i=(\\Lambda^\\top\\Psi^{-1}\\Lambda)^{-1}\\Lambda^\\top\\Psi^{-1}z_i.$$ 此外还有其他估计方法，如 psych 包中的 Principal Axis Factoring，它不要求正态假设。",
   "bodyEn": "The factors \\(f_i\\) are not observed, so factor scores \\(\\hat f_i\\) must be estimated; they show each observation's relative position on the latent factors, and are useful when the factors have an interpretation, e.g. as rankings. factanal offers two methods: scores = 'regression' and scores = 'Bartlett' (unbiased estimates). Let \\(z_i=\\Lambda f_i+\\xi_i\\) be the standardised variables. Regression method: \\(\\hat f_i=B^\\top z_i\\) with \\(B=\\mathrm{cov}(z_i)^{-1}\\mathrm{cov}(z_i,f_i)=\\mathrm{cor}(z_i)^{-1}\\Lambda\\). Bartlett's method minimises the weighted residuals \\((z_i-\\Lambda f_i)^\\top\\Psi^{-1}(z_i-\\Lambda f_i)\\), giving $$\\hat f_i=(\\Lambda^\\top\\Psi^{-1}\\Lambda)^{-1}\\Lambda^\\top\\Psi^{-1}z_i.$$ Other estimation methods exist, such as Principal Axis Factoring in the psych package, which does not require normality.",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 56, 57, 60, 61, 62",
   "tags": [
    "ETX5500",
    "factor-scores",
    "Bartlett"
   ],
   "related": [
    "etx5500-factor-rotations",
    "etx5500-factor-boston-two-factor"
   ]
  },
  {
   "id": "etx5500-factor-boston-two-factor",
   "kind": "case",
   "title": "Boston housing 的两因子分析",
   "titleEn": "Two-factor analysis of the Boston housing data",
   "body": "数据是 Boston 大都会区各 town 的 13 个变量（去掉 CHAS）。用 factanal(factors = 2) 且不旋转时，Factor 1 几乎载入所有变量（TX 0.977、RAD 0.925 最大），Factor 2 载入除 CRIM、TX、B 外的大部分变量，难以解释；两因子累计解释方差比例 0.550。Varimax 之后仍不清楚。改用 promax 后载荷更清晰：Factor 1 与 AGE、NOX、INDUS、LSTAT 正相关，与 DIS、ZN、RM、MEDV 负相关，被解释为“城市工业”因子；Factor 2 与 CRIM、PTRATIO、TX、RAD 正相关，与种族变量负相关，被解释为“高速公路可达性与城市压力”。注意每个变量的 uniqueness 不随旋转改变（如 CRIM 0.694、RAD 0.063）。",
   "bodyEn": "The data are 13 variables (CHAS removed) for towns in the Boston metropolitan area. With factanal(factors = 2) and no rotation, Factor 1 loads on almost every variable (largest TX 0.977 and RAD 0.925) and Factor 2 on most variables except CRIM, TX and B, so interpretation is hard; the two factors have cumulative proportion of variance 0.550. Varimax still left the interpretation unclear. With promax the loadings are cleaner: Factor 1 is positively associated with AGE, NOX, INDUS and LSTAT and negatively with DIS, ZN, RM and MEDV, interpreted as an urban industrial factor; Factor 2 is positively associated with CRIM, PTRATIO, TX and RAD and negatively with the race variable, interpreted as highway accessibility and urban pressure. Note each variable's uniqueness is unchanged by rotation (e.g. CRIM 0.694, RAD 0.063).",
   "category": "因子模型 · Factor models",
   "source": "factor-analysis.pdf · 课件要点（改写）/ paraphrased lecture notes",
   "sourcePage": "p. 36, 38, 41, 50, 52",
   "tags": [
    "ETX5500",
    "Boston",
    "interpretation"
   ],
   "related": [
    "etx5500-factor-rotations",
    "etx5500-factor-oblique",
    "etx5500-factor-choose-r"
   ]
  }
 ]
};
