window.ETF5248Lectures=window.ETF5248Lectures||{};
window.ETF5248Lectures[6]={
  "lecture": 6,
  "source": "ETF2480_ETF5248_Lecture_6.pdf",
  "sha256": "c30e9a48c3bcadb9a592a1eced201cc0b65adc21b99aca094dde865ebc3c498b",
  "pages": [
    {
      "page": 1,
      "text": "Network\nLecture 6\nETF2480 & ETF5248 - S2, 2026\nJessica Leung, PhD, CAP-X, SFHEA\n1 / 47",
      "image": "course-materials/etf5248/lecture-6/page-001.jpg"
    },
    {
      "page": 2,
      "text": "Lecture’s Goal\nIntroduction\nMinimum Cost Network Flow\nT otal Unimodularity\nSpecial Cases\nReading:\nBertsimas and T sitsiklis,Introduction to Linear Optimization, Chapter 7.\nWinston,Operations Research, Chapters 7 and 8.\nVanderbei,Linear Programming, Chapters 14 and 15.\nBarabási,Linked: The New Science of Networks, Chapter 2.\n2 / 47",
      "image": "course-materials/etf5248/lecture-6/page-002.jpg"
    },
    {
      "page": 3,
      "text": "Example of networks: Qantas International routes (2025)\nSource: https:/ /www.qantas.com/au/en/qantas-experience/international-ﬂight-network.html\n3 / 47",
      "image": "course-materials/etf5248/lecture-6/page-003.jpg"
    },
    {
      "page": 4,
      "text": "Example of networks: Delta USA routes (2015)\nC ANAD A\nDickinson\nDelta Air Lines/Delta Connection/\nDelta Joint Venture Route\nFutur e R out e Servic e\nRout e serv ed b y Alask a Airlines/\nHoriz on Air\nDestination serv ed b y Delta / Delta \nC onnection\nDestination serv ed b y on e o f D elta ’ s \nWorldwide C odeshar e P ar tner s\nEff ectiv e May 20 15. Select r out es ar e seasonal. Some futur e \nservic es subject t o g o vernment appr o val. Servic e ma y be \noper at ed b y one of Delta’ s c odeshar e par tner airlines or one \nof Delta’ s C onnection Carrier s.  F lights ar e subject t o chang e \nwithout notic e.\nMEXIC O\nC ANAD A\nH A W AII\nALASKA\nBAHAMAS\nDOMINIC AN \nREPUBLIC\nPacific\nOcean\nAtlantic Ocean\nGulf\nof Mexico\nCaribbean Sea\nPacific Ocean\nMiami\nOrlando\nW est P alm Beach\nP or tland\nSeattle/Tacoma\nBoise\nSan Jose\nLas V egas\nBurbank\nSan Dieg o\nSan \nF rancisc o Oakland\nDen ver\nSacr ament o\nSalt Lake City\nT ucson\nPhoenix/Sc ottsdale\nSar asota/Br adent on\nAlbuquer que\nCharlest on\nC olor ado Springs\nGr een ville/\nSpar tanburg\nHunts ville/\n  Decatur\nP ensac ola\nSa vannah\nBaltimor e\nBirmingham\nChicag o \n(ORD , MD W)\nHoust on\n(IAH, HOU)\nL ouis ville\nMemphis\nMilw auk ee\nPhiladelphia\nSan Ant onio\nSt. L ouis\nT ampa/St. P etersburg\nCharlott e\nC leveland\nD allas/\nF t. W or th \n(DFW )\nDetroit\nJack son ville\nKansas C it y\nNe w Orleans\nNew York (JFK, L GA )\nNorf olk/V irginia Beach\nOmaha\nBat on R oug e\nAlban y\nAtlanta\nA ustin\nBost on\nC olumbia\nC olumbus\nJack son\nLittle R ock\nNash ville\nOklahoma C it y\nRaleigh/Durham\nRichmond\nT allahas see\nW ashing ton, D .C. (DC A, IAD )\nHar tfor d/\nSpring field\nCincinnati\nBo zeman\nOr ang e C ount y\nP or tland\nP ro videnc e\nNe wark\nGr eensbor o /High P oint /W inst on- Salem\nL exing ton\nGr and \nRapids\nF t. Lauder dale/\nHollyw ood\nS yracuse\nBuff alo /Niag ara F alls\nKn o xvilleT ulsa\nD aytona Beach\nEl P aso /\nC iudad Juár ez\nManchest er\nMelbourne\nMobile\nOntario\nF t. My ers/Naples\nDestin/\nF t. W alton Beach\nIndianapolis\nMinneapolis/\nSt. Paul\nD ayton\nLaf ayette\nAle xandria\nHarrisburg\nMadison\nShr evepor t\nP ittsburgh\nApplet on/\nF o x C ities\nBinghamt on\nBang or\nBillings\nBlooming ton\nBurling ton\nC edar Rapids/\n     Io wa C it y\nDes Moines\nElmir a/C orning\nErie\nF t. W ayne\nWhit e Plains\nLansing\nMidland/\nSagina w\nMoline/ \nQuad \nC ities\nR ochest er\nSpring field/\nBr anson\nGr eat F alls\nSioux F alls\nSpok ane\nW ichita\nLinc oln\nMont gomery\nP anama C it y\nF ayetteville/\nNor thwest Ark ansas\nMis soula\nRapid C it y\nR eno /T ahoe\nAshe ville\nCharlest on\nAkr on/ Cant on\nGulfpor t/Bilo xi\nChattanoog a\nNe wburgh\nR oanok e\nGaines ville\nKalispell\nE vans ville\nMonr oe\nT ri-C ities\nCasper\nJack son Hole\nP asc o /Richland\n/K enne wick\nLos Angeles Ne wpor t Ne ws/W illiamsburg\nSouth Bend\nHelena\nF lint\nIdaho F alls\nAllent o wn\nKalam azoo /\nBattle Cr eek\nDuluth\nMyr tle Beach\nKahuluiHonolulu\nK ona\nL ong Beach\nLa Cr os seR ochest er\nKilleen/F t. Hood\nMontr ose/\nT elluride\nT raverse C it y\nHa yden/St eamboat Springs\nEagle/V ail/Bea ver Cr eek\nNantuck et\nLihue\nGillett e\nF argo\nWilliston\nGr een Ba yW ausau\nIthaca\nP eoria\nW est Y ello wst one\nElk o\nP alm Springs\nF resno /Y osemit e\nSun V alley\nT win\nF alls\nP ocat ello\nSt. Georg e\nC olumbus/\nStark ville/\nW est P oint\nAlban y\nA ugusta\nW ilk es-Barr e/Scr ant on\nBruns wick\nCharlott es ville\nC olumbus/F t. Benning\nDothan\nK ey W est\nF ayetteville/F t. Br agg\nV aldosta\nStat e C olleg e\nW ilming ton\nC ody\nEug ene\nL ewist on\nMedf or d\nR edmond/Bend\nGr and Junction\nJack son ville/ Camp L ejeune\nNe w Bern\nC edar C it y\nButt e\nBismar ck\nAber deen\nAlpena\nSault St e. \nMarie\nEscanaba\nGr and \nF ork s\nIr on Mountain\nBr ainer d Mar quette\nBemidji\nChisholm/\nHibbing\nInt ernational F allsMinot\nP ellst on /Mackinac Island\nSanta R osa\nD allas L o ve \nF ield ( D AL )\nF t. Smith\nBellingham\nAbbotsford\nW enat chee\nY akima\nW alla \nW alla\nJuneau\nAnchor age\nF airbank s\nK etchik an\nSitk a\nMammoth \nLak es\nP ullman\nMaui\nHa waii\nKauai\nOahu\nV anc ouv er\nE dmont on\nW innipeg\nSask atoon\nR egina\nCalg ary/Banff\nT or ont o\nMontr eal\nOtta wa\nHalif ax\nV ict oria\nK elo wna\nFt. McMurrayWhitehorse\nPrince George\nSt. John’s, NL\nMar tha’s V ine yard\nHilo\nT hunder Ba y\nMoncton\nSydney\nRhinelander\nAspen/\nSno wmas s\nDeer Lake\nHarling en/ \nSouth Padre Island\nQuébec\nSanta Barbar a\nSource: http:/ /www.delta.com\n4 / 47",
      "image": "course-materials/etf5248/lecture-6/page-004.jpg"
    },
    {
      "page": 5,
      "text": "Erdös collaboration network\nSource: http:/ /www.math.cmu.edu/∼ctsourak/amazing.html\nA related concept : The Bacon number\n5 / 47",
      "image": "course-materials/etf5248/lecture-6/page-005.jpg"
    },
    {
      "page": 6,
      "text": "Social networks: Kung Fu Panda (2008)\nSource: http:/ /moviegalaxies.com/\nAnother interactive network:\nhttps:/ /graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/index.html 6 / 47",
      "image": "course-materials/etf5248/lecture-6/page-006.jpg"
    },
    {
      "page": 7,
      "text": "Other examples\n– Phone call networks\n– World Wide Web\n– Facebook\n– Power grids\n– ...\n“Networks are present everywhere. All we need is an eye for them.”\nA.-L. Barabási,Linked: The New Science of Networks\nLink to Network Science Ebook\n7 / 47",
      "image": "course-materials/etf5248/lecture-6/page-007.jpg"
    },
    {
      "page": 8,
      "text": "The origins of graph theory: Eulerian tour\n▶Few research ﬁelds can trace their birth to a single moment and place in history. The roots of Graph theory go back to\n1735 in Königsberg, the capital of Eastern Prussia, a thriving merchant city of its time.\n▶Seven bridges were built across the river Pregel that surrounded the town. Five of these connected to the mainland the\nelegant island Kneiphof, caught between the two branches of the Pregel. The remaining two crossed the two branches\nof the river (see image on the next slides).\n▶This peculiar arrangement gave birth to a contemporary puzzle:Can one walk across all seven bridges and never cross\nthe same one twice?\n▶Despite many attempts, no one could ﬁnd such path. The problem remained unsolved until 1735, when Leonard Euler, a\nSwiss born mathematician, oﬀered a rigorous mathematical proof that such path does not exist.\n▶Euler represented each of the four land areas separated by the river with letters A, B, C, and D. Next he connected with\nlines each piece of land that had a bridge between them. He thus built a graph, whose nodes were pieces of land and\nlinks were the bridges.\n▶Then Euler made a simple observation: if there is a path crossing all bridges, but never the same bridge twice, then\nnodes with odd number of links must be either the starting or the end point of this path. Indeed, if you arrive to a node\nwith an odd number of links, you may ﬁnd yourself having no unused link for you to leave it.\nThere is a video on Moodle showing an animation of the Königsberg bridges problem.\n8 / 47",
      "image": "course-materials/etf5248/lecture-6/page-008.jpg"
    },
    {
      "page": 9,
      "text": "The origins of graph theory: Eulerian tour\n▶Euler’s proof was the ﬁrst time someone solved a mathe-\nmatical problem using a graph.\n▶We learn that some problems become simpler and more\ntractable if they are represented as a graph.\n▶We also learn that the existence of the path does not de-\npend on our ingenuity to ﬁnd it. Rather, it is a property of\nthe graph. Indeed, given the structure of the Königsberg\ngraph, no matter how smart we are, we will never ﬁnd\nthe desired path. In other words, networks have proper-\nties encoded in their structure that limit or enhance their\nbehavior.\n▶T o understand the many ways networks can aﬀect the\nproperties of a system, we need to become familiar with\ngraph theory, a branch of mathematics that grew out of\nEuler’s proof.\n9 / 47",
      "image": "course-materials/etf5248/lecture-6/page-009.jpg"
    },
    {
      "page": 10,
      "text": "Networks and Graphs\nNetwork(directed graph, digraph):mnodes connected byndirected arcs\n– arcs are ordered pairs of nodes:(u,v)\n– we assume there is at most one arc from nodeuto nodev\n– there are no loops (no arcs(u,u))\nNode-arc incidence matrix:m×nmatrixAwith entries\nAij =\n\n\n\n1if arcjstarts at nodei\n−1if arcjends at nodei\n0otherwise\n10 / 47",
      "image": "course-materials/etf5248/lecture-6/page-010.jpg"
    },
    {
      "page": 11,
      "text": "Example\n1\n2\n3\n4\n5\n1\n4\n2\n6\n3\n75\nFigure: A network with 5 nodes and 7 arcs. Numbers on arcs show arc labels.\nA=\n\n\n1 1 1−1 0 0 0\n−1 0 0 1−1 0 0\n0−1 0 0 1 1−1\n0 0−1 0 0 0 1\n0 0 0 0 0−1 0\n\n\n11 / 47",
      "image": "course-materials/etf5248/lecture-6/page-011.jpg"
    },
    {
      "page": 12,
      "text": "Degree\n▶A key property of each node is itsdegree, representing the number of links it has to other nodes. The degree can\nrepresent the number of mobile phone contacts an individual has in the call graph (i.e. the number of diﬀerent\nindividuals the person has talked to), or the number of citations a research paper gets in the citation network.\n▶We denote withk i the degree of theith node in the network. For example, the degree of node C in the ﬁgure of the\nEulerian tour is 3.\n▶In an undirected network the total number of links,L, can be expressed as the sum of the node degrees:\nL= 1\n2\nNX\ni=1\nki\nHere the 1/2 factor corrects for the fact that in the sum each link is counted twice.\n▶In a directed graph, we distinguish between incoming degree,k in\ni , representing the number of links that pointtonodei,\nand outgoing degree,k out\ni , representing the number of links that pointfromnodeito other nodes. Finally, a node’s total\ndegree,k i , is given by\nki =k in\ni +k out\ni\n▶Once we have information for each node in a graph, we can compute summary statistics on the entire graph such as\naverage degree, standard deviation of degree.\n12 / 47",
      "image": "course-materials/etf5248/lecture-6/page-012.jpg"
    },
    {
      "page": 13,
      "text": "Network ﬂow (Decision variable)\nﬂow vectorx∈R n\n–x j : ﬂow (of material, traﬃc, charge, information, ...) through arcj\n– positive if in direction of arc; negative otherwise\ntotal ﬂow leaving nodei:\nnX\nj=1\nAij xj = (Ax) i\ni\nxk\nAik\n=1xpAip =−1\n13 / 47",
      "image": "course-materials/etf5248/lecture-6/page-013.jpg"
    },
    {
      "page": 14,
      "text": "External supply\nSupply vectorb∈R m\n–b i is external supply at nodei(negativeb i represents external\ndemand)\ni\nxk\nAik\n=1xpAip =−1\nbi\nBalance equations:\nAx=b\n14 / 47",
      "image": "course-materials/etf5248/lecture-6/page-014.jpg"
    },
    {
      "page": 15,
      "text": "Minimum cost network ﬂow problem (MCNFP)\nminimizec T x\nsubject toAx=b\nl≤x≤u\n–c i is unit cost of ﬂow through arci\n–l j andu j are limits on ﬂow through arcj(typically,l j ≤0,u j ≥0)\n– we assumel j <u j , but allowl j =−∞andu j = +∞to simplify\nnotation\nincludes many network optimization problems as special cases\n15 / 47",
      "image": "course-materials/etf5248/lecture-6/page-015.jpg"
    },
    {
      "page": 16,
      "text": "T otally unimodular matrix\nDeﬁnition:\n– a matrix istotally unimodularif all its minors are−1,0, or1\n(a minor is the determinant of a square submatrix)\nExamples:\nthe matrix\nA=\n\n\n1 0−1 0 1\n0−1 1−1−1\n0 0 0 1 1\n\n\nnode-arc incidence matrix of a directed graph\nPropertiesof a totally unimodular matrixA:\n– the entriesA ij (i.e., its minors of order 1) are−1,0, or1\n– the inverse of any nonsingular square submatrix ofAhas entries± 1, 0\n16 / 47",
      "image": "course-materials/etf5248/lecture-6/page-016.jpg"
    },
    {
      "page": 17,
      "text": "Integrality of extreme points\nLetPbe a polyhedron inR n deﬁned by\nAx=b,l≤x≤u\nwhere\n–Ais totally unimodular\n–bis an integer vector\n– If there are ﬁnite bounds, then the ﬁnite lower boundsland ﬁnite\nupper boundsuare integers.\n– Integrality may break when we have ﬁnite bounds but non-integer.\nthen all the extreme points (vertices) ofPare integer vectors.\nThis is also known as theintegrality theorem.\n17 / 47",
      "image": "course-materials/etf5248/lecture-6/page-017.jpg"
    },
    {
      "page": 18,
      "text": "Intuition: Why does this happen?\n▶What is an Extreme Point?\nIn linear programming, the feasible region is a polyhedron\n(intersection of half-spaces). An extreme point is a“corner\" of that\npolyhedron. The simplex method, for example, always moves from\none extreme point to another, so extreme points are where optimal\nsolutions are found.\n▶In general LPs, extreme points can be fractional. But in network ﬂow\nLPs, something remarkable happens: If supplies/demands/capacities\nare integers, then every extreme point corresponds to integer ﬂows.\n18 / 47",
      "image": "course-materials/etf5248/lecture-6/page-018.jpg"
    },
    {
      "page": 19,
      "text": "Intuition: Why does this happen?\n▶For this to happen, two ingredients are needed:\n– Constraint structure is a T otally Unimodular (TU) matrix.\nThe node–arc incidence matrix of a directed network is TU.\n– Integral RHS\nSupplies/demands (right-hand sides of balance equations) are\nintegers. Capacities (if ﬁnite) are integers.\n19 / 47",
      "image": "course-materials/etf5248/lecture-6/page-019.jpg"
    },
    {
      "page": 20,
      "text": "Why This is Powerful?\nConsider a combinatorial optimization problem:\nminimizec T x\nsubject toAx=b\nl≤x≤u\nx∈Z n\nThis is an integer linear program, very diﬃcult in general. The major\nworkhorse for solving interger linear programs is the branch-and-bound\nalgorithm, which is a smart way of doing exhaustive search in the solution\nset.\n20 / 47",
      "image": "course-materials/etf5248/lecture-6/page-020.jpg"
    },
    {
      "page": 21,
      "text": "Why This is Powerful?\nWith integrality of extreme points, this problem is equivalent to this linear\nprogramming relaxation\nminimizec T x\nsubject toAx=b\nl≤x≤u\nImplications for combinatorial optimization:Extreme optimal solution of\nthe relaxation is also optimal for the IP . In other words, the optimal\nsolution found at an extreme point is automatically integer-valued.\nAll you need is constraint matrix being TU matrix and RHS (and capacity if\nﬁnite) integrality.\n21 / 47",
      "image": "course-materials/etf5248/lecture-6/page-021.jpg"
    },
    {
      "page": 22,
      "text": "Special cases of the MCNFP\n▶T ransportation problem\n▶Assignment problem\n▶Shortest path problem\n▶Maximum ﬂow problem\n22 / 47",
      "image": "course-materials/etf5248/lecture-6/page-022.jpg"
    },
    {
      "page": 23,
      "text": "T ransportation problem\nWhen network ﬂow problem represents the shipment of goods along a transportation network, it is called\nthetransshipment problem. An important special case is when the set of nodesNcan be partitioned into\ntwo setsSandD,\nN=S∪D,S∩D=∅,\nsuch that every arc has its tail inSand its head inD.\nThe nodes inSare calledsource(orsupply) nodes, while those inDare calleddestination(ordemand)\nnodes.\nSuch graphs are calledbipartite graphs(see next slide). A network ﬂow problem on such a bipartite graph\nis called atransportation problem.\n23 / 47",
      "image": "course-materials/etf5248/lecture-6/page-023.jpg"
    },
    {
      "page": 24,
      "text": "Bipartite graph\n1 1\n2\n3\n...\nm\n2\n3\n...\nn\nsupply nodes demand nodes\nFigure: A bipartite graph - the network for a transportation problem.\n24 / 47",
      "image": "course-materials/etf5248/lecture-6/page-024.jpg"
    },
    {
      "page": 25,
      "text": "Hitchcock transportation problem\nWhen every supply node is connected to every demand node, the\nproblem is called theHitchcock T ransportation Problem.\n1 1\n2\n3\n...\nm\n2\n3\n...\nn\ns1\ns2\ns3\nsm\nd1\nd2\nd3\ndn\nsupply nodes demand nodes\nc11\ncmn\nFigure: Every supply node is connected to every demand node.\n25 / 47",
      "image": "course-materials/etf5248/lecture-6/page-025.jpg"
    },
    {
      "page": 26,
      "text": "Hitchcock transportation problem formulation\nLetx ij be the number of units shipped from supply pointito demand\npointj, then the problem can be formulated as:\nminimize\nX\ni∈S\nX\nj∈D\ncij xij\nsubject to\nX\nj∈D\nxij =s i ,i∈S,\nX\ni∈S\nxij =d j ,j∈D,\nxij ≥0,i∈S,j∈D.\n26 / 47",
      "image": "course-materials/etf5248/lecture-6/page-026.jpg"
    },
    {
      "page": 27,
      "text": "Hitchcock transportation problem formulation\nInmatrix notation:\nminimizec T x\nsubject toAx=b\nx≥0\nwhereAis an(m+n)×mnnode-arc incidence matrix,b= (s,−d),l=0,\nu= +∞\n27 / 47",
      "image": "course-materials/etf5248/lecture-6/page-027.jpg"
    },
    {
      "page": 28,
      "text": "Example: transportation problem\nPowerco has three electric power plants that supply the needs of four cities. Each power plant can supply\nthe following numbers of kilowatts-hours (kWh) of electricity: plant 1 - 35 million; plant 2 - 50 million;\nplant 3 - 40 million.\nThe peak power demands in these cities, which occur at the same time (2 pm), are as follows (in kWh): city\n1 - 45 million; city 2 - 20 million; city 3 - 30 million; city 4 - 30 million.\nThe cost of sending 1 million kWh of electricity from plant to city depends on the distance the electricity\nmust travel. Formulate an LP to minimise the cost of meeting each city’s peak power demand.\nT able: shipping cost, supply and demand.\nto\nfromcity 1 city 2 city 3 city 4supply\nplant 1 $8 $6 $10 $9 35\nplant 2 $9 $12 $13 $7 50\nplant 3 $14 $9 $16 $5 40\ndemand45 20 30 30\n28 / 47",
      "image": "course-materials/etf5248/lecture-6/page-028.jpg"
    },
    {
      "page": 29,
      "text": "Example: transportation problem\np1\np2\np3\nc1s1 =35\ns2 =50\ns3 =40\nd1 =45\nc2 d2 =20\nc3 d3 =30\nc4 d4 =30\nLetx ij be the ﬂow from theith supply node to thejth\ndemand node (in millions of kWh). Then the problem\ncan be formulated as\nminimize\n3X\ni=1\n4X\nj=1\ncij xij\nsubject to\n4X\nj=1\nxij =s i ,∀i;\n3X\ni=1\nxij =d j ,∀j;\nxij ≥0∀i,∀j.\n29 / 47",
      "image": "course-materials/etf5248/lecture-6/page-029.jpg"
    },
    {
      "page": 30,
      "text": "Live Coding Time!\nLet’s code the unbalanced transportation problem together!\n30 / 47",
      "image": "course-materials/etf5248/lecture-6/page-030.jpg"
    },
    {
      "page": 31,
      "text": "Balancing a transportation problem\nThe problem is said to be abalancedtransportation problem if\nX\ni∈S\nsi =\nX\nj∈D\ndj ,\notherwise the problem isunbalanced. if total supply exceeds total demand\n(P\ni∈S si >P\nj∈D dj ):\n– we can balance the problem by adding adummy demand node\n– since shipments to the dummy demand node are not real, they are assigned a cost\nof zero\nif total supply is strictly less than total demand ( P\ni∈S si <P\nj∈D dj ):\n– the problem is infeasible\n– however, it is sometimes desirable to allow the possibility of leaving some demand\nunmet\n– we can balance the problem by adding adummy supply nodeand associate a\npenalty with unmet demand\n31 / 47",
      "image": "course-materials/etf5248/lecture-6/page-031.jpg"
    },
    {
      "page": 32,
      "text": "Balancing a transportation problem\nsupply exceeds demand\n1 1\n2\n3\n...\nm\n2\n3\n...\nn\ns1\ns2\ns3\nsm\nd1\nd2\nd3\ndn\ndn+1\nsupply demand\nc11\ncmn\ndemand exceeds supply\n1 1\n2\n3\n...\nm\n2\n3\n...\nn\ns1\ns2\ns3\nsm\nd1\nd2\nd3\ndn\nsm+1\nsupply demand\nc11\ncmn\n32 / 47",
      "image": "course-materials/etf5248/lecture-6/page-032.jpg"
    },
    {
      "page": 33,
      "text": "Assignment problem\n– there arempersons(setS) andmprojects(setD)\n–c ij is the cost of personicompleting projectj\n– we wish to assign a diﬀerent person to each project to minimize total\ncost\n–x ij =1if personiis assigned to projectj, andx ij =0otherwise\ncombinatorial optimization problem, very diﬃcult in general\nminimize\nX\ni∈S\nX\nj∈D\ncij xij\nsubject to\nX\nj∈D\nxij =1i∈S,\nX\ni∈S\nxij =1j∈D,\nxij ∈ {0,1}i∈S,j∈D.\n33 / 47",
      "image": "course-materials/etf5248/lecture-6/page-033.jpg"
    },
    {
      "page": 34,
      "text": "Network for an assignment problem\nAssignment problem is a special case of transportation problem:\n– the number of supply nodes is equal to the number of demand nodes\n– each supplier has unit supply and each consumer has unit demand\n1 1\n2\n3\n...\nm\n2\n3\n...\nm\ns1\ns2\ns3\nsm\nd1\nd2\nd3\ndm\nsupply demand\nc11\ncmm\n34 / 47",
      "image": "course-materials/etf5248/lecture-6/page-034.jpg"
    },
    {
      "page": 35,
      "text": "Assignment as a transportation problem\nInmatrix notation:\nminimizec T x\nsubject toAx=b\nx∈ {0,1} m2\nwhereAis an2m×m 2 node-arc incidence matrix,b= (1,−1)\n– equivalent to its linear programming relaxation:\nminimizec T x\nsubject toAx=b\n0≤x≤1\n– becauseAis totally unimodular andb,landuare integer vectors\n35 / 47",
      "image": "course-materials/etf5248/lecture-6/page-035.jpg"
    },
    {
      "page": 36,
      "text": "Example: assignment problem\nMachineco has four machines and four jobs to be completed. Each\nmachine must be assigned to complete one job. The time required to\nsetup each machine for completing each job is shown in the table.\nMachineco wants to minimize the total setup time needed to complete\nthe four jobs.\nT able: setup cost\ntime (hours)\njob 1 job 2 job 3 job 4\nmachine 114 5 8 7\nmachine 22 12 6 5\nmachine 37 8 3 9\nmachine 42 4 6 10\n36 / 47",
      "image": "course-materials/etf5248/lecture-6/page-036.jpg"
    },
    {
      "page": 37,
      "text": "Shortest path problem\n▶Suppose each arc in the network has a length associated with it\n▶We want to ﬁnd ashortest pathfrom node1to nodemin the\nnetwork\n▶Common applications: vehicle and internet routing\n▶example: ﬁnd the shortest path between nodes 1 and 7 in the\nfollowing network:\n1\n2\n3\n4\n5\n6\n7\n6\n2\n16\n5\n4\n7\n3\n8\n3\n4 10\n1\nFigure: Network for a shortest path problem. Labels on arcs indicate length.\nHow to formulate this problem mathematically? 37 / 47",
      "image": "course-materials/etf5248/lecture-6/page-037.jpg"
    },
    {
      "page": 38,
      "text": "Shortest path problem: formulation\nshortest pathin directed graph with node-arc incidence matrixA\n(Forward) paths from node1tomcan be represented by vectorsxwith\nAx= (1,0, . . . ,0,−1),x∈ {0,1} n\nshortest path is solution of\nminimizec T x\nsubject toAx= (1,0, . . . ,0,−1);x∈ {0,1} n\nLP formulation\nminimizec T x\nsubject toAx= (1,0, . . . ,0,−1);0≤x≤1\noptimal solutions satisfyx i ∈ {0,1}\n38 / 47",
      "image": "course-materials/etf5248/lecture-6/page-038.jpg"
    },
    {
      "page": 39,
      "text": "Example\nT o ﬁnd the shortest path between nodes 1 and 7 in the following network:\n1\n2\n3\n4\n5\n6\n7\n6\n2\n16\n5\n4\n7\n3\n8\n3\n4 10\n1\nminimizec T x\nsubject toAx= (1,0, . . . ,0,−1)\n0≤x≤1\nwith node-arc incidence matrix\nA=\n\n\n1 1 1 0 0 0 0 0 0 0 0 0\n−1 0 0 1 1−1 0 0 0 0 0 0\n0−1 0 0 0 1 1 1 0 0 0 0\n0 0−1−1 0 0 0 0 1−1 0 0\n0 0 0 0−1 0−1 0 0 1 1 0\n0 0 0 0 0 0 0−1 0 0 0 1\n0 0 0 0 0 0 0 0−1 0−1−1\n\n\n39 / 47",
      "image": "course-materials/etf5248/lecture-6/page-039.jpg"
    },
    {
      "page": 40,
      "text": "Non-obvious example: shortest path problem\nSuppose it costs $10,000 to purchase a new car. The annual operating\ncost and resale value of a used car are shown in the following table.\nAssuming that one now has a new car, determine a replacement policy\nthat minimizes the net costs of owning and operating a car for the next\nsix years.\nAge of car (Y ears) Resale Value (S) Operating Cost ($)\n1 7,000 300 (year 1)\n2 6,000 500 (year 2)\n3 4,000 800 (year 3)\n4 3,000 1,200 (year 4)\n5 2,000 1,600 (year 5)\n6 1,000 2,200 (year 6)\n40 / 47",
      "image": "course-materials/etf5248/lecture-6/page-040.jpg"
    },
    {
      "page": 41,
      "text": "Non-obvious example: shortest path problem\nLet’s draw the network together.\n41 / 47",
      "image": "course-materials/etf5248/lecture-6/page-041.jpg"
    },
    {
      "page": 42,
      "text": "Non-obvious example: shortest path problem\nFormulation:\nNumerical Solution:p ∗ =14400,\nx ∗ = (0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0)\nConclusion and Interpretation: Replace the car at times 2, 4, and 6. T otal\ncost is minimised at $14,400. 42 / 47",
      "image": "course-materials/etf5248/lecture-6/page-042.jpg"
    },
    {
      "page": 43,
      "text": "Maximum ﬂow problem\n– suppose each arc in the network has a capacity associated with it\n– maximize ﬂow from node1(source) to nodem(sink) through the network\n1\nm\nt\nt\n6\n2\n16\n5\n4\n7\n3\n8\n3\n4 10\n1\nFigure: Network for a maximum ﬂow problem. Labels on arcs indicate capacity.\nmaximizet\nsubject toAx=tb\nl≤x≤u\nwhereAis node-arc incidence matrix andb= (1,0, . . . ,0,−1)\n43 / 47",
      "image": "course-materials/etf5248/lecture-6/page-043.jpg"
    },
    {
      "page": 44,
      "text": "Maximum ﬂow reformulated as a MCNFP\nmaximum ﬂow problem can be reformulated as a minimum cost network ﬂow problem\n– let the cost of every arcc ij =0;\n– introduce a new arc(m,1)withu m,1 = +∞andc m,1 =−1.\n1\nm\n6\n2\n16\n5\n4\n7\n3\n8\n3\n4 10\n1\ncn+1 =−1u n+1 = +∞\nminimize−t\nsubject to\n\u0002\nA−b\n\u0003\u0014x\nt\n\u0015\n=0;l≤x≤u\nNote:matrix[A−b]is node-arc incidence matrix, hence totally unimodular\n44 / 47",
      "image": "course-materials/etf5248/lecture-6/page-044.jpg"
    },
    {
      "page": 45,
      "text": "Example: maximum ﬂow problem\nSunco Oil wants to ship the maximum possible amount of oil (per hour) via pipeline from\nnode 1 to node 5. On its way from node 1 to node 5, oil must pass through some or all\nof stations 2, 3, and 4. The various arcs represent pipelines of diﬀerent diameters. The\nmaximum number of barrels of oil that can be pumped through each arc is shown above\nthe arcs.\nFormulate an LP that can be used to determine the maximum number of barrels of oil\nper hour that can be sent from 1 to 5.\n1 2 3\n4\n52\n3\n3\n4\n2\n1\n45 / 47",
      "image": "course-materials/etf5248/lecture-6/page-045.jpg"
    },
    {
      "page": 46,
      "text": "Example: maximum ﬂow problem\nSunco Oil wants to ship the maximum possible amount of oil (per hour) via pipeline from\nnode 1 to node 5. On its way from node 1 to node 5, oil must pass through some or all\nof stations 2, 3, and 4. The various arcs represent pipelines of diﬀerent diameters. The\nmaximum number of barrels of oil that can be pumped through each arc is shown above\nthe arcs.\nFormulate an LP that can be used to determine the maximum number of barrels of oil\nper hour that can be sent from 1 to 5.\n1 2 3\n4\n52\n3\n3\n4\n2\n1\nc51 =−1u 51 = +∞\n46 / 47",
      "image": "course-materials/etf5248/lecture-6/page-046.jpg"
    },
    {
      "page": 47,
      "text": "Quick Summary\n▶Network ﬂow models are the most frequently solved LPs.\n▶They are deﬁned on graphs and represent a convenient and ﬂexible\nmodelling tool.\n▶Network ﬂow models are special cases of LPs and can be solved by\napplying general purpose methods (e.g., Simplex algorithm).\n▶If the problem data are integer, basic solutions in Simplex are always\ninteger. Hence, can use Simplex to solve even if ﬂows need to be\ninteger.\n▶There is a number of special purpose algorithms designed for\nnetwork ﬂow problems (network Simplex, transportation Simplex,\nFord-Fulkerson, Dijkstra’s, etc.) which reduce computational time and\nimprove eﬃciency.\n47 / 47",
      "image": "course-materials/etf5248/lecture-6/page-047.jpg"
    }
  ],
  "version": 1,
  "title": [
    "网络流与全幺模性",
    "Network flows and total unimodularity"
  ],
  "overview": [
    "从节点与弧出发，把运输、指派、最短路和最大流统一为网络 LP。",
    "Unify transportation, assignment, shortest path and maximum flow as network LPs."
  ],
  "goals": [
    [
      "建立关联矩阵和守恒式",
      "Construct incidence matrices and balances"
    ],
    [
      "说明整数极点的条件",
      "State integral-vertex conditions"
    ],
    [
      "识别四种网络流特例",
      "Identify four network-flow special cases"
    ]
  ],
  "cards": [
    {
      "pages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "title": [
        "网络如何表示业务关系",
        "Networks as business representations"
      ],
      "lecture": [
        "本讲覆盖网络、最小费用网络流、全幺模性和特例。例图包括 Qantas 2025 航线、Delta 2015 航线、Erdős 合作网络、《功夫熊猫》角色网络，以及电话、网页、社交平台、电网。节点和边的含义由业务决定；这些图片是课件示例，不是实时航线数据。",
        "Topics are networks, minimum-cost flow, total unimodularity and special cases. Illustrations include Qantas 2025 routes, Delta 2015 routes, Erdős collaboration, Kung Fu Panda characters, calls, the web, social platforms and power grids. Nodes and edges depend on the application; route maps are historical lecture illustrations."
      ],
      "formulas": [],
      "explanation": [
        "",
        ""
      ],
      "terms": [],
      "review": [
        "第 3–6 页密集示意图按原图保留，没有逐条转录全部航线或人名关系；细节需要人工核对。",
        "Dense illustrations on pages 3–6 are retained as images; individual routes and name links were not all transcribed and require manual checking."
      ],
      "id": "etf5248-l6-k01"
    },
    {
      "pages": [
        8,
        9
      ],
      "title": [
        "七桥问题：结构决定可行性",
        "Seven bridges: structure determines feasibility"
      ],
      "lecture": [
        "课件将四块陆地抽象为节点、七座桥抽象为边，问能否每座桥恰走一次。途中节点的进入和离开必须配对，所以奇数度节点只能是起点或终点。图中的四个奇数度节点使目标路线不存在。",
        "Four land areas become nodes and seven bridges become edges. To traverse each bridge once, entries and exits at intermediate nodes must pair up, so odd-degree nodes can only be endpoints. Four odd-degree nodes rule out the desired trail."
      ],
      "formulas": [],
      "explanation": [
        "这是结构性不可行，不能靠更聪明地试路线解决。课件使用 Eulerian tour 标题；不要求回到起点的情形更准确称 trail。历史年份按课件保留，不作独立考证。",
        "This is structural infeasibility, not a failure of search ingenuity. A nonclosed traversal is more precisely a trail although the slide title says tour. Historical dates are not independently checked."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k02"
    },
    {
      "pages": [
        10,
        11
      ],
      "title": [
        "有向图与节点—弧关联矩阵",
        "Directed graphs and incidence matrices"
      ],
      "lecture": [
        "m 个节点、n 条有向弧；弧 (u,v) 是有序对，课件假设无自环、同向不重复。A 为 m×n，弧起点行记 +1、终点行记 −1，其余为 0。第 11 页用 5 节点 7 弧例图展示矩阵。",
        "There are m nodes and n directed arcs (ordered pairs), with no loops or duplicate same-direction arcs. The m×n incidence matrix has +1 at an arc’s tail, −1 at its head and zeros elsewhere. Page 11 gives a five-node, seven-arc example."
      ],
      "formulas": [
        "A_{ij}=\\begin{cases}1&j\\text{ starts at }i\\\\-1&j\\text{ ends at }i\\\\0&\\text{otherwise}\\end{cases}",
        "A=\\begin{pmatrix}1&1&1&-1&0&0&0\\\\-1&0&0&1&-1&0&0\\\\0&-1&0&0&1&1&-1\\\\0&0&-1&0&0&0&1\\\\0&0&0&0&0&-1&0\\end{pmatrix}"
      ],
      "explanation": [
        "每列和为 0。按矩阵列，弧依次为 1→2、1→3、1→4、2→1、3→2、3→5、4→3。",
        "Every column sums to zero. Matrix columns represent 1→2, 1→3, 1→4, 2→1, 3→2, 3→5 and 4→3."
      ],
      "terms": [
        [
          "node-arc incidence matrix",
          "节点—弧关联矩阵"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k03"
    },
    {
      "pages": [
        12
      ],
      "title": [
        "度、入度与出度",
        "Degree, indegree and outdegree"
      ],
      "lecture": [
        "无向图度数 kᵢ 是相连边数，每条边在度数总和中计两次；有向图区分入度、出度，总度为二者之和。课件也提到可计算平均度与标准差。",
        "Undirected degree counts incident edges; each edge is counted twice in the degree sum. Directed graphs distinguish indegree and outdegree, whose sum is total degree. The slides also mention average degree and its standard deviation."
      ],
      "formulas": [
        "L=\\frac12\\sum_{i=1}^{N}k_i,\\qquad k_i=k_i^{\\rm in}+k_i^{\\rm out}"
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
      "id": "etf5248-l6-k04"
    },
    {
      "pages": [
        13,
        14,
        15
      ],
      "title": [
        "流量守恒与最小费用网络流",
        "Flow conservation and minimum-cost flow"
      ],
      "lecture": [
        "弧流量 xⱼ 沿弧方向为正，允许负值时表示反向；(Ax)ᵢ 是净流出，不是仅把流出项相加。bᵢ 为外部供给，负值为需求。守恒 Ax=b，弧上下界 l≤x≤u，目标是单位成本乘流量之和；可允许无限界。",
        "Arc flow xⱼ is positive along its direction and negative in reverse when allowed. (Ax)ᵢ is net outflow. Positive bᵢ is supply and negative bᵢ demand. Balance is Ax=b, bounds are l≤x≤u and cost is the sum of unit costs times flows; infinite bounds are allowed."
      ],
      "formulas": [
        "\\min c^Tx\\quad\\text{s.t. }Ax=b,\\quad l\\le x\\le u"
      ],
      "explanation": [
        "所有守恒式求和得 Σbᵢ=0，这是必要条件但不保证可行；容量和连通性仍可能阻塞运输。",
        "Summing balances gives Σbᵢ=0, necessary but not sufficient: capacities and connectivity may block flow."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k05"
    },
    {
      "pages": [
        16
      ],
      "title": [
        "全幺模矩阵 TU",
        "Totally unimodular matrices"
      ],
      "lecture": [
        "若所有方形子矩阵的行列式均在 {−1,0,1} 中，则矩阵全幺模。节点—弧关联矩阵具有该性质。TU 的元素只能是 −1、0、1，非奇异方形子矩阵的逆也只含 −1、0、1。",
        "A matrix is totally unimodular if every square submatrix determinant is −1,0 or 1. Directed incidence matrices are TU. TU entries are −1,0,1, and inverses of nonsingular square submatrices also have entries in that set."
      ],
      "formulas": [
        "\\det(B)\\in\\{-1,0,1\\}\\quad\\text{for every square submatrix }B"
      ],
      "explanation": [
        "元素全为 0、±1 只是必要条件，不是 TU 的充分条件。例如 [[1,1],[1,−1]] 行列式为 −2。",
        "Having only 0,±1 entries is necessary, not sufficient: [[1,1],[1,−1]] has determinant −2."
      ],
      "terms": [
        [
          "total unimodularity",
          "全幺模性"
        ],
        [
          "minor",
          "子式"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k06"
    },
    {
      "pages": [
        17,
        18,
        19,
        20,
        21
      ],
      "title": [
        "整数极点定理与 LP 松弛",
        "Integral vertices and LP relaxation"
      ],
      "lecture": [
        "若 A 为 TU，b 为整数，所有有限上下界均为整数，则 Ax=b,l≤x≤u 的每个极点是整数。于是找到最优极点即可同时解决对应整数问题，不必依赖一般整数规划的分支定界。课件强调非整数有限界可能破坏结论。",
        "If A is TU, b integral and all finite bounds integral, every vertex of Ax=b,l≤x≤u is integral. An optimal vertex then also solves the integer problem without general-purpose branch-and-bound. Nonintegral finite bounds can break the result."
      ],
      "formulas": [],
      "explanation": [
        "该结论是“极点整数”，不是“每个可行点或所有最优点都整数”。两个整数最优点的凸组合可能是分数最优点；还需问题存在最优极点。",
        "The claim concerns vertices, not all feasible or optimal points. Convex combinations of integral optima may be fractional. An optimal vertex must exist for this solution argument."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k07"
    },
    {
      "pages": [
        22,
        23,
        24,
        25,
        26,
        27
      ],
      "title": [
        "运输问题与二部图",
        "Transportation and bipartite graphs"
      ],
      "lecture": [
        "网络流的特例有运输、指派、最短路和最大流。运输图节点分供给集 S 与需求集 D，弧只从 S 到 D。每个供给点都连接每个需求点时为 Hitchcock 运输问题。xᵢⱼ 表示运量，cᵢⱼ 单位成本，sᵢ 供给、dⱼ 需求。矩阵形式 b=(s,−d)，A 为 (m+n)×mn。",
        "Special cases include transportation, assignment, shortest path and maximum flow. Transportation uses disjoint supply S and demand D sets, with arcs from S to D. A complete supply-to-demand graph gives the Hitchcock problem. xᵢⱼ is shipment, cᵢⱼ cost, sᵢ supply and dⱼ demand. In incidence form b=(s,−d) and A is (m+n)×mn."
      ],
      "formulas": [
        "\\min\\sum_{i\\in S}\\sum_{j\\in D}c_{ij}x_{ij}",
        "\\sum_jx_{ij}=s_i,\\quad\\sum_ix_{ij}=d_j,\\quad x_{ij}\\ge0"
      ],
      "explanation": [
        "",
        ""
      ],
      "terms": [
        [
          "bipartite graph",
          "二部图"
        ],
        [
          "transshipment",
          "转运"
        ]
      ],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k08"
    },
    {
      "pages": [
        28,
        29,
        30
      ],
      "title": [
        "Powerco 电力运输例题",
        "Powerco electricity transportation"
      ],
      "lecture": [
        "电厂供给 (35,50,40)，城市需求 (45,20,30,30)，单位均百万 kWh。费用矩阵 [[8,6,10,9],[9,12,13,7],[14,9,16,5]]。供需总量均为 125；以 xᵢⱼ 表示电厂 i 发往城市 j 的量，使用上一卡片行列平衡式。课件未给数值最优解，第 30 页仅为现场编程提示。",
        "Plant supplies are (35,50,40), city demands (45,20,30,30), in million kWh. Costs are [[8,6,10,9],[9,12,13,7],[14,9,16,5]]. Both totals are 125. Use row/column balances for xᵢⱼ. No numerical optimum is supplied; page 30 is a coding prompt."
      ],
      "formulas": [],
      "explanation": [
        "第 30 页写“unbalanced”，但前页表格本身平衡；可能是课堂改变数据，PDF 没有记录，不能自行假定新的供需。",
        "Page 30 says “unbalanced” although the preceding data balance. A classroom data change may have been intended, but none is recorded and no new values are assumed."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k09"
    },
    {
      "pages": [
        31,
        32
      ],
      "title": [
        "供需不平衡与虚拟节点",
        "Imbalance and dummy nodes"
      ],
      "lecture": [
        "总供给大于需求时加虚拟需求节点，吸收差额，虚拟运费为 0。总供给不足时原本要求全满足的模型不可行；若业务允许缺货，可加虚拟供给节点，并为未满足需求设置惩罚成本。两种结构见第 32 页图。",
        "Excess supply can be absorbed by a dummy demand node with zero shipping cost. Insufficient supply makes the full-demand model infeasible. If unmet demand is allowed, add a dummy supply node with shortage penalties. Page 32 illustrates both structures."
      ],
      "formulas": [],
      "explanation": [
        "虚拟供应不是凭空获得真实货物，代表缺货。必须在结果解释中单列。",
        "Dummy supply represents shortage, not real goods; report it separately."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k10"
    },
    {
      "pages": [
        33,
        34,
        35,
        36
      ],
      "title": [
        "指派问题与 Machineco",
        "Assignment and Machineco"
      ],
      "lecture": [
        "m 人分配给 m 项目，一人一项、一项一人，xᵢⱼ∈{0,1}。它是供需均为 1 的运输问题，因 TU 可用 0≤x≤1 的 LP 松弛求最优极点。Machineco 4×4 工时矩阵为 [[14,5,8,7],[2,12,6,5],[7,8,3,9],[2,4,6,10]]，每机完成一项工作。",
        "Assign m people to m projects, one per row and column, xᵢⱼ∈{0,1}. It is transportation with unit supplies/demands, so TU permits an LP relaxation 0≤x≤1. Machineco’s setup-time matrix is [[14,5,8,7],[2,12,6,5],[7,8,3,9],[2,4,6,10]], with one job per machine."
      ],
      "formulas": [
        "\\min\\sum_{i,j}c_{ij}x_{ij},\\quad\\sum_jx_{ij}=1,\\quad\\sum_ix_{ij}=1,\\quad0\\le x_{ij}\\le1"
      ],
      "explanation": [
        "补充：组合最优化一般可能困难，但这个标准指派结构是可高效求解的特殊情形。课件第 33 页“very difficult in general”不应误读为标准指派本身很难。",
        "General combinatorial optimization can be difficult, but standard assignment is an efficiently solvable special case; the page-33 general remark should not imply otherwise."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k11"
    },
    {
      "pages": [
        37,
        38,
        39
      ],
      "title": [
        "最短路：单位流模型",
        "Shortest paths as unit flows"
      ],
      "lecture": [
        "把起点供给设 1、终点需求设 1，其余节点供需为 0，最小化弧长总和，弧变量 0≤x≤1。第 37/39 页网络有 7 节点、12 弧，第 39 页给出完整关联矩阵。按矩阵列弧顺序为 (1,2),(1,3),(1,4),(2,4),(2,5),(3,2),(3,5),(3,6),(4,7),(5,4),(5,7),(6,7)，对应图上弧长 (6,2,16,5,4,7,3,8,3,4,10,1)。",
        "Set source supply 1, sink demand 1 and other balances zero; minimize arc length with 0≤x≤1. Pages 37/39 show seven nodes and twelve arcs; page 39 gives the full incidence matrix. Matrix-column arcs are (1,2),(1,3),(1,4),(2,4),(2,5),(3,2),(3,5),(3,6),(4,7),(5,4),(5,7),(6,7), with lengths (6,2,16,5,4,7,3,8,3,4,10,1)."
      ],
      "formulas": [
        "\\min c^Tx\\quad\\text{s.t. }Ax=(1,0,\\ldots,0,-1)^T,\\quad0\\le x\\le1"
      ],
      "explanation": [
        "TU 保证最优极点可取 0/1，不保证所有最优解都为整数。一般流还可能附带环；本例弧长全正，不会有有利环。按图可得路径 1→3→6→7 长 11；这是补充计算。",
        "TU permits an integral optimal vertex, not necessarily every optimum. General unit flows can contain cycles; all arc lengths here are positive, so cycles are not beneficial. The path 1→3→6→7 has length 11; this is an added calculation."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k12"
    },
    {
      "pages": [
        40,
        41,
        42
      ],
      "title": [
        "汽车更换：时间网络",
        "Car replacement as a time network"
      ],
      "lecture": [
        "新车 10000；车龄 1–6 年残值 (7000,6000,4000,3000,2000,1000)，逐年运行成本 (300,500,800,1200,1600,2200)。课件要求六年更换策略，第 41 页留作画图，第 42 页模型留白但给出成本 14400、在时点 2、4、6 更换的结果；x* 的 21 个分量缺少明确弧顺序。",
        "A new car costs 10000. Resale at ages 1–6 is (7000,6000,4000,3000,2000,1000); yearly operating costs are (300,500,800,1200,1600,2200). Page 41 asks students to draw the network; page 42 leaves the formulation blank but reports cost 14400 and replacement at times 2,4,6. Its 21-component solution lacks an explicit arc order."
      ],
      "formulas": [],
      "explanation": [
        "补充重建：用时点 0…6 作节点，弧 i→j 表示持有 j−i 年，费用=10000+累计运行费−该车龄残值。持有两年费用 10000+300+500−6000=4800，三段合计 14400。课件“已有新车”的初始成本若视为沉没成本，报告金额会相差常数；需按课堂计价口径核对。",
        "Added reconstruction: nodes are times 0…6; arc i→j means holding for j−i years, cost=10000+cumulative operation−resale. Two years cost 4800; three intervals cost 14400. Treating the already-owned initial car as sunk cost changes the reported total by a constant; confirm the classroom accounting convention."
      ],
      "terms": [],
      "review": [
        "第 41–42 页缺少课堂网络和完整模型；不把补充弧编号冒充课件编号。",
        "Pages 41–42 omit the classroom network and full formulation; no invented arc order is attributed to the slides."
      ],
      "id": "etf5248-l6-k13"
    },
    {
      "pages": [
        43,
        44
      ],
      "title": [
        "最大流与回流弧转换",
        "Maximum flow and return-arc conversion"
      ],
      "lecture": [
        "最大化起点到终点的净流量 t，守恒 Ax=tb，其中 b=(1,0,…,0,−1)。令原弧成本 0，再加终点→起点的弧，容量无穷、成本 −1，就转为最小费用环流；扩展矩阵 [A −b] 仍是关联矩阵。",
        "Maximize net source-to-sink flow t with Ax=tb, b=(1,0,…,0,−1). Assign zero original costs and add a sink-to-source arc with infinite capacity and cost −1. This produces minimum-cost circulation with incidence matrix [A −b]."
      ],
      "formulas": [
        "\\max t\\quad\\text{s.t. }Ax=tb,\\quad l\\le x\\le u",
        "\\min -t\\quad\\text{s.t. }[A\\ {-b}]\\binom{x}{t}=0"
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
      "id": "etf5248-l6-k14"
    },
    {
      "pages": [
        45,
        46,
        47
      ],
      "title": [
        "Sunco 管道最大流与总结",
        "Sunco pipeline maximum flow and recap"
      ],
      "lecture": [
        "图上弧容量：1→2 为 2，1→3 为 3，2→3 为 3，2→4 为 4，3→5 为 2，4→5 为 1。求 1 到 5 每小时最大输油量；第 46 页画出 5→1 的负成本回流弧。总结指出网络流可用通用 LP 或专门算法（network simplex、运输单纯形、Ford–Fulkerson、Dijkstra 等）。",
        "Arc capacities are 1→2:2, 1→3:3, 2→3:3, 2→4:4, 3→5:2, 4→5:1. Maximize hourly flow from 1 to 5. Page 46 adds the negative-cost return arc 5→1. Network flows can use general LP or specialized methods such as network/transportation simplex, Ford–Fulkerson and Dijkstra."
      ],
      "formulas": [],
      "explanation": [
        "补充求解：终点入弧容量合计 2+1=3 是上界；沿 1→3→5 送 2，沿 1→2→4→5 送 1 达到它，所以最优为 3。",
        "Added solution: sink incoming capacity is 2+1=3, an upper bound. Send 2 along 1→3→5 and 1 along 1→2→4→5 to attain it, proving optimality."
      ],
      "terms": [],
      "review": [
        "",
        ""
      ],
      "id": "etf5248-l6-k15"
    }
  ],
  "summary": [
    "统一模型是 min cᵀx、Ax=b、l≤x≤u。整数结论依赖 TU、整数供需和整数有限界。先核对弧方向与单位，再解释解。",
    "The common model is min cᵀx with Ax=b and l≤x≤u. Integrality depends on TU, integral balances and finite bounds. Check directions and units before interpreting solutions."
  ],
  "exercises": [
    {
      "question": [
        "供给总量 80、需求 70，虚拟需求是多少？",
        "Supply totals 80 and demand 70. What dummy demand is needed?"
      ],
      "answer": [
        "10，零成本表示未实际运出的剩余量。",
        "10; zero cost represents unused supply rather than real shipment."
      ],
      "pages": [
        31
      ]
    },
    {
      "question": [
        "TU 矩阵配上容量 0.5，是否保证整数极点？",
        "Does TU with capacity 0.5 guarantee integral vertices?"
      ],
      "answer": [
        "不保证；有限界也必须为整数。",
        "No; finite bounds must also be integral."
      ],
      "pages": [
        17
      ]
    }
  ],
  "reviewPages": [
    {
      "pages": [
        3,
        4,
        5,
        6
      ],
      "reason": [
        "密集航线与人物网络仅保留原图，细节没有逐边转录。",
        "Dense route/person networks are retained visually without edge-by-edge transcription."
      ]
    },
    {
      "pages": [
        30
      ],
      "reason": [
        "无现场代码，“不平衡”提示与前页平衡数据不同。",
        "No live code; the unbalanced prompt differs from the balanced preceding data."
      ]
    },
    {
      "pages": [
        41,
        42
      ],
      "reason": [
        "网络与模型留白，解向量没有弧顺序；初始车成本口径需课堂核对。",
        "Network/formulation are blank, solution arc order is absent, and initial-cost convention needs checking."
      ]
    }
  ]
};
