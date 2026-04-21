const mathsLesson1 = [
    // 1–10
    { question: "Euclid’s Division Lemma states:", options: { A: "a = b + r", B: "a = bq + r", C: "a = br + q", D: "a = q + r" }, answer: "B" },
    { question: "In Euclid’s lemma, r satisfies:", options: { A: "r ≥ b", B: "r < b", C: "r = b", D: "r > a" }, answer: "B" },
    { question: "If a = 45, b = 6 → r = ?", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "C" },
    { question: "First step to find HCF using Euclid algorithm:", options: { A: "Multiply", B: "Divide", C: "Add", D: "Subtract" }, answer: "B" },
    { question: "HCF of 135 and 225 is:", options: { A: "15", B: "30", C: "45", D: "75" }, answer: "C" },
    { question: "If remainder becomes 0, last divisor is:", options: { A: "LCM", B: "HCF", C: "Sum", D: "Product" }, answer: "B" },
    { question: "Euclid algorithm is based on:", options: { A: "Addition", B: "Repeated division", C: "Subtraction", D: "Multiplication" }, answer: "B" },
    { question: "HCF of consecutive integers is:", options: { A: "0", B: "1", C: "2", D: "Depends" }, answer: "B" },
    { question: "If a divides b exactly → HCF =", options: { A: "a", B: "b", C: "1", D: "0" }, answer: "A" },
    { question: "HCF of 0 and a number is:", options: { A: "0", B: "That number", C: "1", D: "Undefined" }, answer: "B" },
  
    // 11–20
    { question: "HCF of 121 and 11 is:", options: { A: "1", B: "11", C: "121", D: "0" }, answer: "B" },
    { question: "Euclid lemma is used to find:", options: { A: "LCM", B: "HCF", C: "Square root", D: "Cube" }, answer: "B" },
    { question: "If a = bq → r =", options: { A: "1", B: "0", C: "b", D: "q" }, answer: "B" },
    { question: "Largest number dividing two numbers exactly is:", options: { A: "LCM", B: "HCF", C: "Product", D: "Sum" }, answer: "B" },
    { question: "If HCF = 1 → numbers are:", options: { A: "Equal", B: "Prime", C: "Co-prime", D: "Composite" }, answer: "C" },
    { question: "Every composite number can be written as:", options: { A: "Sum", B: "Product of primes", C: "Difference", D: "Division" }, answer: "B" },
    { question: "Prime factorization of 180:", options: { A: "2²×3²×5", B: "2×3×5", C: "2³×3²", D: "3²×5" }, answer: "A" },
    { question: "72 =", options: { A: "2³×3²", B: "2²×3³", C: "6²", D: "8×9" }, answer: "A" },
    { question: "Fundamental theorem ensures:", options: { A: "Multiple factorization", B: "Unique factorization", C: "No factorization", D: "Random factorization" }, answer: "B" },
    { question: "Prime numbers have:", options: { A: "1 factor", B: "2 factors", C: "3 factors", D: "Infinite" }, answer: "B" },
  
    // 21–30
    { question: "1 is:", options: { A: "Prime", B: "Composite", C: "Neither", D: "Rational" }, answer: "C" },
    { question: "Smallest composite number:", options: { A: "2", B: "3", C: "4", D: "1" }, answer: "C" },
    { question: "Largest prime factor of 100:", options: { A: "2", B: "5", C: "10", D: "20" }, answer: "B" },
    { question: "84 =", options: { A: "2²×3×7", B: "2×3×7", C: "4×21", D: "6×14" }, answer: "A" },
    { question: "Product of primes is:", options: { A: "Prime", B: "Composite", C: "Irrational", D: "Whole" }, answer: "B" },
    { question: "Factorization of 49:", options: { A: "7²", B: "2×7", C: "14×3", D: "1×49" }, answer: "A" },
    { question: "Prime factors of 60:", options: { A: "2,3,5", B: "2,5", C: "3,5", D: "2,3" }, answer: "A" },
    { question: "121 is:", options: { A: "Prime", B: "Composite", C: "Irrational", D: "Whole" }, answer: "B" },
    { question: "Unique factorization applies to:", options: { A: "Rational", B: "Natural numbers", C: "Irrational", D: "Whole" }, answer: "B" },
    { question: "Product of two primes is always:", options: { A: "Prime", B: "Composite", C: "Irrational", D: "Integer" }, answer: "B" },
  
    // 31–40
    { question: "LCM × HCF =", options: { A: "Sum", B: "Product", C: "Difference", D: "Division" }, answer: "B" },
    { question: "HCF of 24, 36 is:", options: { A: "6", B: "12", C: "18", D: "24" }, answer: "B" },
    { question: "LCM of 24, 36 is:", options: { A: "36", B: "48", C: "72", D: "12" }, answer: "C" },
    { question: "Co-prime numbers HCF:", options: { A: "0", B: "1", C: "Same", D: "Infinite" }, answer: "B" },
    { question: "LCM of co-primes =", options: { A: "1", B: "Product", C: "Sum", D: "Difference" }, answer: "B" },
    { question: "HCF of equal numbers =", options: { A: "1", B: "Same", C: "0", D: "Infinite" }, answer: "B" },
    { question: "LCM of equal numbers =", options: { A: "Same", B: "1", C: "0", D: "Double" }, answer: "A" },
    { question: "HCF always:", options: { A: "≥ numbers", B: "≤ numbers", C: "= numbers", D: "Random" }, answer: "B" },
    { question: "LCM always:", options: { A: "≤ numbers", B: "≥ numbers", C: "Random", D: "=1" }, answer: "B" },
    { question: "HCF of 18, 27 =", options: { A: "3", B: "6", C: "9", D: "12" }, answer: "C" },
  
    // 41–50
    { question: "LCM of 18, 27 =", options: { A: "27", B: "54", C: "81", D: "36" }, answer: "B" },
    { question: "If one number divides another → LCM =", options: { A: "Bigger number", B: "Smaller", C: "1", D: "0" }, answer: "A" },
    { question: "HCF of 7, 11 =", options: { A: "1", B: "7", C: "11", D: "77" }, answer: "A" },
    { question: "LCM of 7, 11 =", options: { A: "77", B: "1", C: "18", D: "7" }, answer: "A" },
    { question: "HCF of 15, 25 =", options: { A: "5", B: "10", C: "15", D: "25" }, answer: "A" },
    { question: "LCM of 15, 25 =", options: { A: "75", B: "50", C: "100", D: "25" }, answer: "A" },
    { question: "HCF of 36, 48 =", options: { A: "6", B: "12", C: "18", D: "24" }, answer: "B" },
    { question: "LCM of 36, 48 =", options: { A: "72", B: "96", C: "144", D: "48" }, answer: "C" },
    { question: "HCF is greatest:", options: { A: "Factor", B: "Multiple", C: "Prime", D: "Rational" }, answer: "A" },
    { question: "LCM is smallest:", options: { A: "Factor", B: "Multiple", C: "Prime", D: "Whole" }, answer: "B" },
  
    // 51–80
    { question: "√2 is:", options: { A: "Rational", B: "Irrational", C: "Integer", D: "Whole" }, answer: "B" },
    { question: "√4 is:", options: { A: "Irrational", B: "Rational", C: "Prime", D: "Composite" }, answer: "B" },
    { question: "Sum of rational + irrational:", options: { A: "Rational", B: "Irrational", C: "Integer", D: "Whole" }, answer: "B" },
    { question: "Product rational × irrational:", options: { A: "Rational", B: "Irrational", C: "Prime", D: "Whole" }, answer: "B" },
    { question: "1/8 is:", options: { A: "Terminating", B: "Non-terminating", C: "Irrational", D: "Whole" }, answer: "A" },
    { question: "1/3 is:", options: { A: "Terminating", B: "Repeating", C: "Integer", D: "Whole" }, answer: "B" },
    { question: "π is:", options: { A: "Rational", B: "Irrational", C: "Integer", D: "Whole" }, answer: "B" },
    { question: "0.125 is:", options: { A: "Terminating", B: "Non-terminating", C: "Irrational", D: "Whole" }, answer: "A" },
    { question: "0.333… is:", options: { A: "Terminating", B: "Repeating", C: "Irrational", D: "Whole" }, answer: "B" },
    { question: "Denominator 6 → decimal:", options: { A: "Terminating", B: "Repeating", C: "Integer", D: "Whole" }, answer: "B" },
    { question: "√7 is:", options: { A: "Rational", B: "Irrational", C: "Integer", D: "Whole" }, answer: "B" },
    { question: "22/7 is:", options: { A: "Irrational", B: "Rational", C: "Integer", D: "Whole" }, answer: "B" },
    { question: "√16 is:", options: { A: "Rational", B: "Irrational", C: "Prime", D: "Whole" }, answer: "A" },
    { question: "0 is:", options: { A: "Rational", B: "Irrational", C: "Prime", D: "Composite" }, answer: "A" },
    { question: "Negative integers are:", options: { A: "Rational", B: "Irrational", C: "Prime", D: "Whole" }, answer: "A" }
  ];

  
  const mathsLesson2 = [
    // 1–10 Basics
    { question: "A polynomial in one variable has:", options: { A: "One variable", B: "Two variables", C: "Three variables", D: "No variable" }, answer: "A" },
    { question: "Degree of polynomial 3x² + 5x + 1:", options: { A: "1", B: "2", C: "3", D: "0" }, answer: "B" },
    { question: "Constant polynomial has degree:", options: { A: "0", B: "1", C: "2", D: "Undefined" }, answer: "A" },
    { question: "Zero polynomial degree is:", options: { A: "0", B: "1", C: "Not defined", D: "2" }, answer: "C" },
    { question: "Linear polynomial degree:", options: { A: "1", B: "2", C: "3", D: "0" }, answer: "A" },
    { question: "Quadratic polynomial degree:", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "B" },
    { question: "Cubic polynomial degree:", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "C" },
    { question: "Example of polynomial:", options: { A: "1/x", B: "√x", C: "x²+2x+1", D: "1/x²" }, answer: "C" },
    { question: "Coefficient of x² in 4x²+3x:", options: { A: "3", B: "4", C: "2", D: "1" }, answer: "B" },
    { question: "Constant term in x²+5x+6:", options: { A: "5", B: "6", C: "1", D: "0" }, answer: "B" },
  
    // 11–20 Zeros
    { question: "Zero of polynomial means:", options: { A: "Value making polynomial zero", B: "Coefficient", C: "Degree", D: "Constant" }, answer: "A" },
    { question: "Number of zeros of linear polynomial:", options: { A: "1", B: "2", C: "3", D: "0" }, answer: "A" },
    { question: "Number of zeros of quadratic polynomial:", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "B" },
    { question: "Zeros of x²-5x+6:", options: { A: "2,3", B: "1,6", C: "3,4", D: "2,4" }, answer: "A" },
    { question: "Zero of 2x+4:", options: { A: "-2", B: "2", C: "4", D: "0" }, answer: "A" },
    { question: "If p(x)=x²-4, zeros are:", options: { A: "±2", B: "±4", C: "2", D: "4" }, answer: "A" },
    { question: "Number of zeros of cubic:", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "C" },
    { question: "Zeros of x²-9:", options: { A: "±3", B: "±9", C: "3", D: "9" }, answer: "A" },
    { question: "Zero of constant polynomial:", options: { A: "0", B: "None", C: "1", D: "2" }, answer: "B" },
    { question: "Zero polynomial has:", options: { A: "Infinite zeros", B: "One zero", C: "Two zeros", D: "None" }, answer: "A" },
  
    // 21–30 Graphs
    { question: "Graph of linear polynomial is:", options: { A: "Line", B: "Circle", C: "Parabola", D: "Curve" }, answer: "A" },
    { question: "Graph of quadratic polynomial:", options: { A: "Line", B: "Circle", C: "Parabola", D: "Ellipse" }, answer: "C" },
    { question: "Number of zeros =:", options: { A: "y-intercepts", B: "x-intercepts", C: "Slope", D: "Origin" }, answer: "B" },
    { question: "Graph crossing x-axis gives:", options: { A: "Zeros", B: "Degree", C: "Constant", D: "Coefficient" }, answer: "A" },
    { question: "If graph does not cut x-axis:", options: { A: "1 zero", B: "2 zeros", C: "No real zero", D: "Infinite" }, answer: "C" },
    { question: "If graph touches x-axis:", options: { A: "2 zeros", B: "1 zero", C: "No zero", D: "Infinite" }, answer: "B" },
    { question: "Max zeros of degree n polynomial:", options: { A: "n", B: "n+1", C: "n-1", D: "2n" }, answer: "A" },
    { question: "Graph of x²+1:", options: { A: "Cuts x-axis", B: "Touches", C: "Does not cut", D: "Line" }, answer: "C" },
    { question: "Graph of x²:", options: { A: "Touches x-axis", B: "Cuts twice", C: "No cut", D: "Line" }, answer: "A" },
    { question: "Graph of x:", options: { A: "Line", B: "Curve", C: "Circle", D: "Parabola" }, answer: "A" },
  
    // 31–40 Relations
    { question: "Sum of zeros of ax²+bx+c:", options: { A: "-b/a", B: "c/a", C: "b/a", D: "-c/a" }, answer: "A" },
    { question: "Product of zeros:", options: { A: "c/a", B: "-b/a", C: "b/a", D: "-c/a" }, answer: "A" },
    { question: "For x²-5x+6, sum:", options: { A: "5", B: "-5", C: "6", D: "-6" }, answer: "A" },
    { question: "Product:", options: { A: "6", B: "5", C: "-5", D: "-6" }, answer: "A" },
    { question: "If α,β zeros → α+β=", options: { A: "-b/a", B: "c/a", C: "b/a", D: "a/b" }, answer: "A" },
    { question: "αβ=", options: { A: "c/a", B: "b/a", C: "-b/a", D: "a/c" }, answer: "A" },
    { question: "For 2x²-3x+1 sum:", options: { A: "3/2", B: "-3/2", C: "1", D: "2" }, answer: "B" },
    { question: "Product:", options: { A: "1/2", B: "-1/2", C: "2", D: "1" }, answer: "A" },
    { question: "If α+β=5, αβ=6 polynomial:", options: { A: "x²-5x+6", B: "x²+5x+6", C: "x²-6x+5", D: "x²+6x+5" }, answer: "A" },
    { question: "General quadratic form:", options: { A: "ax²+bx+c", B: "ax+b", C: "ax³", D: "a+b" }, answer: "A" },
  
    // 41–50 Factor Theorem
    { question: "If p(a)=0 then:", options: { A: "x-a is factor", B: "x+a factor", C: "No factor", D: "Constant" }, answer: "A" },
    { question: "Factor of x²-4:", options: { A: "x-2", B: "x+2", C: "Both", D: "None" }, answer: "C" },
    { question: "If p(2)=0 → factor:", options: { A: "x-2", B: "x+2", C: "2x", D: "x²" }, answer: "A" },
    { question: "Factor of x²-5x+6:", options: { A: "(x-2)(x-3)", B: "(x+2)(x+3)", C: "(x-1)(x-6)", D: "None" }, answer: "A" },
    { question: "Factor theorem is used to:", options: { A: "Find roots", B: "Add", C: "Multiply", D: "Divide" }, answer: "A" },
    { question: "If x-1 is factor, p(1)=:", options: { A: "1", B: "0", C: "2", D: "-1" }, answer: "B" },
    { question: "If x+1 factor, p(-1)=:", options: { A: "0", B: "1", C: "2", D: "-2" }, answer: "A" },
    { question: "Factor of x²+5x+6:", options: { A: "(x+2)(x+3)", B: "(x-2)(x-3)", C: "(x+1)(x+6)", D: "None" }, answer: "A" },
    { question: "Factorization method gives:", options: { A: "Roots", B: "Degree", C: "Constant", D: "Graph" }, answer: "A" },
    { question: "x²-1 factors:", options: { A: "(x-1)(x+1)", B: "(x-1)²", C: "(x+1)²", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Polynomial can have:", options: { A: "Negative powers", B: "Only positive powers", C: "Fractions", D: "Roots" }, answer: "B" },
    { question: "Degree of 7:", options: { A: "0", B: "1", C: "2", D: "Undefined" }, answer: "A" },
    { question: "Highest power gives:", options: { A: "Degree", B: "Zero", C: "Factor", D: "Constant" }, answer: "A" },
    { question: "Polynomial of degree 1 has:", options: { A: "1 zero", B: "2 zeros", C: "3 zeros", D: "0" }, answer: "A" },
    { question: "Degree 2 has max:", options: { A: "2 zeros", B: "1", C: "3", D: "0" }, answer: "A" },
    { question: "Degree 3 has max:", options: { A: "3 zeros", B: "2", C: "1", D: "4" }, answer: "A" },
    { question: "Coefficient of x in 5x+2:", options: { A: "5", B: "2", C: "7", D: "1" }, answer: "A" },
    { question: "Constant in 5x+2:", options: { A: "5", B: "2", C: "7", D: "1" }, answer: "B" },
    { question: "Polynomial example:", options: { A: "1/x", B: "x²", C: "√x", D: "x⁻¹" }, answer: "B" },
    { question: "Zeros of x²:", options: { A: "0", B: "1", C: "2", D: "None" }, answer: "A" },
    { question: "p(x)=0 means:", options: { A: "Root", B: "Degree", C: "Factor", D: "Constant" }, answer: "A" },
    { question: "Graph x² intersects:", options: { A: "Once", B: "Twice", C: "None", D: "Infinite" }, answer: "A" },
    { question: "Graph x²-4 intersects:", options: { A: "Twice", B: "Once", C: "None", D: "Infinite" }, answer: "A" },
    { question: "Factor theorem works for:", options: { A: "All polynomials", B: "Only linear", C: "Only quadratic", D: "None" }, answer: "A" },
    { question: "x³ polynomial degree:", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "C" },
    { question: "Leading coefficient:", options: { A: "Highest degree coefficient", B: "Constant", C: "Middle term", D: "Zero" }, answer: "A" },
    { question: "x²+0x+1 constant:", options: { A: "1", B: "0", C: "2", D: "x" }, answer: "A" },
    { question: "Zeros of x²+1:", options: { A: "Real", B: "None real", C: "One", D: "Two" }, answer: "B" },
    { question: "Polynomial degree 0:", options: { A: "Constant", B: "Linear", C: "Quadratic", D: "Cubic" }, answer: "A" },
    { question: "Polynomial has finite terms:", options: { A: "True", B: "False", C: "Sometimes", D: "None" }, answer: "A" }
  ];

  
  const mathsLesson3 = [
    // 1–10 Basics
    { question: "A linear equation in two variables is:", options: { A: "ax + by + c = 0", B: "ax²+by=0", C: "x²+y²=0", D: "xy=0" }, answer: "A" },
    { question: "Number of variables:", options: { A: "1", B: "2", C: "3", D: "0" }, answer: "B" },
    { question: "Solution of equation means:", options: { A: "Value satisfying equation", B: "Constant", C: "Coefficient", D: "Graph" }, answer: "A" },
    { question: "Graph of linear equation:", options: { A: "Circle", B: "Line", C: "Parabola", D: "Curve" }, answer: "B" },
    { question: "Pair of equations means:", options: { A: "One equation", B: "Two equations", C: "Three equations", D: "None" }, answer: "B" },
    { question: "System solution means:", options: { A: "Common solution", B: "Different solutions", C: "No solution", D: "Constant" }, answer: "A" },
    { question: "Intersecting lines have:", options: { A: "One solution", B: "Two", C: "Infinite", D: "None" }, answer: "A" },
    { question: "Parallel lines have:", options: { A: "One solution", B: "No solution", C: "Infinite", D: "Two" }, answer: "B" },
    { question: "Coincident lines have:", options: { A: "One solution", B: "None", C: "Infinite", D: "Two" }, answer: "C" },
    { question: "Graph method uses:", options: { A: "Drawing lines", B: "Adding", C: "Multiplying", D: "Dividing" }, answer: "A" },
  
    // 11–20 Methods
    { question: "Substitution method means:", options: { A: "Replace variable", B: "Add equations", C: "Multiply", D: "Divide" }, answer: "A" },
    { question: "Elimination method means:", options: { A: "Remove variable", B: "Add variable", C: "Divide", D: "Multiply" }, answer: "A" },
    { question: "Cross multiplication is used for:", options: { A: "Solve equations", B: "Factorization", C: "Graphs", D: "Roots" }, answer: "A" },
    { question: "Best method for simple equations:", options: { A: "Substitution", B: "Graph", C: "None", D: "Trial" }, answer: "A" },
    { question: "Elimination removes:", options: { A: "Variable", B: "Constant", C: "Coefficient", D: "Equation" }, answer: "A" },
    { question: "Graph method gives:", options: { A: "Exact", B: "Approximate", C: "None", D: "Infinite" }, answer: "B" },
    { question: "Algebraic methods give:", options: { A: "Exact", B: "Approximate", C: "None", D: "Graph" }, answer: "A" },
    { question: "Equation pair example:", options: { A: "x+y=1", B: "x+y=1, x-y=2", C: "x²+y=1", D: "xy=1" }, answer: "B" },
    { question: "Solution is intersection point:", options: { A: "True", B: "False", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Two equations intersect:", options: { A: "One point", B: "Two", C: "Infinite", D: "None" }, answer: "A" },
  
    // 21–30 Solving
    { question: "Solve: x+y=5, x-y=1 → x=?", options: { A: "3", B: "2", C: "4", D: "5" }, answer: "A" },
    { question: "y=?", options: { A: "2", B: "1", C: "3", D: "4" }, answer: "A" },
    { question: "Solve: 2x+y=5, x+y=3 → x=?", options: { A: "2", B: "1", C: "3", D: "4" }, answer: "A" },
    { question: "y=?", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "A" },
    { question: "Solve: x+y=4, x-y=0 → x=?", options: { A: "2", B: "1", C: "4", D: "3" }, answer: "A" },
    { question: "y=?", options: { A: "2", B: "1", C: "3", D: "4" }, answer: "A" },
    { question: "Solve: x+y=6, x-y=2 → x=?", options: { A: "4", B: "3", C: "2", D: "5" }, answer: "A" },
    { question: "y=?", options: { A: "2", B: "3", C: "4", D: "1" }, answer: "A" },
    { question: "Solution of system is:", options: { A: "Ordered pair", B: "Number", C: "Constant", D: "Line" }, answer: "A" },
    { question: "Solution form:", options: { A: "(x,y)", B: "x+y", C: "xy", D: "None" }, answer: "A" },
  
    // 31–40 Consistency
    { question: "a1/a2 ≠ b1/b2 →", options: { A: "Intersecting", B: "Parallel", C: "Coincident", D: "None" }, answer: "A" },
    { question: "a1/a2 = b1/b2 ≠ c1/c2 →", options: { A: "Parallel", B: "Intersect", C: "Coincident", D: "None" }, answer: "A" },
    { question: "a1/a2 = b1/b2 = c1/c2 →", options: { A: "Coincident", B: "Parallel", C: "Intersect", D: "None" }, answer: "A" },
    { question: "Consistent system has:", options: { A: "Solution", B: "No solution", C: "Infinite", D: "None" }, answer: "A" },
    { question: "Inconsistent system:", options: { A: "No solution", B: "One", C: "Infinite", D: "Two" }, answer: "A" },
    { question: "Dependent system:", options: { A: "Infinite", B: "One", C: "None", D: "Two" }, answer: "A" },
    { question: "Independent system:", options: { A: "One solution", B: "Infinite", C: "None", D: "Two" }, answer: "A" },
    { question: "Parallel lines:", options: { A: "No meet", B: "Meet once", C: "Infinite", D: "Coincident" }, answer: "A" },
    { question: "Coincident lines:", options: { A: "Same line", B: "Parallel", C: "Intersect", D: "None" }, answer: "A" },
    { question: "Intersecting lines:", options: { A: "One point", B: "Infinite", C: "None", D: "Same" }, answer: "A" },
  
    // 41–50 Word Problems
    { question: "Two numbers sum 10, difference 2 → numbers:", options: { A: "6,4", B: "5,5", C: "7,3", D: "8,2" }, answer: "A" },
    { question: "Sum 8, diff 0 → numbers:", options: { A: "4,4", B: "5,3", C: "6,2", D: "7,1" }, answer: "A" },
    { question: "Cost equation uses:", options: { A: "Variables", B: "Constants", C: "Graphs", D: "None" }, answer: "A" },
    { question: "Age problems use:", options: { A: "Linear equations", B: "Quadratic", C: "AP", D: "None" }, answer: "A" },
    { question: "Distance-speed problems:", options: { A: "Linear equations", B: "Sets", C: "Polynomials", D: "None" }, answer: "A" },
    { question: "Word problems need:", options: { A: "Equation formation", B: "Graph", C: "Table", D: "None" }, answer: "A" },
    { question: "Variables represent:", options: { A: "Unknowns", B: "Constants", C: "Graphs", D: "Lines" }, answer: "A" },
    { question: "Two unknowns need:", options: { A: "Two equations", B: "One", C: "Three", D: "None" }, answer: "A" },
    { question: "Solution satisfies:", options: { A: "Both equations", B: "One", C: "None", D: "Random" }, answer: "A" },
    { question: "Substitution best when:", options: { A: "Simple variable", B: "Complex", C: "Graph", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Equation 2x+3y=6 is:", options: { A: "Linear", B: "Quadratic", C: "Cubic", D: "None" }, answer: "A" },
    { question: "Graph passes through:", options: { A: "Infinite points", B: "One", C: "Two", D: "None" }, answer: "A" },
    { question: "Solution of pair is:", options: { A: "Point", B: "Line", C: "Curve", D: "Circle" }, answer: "A" },
    { question: "Coefficient of x:", options: { A: "Number with x", B: "Constant", C: "Variable", D: "None" }, answer: "A" },
    { question: "Constant term:", options: { A: "Number alone", B: "Variable", C: "Coefficient", D: "None" }, answer: "A" },
    { question: "Linear equation has degree:", options: { A: "1", B: "2", C: "3", D: "0" }, answer: "A" },
    { question: "Solution check:", options: { A: "Substitute values", B: "Graph", C: "Multiply", D: "Divide" }, answer: "A" },
    { question: "Graph intersection gives:", options: { A: "Solution", B: "Constant", C: "Coefficient", D: "None" }, answer: "A" },
    { question: "Parallel slope:", options: { A: "Equal", B: "Different", C: "Zero", D: "None" }, answer: "A" },
    { question: "Intersect slope:", options: { A: "Different", B: "Equal", C: "Zero", D: "None" }, answer: "A" },
    { question: "Coincident slope:", options: { A: "Equal", B: "Different", C: "Zero", D: "None" }, answer: "A" },
    { question: "Equation form:", options: { A: "ax+by+c=0", B: "x²+y²", C: "xy", D: "None" }, answer: "A" },
    { question: "Two equations solve:", options: { A: "Two variables", B: "One", C: "Three", D: "None" }, answer: "A" },
    { question: "Check solution:", options: { A: "Both eq", B: "One", C: "None", D: "Random" }, answer: "A" },
    { question: "Graph gives visual:", options: { A: "Solution", B: "Constant", C: "Coefficient", D: "None" }, answer: "A" },
    { question: "Equation pair can be:", options: { A: "Consistent", B: "Inconsistent", C: "Both", D: "None" }, answer: "C" },
    { question: "Linear eq has:", options: { A: "Straight line", B: "Curve", C: "Circle", D: "None" }, answer: "A" },
    { question: "Two lines always:", options: { A: "Intersect/parallel/coincident", B: "Only intersect", C: "Only parallel", D: "None" }, answer: "A" },
    { question: "Solution type depends on:", options: { A: "Coefficients", B: "Constant", C: "Graph", D: "None" }, answer: "A" },
    { question: "Pair eq used in:", options: { A: "Real life problems", B: "Only theory", C: "None", D: "Random" }, answer: "A" }
  ];


  const mathsLesson4 = [
    // 1–10 Basics
    { question: "Standard form of quadratic equation:", options: { A: "ax²+bx+c=0", B: "ax+b=0", C: "x²+y²=0", D: "xy=0" }, answer: "A" },
    { question: "Degree of quadratic equation:", options: { A: "1", B: "2", C: "3", D: "0" }, answer: "B" },
    { question: "a ≠ 0 in quadratic because:", options: { A: "Otherwise linear", B: "Otherwise cubic", C: "No solution", D: "None" }, answer: "A" },
    { question: "Example of quadratic:", options: { A: "x²+3x+2", B: "2x+1", C: "x³", D: "1/x" }, answer: "A" },
    { question: "Coefficient of x²:", options: { A: "a", B: "b", C: "c", D: "x" }, answer: "A" },
    { question: "Constant term:", options: { A: "a", B: "b", C: "c", D: "x" }, answer: "C" },
    { question: "Number of roots:", options: { A: "2", B: "1", C: "3", D: "0" }, answer: "A" },
    { question: "Roots means:", options: { A: "Solutions", B: "Constants", C: "Coefficients", D: "Graph" }, answer: "A" },
    { question: "Equation x²=0 has roots:", options: { A: "0,0", B: "1,1", C: "0,1", D: "None" }, answer: "A" },
    { question: "x²-4=0 roots:", options: { A: "±2", B: "±4", C: "2", D: "4" }, answer: "A" },
  
    // 11–20 Methods
    { question: "Factorization method:", options: { A: "Split terms", B: "Add", C: "Multiply only", D: "Divide" }, answer: "A" },
    { question: "Solve x²-5x+6=0:", options: { A: "2,3", B: "1,6", C: "3,4", D: "2,4" }, answer: "A" },
    { question: "Completing square method:", options: { A: "Make perfect square", B: "Multiply", C: "Divide", D: "Add only" }, answer: "A" },
    { question: "Quadratic formula used when:", options: { A: "Factorization fails", B: "Always", C: "Never", D: "Graph" }, answer: "A" },
    { question: "Formula contains:", options: { A: "√", B: "+", C: "-", D: "All" }, answer: "D" },
    { question: "Formula gives:", options: { A: "Exact roots", B: "Approx", C: "Graph", D: "None" }, answer: "A" },
    { question: "Solve x²-1=0:", options: { A: "±1", B: "±2", C: "1", D: "2" }, answer: "A" },
    { question: "Solve x²-9=0:", options: { A: "±3", B: "±9", C: "3", D: "9" }, answer: "A" },
    { question: "Solve x²+5x+6=0:", options: { A: "-2,-3", B: "2,3", C: "-1,-6", D: "1,6" }, answer: "A" },
    { question: "Solve x²+7x+10=0:", options: { A: "-2,-5", B: "2,5", C: "-1,-10", D: "1,10" }, answer: "A" },
  
    // 21–30 Discriminant
    { question: "Discriminant D:", options: { A: "b²-4ac", B: "b²+4ac", C: "4ac-b²", D: "a²+b²" }, answer: "A" },
    { question: "If D>0:", options: { A: "Real distinct", B: "Equal", C: "Imaginary", D: "None" }, answer: "A" },
    { question: "If D=0:", options: { A: "Equal roots", B: "Distinct", C: "Imaginary", D: "None" }, answer: "A" },
    { question: "If D<0:", options: { A: "Imaginary", B: "Real", C: "Equal", D: "None" }, answer: "A" },
    { question: "x²-4x+4 → D:", options: { A: "0", B: "16", C: "8", D: "4" }, answer: "A" },
    { question: "x²+1 → D:", options: { A: "-4", B: "4", C: "0", D: "1" }, answer: "A" },
    { question: "x²-5x+6 → D:", options: { A: "1", B: "25", C: "4", D: "36" }, answer: "A" },
    { question: "Nature depends on:", options: { A: "D", B: "a", C: "b", D: "c" }, answer: "A" },
    { question: "D positive gives:", options: { A: "Two roots", B: "One", C: "None", D: "Infinite" }, answer: "A" },
    { question: "D zero gives:", options: { A: "One root", B: "Two", C: "None", D: "Infinite" }, answer: "A" },
  
    // 31–40 Relations
    { question: "Sum of roots:", options: { A: "-b/a", B: "c/a", C: "b/a", D: "-c/a" }, answer: "A" },
    { question: "Product of roots:", options: { A: "c/a", B: "-b/a", C: "b/a", D: "-c/a" }, answer: "A" },
    { question: "For x²-5x+6 sum:", options: { A: "5", B: "6", C: "-5", D: "-6" }, answer: "A" },
    { question: "Product:", options: { A: "6", B: "5", C: "-5", D: "-6" }, answer: "A" },
    { question: "If α,β roots → α+β:", options: { A: "-b/a", B: "c/a", C: "b/a", D: "a/b" }, answer: "A" },
    { question: "αβ:", options: { A: "c/a", B: "b/a", C: "-b/a", D: "a/c" }, answer: "A" },
    { question: "If sum=7 product=10 eq:", options: { A: "x²-7x+10", B: "x²+7x+10", C: "x²-10x+7", D: "None" }, answer: "A" },
    { question: "General roots form:", options: { A: "Formula", B: "Graph", C: "Table", D: "None" }, answer: "A" },
    { question: "Quadratic always has:", options: { A: "2 roots", B: "1", C: "3", D: "0" }, answer: "A" },
    { question: "Roots depend on:", options: { A: "D", B: "Graph", C: "Constant", D: "None" }, answer: "A" },
  
    // 41–50 Word Problems
    { question: "Product of two numbers 6 sum 5 →:", options: { A: "2,3", B: "1,5", C: "3,4", D: "2,4" }, answer: "A" },
    { question: "Area problems use:", options: { A: "Quadratic", B: "Linear", C: "Sets", D: "None" }, answer: "A" },
    { question: "Speed problems may form:", options: { A: "Quadratic", B: "Set", C: "Graph", D: "None" }, answer: "A" },
    { question: "Number problems use:", options: { A: "Quadratic", B: "Linear", C: "Sets", D: "None" }, answer: "A" },
    { question: "Equation formation:", options: { A: "Important", B: "Not needed", C: "Optional", D: "None" }, answer: "A" },
    { question: "Word problems require:", options: { A: "Understanding", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Roots represent:", options: { A: "Answers", B: "Variables", C: "Constants", D: "None" }, answer: "A" },
    { question: "Quadratic used in:", options: { A: "Real life", B: "Only theory", C: "None", D: "Random" }, answer: "A" },
    { question: "Equation solving step:", options: { A: "Simplify", B: "Skip", C: "Guess", D: "None" }, answer: "A" },
    { question: "Final answer form:", options: { A: "Values of x", B: "Equation", C: "Graph", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "x²+2x+1 roots:", options: { A: "-1,-1", B: "1,1", C: "-1,1", D: "None" }, answer: "A" },
    { question: "x²-2x+1 roots:", options: { A: "1,1", B: "-1,-1", C: "1,-1", D: "None" }, answer: "A" },
    { question: "Perfect square gives:", options: { A: "Equal roots", B: "Distinct", C: "None", D: "Infinite" }, answer: "A" },
    { question: "x²+4 has:", options: { A: "No real roots", B: "Two", C: "One", D: "Infinite" }, answer: "A" },
    { question: "Coefficient b is:", options: { A: "x term", B: "x² term", C: "Constant", D: "None" }, answer: "A" },
    { question: "Coefficient c is:", options: { A: "Constant", B: "x term", C: "x² term", D: "None" }, answer: "A" },
    { question: "Quadratic graph:", options: { A: "Parabola", B: "Line", C: "Circle", D: "None" }, answer: "A" },
    { question: "Vertex form relates to:", options: { A: "Graph", B: "Factor", C: "Sum", D: "None" }, answer: "A" },
    { question: "Maximum roots:", options: { A: "2", B: "1", C: "3", D: "0" }, answer: "A" },
    { question: "Equation always has:", options: { A: "Solution", B: "No solution", C: "Infinite", D: "None" }, answer: "A" },
    { question: "Real roots when:", options: { A: "D≥0", B: "D<0", C: "D=1", D: "None" }, answer: "A" },
    { question: "Imaginary when:", options: { A: "D<0", B: "D>0", C: "D=0", D: "None" }, answer: "A" },
    { question: "Quadratic always has:", options: { A: "Two values", B: "One", C: "Three", D: "None" }, answer: "A" },
    { question: "Equation root check:", options: { A: "Substitute", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Solving gives:", options: { A: "Roots", B: "Degree", C: "Graph", D: "None" }, answer: "A" },
    { question: "Important concept:", options: { A: "Discriminant", B: "Sets", C: "AP", D: "None" }, answer: "A" },
    { question: "Most used method:", options: { A: "Formula", B: "Guess", C: "Graph", D: "None" }, answer: "A" },
    { question: "Equation must be:", options: { A: "=0", B: "=1", C: "=2", D: "None" }, answer: "A" },
    { question: "Simplification needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Final roots depend on:", options: { A: "Coefficients", B: "Graph", C: "Guess", D: "None" }, answer: "A" }
  ];

  const mathsLesson5 = [
    // 1–10 Basics
    { question: "An AP has:", options: { A: "Constant difference", B: "Constant ratio", C: "Random numbers", D: "Squares" }, answer: "A" },
    { question: "Common difference is:", options: { A: "a₂-a₁", B: "a₂+a₁", C: "a₂×a₁", D: "a₂/a₁" }, answer: "A" },
    { question: "Example of AP:", options: { A: "2,4,6,8", B: "2,4,8,16", C: "1,3,9", D: "2,5,10" }, answer: "A" },
    { question: "First term is denoted by:", options: { A: "a", B: "d", C: "n", D: "S" }, answer: "A" },
    { question: "Common difference is denoted by:", options: { A: "d", B: "a", C: "n", D: "S" }, answer: "A" },
    { question: "AP: 5,8,11 → d:", options: { A: "3", B: "2", C: "5", D: "8" }, answer: "A" },
    { question: "AP: 7,4,1 → d:", options: { A: "-3", B: "3", C: "1", D: "7" }, answer: "A" },
    { question: "AP may have:", options: { A: "Negative d", B: "Only positive d", C: "Only zero", D: "None" }, answer: "A" },
    { question: "If d=0 → AP is:", options: { A: "Constant", B: "Increasing", C: "Decreasing", D: "None" }, answer: "A" },
    { question: "Sequence 1,3,5 is:", options: { A: "AP", B: "GP", C: "None", D: "Random" }, answer: "A" },
  
    // 11–20 nth term
    { question: "nth term formula:", options: { A: "a+(n-1)d", B: "a×d", C: "a+d", D: "ad" }, answer: "A" },
    { question: "Find 5th term: a=2,d=3:", options: { A: "14", B: "15", C: "13", D: "12" }, answer: "A" },
    { question: "Find 10th term: a=1,d=2:", options: { A: "19", B: "20", C: "18", D: "21" }, answer: "A" },
    { question: "If a=5,d=2,n=4 → term:", options: { A: "11", B: "12", C: "13", D: "14" }, answer: "A" },
    { question: "General term depends on:", options: { A: "a,d,n", B: "Only a", C: "Only d", D: "None" }, answer: "A" },
    { question: "Find aₙ when n=1:", options: { A: "a", B: "d", C: "0", D: "n" }, answer: "A" },
    { question: "AP: 3,7,11 → a₄:", options: { A: "15", B: "14", C: "13", D: "16" }, answer: "A" },
    { question: "If d negative → sequence:", options: { A: "Decreasing", B: "Increasing", C: "Constant", D: "Random" }, answer: "A" },
    { question: "If d positive → sequence:", options: { A: "Increasing", B: "Decreasing", C: "Constant", D: "None" }, answer: "A" },
    { question: "Find term: a=1,d=1,n=5:", options: { A: "5", B: "6", C: "4", D: "3" }, answer: "A" },
  
    // 21–30 Sum of n terms
    { question: "Sum formula:", options: { A: "n/2[2a+(n-1)d]", B: "a+(n-1)d", C: "nd", D: "n+a" }, answer: "A" },
    { question: "Sum of first n terms depends on:", options: { A: "a,d,n", B: "a only", C: "d only", D: "None" }, answer: "A" },
    { question: "Find sum: a=1,d=1,n=5:", options: { A: "15", B: "10", C: "20", D: "25" }, answer: "A" },
    { question: "Sum of 2,4,6,8:", options: { A: "20", B: "18", C: "22", D: "24" }, answer: "A" },
    { question: "If n=1 → sum:", options: { A: "a", B: "d", C: "0", D: "n" }, answer: "A" },
    { question: "Sum of first 10 natural numbers:", options: { A: "55", B: "50", C: "45", D: "60" }, answer: "A" },
    { question: "Sum formula alternative:", options: { A: "n/2(a+l)", B: "a+d", C: "nd", D: "n+a" }, answer: "A" },
    { question: "Last term is denoted by:", options: { A: "l", B: "a", C: "d", D: "n" }, answer: "A" },
    { question: "Sum depends on last term:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Find sum: a=2,d=2,n=4:", options: { A: "20", B: "16", C: "18", D: "22" }, answer: "A" },
  
    // 31–40 Finding terms
    { question: "Find d: 3,7,11:", options: { A: "4", B: "3", C: "2", D: "1" }, answer: "A" },
    { question: "Find a: 5,8,11:", options: { A: "5", B: "8", C: "11", D: "3" }, answer: "A" },
    { question: "Find nth term formula:", options: { A: "a+(n-1)d", B: "ad", C: "a+d", D: "n+a" }, answer: "A" },
    { question: "Find 3rd term: a=2,d=3:", options: { A: "8", B: "9", C: "7", D: "10" }, answer: "A" },
    { question: "Find term: a=10,d=-2,n=3:", options: { A: "6", B: "8", C: "4", D: "5" }, answer: "A" },
    { question: "Find a₆: a=1,d=2:", options: { A: "11", B: "12", C: "10", D: "9" }, answer: "A" },
    { question: "AP with d=0 is:", options: { A: "Constant", B: "Increasing", C: "Decreasing", D: "None" }, answer: "A" },
    { question: "Find missing term: 2,?,6:", options: { A: "4", B: "3", C: "5", D: "2" }, answer: "A" },
    { question: "Find missing term: 3,?,9:", options: { A: "6", B: "5", C: "4", D: "7" }, answer: "A" },
    { question: "AP property:", options: { A: "Middle term avg", B: "Multiply", C: "Divide", D: "None" }, answer: "A" },
  
    // 41–50 Word problems
    { question: "Sum of consecutive numbers:", options: { A: "AP", B: "GP", C: "None", D: "Random" }, answer: "A" },
    { question: "Number patterns use:", options: { A: "AP", B: "Set", C: "Graph", D: "None" }, answer: "A" },
    { question: "Money increase fixed:", options: { A: "AP", B: "GP", C: "None", D: "Random" }, answer: "A" },
    { question: "Staircase pattern:", options: { A: "AP", B: "GP", C: "None", D: "Random" }, answer: "A" },
    { question: "Daily savings fixed:", options: { A: "AP", B: "GP", C: "None", D: "Random" }, answer: "A" },
    { question: "Word problems need:", options: { A: "Equation formation", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Sum of odd numbers:", options: { A: "AP", B: "GP", C: "None", D: "Random" }, answer: "A" },
    { question: "Sum of even numbers:", options: { A: "AP", B: "GP", C: "None", D: "Random" }, answer: "A" },
    { question: "AP used in:", options: { A: "Real life", B: "Only theory", C: "None", D: "Random" }, answer: "A" },
    { question: "Important skill:", options: { A: "Identify a,d", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Find sum: 1+2+3+...+10:", options: { A: "55", B: "50", C: "45", D: "60" }, answer: "A" },
    { question: "Find sum: 2+4+6+...+10:", options: { A: "30", B: "28", C: "32", D: "26" }, answer: "A" },
    { question: "AP formula always includes:", options: { A: "n", B: "x", C: "y", D: "z" }, answer: "A" },
    { question: "Term depends on:", options: { A: "Position", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Sum grows:", options: { A: "With n", B: "Constant", C: "Decrease", D: "None" }, answer: "A" },
    { question: "AP is sequence:", options: { A: "Ordered", B: "Random", C: "None", D: "Graph" }, answer: "A" },
    { question: "Find term: a=3,d=3,n=3:", options: { A: "9", B: "6", C: "12", D: "15" }, answer: "A" },
    { question: "Find sum: a=3,d=3,n=3:", options: { A: "18", B: "15", C: "12", D: "9" }, answer: "A" },
    { question: "AP difference fixed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "n terms means:", options: { A: "Total terms", B: "First", C: "Last", D: "None" }, answer: "A" },
    { question: "AP always linear:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Term formula gives:", options: { A: "Position value", B: "Sum", C: "Graph", D: "None" }, answer: "A" },
    { question: "Sum formula gives:", options: { A: "Total", B: "Term", C: "Graph", D: "None" }, answer: "A" },
    { question: "First term matters:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "d affects:", options: { A: "Growth", B: "Nothing", C: "Graph", D: "None" }, answer: "A" },
    { question: "AP used in exams:", options: { A: "High weight", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Common mistake:", options: { A: "Wrong d", B: "Correct d", C: "Skip", D: "None" }, answer: "A" },
    { question: "Check answer:", options: { A: "Substitute", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "AP problems easy if:", options: { A: "Concept clear", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final answer depends on:", options: { A: "a,d,n", B: "Guess", C: "Skip", D: "None" }, answer: "A" }
  ];
  const mathsLesson6 = [
    // 1–10 Basics
    { question: "Triangle has sides:", options: { A: "3", B: "2", C: "4", D: "5" }, answer: "A" },
    { question: "Sum of angles:", options: { A: "180°", B: "90°", C: "360°", D: "270°" }, answer: "A" },
    { question: "Similar triangles have:", options: { A: "Same shape", B: "Same size", C: "Different shape", D: "None" }, answer: "A" },
    { question: "Congruent triangles have:", options: { A: "Same shape & size", B: "Only shape", C: "Only size", D: "None" }, answer: "A" },
    { question: "Symbol of similarity:", options: { A: "~", B: "=", C: "+", D: "-" }, answer: "A" },
    { question: "Symbol of congruence:", options: { A: "≅", B: "~", C: "=", D: "+" }, answer: "A" },
    { question: "Angle sum property:", options: { A: "180°", B: "360°", C: "90°", D: "None" }, answer: "A" },
    { question: "Triangle is polygon with:", options: { A: "3 sides", B: "4", C: "5", D: "6" }, answer: "A" },
    { question: "Right triangle has angle:", options: { A: "90°", B: "60°", C: "45°", D: "30°" }, answer: "A" },
    { question: "Hypotenuse is:", options: { A: "Largest side", B: "Smallest", C: "Equal", D: "None" }, answer: "A" },
  
    // 11–20 Similarity criteria
    { question: "AAA means:", options: { A: "Angle-Angle-Angle", B: "Side-Side", C: "Side-Angle", D: "None" }, answer: "A" },
    { question: "SAS means:", options: { A: "Side-Angle-Side", B: "Angle-Angle", C: "Side-Side", D: "None" }, answer: "A" },
    { question: "SSS means:", options: { A: "Side-Side-Side", B: "Angle-Angle", C: "Side-Angle", D: "None" }, answer: "A" },
    { question: "AAA gives:", options: { A: "Similarity", B: "Congruence", C: "None", D: "Both" }, answer: "A" },
    { question: "SAS gives:", options: { A: "Similarity", B: "Congruence", C: "None", D: "Both" }, answer: "A" },
    { question: "SSS gives:", options: { A: "Similarity", B: "Congruence", C: "None", D: "Both" }, answer: "A" },
    { question: "Similar triangles ratio:", options: { A: "Sides proportional", B: "Equal", C: "Random", D: "None" }, answer: "A" },
    { question: "Corresponding angles:", options: { A: "Equal", B: "Different", C: "Random", D: "None" }, answer: "A" },
    { question: "Similarity uses:", options: { A: "Ratios", B: "Addition", C: "Multiplication", D: "None" }, answer: "A" },
    { question: "Congruence uses:", options: { A: "Equality", B: "Ratios", C: "Graph", D: "None" }, answer: "A" },
  
    // 21–30 BPT (Basic Proportionality Theorem)
    { question: "BPT states:", options: { A: "Parallel line divides sides proportionally", B: "Angles equal", C: "Sides equal", D: "None" }, answer: "A" },
    { question: "BPT applies when:", options: { A: "Line parallel", B: "Perpendicular", C: "Intersect", D: "None" }, answer: "A" },
    { question: "If DE || BC:", options: { A: "AD/DB = AE/EC", B: "AD+DB", C: "Multiply", D: "None" }, answer: "A" },
    { question: "BPT gives:", options: { A: "Ratio", B: "Sum", C: "Product", D: "None" }, answer: "A" },
    { question: "Parallel line divides:", options: { A: "Sides", B: "Angles", C: "Area", D: "None" }, answer: "A" },
    { question: "BPT used in:", options: { A: "Proofs", B: "Graphs", C: "Sets", D: "None" }, answer: "A" },
    { question: "Reverse of BPT:", options: { A: "Also true", B: "False", C: "None", D: "Sometimes" }, answer: "A" },
    { question: "BPT requires:", options: { A: "Parallel lines", B: "Right angle", C: "Circle", D: "None" }, answer: "A" },
    { question: "Ratio form:", options: { A: "AD/DB", B: "AD+DB", C: "AD×DB", D: "None" }, answer: "A" },
    { question: "Used for:", options: { A: "Similarity", B: "Congruence", C: "None", D: "Graph" }, answer: "A" },
  
    // 31–40 Pythagoras
    { question: "Pythagoras theorem:", options: { A: "a²+b²=c²", B: "a+b=c", C: "a²-b²", D: "None" }, answer: "A" },
    { question: "Applies to:", options: { A: "Right triangle", B: "All", C: "None", D: "Circle" }, answer: "A" },
    { question: "Find hypotenuse: 3,4:", options: { A: "5", B: "6", C: "7", D: "8" }, answer: "A" },
    { question: "Find side: c=5,a=3:", options: { A: "4", B: "2", C: "3", D: "1" }, answer: "A" },
    { question: "Squares used:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Hypotenuse opposite:", options: { A: "Right angle", B: "Acute", C: "Obtuse", D: "None" }, answer: "A" },
    { question: "Longest side:", options: { A: "Hypotenuse", B: "Base", C: "Height", D: "None" }, answer: "A" },
    { question: "Used in:", options: { A: "Distance", B: "Area", C: "Volume", D: "None" }, answer: "A" },
    { question: "Check triangle:", options: { A: "Pythagoras", B: "BPT", C: "AP", D: "None" }, answer: "A" },
    { question: "Right triangle property:", options: { A: "90°", B: "60°", C: "45°", D: "None" }, answer: "A" },
  
    // 41–50 Areas
    { question: "Area ratio:", options: { A: "Square of sides", B: "Equal", C: "Random", D: "None" }, answer: "A" },
    { question: "Similar triangles area:", options: { A: "Proportional", B: "Equal", C: "None", D: "Random" }, answer: "A" },
    { question: "Ratio of areas:", options: { A: "(a/b)²", B: "a/b", C: "a+b", D: "None" }, answer: "A" },
    { question: "Area depends on:", options: { A: "Base & height", B: "Side", C: "Angle", D: "None" }, answer: "A" },
    { question: "Similar triangles:", options: { A: "Same shape", B: "Same size", C: "None", D: "Random" }, answer: "A" },
    { question: "Area increases with:", options: { A: "Side", B: "Decrease", C: "None", D: "Random" }, answer: "A" },
    { question: "Area relation:", options: { A: "Square", B: "Cube", C: "Linear", D: "None" }, answer: "A" },
    { question: "Area formula triangle:", options: { A: "1/2bh", B: "bh", C: "b+h", D: "None" }, answer: "A" },
    { question: "Height needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Base needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Triangle always:", options: { A: "3 sides", B: "4", C: "5", D: "None" }, answer: "A" },
    { question: "Sum of sides rule:", options: { A: "Any two > third", B: "Equal", C: "Less", D: "None" }, answer: "A" },
    { question: "Similarity used in:", options: { A: "Real life", B: "Only theory", C: "None", D: "Random" }, answer: "A" },
    { question: "Proofs needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Most scoring:", options: { A: "Proofs", B: "Skip", C: "Guess", D: "None" }, answer: "A" },
    { question: "Common mistake:", options: { A: "Wrong ratio", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Check similarity:", options: { A: "Criteria", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Parallel lines give:", options: { A: "Similarity", B: "Congruence", C: "None", D: "Random" }, answer: "A" },
    { question: "Triangles used in:", options: { A: "Geometry", B: "Sets", C: "AP", D: "None" }, answer: "A" },
    { question: "Diagram important:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Steps needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Angles equal means:", options: { A: "Similarity", B: "Congruence", C: "None", D: "Random" }, answer: "A" },
    { question: "Sides equal means:", options: { A: "Congruence", B: "Similarity", C: "None", D: "Random" }, answer: "A" },
    { question: "Ratios used:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Key concept:", options: { A: "Similarity", B: "Sets", C: "AP", D: "None" }, answer: "A" },
    { question: "Triangles chapter:", options: { A: "High weight", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Proof skipping:", options: { A: "Lose marks", B: "Gain", C: "None", D: "Random" }, answer: "A" },
    { question: "Final answer:", options: { A: "Steps+reason", B: "Only answer", C: "Skip", D: "None" }, answer: "A" },
    { question: "Triangles scoring:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" }
  ];
  const mathsLesson7 = [
    // 1–10 Basics
    { question: "Coordinate system has:", options: { A: "X and Y axis", B: "Only X", C: "Only Y", D: "None" }, answer: "A" },
    { question: "Origin is:", options: { A: "(0,0)", B: "(1,1)", C: "(0,1)", D: "(1,0)" }, answer: "A" },
    { question: "Point form:", options: { A: "(x,y)", B: "x+y", C: "xy", D: "None" }, answer: "A" },
    { question: "X-axis horizontal:", options: { A: "True", B: "False", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Y-axis vertical:", options: { A: "True", B: "False", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Distance always:", options: { A: "Positive", B: "Negative", C: "Zero", D: "None" }, answer: "A" },
    { question: "Quadrants are:", options: { A: "4", B: "2", C: "3", D: "1" }, answer: "A" },
    { question: "Point (2,3) lies in:", options: { A: "1st quadrant", B: "2nd", C: "3rd", D: "4th" }, answer: "A" },
    { question: "Point (-2,3):", options: { A: "2nd quadrant", B: "1st", C: "3rd", D: "4th" }, answer: "A" },
    { question: "Point (-2,-3):", options: { A: "3rd quadrant", B: "1st", C: "2nd", D: "4th" }, answer: "A" },
  
    // 11–20 Distance Formula
    { question: "Distance formula:", options: { A: "√[(x₂-x₁)²+(y₂-y₁)²]", B: "x₂-x₁", C: "y₂-y₁", D: "None" }, answer: "A" },
    { question: "Distance between (0,0),(3,4):", options: { A: "5", B: "7", C: "6", D: "4" }, answer: "A" },
    { question: "Distance always:", options: { A: "Positive", B: "Negative", C: "Zero", D: "None" }, answer: "A" },
    { question: "Square root used:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Distance of same points:", options: { A: "0", B: "1", C: "2", D: "None" }, answer: "A" },
    { question: "Distance between (1,1),(4,5):", options: { A: "5", B: "6", C: "7", D: "8" }, answer: "A" },
    { question: "Distance formula derived from:", options: { A: "Pythagoras", B: "AP", C: "Sets", D: "None" }, answer: "A" },
    { question: "Distance is length of:", options: { A: "Line segment", B: "Curve", C: "Circle", D: "None" }, answer: "A" },
    { question: "Negative inside square:", options: { A: "Becomes positive", B: "Negative", C: "Zero", D: "None" }, answer: "A" },
    { question: "Distance depends on:", options: { A: "Coordinates", B: "Graph", C: "Guess", D: "None" }, answer: "A" },
  
    // 21–30 Section Formula
    { question: "Section formula divides:", options: { A: "Line segment", B: "Angle", C: "Area", D: "None" }, answer: "A" },
    { question: "Internal division:", options: { A: "m:n", B: "m+n", C: "m×n", D: "None" }, answer: "A" },
    { question: "Section formula uses:", options: { A: "Ratios", B: "Sum", C: "Multiply", D: "None" }, answer: "A" },
    { question: "Coordinates formula:", options: { A: "(mx₂+nx₁)/(m+n)", B: "x+y", C: "xy", D: "None" }, answer: "A" },
    { question: "Same for y:", options: { A: "(my₂+ny₁)/(m+n)", B: "y+x", C: "xy", D: "None" }, answer: "A" },
    { question: "Used for:", options: { A: "Division", B: "Distance", C: "Area", D: "None" }, answer: "A" },
    { question: "Ratio matters:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Internal point lies:", options: { A: "Between", B: "Outside", C: "None", D: "Random" }, answer: "A" },
    { question: "External division:", options: { A: "Different formula", B: "Same", C: "None", D: "Random" }, answer: "A" },
    { question: "Section formula gives:", options: { A: "Coordinates", B: "Distance", C: "Area", D: "None" }, answer: "A" },
  
    // 31–40 Midpoint
    { question: "Midpoint formula:", options: { A: "((x₁+x₂)/2,(y₁+y₂)/2)", B: "x+y", C: "xy", D: "None" }, answer: "A" },
    { question: "Midpoint divides:", options: { A: "Equal parts", B: "Random", C: "None", D: "Angle" }, answer: "A" },
    { question: "Midpoint ratio:", options: { A: "1:1", B: "2:1", C: "3:1", D: "None" }, answer: "A" },
    { question: "Midpoint of (2,4),(6,8):", options: { A: "(4,6)", B: "(5,6)", C: "(3,5)", D: "(2,4)" }, answer: "A" },
    { question: "Average used:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Midpoint lies:", options: { A: "Center", B: "End", C: "Outside", D: "None" }, answer: "A" },
    { question: "Formula simple:", options: { A: "Yes", B: "No", C: "Hard", D: "None" }, answer: "A" },
    { question: "Midpoint depends on:", options: { A: "Coordinates", B: "Graph", C: "Guess", D: "None" }, answer: "A" },
    { question: "Same x,y values:", options: { A: "Same point", B: "Different", C: "None", D: "Random" }, answer: "A" },
    { question: "Midpoint always:", options: { A: "Inside", B: "Outside", C: "Random", D: "None" }, answer: "A" },
  
    // 41–50 Area of Triangle
    { question: "Area formula:", options: { A: "1/2[x₁(y₂-y₃)+...]", B: "x+y", C: "xy", D: "None" }, answer: "A" },
    { question: "Collinear points:", options: { A: "Area=0", B: "Area>0", C: "Negative", D: "None" }, answer: "A" },
    { question: "Triangle area uses:", options: { A: "Coordinates", B: "Graph", C: "Guess", D: "None" }, answer: "A" },
    { question: "Area always:", options: { A: "Positive", B: "Negative", C: "Zero", D: "None" }, answer: "A" },
    { question: "Collinearity check:", options: { A: "Area=0", B: "Distance", C: "Midpoint", D: "None" }, answer: "A" },
    { question: "Three points form triangle:", options: { A: "Non-collinear", B: "Collinear", C: "None", D: "Random" }, answer: "A" },
    { question: "Area depends on:", options: { A: "Coordinates", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Zero area means:", options: { A: "Line", B: "Triangle", C: "Circle", D: "None" }, answer: "A" },
    { question: "Area formula uses:", options: { A: "Determinant", B: "AP", C: "Sets", D: "None" }, answer: "A" },
    { question: "Triangle area important:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Distance used in:", options: { A: "Geometry", B: "AP", C: "Sets", D: "None" }, answer: "A" },
    { question: "Midpoint used in:", options: { A: "Division", B: "Area", C: "None", D: "Random" }, answer: "A" },
    { question: "Section formula used in:", options: { A: "Ratio", B: "Area", C: "None", D: "Random" }, answer: "A" },
    { question: "Coordinate geometry uses:", options: { A: "Algebra+Geometry", B: "Only algebra", C: "Only geometry", D: "None" }, answer: "A" },
    { question: "Sign mistake common:", options: { A: "Yes", B: "No", C: "Rare", D: "None" }, answer: "A" },
    { question: "Most scoring:", options: { A: "Yes", B: "No", C: "Low", D: "None" }, answer: "A" },
    { question: "Check answer:", options: { A: "Recalculate", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Formula important:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Distance mistake:", options: { A: "Sign", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Midpoint mistake:", options: { A: "Average wrong", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Section mistake:", options: { A: "Ratio wrong", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Area mistake:", options: { A: "Calculation", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Coordinates represent:", options: { A: "Points", B: "Lines", C: "Area", D: "None" }, answer: "A" },
    { question: "Final answer:", options: { A: "Accurate", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Geometry+Algebra mix:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Most errors from:", options: { A: "Calculation", B: "Concept", C: "Skip", D: "None" }, answer: "A" },
    { question: "Recheck needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Coordinate chapter:", options: { A: "Easy scoring", B: "Hard", C: "None", D: "Random" }, answer: "A" },
    { question: "Final marks depend on:", options: { A: "Accuracy", B: "Guess", C: "Skip", D: "None" }, answer: "A" }
  ];
  const mathsLesson8 = [
    // 1–10 Basics
    { question: "Trigonometry studies:", options: { A: "Triangles", B: "Circles", C: "Squares", D: "Sets" }, answer: "A" },
    { question: "Right triangle has angle:", options: { A: "90°", B: "60°", C: "45°", D: "30°" }, answer: "A" },
    { question: "Hypotenuse is:", options: { A: "Longest side", B: "Shortest", C: "Equal", D: "None" }, answer: "A" },
    { question: "Opposite side:", options: { A: "Across angle", B: "Adjacent", C: "Hypotenuse", D: "None" }, answer: "A" },
    { question: "Adjacent side:", options: { A: "Next to angle", B: "Opposite", C: "Hypotenuse", D: "None" }, answer: "A" },
    { question: "Trig ratios depend on:", options: { A: "Angle", B: "Length only", C: "Area", D: "None" }, answer: "A" },
    { question: "Sin θ is:", options: { A: "Opp/Hyp", B: "Adj/Hyp", C: "Opp/Adj", D: "None" }, answer: "A" },
    { question: "Cos θ is:", options: { A: "Adj/Hyp", B: "Opp/Hyp", C: "Opp/Adj", D: "None" }, answer: "A" },
    { question: "Tan θ is:", options: { A: "Opp/Adj", B: "Adj/Hyp", C: "Opp/Hyp", D: "None" }, answer: "A" },
    { question: "Cosec θ is:", options: { A: "Hyp/Opp", B: "Hyp/Adj", C: "Adj/Opp", D: "None" }, answer: "A" },
  
    // 11–20 More ratios
    { question: "Sec θ is:", options: { A: "Hyp/Adj", B: "Opp/Hyp", C: "Adj/Opp", D: "None" }, answer: "A" },
    { question: "Cot θ is:", options: { A: "Adj/Opp", B: "Opp/Adj", C: "Hyp/Opp", D: "None" }, answer: "A" },
    { question: "Sin and cosec:", options: { A: "Reciprocal", B: "Equal", C: "None", D: "Random" }, answer: "A" },
    { question: "Cos and sec:", options: { A: "Reciprocal", B: "Equal", C: "None", D: "Random" }, answer: "A" },
    { question: "Tan and cot:", options: { A: "Reciprocal", B: "Equal", C: "None", D: "Random" }, answer: "A" },
    { question: "Ratios defined in:", options: { A: "Right triangle", B: "Circle", C: "Square", D: "None" }, answer: "A" },
    { question: "Angle measured in:", options: { A: "Degrees", B: "Meters", C: "Kg", D: "None" }, answer: "A" },
    { question: "Trig ratios always:", options: { A: "Same for same angle", B: "Change", C: "Random", D: "None" }, answer: "A" },
    { question: "Ratio independent of:", options: { A: "Size", B: "Angle", C: "Triangle", D: "None" }, answer: "A" },
    { question: "Trig ratios use:", options: { A: "Sides", B: "Area", C: "Volume", D: "None" }, answer: "A" },
  
    // 21–30 Standard values
    { question: "Sin 0°:", options: { A: "0", B: "1", C: "1/2", D: "√3/2" }, answer: "A" },
    { question: "Cos 0°:", options: { A: "1", B: "0", C: "1/2", D: "√3/2" }, answer: "A" },
    { question: "Tan 0°:", options: { A: "0", B: "1", C: "∞", D: "None" }, answer: "A" },
    { question: "Sin 30°:", options: { A: "1/2", B: "√3/2", C: "1", D: "0" }, answer: "A" },
    { question: "Cos 30°:", options: { A: "√3/2", B: "1/2", C: "1", D: "0" }, answer: "A" },
    { question: "Tan 30°:", options: { A: "1/√3", B: "√3", C: "1", D: "0" }, answer: "A" },
    { question: "Sin 45°:", options: { A: "1/√2", B: "1/2", C: "√3/2", D: "1" }, answer: "A" },
    { question: "Cos 45°:", options: { A: "1/√2", B: "1/2", C: "√3/2", D: "1" }, answer: "A" },
    { question: "Tan 45°:", options: { A: "1", B: "0", C: "√3", D: "None" }, answer: "A" },
    { question: "Tan 90°:", options: { A: "Not defined", B: "1", C: "0", D: "∞" }, answer: "A" },
  
    // 31–40 Identities
    { question: "sin²θ + cos²θ:", options: { A: "1", B: "0", C: "2", D: "None" }, answer: "A" },
    { question: "1 + tan²θ:", options: { A: "sec²θ", B: "cos²θ", C: "sin²θ", D: "None" }, answer: "A" },
    { question: "1 + cot²θ:", options: { A: "cosec²θ", B: "sec²θ", C: "cos²θ", D: "None" }, answer: "A" },
    { question: "Identity means:", options: { A: "Always true", B: "Sometimes", C: "False", D: "None" }, answer: "A" },
    { question: "sinθ/cosθ:", options: { A: "tanθ", B: "cotθ", C: "secθ", D: "None" }, answer: "A" },
    { question: "cosθ/sinθ:", options: { A: "cotθ", B: "tanθ", C: "secθ", D: "None" }, answer: "A" },
    { question: "Proof needs:", options: { A: "LHS=RHS", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Simplify first:", options: { A: "LHS", B: "RHS", C: "Both", D: "None" }, answer: "A" },
    { question: "Use identities:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Most mistakes:", options: { A: "Algebra", B: "Concept", C: "None", D: "Random" }, answer: "A" },
  
    // 41–50 Signs
    { question: "1st quadrant:", options: { A: "All positive", B: "All negative", C: "Mixed", D: "None" }, answer: "A" },
    { question: "2nd quadrant:", options: { A: "Sin positive", B: "Cos positive", C: "Tan positive", D: "None" }, answer: "A" },
    { question: "3rd quadrant:", options: { A: "Tan positive", B: "Sin positive", C: "Cos positive", D: "None" }, answer: "A" },
    { question: "4th quadrant:", options: { A: "Cos positive", B: "Sin positive", C: "Tan positive", D: "None" }, answer: "A" },
    { question: "Signs depend on:", options: { A: "Quadrant", B: "Length", C: "Area", D: "None" }, answer: "A" },
    { question: "sin negative in:", options: { A: "3rd & 4th", B: "1st", C: "2nd", D: "None" }, answer: "A" },
    { question: "cos negative in:", options: { A: "2nd & 3rd", B: "1st", C: "4th", D: "None" }, answer: "A" },
    { question: "tan negative in:", options: { A: "2nd & 4th", B: "1st", C: "3rd", D: "None" }, answer: "A" },
    { question: "Quadrants total:", options: { A: "4", B: "2", C: "3", D: "None" }, answer: "A" },
    { question: "Signs important:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Trig used in:", options: { A: "Heights & distances", B: "AP", C: "Sets", D: "None" }, answer: "A" },
    { question: "Most scoring:", options: { A: "Yes", B: "No", C: "Low", D: "None" }, answer: "A" },
    { question: "Values must:", options: { A: "Memorize", B: "Skip", C: "Guess", D: "None" }, answer: "A" },
    { question: "Identity mistake:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Trig easy if:", options: { A: "Practice", B: "Skip", C: "Guess", D: "None" }, answer: "A" },
    { question: "Angle changes:", options: { A: "Ratio changes", B: "Same", C: "None", D: "Random" }, answer: "A" },
    { question: "0° to 90°:", options: { A: "First quadrant", B: "Second", C: "Third", D: "None" }, answer: "A" },
    { question: "Trig based on:", options: { A: "Right triangle", B: "Circle", C: "Square", D: "None" }, answer: "A" },
    { question: "sin max value:", options: { A: "1", B: "0", C: "2", D: "None" }, answer: "A" },
    { question: "cos max value:", options: { A: "1", B: "0", C: "2", D: "None" }, answer: "A" },
    { question: "tan increases:", options: { A: "With angle", B: "Decreases", C: "Constant", D: "None" }, answer: "A" },
    { question: "sin increases:", options: { A: "With angle", B: "Decreases", C: "Constant", D: "None" }, answer: "A" },
    { question: "cos decreases:", options: { A: "With angle", B: "Increases", C: "Constant", D: "None" }, answer: "A" },
    { question: "Trig formulas:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Most errors:", options: { A: "Values", B: "Concept", C: "None", D: "Random" }, answer: "A" },
    { question: "Final answer:", options: { A: "Accurate", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Trig chapter:", options: { A: "High weight", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Exam focus:", options: { A: "Values+Identities", B: "Skip", C: "Guess", D: "None" }, answer: "A" },
    { question: "Scoring depends on:", options: { A: "Practice", B: "Luck", C: "Guess", D: "None" }, answer: "A" }
  ];
  const mathsLesson9 = [
    // 1–10 Basics
    { question: "Application of trig used in:", options: { A: "Heights & distances", B: "AP", C: "Sets", D: "None" }, answer: "A" },
    { question: "Angle of elevation:", options: { A: "Looking up", B: "Looking down", C: "Straight", D: "None" }, answer: "A" },
    { question: "Angle of depression:", options: { A: "Looking down", B: "Looking up", C: "Straight", D: "None" }, answer: "A" },
    { question: "Observer sees top:", options: { A: "Elevation", B: "Depression", C: "None", D: "Random" }, answer: "A" },
    { question: "Observer sees bottom:", options: { A: "Depression", B: "Elevation", C: "None", D: "Random" }, answer: "A" },
    { question: "Horizontal line is:", options: { A: "Eye level", B: "Vertical", C: "Slant", D: "None" }, answer: "A" },
    { question: "Trig applied on:", options: { A: "Right triangle", B: "Circle", C: "Square", D: "None" }, answer: "A" },
    { question: "Height measured using:", options: { A: "Trig ratios", B: "AP", C: "Sets", D: "None" }, answer: "A" },
    { question: "Distance measured using:", options: { A: "Trig", B: "Only scale", C: "Guess", D: "None" }, answer: "A" },
    { question: "Diagram needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
  
    // 11–20 Concepts
    { question: "Angle measured from:", options: { A: "Horizontal", B: "Vertical", C: "Base", D: "None" }, answer: "A" },
    { question: "Opposite side in elevation:", options: { A: "Height", B: "Base", C: "Hypotenuse", D: "None" }, answer: "A" },
    { question: "Adjacent side:", options: { A: "Distance", B: "Height", C: "Hypotenuse", D: "None" }, answer: "A" },
    { question: "Hypotenuse is:", options: { A: "Line of sight", B: "Base", C: "Height", D: "None" }, answer: "A" },
    { question: "tan θ =", options: { A: "Height/Base", B: "Base/Height", C: "Hyp/Base", D: "None" }, answer: "A" },
    { question: "sin θ =", options: { A: "Height/Hyp", B: "Base/Hyp", C: "Hyp/Base", D: "None" }, answer: "A" },
    { question: "cos θ =", options: { A: "Base/Hyp", B: "Height/Hyp", C: "Hyp/Base", D: "None" }, answer: "A" },
    { question: "Height problems use:", options: { A: "tan", B: "cos", C: "sin", D: "None" }, answer: "A" },
    { question: "Distance problems use:", options: { A: "tan", B: "cos", C: "sin", D: "None" }, answer: "A" },
    { question: "Angle important:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
  
    // 21–30 Standard values usage
    { question: "tan 45°:", options: { A: "1", B: "0", C: "√3", D: "None" }, answer: "A" },
    { question: "tan 30°:", options: { A: "1/√3", B: "√3", C: "1", D: "0" }, answer: "A" },
    { question: "tan 60°:", options: { A: "√3", B: "1", C: "1/√3", D: "0" }, answer: "A" },
    { question: "sin 30°:", options: { A: "1/2", B: "√3/2", C: "1", D: "0" }, answer: "A" },
    { question: "cos 60°:", options: { A: "1/2", B: "√3/2", C: "1", D: "0" }, answer: "A" },
    { question: "Values needed:", options: { A: "Memorized", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Without values:", options: { A: "Cannot solve", B: "Easy", C: "Guess", D: "None" }, answer: "A" },
    { question: "Common angle:", options: { A: "30°,45°,60°", B: "10°", C: "20°", D: "None" }, answer: "A" },
    { question: "Used frequently:", options: { A: "tan", B: "sin", C: "cos", D: "All" }, answer: "D" },
    { question: "Trig ratios needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
  
    // 31–40 Problem solving
    { question: "First step:", options: { A: "Draw diagram", B: "Solve directly", C: "Guess", D: "None" }, answer: "A" },
    { question: "Second step:", options: { A: "Identify triangle", B: "Skip", C: "Guess", D: "None" }, answer: "A" },
    { question: "Third step:", options: { A: "Apply formula", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Word problems need:", options: { A: "Understanding", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Height always:", options: { A: "Vertical", B: "Horizontal", C: "Slant", D: "None" }, answer: "A" },
    { question: "Distance always:", options: { A: "Horizontal", B: "Vertical", C: "Slant", D: "None" }, answer: "A" },
    { question: "Line of sight:", options: { A: "Hypotenuse", B: "Base", C: "Height", D: "None" }, answer: "A" },
    { question: "Triangle formed:", options: { A: "Right", B: "Acute", C: "Obtuse", D: "None" }, answer: "A" },
    { question: "Solve using:", options: { A: "tan mostly", B: "cos only", C: "sin only", D: "None" }, answer: "A" },
    { question: "Units important:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
  
    // 41–50 Real life
    { question: "Height of building:", options: { A: "Trig", B: "AP", C: "Sets", D: "None" }, answer: "A" },
    { question: "Distance of tower:", options: { A: "Trig", B: "Graph", C: "None", D: "Random" }, answer: "A" },
    { question: "Used in navigation:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Used in engineering:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Used in construction:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Real life application:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Height & distance:", options: { A: "Important", B: "Ignore", C: "None", D: "Random" }, answer: "A" },
    { question: "Used in physics:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Used in maps:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Daily life:", options: { A: "Useful", B: "Useless", C: "None", D: "Random" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Most scoring:", options: { A: "Yes", B: "No", C: "Low", D: "None" }, answer: "A" },
    { question: "Common mistake:", options: { A: "Wrong diagram", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Another mistake:", options: { A: "Wrong ratio", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Values mistake:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Angle confusion:", options: { A: "Elevation/Depression", B: "None", C: "Skip", D: "Random" }, answer: "A" },
    { question: "Diagram skipping:", options: { A: "Lose marks", B: "Gain", C: "None", D: "Random" }, answer: "A" },
    { question: "Steps needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final answer:", options: { A: "Units included", B: "No units", C: "Skip", D: "None" }, answer: "A" },
    { question: "Height problems easy if:", options: { A: "Diagram correct", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Distance problems easy if:", options: { A: "Formula correct", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Trig applications:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Exam weight:", options: { A: "Medium", B: "Low", C: "High", D: "None" }, answer: "A" },
    { question: "Mistakes reduce by:", options: { A: "Practice", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final marks depend on:", options: { A: "Clarity", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Angle understanding:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Diagram clarity:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Equation setup:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Answer correctness:", options: { A: "Depends on setup", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Chapter importance:", options: { A: "High scoring", B: "Low", C: "None", D: "Random" }, answer: "A" }
  ];
  const mathsLesson10 = [
    // 1–10 Basics
    { question: "Circle is:", options: { A: "Set of points equidistant from center", B: "Triangle", C: "Square", D: "None" }, answer: "A" },
    { question: "Center is:", options: { A: "Middle point", B: "Edge", C: "Outside", D: "None" }, answer: "A" },
    { question: "Radius is:", options: { A: "Center to circle", B: "Diameter", C: "Chord", D: "None" }, answer: "A" },
    { question: "Diameter is:", options: { A: "2×radius", B: "Radius", C: "Chord", D: "None" }, answer: "A" },
    { question: "Chord is:", options: { A: "Line joining two points", B: "Radius", C: "Diameter", D: "None" }, answer: "A" },
    { question: "Diameter is longest:", options: { A: "Chord", B: "Radius", C: "Arc", D: "None" }, answer: "A" },
    { question: "Circle has:", options: { A: "Infinite points", B: "Finite", C: "None", D: "Random" }, answer: "A" },
    { question: "All radii are:", options: { A: "Equal", B: "Different", C: "Random", D: "None" }, answer: "A" },
    { question: "Distance fixed:", options: { A: "Radius", B: "Diameter", C: "Chord", D: "None" }, answer: "A" },
    { question: "Circle is 2D:", options: { A: "True", B: "False", C: "Sometimes", D: "None" }, answer: "A" },
  
    // 11–20 Tangents
    { question: "Tangent touches circle at:", options: { A: "One point", B: "Two", C: "Infinite", D: "None" }, answer: "A" },
    { question: "Tangent is:", options: { A: "Straight line", B: "Curve", C: "Circle", D: "None" }, answer: "A" },
    { question: "Radius to tangent:", options: { A: "Perpendicular", B: "Parallel", C: "Equal", D: "None" }, answer: "A" },
    { question: "Point of contact:", options: { A: "Touching point", B: "Center", C: "Outside", D: "None" }, answer: "A" },
    { question: "Number of tangents from point:", options: { A: "2", B: "1", C: "0", D: "3" }, answer: "A" },
    { question: "External point gives:", options: { A: "2 tangents", B: "1", C: "0", D: "None" }, answer: "A" },
    { question: "On circle gives:", options: { A: "1 tangent", B: "2", C: "0", D: "None" }, answer: "A" },
    { question: "Inside circle:", options: { A: "0 tangents", B: "1", C: "2", D: "None" }, answer: "A" },
    { question: "Tangents from same point:", options: { A: "Equal", B: "Different", C: "Random", D: "None" }, answer: "A" },
    { question: "Tangent property:", options: { A: "Perpendicular", B: "Parallel", C: "None", D: "Random" }, answer: "A" },
  
    // 21–30 Theorems
    { question: "Radius ⟂ tangent:", options: { A: "True", B: "False", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Tangent ⟂ radius:", options: { A: "True", B: "False", C: "None", D: "Random" }, answer: "A" },
    { question: "From external point:", options: { A: "Tangents equal", B: "Different", C: "None", D: "Random" }, answer: "A" },
    { question: "Equal tangents theorem:", options: { A: "True", B: "False", C: "None", D: "Random" }, answer: "A" },
    { question: "Theorems used in:", options: { A: "Proofs", B: "Graphs", C: "Sets", D: "None" }, answer: "A" },
    { question: "Proof needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Circle problems use:", options: { A: "Theorems", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Radius drawn to tangent:", options: { A: "90°", B: "45°", C: "60°", D: "None" }, answer: "A" },
    { question: "Tangents equal means:", options: { A: "Same length", B: "Different", C: "None", D: "Random" }, answer: "A" },
    { question: "Geometry needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 31–40 Properties
    { question: "Diameter passes through:", options: { A: "Center", B: "Edge", C: "Outside", D: "None" }, answer: "A" },
    { question: "All diameters equal:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Chord through center:", options: { A: "Diameter", B: "Radius", C: "Arc", D: "None" }, answer: "A" },
    { question: "Circle symmetry:", options: { A: "Infinite", B: "None", C: "One", D: "Two" }, answer: "A" },
    { question: "Distance from center fixed:", options: { A: "Radius", B: "Diameter", C: "Chord", D: "None" }, answer: "A" },
    { question: "Tangent touches:", options: { A: "One point", B: "Two", C: "Many", D: "None" }, answer: "A" },
    { question: "Circle shape:", options: { A: "Round", B: "Square", C: "Triangle", D: "None" }, answer: "A" },
    { question: "Infinite tangents:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Tangent length equal:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Center important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 41–50 Diagram based
    { question: "Diagram needed:", options: { A: "Yes", B: "No", C: "Sometimes", D: "None" }, answer: "A" },
    { question: "Without diagram:", options: { A: "Confusion", B: "Easy", C: "None", D: "Random" }, answer: "A" },
    { question: "Label points:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Mark center:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Draw radius:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Mark tangent:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Perpendicular shown:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Angle marked:", options: { A: "90°", B: "45°", C: "60°", D: "None" }, answer: "A" },
    { question: "Diagram clarity:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Steps needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Circle chapter:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Most scoring:", options: { A: "Yes", B: "No", C: "Low", D: "None" }, answer: "A" },
    { question: "Common mistake:", options: { A: "No theorem", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Another mistake:", options: { A: "No diagram", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Tangents confusion:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Theorems must:", options: { A: "Memorize", B: "Skip", C: "Guess", D: "None" }, answer: "A" },
    { question: "Proof needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Exam weight:", options: { A: "Medium", B: "Low", C: "High", D: "None" }, answer: "A" },
    { question: "Geometry skills:", options: { A: "Required", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final answer:", options: { A: "Steps+diagram", B: "Only answer", C: "Skip", D: "None" }, answer: "A" },
    { question: "Radius important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Tangent important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Angle 90°:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Theorem usage:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Accuracy matters:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Marks depend on:", options: { A: "Concept", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Circle problems:", options: { A: "Logical", B: "Random", C: "None", D: "Random" }, answer: "A" },
    { question: "Final scoring:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Chapter mastery:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" }
  ];
  const mathsLesson11 = [
    // 1–10 Basics
    { question: "Area of circle:", options: { A: "πr²", B: "2πr", C: "πd", D: "None" }, answer: "A" },
    { question: "Circumference:", options: { A: "2πr", B: "πr²", C: "πd²", D: "None" }, answer: "A" },
    { question: "Value of π:", options: { A: "22/7", B: "3/5", C: "2/3", D: "None" }, answer: "A" },
    { question: "Radius is:", options: { A: "Half diameter", B: "Double", C: "Equal", D: "None" }, answer: "A" },
    { question: "Diameter is:", options: { A: "2r", B: "r", C: "r²", D: "None" }, answer: "A" },
    { question: "Circle is:", options: { A: "2D shape", B: "3D", C: "Line", D: "None" }, answer: "A" },
    { question: "Area depends on:", options: { A: "r²", B: "r", C: "d", D: "None" }, answer: "A" },
    { question: "Circumference depends on:", options: { A: "r", B: "r²", C: "d²", D: "None" }, answer: "A" },
    { question: "Units of area:", options: { A: "sq units", B: "units", C: "cm", D: "None" }, answer: "A" },
    { question: "Units of length:", options: { A: "units", B: "sq units", C: "cm²", D: "None" }, answer: "A" },
  
    // 11–20 Sector
    { question: "Sector is:", options: { A: "Part of circle", B: "Whole circle", C: "Line", D: "None" }, answer: "A" },
    { question: "Sector area:", options: { A: "(θ/360)πr²", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "Angle θ measured in:", options: { A: "Degrees", B: "cm", C: "m", D: "None" }, answer: "A" },
    { question: "Full circle angle:", options: { A: "360°", B: "180°", C: "90°", D: "None" }, answer: "A" },
    { question: "Half circle angle:", options: { A: "180°", B: "360°", C: "90°", D: "None" }, answer: "A" },
    { question: "Quarter circle:", options: { A: "90°", B: "180°", C: "360°", D: "None" }, answer: "A" },
    { question: "Sector formula uses:", options: { A: "θ", B: "n", C: "d", D: "None" }, answer: "A" },
    { question: "More angle:", options: { A: "More area", B: "Less", C: "Same", D: "None" }, answer: "A" },
    { question: "Sector depends on:", options: { A: "Angle & radius", B: "Only angle", C: "Only radius", D: "None" }, answer: "A" },
    { question: "Sector smaller angle:", options: { A: "Smaller area", B: "Large", C: "Same", D: "None" }, answer: "A" },
  
    // 21–30 Arc length
    { question: "Arc is:", options: { A: "Part of circumference", B: "Whole circle", C: "Radius", D: "None" }, answer: "A" },
    { question: "Arc length:", options: { A: "(θ/360)2πr", B: "2πr", C: "πr²", D: "None" }, answer: "A" },
    { question: "Full arc:", options: { A: "2πr", B: "πr²", C: "r²", D: "None" }, answer: "A" },
    { question: "Arc uses:", options: { A: "Angle", B: "Area", C: "Volume", D: "None" }, answer: "A" },
    { question: "Arc smaller angle:", options: { A: "Shorter length", B: "Longer", C: "Same", D: "None" }, answer: "A" },
    { question: "Arc larger angle:", options: { A: "Longer", B: "Shorter", C: "Same", D: "None" }, answer: "A" },
    { question: "Arc part of:", options: { A: "Circumference", B: "Area", C: "Volume", D: "None" }, answer: "A" },
    { question: "Arc formula uses:", options: { A: "θ", B: "n", C: "d", D: "None" }, answer: "A" },
    { question: "Arc units:", options: { A: "Length", B: "Area", C: "Volume", D: "None" }, answer: "A" },
    { question: "Arc important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 31–40 Segment
    { question: "Segment is:", options: { A: "Part between chord & arc", B: "Whole circle", C: "Radius", D: "None" }, answer: "A" },
    { question: "Segment area:", options: { A: "Sector - triangle", B: "Circle", C: "Arc", D: "None" }, answer: "A" },
    { question: "Segment uses:", options: { A: "Sector", B: "Circle", C: "None", D: "Random" }, answer: "A" },
    { question: "Segment depends:", options: { A: "Chord & arc", B: "Radius", C: "None", D: "Random" }, answer: "A" },
    { question: "Segment formula complex:", options: { A: "Yes", B: "No", C: "Simple", D: "None" }, answer: "A" },
    { question: "Triangle inside:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Segment always:", options: { A: "Less than circle", B: "More", C: "Same", D: "None" }, answer: "A" },
    { question: "Segment area positive:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Segment formula uses:", options: { A: "Subtraction", B: "Addition", C: "Multiply", D: "None" }, answer: "A" },
    { question: "Segment problems:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
  
    // 41–50 Semicircle
    { question: "Semicircle area:", options: { A: "½πr²", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "Semicircle angle:", options: { A: "180°", B: "360°", C: "90°", D: "None" }, answer: "A" },
    { question: "Semicircle perimeter:", options: { A: "πr+2r", B: "2πr", C: "πr²", D: "None" }, answer: "A" },
    { question: "Half circle means:", options: { A: "Semicircle", B: "Sector", C: "Segment", D: "None" }, answer: "A" },
    { question: "Semicircle uses:", options: { A: "Half formulas", B: "Full", C: "None", D: "Random" }, answer: "A" },
    { question: "Semicircle area half:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Semicircle important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Semicircle length:", options: { A: "πr", B: "2πr", C: "r²", D: "None" }, answer: "A" },
    { question: "Diameter used:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Radius needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Formula memory:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Common mistake:", options: { A: "Wrong formula", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Another mistake:", options: { A: "Units wrong", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "π value mistake:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Conversion needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Area vs length:", options: { A: "Different", B: "Same", C: "None", D: "Random" }, answer: "A" },
    { question: "Exam weight:", options: { A: "Medium", B: "Low", C: "High", D: "None" }, answer: "A" },
    { question: "Scoring chapter:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final answer:", options: { A: "Units included", B: "No units", C: "Skip", D: "None" }, answer: "A" },
    { question: "Area increases:", options: { A: "With r²", B: "r", C: "None", D: "Random" }, answer: "A" },
    { question: "Length increases:", options: { A: "With r", B: "r²", C: "None", D: "Random" }, answer: "A" },
    { question: "Sector problems:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Arc problems:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Segment problems:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Formulas needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Calculation heavy:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Accuracy matters:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Marks depend on:", options: { A: "Formula", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Chapter mastery:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" }
  ];
  const mathsLesson12 = [
    // 1–10 Basics
    { question: "3D shapes have:", options: { A: "Volume", B: "Area only", C: "Length only", D: "None" }, answer: "A" },
    { question: "Volume means:", options: { A: "Space occupied", B: "Area", C: "Length", D: "None" }, answer: "A" },
    { question: "Surface area means:", options: { A: "Outer area", B: "Volume", C: "Length", D: "None" }, answer: "A" },
    { question: "Units of volume:", options: { A: "cubic", B: "square", C: "linear", D: "None" }, answer: "A" },
    { question: "Units of area:", options: { A: "square", B: "cubic", C: "linear", D: "None" }, answer: "A" },
    { question: "Cube is:", options: { A: "All sides equal", B: "Different sides", C: "Circle", D: "None" }, answer: "A" },
    { question: "Cuboid is:", options: { A: "Rectangular box", B: "Circle", C: "Cone", D: "None" }, answer: "A" },
    { question: "Cylinder is:", options: { A: "Circular base", B: "Square base", C: "Triangle", D: "None" }, answer: "A" },
    { question: "Cone is:", options: { A: "One circular base", B: "Two bases", C: "Cube", D: "None" }, answer: "A" },
    { question: "Sphere is:", options: { A: "Round shape", B: "Flat", C: "Box", D: "None" }, answer: "A" },
  
    // 11–20 Cube
    { question: "Volume of cube:", options: { A: "a³", B: "a²", C: "2a", D: "None" }, answer: "A" },
    { question: "Surface area cube:", options: { A: "6a²", B: "a³", C: "2a²", D: "None" }, answer: "A" },
    { question: "Side of cube:", options: { A: "a", B: "b", C: "r", D: "None" }, answer: "A" },
    { question: "Cube edges:", options: { A: "12", B: "6", C: "8", D: "None" }, answer: "A" },
    { question: "Cube faces:", options: { A: "6", B: "4", C: "8", D: "None" }, answer: "A" },
    { question: "Cube vertices:", options: { A: "8", B: "6", C: "4", D: "None" }, answer: "A" },
    { question: "All faces:", options: { A: "Square", B: "Circle", C: "Triangle", D: "None" }, answer: "A" },
    { question: "Cube volume depends:", options: { A: "a³", B: "a²", C: "a", D: "None" }, answer: "A" },
    { question: "Cube area depends:", options: { A: "a²", B: "a³", C: "a", D: "None" }, answer: "A" },
    { question: "Cube simple:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 21–30 Cuboid
    { question: "Volume cuboid:", options: { A: "lbh", B: "a³", C: "2πr", D: "None" }, answer: "A" },
    { question: "Surface cuboid:", options: { A: "2(lb+bh+hl)", B: "lbh", C: "πr²", D: "None" }, answer: "A" },
    { question: "Cuboid sides:", options: { A: "l,b,h", B: "a", C: "r", D: "None" }, answer: "A" },
    { question: "Cuboid faces:", options: { A: "6", B: "4", C: "8", D: "None" }, answer: "A" },
    { question: "Opp faces equal:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Cuboid volume depends:", options: { A: "l,b,h", B: "a", C: "r", D: "None" }, answer: "A" },
    { question: "Rectangular faces:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Cuboid edges:", options: { A: "12", B: "6", C: "8", D: "None" }, answer: "A" },
    { question: "Cuboid vertices:", options: { A: "8", B: "6", C: "4", D: "None" }, answer: "A" },
    { question: "Cuboid important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 31–40 Cylinder
    { question: "Volume cylinder:", options: { A: "πr²h", B: "2πr", C: "πr²", D: "None" }, answer: "A" },
    { question: "CSA cylinder:", options: { A: "2πrh", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "TSA cylinder:", options: { A: "2πr(r+h)", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "Cylinder has:", options: { A: "2 circular faces", B: "1", C: "3", D: "None" }, answer: "A" },
    { question: "Height needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Radius needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Cylinder curved:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Cylinder volume depends:", options: { A: "r,h", B: "a", C: "l", D: "None" }, answer: "A" },
    { question: "Cylinder base:", options: { A: "Circle", B: "Square", C: "Triangle", D: "None" }, answer: "A" },
    { question: "Cylinder important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 41–50 Cone
    { question: "Volume cone:", options: { A: "1/3πr²h", B: "πr²h", C: "2πr", D: "None" }, answer: "A" },
    { question: "CSA cone:", options: { A: "πrl", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "TSA cone:", options: { A: "πr(l+r)", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "Cone has:", options: { A: "1 base", B: "2", C: "3", D: "None" }, answer: "A" },
    { question: "Slant height:", options: { A: "l", B: "h", C: "r", D: "None" }, answer: "A" },
    { question: "Cone volume smaller:", options: { A: "Than cylinder", B: "Equal", C: "More", D: "None" }, answer: "A" },
    { question: "Cone shape:", options: { A: "Pointed", B: "Flat", C: "Box", D: "None" }, answer: "A" },
    { question: "Cone uses:", options: { A: "r,h,l", B: "a", C: "l", D: "None" }, answer: "A" },
    { question: "Cone important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Cone curved:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 51–60 Sphere
    { question: "Volume sphere:", options: { A: "4/3πr³", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "Surface sphere:", options: { A: "4πr²", B: "πr²", C: "2πr", D: "None" }, answer: "A" },
    { question: "Sphere has:", options: { A: "No edges", B: "Edges", C: "Faces", D: "None" }, answer: "A" },
    { question: "Sphere shape:", options: { A: "Round", B: "Flat", C: "Box", D: "None" }, answer: "A" },
    { question: "Sphere depends:", options: { A: "r", B: "l", C: "h", D: "None" }, answer: "A" },
    { question: "Sphere no vertex:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Sphere smooth:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Sphere important:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Sphere volume depends:", options: { A: "r³", B: "r²", C: "r", D: "None" }, answer: "A" },
    { question: "Sphere area depends:", options: { A: "r²", B: "r³", C: "r", D: "None" }, answer: "A" },
  
    // 61–80 Mixed
    { question: "Formula memory:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Common mistake:", options: { A: "Wrong formula", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "Another mistake:", options: { A: "Units wrong", B: "Correct", C: "Skip", D: "None" }, answer: "A" },
    { question: "π mistake:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Conversion needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Volume vs area:", options: { A: "Different", B: "Same", C: "None", D: "Random" }, answer: "A" },
    { question: "Exam weight:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Scoring chapter:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final answer:", options: { A: "Units included", B: "No units", C: "Skip", D: "None" }, answer: "A" },
    { question: "Combination solids:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Cut shapes:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Water problems:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Capacity problems:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Accuracy matters:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Marks depend on:", options: { A: "Formula", B: "Guess", C: "Skip", D: "None" }, answer: "A" },
    { question: "Chapter mastery:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Calculation heavy:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Speed matters:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Final scoring:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" }
  ];
  const mathsLesson13 = [
    // 1–10 Basics
    { question: "Statistics deals with:", options: { A: "Data", B: "Shapes", C: "Lines", D: "None" }, answer: "A" },
    { question: "Data means:", options: { A: "Information", B: "Angle", C: "Length", D: "None" }, answer: "A" },
    { question: "Raw data:", options: { A: "Ungrouped", B: "Grouped", C: "Sorted", D: "None" }, answer: "A" },
    { question: "Grouped data:", options: { A: "Class intervals", B: "Single value", C: "None", D: "Random" }, answer: "A" },
    { question: "Frequency means:", options: { A: "Number of times", B: "Value", C: "Sum", D: "None" }, answer: "A" },
    { question: "Class interval:", options: { A: "Range", B: "Single value", C: "None", D: "Random" }, answer: "A" },
    { question: "Lower limit:", options: { A: "Start", B: "End", C: "Middle", D: "None" }, answer: "A" },
    { question: "Upper limit:", options: { A: "End", B: "Start", C: "Middle", D: "None" }, answer: "A" },
    { question: "Class width:", options: { A: "Upper-lower", B: "Sum", C: "Multiply", D: "None" }, answer: "A" },
    { question: "Mid value:", options: { A: "(L+U)/2", B: "L-U", C: "L×U", D: "None" }, answer: "A" },
  
    // 11–20 Mean (Direct)
    { question: "Mean formula:", options: { A: "Σfx/Σf", B: "Σf/Σx", C: "Σx", D: "None" }, answer: "A" },
    { question: "x means:", options: { A: "Mid value", B: "Frequency", C: "Sum", D: "None" }, answer: "A" },
    { question: "f means:", options: { A: "Frequency", B: "Value", C: "Sum", D: "None" }, answer: "A" },
    { question: "Σ means:", options: { A: "Sum", B: "Multiply", C: "Divide", D: "None" }, answer: "A" },
    { question: "fx means:", options: { A: "f×x", B: "f+x", C: "f-x", D: "None" }, answer: "A" },
    { question: "Mean gives:", options: { A: "Average", B: "Total", C: "None", D: "Random" }, answer: "A" },
    { question: "Direct method:", options: { A: "Simple", B: "Complex", C: "None", D: "Random" }, answer: "A" },
    { question: "Mean depends:", options: { A: "Data", B: "Guess", C: "None", D: "Random" }, answer: "A" },
    { question: "Total frequency:", options: { A: "Σf", B: "Σx", C: "Σfx", D: "None" }, answer: "A" },
    { question: "Mean always:", options: { A: "Between values", B: "Outside", C: "None", D: "Random" }, answer: "A" },
  
    // 21–30 Assumed Mean
    { question: "Assumed mean method:", options: { A: "Shortcut", B: "Long", C: "None", D: "Random" }, answer: "A" },
    { question: "Assumed mean symbol:", options: { A: "A", B: "x", C: "f", D: "None" }, answer: "A" },
    { question: "d =", options: { A: "x-A", B: "A-x", C: "x+A", D: "None" }, answer: "A" },
    { question: "Mean formula:", options: { A: "A + Σfd/Σf", B: "Σfx", C: "Σf", D: "None" }, answer: "A" },
    { question: "Used when:", options: { A: "Values large", B: "Small", C: "None", D: "Random" }, answer: "A" },
    { question: "d small:", options: { A: "Easy calc", B: "Hard", C: "None", D: "Random" }, answer: "A" },
    { question: "A chosen:", options: { A: "Middle value", B: "Random", C: "None", D: "Random" }, answer: "A" },
    { question: "Shortcut method:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Reduce calculation:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Mean result same:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 31–40 Step Deviation
    { question: "Step deviation:", options: { A: "Advanced shortcut", B: "Basic", C: "None", D: "Random" }, answer: "A" },
    { question: "u =", options: { A: "d/h", B: "d×h", C: "d+h", D: "None" }, answer: "A" },
    { question: "Mean formula:", options: { A: "A + (Σfu/Σf)×h", B: "Σfx", C: "Σf", D: "None" }, answer: "A" },
    { question: "h means:", options: { A: "Class width", B: "Height", C: "None", D: "Random" }, answer: "A" },
    { question: "Used when:", options: { A: "Equal intervals", B: "Unequal", C: "None", D: "Random" }, answer: "A" },
    { question: "Calculation easier:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "u small:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Step deviation best:", options: { A: "Large data", B: "Small", C: "None", D: "Random" }, answer: "A" },
    { question: "All methods:", options: { A: "Same mean", B: "Different", C: "None", D: "Random" }, answer: "A" },
    { question: "Method choice:", options: { A: "Based on data", B: "Random", C: "None", D: "Random" }, answer: "A" },
  
    // 41–50 Cumulative Frequency
    { question: "Cumulative freq:", options: { A: "Running total", B: "Single", C: "None", D: "Random" }, answer: "A" },
    { question: "Less than type:", options: { A: "Up to value", B: "After", C: "None", D: "Random" }, answer: "A" },
    { question: "More than type:", options: { A: "Above value", B: "Below", C: "None", D: "Random" }, answer: "A" },
    { question: "CF increases:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "CF table:", options: { A: "Needed", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Graph possible:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "CF useful:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "CF mistakes:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "CF needed:", options: { A: "For median", B: "Mean", C: "None", D: "Random" }, answer: "A" },
    { question: "CF concept:", options: { A: "Simple", B: "Hard", C: "None", D: "Random" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Statistics chapter:", options: { A: "Scoring", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Common mistake:", options: { A: "Calculation", B: "Concept", C: "None", D: "Random" }, answer: "A" },
    { question: "Another mistake:", options: { A: "Formula", B: "Correct", C: "None", D: "Random" }, answer: "A" },
    { question: "Units ignored:", options: { A: "Wrong", B: "Correct", C: "None", D: "Random" }, answer: "A" },
    { question: "Table needed:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Step writing:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Exam weight:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Fast solving:", options: { A: "Possible", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Accuracy matters:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Mean always:", options: { A: "Unique", B: "Multiple", C: "None", D: "Random" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final answer:", options: { A: "Accurate", B: "Guess", C: "None", D: "Random" }, answer: "A" },
    { question: "Marks depend on:", options: { A: "Calculation", B: "Luck", C: "None", D: "Random" }, answer: "A" },
    { question: "Shortcut useful:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Data handling:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Tables clarity:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Mean accuracy:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Chapter mastery:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Calculation heavy:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Final scoring:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" }
  ];
  const mathsLesson14 = [
    // 1–10 Basics
    { question: "Probability means:", options: { A: "Chance", B: "Length", C: "Area", D: "None" }, answer: "A" },
    { question: "Formula:", options: { A: "Favorable/Total", B: "Total/Favorable", C: "Sum", D: "None" }, answer: "A" },
    { question: "Probability range:", options: { A: "0 to 1", B: "1 to 10", C: "0 to 100", D: "None" }, answer: "A" },
    { question: "Certain event:", options: { A: "1", B: "0", C: "1/2", D: "None" }, answer: "A" },
    { question: "Impossible event:", options: { A: "0", B: "1", C: "1/2", D: "None" }, answer: "A" },
    { question: "Equally likely:", options: { A: "Same chance", B: "Different", C: "None", D: "Random" }, answer: "A" },
    { question: "Sample space:", options: { A: "All outcomes", B: "One outcome", C: "None", D: "Random" }, answer: "A" },
    { question: "Event:", options: { A: "Subset of sample space", B: "Whole", C: "None", D: "Random" }, answer: "A" },
    { question: "Outcome:", options: { A: "Result", B: "Formula", C: "None", D: "Random" }, answer: "A" },
    { question: "Total outcomes:", options: { A: "n(S)", B: "n(E)", C: "None", D: "Random" }, answer: "A" },
  
    // 11–20 Coins
    { question: "Coin outcomes:", options: { A: "H,T", B: "1,2", C: "A,B", D: "None" }, answer: "A" },
    { question: "P(Head):", options: { A: "1/2", B: "1", C: "0", D: "None" }, answer: "A" },
    { question: "P(Tail):", options: { A: "1/2", B: "1", C: "0", D: "None" }, answer: "A" },
    { question: "Two coins outcomes:", options: { A: "4", B: "2", C: "6", D: "None" }, answer: "A" },
    { question: "HH probability:", options: { A: "1/4", B: "1/2", C: "1", D: "None" }, answer: "A" },
    { question: "HT probability:", options: { A: "1/4", B: "1/2", C: "1", D: "None" }, answer: "A" },
    { question: "At least one head:", options: { A: "3/4", B: "1/4", C: "1/2", D: "None" }, answer: "A" },
    { question: "No head:", options: { A: "1/4", B: "1/2", C: "1", D: "None" }, answer: "A" },
    { question: "Two tails:", options: { A: "1/4", B: "1/2", C: "1", D: "None" }, answer: "A" },
    { question: "Coin fair:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 21–30 Dice
    { question: "Dice outcomes:", options: { A: "6", B: "2", C: "10", D: "None" }, answer: "A" },
    { question: "P(1):", options: { A: "1/6", B: "1", C: "0", D: "None" }, answer: "A" },
    { question: "Even numbers:", options: { A: "3", B: "2", C: "4", D: "None" }, answer: "A" },
    { question: "P(even):", options: { A: "3/6", B: "1/6", C: "1", D: "None" }, answer: "A" },
    { question: "Odd numbers:", options: { A: "3", B: "2", C: "4", D: "None" }, answer: "A" },
    { question: "P(odd):", options: { A: "3/6", B: "1/6", C: "1", D: "None" }, answer: "A" },
    { question: "Prime numbers:", options: { A: "2,3,5", B: "1,2", C: "4,6", D: "None" }, answer: "A" },
    { question: "P(prime):", options: { A: "3/6", B: "1/6", C: "1", D: "None" }, answer: "A" },
    { question: "Greater than 4:", options: { A: "5,6", B: "1,2", C: "3,4", D: "None" }, answer: "A" },
    { question: "P(>4):", options: { A: "2/6", B: "1/6", C: "1", D: "None" }, answer: "A" },
  
    // 31–40 Cards
    { question: "Cards total:", options: { A: "52", B: "54", C: "50", D: "None" }, answer: "A" },
    { question: "Red cards:", options: { A: "26", B: "13", C: "52", D: "None" }, answer: "A" },
    { question: "Black cards:", options: { A: "26", B: "13", C: "52", D: "None" }, answer: "A" },
    { question: "P(red):", options: { A: "1/2", B: "1", C: "0", D: "None" }, answer: "A" },
    { question: "P(black):", options: { A: "1/2", B: "1", C: "0", D: "None" }, answer: "A" },
    { question: "Face cards:", options: { A: "12", B: "4", C: "8", D: "None" }, answer: "A" },
    { question: "P(face):", options: { A: "12/52", B: "1/2", C: "1", D: "None" }, answer: "A" },
    { question: "King cards:", options: { A: "4", B: "2", C: "6", D: "None" }, answer: "A" },
    { question: "P(king):", options: { A: "4/52", B: "1/2", C: "1", D: "None" }, answer: "A" },
    { question: "Deck standard:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 41–50 Complement
    { question: "Complement:", options: { A: "1-P(E)", B: "P(E)", C: "0", D: "None" }, answer: "A" },
    { question: "P(not E):", options: { A: "1-P(E)", B: "P(E)", C: "0", D: "None" }, answer: "A" },
    { question: "Certain event complement:", options: { A: "0", B: "1", C: "1/2", D: "None" }, answer: "A" },
    { question: "Impossible complement:", options: { A: "1", B: "0", C: "1/2", D: "None" }, answer: "A" },
    { question: "P(E)+P(not E):", options: { A: "1", B: "0", C: "2", D: "None" }, answer: "A" },
    { question: "Complement useful:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "At least problems:", options: { A: "Use complement", B: "Direct", C: "None", D: "Random" }, answer: "A" },
    { question: "Avoid complex:", options: { A: "Complement", B: "Direct", C: "None", D: "Random" }, answer: "A" },
    { question: "Shortcut:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Common use:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
  
    // 51–80 Mixed
    { question: "Probability chapter:", options: { A: "Easy", B: "Hard", C: "Skip", D: "None" }, answer: "A" },
    { question: "Common mistake:", options: { A: "Wrong outcomes", B: "Correct", C: "None", D: "Random" }, answer: "A" },
    { question: "Another mistake:", options: { A: "Wrong total", B: "Correct", C: "None", D: "Random" }, answer: "A" },
    { question: "Sample space error:", options: { A: "Common", B: "Rare", C: "None", D: "Random" }, answer: "A" },
    { question: "Formula simple:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Exam weight:", options: { A: "Medium", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Scoring chapter:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Practice needed:", options: { A: "Yes", B: "No", C: "Skip", D: "None" }, answer: "A" },
    { question: "Final answer:", options: { A: "Fraction form", B: "Decimal", C: "None", D: "Random" }, answer: "A" },
    { question: "Probability value:", options: { A: "≤1", B: ">1", C: "None", D: "Random" }, answer: "A" },
    { question: "Accuracy matters:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Marks depend:", options: { A: "Logic", B: "Guess", C: "None", D: "Random" }, answer: "A" },
    { question: "Event clarity:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Counting skills:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Complement trick:", options: { A: "Useful", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Chapter mastery:", options: { A: "Important", B: "Skip", C: "None", D: "Random" }, answer: "A" },
    { question: "Calculation easy:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Logic required:", options: { A: "Yes", B: "No", C: "None", D: "Random" }, answer: "A" },
    { question: "Final scoring:", options: { A: "High", B: "Low", C: "None", D: "Random" }, answer: "A" },
    { question: "Mistakes avoid:", options: { A: "Careless errors", B: "Concept", C: "None", D: "Random" }, answer: "A" }
  ];
                    
  
  //Hindi//

  const hindilesson1 = [
    { question: "“बरसते बादल” कविता के कवि कौन हैं?", options: { A: "महादेवी वर्मा", B: "सुमित्रानंदन पंत", C: "दिनकर", D: "निराला" }, answer: "B" },
    { question: "सुमित्रानंदन पंत किस युग के कवि हैं?", options: { A: "भक्ति काल", B: "रीति काल", C: "छायावाद", D: "आधुनिक" }, answer: "C" },
    { question: "कविता का मुख्य विषय क्या है?", options: { A: "युद्ध", B: "प्रकृति", C: "राजनीति", D: "व्यापार" }, answer: "B" },
    { question: "“बादल” क्या दर्शाते हैं?", options: { A: "विनाश", B: "जीवन और वर्षा", C: "क्रोध", D: "भय" }, answer: "B" },
    { question: "कवि प्रकृति को कैसे देखता है?", options: { A: "भयावह", B: "सुंदर", C: "क्रूर", D: "साधारण" }, answer: "B" },
  
    { question: "कविता में कौन-सा रस है?", options: { A: "वीर", B: "श्रृंगार", C: "शांत", D: "भयानक" }, answer: "C" },
    { question: "बादल क्या करते हैं?", options: { A: "गाते हैं", B: "बरसते हैं", C: "भागते हैं", D: "सोते हैं" }, answer: "B" },
    { question: "वर्षा किसके लिए उपयोगी है?", options: { A: "मनुष्य", B: "पशु", C: "पेड़-पौधे", D: "सभी" }, answer: "D" },
    { question: "कवि किसकी सुंदरता का वर्णन करता है?", options: { A: "शहर", B: "प्रकृति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "कविता में प्रकृति का कौन-सा रूप है?", options: { A: "क्रूर", B: "जीवनदायी", C: "भयावह", D: "अंधकारमय" }, answer: "B" },
  
    { question: "बादल किसका प्रतीक हैं?", options: { A: "जीवन", B: "धन", C: "शक्ति", D: "क्रोध" }, answer: "A" },
    { question: "कवि क्या अनुभव करता है?", options: { A: "डर", B: "आनंद", C: "क्रोध", D: "दुख" }, answer: "B" },
    { question: "कविता में किसका वर्णन है?", options: { A: "प्रकृति", B: "राजनीति", C: "युद्ध", D: "व्यापार" }, answer: "A" },
    { question: "बादल क्यों महत्वपूर्ण हैं?", options: { A: "विनाश", B: "वर्षा", C: "क्रोध", D: "अंधकार" }, answer: "B" },
    { question: "कविता का भाव क्या है?", options: { A: "दुख", B: "आनंद", C: "क्रोध", D: "भय" }, answer: "B" },
  
    { question: "सुमित्रानंदन पंत का जन्म कब हुआ?", options: { A: "1900", B: "1899", C: "1910", D: "1885" }, answer: "A" },
    { question: "पंत किसके कवि हैं?", options: { A: "प्रकृति", B: "राजनीति", C: "युद्ध", D: "व्यापार" }, answer: "A" },
    { question: "कविता में वर्षा का क्या महत्व है?", options: { A: "जीवन", B: "मृत्यु", C: "डर", D: "क्रोध" }, answer: "A" },
    { question: "कवि किससे प्रेरित है?", options: { A: "प्रकृति", B: "राजनीति", C: "युद्ध", D: "धन" }, answer: "A" },
    { question: "कविता का संदेश क्या है?", options: { A: "प्रकृति प्रेम", B: "युद्ध", C: "राजनीति", D: "व्यापार" }, answer: "A" },
  
    { question: "“बादल” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“बरसना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“सुंदर” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
    { question: "“वह” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“प्रकृति” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "भाववाचक", C: "जातिवाचक", D: "द्रव्यवाचक" }, answer: "C" },
  
    { question: "“मेघ” का पर्यायवाची क्या है?", options: { A: "जल", B: "बादल", C: "वर्षा", D: "नदी" }, answer: "B" },
    { question: "“सुंदर” का विलोम क्या है?", options: { A: "अच्छा", B: "बुरा", C: "कुरूप", D: "ठीक" }, answer: "C" },
    { question: "“वर्षा” का पर्यायवाची क्या है?", options: { A: "बारिश", B: "धूप", C: "हवा", D: "नदी" }, answer: "A" },
    { question: "“जीवन” का विलोम क्या है?", options: { A: "मृत्यु", B: "प्रेम", C: "शक्ति", D: "धन" }, answer: "A" },
    { question: "“प्रकृति” का पर्यायवाची क्या है?", options: { A: "स्वभाव", B: "पर्यावरण", C: "जगत", D: "सभी" }, answer: "D" },
  
    { question: "कविता में कौन-सी भावना है?", options: { A: "घृणा", B: "प्रेम", C: "क्रोध", D: "डर" }, answer: "B" },
    { question: "बादल क्या लाते हैं?", options: { A: "विनाश", B: "जल", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "कवि किससे आनंदित होता है?", options: { A: "युद्ध", B: "प्रकृति", C: "धन", D: "राजनीति" }, answer: "B" },
    { question: "कविता किस प्रकार की है?", options: { A: "देशभक्ति", B: "प्रकृति", C: "व्यंग्य", D: "नाटक" }, answer: "B" },
    { question: "बादल किसके लिए जरूरी हैं?", options: { A: "पौधे", B: "मनुष्य", C: "पशु", D: "सभी" }, answer: "D" },
  
    { question: "कवि किसका गुणगान करता है?", options: { A: "धन", B: "प्रकृति", C: "राजनीति", D: "युद्ध" }, answer: "B" },
    { question: "कविता का वातावरण कैसा है?", options: { A: "भयावह", B: "शांत", C: "क्रोधित", D: "उदास" }, answer: "B" },
    { question: "कवि की भाषा कैसी है?", options: { A: "कठिन", B: "सरल", C: "विदेशी", D: "तकनीकी" }, answer: "B" },
    { question: "कविता में क्या दर्शाया गया है?", options: { A: "युद्ध", B: "प्रकृति सौंदर्य", C: "राजनीति", D: "व्यापार" }, answer: "B" },
    { question: "बादल किसका संकेत हैं?", options: { A: "जीवन", B: "मृत्यु", C: "डर", D: "क्रोध" }, answer: "A" },
  
    { question: "कविता का मुख्य उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "प्रकृति प्रेम", C: "राजनीति", D: "युद्ध" }, answer: "B" },
    { question: "कवि किससे प्रभावित है?", options: { A: "प्रकृति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "बादल क्या देते हैं?", options: { A: "धन", B: "जल", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "कविता में किसका महत्व है?", options: { A: "प्रकृति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "कवि का संदेश क्या है?", options: { A: "प्रकृति से प्रेम करो", B: "युद्ध करो", C: "धन कमाओ", D: "राजनीति करो" }, answer: "A" }
  ];
  
  const hindilesson2 = [
    { question: "“ईदगाह” कहानी के लेखक कौन हैं?", options: { A: "महादेवी वर्मा", B: "प्रेमचंद", C: "दिनकर", D: "निराला" }, answer: "B" },
    { question: "प्रेमचंद किस प्रकार के लेखक हैं?", options: { A: "कवि", B: "नाटककार", C: "कहानीकार", D: "वैज्ञानिक" }, answer: "C" },
    { question: "ईदगाह कहानी का मुख्य पात्र कौन है?", options: { A: "मोहसिन", B: "हामिद", C: "नूरी", D: "अमीना" }, answer: "B" },
    { question: "हामिद किसके साथ रहता है?", options: { A: "माता-पिता", B: "दादी", C: "मित्र", D: "चाचा" }, answer: "B" },
    { question: "हामिद की दादी का नाम क्या है?", options: { A: "अमीना", B: "फातिमा", C: "नूरी", D: "रजिया" }, answer: "A" },
  
    { question: "ईदगाह में बच्चे कहाँ जाते हैं?", options: { A: "स्कूल", B: "बाजार", C: "ईदगाह", D: "मेला" }, answer: "D" },
    { question: "हामिद के पास कितने पैसे थे?", options: { A: "तीन पैसे", B: "चार पैसे", C: "पाँच पैसे", D: "छह पैसे" }, answer: "A" },
    { question: "हामिद ने क्या खरीदा?", options: { A: "खिलौना", B: "मिठाई", C: "चिमटा", D: "कपड़े" }, answer: "C" },
    { question: "हामिद ने चिमटा क्यों खरीदा?", options: { A: "खेलने के लिए", B: "दादी के लिए", C: "बेचने के लिए", D: "मित्रों के लिए" }, answer: "B" },
    { question: "चिमटा किस काम आता है?", options: { A: "खेल", B: "रोटी सेंकने", C: "खाना खाने", D: "पानी भरने" }, answer: "B" },
  
    { question: "हामिद के मित्र क्या खरीदते हैं?", options: { A: "चिमटा", B: "मिठाई और खिलौने", C: "कपड़े", D: "किताबें" }, answer: "B" },
    { question: "हामिद का स्वभाव कैसा है?", options: { A: "स्वार्थी", B: "दयालु", C: "क्रोधित", D: "घमंडी" }, answer: "B" },
    { question: "हामिद की उम्र क्या है?", options: { A: "5 वर्ष", B: "4-5 वर्ष", C: "10 वर्ष", D: "8 वर्ष" }, answer: "B" },
    { question: "अमीना किसकी प्रतीक्षा करती है?", options: { A: "हामिद", B: "मित्र", C: "पड़ोसी", D: "शिक्षक" }, answer: "A" },
    { question: "ईद का त्योहार किस धर्म से संबंधित है?", options: { A: "हिंदू", B: "मुस्लिम", C: "सिख", D: "ईसाई" }, answer: "B" },
  
    { question: "हामिद के माता-पिता कहाँ हैं?", options: { A: "घर पर", B: "शहर में", C: "मर चुके हैं", D: "विदेश में" }, answer: "C" },
    { question: "हामिद मेले में क्या नहीं खरीदता?", options: { A: "खिलौना", B: "मिठाई", C: "चिमटा", D: "कुछ नहीं" }, answer: "B" },
    { question: "मित्र हामिद का मजाक क्यों उड़ाते हैं?", options: { A: "गरीबी", B: "चिमटा खरीदने पर", C: "कपड़े", D: "खेल" }, answer: "B" },
    { question: "हामिद चिमटे को क्या मानता है?", options: { A: "खेलौना", B: "हथियार", C: "दोनों", D: "कुछ नहीं" }, answer: "C" },
    { question: "अमीना चिमटा देखकर क्या करती है?", options: { A: "रोती है", B: "खुश होती है", C: "डांटती है", D: "कुछ नहीं" }, answer: "B" },
  
    { question: "कहानी का मुख्य संदेश क्या है?", options: { A: "धन", B: "त्याग और प्रेम", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "प्रेमचंद का जन्म कब हुआ था?", options: { A: "1880", B: "1881", C: "1890", D: "1900" }, answer: "A" },
    { question: "प्रेमचंद किसके लिए प्रसिद्ध हैं?", options: { A: "कविता", B: "कहानी", C: "नाटक", D: "गीत" }, answer: "B" },
    { question: "ईदगाह कहानी किस प्रकार की है?", options: { A: "देशभक्ति", B: "सामाजिक", C: "वैज्ञानिक", D: "ऐतिहासिक" }, answer: "B" },
    { question: "हामिद का चरित्र क्या दर्शाता है?", options: { A: "स्वार्थ", B: "त्याग", C: "क्रोध", D: "डर" }, answer: "B" },
  
    { question: "“हामिद” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“चिमटा” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“खरीदना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वह” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“गरीब” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“मेला” का पर्यायवाची क्या है?", options: { A: "उत्सव", B: "युद्ध", C: "राजनीति", D: "धन" }, answer: "A" },
    { question: "“गरीब” का विलोम क्या है?", options: { A: "अमीर", B: "छोटा", C: "कम", D: "बड़ा" }, answer: "A" },
    { question: "“खुशी” का पर्यायवाची क्या है?", options: { A: "दुख", B: "आनंद", C: "क्रोध", D: "डर" }, answer: "B" },
    { question: "“दुख” का विलोम क्या है?", options: { A: "आनंद", B: "क्रोध", C: "डर", D: "घृणा" }, answer: "A" },
    { question: "“मित्र” का पर्यायवाची क्या है?", options: { A: "शत्रु", B: "दोस्त", C: "राजा", D: "सेवक" }, answer: "B" },
  
    { question: "हामिद का निर्णय क्या दर्शाता है?", options: { A: "स्वार्थ", B: "त्याग", C: "डर", D: "क्रोध" }, answer: "B" },
    { question: "कहानी में कौन-सा भाव प्रमुख है?", options: { A: "हास्य", B: "करुण", C: "वीर", D: "भयानक" }, answer: "B" },
    { question: "हामिद किसके लिए सोचता है?", options: { A: "खुद", B: "दादी", C: "मित्र", D: "शिक्षक" }, answer: "B" },
    { question: "अमीना हामिद को क्या मानती है?", options: { A: "कमजोर", B: "समझदार", C: "क्रोधित", D: "डरपोक" }, answer: "B" },
    { question: "कहानी किसका उदाहरण है?", options: { A: "त्याग", B: "प्रेम", C: "संवेदना", D: "सभी" }, answer: "D" },
  
    { question: "हामिद की सोच कैसी है?", options: { A: "बच्चों जैसी", B: "परिपक्व", C: "स्वार्थी", D: "कमजोर" }, answer: "B" },
    { question: "कहानी का अंत कैसा है?", options: { A: "दुखद", B: "खुश", C: "सामान्य", D: "भयानक" }, answer: "B" },
    { question: "ईदगाह कहानी किसकी शिक्षा देती है?", options: { A: "धन", B: "त्याग", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "हामिद का सबसे बड़ा गुण क्या है?", options: { A: "धन", B: "त्याग", C: "क्रोध", D: "डर" }, answer: "B" },
    { question: "कहानी में क्या प्रमुख है?", options: { A: "धन", B: "मानवता", C: "युद्ध", D: "राजनीति" }, answer: "B" }
  ];
  const hindilesson3 = [
    { question: "“हम भारतवासी” कविता के कवि कौन हैं?", options: { A: "दिनकर", B: "आर.पी. ‘निराश’", C: "पंत", D: "निराला" }, answer: "B" },
    { question: "कविता का मुख्य विषय क्या है?", options: { A: "प्रकृति", B: "देशभक्ति", C: "व्यापार", D: "युद्ध" }, answer: "B" },
    { question: "“भारतवासी” का अर्थ क्या है?", options: { A: "विदेशी", B: "भारत में रहने वाले", C: "किसान", D: "सैनिक" }, answer: "B" },
    { question: "कविता में किसकी एकता की बात है?", options: { A: "परिवार", B: "देश", C: "स्कूल", D: "मित्र" }, answer: "B" },
    { question: "कवि क्या संदेश देता है?", options: { A: "विरोध", B: "एकता", C: "डर", D: "क्रोध" }, answer: "B" },
  
    { question: "कविता में कौन-सी भावना प्रमुख है?", options: { A: "घृणा", B: "देशप्रेम", C: "क्रोध", D: "डर" }, answer: "B" },
    { question: "“हम” किसके लिए प्रयुक्त है?", options: { A: "एक व्यक्ति", B: "देशवासी", C: "शिक्षक", D: "मित्र" }, answer: "B" },
    { question: "कविता का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "देशप्रेम जगाना", C: "आलोचना", D: "व्यंग्य" }, answer: "B" },
    { question: "कवि किसे जोड़ना चाहता है?", options: { A: "परिवार", B: "देशवासी", C: "मित्र", D: "शिक्षक" }, answer: "B" },
    { question: "कविता में किसका महत्व है?", options: { A: "धन", B: "एकता", C: "युद्ध", D: "शक्ति" }, answer: "B" },
  
    { question: "“हम भारतवासी” में कौन-सा भाव है?", options: { A: "अलगाव", B: "एकता", C: "भय", D: "क्रोध" }, answer: "B" },
    { question: "कविता किस प्रकार की है?", options: { A: "प्रकृति", B: "देशभक्ति", C: "व्यंग्य", D: "नाटक" }, answer: "B" },
    { question: "कवि का दृष्टिकोण कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "क्रोधित", D: "भयपूर्ण" }, answer: "B" },
    { question: "भारतवासी किसका हिस्सा हैं?", options: { A: "परिवार", B: "देश", C: "स्कूल", D: "मित्र" }, answer: "B" },
    { question: "कविता में कौन-सा गुण बताया गया है?", options: { A: "स्वार्थ", B: "एकता", C: "घमंड", D: "डर" }, answer: "B" },
  
    { question: "“भारत” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“हम” कौन-सा सर्वनाम है?", options: { A: "प्रथम पुरुष", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "A" },
    { question: "“रहते” किस काल को दर्शाता है?", options: { A: "भूतकाल", B: "वर्तमानकाल", C: "भविष्यकाल", D: "आदेश" }, answer: "B" },
    { question: "“एकता” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "भाववाचक", C: "जातिवाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“देश” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
  
    { question: "“भारत” का पर्यायवाची क्या है?", options: { A: "देश", B: "हिंदुस्तान", C: "राष्ट्र", D: "सभी" }, answer: "D" },
    { question: "“एकता” का विलोम क्या है?", options: { A: "मिलन", B: "अलगाव", C: "प्रेम", D: "शक्ति" }, answer: "B" },
    { question: "“देश” का विलोम क्या है?", options: { A: "विदेश", B: "राज्य", C: "गाँव", D: "शहर" }, answer: "A" },
    { question: "“हम” का वचन क्या है?", options: { A: "एकवचन", B: "बहुवचन", C: "द्विवचन", D: "कोई नहीं" }, answer: "B" },
    { question: "“राष्ट्र” का पर्यायवाची क्या है?", options: { A: "देश", B: "गाँव", C: "शहर", D: "घर" }, answer: "A" },
  
    { question: "कविता में कौन-सा रस है?", options: { A: "वीर", B: "भक्ति", C: "हास्य", D: "करुण" }, answer: "A" },
    { question: "कवि किस पर गर्व करता है?", options: { A: "धन", B: "देश", C: "मित्र", D: "परिवार" }, answer: "B" },
    { question: "कविता में क्या सिखाया गया है?", options: { A: "विरोध", B: "एकता", C: "डर", D: "घृणा" }, answer: "B" },
    { question: "भारतवासी किसके लिए कार्य करते हैं?", options: { A: "स्वार्थ", B: "देश", C: "धन", D: "मित्र" }, answer: "B" },
    { question: "कविता में किसका संदेश है?", options: { A: "विरोध", B: "एकता", C: "क्रोध", D: "डर" }, answer: "B" },
  
    { question: "कवि का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "देशप्रेम", C: "आलोचना", D: "व्यंग्य" }, answer: "B" },
    { question: "कविता किसे प्रेरित करती है?", options: { A: "बच्चों को", B: "भारतवासियों को", C: "शिक्षकों को", D: "मित्रों को" }, answer: "B" },
    { question: "भारतवासी किसका प्रतीक हैं?", options: { A: "एकता", B: "विरोध", C: "डर", D: "क्रोध" }, answer: "A" },
    { question: "कविता में कौन-सी भाषा है?", options: { A: "कठिन", B: "सरल", C: "विदेशी", D: "तकनीकी" }, answer: "B" },
    { question: "कविता का भाव कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "क्रोधित", D: "भयपूर्ण" }, answer: "B" },
  
    { question: "कवि किसे महान मानता है?", options: { A: "धनवान", B: "देश", C: "मित्र", D: "परिवार" }, answer: "B" },
    { question: "कविता का मुख्य उद्देश्य क्या है?", options: { A: "युद्ध", B: "देशप्रेम और एकता", C: "व्यापार", D: "राजनीति" }, answer: "B" },
    { question: "भारतवासी किसके लिए समर्पित हैं?", options: { A: "धन", B: "देश", C: "मित्र", D: "परिवार" }, answer: "B" },
    { question: "कविता में कौन-सा गुण प्रमुख है?", options: { A: "स्वार्थ", B: "एकता", C: "घमंड", D: "डर" }, answer: "B" },
    { question: "कवि का संदेश किसके लिए है?", options: { A: "बच्चों", B: "भारतवासियों", C: "शिक्षकों", D: "मित्रों" }, answer: "B" },
  
    { question: "“भारतवासी” शब्द का अर्थ क्या है?", options: { A: "विदेशी", B: "भारत में रहने वाले", C: "राजा", D: "सैनिक" }, answer: "B" },
    { question: "“हम” किसका संकेत करता है?", options: { A: "एक व्यक्ति", B: "सभी लोग", C: "वस्तु", D: "स्थान" }, answer: "B" },
    { question: "कविता में क्या प्रमुख है?", options: { A: "धन", B: "एकता", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "कवि किसे जोड़ना चाहता है?", options: { A: "परिवार", B: "देश", C: "मित्र", D: "स्कूल" }, answer: "B" },
    { question: "कविता का संदेश क्या है?", options: { A: "अलगाव", B: "एकता और देशप्रेम", C: "डर", D: "क्रोध" }, answer: "B" }
  ];
  const hindilesson4 = [
    { question: "“कण-कण का अधिकारी” कविता के कवि कौन हैं?", options: { A: "पंत", B: "दिनकर", C: "निराला", D: "महादेवी" }, answer: "B" },
    { question: "दिनकर किस प्रकार के कवि हैं?", options: { A: "प्रकृति", B: "देशभक्ति", C: "श्रृंगार", D: "हास्य" }, answer: "B" },
    { question: "कविता का मुख्य विषय क्या है?", options: { A: "प्रकृति", B: "समानता", C: "व्यापार", D: "युद्ध" }, answer: "B" },
    { question: "“कण-कण” का अर्थ क्या है?", options: { A: "थोड़ा", B: "हर हिस्सा", C: "कुछ नहीं", D: "एक वस्तु" }, answer: "B" },
    { question: "“अधिकारी” का अर्थ क्या है?", options: { A: "मालिक", B: "हकदार", C: "शिक्षक", D: "राजा" }, answer: "B" },
  
    { question: "कविता में किसका अधिकार बताया गया है?", options: { A: "राजा", B: "जनता", C: "हर व्यक्ति", D: "सैनिक" }, answer: "C" },
    { question: "दिनकर किसके पक्षधर हैं?", options: { A: "असमानता", B: "समानता", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "कविता का संदेश क्या है?", options: { A: "विरोध", B: "समान अधिकार", C: "डर", D: "क्रोध" }, answer: "B" },
    { question: "कवि किसके खिलाफ है?", options: { A: "समानता", B: "असमानता", C: "प्रेम", D: "सत्य" }, answer: "B" },
    { question: "कविता में कौन-सी भावना है?", options: { A: "घृणा", B: "न्याय", C: "डर", D: "क्रोध" }, answer: "B" },
  
    { question: "कवि क्या चाहता है?", options: { A: "असमानता", B: "समानता", C: "धन", D: "युद्ध" }, answer: "B" },
    { question: "“कण-कण” किसका प्रतीक है?", options: { A: "धन", B: "संपूर्णता", C: "क्रोध", D: "डर" }, answer: "B" },
    { question: "दिनकर की कविता किससे जुड़ी है?", options: { A: "समाज", B: "राजनीति", C: "प्रकृति", D: "व्यापार" }, answer: "A" },
    { question: "कविता किसे प्रेरित करती है?", options: { A: "राजा", B: "जनता", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
    { question: "कवि का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "समानता का संदेश", C: "आलोचना", D: "व्यंग्य" }, answer: "B" },
  
    { question: "दिनकर का जन्म कब हुआ?", options: { A: "1908", B: "1910", C: "1890", D: "1920" }, answer: "A" },
    { question: "दिनकर किस युग के कवि हैं?", options: { A: "भक्ति", B: "रीति", C: "आधुनिक", D: "आदिकाल" }, answer: "C" },
    { question: "दिनकर किस नाम से प्रसिद्ध हैं?", options: { A: "राष्ट्रकवि", B: "महाकवि", C: "कवि", D: "लेखक" }, answer: "A" },
    { question: "कविता में किसका विरोध है?", options: { A: "समानता", B: "अन्याय", C: "प्रेम", D: "सत्य" }, answer: "B" },
    { question: "कविता में क्या सिखाया गया है?", options: { A: "धन", B: "समानता", C: "युद्ध", D: "राजनीति" }, answer: "B" },
  
    { question: "“अधिकार” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "भाववाचक", C: "जातिवाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“दिनकर” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“मिलना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वह” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“समान” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“अधिकार” का पर्यायवाची क्या है?", options: { A: "हक", B: "धन", C: "शक्ति", D: "राजा" }, answer: "A" },
    { question: "“समानता” का विलोम क्या है?", options: { A: "न्याय", B: "असमानता", C: "प्रेम", D: "शक्ति" }, answer: "B" },
    { question: "“न्याय” का विलोम क्या है?", options: { A: "अन्याय", B: "सत्य", C: "प्रेम", D: "धन" }, answer: "A" },
    { question: "“जनता” का पर्यायवाची क्या है?", options: { A: "लोग", B: "राजा", C: "सैनिक", D: "शिक्षक" }, answer: "A" },
    { question: "“धन” का विलोम क्या है?", options: { A: "गरीबी", B: "शक्ति", C: "राजा", D: "प्रेम" }, answer: "A" },
  
    { question: "कविता में कौन-सा रस है?", options: { A: "वीर", B: "भक्ति", C: "हास्य", D: "करुण" }, answer: "A" },
    { question: "कवि किस पर जोर देता है?", options: { A: "धन", B: "अधिकार", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "कविता में कौन-सा गुण प्रमुख है?", options: { A: "स्वार्थ", B: "न्याय", C: "घमंड", D: "डर" }, answer: "B" },
    { question: "दिनकर किसके लिए प्रसिद्ध हैं?", options: { A: "प्रेम", B: "देशभक्ति", C: "हास्य", D: "व्यापार" }, answer: "B" },
    { question: "कविता का भाव कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "डर", D: "क्रोध" }, answer: "B" },
  
    { question: "कवि का संदेश किसके लिए है?", options: { A: "राजा", B: "जनता", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
    { question: "कविता में क्या प्रमुख है?", options: { A: "धन", B: "समानता", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "दिनकर किसका समर्थन करते हैं?", options: { A: "असमानता", B: "समानता", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "कविता किसका विरोध करती है?", options: { A: "समानता", B: "अन्याय", C: "प्रेम", D: "सत्य" }, answer: "B" },
    { question: "कविता का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "समान अधिकार", C: "व्यंग्य", D: "आलोचना" }, answer: "B" },
  
    { question: "“कण-कण” का अर्थ क्या है?", options: { A: "थोड़ा", B: "हर भाग", C: "कुछ नहीं", D: "एक वस्तु" }, answer: "B" },
    { question: "कवि किसे अधिकार देना चाहता है?", options: { A: "राजा", B: "हर व्यक्ति", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
    { question: "कविता में किसका महत्व है?", options: { A: "धन", B: "न्याय", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "दिनकर का मुख्य संदेश क्या है?", options: { A: "असमानता", B: "समानता", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "कविता में क्या सिखाया गया है?", options: { A: "स्वार्थ", B: "न्याय और समानता", C: "घमंड", D: "डर" }, answer: "B" }
  ];
  const hindilesson5 = [
    { question: "“लोकगीत” पाठ के लेखक कौन हैं?", options: { A: "प्रेमचंद", B: "भगवतराम उपाध्याय", C: "दिनकर", D: "पंत" }, answer: "B" },
    { question: "“लोकगीत” किस प्रकार की रचना है?", options: { A: "कविता", B: "कहानी", C: "निबंध", D: "नाटक" }, answer: "C" },
    { question: "लोकगीत क्या होते हैं?", options: { A: "राजनीतिक गीत", B: "जनता के गीत", C: "फिल्मी गीत", D: "भक्ति गीत" }, answer: "B" },
    { question: "लोकगीत किससे जुड़े होते हैं?", options: { A: "राजनीति", B: "जनजीवन", C: "व्यापार", D: "युद्ध" }, answer: "B" },
    { question: "लोकगीत किसके द्वारा गाए जाते हैं?", options: { A: "राजा", B: "जनता", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
  
    { question: "लोकगीतों में क्या झलकता है?", options: { A: "धन", B: "संस्कृति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "लोकगीत किस भाषा में होते हैं?", options: { A: "कठिन", B: "सरल", C: "विदेशी", D: "तकनीकी" }, answer: "B" },
    { question: "लोकगीतों का मुख्य उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "ज्ञान", C: "संस्कृति संरक्षण", D: "सभी" }, answer: "D" },
    { question: "लोकगीत किस अवसर पर गाए जाते हैं?", options: { A: "त्योहार", B: "शादी", C: "कार्य", D: "सभी" }, answer: "D" },
    { question: "लोकगीत किसका हिस्सा हैं?", options: { A: "राजनीति", B: "संस्कृति", C: "व्यापार", D: "युद्ध" }, answer: "B" },
  
    { question: "लोकगीतों में क्या प्रमुख है?", options: { A: "धन", B: "भावना", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "लेखक लोकगीतों को क्या मानता है?", options: { A: "धन", B: "संस्कृति की धरोहर", C: "शक्ति", D: "व्यापार" }, answer: "B" },
    { question: "लोकगीत किसे जोड़ते हैं?", options: { A: "परिवार", B: "समाज", C: "देश", D: "सभी" }, answer: "D" },
    { question: "लोकगीतों का स्वरूप कैसा होता है?", options: { A: "कठिन", B: "सरल", C: "तकनीकी", D: "विदेशी" }, answer: "B" },
    { question: "लोकगीत किसके अनुभव को व्यक्त करते हैं?", options: { A: "राजा", B: "जनता", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
  
    { question: "लोकगीतों में क्या पाया जाता है?", options: { A: "संस्कृति", B: "परंपरा", C: "भावना", D: "सभी" }, answer: "D" },
    { question: "लोकगीतों का संबंध किससे है?", options: { A: "जनजीवन", B: "राजनीति", C: "युद्ध", D: "व्यापार" }, answer: "A" },
    { question: "लोकगीतों का महत्व क्या है?", options: { A: "संस्कृति संरक्षण", B: "मनोरंजन", C: "ज्ञान", D: "सभी" }, answer: "D" },
    { question: "लोकगीत किसे दर्शाते हैं?", options: { A: "जीवन", B: "संस्कृति", C: "भावना", D: "सभी" }, answer: "D" },
    { question: "लेखक का दृष्टिकोण कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "क्रोधित", D: "भयपूर्ण" }, answer: "B" },
  
    { question: "“लोक” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“गीत” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“गाना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वे” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“सरल” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“लोक” का पर्यायवाची क्या है?", options: { A: "जनता", B: "राजा", C: "सैनिक", D: "शिक्षक" }, answer: "A" },
    { question: "“गीत” का पर्यायवाची क्या है?", options: { A: "गान", B: "कविता", C: "शब्द", D: "लेख" }, answer: "A" },
    { question: "“सरल” का विलोम क्या है?", options: { A: "आसान", B: "कठिन", C: "छोटा", D: "बड़ा" }, answer: "B" },
    { question: "“संस्कृति” का पर्यायवाची क्या है?", options: { A: "परंपरा", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“पुराना” का विलोम क्या है?", options: { A: "नया", B: "बड़ा", C: "छोटा", D: "अच्छा" }, answer: "A" },
  
    { question: "लोकगीतों में क्या प्रमुख है?", options: { A: "धन", B: "भावना", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "लेखक क्या बचाने की बात करता है?", options: { A: "धन", B: "संस्कृति", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "लोकगीत किसे जोड़ते हैं?", options: { A: "समाज", B: "परिवार", C: "देश", D: "सभी" }, answer: "D" },
    { question: "लोकगीत किसका प्रतीक हैं?", options: { A: "संस्कृति", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "लेखक किसका समर्थन करता है?", options: { A: "संस्कृति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
  
    { question: "लोकगीत किसका दर्पण हैं?", options: { A: "जीवन", B: "संस्कृति", C: "समाज", D: "सभी" }, answer: "D" },
    { question: "लोकगीतों का महत्व क्यों है?", options: { A: "संस्कृति", B: "परंपरा", C: "इतिहास", D: "सभी" }, answer: "D" },
    { question: "लेखक का मुख्य संदेश क्या है?", options: { A: "संस्कृति बचाओ", B: "धन कमाओ", C: "युद्ध करो", D: "राजनीति करो" }, answer: "A" },
    { question: "लोकगीतों की भाषा कैसी होती है?", options: { A: "कठिन", B: "सरल", C: "विदेशी", D: "तकनीकी" }, answer: "B" },
    { question: "लोकगीत किसके अनुभव दर्शाते हैं?", options: { A: "जनता", B: "राजा", C: "सैनिक", D: "शिक्षक" }, answer: "A" },
  
    { question: "लोकगीत किससे संबंधित हैं?", options: { A: "संस्कृति", B: "राजनीति", C: "युद्ध", D: "व्यापार" }, answer: "A" },
    { question: "लेखक लोकगीतों को क्या मानता है?", options: { A: "धरोहर", B: "धन", C: "शक्ति", D: "व्यापार" }, answer: "A" },
    { question: "लोकगीतों में क्या सिखाया जाता है?", options: { A: "संस्कृति", B: "परंपरा", C: "भावना", D: "सभी" }, answer: "D" },
    { question: "लोकगीत किसे प्रेरित करते हैं?", options: { A: "समाज", B: "जनता", C: "देश", D: "सभी" }, answer: "D" },
    { question: "लोकगीतों का उद्देश्य क्या है?", options: { A: "संस्कृति संरक्षण", B: "मनोरंजन", C: "ज्ञान", D: "सभी" }, answer: "D" }
  ];
  const hindilesson6 = [
    { question: "“अंतर्राष्ट्रीय स्तर पर हिंदी” किस प्रकार की रचना है?", options: { A: "कविता", B: "कहानी", C: "पत्र", D: "निबंध" }, answer: "C" },
    { question: "इस पाठ का मुख्य विषय क्या है?", options: { A: "प्रकृति", B: "हिंदी भाषा का महत्व", C: "युद्ध", D: "व्यापार" }, answer: "B" },
    { question: "हिंदी का प्रसार कहाँ हो रहा है?", options: { A: "केवल भारत में", B: "केवल विदेशों में", C: "विश्व स्तर पर", D: "कहीं नहीं" }, answer: "C" },
    { question: "हिंदी किस प्रकार की भाषा है?", options: { A: "क्षेत्रीय", B: "राष्ट्रीय", C: "अंतर्राष्ट्रीय", D: "स्थानीय" }, answer: "C" },
    { question: "हिंदी का महत्व क्यों बढ़ रहा है?", options: { A: "राजनीति", B: "वैश्विक उपयोग", C: "युद्ध", D: "धन" }, answer: "B" },
  
    { question: "पत्र किसके लिए लिखा जाता है?", options: { A: "स्वयं", B: "दूसरे व्यक्ति", C: "पशु", D: "वस्तु" }, answer: "B" },
    { question: "पत्र का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "संदेश देना", C: "व्यापार", D: "युद्ध" }, answer: "B" },
    { question: "हिंदी किस लिपि में लिखी जाती है?", options: { A: "रोमन", B: "देवनागरी", C: "अरबी", D: "फारसी" }, answer: "B" },
    { question: "हिंदी किस देश की भाषा है?", options: { A: "नेपाल", B: "भारत", C: "चीन", D: "अमेरिका" }, answer: "B" },
    { question: "हिंदी का उपयोग कहाँ होता है?", options: { A: "केवल घर में", B: "केवल स्कूल में", C: "विश्व स्तर पर", D: "कहीं नहीं" }, answer: "C" },
  
    { question: "पत्र में सबसे ऊपर क्या लिखा जाता है?", options: { A: "नाम", B: "पता", C: "समाचार", D: "समाप्ति" }, answer: "B" },
    { question: "पत्र के अंत में क्या लिखा जाता है?", options: { A: "पता", B: "नाम", C: "समाचार", D: "तारीख" }, answer: "B" },
    { question: "पत्र में तारीख कहाँ लिखते हैं?", options: { A: "बीच में", B: "ऊपर", C: "नीचे", D: "कहीं नहीं" }, answer: "B" },
    { question: "पत्र का प्रारंभ किससे होता है?", options: { A: "समाप्ति", B: "संबोधन", C: "नाम", D: "पता" }, answer: "B" },
    { question: "पत्र का अंत किससे होता है?", options: { A: "संबोधन", B: "हस्ताक्षर", C: "पता", D: "तारीख" }, answer: "B" },
  
    { question: "हिंदी किस प्रकार फैल रही है?", options: { A: "धीरे", B: "तेजी से", C: "नहीं फैल रही", D: "कम" }, answer: "B" },
    { question: "हिंदी का प्रचार कैसे हो रहा है?", options: { A: "मीडिया", B: "शिक्षा", C: "तकनीक", D: "सभी" }, answer: "D" },
    { question: "हिंदी किसका माध्यम बन रही है?", options: { A: "संचार", B: "युद्ध", C: "धन", D: "राजनीति" }, answer: "A" },
    { question: "पत्र में भाषा कैसी होनी चाहिए?", options: { A: "कठिन", B: "सरल", C: "विदेशी", D: "तकनीकी" }, answer: "B" },
    { question: "पत्र किसके बीच होता है?", options: { A: "दो व्यक्तियों", B: "तीन व्यक्तियों", C: "चार व्यक्तियों", D: "कोई नहीं" }, answer: "A" },
  
    { question: "“हिंदी” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“पत्र” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“लिखना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“आप” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "B" },
    { question: "“सरल” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“भाषा” का पर्यायवाची क्या है?", options: { A: "वाणी", B: "शक्ति", C: "धन", D: "राजनीति" }, answer: "A" },
    { question: "“सरल” का विलोम क्या है?", options: { A: "आसान", B: "कठिन", C: "छोटा", D: "बड़ा" }, answer: "B" },
    { question: "“प्रसार” का अर्थ क्या है?", options: { A: "रोकना", B: "फैलाना", C: "कम करना", D: "बढ़ाना" }, answer: "B" },
    { question: "“विश्व” का पर्यायवाची क्या है?", options: { A: "जगत", B: "घर", C: "गाँव", D: "शहर" }, answer: "A" },
    { question: "“नया” का विलोम क्या है?", options: { A: "पुराना", B: "छोटा", C: "बड़ा", D: "अच्छा" }, answer: "A" },
  
    { question: "हिंदी का महत्व क्यों बढ़ रहा है?", options: { A: "धन", B: "वैश्विक उपयोग", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "पत्र किसका माध्यम है?", options: { A: "संचार", B: "युद्ध", C: "धन", D: "राजनीति" }, answer: "A" },
    { question: "हिंदी किसे जोड़ती है?", options: { A: "लोगों को", B: "देशों को", C: "संस्कृतियों को", D: "सभी" }, answer: "D" },
    { question: "हिंदी का भविष्य कैसा है?", options: { A: "अंधकारमय", B: "उज्ज्वल", C: "कमजोर", D: "अस्थिर" }, answer: "B" },
    { question: "हिंदी किस क्षेत्र में बढ़ रही है?", options: { A: "शिक्षा", B: "मीडिया", C: "तकनीक", D: "सभी" }, answer: "D" },
  
    { question: "पत्र में क्या आवश्यक है?", options: { A: "संदेश", B: "संबोधन", C: "हस्ताक्षर", D: "सभी" }, answer: "D" },
    { question: "पत्र का स्वर कैसा होना चाहिए?", options: { A: "कठिन", B: "स्पष्ट", C: "क्रोधित", D: "डरावना" }, answer: "B" },
    { question: "हिंदी किसका माध्यम है?", options: { A: "संचार", B: "युद्ध", C: "धन", D: "राजनीति" }, answer: "A" },
    { question: "पत्र किसे लिखा जाता है?", options: { A: "स्वयं", B: "दूसरे व्यक्ति", C: "पशु", D: "वस्तु" }, answer: "B" },
    { question: "हिंदी का विकास किससे हो रहा है?", options: { A: "तकनीक", B: "शिक्षा", C: "मीडिया", D: "सभी" }, answer: "D" },
  
    { question: "हिंदी किसका प्रतीक है?", options: { A: "संस्कृति", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "पत्र का मुख्य कार्य क्या है?", options: { A: "संदेश देना", B: "युद्ध", C: "धन", D: "राजनीति" }, answer: "A" },
    { question: "हिंदी किसे जोड़ती है?", options: { A: "समाज", B: "देश", C: "विश्व", D: "सभी" }, answer: "D" },
    { question: "पत्र में क्या सिखाया गया है?", options: { A: "संचार", B: "भाषा", C: "संस्कृति", D: "सभी" }, answer: "D" },
    { question: "हिंदी का महत्व क्या है?", options: { A: "वैश्विक", B: "स्थानीय", C: "क्षेत्रीय", D: "कोई नहीं" }, answer: "A" }
  ];
  const hindilesson7 = [
    { question: "“भक्ति पद” के रचयिता कौन हैं?", options: { A: "कबीर", B: "मीराबाई", C: "तुलसीदास", D: "सूरदास" }, answer: "B" },
    { question: "मीराबाई किस युग की कवयित्री हैं?", options: { A: "रीति काल", B: "भक्ति काल", C: "आधुनिक काल", D: "आदिकाल" }, answer: "B" },
    { question: "मीराबाई किसकी भक्ति करती थीं?", options: { A: "राम", B: "कृष्ण", C: "शिव", D: "गणेश" }, answer: "B" },
    { question: "भक्ति पद का मुख्य विषय क्या है?", options: { A: "युद्ध", B: "भक्ति", C: "प्रकृति", D: "राजनीति" }, answer: "B" },
    { question: "मीराबाई का संबंध किससे है?", options: { A: "राजनीति", B: "भक्ति", C: "व्यापार", D: "युद्ध" }, answer: "B" },
  
    { question: "कविता में किसके प्रति प्रेम व्यक्त किया गया है?", options: { A: "राजा", B: "कृष्ण", C: "मित्र", D: "परिवार" }, answer: "B" },
    { question: "मीराबाई किस प्रकार की भक्त थीं?", options: { A: "निर्गुण", B: "सगुण", C: "दोनों", D: "कोई नहीं" }, answer: "B" },
    { question: "कविता का भाव क्या है?", options: { A: "क्रोध", B: "भक्ति", C: "डर", D: "हास्य" }, answer: "B" },
    { question: "मीराबाई का जीवन किससे प्रभावित था?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "कविता में कौन-सा रस है?", options: { A: "वीर", B: "भक्ति", C: "हास्य", D: "करुण" }, answer: "B" },
  
    { question: "मीराबाई का जन्म कब हुआ था?", options: { A: "1498", B: "1500", C: "1480", D: "1520" }, answer: "A" },
    { question: "मीराबाई किसकी भक्त थीं?", options: { A: "राम", B: "कृष्ण", C: "शिव", D: "गणेश" }, answer: "B" },
    { question: "भक्ति पद में क्या व्यक्त किया गया है?", options: { A: "प्रेम", B: "भक्ति", C: "समर्पण", D: "सभी" }, answer: "D" },
    { question: "कविता में कौन-सी भावना है?", options: { A: "घृणा", B: "प्रेम", C: "भक्ति", D: "डर" }, answer: "C" },
    { question: "मीराबाई का लक्ष्य क्या था?", options: { A: "धन", B: "कृष्ण भक्ति", C: "राजनीति", D: "युद्ध" }, answer: "B" },
  
    { question: "कविता का संदेश क्या है?", options: { A: "धन", B: "भक्ति और समर्पण", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "मीराबाई किसके लिए प्रसिद्ध हैं?", options: { A: "राजनीति", B: "भक्ति गीत", C: "व्यापार", D: "युद्ध" }, answer: "B" },
    { question: "कविता किस प्रकार की है?", options: { A: "देशभक्ति", B: "भक्ति", C: "प्रकृति", D: "व्यंग्य" }, answer: "B" },
    { question: "मीराबाई का जीवन किसका उदाहरण है?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "कविता में क्या प्रमुख है?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
  
    { question: "“मीराबाई” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“कृष्ण” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“भक्ति” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "C" },
    { question: "“गाना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वह” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
  
    { question: "“भक्ति” का पर्यायवाची क्या है?", options: { A: "प्रेम", B: "श्रद्धा", C: "पूजा", D: "सभी" }, answer: "D" },
    { question: "“प्रेम” का विलोम क्या है?", options: { A: "घृणा", B: "शक्ति", C: "धन", D: "राजनीति" }, answer: "A" },
    { question: "“समर्पण” का अर्थ क्या है?", options: { A: "त्याग", B: "अर्पण", C: "दोनों", D: "कोई नहीं" }, answer: "C" },
    { question: "“भगवान” का पर्यायवाची क्या है?", options: { A: "ईश्वर", B: "देव", C: "प्रभु", D: "सभी" }, answer: "D" },
    { question: "“दुख” का विलोम क्या है?", options: { A: "आनंद", B: "क्रोध", C: "डर", D: "घृणा" }, answer: "A" },
  
    { question: "मीराबाई का जीवन किससे जुड़ा है?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "कविता किसे प्रेरित करती है?", options: { A: "राजा", B: "भक्तों को", C: "सैनिक", D: "व्यापारी" }, answer: "B" },
    { question: "कविता में कौन-सा गुण है?", options: { A: "स्वार्थ", B: "समर्पण", C: "घमंड", D: "डर" }, answer: "B" },
    { question: "मीराबाई किसका उदाहरण हैं?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "कविता का भाव कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "डर", D: "क्रोध" }, answer: "B" },
  
    { question: "कवि का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "भक्ति का संदेश", C: "आलोचना", D: "व्यंग्य" }, answer: "B" },
    { question: "मीराबाई किससे प्रेम करती हैं?", options: { A: "धन", B: "कृष्ण", C: "राजा", D: "मित्र" }, answer: "B" },
    { question: "कविता में क्या प्रमुख है?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "भक्ति पद किसका उदाहरण है?", options: { A: "भक्ति", B: "प्रकृति", C: "व्यंग्य", D: "देशभक्ति" }, answer: "A" },
    { question: "मीराबाई का संदेश क्या है?", options: { A: "धन कमाओ", B: "भगवान से प्रेम करो", C: "युद्ध करो", D: "राजनीति करो" }, answer: "B" },
  
    { question: "कविता में कौन-सी भावना प्रमुख है?", options: { A: "घृणा", B: "भक्ति", C: "क्रोध", D: "डर" }, answer: "B" },
    { question: "भक्ति पद किसके लिए लिखा गया है?", options: { A: "राजा", B: "भगवान", C: "मित्र", D: "परिवार" }, answer: "B" },
    { question: "मीराबाई का जीवन किसका प्रतीक है?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "कविता में क्या सिखाया गया है?", options: { A: "धन", B: "भक्ति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "भक्ति पद का मुख्य संदेश क्या है?", options: { A: "धन", B: "भक्ति और समर्पण", C: "युद्ध", D: "राजनीति" }, answer: "B" }
  ];
  const hindilesson8 = [
    { question: "“स्वराज्य की नींव” के लेखक कौन हैं?", options: { A: "प्रेमचंद", B: "विष्णु प्रभाकर", C: "दिनकर", D: "पंत" }, answer: "B" },
    { question: "यह रचना किस प्रकार की है?", options: { A: "कविता", B: "कहानी", C: "एकांकी", D: "निबंध" }, answer: "C" },
    { question: "“स्वराज्य” का अर्थ क्या है?", options: { A: "विदेशी शासन", B: "स्वयं का शासन", C: "राजा का शासन", D: "सैनिक शासन" }, answer: "B" },
    { question: "इस एकांकी का मुख्य विषय क्या है?", options: { A: "प्रकृति", B: "स्वतंत्रता", C: "व्यापार", D: "युद्ध" }, answer: "B" },
    { question: "स्वराज्य किसका अधिकार है?", options: { A: "राजा", B: "जनता", C: "विदेशी", D: "सैनिक" }, answer: "B" },
  
    { question: "एकांकी में किसका महत्व बताया गया है?", options: { A: "धन", B: "एकता", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "स्वराज्य की नींव किस पर आधारित है?", options: { A: "धन", B: "जनता", C: "शक्ति", D: "युद्ध" }, answer: "B" },
    { question: "लेखक किसका समर्थन करता है?", options: { A: "हिंसा", B: "अहिंसा", C: "युद्ध", D: "धन" }, answer: "B" },
    { question: "एकांकी में कौन-सी भावना है?", options: { A: "घृणा", B: "देशप्रेम", C: "डर", D: "क्रोध" }, answer: "B" },
    { question: "लेखक किसके खिलाफ है?", options: { A: "अहिंसा", B: "हिंसा", C: "प्रेम", D: "सत्य" }, answer: "B" },
  
    { question: "एकांकी का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "देशभक्ति और जागरूकता", C: "व्यापार", D: "राजनीति" }, answer: "B" },
    { question: "स्वराज्य कैसे प्राप्त होता है?", options: { A: "हिंसा", B: "अहिंसा", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "लेखक का दृष्टिकोण कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "क्रोधित", D: "भयपूर्ण" }, answer: "B" },
    { question: "एकांकी में किसका महत्व है?", options: { A: "धन", B: "जनता", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "स्वराज्य का संबंध किससे है?", options: { A: "गुलामी", B: "स्वतंत्रता", C: "धन", D: "राजनीति" }, answer: "B" },
  
    { question: "विष्णु प्रभाकर किस प्रकार के लेखक हैं?", options: { A: "कवि", B: "नाटककार", C: "वैज्ञानिक", D: "व्यापारी" }, answer: "B" },
    { question: "एकांकी में क्या सिखाया गया है?", options: { A: "धन", B: "देशप्रेम", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "स्वराज्य के लिए क्या आवश्यक है?", options: { A: "एकता", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "एकांकी किसका संदेश देता है?", options: { A: "विरोध", B: "एकता", C: "डर", D: "क्रोध" }, answer: "B" },
    { question: "लेखक किसे प्रेरित करता है?", options: { A: "राजा", B: "जनता", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
  
    { question: "“स्वराज्य” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "भाववाचक", C: "जातिवाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“जनता” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“करना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वे” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“स्वतंत्र” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“स्वराज्य” का पर्यायवाची क्या है?", options: { A: "आजादी", B: "गुलामी", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“अहिंसा” का विलोम क्या है?", options: { A: "प्रेम", B: "हिंसा", C: "सत्य", D: "शक्ति" }, answer: "B" },
    { question: "“स्वतंत्रता” का विलोम क्या है?", options: { A: "गुलामी", B: "प्रेम", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“जनता” का पर्यायवाची क्या है?", options: { A: "लोग", B: "राजा", C: "सैनिक", D: "शिक्षक" }, answer: "A" },
    { question: "“एकता” का विलोम क्या है?", options: { A: "मिलन", B: "अलगाव", C: "प्रेम", D: "शक्ति" }, answer: "B" },
  
    { question: "एकांकी में कौन-सा रस है?", options: { A: "वीर", B: "भक्ति", C: "हास्य", D: "करुण" }, answer: "A" },
    { question: "लेखक किस पर जोर देता है?", options: { A: "धन", B: "एकता", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "एकांकी में कौन-सा गुण प्रमुख है?", options: { A: "स्वार्थ", B: "देशप्रेम", C: "घमंड", D: "डर" }, answer: "B" },
    { question: "स्वराज्य किसका प्रतीक है?", options: { A: "गुलामी", B: "स्वतंत्रता", C: "धन", D: "राजनीति" }, answer: "B" },
    { question: "लेखक का मुख्य संदेश क्या है?", options: { A: "हिंसा", B: "अहिंसा और एकता", C: "धन", D: "राजनीति" }, answer: "B" },
  
    { question: "एकांकी का अंत कैसा है?", options: { A: "दुखद", B: "प्रेरणादायक", C: "भयावह", D: "सामान्य" }, answer: "B" },
    { question: "लेखक किसका समर्थन करता है?", options: { A: "हिंसा", B: "अहिंसा", C: "युद्ध", D: "धन" }, answer: "B" },
    { question: "स्वराज्य के लिए क्या जरूरी है?", options: { A: "एकता", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "एकांकी में क्या प्रमुख है?", options: { A: "धन", B: "स्वतंत्रता", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "लेखक किसे जागरूक करता है?", options: { A: "राजा", B: "जनता", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
  
    { question: "“स्वराज्य की नींव” किसका उदाहरण है?", options: { A: "भक्ति", B: "देशभक्ति", C: "प्रकृति", D: "व्यंग्य" }, answer: "B" },
    { question: "एकांकी में क्या सिखाया गया है?", options: { A: "धन", B: "एकता और स्वतंत्रता", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "लेखक का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "जागरूकता", C: "व्यापार", D: "राजनीति" }, answer: "B" },
    { question: "स्वराज्य किसके लिए है?", options: { A: "राजा", B: "जनता", C: "विदेशी", D: "सैनिक" }, answer: "B" },
    { question: "एकांकी का मुख्य संदेश क्या है?", options: { A: "धन", B: "अहिंसा और एकता", C: "युद्ध", D: "राजनीति" }, answer: "B" }
  ];
  const hindilesson9 = [
    { question: "“दक्षिणी गंगा गोदावरी” के लेखक कौन हैं?", options: { A: "प्रेमचंद", B: "काका कालेलकर", C: "दिनकर", D: "पंत" }, answer: "B" },
    { question: "यह रचना किस प्रकार की है?", options: { A: "कविता", B: "कहानी", C: "यात्रा-वृत्तांत", D: "नाटक" }, answer: "C" },
    { question: "गोदावरी नदी को क्या कहा जाता है?", options: { A: "उत्तर गंगा", B: "दक्षिणी गंगा", C: "पश्चिम गंगा", D: "पूर्व गंगा" }, answer: "B" },
    { question: "गोदावरी नदी कहाँ स्थित है?", options: { A: "उत्तर भारत", B: "दक्षिण भारत", C: "पूर्व भारत", D: "पश्चिम भारत" }, answer: "B" },
    { question: "यात्रा-वृत्तांत में क्या वर्णन होता है?", options: { A: "कहानी", B: "यात्रा अनुभव", C: "कविता", D: "नाटक" }, answer: "B" },
  
    { question: "काका कालेलकर किस प्रकार के लेखक हैं?", options: { A: "कवि", B: "निबंधकार", C: "यात्रा लेखक", D: "सभी" }, answer: "D" },
    { question: "गोदावरी नदी का महत्व क्या है?", options: { A: "धार्मिक", B: "सांस्कृतिक", C: "भौगोलिक", D: "सभी" }, answer: "D" },
    { question: "गोदावरी किन राज्यों से बहती है?", options: { A: "केवल एक", B: "कई राज्यों", C: "कोई नहीं", D: "विदेश" }, answer: "B" },
    { question: "यात्रा-वृत्तांत का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "जानकारी देना", C: "अनुभव साझा करना", D: "सभी" }, answer: "D" },
    { question: "गोदावरी का स्रोत कहाँ है?", options: { A: "हिमालय", B: "नासिक", C: "दिल्ली", D: "कश्मीर" }, answer: "B" },
  
    { question: "लेखक ने यात्रा में क्या देखा?", options: { A: "प्रकृति", B: "संस्कृति", C: "धार्मिक स्थल", D: "सभी" }, answer: "D" },
    { question: "गोदावरी का जल कैसा बताया गया है?", options: { A: "गंदा", B: "पवित्र", C: "सूखा", D: "कठिन" }, answer: "B" },
    { question: "लेखक का दृष्टिकोण कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "क्रोधित", D: "भयपूर्ण" }, answer: "B" },
    { question: "यात्रा-वृत्तांत में क्या प्रमुख है?", options: { A: "धन", B: "अनुभव", C: "राजनीति", D: "युद्ध" }, answer: "B" },
    { question: "गोदावरी का संबंध किससे है?", options: { A: "धर्म", B: "संस्कृति", C: "प्रकृति", D: "सभी" }, answer: "D" },
  
    { question: "काका कालेलकर किसके लिए प्रसिद्ध हैं?", options: { A: "कविता", B: "यात्रा-वृत्तांत", C: "नाटक", D: "व्यापार" }, answer: "B" },
    { question: "यात्रा-वृत्तांत में क्या सिखाया गया है?", options: { A: "प्रकृति प्रेम", B: "संस्कृति", C: "ज्ञान", D: "सभी" }, answer: "D" },
    { question: "गोदावरी को पवित्र क्यों माना जाता है?", options: { A: "धर्म", B: "संस्कृति", C: "परंपरा", D: "सभी" }, answer: "D" },
    { question: "लेखक ने क्या अनुभव किया?", options: { A: "आनंद", B: "शांति", C: "भक्ति", D: "सभी" }, answer: "D" },
    { question: "यात्रा-वृत्तांत का भाव कैसा है?", options: { A: "नकारात्मक", B: "सकारात्मक", C: "डर", D: "क्रोध" }, answer: "B" },
  
    { question: "“गोदावरी” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“नदी” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“बहना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वह” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“पवित्र” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“नदी” का पर्यायवाची क्या है?", options: { A: "सरिता", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“पवित्र” का विलोम क्या है?", options: { A: "अशुद्ध", B: "साफ", C: "अच्छा", D: "बड़ा" }, answer: "A" },
    { question: "“यात्रा” का अर्थ क्या है?", options: { A: "रुकना", B: "घूमना", C: "चलना", D: "सोना" }, answer: "B" },
    { question: "“प्रकृति” का पर्यायवाची क्या है?", options: { A: "नेचर", B: "स्वभाव", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "“नया” का विलोम क्या है?", options: { A: "पुराना", B: "छोटा", C: "बड़ा", D: "अच्छा" }, answer: "A" },
  
    { question: "गोदावरी किसका प्रतीक है?", options: { A: "धन", B: "पवित्रता", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "लेखक का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "जानकारी देना", C: "अनुभव साझा करना", D: "सभी" }, answer: "D" },
    { question: "यात्रा-वृत्तांत में क्या प्रमुख है?", options: { A: "धन", B: "अनुभव", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "गोदावरी का महत्व क्या है?", options: { A: "धार्मिक", B: "सांस्कृतिक", C: "भौगोलिक", D: "सभी" }, answer: "D" },
    { question: "लेखक किसे प्रेरित करता है?", options: { A: "राजा", B: "पाठक", C: "सैनिक", D: "शिक्षक" }, answer: "B" },
  
    { question: "यात्रा-वृत्तांत किसका वर्णन करता है?", options: { A: "युद्ध", B: "यात्रा अनुभव", C: "धन", D: "राजनीति" }, answer: "B" },
    { question: "गोदावरी कहाँ बहती है?", options: { A: "उत्तर भारत", B: "दक्षिण भारत", C: "विदेश", D: "कहीं नहीं" }, answer: "B" },
    { question: "लेखक का भाव कैसा है?", options: { A: "सकारात्मक", B: "नकारात्मक", C: "डर", D: "क्रोध" }, answer: "A" },
    { question: "गोदावरी किसे जोड़ती है?", options: { A: "समाज", B: "संस्कृति", C: "धर्म", D: "सभी" }, answer: "D" },
    { question: "यात्रा-वृत्तांत का मुख्य संदेश क्या है?", options: { A: "प्रकृति और संस्कृति का महत्व", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
  
    { question: "काका कालेलकर का योगदान किसमें है?", options: { A: "कविता", B: "यात्रा-वृत्तांत", C: "नाटक", D: "व्यापार" }, answer: "B" },
    { question: "गोदावरी का जल कैसा है?", options: { A: "गंदा", B: "पवित्र", C: "सूखा", D: "खारा" }, answer: "B" },
    { question: "लेखक ने क्या अनुभव किया?", options: { A: "आनंद", B: "शांति", C: "भक्ति", D: "सभी" }, answer: "D" },
    { question: "यात्रा-वृत्तांत में क्या सिखाया गया है?", options: { A: "प्रकृति प्रेम", B: "संस्कृति", C: "ज्ञान", D: "सभी" }, answer: "D" },
    { question: "गोदावरी किसका प्रतीक है?", options: { A: "धन", B: "पवित्रता", C: "राजनीति", D: "युद्ध" }, answer: "B" }
  ];
  const hindilesson10 = [
    { question: "“नीति दोहे” किन कवियों की रचना है?", options: { A: "कबीर, तुलसी", B: "रहीम, बिहारी", C: "सूर, मीरा", D: "दिनकर, पंत" }, answer: "B" },
    { question: "रहीम किस काल के कवि हैं?", options: { A: "भक्ति काल", B: "रीति काल", C: "आधुनिक काल", D: "आदिकाल" }, answer: "B" },
    { question: "बिहारी किस काल के कवि हैं?", options: { A: "भक्ति काल", B: "रीति काल", C: "आधुनिक काल", D: "आदिकाल" }, answer: "B" },
    { question: "दोहा किस प्रकार की रचना है?", options: { A: "गद्य", B: "पद्य", C: "नाटक", D: "निबंध" }, answer: "B" },
    { question: "नीति दोहों का मुख्य उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "नीति सिखाना", C: "युद्ध", D: "राजनीति" }, answer: "B" },
  
    { question: "रहीम के दोहों में क्या प्रमुख है?", options: { A: "प्रेम", B: "नीति", C: "प्रकृति", D: "युद्ध" }, answer: "B" },
    { question: "बिहारी के दोहों की विशेषता क्या है?", options: { A: "सरलता", B: "संक्षिप्तता", C: "अलंकार", D: "सभी" }, answer: "D" },
    { question: "दोहा में कितनी पंक्तियाँ होती हैं?", options: { A: "1", B: "2", C: "3", D: "4" }, answer: "B" },
    { question: "दोहा का छंद क्या है?", options: { A: "16-14 मात्राएँ", B: "12-12", C: "10-10", D: "8-8" }, answer: "A" },
    { question: "नीति दोहों का विषय क्या है?", options: { A: "प्रकृति", B: "जीवन ज्ञान", C: "युद्ध", D: "राजनीति" }, answer: "B" },
  
    { question: "रहीम किसके लिए प्रसिद्ध हैं?", options: { A: "कविता", B: "नीति दोहे", C: "नाटक", D: "कहानी" }, answer: "B" },
    { question: "बिहारी किसके लिए प्रसिद्ध हैं?", options: { A: "दोहा", B: "नाटक", C: "कहानी", D: "निबंध" }, answer: "A" },
    { question: "दोहा में क्या सिखाया जाता है?", options: { A: "धन", B: "नीति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "रहीम के दोहे किससे जुड़े हैं?", options: { A: "नीति", B: "प्रकृति", C: "युद्ध", D: "धन" }, answer: "A" },
    { question: "बिहारी के दोहों में क्या प्रमुख है?", options: { A: "अलंकार", B: "सरलता", C: "नीति", D: "युद्ध" }, answer: "A" },
  
    { question: "“रहीम” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“बिहारी” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“नीति” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "C" },
    { question: "“कहना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वे” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
  
    { question: "“नीति” का पर्यायवाची क्या है?", options: { A: "नियम", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“मित्र” का विलोम क्या है?", options: { A: "शत्रु", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“सत्य” का विलोम क्या है?", options: { A: "झूठ", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“जल” का पर्यायवाची क्या है?", options: { A: "पानी", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“बड़ा” का विलोम क्या है?", options: { A: "छोटा", B: "अच्छा", C: "नया", D: "पुराना" }, answer: "A" },
  
    { question: "दोहा किसका उदाहरण है?", options: { A: "गद्य", B: "पद्य", C: "नाटक", D: "निबंध" }, answer: "B" },
    { question: "नीति दोहों का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "शिक्षा देना", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "रहीम के दोहे क्या सिखाते हैं?", options: { A: "धन", B: "नीति", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "बिहारी के दोहे किसके लिए प्रसिद्ध हैं?", options: { A: "संक्षिप्तता", B: "अलंकार", C: "नीति", D: "सभी" }, answer: "D" },
    { question: "दोहा में क्या प्रमुख है?", options: { A: "नीति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
  
    { question: "दोहा का छंद क्या है?", options: { A: "16-14", B: "12-12", C: "10-10", D: "8-8" }, answer: "A" },
    { question: "दोहा में कितनी पंक्तियाँ होती हैं?", options: { A: "2", B: "3", C: "4", D: "1" }, answer: "A" },
    { question: "रहीम किस विषय पर लिखते हैं?", options: { A: "नीति", B: "प्रकृति", C: "युद्ध", D: "धन" }, answer: "A" },
    { question: "बिहारी के दोहे किससे जुड़े हैं?", options: { A: "नीति", B: "अलंकार", C: "संक्षिप्तता", D: "सभी" }, answer: "D" },
    { question: "दोहा किस प्रकार का छंद है?", options: { A: "मात्रिक", B: "वार्णिक", C: "मिश्रित", D: "कोई नहीं" }, answer: "A" },
  
    { question: "नीति दोहे किसे प्रेरित करते हैं?", options: { A: "व्यक्ति", B: "राजा", C: "सैनिक", D: "शिक्षक" }, answer: "A" },
    { question: "दोहा का मुख्य संदेश क्या है?", options: { A: "नीति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "रहीम का साहित्य किससे जुड़ा है?", options: { A: "नीति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "बिहारी किसके लिए प्रसिद्ध हैं?", options: { A: "दोहा", B: "नाटक", C: "कहानी", D: "निबंध" }, answer: "A" },
    { question: "नीति दोहों का महत्व क्या है?", options: { A: "जीवन ज्ञान", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
  
    { question: "दोहा में क्या सिखाया जाता है?", options: { A: "नीति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "रहीम और बिहारी किसके लिए प्रसिद्ध हैं?", options: { A: "दोहा", B: "नाटक", C: "कहानी", D: "निबंध" }, answer: "A" },
    { question: "नीति दोहों का मुख्य उद्देश्य क्या है?", options: { A: "शिक्षा", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "दोहा किसका उदाहरण है?", options: { A: "पद्य", B: "गद्य", C: "नाटक", D: "निबंध" }, answer: "A" },
    { question: "नीति दोहों का मुख्य भाव क्या है?", options: { A: "नीति", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" }
  ];
  const hindilesson11 = [
    { question: "“जल ही जीवन है” के लेखक कौन हैं?", options: { A: "प्रेमचंद", B: "श्री प्रकाश", C: "दिनकर", D: "पंत" }, answer: "B" },
    { question: "यह रचना किस प्रकार की है?", options: { A: "कविता", B: "कहानी", C: "नाटक", D: "निबंध" }, answer: "B" },
    { question: "कहानी का मुख्य विषय क्या है?", options: { A: "धन", B: "जल का महत्व", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "जल क्यों आवश्यक है?", options: { A: "जीवन के लिए", B: "धन के लिए", C: "युद्ध के लिए", D: "राजनीति के लिए" }, answer: "A" },
    { question: "जल के बिना क्या संभव नहीं है?", options: { A: "जीवन", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
  
    { question: "कहानी में किसका महत्व बताया गया है?", options: { A: "धन", B: "जल", C: "शक्ति", D: "राजनीति" }, answer: "B" },
    { question: "जल का संरक्षण क्यों जरूरी है?", options: { A: "जीवन के लिए", B: "धन के लिए", C: "युद्ध के लिए", D: "राजनीति के लिए" }, answer: "A" },
    { question: "जल का उपयोग किसमें होता है?", options: { A: "पीने में", B: "खेती में", C: "उद्योग में", D: "सभी" }, answer: "D" },
    { question: "जल की कमी से क्या होता है?", options: { A: "सुख", B: "कठिनाई", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "लेखक का संदेश क्या है?", options: { A: "जल बचाओ", B: "धन कमाओ", C: "युद्ध करो", D: "राजनीति करो" }, answer: "A" },
  
    { question: "जल किसका आधार है?", options: { A: "जीवन", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "कहानी में क्या सिखाया गया है?", options: { A: "जल का महत्व", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "जल के बिना क्या नहीं हो सकता?", options: { A: "जीवन", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "जल किसके लिए आवश्यक है?", options: { A: "मनुष्य", B: "पशु", C: "पेड़-पौधे", D: "सभी" }, answer: "D" },
    { question: "जल की रक्षा क्यों करनी चाहिए?", options: { A: "जीवन के लिए", B: "धन के लिए", C: "युद्ध के लिए", D: "राजनीति के लिए" }, answer: "A" },
  
    { question: "“जल” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "D" },
    { question: "“जीवन” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "भाववाचक", C: "जातिवाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“पीना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वह” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“अच्छा” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“जल” का पर्यायवाची क्या है?", options: { A: "पानी", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“जीवन” का पर्यायवाची क्या है?", options: { A: "जिंदगी", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "“अभाव” का विलोम क्या है?", options: { A: "कमी", B: "प्रचुरता", C: "धन", D: "शक्ति" }, answer: "B" },
    { question: "“साफ” का विलोम क्या है?", options: { A: "गंदा", B: "अच्छा", C: "बड़ा", D: "छोटा" }, answer: "A" },
    { question: "“नया” का विलोम क्या है?", options: { A: "पुराना", B: "छोटा", C: "बड़ा", D: "अच्छा" }, answer: "A" },
  
    { question: "जल का महत्व क्या है?", options: { A: "जीवन", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "लेखक क्या सिखाता है?", options: { A: "जल बचाओ", B: "धन कमाओ", C: "युद्ध करो", D: "राजनीति करो" }, answer: "A" },
    { question: "जल का उपयोग कहाँ होता है?", options: { A: "खेती", B: "पीने", C: "उद्योग", D: "सभी" }, answer: "D" },
    { question: "जल के बिना क्या संभव नहीं है?", options: { A: "जीवन", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "जल क्यों जरूरी है?", options: { A: "जीवन के लिए", B: "धन के लिए", C: "युद्ध के लिए", D: "राजनीति के लिए" }, answer: "A" },
  
    { question: "जल किसका प्रतीक है?", options: { A: "जीवन", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "जल का संरक्षण क्यों जरूरी है?", options: { A: "जीवन के लिए", B: "धन के लिए", C: "युद्ध के लिए", D: "राजनीति के लिए" }, answer: "A" },
    { question: "जल की कमी से क्या होता है?", options: { A: "कठिनाई", B: "सुख", C: "धन", D: "शक्ति" }, answer: "A" },
    { question: "कहानी का संदेश क्या है?", options: { A: "जल बचाओ", B: "धन कमाओ", C: "युद्ध करो", D: "राजनीति करो" }, answer: "A" },
    { question: "जल किसके लिए आवश्यक है?", options: { A: "मनुष्य", B: "पशु", C: "पेड़-पौधे", D: "सभी" }, answer: "D" },
  
    { question: "जल के बिना क्या नहीं हो सकता?", options: { A: "जीवन", B: "धन", C: "शक्ति", D: "राजनीति" }, answer: "A" },
    { question: "लेखक किसे प्रेरित करता है?", options: { A: "जनता", B: "राजा", C: "सैनिक", D: "शिक्षक" }, answer: "A" },
    { question: "जल का उपयोग किसमें होता है?", options: { A: "खेती", B: "उद्योग", C: "पीने", D: "सभी" }, answer: "D" },
    { question: "जल की रक्षा क्यों जरूरी है?", options: { A: "जीवन के लिए", B: "धन के लिए", C: "युद्ध के लिए", D: "राजनीति के लिए" }, answer: "A" },
    { question: "कहानी का मुख्य संदेश क्या है?", options: { A: "जल बचाओ", B: "धन कमाओ", C: "युद्ध करो", D: "राजनीति करो" }, answer: "A" }
  ];
  const hindilesson12 = [
    { question: "“धरती के सवाल अंतरिक्ष के जवाब” किस प्रकार की रचना है?", options: { A: "कविता", B: "कहानी", C: "साक्षात्कार", D: "निबंध" }, answer: "C" },
    { question: "साक्षात्कार का अर्थ क्या है?", options: { A: "कहानी", B: "प्रश्न-उत्तर वार्ता", C: "कविता", D: "नाटक" }, answer: "B" },
    { question: "इस पाठ का विषय क्या है?", options: { A: "धन", B: "अंतरिक्ष", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "अंतरिक्ष किससे संबंधित है?", options: { A: "पृथ्वी", B: "आकाश/स्पेस", C: "धन", D: "राजनीति" }, answer: "B" },
    { question: "साक्षात्कार में क्या होता है?", options: { A: "कहानी", B: "संवाद", C: "युद्ध", D: "राजनीति" }, answer: "B" },
  
    { question: "इस पाठ में कौन-सा विषय प्रमुख है?", options: { A: "प्रकृति", B: "विज्ञान", C: "धन", D: "राजनीति" }, answer: "B" },
    { question: "अंतरिक्ष यात्री क्या करता है?", options: { A: "खेती", B: "अंतरिक्ष में यात्रा", C: "व्यापार", D: "राजनीति" }, answer: "B" },
    { question: "पृथ्वी किसका भाग है?", options: { A: "अंतरिक्ष", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "साक्षात्कार का उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "जानकारी प्राप्त करना", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "अंतरिक्ष में क्या पाया जाता है?", options: { A: "ग्रह-तारे", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
  
    { question: "साक्षात्कार में कौन प्रश्न पूछता है?", options: { A: "उत्तरदाता", B: "प्रश्नकर्ता", C: "दोनों", D: "कोई नहीं" }, answer: "B" },
    { question: "उत्तर कौन देता है?", options: { A: "प्रश्नकर्ता", B: "उत्तरदाता", C: "दोनों", D: "कोई नहीं" }, answer: "B" },
    { question: "अंतरिक्ष यात्रा किससे संबंधित है?", options: { A: "विज्ञान", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "इस पाठ का मुख्य उद्देश्य क्या है?", options: { A: "मनोरंजन", B: "ज्ञान देना", C: "युद्ध", D: "राजनीति" }, answer: "B" },
    { question: "पृथ्वी कहाँ स्थित है?", options: { A: "अंतरिक्ष में", B: "धन में", C: "राजनीति में", D: "युद्ध में" }, answer: "A" },
  
    { question: "“अंतरिक्ष” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "B" },
    { question: "“पृथ्वी” कौन-सी संज्ञा है?", options: { A: "व्यक्तिवाचक", B: "जातिवाचक", C: "भाववाचक", D: "द्रव्यवाचक" }, answer: "A" },
    { question: "“जाना” क्या है?", options: { A: "संज्ञा", B: "क्रिया", C: "विशेषण", D: "सर्वनाम" }, answer: "B" },
    { question: "“वे” कौन-सा सर्वनाम है?", options: { A: "प्रथम", B: "द्वितीय", C: "तृतीय", D: "कोई नहीं" }, answer: "C" },
    { question: "“बड़ा” कौन-सा शब्द है?", options: { A: "संज्ञा", B: "विशेषण", C: "क्रिया", D: "सर्वनाम" }, answer: "B" },
  
    { question: "“अंतरिक्ष” का पर्यायवाची क्या है?", options: { A: "आकाश", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "“पृथ्वी” का पर्यायवाची क्या है?", options: { A: "धरती", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "“बड़ा” का विलोम क्या है?", options: { A: "छोटा", B: "अच्छा", C: "नया", D: "पुराना" }, answer: "A" },
    { question: "“सत्य” का विलोम क्या है?", options: { A: "झूठ", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "“ज्ञान” का पर्यायवाची क्या है?", options: { A: "विद्या", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
  
    { question: "साक्षात्कार में क्या प्रमुख है?", options: { A: "संवाद", B: "धन", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "अंतरिक्ष किसका भाग है?", options: { A: "विज्ञान", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "इस पाठ में क्या सिखाया गया है?", options: { A: "विज्ञान ज्ञान", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "अंतरिक्ष यात्रा किससे संभव है?", options: { A: "विज्ञान", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "पृथ्वी क्या है?", options: { A: "ग्रह", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
  
    { question: "साक्षात्कार का उद्देश्य क्या है?", options: { A: "जानकारी लेना", B: "धन कमाना", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "अंतरिक्ष में क्या होता है?", options: { A: "ग्रह-तारे", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "पृथ्वी कहाँ स्थित है?", options: { A: "अंतरिक्ष में", B: "धन में", C: "राजनीति में", D: "युद्ध में" }, answer: "A" },
    { question: "साक्षात्कार में कौन उत्तर देता है?", options: { A: "प्रश्नकर्ता", B: "उत्तरदाता", C: "दोनों", D: "कोई नहीं" }, answer: "B" },
    { question: "अंतरिक्ष का अध्ययन क्या कहलाता है?", options: { A: "विज्ञान", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
  
    { question: "इस पाठ का मुख्य संदेश क्या है?", options: { A: "विज्ञान का महत्व", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "साक्षात्कार किसका रूप है?", options: { A: "संवाद", B: "नाटक", C: "कहानी", D: "कविता" }, answer: "A" },
    { question: "अंतरिक्ष यात्रा का क्या महत्व है?", options: { A: "ज्ञान बढ़ाना", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "पृथ्वी किसका भाग है?", options: { A: "सौरमंडल", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "अंतरिक्ष में जाने वाला क्या कहलाता है?", options: { A: "वैज्ञानिक", B: "अंतरिक्ष यात्री", C: "किसान", D: "व्यापारी" }, answer: "B" },
  
    { question: "अंतरिक्ष किससे संबंधित है?", options: { A: "विज्ञान", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "साक्षात्कार में क्या होता है?", options: { A: "प्रश्न-उत्तर", B: "युद्ध", C: "धन", D: "राजनीति" }, answer: "A" },
    { question: "इस पाठ का मुख्य उद्देश्य क्या है?", options: { A: "ज्ञान देना", B: "धन कमाना", C: "युद्ध", D: "राजनीति" }, answer: "A" },
    { question: "अंतरिक्ष में क्या पाया जाता है?", options: { A: "ग्रह-तारे", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" },
    { question: "पृथ्वी क्या है?", options: { A: "ग्रह", B: "धन", C: "राजनीति", D: "युद्ध" }, answer: "A" }
  ];
                      
  

  
  const pschapter1 = [

    { question: "What is a chemical reaction?", options: { A:"Process with no change", B:"Process where new substances are formed", C:"Physical change only", D:"Mixing of substances" }, answer: "B" },
    
    { question: "A chemical equation represents:", options: { A:"Only reactants", B:"Only products", C:"Reactants and products symbolically", D:"Only physical changes" }, answer: "C" },
    
    { question: "Law of Conservation of Mass was proposed by:", options: { A:"Newton", B:"Lavoisier", C:"Dalton", D:"Rutherford" }, answer: "B" },
    
    { question: "Balanced equation ensures:", options: { A:"Equal volume", B:"Equal atoms on both sides", C:"Equal temperature", D:"Equal color" }, answer: "B" },
    
    { question: "Fe + H2O → Fe3O4 + H2 is:", options: { A:"Balanced", B:"Unbalanced", C:"Decomposition", D:"Double displacement" }, answer: "B" },
    
    { question: "Combination reaction is:", options: { A:"One substance breaks", B:"Two substances combine", C:"Exchange of ions", D:"Metal replaces metal" }, answer: "B" },
    
    { question: "CaO + H2O → Ca(OH)2 is:", options: { A:"Decomposition", B:"Combination", C:"Displacement", D:"Redox" }, answer: "B" },
    
    { question: "CaCO3 → CaO + CO2 is:", options: { A:"Combination", B:"Displacement", C:"Decomposition", D:"Neutralization" }, answer: "C" },
    
    { question: "Zn + CuSO4 → ZnSO4 + Cu is:", options: { A:"Double displacement", B:"Combination", C:"Displacement", D:"Decomposition" }, answer: "C" },
    
    { question: "AgNO3 + NaCl → AgCl + NaNO3 is:", options: { A:"Combination", B:"Double displacement", C:"Decomposition", D:"Redox" }, answer: "B" },
    
    { question: "Oxidation means:", options: { A:"Loss of oxygen", B:"Gain of oxygen", C:"Gain of hydrogen", D:"No change" }, answer: "B" },
    
    { question: "Reduction means:", options: { A:"Gain of oxygen", B:"Loss of oxygen", C:"Loss of electrons", D:"Gain of heat" }, answer: "B" },
    
    { question: "Redox reaction involves:", options: { A:"Only oxidation", B:"Only reduction", C:"Both oxidation and reduction", D:"No reaction" }, answer: "C" },
    
    { question: "Oxidizing agent:", options: { A:"Gets reduced", B:"Gets oxidized", C:"No change", D:"Absorbs heat" }, answer: "A" },
    
    { question: "Reducing agent:", options: { A:"Gets reduced", B:"Gets oxidized", C:"No change", D:"Releases heat" }, answer: "B" },
    
    { question: "Burning magnesium gives:", options: { A:"Black ash", B:"White ash", C:"Blue gas", D:"Green solid" }, answer: "B" },
    
    { question: "Product formed is:", options: { A:"MgO", B:"MgCl2", C:"MgSO4", D:"MgCO3" }, answer: "A" },
    
    { question: "Cleaning Mg ribbon removes:", options: { A:"Water", B:"Dust", C:"Oxide layer", D:"Salt" }, answer: "C" },
    
    { question: "Electrolysis of water produces:", options: { A:"CO2 & O2", B:"H2 & O2", C:"N2 & O2", D:"H2 & CO2" }, answer: "B" },
    
    { question: "Ratio of H2:O2 is:", options: { A:"1:1", B:"2:1", C:"1:2", D:"3:1" }, answer: "B" },
    
    { question: "Corrosion is:", options: { A:"Useful reaction", B:"Slow damage of metals", C:"Fast burning", D:"Mixing" }, answer: "B" },
    
    { question: "Rust is:", options: { A:"FeO", B:"Fe2O3.xH2O", C:"FeCl3", D:"FeSO4" }, answer: "B" },
    
    { question: "Rancidity is:", options: { A:"Metal corrosion", B:"Spoilage of food oils", C:"Burning", D:"Cooling" }, answer: "B" },
    
    { question: "Rancidity prevented by:", options: { A:"Heating", B:"Adding oxygen", C:"Adding antioxidants", D:"Cooling only" }, answer: "C" },
    
    { question: "Exothermic reaction releases:", options: { A:"Light only", B:"Heat", C:"Sound", D:"Gas" }, answer: "B" },
    
    { question: "Endothermic reaction absorbs:", options: { A:"Heat", B:"Light", C:"Water", D:"Gas" }, answer: "A" },
    
    { question: "Respiration is:", options: { A:"Endothermic", B:"Exothermic", C:"Neutral", D:"No reaction" }, answer: "B" },
    
    { question: "Photosynthesis is:", options: { A:"Exothermic", B:"Endothermic", C:"Neutral", D:"Decomposition" }, answer: "B" },
    
    { question: "Catalyst does:", options: { A:"Stops reaction", B:"Changes speed", C:"Changes product", D:"Adds mass" }, answer: "B" },
    
    { question: "Precipitate is:", options: { A:"Gas", B:"Solid formed", C:"Liquid", D:"Heat" }, answer: "B" },
    
    { question: "Methane combustion produces:", options: { A:"CO + H2", B:"CO2 + H2O", C:"C + H2", D:"O2 + H2" }, answer: "B" },
    
    { question: "Zn + HCl produces:", options: { A:"ZnCl2 + H2", B:"ZnO + H2", C:"Zn + Cl2", D:"ZnSO4" }, answer: "A" },
    
    { question: "Heating Pb(NO3)2 gives:", options: { A:"PbO + NO2 + O2", B:"Pb + O2", C:"PbCl2", D:"PbSO4" }, answer: "A" },
    
    { question: "Copper heated in air gives:", options: { A:"CuO", B:"CuCl2", C:"CuSO4", D:"CuCO3" }, answer: "A" },
    
    { question: "Indicator of reaction:", options: { A:"Color change", B:"No change", C:"Same state", D:"Same temp" }, answer: "A" },
    
    { question: "Balanced equation helps:", options: { A:"Mass conservation", B:"Volume increase", C:"Color change", D:"Heat loss" }, answer: "A" },
    
    { question: "Double displacement involves:", options: { A:"Exchange of ions", B:"Heat only", C:"Light only", D:"Gas only" }, answer: "A" },
    
    { question: "Decomposition requires:", options: { A:"Energy", B:"Cooling", C:"Mixing", D:"Pressure only" }, answer: "A" },
    
    { question: "Iron nail in CuSO4 solution:", options: { A:"No change", B:"Copper deposits", C:"Iron disappears", D:"Gas forms" }, answer: "B" },
    
    { question: "Color change in above:", options: { A:"Blue to green", B:"Green to blue", C:"Red to blue", D:"No change" }, answer: "A" },
    
    { question: "Silver chloride in sunlight:", options: { A:"Remains same", B:"Decomposes", C:"Forms gas", D:"Melts" }, answer: "B" },
    
    { question: "Reaction type:", options: { A:"Photochemical", B:"Thermal", C:"Electrolytic", D:"Neutral" }, answer: "A" },
    
    { question: "CaO + H2O releases:", options: { A:"Cold", B:"Heat", C:"Gas", D:"Light" }, answer: "B" },
    
    { question: "Slaked lime is:", options: { A:"CaO", B:"Ca(OH)2", C:"CaCO3", D:"CaCl2" }, answer: "B" },
    
    { question: "Gas in metal + acid:", options: { A:"O2", B:"CO2", C:"H2", D:"N2" }, answer: "C" },
    
    { question: "Rusting needs:", options: { A:"CO2 only", B:"O2 & H2O", C:"N2 only", D:"H2 only" }, answer: "B" },
    
    { question: "Chemical change indicator:", options: { A:"No change", B:"Same color", C:"Gas evolution", D:"Same mass" }, answer: "C" },
    
    { question: "Decomposition reaction form:", options: { A:"A+B→C", B:"A→B+C", C:"AB→CD", D:"A+B→AB" }, answer: "B" },
    
    { question: "Combination reaction form:", options: { A:"A→B+C", B:"A+B→AB", C:"AB→CD", D:"None" }, answer: "B" },
    
    { question: "Displacement reaction form:", options: { A:"AB+CD", B:"A+BC→AC+B", C:"A→B+C", D:"A+B→AB" }, answer: "B" },
    
    { question: "Double displacement form:", options: { A:"A+B→AB", B:"AB+CD→AD+CB", C:"A→B+C", D:"None" }, answer: "B" },
    
    { question: "Main conclusion of electrolysis:", options: { A:"Water is element", B:"Water decomposes into gases", C:"Water is metal", D:"Water is salt" }, answer: "B" }
    
    ];

    const chapter2 = [

      { question: "An acid is a substance that:", options: { A:"Produces OH- ions", B:"Produces H+ ions", C:"Produces electrons", D:"Produces neutrons" }, answer: "B" },
      
      { question: "A base is a substance that:", options: { A:"Produces H+ ions", B:"Produces OH- ions", C:"Produces CO2", D:"Produces heat" }, answer: "B" },
      
      { question: "Alkali is:", options: { A:"Acid in solid form", B:"Base soluble in water", C:"Salt solution", D:"Metal oxide" }, answer: "B" },
      
      { question: "pH value of neutral solution is:", options: { A:"0", B:"7", C:"14", D:"1" }, answer: "B" },
      
      { question: "pH less than 7 indicates:", options: { A:"Basic nature", B:"Neutral", C:"Acidic nature", D:"Salt" }, answer: "C" },
      
      { question: "pH more than 7 indicates:", options: { A:"Acidic", B:"Neutral", C:"Basic", D:"Salt" }, answer: "C" },
      
      { question: "Strong acids have:", options: { A:"Low ionization", B:"High ionization", C:"No ionization", D:"Neutral nature" }, answer: "B" },
      
      { question: "Dilution of acid means:", options: { A:"Adding acid to water", B:"Adding water to acid", C:"Removing water", D:"Heating acid" }, answer: "B" },
      
      { question: "While diluting acid, we should:", options: { A:"Add water to acid", B:"Add acid to water", C:"Mix randomly", D:"Heat first" }, answer: "B" },
      
      { question: "Acids turn blue litmus to:", options: { A:"Blue", B:"Red", C:"Green", D:"Yellow" }, answer: "B" },
      
      { question: "Bases turn red litmus to:", options: { A:"Red", B:"Blue", C:"Yellow", D:"Green" }, answer: "B" },
      
      { question: "Phenolphthalein in base gives:", options: { A:"Colorless", B:"Pink", C:"Blue", D:"Green" }, answer: "B" },
      
      { question: "Methyl orange in acid gives:", options: { A:"Yellow", B:"Red", C:"Blue", D:"Green" }, answer: "B" },
      
      { question: "Acids react with metals to produce:", options: { A:"Oxygen", B:"Hydrogen", C:"Nitrogen", D:"Carbon dioxide" }, answer: "B" },
      
      { question: "Zn + HCl → produces:", options: { A:"ZnCl2 + H2", B:"ZnO + H2", C:"Zn + Cl2", D:"ZnSO4" }, answer: "A" },
      
      { question: "Acids react with carbonates to give:", options: { A:"H2 only", B:"CO2 + H2O + salt", C:"O2 only", D:"Salt only" }, answer: "B" },
      
      { question: "Na2CO3 + HCl produces:", options: { A:"CO2 + H2O + NaCl", B:"H2 only", C:"O2 only", D:"NaOH" }, answer: "A" },
      
      { question: "Bases react with acids to form:", options: { A:"Gas", B:"Salt and water", C:"Metal", D:"Acid" }, answer: "B" },
      
      { question: "This reaction is called:", options: { A:"Displacement", B:"Neutralization", C:"Decomposition", D:"Redox" }, answer: "B" },
      
      { question: "pH scale range is:", options: { A:"0–7", B:"1–10", C:"0–14", D:"7–14" }, answer: "C" },
      
      { question: "More acidic solution has:", options: { A:"Higher pH", B:"Lower pH", C:"Neutral pH", D:"No pH" }, answer: "B" },
      
      { question: "Tooth decay starts when pH is below:", options: { A:"5.5", B:"7", C:"9", D:"3" }, answer: "A" },
      
      { question: "Antacids are used to:", options: { A:"Increase acidity", B:"Neutralize excess acid", C:"Produce acid", D:"Produce base" }, answer: "B" },
      
      { question: "Common antacid is:", options: { A:"NaCl", B:"Mg(OH)2", C:"HCl", D:"H2SO4" }, answer: "B" },
      
      { question: "Bleaching powder formula is:", options: { A:"CaCl2", B:"CaOCl2", C:"NaCl", D:"NaOH" }, answer: "B" },
      
      { question: "Bleaching powder is used for:", options: { A:"Cooking", B:"Disinfecting water", C:"Fuel", D:"Cooling" }, answer: "B" },
      
      { question: "Baking soda formula is:", options: { A:"Na2CO3", B:"NaHCO3", C:"NaOH", D:"NaCl" }, answer: "B" },
      
      { question: "Baking soda on heating gives:", options: { A:"CO2", B:"O2", C:"H2", D:"N2" }, answer: "A" },
      
      { question: "Washing soda formula is:", options: { A:"Na2CO3.10H2O", B:"NaCl", C:"NaOH", D:"NaHCO3" }, answer: "A" },
      
      { question: "Washing soda is used in:", options: { A:"Cooking", B:"Cleaning", C:"Fuel", D:"Medicine" }, answer: "B" },
      
      { question: "Plaster of Paris formula is:", options: { A:"CaSO4.1/2H2O", B:"CaCO3", C:"CaCl2", D:"CaO" }, answer: "A" },
      
      { question: "POP is formed by heating:", options: { A:"Gypsum", B:"Limestone", C:"Salt", D:"Acid" }, answer: "A" },
      
      { question: "POP reacts with water to form:", options: { A:"Gypsum", B:"CaCl2", C:"NaCl", D:"CaO" }, answer: "A" },
      
      { question: "Strong base example:", options: { A:"NaOH", B:"NH4OH", C:"HCl", D:"H2SO4" }, answer: "A" },
      
      { question: "Weak acid example:", options: { A:"HCl", B:"H2SO4", C:"CH3COOH", D:"NaOH" }, answer: "C" },
      
      { question: "Acids conduct electricity due to:", options: { A:"Electrons", B:"Ions", C:"Neutrons", D:"Protons" }, answer: "B" },
      
      { question: "Dry HCl gas does not show acidic nature because:", options: { A:"No ions", B:"No water", C:"No oxygen", D:"No heat" }, answer: "B" },
      
      { question: "Universal indicator shows:", options: { A:"Temperature", B:"pH value", C:"Pressure", D:"Volume" }, answer: "B" },
      
      { question: "pH of strong acid is near:", options: { A:"0", B:"7", C:"14", D:"10" }, answer: "A" },
      
      { question: "pH of strong base is near:", options: { A:"1", B:"7", C:"14", D:"5" }, answer: "C" },
      
      { question: "Salt is formed from:", options: { A:"Acid only", B:"Base only", C:"Acid + Base", D:"Metal only" }, answer: "C" },
      
      { question: "NaCl is:", options: { A:"Acid", B:"Base", C:"Salt", D:"Oxide" }, answer: "C" },
      
      { question: "Chlor-alkali process produces:", options: { A:"NaOH", B:"HCl", C:"H2SO4", D:"CO2" }, answer: "A" },
      
      { question: "Gas produced in chlor-alkali process:", options: { A:"O2", B:"H2", C:"N2", D:"CO2" }, answer: "B" },
      
      { question: "Acids taste:", options: { A:"Bitter", B:"Sour", C:"Sweet", D:"Salty" }, answer: "B" },
      
      { question: "Bases taste:", options: { A:"Sour", B:"Bitter", C:"Sweet", D:"Salty" }, answer: "B" },
      
      { question: "Acids react with metal oxides to form:", options: { A:"Salt + water", B:"Gas", C:"Metal", D:"Acid" }, answer: "A" },
      
      { question: "Bases react with non-metal oxides to form:", options: { A:"Salt + water", B:"Gas", C:"Metal", D:"Acid" }, answer: "A" },
      
      { question: "Concentrated acids are:", options: { A:"Always strong", B:"Always weak", C:"Based on ionization, not concentration", D:"Neutral" }, answer: "C" }
      
      ];
      const chapter3 = [

        { question: "Metals are generally:", options: { A:"Brittle", B:"Ductile", C:"Poor conductors", D:"Non-reactive" }, answer: "B" },
        
        { question: "Non-metals are generally:", options: { A:"Malleable", B:"Ductile", C:"Brittle", D:"Good conductors" }, answer: "C" },
        
        { question: "Metals are good conductors of:", options: { A:"Heat and electricity", B:"Only heat", C:"Only electricity", D:"Neither" }, answer: "A" },
        
        { question: "Non-metals are:", options: { A:"Good conductors", B:"Poor conductors", C:"Malleable", D:"Ductile" }, answer: "B" },
        
        { question: "Which metal is liquid at room temperature?", options: { A:"Iron", B:"Mercury", C:"Copper", D:"Aluminium" }, answer: "B" },
        
        { question: "Which non-metal is liquid?", options: { A:"Bromine", B:"Carbon", C:"Sulphur", D:"Oxygen" }, answer: "A" },
        
        { question: "Metals react with oxygen to form:", options: { A:"Acids", B:"Bases", C:"Metal oxides", D:"Salts" }, answer: "C" },
        
        { question: "Metal oxides are generally:", options: { A:"Acidic", B:"Basic", C:"Neutral", D:"Amphoteric always" }, answer: "B" },
        
        { question: "Non-metal oxides are:", options: { A:"Basic", B:"Acidic", C:"Neutral", D:"Metallic" }, answer: "B" },
        
        { question: "Which metal oxide is amphoteric?", options: { A:"Na2O", B:"CaO", C:"Al2O3", D:"K2O" }, answer: "C" },
        
        { question: "Metals react with water to produce:", options: { A:"Salt + water", B:"Metal oxide + hydrogen", C:"Metal hydroxide + hydrogen", D:"Only hydrogen" }, answer: "C" },
        
        { question: "Na + H2O gives:", options: { A:"NaCl", B:"NaOH + H2", C:"Na2O", D:"Na2CO3" }, answer: "B" },
        
        { question: "Metals react with acids to give:", options: { A:"Salt + hydrogen", B:"Salt + oxygen", C:"Water only", D:"CO2" }, answer: "A" },
        
        { question: "Cu + HCl shows:", options: { A:"Reaction", B:"No reaction", C:"Explosion", D:"Gas formation" }, answer: "B" },
        
        { question: "More reactive metal displaces:", options: { A:"Less reactive metal", B:"More reactive metal", C:"Non-metal", D:"Gas" }, answer: "A" },
        
        { question: "Zn + CuSO4 → produces:", options: { A:"ZnSO4 + Cu", B:"Cu + ZnO", C:"Zn + Cu", D:"No reaction" }, answer: "A" },
        
        { question: "Reactivity series helps to:", options: { A:"Identify acids", B:"Predict displacement", C:"Measure pH", D:"Find density" }, answer: "B" },
        
        { question: "Most reactive metal is:", options: { A:"Au", B:"K", C:"Cu", D:"Ag" }, answer: "B" },
        
        { question: "Least reactive metal is:", options: { A:"Na", B:"Zn", C:"Au", D:"Fe" }, answer: "C" },
        
        { question: "Extraction of metals depends on:", options: { A:"Color", B:"Reactivity", C:"Weight", D:"Shape" }, answer: "B" },
        
        { question: "Highly reactive metals are extracted by:", options: { A:"Heating", B:"Electrolysis", C:"Reduction with carbon", D:"Cooling" }, answer: "B" },
        
        { question: "Moderately reactive metals are extracted by:", options: { A:"Electrolysis", B:"Reduction with carbon", C:"Cooling", D:"Filtering" }, answer: "B" },
        
        { question: "Low reactive metals are obtained by:", options: { A:"Heating alone", B:"Electrolysis", C:"Chemical reduction", D:"Boiling" }, answer: "A" },
        
        { question: "Roasting is done in:", options: { A:"Absence of oxygen", B:"Presence of oxygen", C:"Water", D:"Vacuum" }, answer: "B" },
        
        { question: "Calcination is done in:", options: { A:"Presence of oxygen", B:"Absence of oxygen", C:"Water", D:"Air only" }, answer: "B" },
        
        { question: "Corrosion is:", options: { A:"Useful reaction", B:"Damage of metals", C:"Formation of salts", D:"Cooling process" }, answer: "B" },
        
        { question: "Rusting of iron needs:", options: { A:"CO2 only", B:"O2 and H2O", C:"N2 only", D:"H2 only" }, answer: "B" },
        
        { question: "Galvanization prevents:", options: { A:"Heating", B:"Corrosion", C:"Melting", D:"Boiling" }, answer: "B" },
        
        { question: "Alloys are:", options: { A:"Pure metals", B:"Mixture of metals", C:"Non-metals", D:"Gases" }, answer: "B" },
        
        { question: "Brass is alloy of:", options: { A:"Cu + Zn", B:"Cu + Sn", C:"Fe + C", D:"Al + Cu" }, answer: "A" },
        
        { question: "Bronze is alloy of:", options: { A:"Cu + Zn", B:"Cu + Sn", C:"Fe + C", D:"Al + Mg" }, answer: "B" },
        
        { question: "Stainless steel contains:", options: { A:"Fe + C", B:"Fe + Cr + Ni", C:"Cu + Zn", D:"Al only" }, answer: "B" },
        
        { question: "Ionic compounds are formed by:", options: { A:"Sharing electrons", B:"Transfer of electrons", C:"No electrons", D:"Protons only" }, answer: "B" },
        
        { question: "Covalent compounds involve:", options: { A:"Transfer", B:"Sharing", C:"Loss", D:"Gain" }, answer: "B" },
        
        { question: "NaCl is:", options: { A:"Covalent", B:"Ionic", C:"Metallic", D:"Gas" }, answer: "B" },
        
        { question: "Ionic compounds have:", options: { A:"Low melting point", B:"High melting point", C:"No melting point", D:"Gas form" }, answer: "B" },
        
        { question: "Ionic compounds conduct electricity in:", options: { A:"Solid state", B:"Molten or aqueous state", C:"Gas state", D:"Never" }, answer: "B" },
        
        { question: "Non-metals gain electrons to form:", options: { A:"Cations", B:"Anions", C:"Neutrons", D:"Atoms" }, answer: "B" },
        
        { question: "Metals lose electrons to form:", options: { A:"Anions", B:"Cations", C:"Neutrons", D:"Atoms" }, answer: "B" },
        
        { question: "Electrolytic refining is used for:", options: { A:"Extraction", B:"Purification", C:"Melting", D:"Cooling" }, answer: "B" },
        
        { question: "Impure metal is used as:", options: { A:"Cathode", B:"Anode", C:"Electrolyte", D:"Salt" }, answer: "B" },
        
        { question: "Pure metal deposits on:", options: { A:"Anode", B:"Cathode", C:"Solution", D:"Air" }, answer: "B" },
        
        { question: "Metals are sonorous means:", options: { A:"Soft", B:"Produce sound", C:"Hard", D:"Shiny" }, answer: "B" },
        
        { question: "Graphite conducts electricity because:", options: { A:"Free electrons", B:"Protons", C:"Neutrons", D:"Heat" }, answer: "A" },
        
        { question: "Diamond is:", options: { A:"Soft", B:"Hard", C:"Liquid", D:"Gas" }, answer: "B" },
        
        { question: "Sodium is stored in:", options: { A:"Water", B:"Kerosene", C:"Air", D:"Acid" }, answer: "B" },
        
        { question: "Potassium reacts with water:", options: { A:"Slowly", B:"Vigorously", C:"No reaction", D:"Forms gas only" }, answer: "B" },
        
        { question: "Calcium reacts with water:", options: { A:"Violently", B:"Moderately", C:"No reaction", D:"Explodes" }, answer: "B" },
        
        { question: "Magnesium reacts with water:", options: { A:"Cold water slowly", B:"Hot water faster", C:"No reaction", D:"Explodes" }, answer: "B" },
        
        { question: "Iron reacts with water:", options: { A:"Cold water", B:"Steam", C:"No reaction", D:"Explodes" }, answer: "B" },
        
        { question: "Copper does not react with:", options: { A:"Acids", B:"Water", C:"Oxygen", D:"Carbon" }, answer: "B" },
        
        { question: "Non-metals form:", options: { A:"Cations", B:"Anions", C:"Neutral atoms", D:"Metals" }, answer: "B" },
        
        { question: "Example of non-metal:", options: { A:"Iron", B:"Copper", C:"Sulphur", D:"Zinc" }, answer: "C" }
        
        ];
        const chapter4 = [

          { question: "Carbon has valency:", options: { A:"1", B:"2", C:"3", D:"4" }, answer: "D" },
          
          { question: "Carbon forms covalent bonds because:", options: { A:"It gains electrons easily", B:"It loses electrons easily", C:"Sharing of electrons is easier", D:"It forms ions" }, answer: "C" },
          
          { question: "Covalent bond is formed by:", options: { A:"Transfer of electrons", B:"Sharing of electrons", C:"Loss of protons", D:"Gain of neutrons" }, answer: "B" },
          
          { question: "Methane formula is:", options: { A:"CH3", B:"CH4", C:"C2H6", D:"C2H4" }, answer: "B" },
          
          { question: "Ethane formula is:", options: { A:"C2H6", B:"C2H4", C:"CH4", D:"C3H8" }, answer: "A" },
          
          { question: "General formula of alkanes is:", options: { A:"CnH2n", B:"CnH2n+2", C:"CnH2n-2", D:"CnHn" }, answer: "B" },
          
          { question: "Alkenes have general formula:", options: { A:"CnH2n+2", B:"CnH2n", C:"CnH2n-2", D:"CnHn" }, answer: "B" },
          
          { question: "Alkynes have general formula:", options: { A:"CnH2n+2", B:"CnH2n", C:"CnH2n-2", D:"CnHn" }, answer: "C" },
          
          { question: "Single bond is:", options: { A:"Unsaturated", B:"Saturated", C:"Double bond", D:"Triple bond" }, answer: "B" },
          
          { question: "Double bond indicates:", options: { A:"Saturated compound", B:"Unsaturated compound", C:"Ionic bond", D:"Metallic bond" }, answer: "B" },
          
          { question: "Functional group determines:", options: { A:"Color", B:"Chemical properties", C:"Mass", D:"Shape" }, answer: "B" },
          
          { question: "-OH group is:", options: { A:"Carboxyl", B:"Hydroxyl", C:"Aldehyde", D:"Ketone" }, answer: "B" },
          
          { question: "-COOH group is:", options: { A:"Hydroxyl", B:"Carboxyl", C:"Aldehyde", D:"Ketone" }, answer: "B" },
          
          { question: "-CHO group is:", options: { A:"Ketone", B:"Aldehyde", C:"Alcohol", D:"Acid" }, answer: "B" },
          
          { question: "Homologous series have:", options: { A:"Different properties", B:"Same functional group", C:"Different functional group", D:"Same molecular mass" }, answer: "B" },
          
          { question: "Successive members differ by:", options: { A:"CH4", B:"CH2", C:"C2H2", D:"H2" }, answer: "B" },
          
          { question: "Methane burns to give:", options: { A:"CO + H2O", B:"CO2 + H2O", C:"C + H2", D:"O2 only" }, answer: "B" },
          
          { question: "Incomplete combustion produces:", options: { A:"CO2", B:"CO", C:"H2O", D:"O2" }, answer: "B" },
          
          { question: "Saturated hydrocarbons burn with:", options: { A:"Yellow flame", B:"Blue flame", C:"Green flame", D:"No flame" }, answer: "B" },
          
          { question: "Unsaturated hydrocarbons burn with:", options: { A:"Blue flame", B:"Sooty flame", C:"Green flame", D:"No flame" }, answer: "B" },
          
          { question: "Addition reaction occurs in:", options: { A:"Alkanes", B:"Alkenes", C:"Alcohols", D:"Acids" }, answer: "B" },
          
          { question: "Hydrogenation converts:", options: { A:"Saturated to unsaturated", B:"Unsaturated to saturated", C:"Alcohol to acid", D:"Acid to alcohol" }, answer: "B" },
          
          { question: "Catalyst used in hydrogenation:", options: { A:"Zn", B:"Ni", C:"Cu", D:"Fe" }, answer: "B" },
          
          { question: "Substitution reaction occurs in:", options: { A:"Alkenes", B:"Alkanes", C:"Alcohols", D:"Acids" }, answer: "B" },
          
          { question: "Ethanol formula is:", options: { A:"C2H5OH", B:"C2H6", C:"CH3OH", D:"C3H7OH" }, answer: "A" },
          
          { question: "Ethanoic acid formula is:", options: { A:"CH3COOH", B:"C2H5OH", C:"HCOOH", D:"C3H7OH" }, answer: "A" },
          
          { question: "Ethanol reacts with sodium to give:", options: { A:"H2 gas", B:"O2 gas", C:"CO2 gas", D:"N2 gas" }, answer: "A" },
          
          { question: "Ethanol oxidation produces:", options: { A:"Methane", B:"Ethanoic acid", C:"Ethane", D:"CO2" }, answer: "B" },
          
          { question: "Ethanoic acid reacts with NaHCO3 to give:", options: { A:"H2", B:"CO2", C:"O2", D:"N2" }, answer: "B" },
          
          { question: "Esters are formed by reaction of:", options: { A:"Alcohol + Acid", B:"Acid + Base", C:"Alcohol + Base", D:"Metal + Acid" }, answer: "A" },
          
          { question: "This reaction is called:", options: { A:"Neutralization", B:"Esterification", C:"Decomposition", D:"Redox" }, answer: "B" },
          
          { question: "Esterification produces:", options: { A:"Salt + water", B:"Ester + water", C:"Gas", D:"Metal" }, answer: "B" },
          
          { question: "Esters have:", options: { A:"Bad smell", B:"Pleasant smell", C:"No smell", D:"Strong odor" }, answer: "B" },
          
          { question: "Saponification produces:", options: { A:"Soap", B:"Gas", C:"Acid", D:"Alcohol" }, answer: "A" },
          
          { question: "Soap is:", options: { A:"Salt of fatty acid", B:"Acid", C:"Base", D:"Gas" }, answer: "A" },
          
          { question: "Soap cleans by:", options: { A:"Dissolving dirt", B:"Micelle formation", C:"Evaporation", D:"Neutralization" }, answer: "B" },
          
          { question: "Hard water contains:", options: { A:"Na ions", B:"Ca and Mg ions", C:"H ions", D:"O ions" }, answer: "B" },
          
          { question: "Soap does not work well in:", options: { A:"Soft water", B:"Hard water", C:"Pure water", D:"Hot water" }, answer: "B" },
          
          { question: "Detergents work in:", options: { A:"Hard water", B:"Soft water only", C:"No water", D:"Acid only" }, answer: "A" },
          
          { question: "Carbon compounds are poor conductors because:", options: { A:"No ions", B:"No electrons", C:"No protons", D:"No neutrons" }, answer: "A" },
          
          { question: "Covalent compounds have:", options: { A:"High melting point", B:"Low melting point", C:"No melting point", D:"Gas only" }, answer: "B" },
          
          { question: "Carbon shows catenation means:", options: { A:"Forms ions", B:"Forms chains", C:"Forms gases", D:"Forms salts" }, answer: "B" },
          
          { question: "Diamond is:", options: { A:"Soft", B:"Hard", C:"Liquid", D:"Gas" }, answer: "B" },
          
          { question: "Graphite is:", options: { A:"Insulator", B:"Conductor", C:"Gas", D:"Liquid" }, answer: "B" },
          
          { question: "Fullerenes are:", options: { A:"Chains", B:"Rings", C:"Spherical molecules", D:"Ions" }, answer: "C" },
          
          { question: "Soap solution is:", options: { A:"Acidic", B:"Basic", C:"Neutral", D:"Salt" }, answer: "B" },
          
          { question: "Carbon forms large number of compounds due to:", options: { A:"Valency only", B:"Catenation and tetravalency", C:"Mass", D:"Color" }, answer: "B" },
          
          { question: "General formula of alcohols:", options: { A:"CnH2n+1OH", B:"CnH2n", C:"CnH2n-2", D:"CnHn" }, answer: "A" },
          
          { question: "Ethene is:", options: { A:"Alkane", B:"Alkene", C:"Alkyne", D:"Alcohol" }, answer: "B" },
          
          { question: "Ethyne is:", options: { A:"Alkane", B:"Alkene", C:"Alkyne", D:"Acid" }, answer: "C" }
          
          ];
          const chapter9 = [

            { question: "Light is a form of:", options: { A:"Energy", B:"Matter", C:"Force", D:"Wave only" }, answer: "A" },
            
            { question: "Reflection of light means:", options: { A:"Absorption", B:"Bending", C:"Bouncing back", D:"Splitting" }, answer: "C" },
            
            { question: "Angle of incidence is equal to:", options: { A:"Angle of deviation", B:"Angle of reflection", C:"Angle of refraction", D:"Angle of bending" }, answer: "B" },
            
            { question: "The normal is:", options: { A:"Parallel line", B:"Perpendicular to surface", C:"Angle", D:"Ray" }, answer: "B" },
            
            { question: "Plane mirror forms image:", options: { A:"Real", B:"Virtual", C:"Inverted", D:"Magnified" }, answer: "B" },
            
            { question: "Image in plane mirror is:", options: { A:"Diminished", B:"Same size", C:"Large", D:"Inverted" }, answer: "B" },
            
            { question: "Lateral inversion means:", options: { A:"Up-down reversal", B:"Left-right reversal", C:"No change", D:"Rotation" }, answer: "B" },
            
            { question: "Concave mirror is:", options: { A:"Diverging", B:"Converging", C:"Plane", D:"Flat" }, answer: "B" },
            
            { question: "Convex mirror is:", options: { A:"Converging", B:"Diverging", C:"Flat", D:"Transparent" }, answer: "B" },
            
            { question: "Focus of concave mirror is:", options: { A:"Virtual", B:"Real", C:"At infinity", D:"At pole" }, answer: "B" },
            
            { question: "Focus of convex mirror is:", options: { A:"Real", B:"Virtual", C:"At infinity", D:"At pole" }, answer: "B" },
            
            { question: "Pole of mirror is:", options: { A:"Center", B:"Midpoint of mirror", C:"Focus", D:"Radius" }, answer: "B" },
            
            { question: "Radius of curvature is:", options: { A:"Half of focal length", B:"Twice focal length", C:"Equal to focal length", D:"Zero" }, answer: "B" },
            
            { question: "Mirror formula is:", options: { A:"1/f = 1/v + 1/u", B:"v/u", C:"f = uv", D:"1/f = u+v" }, answer: "A" },
            
            { question: "Magnification formula (mirror):", options: { A:"v/u", B:"u/v", C:"f/u", D:"v/f" }, answer: "A" },
            
            { question: "Concave mirror forms real image when object is:", options: { A:"Beyond focus", B:"At focus", C:"Between pole and focus", D:"At pole" }, answer: "A" },
            
            { question: "Convex mirror always forms:", options: { A:"Real image", B:"Virtual image", C:"Inverted image", D:"Large image" }, answer: "B" },
            
            { question: "Convex mirror is used in:", options: { A:"Magnifying glass", B:"Rear view mirrors", C:"Projectors", D:"Microscope" }, answer: "B" },
            
            { question: "Concave mirror used in:", options: { A:"Rear view mirror", B:"Torch reflectors", C:"Car mirrors", D:"Windows" }, answer: "B" },
            
            { question: "Refraction occurs due to:", options: { A:"Reflection", B:"Change in speed", C:"Absorption", D:"Emission" }, answer: "B" },
            
            { question: "When light enters denser medium, it bends:", options: { A:"Away from normal", B:"Towards normal", C:"No bending", D:"Backward" }, answer: "B" },
            
            { question: "When light enters rarer medium, it bends:", options: { A:"Towards normal", B:"Away from normal", C:"No change", D:"Backward" }, answer: "B" },
            
            { question: "Refractive index depends on:", options: { A:"Speed of light", B:"Color", C:"Density", D:"Temperature" }, answer: "A" },
            
            { question: "Formula for refractive index:", options: { A:"c/v", B:"v/c", C:"u/v", D:"f/v" }, answer: "A" },
            
            { question: "Lens which converges light is:", options: { A:"Concave", B:"Convex", C:"Plane", D:"Glass" }, answer: "B" },
            
            { question: "Lens which diverges light is:", options: { A:"Convex", B:"Concave", C:"Plane", D:"Plastic" }, answer: "B" },
            
            { question: "Convex lens forms real image when object is:", options: { A:"Beyond focus", B:"At focus", C:"Between focus and lens", D:"At pole" }, answer: "A" },
            
            { question: "Concave lens always forms:", options: { A:"Real image", B:"Virtual image", C:"Inverted image", D:"Large image" }, answer: "B" },
            
            { question: "Lens formula is:", options: { A:"1/f = 1/v - 1/u", B:"1/f = 1/u + 1/v", C:"v/u", D:"f=uv" }, answer: "A" },
            
            { question: "Magnification for lens:", options: { A:"v/u", B:"u/v", C:"f/v", D:"u/f" }, answer: "A" },
            
            { question: "Power of lens is:", options: { A:"1/f", B:"f", C:"u/v", D:"v/u" }, answer: "A" },
            
            { question: "Unit of power:", options: { A:"Meter", B:"Diopter", C:"Watt", D:"Newton" }, answer: "B" },
            
            { question: "1 Diopter equals:", options: { A:"1/m", B:"1 cm", C:"1 m", D:"10 m" }, answer: "A" },
            
            { question: "Convex lens used in:", options: { A:"Myopia correction", B:"Hypermetropia correction", C:"Mirror", D:"Torch" }, answer: "B" },
            
            { question: "Concave lens used in:", options: { A:"Hypermetropia", B:"Myopia", C:"Microscope", D:"Camera" }, answer: "B" },
            
            { question: "Image formed at focus by concave mirror is:", options: { A:"Real", B:"Virtual", C:"At infinity", D:"At pole" }, answer: "C" },
            
            { question: "Object at infinity forms image at:", options: { A:"Pole", B:"Focus", C:"Center", D:"Infinity" }, answer: "B" },
            
            { question: "Sign convention uses:", options: { A:"Cartesian system", B:"Polar system", C:"Rectangular system", D:"Circular system" }, answer: "A" },
            
            { question: "Distance measured against light direction is:", options: { A:"Positive", B:"Negative", C:"Zero", D:"Infinite" }, answer: "B" },
            
            { question: "Distance measured along light direction is:", options: { A:"Negative", B:"Positive", C:"Zero", D:"Infinite" }, answer: "B" },
            
            { question: "Convex mirror focal length is:", options: { A:"Negative", B:"Positive", C:"Zero", D:"Infinite" }, answer: "B" },
            
            { question: "Concave mirror focal length is:", options: { A:"Positive", B:"Negative", C:"Zero", D:"Infinite" }, answer: "B" },
            
            { question: "Real images are always:", options: { A:"Upright", B:"Inverted", C:"Same size", D:"Virtual" }, answer: "B" },
            
            { question: "Virtual images are:", options: { A:"Inverted", B:"Upright", C:"Real", D:"Same size always" }, answer: "B" },
            
            { question: "Mirror used by dentists:", options: { A:"Convex", B:"Concave", C:"Plane", D:"Glass" }, answer: "B" },
            
            { question: "Concave mirror gives enlarged image when object is:", options: { A:"Beyond C", B:"At C", C:"Between F and pole", D:"At infinity" }, answer: "C" },
            
            { question: "Refraction through glass slab shows:", options: { A:"No shift", B:"Lateral displacement", C:"Only reflection", D:"Only bending" }, answer: "B" },
            
            { question: "Speed of light is maximum in:", options: { A:"Water", B:"Glass", C:"Air", D:"Vacuum" }, answer: "D" },
            
            { question: "Refractive index of vacuum is:", options: { A:"0", B:"1", C:"2", D:"Infinity" }, answer: "B" }
            
            ];
            const chapter10 = [

              { question: "The human eye works like a:", options: { A:"Mirror", B:"Lens", C:"Camera", D:"Prism" }, answer: "C" },
              
              { question: "The transparent front part of eye is:", options: { A:"Retina", B:"Cornea", C:"Lens", D:"Iris" }, answer: "B" },
              
              { question: "The image is formed on:", options: { A:"Cornea", B:"Retina", C:"Lens", D:"Pupil" }, answer: "B" },
              
              { question: "The retina contains:", options: { A:"Bones", B:"Nerves", C:"Blood only", D:"Muscles" }, answer: "B" },
              
              { question: "The function of iris is to:", options: { A:"Form image", B:"Control light entering", C:"Reflect light", D:"Absorb light" }, answer: "B" },
              
              { question: "Pupil is:", options: { A:"Lens", B:"Opening in iris", C:"Muscle", D:"Nerve" }, answer: "B" },
              
              { question: "Eye lens is:", options: { A:"Concave", B:"Convex", C:"Plane", D:"Flat" }, answer: "B" },
              
              { question: "Accommodation is:", options: { A:"Image formation", B:"Changing focal length", C:"Light entering", D:"Reflection" }, answer: "B" },
              
              { question: "Near point of normal eye:", options: { A:"25 cm", B:"Infinity", C:"10 cm", D:"50 cm" }, answer: "A" },
              
              { question: "Far point of normal eye:", options: { A:"25 cm", B:"Infinity", C:"10 cm", D:"50 cm" }, answer: "B" },
              
              { question: "Myopia is:", options: { A:"Long sightedness", B:"Short sightedness", C:"Blindness", D:"Color blindness" }, answer: "B" },
              
              { question: "Myopia corrected by:", options: { A:"Convex lens", B:"Concave lens", C:"Plane mirror", D:"Prism" }, answer: "B" },
              
              { question: "In myopia, image forms:", options: { A:"On retina", B:"Behind retina", C:"In front of retina", D:"At infinity" }, answer: "C" },
              
              { question: "Hypermetropia is:", options: { A:"Short sightedness", B:"Long sightedness", C:"Blindness", D:"Astigmatism" }, answer: "B" },
              
              { question: "Hypermetropia corrected by:", options: { A:"Concave lens", B:"Convex lens", C:"Mirror", D:"Glass" }, answer: "B" },
              
              { question: "In hypermetropia, image forms:", options: { A:"On retina", B:"Behind retina", C:"In front of retina", D:"At infinity" }, answer: "B" },
              
              { question: "Presbyopia is due to:", options: { A:"Ageing", B:"Injury", C:"Infection", D:"Light" }, answer: "A" },
              
              { question: "Presbyopia corrected by:", options: { A:"Single lens", B:"Bifocal lens", C:"Mirror", D:"Prism" }, answer: "B" },
              
              { question: "Power of accommodation decreases due to:", options: { A:"Age", B:"Light", C:"Heat", D:"Pressure" }, answer: "A" },
              
              { question: "Cataract is:", options: { A:"Lens becomes cloudy", B:"Retina damage", C:"Cornea damage", D:"Nerve problem" }, answer: "A" },
              
              { question: "White light consists of:", options: { A:"One color", B:"Seven colors", C:"Three colors", D:"Two colors" }, answer: "B" },
              
              { question: "Splitting of light is called:", options: { A:"Reflection", B:"Refraction", C:"Dispersion", D:"Scattering" }, answer: "C" },
              
              { question: "Rainbow is formed due to:", options: { A:"Reflection only", B:"Refraction only", C:"Dispersion", D:"Absorption" }, answer: "C" },
              
              { question: "VIBGYOR stands for:", options: { A:"Colors", B:"Gases", C:"Waves", D:"Energy" }, answer: "A" },
              
              { question: "Red color has:", options: { A:"Lowest wavelength", B:"Highest wavelength", C:"Medium wavelength", D:"No wavelength" }, answer: "B" },
              
              { question: "Violet color has:", options: { A:"Highest wavelength", B:"Lowest wavelength", C:"Same wavelength", D:"No wavelength" }, answer: "B" },
              
              { question: "Scattering of light is:", options: { A:"Reflection", B:"Absorption", C:"Spreading of light", D:"Refraction" }, answer: "C" },
              
              { question: "Sky appears blue due to:", options: { A:"Reflection", B:"Refraction", C:"Scattering", D:"Absorption" }, answer: "C" },
              
              { question: "Blue color scatters more because:", options: { A:"Short wavelength", B:"Long wavelength", C:"High energy", D:"Low energy" }, answer: "A" },
              
              { question: "Sun appears red at sunrise due to:", options: { A:"Reflection", B:"Refraction", C:"Scattering", D:"Absorption" }, answer: "C" },
              
              { question: "Red color scatters least because:", options: { A:"Short wavelength", B:"Long wavelength", C:"High energy", D:"Low energy" }, answer: "B" },
              
              { question: "Tyndall effect is:", options: { A:"Reflection", B:"Refraction", C:"Scattering", D:"Absorption" }, answer: "C" },
              
              { question: "Tyndall effect observed in:", options: { A:"Vacuum", B:"Colloids", C:"Solid", D:"Metal" }, answer: "B" },
              
              { question: "Why sky appears blue:", options: { A:"Absorption", B:"Reflection", C:"Scattering of blue light", D:"Refraction" }, answer: "C" },
              
              { question: "Why sunset appears red:", options: { A:"Blue scattered away", B:"Red scattered", C:"No scattering", D:"Reflection" }, answer: "A" },
              
              { question: "Optical density depends on:", options: { A:"Mass", B:"Refractive index", C:"Volume", D:"Color" }, answer: "B" },
              
              { question: "Denser medium has:", options: { A:"Lower refractive index", B:"Higher refractive index", C:"Same index", D:"Zero index" }, answer: "B" },
              
              { question: "Human eye forms image:", options: { A:"Real inverted", B:"Virtual upright", C:"Real upright", D:"Virtual inverted" }, answer: "A" },
              
              { question: "Brain interprets image as:", options: { A:"Inverted", B:"Upright", C:"Blurred", D:"Colored" }, answer: "B" },
              
              { question: "Retina acts like:", options: { A:"Screen", B:"Mirror", C:"Lens", D:"Prism" }, answer: "A" },
              
              { question: "Power of lens unit:", options: { A:"Meter", B:"Diopter", C:"Watt", D:"Newton" }, answer: "B" },
              
              { question: "Convex lens power is:", options: { A:"Negative", B:"Positive", C:"Zero", D:"Infinite" }, answer: "B" },
              
              { question: "Concave lens power is:", options: { A:"Positive", B:"Negative", C:"Zero", D:"Infinite" }, answer: "B" },
              
              { question: "Near point increases in:", options: { A:"Myopia", B:"Hypermetropia", C:"Normal eye", D:"Blindness" }, answer: "B" },
              
              { question: "Far point decreases in:", options: { A:"Myopia", B:"Hypermetropia", C:"Normal eye", D:"Cataract" }, answer: "A" },
              
              { question: "Light travels fastest in:", options: { A:"Water", B:"Glass", C:"Air", D:"Vacuum" }, answer: "D" },
              
              { question: "Cause of myopia:", options: { A:"Short eyeball", B:"Long eyeball", C:"Weak lens", D:"Strong lens" }, answer: "B" },
              
              { question: "Cause of hypermetropia:", options: { A:"Long eyeball", B:"Short eyeball", C:"Strong lens", D:"Large retina" }, answer: "B" },
              
              { question: "Rainbow has shape due to:", options: { A:"Reflection", B:"Refraction + dispersion", C:"Absorption", D:"Heat" }, answer: "B" }
              
              ];
              const chapter11 = [

                { question: "Electric current is the flow of:", options: { A:"Protons", B:"Neutrons", C:"Electrons", D:"Atoms" }, answer: "C" },
                
                { question: "Unit of electric current is:", options: { A:"Volt", B:"Ampere", C:"Ohm", D:"Watt" }, answer: "B" },
                
                { question: "1 Ampere equals:", options: { A:"1 C/s", B:"1 V", C:"1 W", D:"1 Ω" }, answer: "A" },
                
                { question: "Electric charge unit is:", options: { A:"Volt", B:"Coulomb", C:"Ampere", D:"Ohm" }, answer: "B" },
                
                { question: "Current formula is:", options: { A:"V = IR", B:"I = Q/t", C:"P = VI", D:"R = V/I" }, answer: "B" },
                
                { question: "Potential difference unit is:", options: { A:"Ampere", B:"Volt", C:"Ohm", D:"Watt" }, answer: "B" },
                
                { question: "Ohm’s Law is:", options: { A:"V = IR", B:"I = V/R", C:"R = V/I", D:"All" }, answer: "D" },
                
                { question: "Resistance unit is:", options: { A:"Volt", B:"Ampere", C:"Ohm", D:"Watt" }, answer: "C" },
                
                { question: "Resistance depends on:", options: { A:"Length", B:"Area", C:"Material", D:"All" }, answer: "D" },
                
                { question: "Resistance increases with:", options: { A:"Area", B:"Length", C:"Temperature always", D:"Voltage" }, answer: "B" },
                
                { question: "Resistance decreases with:", options: { A:"Length", B:"Area", C:"Voltage", D:"Current" }, answer: "B" },
                
                { question: "Formula of resistance is:", options: { A:"R = ρL/A", B:"V = IR", C:"I = Q/t", D:"P = VI" }, answer: "A" },
                
                { question: "Resistivity unit is:", options: { A:"Ωm", B:"Ω", C:"A", D:"V" }, answer: "A" },
                
                { question: "Ohmic conductor obeys:", options: { A:"Newton law", B:"Ohm’s law", C:"Faraday law", D:"Coulomb law" }, answer: "B" },
                
                { question: "Graph of V-I is:", options: { A:"Curve", B:"Straight line", C:"Circle", D:"Parabola" }, answer: "B" },
                
                { question: "Series circuit current is:", options: { A:"Same everywhere", B:"Different", C:"Zero", D:"Infinite" }, answer: "A" },
                
                { question: "Parallel circuit voltage is:", options: { A:"Same", B:"Different", C:"Zero", D:"Infinite" }, answer: "A" },
                
                { question: "Equivalent resistance in series:", options: { A:"Sum", B:"Product", C:"Division", D:"Difference" }, answer: "A" },
                
                { question: "Equivalent resistance in parallel:", options: { A:"Sum", B:"Inverse sum", C:"Difference", D:"Multiply" }, answer: "B" },
                
                { question: "Series connection increases:", options: { A:"Current", B:"Voltage", C:"Resistance", D:"Power" }, answer: "C" },
                
                { question: "Parallel connection decreases:", options: { A:"Current", B:"Voltage", C:"Resistance", D:"Power" }, answer: "C" },
                
                { question: "Electric power formula:", options: { A:"P = VI", B:"V = IR", C:"I = Q/t", D:"R = V/I" }, answer: "A" },
                
                { question: "Power unit is:", options: { A:"Volt", B:"Ampere", C:"Watt", D:"Ohm" }, answer: "C" },
                
                { question: "1 kW =:", options: { A:"100 W", B:"1000 W", C:"10 W", D:"1 W" }, answer: "B" },
                
                { question: "Energy unit is:", options: { A:"Watt", B:"kWh", C:"Volt", D:"Ampere" }, answer: "B" },
                
                { question: "1 kWh equals:", options: { A:"3600 J", B:"3.6 × 10^6 J", C:"1000 J", D:"10^6 J" }, answer: "B" },
                
                { question: "Heating effect depends on:", options: { A:"Current", B:"Resistance", C:"Time", D:"All" }, answer: "D" },
                
                { question: "Joule’s law of heating:", options: { A:"H = I^2Rt", B:"V = IR", C:"P = VI", D:"I = Q/t" }, answer: "A" },
                
                { question: "Fuse works on:", options: { A:"Magnetic effect", B:"Heating effect", C:"Chemical effect", D:"Light effect" }, answer: "B" },
                
                { question: "Fuse wire has:", options: { A:"High melting point", B:"Low melting point", C:"No melting", D:"High resistance only" }, answer: "B" },
                
                { question: "Good conductor has:", options: { A:"High resistance", B:"Low resistance", C:"No resistance", D:"Infinite resistance" }, answer: "B" },
                
                { question: "Insulator has:", options: { A:"Low resistance", B:"High resistance", C:"No resistance", D:"Zero voltage" }, answer: "B" },
                
                { question: "Copper is:", options: { A:"Insulator", B:"Conductor", C:"Semiconductor", D:"Metal oxide" }, answer: "B" },
                
                { question: "Nichrome is used in:", options: { A:"Wires", B:"Heaters", C:"Motors", D:"Batteries" }, answer: "B" },
                
                { question: "Current direction is:", options: { A:"Electron flow", B:"Opposite to electron flow", C:"Same as electrons", D:"Random" }, answer: "B" },
                
                { question: "Electric circuit needs:", options: { A:"Open path", B:"Closed path", C:"Half path", D:"No path" }, answer: "B" },
                
                { question: "Ammeter measures:", options: { A:"Voltage", B:"Current", C:"Resistance", D:"Power" }, answer: "B" },
                
                { question: "Voltmeter measures:", options: { A:"Current", B:"Voltage", C:"Resistance", D:"Power" }, answer: "B" },
                
                { question: "Ammeter connected in:", options: { A:"Series", B:"Parallel", C:"No connection", D:"Across circuit" }, answer: "A" },
                
                { question: "Voltmeter connected in:", options: { A:"Series", B:"Parallel", C:"No connection", D:"Random" }, answer: "B" },
                
                { question: "Higher resistance gives:", options: { A:"More current", B:"Less current", C:"Same current", D:"No effect" }, answer: "B" },
                
                { question: "Ohm’s law valid for:", options: { A:"All materials", B:"Ohmic materials", C:"Gases", D:"Liquids" }, answer: "B" },
                
                { question: "Resistivity depends on:", options: { A:"Length", B:"Area", C:"Material", D:"Voltage" }, answer: "C" },
                
                { question: "Power also equals:", options: { A:"I^2R", B:"V^2/R", C:"Both", D:"None" }, answer: "C" },
                
                { question: "Electric energy formula:", options: { A:"VIt", B:"I^2Rt", C:"Both", D:"None" }, answer: "C" },
                
                { question: "Heating element material:", options: { A:"Copper", B:"Nichrome", C:"Aluminium", D:"Iron" }, answer: "B" },
                
                { question: "House wiring uses:", options: { A:"Series", B:"Parallel", C:"Mixed", D:"No circuit" }, answer: "B" },
                
                { question: "Parallel circuit advantage:", options: { A:"Same current", B:"Same voltage", C:"Less power", D:"High resistance" }, answer: "B" },
                
                { question: "Resistance in parallel is:", options: { A:"More", B:"Less", C:"Same", D:"Infinite" }, answer: "B" },
                
                { question: "Electric heater uses:", options: { A:"Light effect", B:"Heating effect", C:"Magnetic effect", D:"Chemical effect" }, answer: "B" }
                
                ];
                const chapter12 = [

                  { question: "Magnetic field is produced by:", options: { A:"Static charge", B:"Moving charges", C:"Neutrons", D:"Protons only" }, answer: "B" },
                  
                  { question: "Magnetic field lines represent:", options: { A:"Electric force", B:"Magnetic force", C:"Heat", D:"Energy" }, answer: "B" },
                  
                  { question: "Direction of magnetic field is given by:", options: { A:"Left hand rule", B:"Right hand thumb rule", C:"Ohm’s law", D:"Fleming’s law" }, answer: "B" },
                  
                  { question: "In right-hand thumb rule:", options: { A:"Thumb gives current", B:"Fingers give current", C:"Palm gives current", D:"Wrist gives current" }, answer: "A" },
                  
                  { question: "Magnetic field around straight conductor is:", options: { A:"Straight lines", B:"Circular", C:"Random", D:"Zigzag" }, answer: "B" },
                  
                  { question: "Closer field lines indicate:", options: { A:"Weak field", B:"Strong field", C:"No field", D:"Zero field" }, answer: "B" },
                  
                  { question: "Magnetic field increases with:", options: { A:"Distance", B:"Current", C:"Resistance", D:"Time" }, answer: "B" },
                  
                  { question: "Magnetic field decreases with:", options: { A:"Current", B:"Distance", C:"Voltage", D:"Resistance" }, answer: "B" },
                  
                  { question: "Solenoid produces field like:", options: { A:"Bar magnet", B:"Circle", C:"Plane", D:"Triangle" }, answer: "A" },
                  
                  { question: "Inside solenoid field is:", options: { A:"Weak", B:"Uniform", C:"Zero", D:"Random" }, answer: "B" },
                  
                  { question: "Electromagnet is made by:", options: { A:"Permanent magnet", B:"Current in coil", C:"Heat", D:"Pressure" }, answer: "B" },
                  
                  { question: "Core of electromagnet is:", options: { A:"Steel", B:"Soft iron", C:"Copper", D:"Aluminium" }, answer: "B" },
                  
                  { question: "Electromagnet strength depends on:", options: { A:"Current", B:"Turns", C:"Core", D:"All" }, answer: "D" },
                  
                  { question: "Permanent magnet material:", options: { A:"Soft iron", B:"Steel", C:"Copper", D:"Plastic" }, answer: "B" },
                  
                  { question: "Force on current carrying conductor is:", options: { A:"Zero", B:"Magnetic force", C:"Electric force", D:"Gravitational" }, answer: "B" },
                  
                  { question: "Fleming’s Left Hand Rule gives:", options: { A:"Direction of current", B:"Direction of force", C:"Direction of field", D:"Voltage" }, answer: "B" },
                  
                  { question: "In left hand rule:", options: { A:"Thumb = force", B:"First finger = field", C:"Second finger = current", D:"All" }, answer: "D" },
                  
                  { question: "Electric motor converts:", options: { A:"Mechanical to electrical", B:"Electrical to mechanical", C:"Heat to electrical", D:"Light to heat" }, answer: "B" },
                  
                  { question: "Motor works on:", options: { A:"Heating effect", B:"Magnetic effect", C:"Chemical effect", D:"Light effect" }, answer: "B" },
                  
                  { question: "Split ring in motor is called:", options: { A:"Commutator", B:"Generator", C:"Armature", D:"Brush" }, answer: "A" },
                  
                  { question: "Carbon brushes are used to:", options: { A:"Produce current", B:"Collect current", C:"Store current", D:"Stop current" }, answer: "B" },
                  
                  { question: "Electric generator converts:", options: { A:"Mechanical to electrical", B:"Electrical to mechanical", C:"Heat to light", D:"Light to heat" }, answer: "A" },
                  
                  { question: "Generator works on:", options: { A:"Heating effect", B:"Magnetic effect", C:"Electromagnetic induction", D:"Chemical effect" }, answer: "C" },
                  
                  { question: "Fleming’s Right Hand Rule gives:", options: { A:"Force direction", B:"Current direction", C:"Field direction", D:"Voltage" }, answer: "B" },
                  
                  { question: "In right hand rule:", options: { A:"Thumb = motion", B:"First finger = field", C:"Second finger = current", D:"All" }, answer: "D" },
                  
                  { question: "AC current changes:", options: { A:"Magnitude only", B:"Direction only", C:"Both magnitude and direction", D:"None" }, answer: "C" },
                  
                  { question: "DC current is:", options: { A:"Changing", B:"Constant direction", C:"Alternating", D:"Zero" }, answer: "B" },
                  
                  { question: "AC frequency in India is:", options: { A:"60 Hz", B:"50 Hz", C:"100 Hz", D:"25 Hz" }, answer: "B" },
                  
                  { question: "Fuse works on:", options: { A:"Magnetic effect", B:"Heating effect", C:"Chemical effect", D:"Light effect" }, answer: "B" },
                  
                  { question: "Short circuit causes:", options: { A:"Low current", B:"High current", C:"No current", D:"Voltage zero" }, answer: "B" },
                  
                  { question: "Overloading causes:", options: { A:"Low current", B:"High current", C:"No effect", D:"Cooling" }, answer: "B" },
                  
                  { question: "Electric fuse prevents:", options: { A:"Cooling", B:"Fire hazard", C:"Voltage increase", D:"Resistance" }, answer: "B" },
                  
                  { question: "Earthing protects from:", options: { A:"Shock", B:"Heat", C:"Light", D:"Sound" }, answer: "A" },
                  
                  { question: "Magnetic field lines never:", options: { A:"Start", B:"End", C:"Intersect", D:"Curve" }, answer: "C" },
                  
                  { question: "Field lines outside magnet go from:", options: { A:"South to North", B:"North to South", C:"East to West", D:"West to East" }, answer: "B" },
                  
                  { question: "Field lines inside magnet go from:", options: { A:"North to South", B:"South to North", C:"East to West", D:"Random" }, answer: "B" },
                  
                  { question: "Electromagnet can be turned:", options: { A:"Permanent", B:"On and off", C:"Only off", D:"Only on" }, answer: "B" },
                  
                  { question: "Soft iron used because:", options: { A:"Retains magnetism", B:"Loses magnetism quickly", C:"Hard", D:"Heavy" }, answer: "B" },
                  
                  { question: "Force increases with:", options: { A:"Current", B:"Field strength", C:"Length", D:"All" }, answer: "D" },
                  
                  { question: "Direction of force reverses if:", options: { A:"Current reversed", B:"Field reversed", C:"Both reversed", D:"All" }, answer: "D" },
                  
                  { question: "Motor uses:", options: { A:"AC only", B:"DC only", C:"Both", D:"None" }, answer: "C" },
                  
                  { question: "Generator produces:", options: { A:"AC", B:"DC", C:"Both", D:"None" }, answer: "C" },
                  
                  { question: "Transformer works on:", options: { A:"Heating", B:"Magnetic effect", C:"Electromagnetic induction", D:"Chemical effect" }, answer: "C" },
                  
                  { question: "Step-up transformer:", options: { A:"Increases voltage", B:"Decreases voltage", C:"No change", D:"Stops current" }, answer: "A" },
                  
                  { question: "Step-down transformer:", options: { A:"Increases voltage", B:"Decreases voltage", C:"No change", D:"Stops current" }, answer: "B" },
                  
                  { question: "Magnetic field strongest at:", options: { A:"Center", B:"Poles", C:"Ends", D:"Middle" }, answer: "B" },
                  
                  { question: "Compass needle aligns with:", options: { A:"Electric field", B:"Magnetic field", C:"Gravity", D:"Heat" }, answer: "B" },
                  
                  { question: "Solenoid behaves like:", options: { A:"Wire", B:"Magnet", C:"Battery", D:"Switch" }, answer: "B" }
                  
                  ];
                  const chapter5 = [

                    { question: "Life processes are:", options: { A:"Non-living activities", B:"Activities maintaining life", C:"Chemical reactions only", D:"Physical changes" }, answer: "B" },
                    
                    { question: "Nutrition is:", options: { A:"Breathing", B:"Taking food and using it", C:"Excretion", D:"Movement" }, answer: "B" },
                    
                    { question: "Autotrophic nutrition is:", options: { A:"Eating plants", B:"Making own food", C:"Eating animals", D:"Drinking water" }, answer: "B" },
                    
                    { question: "Heterotrophic nutrition is:", options: { A:"Self food making", B:"Dependent on others", C:"No food", D:"Only water" }, answer: "B" },
                    
                    { question: "Photosynthesis occurs in:", options: { A:"Roots", B:"Leaves", C:"Stem only", D:"Flower" }, answer: "B" },
                    
                    { question: "Chlorophyll is present in:", options: { A:"Roots", B:"Leaves", C:"Stem", D:"Soil" }, answer: "B" },
                    
                    { question: "Raw materials for photosynthesis:", options: { A:"O2 + H2O", B:"CO2 + H2O", C:"CO2 + O2", D:"H2 + O2" }, answer: "B" },
                    
                    { question: "Product of photosynthesis:", options: { A:"CO2", B:"Glucose + O2", C:"Water", D:"Nitrogen" }, answer: "B" },
                    
                    { question: "Stomata help in:", options: { A:"Transport", B:"Gas exchange", C:"Digestion", D:"Excretion" }, answer: "B" },
                    
                    { question: "Opening of stomata depends on:", options: { A:"Light", B:"Water", C:"Guard cells", D:"All" }, answer: "D" },
                    
                    { question: "Human nutrition is:", options: { A:"Autotrophic", B:"Heterotrophic", C:"Saprophytic", D:"Parasitic" }, answer: "B" },
                    
                    { question: "Digestion begins in:", options: { A:"Stomach", B:"Mouth", C:"Intestine", D:"Liver" }, answer: "B" },
                    
                    { question: "Saliva contains enzyme:", options: { A:"Pepsin", B:"Amylase", C:"Lipase", D:"Trypsin" }, answer: "B" },
                    
                    { question: "Stomach produces:", options: { A:"Saliva", B:"HCl and enzymes", C:"Bile", D:"Insulin" }, answer: "B" },
                    
                    { question: "HCl in stomach helps in:", options: { A:"Digestion", B:"Killing germs", C:"Activating enzymes", D:"All" }, answer: "D" },
                    
                    { question: "Small intestine is main site of:", options: { A:"Absorption", B:"Digestion", C:"Excretion", D:"Breathing" }, answer: "A" },
                    
                    { question: "Liver produces:", options: { A:"Saliva", B:"Bile juice", C:"Acid", D:"Enzymes" }, answer: "B" },
                    
                    { question: "Bile helps in:", options: { A:"Protein digestion", B:"Fat digestion", C:"Carbohydrate digestion", D:"Absorption" }, answer: "B" },
                    
                    { question: "Respiration is:", options: { A:"Breathing only", B:"Energy release", C:"Gas exchange", D:"Digestion" }, answer: "B" },
                    
                    { question: "Aerobic respiration uses:", options: { A:"O2", B:"CO2", C:"N2", D:"H2" }, answer: "A" },
                    
                    { question: "Anaerobic respiration occurs without:", options: { A:"CO2", B:"O2", C:"Water", D:"Food" }, answer: "B" },
                    
                    { question: "End product of aerobic respiration:", options: { A:"CO2 + H2O", B:"Alcohol", C:"Lactic acid", D:"Glucose" }, answer: "A" },
                    
                    { question: "End product of anaerobic respiration:", options: { A:"CO2 + H2O", B:"Alcohol or lactic acid", C:"O2", D:"Water" }, answer: "B" },
                    
                    { question: "Respiration occurs in:", options: { A:"Nucleus", B:"Mitochondria", C:"Ribosome", D:"Chloroplast" }, answer: "B" },
                    
                    { question: "Breathing is:", options: { A:"Chemical process", B:"Physical process", C:"Biological reaction", D:"Digestion" }, answer: "B" },
                    
                    { question: "Inhalation means:", options: { A:"Air out", B:"Air in", C:"No air", D:"Gas exchange" }, answer: "B" },
                    
                    { question: "Exhalation means:", options: { A:"Air in", B:"Air out", C:"No air", D:"Gas exchange" }, answer: "B" },
                    
                    { question: "Oxygen carried by:", options: { A:"Plasma", B:"RBC", C:"WBC", D:"Platelets" }, answer: "B" },
                    
                    { question: "Hemoglobin is in:", options: { A:"Plasma", B:"RBC", C:"WBC", D:"Platelets" }, answer: "B" },
                    
                    { question: "Heart is:", options: { A:"Single chamber", B:"Double chamber", C:"Four chambered", D:"Three chambered" }, answer: "C" },
                    
                    { question: "Heart pumps:", options: { A:"Water", B:"Blood", C:"Oxygen only", D:"Food" }, answer: "B" },
                    
                    { question: "Arteries carry blood:", options: { A:"To heart", B:"Away from heart", C:"No direction", D:"Random" }, answer: "B" },
                    
                    { question: "Veins carry blood:", options: { A:"Away from heart", B:"To heart", C:"Random", D:"No direction" }, answer: "B" },
                    
                    { question: "Capillaries connect:", options: { A:"Arteries and veins", B:"Heart and lungs", C:"Stomach and intestine", D:"Brain and nerves" }, answer: "A" },
                    
                    { question: "Blood contains:", options: { A:"RBC", B:"WBC", C:"Platelets", D:"All" }, answer: "D" },
                    
                    { question: "Function of platelets:", options: { A:"Transport", B:"Clotting", C:"Immunity", D:"Digestion" }, answer: "B" },
                    
                    { question: "WBC function:", options: { A:"Transport", B:"Defense", C:"Clotting", D:"Digestion" }, answer: "B" },
                    
                    { question: "Excretion removes:", options: { A:"Food", B:"Waste", C:"Water", D:"Oxygen" }, answer: "B" },
                    
                    { question: "Kidneys filter:", options: { A:"Air", B:"Blood", C:"Water", D:"Food" }, answer: "B" },
                    
                    { question: "Urine formed in:", options: { A:"Liver", B:"Kidney", C:"Stomach", D:"Heart" }, answer: "B" },
                    
                    { question: "Nephron is:", options: { A:"Cell", B:"Functional unit of kidney", C:"Organ", D:"Tissue" }, answer: "B" },
                    
                    { question: "Urine stored in:", options: { A:"Kidney", B:"Bladder", C:"Ureter", D:"Urethra" }, answer: "B" },
                    
                    { question: "Urea formed in:", options: { A:"Kidney", B:"Liver", C:"Heart", D:"Brain" }, answer: "B" },
                    
                    { question: "Plants excrete through:", options: { A:"Roots", B:"Leaves", C:"Stomata", D:"All" }, answer: "D" },
                    
                    { question: "Transpiration is:", options: { A:"Water loss", B:"Food making", C:"Respiration", D:"Excretion" }, answer: "A" },
                    
                    { question: "Xylem transports:", options: { A:"Food", B:"Water", C:"Oxygen", D:"CO2" }, answer: "B" },
                    
                    { question: "Phloem transports:", options: { A:"Water", B:"Food", C:"Oxygen", D:"CO2" }, answer: "B" },
                    
                    { question: "Double circulation occurs in:", options: { A:"Fish", B:"Humans", C:"Amphibians", D:"Reptiles" }, answer: "B" },
                    
                    { question: "Energy released in respiration is stored as:", options: { A:"ATP", B:"ADP", C:"DNA", D:"RNA" }, answer: "A" }
                    
                    ];
                    const chapter6 = [

                      { question: "Control and coordination in animals is done by:", options: { A:"Blood", B:"Nervous system and endocrine system", C:"Respiratory system", D:"Digestive system" }, answer: "B" },
                      
                      { question: "Basic unit of nervous system is:", options: { A:"Cell", B:"Neuron", C:"Tissue", D:"Organ" }, answer: "B" },
                      
                      { question: "Neuron consists of:", options: { A:"Dendrites, cell body, axon", B:"Only axon", C:"Only dendrites", D:"Only cell body" }, answer: "A" },
                      
                      { question: "Dendrites receive:", options: { A:"Impulses", B:"Blood", C:"Oxygen", D:"Food" }, answer: "A" },
                      
                      { question: "Axon carries impulses:", options: { A:"Toward cell body", B:"Away from cell body", C:"No direction", D:"Random" }, answer: "B" },
                      
                      { question: "Impulse travels in neuron as:", options: { A:"Mechanical signal", B:"Electrical signal", C:"Light signal", D:"Heat signal" }, answer: "B" },
                      
                      { question: "Synapse is:", options: { A:"Neuron body", B:"Junction between neurons", C:"Axon", D:"Dendrite" }, answer: "B" },
                      
                      { question: "Impulse crosses synapse by:", options: { A:"Electrical signal", B:"Chemical signal", C:"Light", D:"Heat" }, answer: "B" },
                      
                      { question: "Brain is part of:", options: { A:"Circulatory system", B:"Nervous system", C:"Digestive system", D:"Respiratory system" }, answer: "B" },
                      
                      { question: "Spinal cord controls:", options: { A:"Thinking", B:"Reflex actions", C:"Digestion", D:"Breathing" }, answer: "B" },
                      
                      { question: "Reflex action is:", options: { A:"Slow response", B:"Quick automatic response", C:"Voluntary action", D:"Thinking process" }, answer: "B" },
                      
                      { question: "Reflex arc involves:", options: { A:"Brain only", B:"Spinal cord pathway", C:"Heart", D:"Lungs" }, answer: "B" },
                      
                      { question: "Example of reflex action:", options: { A:"Walking", B:"Writing", C:"Touching hot object", D:"Eating" }, answer: "C" },
                      
                      { question: "Voluntary actions are controlled by:", options: { A:"Spinal cord", B:"Brain", C:"Heart", D:"Liver" }, answer: "B" },
                      
                      { question: "Central nervous system includes:", options: { A:"Brain + nerves", B:"Brain + spinal cord", C:"Spinal cord + nerves", D:"Only brain" }, answer: "B" },
                      
                      { question: "Peripheral nervous system includes:", options: { A:"Brain", B:"Spinal cord", C:"Nerves", D:"Heart" }, answer: "C" },
                      
                      { question: "Endocrine system uses:", options: { A:"Nerves", B:"Hormones", C:"Blood cells", D:"Enzymes" }, answer: "B" },
                      
                      { question: "Hormones are:", options: { A:"Chemical messengers", B:"Cells", C:"Tissues", D:"Organs" }, answer: "A" },
                      
                      { question: "Endocrine glands are:", options: { A:"Duct glands", B:"Ductless glands", C:"Blood vessels", D:"Nerves" }, answer: "B" },
                      
                      { question: "Pituitary gland is called:", options: { A:"Small gland", B:"Master gland", C:"Large gland", D:"Inactive gland" }, answer: "B" },
                      
                      { question: "Thyroxine is secreted by:", options: { A:"Pancreas", B:"Thyroid gland", C:"Adrenal gland", D:"Pituitary gland" }, answer: "B" },
                      
                      { question: "Iodine is required for:", options: { A:"Insulin", B:"Thyroxine", C:"Adrenaline", D:"Growth hormone" }, answer: "B" },
                      
                      { question: "Insulin is secreted by:", options: { A:"Liver", B:"Pancreas", C:"Kidney", D:"Heart" }, answer: "B" },
                      
                      { question: "Insulin controls:", options: { A:"Blood pressure", B:"Blood sugar", C:"Growth", D:"Temperature" }, answer: "B" },
                      
                      { question: "Diabetes is due to lack of:", options: { A:"Thyroxine", B:"Insulin", C:"Adrenaline", D:"Growth hormone" }, answer: "B" },
                      
                      { question: "Adrenaline is secreted by:", options: { A:"Pancreas", B:"Adrenal gland", C:"Thyroid", D:"Pituitary" }, answer: "B" },
                      
                      { question: "Adrenaline prepares body for:", options: { A:"Rest", B:"Fight or flight", C:"Sleep", D:"Digestion" }, answer: "B" },
                      
                      { question: "Growth hormone is secreted by:", options: { A:"Thyroid", B:"Pituitary", C:"Pancreas", D:"Adrenal" }, answer: "B" },
                      
                      { question: "Deficiency of growth hormone causes:", options: { A:"Gigantism", B:"Dwarfism", C:"Diabetes", D:"Goiter" }, answer: "B" },
                      
                      { question: "Excess growth hormone causes:", options: { A:"Dwarfism", B:"Gigantism", C:"Goiter", D:"Diabetes" }, answer: "B" },
                      
                      { question: "Plant hormones are called:", options: { A:"Enzymes", B:"Phytohormones", C:"Cells", D:"Proteins" }, answer: "B" },
                      
                      { question: "Auxin helps in:", options: { A:"Growth", B:"Respiration", C:"Excretion", D:"Digestion" }, answer: "A" },
                      
                      { question: "Gibberellin promotes:", options: { A:"Fruit ripening", B:"Stem growth", C:"Leaf fall", D:"Dormancy" }, answer: "B" },
                      
                      { question: "Cytokinin helps in:", options: { A:"Cell division", B:"Cell death", C:"Growth stopping", D:"Respiration" }, answer: "A" },
                      
                      { question: "Ethylene causes:", options: { A:"Growth", B:"Fruit ripening", C:"Dormancy", D:"Cell division" }, answer: "B" },
                      
                      { question: "Abscisic acid causes:", options: { A:"Growth", B:"Dormancy", C:"Fruit ripening", D:"Cell division" }, answer: "B" },
                      
                      { question: "Tropism is:", options: { A:"Animal movement", B:"Plant growth response", C:"Respiration", D:"Excretion" }, answer: "B" },
                      
                      { question: "Phototropism is response to:", options: { A:"Water", B:"Light", C:"Gravity", D:"Touch" }, answer: "B" },
                      
                      { question: "Geotropism is response to:", options: { A:"Light", B:"Gravity", C:"Water", D:"Touch" }, answer: "B" },
                      
                      { question: "Hydrotropism is response to:", options: { A:"Light", B:"Gravity", C:"Water", D:"Touch" }, answer: "C" },
                      
                      { question: "Thigmotropism is response to:", options: { A:"Touch", B:"Light", C:"Water", D:"Gravity" }, answer: "A" },
                      
                      { question: "Positive tropism means:", options: { A:"Away from stimulus", B:"Towards stimulus", C:"No response", D:"Random" }, answer: "B" },
                      
                      { question: "Negative tropism means:", options: { A:"Towards stimulus", B:"Away from stimulus", C:"No response", D:"Random" }, answer: "B" },
                      
                      { question: "Nervous system response is:", options: { A:"Slow", B:"Fast", C:"Medium", D:"No response" }, answer: "B" },
                      
                      { question: "Hormonal response is:", options: { A:"Fast", B:"Slow", C:"Instant", D:"No response" }, answer: "B" },
                      
                      { question: "Coordination means:", options: { A:"Movement", B:"Working together", C:"Eating", D:"Breathing" }, answer: "B" },
                      
                      { question: "Reflex arc pathway includes:", options: { A:"Receptor → neuron → effector", B:"Heart → brain", C:"Lungs → blood", D:"Kidney → bladder" }, answer: "A" },
                      
                      { question: "Effectors are:", options: { A:"Sensors", B:"Muscles or glands", C:"Nerves", D:"Cells" }, answer: "B" }
                      
                      ];
                      const chapter7 = [

                        { question: "Reproduction is:", options: { A:"Growth", B:"Process of producing offspring", C:"Respiration", D:"Digestion" }, answer: "B" },
                        
                        { question: "Asexual reproduction involves:", options: { A:"One parent", B:"Two parents", C:"Gametes", D:"Fertilization" }, answer: "A" },
                        
                        { question: "Sexual reproduction involves:", options: { A:"One parent", B:"Two parents", C:"No gametes", D:"No fertilization" }, answer: "B" },
                        
                        { question: "Binary fission occurs in:", options: { A:"Amoeba", B:"Human", C:"Plant", D:"Fish" }, answer: "A" },
                        
                        { question: "Budding occurs in:", options: { A:"Hydra", B:"Human", C:"Dog", D:"Tree" }, answer: "A" },
                        
                        { question: "Spore formation occurs in:", options: { A:"Fungi", B:"Animals", C:"Plants only", D:"Humans" }, answer: "A" },
                        
                        { question: "Vegetative propagation occurs in:", options: { A:"Animals", B:"Plants", C:"Fungi", D:"Bacteria" }, answer: "B" },
                        
                        { question: "Cutting method is used in:", options: { A:"Rose", B:"Human", C:"Dog", D:"Fish" }, answer: "A" },
                        
                        { question: "Layering is used in:", options: { A:"Jasmine", B:"Human", C:"Fungi", D:"Bacteria" }, answer: "A" },
                        
                        { question: "Tissue culture produces:", options: { A:"Different plants", B:"Identical plants", C:"Animals", D:"Fungi" }, answer: "B" },
                        
                        { question: "Advantage of asexual reproduction:", options: { A:"Variation", B:"Fast reproduction", C:"Slow process", D:"Needs two parents" }, answer: "B" },
                        
                        { question: "Sexual reproduction causes:", options: { A:"No variation", B:"Variation", C:"Cloning", D:"Fast process only" }, answer: "B" },
                        
                        { question: "Male reproductive organ is:", options: { A:"Ovary", B:"Testes", C:"Uterus", D:"Fallopian tube" }, answer: "B" },
                        
                        { question: "Female reproductive organ is:", options: { A:"Testes", B:"Ovary", C:"Penis", D:"Scrotum" }, answer: "B" },
                        
                        { question: "Testes produce:", options: { A:"Egg", B:"Sperm", C:"Blood", D:"Hormones only" }, answer: "B" },
                        
                        { question: "Ovary produces:", options: { A:"Sperm", B:"Egg", C:"Blood", D:"Hormones only" }, answer: "B" },
                        
                        { question: "Fertilization is:", options: { A:"Formation of sperm", B:"Fusion of gametes", C:"Growth", D:"Digestion" }, answer: "B" },
                        
                        { question: "Zygote is formed after:", options: { A:"Fertilization", B:"Respiration", C:"Excretion", D:"Digestion" }, answer: "A" },
                        
                        { question: "Embryo develops into:", options: { A:"Gamete", B:"Foetus", C:"Cell", D:"Tissue" }, answer: "B" },
                        
                        { question: "Site of fertilization in humans:", options: { A:"Ovary", B:"Fallopian tube", C:"Uterus", D:"Vagina" }, answer: "B" },
                        
                        { question: "Implantation occurs in:", options: { A:"Ovary", B:"Uterus", C:"Fallopian tube", D:"Vagina" }, answer: "B" },
                        
                        { question: "Menstrual cycle duration:", options: { A:"14 days", B:"28 days", C:"7 days", D:"30 days" }, answer: "B" },
                        
                        { question: "Menstruation is:", options: { A:"Release of egg", B:"Shedding of uterine lining", C:"Fertilization", D:"Growth" }, answer: "B" },
                        
                        { question: "Ovulation is:", options: { A:"Fertilization", B:"Release of egg", C:"Menstruation", D:"Implantation" }, answer: "B" },
                        
                        { question: "Puberty occurs due to:", options: { A:"Hormones", B:"Food", C:"Water", D:"Air" }, answer: "A" },
                        
                        { question: "Male hormone is:", options: { A:"Estrogen", B:"Testosterone", C:"Progesterone", D:"Insulin" }, answer: "B" },
                        
                        { question: "Female hormone is:", options: { A:"Testosterone", B:"Estrogen", C:"Adrenaline", D:"Insulin" }, answer: "B" },
                        
                        { question: "Contraception means:", options: { A:"Reproduction", B:"Preventing pregnancy", C:"Fertilization", D:"Growth" }, answer: "B" },
                        
                        { question: "Condom is:", options: { A:"Surgical method", B:"Barrier method", C:"Hormonal method", D:"Natural method" }, answer: "B" },
                        
                        { question: "Copper-T is:", options: { A:"Barrier method", B:"Intrauterine device", C:"Surgical method", D:"Natural method" }, answer: "B" },
                        
                        { question: "Vasectomy is:", options: { A:"Female surgery", B:"Male surgery", C:"Hormonal method", D:"Barrier method" }, answer: "B" },
                        
                        { question: "Tubectomy is:", options: { A:"Male surgery", B:"Female surgery", C:"Barrier method", D:"Natural method" }, answer: "B" },
                        
                        { question: "STD stands for:", options: { A:"Sexual disease", B:"Sexually transmitted disease", C:"Simple disease", D:"Serious disease" }, answer: "B" },
                        
                        { question: "HIV causes:", options: { A:"Cancer", B:"AIDS", C:"Diabetes", D:"Flu" }, answer: "B" },
                        
                        { question: "Reproduction in plants occurs by:", options: { A:"Seeds", B:"Vegetative parts", C:"Both", D:"None" }, answer: "C" },
                        
                        { question: "Pollination is:", options: { A:"Fertilization", B:"Transfer of pollen", C:"Seed formation", D:"Fruit formation" }, answer: "B" },
                        
                        { question: "Fertilization in plants forms:", options: { A:"Seed", B:"Fruit", C:"Zygote", D:"Flower" }, answer: "C" },
                        
                        { question: "Seed develops into:", options: { A:"Plant", B:"Fruit", C:"Flower", D:"Leaf" }, answer: "A" },
                        
                        { question: "Fruit protects:", options: { A:"Flower", B:"Seed", C:"Leaf", D:"Stem" }, answer: "B" },
                        
                        { question: "Asexual reproduction produces:", options: { A:"Variation", B:"Identical offspring", C:"Different species", D:"New genes" }, answer: "B" },
                        
                        { question: "Sexual reproduction involves:", options: { A:"Mitosis only", B:"Meiosis", C:"No division", D:"Random division" }, answer: "B" },
                        
                        { question: "DNA copying occurs in:", options: { A:"Reproduction", B:"Digestion", C:"Respiration", D:"Excretion" }, answer: "A" },
                        
                        { question: "Importance of reproduction:", options: { A:"Growth", B:"Continuity of species", C:"Energy", D:"Movement" }, answer: "B" },
                        
                        { question: "Embryo gets nutrition from:", options: { A:"Blood", B:"Placenta", C:"Water", D:"Food" }, answer: "B" },
                        
                        { question: "Placenta connects:", options: { A:"Mother and baby", B:"Heart and lungs", C:"Brain and nerves", D:"Stomach and intestine" }, answer: "A" },
                        
                        { question: "Foetus stage is:", options: { A:"Before embryo", B:"After embryo", C:"Before zygote", D:"Before fertilization" }, answer: "B" }
                        
                        ];
                        const chapter8 = [

                          { question: "Heredity is:", options: { A:"Variation", B:"Transmission of traits", C:"Evolution", D:"Growth" }, answer: "B" },
                          
                          { question: "Variation means:", options: { A:"Same traits", B:"Differences in traits", C:"Growth", D:"Reproduction" }, answer: "B" },
                          
                          { question: "Father of genetics is:", options: { A:"Darwin", B:"Mendel", C:"Newton", D:"Einstein" }, answer: "B" },
                          
                          { question: "Mendel conducted experiments on:", options: { A:"Rice", B:"Pea plant", C:"Wheat", D:"Grass" }, answer: "B" },
                          
                          { question: "Traits are controlled by:", options: { A:"Cells", B:"Genes", C:"Tissues", D:"Organs" }, answer: "B" },
                          
                          { question: "Genes are located on:", options: { A:"Chromosomes", B:"Cells", C:"Tissues", D:"Organs" }, answer: "A" },
                          
                          { question: "Dominant trait is:", options: { A:"Hidden", B:"Expressed", C:"Lost", D:"Destroyed" }, answer: "B" },
                          
                          { question: "Recessive trait is:", options: { A:"Expressed always", B:"Hidden in F1", C:"Dominant", D:"Permanent" }, answer: "B" },
                          
                          { question: "Phenotype is:", options: { A:"Genetic makeup", B:"Physical appearance", C:"DNA", D:"Chromosome" }, answer: "B" },
                          
                          { question: "Genotype is:", options: { A:"Appearance", B:"Genetic makeup", C:"Trait", D:"Cell" }, answer: "B" },
                          
                          { question: "Monohybrid cross ratio is:", options: { A:"1:1", B:"3:1", C:"9:3:3:1", D:"2:1" }, answer: "B" },
                          
                          { question: "Dihybrid cross ratio is:", options: { A:"3:1", B:"9:3:3:1", C:"1:1", D:"2:1" }, answer: "B" },
                          
                          { question: "Law of dominance states:", options: { A:"Both traits show", B:"Dominant expresses", C:"Recessive expresses", D:"No expression" }, answer: "B" },
                          
                          { question: "Law of segregation means:", options: { A:"Mixing of traits", B:"Separation of alleles", C:"Loss of traits", D:"Addition of traits" }, answer: "B" },
                          
                          { question: "Alleles are:", options: { A:"Same genes", B:"Different forms of gene", C:"Cells", D:"Tissues" }, answer: "B" },
                          
                          { question: "Sex determination in humans is by:", options: { A:"X chromosome", B:"Y chromosome", C:"Both X and Y", D:"Autosomes" }, answer: "C" },
                          
                          { question: "Male genotype is:", options: { A:"XX", B:"XY", C:"YY", D:"XO" }, answer: "B" },
                          
                          { question: "Female genotype is:", options: { A:"XY", B:"XX", C:"YY", D:"XO" }, answer: "B" },
                          
                          { question: "Sex of child determined by:", options: { A:"Mother", B:"Father", C:"Both equally", D:"Environment" }, answer: "B" },
                          
                          { question: "Evolution is:", options: { A:"Growth", B:"Gradual change in species", C:"Reproduction", D:"Digestion" }, answer: "B" },
                          
                          { question: "Darwin proposed:", options: { A:"Law of heredity", B:"Theory of evolution", C:"Law of motion", D:"Relativity" }, answer: "B" },
                          
                          { question: "Natural selection means:", options: { A:"Random selection", B:"Survival of fittest", C:"Artificial breeding", D:"Mutation only" }, answer: "B" },
                          
                          { question: "Fitness means:", options: { A:"Strength", B:"Ability to survive", C:"Size", D:"Speed" }, answer: "B" },
                          
                          { question: "Speciation is:", options: { A:"Extinction", B:"Formation of new species", C:"Growth", D:"Reproduction" }, answer: "B" },
                          
                          { question: "Evolution occurs due to:", options: { A:"No variation", B:"Variation", C:"Same traits", D:"No reproduction" }, answer: "B" },
                          
                          { question: "Fossils are:", options: { A:"Living organisms", B:"Remains of organisms", C:"Cells", D:"Genes" }, answer: "B" },
                          
                          { question: "Fossils provide:", options: { A:"Future data", B:"Past information", C:"Present data", D:"No data" }, answer: "B" },
                          
                          { question: "Homologous organs show:", options: { A:"Same function", B:"Same origin", C:"Different origin", D:"No relation" }, answer: "B" },
                          
                          { question: "Analogous organs show:", options: { A:"Same origin", B:"Same function", C:"No function", D:"Same genes" }, answer: "B" },
                          
                          { question: "Example of homologous organs:", options: { A:"Human arm & whale flipper", B:"Wings of bird & insect", C:"Leg & leaf", D:"Root & stem" }, answer: "A" },
                          
                          { question: "Example of analogous organs:", options: { A:"Human arm & whale flipper", B:"Wings of bird & insect", C:"Leg & arm", D:"Root & stem" }, answer: "B" },
                          
                          { question: "Acquired traits are:", options: { A:"Inherited", B:"Not inherited", C:"Genes", D:"DNA" }, answer: "B" },
                          
                          { question: "Inherited traits are:", options: { A:"Not passed", B:"Passed to offspring", C:"Lost", D:"Changed" }, answer: "B" },
                          
                          { question: "DNA is:", options: { A:"Protein", B:"Genetic material", C:"Cell", D:"Tissue" }, answer: "B" },
                          
                          { question: "Mutation is:", options: { A:"Normal change", B:"Sudden change in DNA", C:"Growth", D:"Reproduction" }, answer: "B" },
                          
                          { question: "Chromosomes carry:", options: { A:"Cells", B:"Genes", C:"Tissues", D:"Organs" }, answer: "B" },
                          
                          { question: "Number of chromosomes in humans:", options: { A:"23", B:"46", C:"44", D:"48" }, answer: "B" },
                          
                          { question: "Gametes have chromosomes:", options: { A:"46", B:"23", C:"44", D:"48" }, answer: "B" },
                          
                          { question: "Zygote has chromosomes:", options: { A:"23", B:"46", C:"44", D:"48" }, answer: "B" },
                          
                          { question: "Variation helps in:", options: { A:"Extinction", B:"Survival", C:"Death", D:"No effect" }, answer: "B" },
                          
                          { question: "Evolution leads to:", options: { A:"Same species", B:"New species", C:"No change", D:"Extinction only" }, answer: "B" },
                          
                          { question: "Darwin studied:", options: { A:"Plants only", B:"Animals only", C:"Both plants and animals", D:"Cells" }, answer: "C" },
                          
                          { question: "Theory of evolution explains:", options: { A:"Growth", B:"Origin of species", C:"Digestion", D:"Respiration" }, answer: "B" },
                          
                          { question: "Genes control:", options: { A:"Digestion", B:"Traits", C:"Respiration", D:"Excretion" }, answer: "B" },
                          
                          { question: "Dominant allele represented by:", options: { A:"Small letter", B:"Capital letter", C:"Number", D:"Symbol" }, answer: "B" },
                          
                          { question: "Recessive allele represented by:", options: { A:"Capital letter", B:"Small letter", C:"Number", D:"Symbol" }, answer: "B" },
                          
                          { question: "Genetic variation arises due to:", options: { A:"Mutation", B:"Recombination", C:"Both", D:"None" }, answer: "C" },
                          
                          { question: "Sex chromosomes are:", options: { A:"X and Y", B:"A and B", C:"C and D", D:"E and F" }, answer: "A" }
                          
                          ];
                          const chapter13 = [

                            { question: "Environment includes:", options: { A:"Living things", B:"Non-living things", C:"Both", D:"None" }, answer: "C" },
                            
                            { question: "Biotic components are:", options: { A:"Living", B:"Non-living", C:"Chemical", D:"Physical" }, answer: "A" },
                            
                            { question: "Abiotic components are:", options: { A:"Living", B:"Non-living", C:"Cells", D:"Tissues" }, answer: "B" },
                            
                            { question: "Producers are:", options: { A:"Animals", B:"Plants", C:"Fungi", D:"Bacteria" }, answer: "B" },
                            
                            { question: "Consumers are:", options: { A:"Plants", B:"Animals", C:"Water", D:"Air" }, answer: "B" },
                            
                            { question: "Decomposers are:", options: { A:"Plants", B:"Animals", C:"Fungi and bacteria", D:"Humans" }, answer: "C" },
                            
                            { question: "Food chain is:", options: { A:"Network", B:"Linear sequence", C:"Circle", D:"Random" }, answer: "B" },
                            
                            { question: "Food web is:", options: { A:"Single chain", B:"Interconnected chains", C:"Linear", D:"Simple chain" }, answer: "B" },
                            
                            { question: "First trophic level is:", options: { A:"Consumers", B:"Producers", C:"Decomposers", D:"Carnivores" }, answer: "B" },
                            
                            { question: "Second trophic level is:", options: { A:"Primary consumers", B:"Producers", C:"Decomposers", D:"Carnivores" }, answer: "A" },
                            
                            { question: "Third trophic level is:", options: { A:"Producers", B:"Herbivores", C:"Carnivores", D:"Decomposers" }, answer: "C" },
                            
                            { question: "Energy flow in ecosystem is:", options: { A:"Cyclic", B:"Unidirectional", C:"Random", D:"Static" }, answer: "B" },
                            
                            { question: "10% law states:", options: { A:"All energy transferred", B:"10% energy transferred", C:"50% energy transferred", D:"No transfer" }, answer: "B" },
                            
                            { question: "Energy decreases at each level due to:", options: { A:"Heat loss", B:"Consumption", C:"Respiration", D:"All" }, answer: "D" },
                            
                            { question: "Top consumers are:", options: { A:"Producers", B:"Herbivores", C:"Carnivores", D:"Decomposers" }, answer: "C" },
                            
                            { question: "Biodegradable waste:", options: { A:"Plastic", B:"Paper", C:"Glass", D:"Metal" }, answer: "B" },
                            
                            { question: "Non-biodegradable waste:", options: { A:"Paper", B:"Plastic", C:"Leaves", D:"Food" }, answer: "B" },
                            
                            { question: "Biodegradable substances are decomposed by:", options: { A:"Animals", B:"Plants", C:"Microorganisms", D:"Air" }, answer: "C" },
                            
                            { question: "Non-biodegradable substances:", options: { A:"Decompose easily", B:"Do not decompose", C:"Form food", D:"Give oxygen" }, answer: "B" },
                            
                            { question: "Ozone layer protects from:", options: { A:"Visible light", B:"UV rays", C:"Infrared", D:"Sound" }, answer: "B" },
                            
                            { question: "Ozone depletion is caused by:", options: { A:"CO2", B:"CFCs", C:"O2", D:"N2" }, answer: "B" },
                            
                            { question: "Biological magnification is:", options: { A:"Decrease of toxins", B:"Increase of toxins in food chain", C:"Energy flow", D:"Decomposition" }, answer: "B" },
                            
                            { question: "Maximum toxins found in:", options: { A:"Producers", B:"Primary consumers", C:"Top consumers", D:"Decomposers" }, answer: "C" },
                            
                            { question: "DDT is:", options: { A:"Biodegradable", B:"Non-biodegradable", C:"Gas", D:"Water" }, answer: "B" },
                            
                            { question: "Waste management includes:", options: { A:"Recycling", B:"Reuse", C:"Reduce", D:"All" }, answer: "D" },
                            
                            { question: "3Rs stand for:", options: { A:"Reduce, Reuse, Recycle", B:"Remove, Reduce, Replace", C:"Recycle, Remove, Repeat", D:"Reuse, Remove, Reduce" }, answer: "A" },
                            
                            { question: "Composting is:", options: { A:"Burning waste", B:"Decomposition of organic waste", C:"Throwing waste", D:"Chemical reaction" }, answer: "B" },
                            
                            { question: "Landfills are:", options: { A:"Water bodies", B:"Waste dumping sites", C:"Forests", D:"Air spaces" }, answer: "B" },
                            
                            { question: "Ecosystem includes:", options: { A:"Biotic only", B:"Abiotic only", C:"Both", D:"None" }, answer: "C" },
                            
                            { question: "Energy source for ecosystem:", options: { A:"Moon", B:"Sun", C:"Water", D:"Air" }, answer: "B" },
                            
                            { question: "Plants convert energy by:", options: { A:"Respiration", B:"Photosynthesis", C:"Excretion", D:"Digestion" }, answer: "B" },
                            
                            { question: "Herbivores eat:", options: { A:"Animals", B:"Plants", C:"Fungi", D:"Bacteria" }, answer: "B" },
                            
                            { question: "Carnivores eat:", options: { A:"Plants", B:"Animals", C:"Both", D:"None" }, answer: "B" },
                            
                            { question: "Omnivores eat:", options: { A:"Plants only", B:"Animals only", C:"Both", D:"None" }, answer: "C" },
                            
                            { question: "Decomposers help in:", options: { A:"Producing food", B:"Recycling nutrients", C:"Energy loss", D:"Pollution" }, answer: "B" },
                            
                            { question: "Food chain example:", options: { A:"Grass → Deer → Tiger", B:"Tiger → Grass", C:"Water → Plant", D:"Air → Animal" }, answer: "A" },
                            
                            { question: "Longer food chains are:", options: { A:"Stable", B:"Unstable", C:"Balanced", D:"Strong" }, answer: "B" },
                            
                            { question: "Energy pyramid is always:", options: { A:"Inverted", B:"Upright", C:"Flat", D:"Circular" }, answer: "B" },
                            
                            { question: "Trophic level increases:", options: { A:"Energy increases", B:"Energy decreases", C:"Energy same", D:"Energy zero" }, answer: "B" },
                            
                            { question: "Pollution is:", options: { A:"Clean environment", B:"Addition of harmful substances", C:"Removal of waste", D:"Natural process" }, answer: "B" },
                            
                            { question: "Non-biodegradable waste causes:", options: { A:"Fertility", B:"Pollution", C:"Growth", D:"Food" }, answer: "B" },
                            
                            { question: "Recycling means:", options: { A:"Burning", B:"Reusing materials", C:"Throwing", D:"Decomposition" }, answer: "B" },
                            
                            { question: "Reuse means:", options: { A:"Using again", B:"Throwing", C:"Burning", D:"Decomposing" }, answer: "A" },
                            
                            { question: "Reduce means:", options: { A:"Increase waste", B:"Decrease waste", C:"Reuse waste", D:"Recycle waste" }, answer: "B" },
                            
                            { question: "Energy transfer efficiency is:", options: { A:"100%", B:"10%", C:"50%", D:"0%" }, answer: "B" },
                            
                            { question: "Most energy lost as:", options: { A:"Light", B:"Heat", C:"Sound", D:"Water" }, answer: "B" },
                            
                            { question: "Biotic interactions include:", options: { A:"Living interactions", B:"Non-living interactions", C:"Chemical reactions", D:"Physical changes" }, answer: "A" },
                            
                            { question: "Ecosystem balance depends on:", options: { A:"One species", B:"All components", C:"Only plants", D:"Only animals" }, answer: "B" }
                            
                            ];
                            const sociallesson1 = [

                              { question: "Development of a country is mainly based on:", options: { A:"Income", B:"Education", C:"Health", D:"All of these" }, answer: "D" },
                              
                              { question: "Different people have different development goals because:", options: { A:"Same needs", B:"Different situations", C:"Same income", D:"Same job" }, answer: "B" },
                              
                              { question: "An example of conflicting development goal is:", options: { A:"Farmer wants water", B:"Industrialist wants dam", C:"Tribal loses land", D:"All of these" }, answer: "D" },
                              
                              { question: "Average income is calculated by:", options: { A:"Total income × population", B:"Total income ÷ population", C:"Population ÷ income", D:"None" }, answer: "B" },
                              
                              { question: "Per capita income is:", options: { A:"Total income", B:"Average income per person", C:"Government income", D:"Tax income" }, answer: "B" },
                              
                              { question: "World Bank classifies countries based on:", options: { A:"Population", B:"Area", C:"Per capita income", D:"Education" }, answer: "C" },
                              
                              { question: "India falls under:", options: { A:"High income", B:"Middle income", C:"Low income", D:"Very high income" }, answer: "B" },
                              
                              { question: "Limitation of per capita income is:", options: { A:"Ignores inequality", B:"Shows distribution", C:"Shows health", D:"Shows education" }, answer: "A" },
                              
                              { question: "Public facilities include:", options: { A:"Hospitals", B:"Schools", C:"Transport", D:"All of these" }, answer: "D" },
                              
                              { question: "Private facilities are usually:", options: { A:"Cheap", B:"Free", C:"Costly", D:"Government owned" }, answer: "C" },
                              
                              { question: "Infant Mortality Rate means:", options: { A:"Deaths of adults", B:"Deaths of infants per 1000 births", C:"Total deaths", D:"Birth rate" }, answer: "B" },
                              
                              { question: "Literacy rate refers to:", options: { A:"Educated people", B:"People above 7 years who can read/write", C:"School students", D:"Teachers" }, answer: "B" },
                              
                              { question: "Net Attendance Ratio means:", options: { A:"School attendance", B:"Total population", C:"Teachers count", D:"Income ratio" }, answer: "A" },
                              
                              { question: "State with better health and education is:", options: { A:"Less developed", B:"More developed", C:"Same", D:"None" }, answer: "B" },
                              
                              { question: "Kerala is more developed due to:", options: { A:"High income", B:"Better health & education", C:"More industries", D:"Low population" }, answer: "B" },
                              
                              { question: "Human Development Index includes:", options: { A:"Income", B:"Health", C:"Education", D:"All" }, answer: "D" },
                              
                              { question: "HDI was introduced by:", options: { A:"World Bank", B:"UNDP", C:"IMF", D:"WHO" }, answer: "B" },
                              
                              { question: "Better measure of development is:", options: { A:"Income only", B:"HDI", C:"Population", D:"Area" }, answer: "B" },
                              
                              { question: "Sustainable development means:", options: { A:"Use all resources", B:"Meet present needs without harming future", C:"Only present use", D:"No development" }, answer: "B" },
                              
                              { question: "Non-renewable resources example:", options: { A:"Sunlight", B:"Coal", C:"Wind", D:"Water" }, answer: "B" },
                              
                              { question: "Renewable resource example:", options: { A:"Coal", B:"Petrol", C:"Wind", D:"Diesel" }, answer: "C" },
                              
                              { question: "Main cause of resource depletion:", options: { A:"Overuse", B:"Less use", C:"No use", D:"Storage" }, answer: "A" },
                              
                              { question: "Global warming is caused by:", options: { A:"Oxygen", B:"Greenhouse gases", C:"Nitrogen", D:"Water" }, answer: "B" },
                              
                              { question: "Development without harming environment is:", options: { A:"Economic growth", B:"Sustainable development", C:"Industrialization", D:"Urbanization" }, answer: "B" },
                              
                              { question: "Groundwater depletion occurs due to:", options: { A:"Overuse", B:"Rain", C:"Less use", D:"Storage" }, answer: "A" },
                              
                              { question: "Public Distribution System provides:", options: { A:"Luxury goods", B:"Essential goods", C:"Machines", D:"Vehicles" }, answer: "B" },
                              
                              { question: "Quality of life includes:", options: { A:"Income", B:"Health", C:"Education", D:"All" }, answer: "D" },
                              
                              { question: "Standard of living means:", options: { A:"Only income", B:"Level of comfort", C:"Population", D:"Area" }, answer: "B" },
                              
                              { question: "Employment improves:", options: { A:"Poverty", B:"Development", C:"Pollution", D:"Illiteracy" }, answer: "B" },
                              
                              { question: "Disguised unemployment means:", options: { A:"No work", B:"Extra workers not needed", C:"Full employment", D:"High income" }, answer: "B" },
                              
                              { question: "Development goal of landless labourer:", options: { A:"More land", B:"More wages", C:"Education", D:"All" }, answer: "D" },
                              
                              { question: "Development goal of rich farmer:", options: { A:"High price crops", B:"More profit", C:"Irrigation", D:"All" }, answer: "D" },
                              
                              { question: "Development goal of urban girl:", options: { A:"Freedom", B:"Education", C:"Job", D:"All" }, answer: "D" },
                              
                              { question: "Tribal development goal:", options: { A:"Protect land", B:"Forest rights", C:"Livelihood", D:"All" }, answer: "D" },
                              
                              { question: "Inequality means:", options: { A:"Equal income", B:"Unequal distribution", C:"Same wealth", D:"Same job" }, answer: "B" },
                              
                              { question: "Main cause of inequality:", options: { A:"Equal resources", B:"Unequal distribution", C:"Education", D:"Health" }, answer: "B" },
                              
                              { question: "Migration happens due to:", options: { A:"Better jobs", B:"Education", C:"Living conditions", D:"All" }, answer: "D" },
                              
                              { question: "Health facilities include:", options: { A:"Hospitals", B:"Doctors", C:"Medicines", D:"All" }, answer: "D" },
                              
                              { question: "Education improves:", options: { A:"Income", B:"Awareness", C:"Skills", D:"All" }, answer: "D" },
                              
                              { question: "Development is measured by:", options: { A:"Income", B:"HDI", C:"Public facilities", D:"All" }, answer: "D" },
                              
                              { question: "Economic development focuses on:", options: { A:"Only money", B:"Overall well-being", C:"Population", D:"Area" }, answer: "B" },
                              
                              { question: "Better public facilities lead to:", options: { A:"Better life", B:"Poor life", C:"No change", D:"Loss" }, answer: "A" },
                              
                              { question: "Private hospitals are:", options: { A:"Cheap", B:"Expensive", C:"Free", D:"Government" }, answer: "B" },
                              
                              { question: "Government role is to:", options: { A:"Provide services", B:"Maintain equality", C:"Develop economy", D:"All" }, answer: "D" },
                              
                              { question: "Main aim of development:", options: { A:"Profit", B:"Better life", C:"Money", D:"Power" }, answer: "B" },
                              
                              { question: "Which is not a development indicator:", options: { A:"Income", B:"Health", C:"Pollution", D:"Education" }, answer: "C" },
                              
                              { question: "Balanced development includes:", options: { A:"Economy", B:"Environment", C:"Society", D:"All" }, answer: "D" },
                              
                              { question: "Cause of environmental damage:", options: { A:"Overuse resources", B:"Pollution", C:"Industrialization", D:"All" }, answer: "D" }
                              
                              ];
                              const sociallesson2 = [

                                { question: "Economic activities are divided into:", options: { A:"Primary, Secondary, Tertiary", B:"Public, Private", C:"Organized, Unorganized", D:"All" }, answer: "D" },
                                
                                { question: "Primary sector includes:", options: { A:"Manufacturing", B:"Agriculture", C:"Banking", D:"Transport" }, answer: "B" },
                                
                                { question: "Secondary sector includes:", options: { A:"Farming", B:"Fishing", C:"Manufacturing", D:"Teaching" }, answer: "C" },
                                
                                { question: "Tertiary sector includes:", options: { A:"Agriculture", B:"Industry", C:"Services", D:"Mining" }, answer: "C" },
                                
                                { question: "Example of primary sector:", options: { A:"Banking", B:"Farming", C:"Transport", D:"Retail" }, answer: "B" },
                                
                                { question: "Example of secondary sector:", options: { A:"Teacher", B:"Doctor", C:"Factory worker", D:"Farmer" }, answer: "C" },
                                
                                { question: "Example of tertiary sector:", options: { A:"Farmer", B:"Driver", C:"Miner", D:"Labourer" }, answer: "B" },
                                
                                { question: "Primary sector is also called:", options: { A:"Industrial sector", B:"Service sector", C:"Agricultural sector", D:"Public sector" }, answer: "C" },
                                
                                { question: "Secondary sector is also called:", options: { A:"Service sector", B:"Industrial sector", C:"Agricultural sector", D:"Private sector" }, answer: "B" },
                                
                                { question: "Tertiary sector is also called:", options: { A:"Service sector", B:"Industrial sector", C:"Agricultural sector", D:"Public sector" }, answer: "A" },
                                
                                { question: "GDP stands for:", options: { A:"Gross Domestic Product", B:"General Domestic Product", C:"Global Development Plan", D:"Gross Development Plan" }, answer: "A" },
                                
                                { question: "GDP measures:", options: { A:"Total production", B:"Total income", C:"Total value of goods and services", D:"Population" }, answer: "C" },
                                
                                { question: "Final goods are:", options: { A:"Used again", B:"Not used further", C:"Intermediate goods", D:"Raw materials" }, answer: "B" },
                                
                                { question: "GDP includes value of:", options: { A:"Final goods only", B:"Intermediate goods", C:"Raw materials", D:"None" }, answer: "A" },
                                
                                { question: "Value of goods is measured in:", options: { A:"Weight", B:"Numbers", C:"Money", D:"Time" }, answer: "C" },
                                
                                { question: "Tertiary sector growth is due to:", options: { A:"Demand for services", B:"Urbanization", C:"Development", D:"All" }, answer: "D" },
                                
                                { question: "Disguised unemployment is common in:", options: { A:"Primary sector", B:"Secondary sector", C:"Tertiary sector", D:"None" }, answer: "A" },
                                
                                { question: "Disguised unemployment means:", options: { A:"No job", B:"Extra workers", C:"High salary", D:"Permanent job" }, answer: "B" },
                                
                                { question: "Seasonal unemployment occurs in:", options: { A:"Industry", B:"Agriculture", C:"Service", D:"Banking" }, answer: "B" },
                                
                                { question: "Underemployment means:", options: { A:"No work", B:"Less work than capacity", C:"Full work", D:"High work" }, answer: "B" },
                                
                                { question: "Organized sector workers get:", options: { A:"Job security", B:"Fixed salary", C:"Benefits", D:"All" }, answer: "D" },
                                
                                { question: "Unorganized sector workers have:", options: { A:"Security", B:"Regular income", C:"No benefits", D:"Paid leave" }, answer: "C" },
                                
                                { question: "Example of organized sector:", options: { A:"Street vendor", B:"Government employee", C:"Daily labourer", D:"Farmer" }, answer: "B" },
                                
                                { question: "Example of unorganized sector:", options: { A:"Bank employee", B:"Teacher", C:"Daily wage labourer", D:"Doctor" }, answer: "C" },
                                
                                { question: "Public sector is owned by:", options: { A:"Individuals", B:"Government", C:"Private company", D:"NGO" }, answer: "B" },
                                
                                { question: "Private sector is owned by:", options: { A:"Government", B:"Individuals", C:"NGO", D:"Public" }, answer: "B" },
                                
                                { question: "Example of public sector:", options: { A:"Reliance", B:"TCS", C:"Railways", D:"Infosys" }, answer: "C" },
                                
                                { question: "Example of private sector:", options: { A:"Post office", B:"Railways", C:"Tata company", D:"Police" }, answer: "C" },
                                
                                { question: "Government controls public sector for:", options: { A:"Profit only", B:"Public welfare", C:"Private use", D:"Luxury" }, answer: "B" },
                                
                                { question: "Private sector main aim:", options: { A:"Service", B:"Profit", C:"Welfare", D:"Equality" }, answer: "B" },
                                
                                { question: "MGNREGA guarantees:", options: { A:"50 days work", B:"100 days work", C:"200 days work", D:"No work" }, answer: "B" },
                                
                                { question: "MGNREGA was introduced in:", options: { A:"2000", B:"2005", C:"2010", D:"2015" }, answer: "B" },
                                
                                { question: "MGNREGA is related to:", options: { A:"Industry", B:"Employment", C:"Health", D:"Education" }, answer: "B" },
                                
                                { question: "GDP of India is calculated by:", options: { A:"RBI", B:"Central Government", C:"Private sector", D:"NGO" }, answer: "B" },
                                
                                { question: "Sector contributing most to GDP:", options: { A:"Primary", B:"Secondary", C:"Tertiary", D:"None" }, answer: "C" },
                                
                                { question: "Primary sector share in GDP is:", options: { A:"Increasing", B:"Decreasing", C:"Same", D:"None" }, answer: "B" },
                                
                                { question: "Service sector growth shows:", options: { A:"Backward economy", B:"Developing economy", C:"No change", D:"Decline" }, answer: "B" },
                                
                                { question: "Industrial sector depends on:", options: { A:"Primary sector", B:"Service sector", C:"Both", D:"None" }, answer: "A" },
                                
                                { question: "Tertiary sector supports:", options: { A:"Primary", B:"Secondary", C:"Both", D:"None" }, answer: "C" },
                                
                                { question: "Transport is part of:", options: { A:"Primary", B:"Secondary", C:"Tertiary", D:"None" }, answer: "C" },
                                
                                { question: "Banking is part of:", options: { A:"Primary", B:"Secondary", C:"Tertiary", D:"None" }, answer: "C" },
                                
                                { question: "Fishing is part of:", options: { A:"Primary", B:"Secondary", C:"Tertiary", D:"None" }, answer: "A" },
                                
                                { question: "Factory production is part of:", options: { A:"Primary", B:"Secondary", C:"Tertiary", D:"None" }, answer: "B" },
                                
                                { question: "Unemployment leads to:", options: { A:"Growth", B:"Poverty", C:"Profit", D:"Luxury" }, answer: "B" },
                                
                                { question: "Government can reduce unemployment by:", options: { A:"Providing jobs", B:"Schemes", C:"Investment", D:"All" }, answer: "D" },
                                
                                { question: "Job security means:", options: { A:"Temporary job", B:"Permanent job", C:"No job", D:"Seasonal job" }, answer: "B" },
                                
                                { question: "Casual workers are:", options: { A:"Permanent", B:"Temporary", C:"Government", D:"Private" }, answer: "B" },
                                
                                { question: "Formal sector is same as:", options: { A:"Unorganized", B:"Organized", C:"Private", D:"Primary" }, answer: "B" },
                                
                                { question: "Informal sector is same as:", options: { A:"Organized", B:"Unorganized", C:"Public", D:"Secondary" }, answer: "B" }
                                
                                ];
                                const sociallesson3 = [

                                  { question: "Money is used as:", options: { A:"Medium of exchange", B:"Store of value", C:"Unit of account", D:"All" }, answer: "D" },
                                  
                                  { question: "Barter system means:", options: { A:"Using money", B:"Exchange of goods without money", C:"Banking system", D:"Loan system" }, answer: "B" },
                                  
                                  { question: "Main problem of barter system:", options: { A:"Double coincidence of wants", B:"High profit", C:"Easy trade", D:"Storage" }, answer: "A" },
                                  
                                  { question: "Modern form of money is:", options: { A:"Gold", B:"Silver", C:"Currency notes", D:"Barter" }, answer: "C" },
                                  
                                  { question: "Currency is issued by:", options: { A:"Government", B:"Private banks", C:"People", D:"Companies" }, answer: "A" },
                                  
                                  { question: "In India, currency is issued by:", options: { A:"SBI", B:"RBI", C:"World Bank", D:"IMF" }, answer: "B" },
                                  
                                  { question: "Demand deposits are:", options: { A:"Fixed deposits", B:"Money in bank accounts", C:"Loans", D:"Gold" }, answer: "B" },
                                  
                                  { question: "Cheque is used to:", options: { A:"Withdraw money", B:"Transfer money", C:"Save money", D:"Print money" }, answer: "B" },
                                  
                                  { question: "ATM is used for:", options: { A:"Deposit only", B:"Withdraw money", C:"Shopping", D:"Loans" }, answer: "B" },
                                  
                                  { question: "Bank deposits are considered as money because:", options: { A:"They are safe", B:"Can be withdrawn anytime", C:"Used in transactions", D:"Both B and C" }, answer: "D" },
                                  
                                  { question: "Credit means:", options: { A:"Saving money", B:"Borrowing money", C:"Earning money", D:"Spending money" }, answer: "B" },
                                  
                                  { question: "Loan is also called:", options: { A:"Debit", B:"Credit", C:"Income", D:"Saving" }, answer: "B" },
                                  
                                  { question: "Formal sources of credit include:", options: { A:"Banks", B:"Moneylenders", C:"Friends", D:"Relatives" }, answer: "A" },
                                  
                                  { question: "Informal sources of credit include:", options: { A:"Banks", B:"Cooperatives", C:"Moneylenders", D:"RBI" }, answer: "C" },
                                  
                                  { question: "Interest is:", options: { A:"Loan amount", B:"Extra money paid for loan", C:"Saving", D:"Income" }, answer: "B" },
                                  
                                  { question: "Higher interest rate is usually charged by:", options: { A:"Banks", B:"Moneylenders", C:"Government", D:"NGOs" }, answer: "B" },
                                  
                                  { question: "Collateral is:", options: { A:"Loan", B:"Security against loan", C:"Interest", D:"Deposit" }, answer: "B" },
                                  
                                  { question: "Example of collateral:", options: { A:"Land", B:"House", C:"Jewelry", D:"All" }, answer: "D" },
                                  
                                  { question: "Terms of credit include:", options: { A:"Interest rate", B:"Collateral", C:"Time period", D:"All" }, answer: "D" },
                                  
                                  { question: "Formal sector loans are:", options: { A:"Unregulated", B:"Regulated by RBI", C:"Illegal", D:"Private" }, answer: "B" },
                                  
                                  { question: "RBI stands for:", options: { A:"Reserve Bank of India", B:"Rural Bank India", C:"Reserve Board India", D:"Regional Bank India" }, answer: "A" },
                                  
                                  { question: "RBI controls:", options: { A:"Money supply", B:"Banks", C:"Interest rates", D:"All" }, answer: "D" },
                                  
                                  { question: "Cheap and affordable credit is important for:", options: { A:"Development", B:"Luxury", C:"Pollution", D:"Migration" }, answer: "A" },
                                  
                                  { question: "High interest leads to:", options: { A:"Profit", B:"Debt trap", C:"Saving", D:"Growth" }, answer: "B" },
                                  
                                  { question: "Debt trap means:", options: { A:"No loan", B:"Cannot repay loan", C:"Saving money", D:"Earning more" }, answer: "B" },
                                  
                                  { question: "Self Help Groups (SHGs) help in:", options: { A:"Providing loans", B:"Saving money", C:"Empowering women", D:"All" }, answer: "D" },
                                  
                                  { question: "SHGs mainly help:", options: { A:"Rich people", B:"Poor people", C:"Companies", D:"Government" }, answer: "B" },
                                  
                                  { question: "Banks provide loans for:", options: { A:"Agriculture", B:"Business", C:"Education", D:"All" }, answer: "D" },
                                  
                                  { question: "Credit helps in:", options: { A:"Increasing income", B:"Starting business", C:"Production", D:"All" }, answer: "D" },
                                  
                                  { question: "Example of positive credit situation:", options: { A:"Farmer earns profit", B:"Farmer fails crop", C:"Debt trap", D:"Loss" }, answer: "A" },
                                  
                                  { question: "Example of negative credit situation:", options: { A:"Profit", B:"Debt trap", C:"Savings", D:"Growth" }, answer: "B" },
                                  
                                  { question: "Moneylenders charge:", options: { A:"Low interest", B:"High interest", C:"No interest", D:"Fixed salary" }, answer: "B" },
                                  
                                  { question: "Banks charge:", options: { A:"High interest", B:"Moderate interest", C:"No interest", D:"Illegal interest" }, answer: "B" },
                                  
                                  { question: "Formal credit is preferred because:", options: { A:"Cheap", B:"Safe", C:"Regulated", D:"All" }, answer: "D" },
                                  
                                  { question: "Informal credit is risky because:", options: { A:"High interest", B:"No rules", C:"Exploitation", D:"All" }, answer: "D" },
                                  
                                  { question: "Cheque payment is:", options: { A:"Cash", B:"Digital", C:"Paper instruction", D:"Loan" }, answer: "C" },
                                  
                                  { question: "Demand deposits can be withdrawn by:", options: { A:"Cheque", B:"ATM", C:"Both", D:"None" }, answer: "C" },
                                  
                                  { question: "Bank interest on deposits is:", options: { A:"Given to bank", B:"Given to depositor", C:"No interest", D:"Illegal" }, answer: "B" },
                                  
                                  { question: "Loan interest is paid by:", options: { A:"Bank", B:"Borrower", C:"Government", D:"NGO" }, answer: "B" },
                                  
                                  { question: "Main aim of banks:", options: { A:"Profit", B:"Service", C:"Both", D:"None" }, answer: "C" },
                                  
                                  { question: "Formal credit sector is:", options: { A:"Organized", B:"Unorganized", C:"Private", D:"Public" }, answer: "A" },
                                  
                                  { question: "Informal credit sector is:", options: { A:"Organized", B:"Unorganized", C:"Public", D:"Government" }, answer: "B" },
                                  
                                  { question: "Credit availability increases:", options: { A:"Production", B:"Income", C:"Employment", D:"All" }, answer: "D" },
                                  
                                  { question: "Loan repayment failure leads to:", options: { A:"Profit", B:"Debt trap", C:"Savings", D:"Growth" }, answer: "B" },
                                  
                                  { question: "Banking system promotes:", options: { A:"Savings", B:"Investment", C:"Growth", D:"All" }, answer: "D" },
                                  
                                  { question: "Cheap credit reduces:", options: { A:"Income", B:"Poverty", C:"Growth", D:"Employment" }, answer: "B" },
                                  
                                  { question: "Collateral is not required in:", options: { A:"Large loans", B:"Small loans (SHGs)", C:"Business loans", D:"Home loans" }, answer: "B" },
                                  
                                  { question: "SHGs are linked with:", options: { A:"Banks", B:"Moneylenders", C:"Companies", D:"NGOs" }, answer: "A" },
                                  
                                  { question: "Main problem of informal sector:", options: { A:"Low interest", B:"High regulation", C:"Exploitation", D:"Safety" }, answer: "C" },
                                  
                                  { question: "Development depends on:", options: { A:"Money only", B:"Credit availability", C:"Population", D:"Area" }, answer: "B" }
                                  
                                  ];
                                  const sociallesson4 = [

                                    { question: "Globalisation means:", options: { A:"Local trade", B:"Integration of economies", C:"State trade", D:"Village trade" }, answer: "B" },
                                    
                                    { question: "Globalisation connects:", options: { A:"Countries", B:"Markets", C:"People", D:"All" }, answer: "D" },
                                    
                                    { question: "Main driving force of globalisation:", options: { A:"Transport", B:"Technology", C:"MNCs", D:"All" }, answer: "D" },
                                    
                                    { question: "MNC stands for:", options: { A:"Multi National Company", B:"Modern National Company", C:"Multiple Network Company", D:"Market Network Company" }, answer: "A" },
                                    
                                    { question: "MNCs operate in:", options: { A:"One country", B:"Two countries", C:"Many countries", D:"Villages" }, answer: "C" },
                                    
                                    { question: "Example of MNC:", options: { A:"Local shop", B:"Tata", C:"Google", D:"Farmer" }, answer: "C" },
                                    
                                    { question: "MNCs invest in:", options: { A:"Own country only", B:"Foreign countries", C:"Villages", D:"No investment" }, answer: "B" },
                                    
                                    { question: "Foreign investment means:", options: { A:"Local investment", B:"Investment in another country", C:"Saving money", D:"Loan" }, answer: "B" },
                                    
                                    { question: "MNCs set up:", options: { A:"Offices only", B:"Factories only", C:"Production units", D:"Schools" }, answer: "C" },
                                    
                                    { question: "Benefit of MNCs:", options: { A:"Jobs", B:"Technology", C:"Investment", D:"All" }, answer: "D" },
                                    
                                    { question: "MNCs choose location based on:", options: { A:"Cheap labour", B:"Infrastructure", C:"Market access", D:"All" }, answer: "D" },
                                    
                                    { question: "Globalisation increases:", options: { A:"Isolation", B:"Competition", C:"Local trade only", D:"Barter" }, answer: "B" },
                                    
                                    { question: "Competition leads to:", options: { A:"Better quality", B:"Lower prices", C:"Innovation", D:"All" }, answer: "D" },
                                    
                                    { question: "Indian companies facing MNCs:", options: { A:"No effect", B:"Competition", C:"Closure", D:"Loss only" }, answer: "B" },
                                    
                                    { question: "Some small industries suffer due to:", options: { A:"Globalisation", B:"No competition", C:"Less demand", D:"No workers" }, answer: "A" },
                                    
                                    { question: "Globalisation benefits:", options: { A:"Big companies", B:"Small producers", C:"Farmers", D:"All equally" }, answer: "A" },
                                    
                                    { question: "WTO stands for:", options: { A:"World Trade Organization", B:"World Transport Org", C:"World Tax Org", D:"World Trade Office" }, answer: "A" },
                                    
                                    { question: "WTO was established in:", options: { A:"1995", B:"2000", C:"1990", D:"1985" }, answer: "A" },
                                    
                                    { question: "WTO aims to:", options: { A:"Restrict trade", B:"Promote trade", C:"Stop imports", D:"Ban exports" }, answer: "B" },
                                    
                                    { question: "Trade barrier means:", options: { A:"Free trade", B:"Restriction on imports", C:"Export increase", D:"Investment" }, answer: "B" },
                                    
                                    { question: "Example of trade barrier:", options: { A:"Tax on imports", B:"Free trade", C:"Exports", D:"Loans" }, answer: "A" },
                                    
                                    { question: "Liberalisation means:", options: { A:"More restrictions", B:"Removal of trade barriers", C:"Stopping trade", D:"Local trade" }, answer: "B" },
                                    
                                    { question: "India adopted liberalisation in:", options: { A:"1991", B:"2000", C:"1985", D:"2010" }, answer: "A" },
                                    
                                    { question: "After liberalisation:", options: { A:"Less trade", B:"More foreign investment", C:"Closed economy", D:"No imports" }, answer: "B" },
                                    
                                    { question: "Globalisation increased due to:", options: { A:"Internet", B:"Transport", C:"Communication", D:"All" }, answer: "D" },
                                    
                                    { question: "Outsourcing means:", options: { A:"Hiring workers locally", B:"Hiring from other countries", C:"Closing business", D:"Importing goods" }, answer: "B" },
                                    
                                    { question: "India is a hub for outsourcing because:", options: { A:"Cheap labour", B:"Skilled workers", C:"English knowledge", D:"All" }, answer: "D" },
                                    
                                    { question: "Impact of globalisation on consumers:", options: { A:"More choices", B:"Better quality", C:"Lower prices", D:"All" }, answer: "D" },
                                    
                                    { question: "Negative impact on workers:", options: { A:"Job insecurity", B:"Low wages", C:"Exploitation", D:"All" }, answer: "D" },
                                    
                                    { question: "Globalisation affects farmers by:", options: { A:"Market access", B:"Price fluctuation", C:"Competition", D:"All" }, answer: "D" },
                                    
                                    { question: "SEZ stands for:", options: { A:"Special Economic Zone", B:"Social Economic Zone", C:"Special Export Zone", D:"Service Economic Zone" }, answer: "A" },
                                    
                                    { question: "SEZs provide:", options: { A:"Tax benefits", B:"Infrastructure", C:"Investment", D:"All" }, answer: "D" },
                                    
                                    { question: "Globalisation increases:", options: { A:"Trade", B:"Investment", C:"Employment", D:"All" }, answer: "D" },
                                    
                                    { question: "Fair globalisation means:", options: { A:"Benefit only rich", B:"Benefit all", C:"No trade", D:"Local trade" }, answer: "B" },
                                    
                                    { question: "Government role in globalisation:", options: { A:"Regulation", B:"Policy making", C:"Protection", D:"All" }, answer: "D" },
                                    
                                    { question: "Small producers need:", options: { A:"Support", B:"Subsidies", C:"Protection", D:"All" }, answer: "D" },
                                    
                                    { question: "Globalisation reduces:", options: { A:"Competition", B:"Isolation", C:"Trade", D:"Investment" }, answer: "B" },
                                    
                                    { question: "MNCs increase:", options: { A:"Local trade", B:"Global trade", C:"Barter", D:"Isolation" }, answer: "B" },
                                    
                                    { question: "Foreign companies in India bring:", options: { A:"Technology", B:"Capital", C:"Jobs", D:"All" }, answer: "D" },
                                    
                                    { question: "Local companies may:", options: { A:"Grow", B:"Compete", C:"Close", D:"All" }, answer: "D" },
                                    
                                    { question: "Trade liberalisation leads to:", options: { A:"More imports", B:"More exports", C:"Global trade", D:"All" }, answer: "D" },
                                    
                                    { question: "Cheap imports affect:", options: { A:"Consumers", B:"Producers", C:"Government", D:"All" }, answer: "B" },
                                    
                                    { question: "Globalisation started rapidly after:", options: { A:"1991 reforms", B:"2000", C:"1980", D:"2010" }, answer: "A" },
                                    
                                    { question: "Communication helps globalisation by:", options: { A:"Connecting markets", B:"Reducing cost", C:"Speed", D:"All" }, answer: "D" },
                                    
                                    { question: "Transport helps by:", options: { A:"Fast movement", B:"Cheap cost", C:"Global trade", D:"All" }, answer: "D" },
                                    
                                    { question: "Globalisation may increase:", options: { A:"Inequality", B:"Employment", C:"Growth", D:"All" }, answer: "D" },
                                    
                                    { question: "Fair trade ensures:", options: { A:"Justice", B:"Equality", C:"Better wages", D:"All" }, answer: "D" },
                                    
                                    { question: "Government should:", options: { A:"Regulate MNCs", B:"Support locals", C:"Ensure fairness", D:"All" }, answer: "D" },
                                    
                                    { question: "Globalisation benefits depend on:", options: { A:"Policy", B:"Sector", C:"People", D:"All" }, answer: "D" }
                                    
                                    ];
                                    const sociallesson5 = [

                                      { question: "Consumer is a person who:", options: { A:"Produces goods", B:"Consumes goods/services", C:"Sells goods", D:"Manufactures goods" }, answer: "B" },
                                      
                                      { question: "Consumer exploitation means:", options: { A:"Fair trade", B:"Cheating consumers", C:"Helping consumers", D:"Selling cheap goods" }, answer: "B" },
                                      
                                      { question: "Example of consumer exploitation:", options: { A:"Adulteration", B:"Overpricing", C:"Underweight goods", D:"All" }, answer: "D" },
                                      
                                      { question: "Right to safety means:", options: { A:"Right to buy anything", B:"Protection from hazardous goods", C:"Right to sell", D:"Right to profit" }, answer: "B" },
                                      
                                      { question: "Right to be informed includes:", options: { A:"Price", B:"Quality", C:"Expiry date", D:"All" }, answer: "D" },
                                      
                                      { question: "Right to choose means:", options: { A:"Force to buy", B:"Freedom to choose goods", C:"No choice", D:"Only one option" }, answer: "B" },
                                      
                                      { question: "Right to be heard means:", options: { A:"No complaint", B:"Voice grievances", C:"Silent", D:"Ignore problems" }, answer: "B" },
                                      
                                      { question: "Right to seek redressal means:", options: { A:"Ignore loss", B:"Get compensation", C:"Buy again", D:"Sell goods" }, answer: "B" },
                                      
                                      { question: "Right to consumer education means:", options: { A:"Knowledge about rights", B:"Selling goods", C:"Buying goods", D:"Manufacturing" }, answer: "A" },
                                      
                                      { question: "ISI mark indicates:", options: { A:"Quality certification", B:"Price", C:"Weight", D:"Quantity" }, answer: "A" },
                                      
                                      { question: "AGMARK is for:", options: { A:"Electronics", B:"Agricultural products", C:"Clothes", D:"Vehicles" }, answer: "B" },
                                      
                                      { question: "Hallmark is for:", options: { A:"Gold jewelry", B:"Food", C:"Clothes", D:"Machines" }, answer: "A" },
                                      
                                      { question: "MRP stands for:", options: { A:"Maximum Retail Price", B:"Minimum Retail Price", C:"Market Rate Price", D:"Main Retail Price" }, answer: "A" },
                                      
                                      { question: "Selling above MRP is:", options: { A:"Legal", B:"Illegal", C:"Optional", D:"Allowed" }, answer: "B" },
                                      
                                      { question: "Adulteration means:", options: { A:"Pure goods", B:"Mixing harmful substances", C:"Good quality", D:"Low price" }, answer: "B" },
                                      
                                      { question: "COPRA stands for:", options: { A:"Consumer Protection Act", B:"Consumer Product Act", C:"Company Protection Act", D:"Consumer Price Act" }, answer: "A" },
                                      
                                      { question: "COPRA was enacted in:", options: { A:"1986", B:"1991", C:"2000", D:"2010" }, answer: "A" },
                                      
                                      { question: "Consumer courts are set up to:", options: { A:"Sell goods", B:"Solve disputes", C:"Buy goods", D:"Produce goods" }, answer: "B" },
                                      
                                      { question: "District Forum deals with:", options: { A:"Small cases", B:"Large cases", C:"International cases", D:"Government cases" }, answer: "A" },
                                      
                                      { question: "State Commission deals with:", options: { A:"District appeals", B:"Village cases", C:"International trade", D:"Private trade" }, answer: "A" },
                                      
                                      { question: "National Commission deals with:", options: { A:"Highest level cases", B:"Local cases", C:"Village issues", D:"Small disputes" }, answer: "A" },
                                      
                                      { question: "Consumer must keep:", options: { A:"Receipt", B:"Proof of purchase", C:"Bill", D:"All" }, answer: "D" },
                                      
                                      { question: "Without bill, consumer cannot:", options: { A:"Buy goods", B:"File complaint", C:"Sell goods", D:"Use goods" }, answer: "B" },
                                      
                                      { question: "Misleading advertisement is:", options: { A:"True info", B:"False claims", C:"Correct info", D:"Price info" }, answer: "B" },
                                      
                                      { question: "Right to safety protects from:", options: { A:"Cheap goods", B:"Dangerous goods", C:"Expensive goods", D:"Luxury goods" }, answer: "B" },
                                      
                                      { question: "Standardization mark ensures:", options: { A:"Quality", B:"Quantity", C:"Price", D:"Weight" }, answer: "A" },
                                      
                                      { question: "Example of unfair trade practice:", options: { A:"Adulteration", B:"False weights", C:"Overpricing", D:"All" }, answer: "D" },
                                      
                                      { question: "Consumer awareness means:", options: { A:"Ignorance", B:"Knowledge of rights", C:"Buying goods", D:"Selling goods" }, answer: "B" },
                                      
                                      { question: "Consumer movement started in India due to:", options: { A:"Exploitation", B:"Awareness", C:"Law", D:"Trade" }, answer: "A" },
                                      
                                      { question: "Role of government:", options: { A:"Make laws", B:"Protect consumers", C:"Ensure fairness", D:"All" }, answer: "D" },
                                      
                                      { question: "Right to information includes:", options: { A:"Ingredients", B:"Manufacture date", C:"Expiry date", D:"All" }, answer: "D" },
                                      
                                      { question: "Complaint can be filed by:", options: { A:"Consumer", B:"Group", C:"NGO", D:"All" }, answer: "D" },
                                      
                                      { question: "Consumer courts provide:", options: { A:"Justice", B:"Compensation", C:"Relief", D:"All" }, answer: "D" },
                                      
                                      { question: "Legal right of consumer is:", options: { A:"Optional", B:"Protected by law", C:"Temporary", D:"Private" }, answer: "B" },
                                      
                                      { question: "Consumer exploitation occurs due to:", options: { A:"Ignorance", B:"Lack of laws", C:"Greed", D:"All" }, answer: "D" },
                                      
                                      { question: "Right to choose prevents:", options: { A:"Monopoly", B:"Competition", C:"Freedom", D:"Trade" }, answer: "A" },
                                      
                                      { question: "Consumer responsibility includes:", options: { A:"Check labels", B:"Keep bill", C:"Be aware", D:"All" }, answer: "D" },
                                      
                                      { question: "ISI mark is for:", options: { A:"Industrial products", B:"Agriculture", C:"Gold", D:"Food" }, answer: "A" },
                                      
                                      { question: "Overcharging is:", options: { A:"Legal", B:"Illegal", C:"Optional", D:"Allowed" }, answer: "B" },
                                      
                                      { question: "Consumer rights protect:", options: { A:"Buyers", B:"Sellers", C:"Producers", D:"Government" }, answer: "A" },
                                      
                                      { question: "Example of right to be heard:", options: { A:"Complaint", B:"Buying", C:"Selling", D:"Advertising" }, answer: "A" },
                                      
                                      { question: "Right to redressal ensures:", options: { A:"Compensation", B:"Loss", C:"Profit", D:"Trade" }, answer: "A" },
                                      
                                      { question: "Adulterated food is:", options: { A:"Safe", B:"Unsafe", C:"Healthy", D:"Pure" }, answer: "B" },
                                      
                                      { question: "Consumer court levels are:", options: { A:"District", B:"State", C:"National", D:"All" }, answer: "D" },
                                      
                                      { question: "Main aim of COPRA:", options: { A:"Profit", B:"Consumer protection", C:"Trade", D:"Production" }, answer: "B" },
                                      
                                      { question: "Consumer should verify:", options: { A:"Quality", B:"Price", C:"Expiry", D:"All" }, answer: "D" },
                                      
                                      { question: "Right to safety is related to:", options: { A:"Life protection", B:"Profit", C:"Trade", D:"Price" }, answer: "A" },
                                      
                                      { question: "Consumer education helps:", options: { A:"Awareness", B:"Protection", C:"Decision making", D:"All" }, answer: "D" },
                                      
                                      { question: "Unfair trade practice harms:", options: { A:"Consumers", B:"Sellers", C:"Government", D:"All" }, answer: "A" }
                                      
                                      ];
                                      const sociallesson6  = [

                                        { question: "Power sharing means:", options: { A:"Concentration of power", B:"Distribution of power", C:"Military rule", D:"Dictatorship" }, answer: "B" },
                                        
                                        { question: "Power sharing is important for:", options: { A:"Stability", B:"Unity", C:"Peace", D:"All" }, answer: "D" },
                                        
                                        { question: "Belgium is located in:", options: { A:"Asia", B:"Europe", C:"Africa", D:"America" }, answer: "B" },
                                        
                                        { question: "Belgium population composition:", options: { A:"One group", B:"Two groups", C:"Three groups", D:"Four groups" }, answer: "C" },
                                        
                                        { question: "Major community in Belgium:", options: { A:"French", B:"Dutch", C:"German", D:"Tamil" }, answer: "B" },
                                        
                                        { question: "French-speaking minority in Belgium:", options: { A:"10%", B:"20%", C:"30%", D:"40%" }, answer: "D" },
                                        
                                        { question: "Brussels has:", options: { A:"Only Dutch", B:"Only French", C:"Mixed population", D:"No population" }, answer: "C" },
                                        
                                        { question: "Belgium adopted power sharing to:", options: { A:"Increase conflict", B:"Avoid conflict", C:"Promote war", D:"Divide country" }, answer: "B" },
                                        
                                        { question: "Belgium model includes:", options: { A:"Equal representation", B:"Separate government", C:"Community government", D:"All" }, answer: "D" },
                                        
                                        { question: "Community government deals with:", options: { A:"Economic issues", B:"Cultural issues", C:"Military issues", D:"Trade" }, answer: "B" },
                                        
                                        { question: "Sri Lanka is located in:", options: { A:"Asia", B:"Europe", C:"Africa", D:"America" }, answer: "A" },
                                        
                                        { question: "Major community in Sri Lanka:", options: { A:"Tamils", B:"Sinhalese", C:"Dutch", D:"French" }, answer: "B" },
                                        
                                        { question: "Tamils are:", options: { A:"Majority", B:"Minority", C:"Rulers", D:"Foreigners" }, answer: "B" },
                                        
                                        { question: "Sinhala Only Act was passed in:", options: { A:"1948", B:"1956", C:"1960", D:"1970" }, answer: "B" },
                                        
                                        { question: "Leader of Sri Lanka during Sinhala Act:", options: { A:"Rajapaksa", B:"Bandaranaike", C:"Jayalalitha", D:"Nehru" }, answer: "B" },
                                        
                                        { question: "Sri Lanka independence year:", options: { A:"1947", B:"1948", C:"1950", D:"1960" }, answer: "B" },
                                        
                                        { question: "Sri Lanka conflict started due to:", options: { A:"Power sharing", B:"Majoritarianism", C:"Equality", D:"Peace" }, answer: "B" },
                                        
                                        { question: "Majoritarianism means:", options: { A:"Minority rule", B:"Majority rule ignoring minorities", C:"Equal rule", D:"No rule" }, answer: "B" },
                                        
                                        { question: "Sri Lanka issue led to:", options: { A:"Peace", B:"Civil war", C:"Unity", D:"Growth" }, answer: "B" },
                                        
                                        { question: "Belgium avoided conflict by:", options: { A:"Ignoring minorities", B:"Power sharing", C:"War", D:"Division" }, answer: "B" },
                                        
                                        { question: "Sri Lanka failed because:", options: { A:"Power sharing", B:"Majoritarianism", C:"Equality", D:"Unity" }, answer: "B" },
                                        
                                        { question: "Forms of power sharing include:", options: { A:"Horizontal", B:"Vertical", C:"Social groups", D:"All" }, answer: "D" },
                                        
                                        { question: "Horizontal power sharing is between:", options: { A:"Levels", B:"Organs of government", C:"Countries", D:"States" }, answer: "B" },
                                        
                                        { question: "Organs of government:", options: { A:"Legislature", B:"Executive", C:"Judiciary", D:"All" }, answer: "D" },
                                        
                                        { question: "Vertical power sharing is between:", options: { A:"Organs", B:"Levels of government", C:"Countries", D:"Courts" }, answer: "B" },
                                        
                                        { question: "Example of vertical power sharing:", options: { A:"Centre-State", B:"Courts", C:"Parliament", D:"Police" }, answer: "A" },
                                        
                                        { question: "Power sharing among social groups:", options: { A:"Gender", B:"Religion", C:"Language", D:"All" }, answer: "D" },
                                        
                                        { question: "Power sharing among political parties means:", options: { A:"One party rule", B:"Coalition government", C:"Dictatorship", D:"Military rule" }, answer: "B" },
                                        
                                        { question: "Coalition government is:", options: { A:"Single party", B:"Multiple parties", C:"No party", D:"Military" }, answer: "B" },
                                        
                                        { question: "Power sharing reduces:", options: { A:"Conflict", B:"Peace", C:"Unity", D:"Stability" }, answer: "A" },
                                        
                                        { question: "Power sharing increases:", options: { A:"Conflict", B:"Unity", C:"War", D:"Division" }, answer: "B" },
                                        
                                        { question: "Good democracy ensures:", options: { A:"Power concentration", B:"Power sharing", C:"Dictatorship", D:"War" }, answer: "B" },
                                        
                                        { question: "Prudential reason means:", options: { A:"Moral reason", B:"Practical benefit", C:"Emotional reason", D:"Religious reason" }, answer: "B" },
                                        
                                        { question: "Moral reason means:", options: { A:"Ethical value", B:"Practical gain", C:"Profit", D:"Power" }, answer: "A" },
                                        
                                        { question: "Example of prudential reason:", options: { A:"Avoid conflict", B:"Justice", C:"Equality", D:"Rights" }, answer: "A" },
                                        
                                        { question: "Example of moral reason:", options: { A:"Peace", B:"Democracy", C:"Right to participate", D:"Stability" }, answer: "C" },
                                        
                                        { question: "Belgium capital:", options: { A:"Paris", B:"Brussels", C:"Berlin", D:"Rome" }, answer: "B" },
                                        
                                        { question: "Dutch-speaking people live in:", options: { A:"North Belgium", B:"South Belgium", C:"East", D:"West" }, answer: "A" },
                                        
                                        { question: "French-speaking people live in:", options: { A:"North", B:"South", C:"East", D:"West" }, answer: "B" },
                                        
                                        { question: "Power sharing is desirable because:", options: { A:"Reduces conflict", B:"Ensures stability", C:"Promotes unity", D:"All" }, answer: "D" },
                                        
                                        { question: "Sri Lanka Tamil demand:", options: { A:"Separate state", B:"Equal rights", C:"Recognition", D:"All" }, answer: "D" },
                                        
                                        { question: "Discrimination in Sri Lanka included:", options: { A:"Language", B:"Education", C:"Jobs", D:"All" }, answer: "D" },
                                        
                                        { question: "Belgium success shows:", options: { A:"Conflict", B:"Peace through sharing", C:"War", D:"Failure" }, answer: "B" },
                                        
                                        { question: "Sri Lanka failure shows:", options: { A:"Unity", B:"Conflict due to majority rule", C:"Peace", D:"Growth" }, answer: "B" },
                                        
                                        { question: "Judiciary role:", options: { A:"Make laws", B:"Implement laws", C:"Interpret laws", D:"None" }, answer: "C" },
                                        
                                        { question: "Executive role:", options: { A:"Make laws", B:"Implement laws", C:"Judge laws", D:"None" }, answer: "B" },
                                        
                                        { question: "Legislature role:", options: { A:"Make laws", B:"Implement", C:"Judge", D:"None" }, answer: "A" },
                                        
                                        { question: "Power sharing ensures:", options: { A:"Dictatorship", B:"Democracy", C:"War", D:"Division" }, answer: "B" }
                                        
                                        ];
                                        const sociallesson7  = [

                                          { question: "Federalism means:", options: { A:"Single government", B:"Two or more levels of government", C:"No government", D:"Military rule" }, answer: "B" },
                                          
                                          { question: "India is a:", options: { A:"Unitary state", B:"Federal state", C:"Dictatorship", D:"Monarchy" }, answer: "B" },
                                          
                                          { question: "Indian Constitution came into effect on:", options: { A:"1947", B:"1950", C:"1948", D:"1952" }, answer: "B" },
                                          
                                          { question: "India became independent in:", options: { A:"1945", B:"1946", C:"1947", D:"1950" }, answer: "C" },
                                          
                                          { question: "Federalism has how many levels in India:", options: { A:"One", B:"Two", C:"Three", D:"Four" }, answer: "C" },
                                          
                                          { question: "Levels of government:", options: { A:"Central", B:"State", C:"Local", D:"All" }, answer: "D" },
                                          
                                          { question: "Local government includes:", options: { A:"Panchayat", B:"Municipality", C:"Corporation", D:"All" }, answer: "D" },
                                          
                                          { question: "Division of powers is done by:", options: { A:"Parliament", B:"Constitution", C:"President", D:"Courts" }, answer: "B" },
                                          
                                          { question: "Union List contains:", options: { A:"State subjects", B:"Central subjects", C:"Local subjects", D:"None" }, answer: "B" },
                                          
                                          { question: "Example of Union List subject:", options: { A:"Police", B:"Education", C:"Defense", D:"Agriculture" }, answer: "C" },
                                          
                                          { question: "State List contains:", options: { A:"Central subjects", B:"State subjects", C:"Local subjects", D:"None" }, answer: "B" },
                                          
                                          { question: "Example of State List:", options: { A:"Defense", B:"Police", C:"Banking", D:"Foreign affairs" }, answer: "B" },
                                          
                                          { question: "Concurrent List means:", options: { A:"Only state", B:"Only centre", C:"Both can make laws", D:"None" }, answer: "C" },
                                          
                                          { question: "Example of Concurrent List:", options: { A:"Defense", B:"Police", C:"Education", D:"Currency" }, answer: "C" },
                                          
                                          { question: "Residuary powers belong to:", options: { A:"State", B:"Centre", C:"Local", D:"Courts" }, answer: "B" },
                                          
                                          { question: "India is called a union because:", options: { A:"States are independent", B:"States cannot separate", C:"No constitution", D:"Military rule" }, answer: "B" },
                                          
                                          { question: "Coming together federation example:", options: { A:"India", B:"USA", C:"Belgium", D:"All" }, answer: "D" },
                                          
                                          { question: "Holding together federation example:", options: { A:"USA", B:"India", C:"Switzerland", D:"Australia" }, answer: "B" },
                                          
                                          { question: "USA is an example of:", options: { A:"Holding together", B:"Coming together", C:"Unitary", D:"Dictatorship" }, answer: "B" },
                                          
                                          { question: "Belgium is example of:", options: { A:"Holding together", B:"Coming together", C:"Unitary", D:"Military" }, answer: "B" },
                                          
                                          { question: "Language policy in India:", options: { A:"One language", B:"Two languages", C:"No language", D:"Multiple languages" }, answer: "D" },
                                          
                                          { question: "Number of official languages in India:", options: { A:"15", B:"18", C:"22", D:"25" }, answer: "C" },
                                          
                                          { question: "Hindi is:", options: { A:"National language", B:"Official language", C:"Regional language", D:"Foreign language" }, answer: "B" },
                                          
                                          { question: "English is used as:", options: { A:"Official language", B:"Foreign language", C:"State language", D:"None" }, answer: "A" },
                                          
                                          { question: "States reorganization happened in:", options: { A:"1947", B:"1950", C:"1956", D:"1965" }, answer: "C" },
                                          
                                          { question: "States were reorganized on basis of:", options: { A:"Religion", B:"Language", C:"Economy", D:"Politics" }, answer: "B" },
                                          
                                          { question: "Decentralization means:", options: { A:"Power to centre", B:"Power to states", C:"Power to local level", D:"No power" }, answer: "C" },
                                          
                                          { question: "Decentralization increased in:", options: { A:"1990s", B:"1980s", C:"1970s", D:"1960s" }, answer: "A" },
                                          
                                          { question: "73rd Amendment is related to:", options: { A:"Urban bodies", B:"Panchayats", C:"Courts", D:"States" }, answer: "B" },
                                          
                                          { question: "74th Amendment is related to:", options: { A:"Panchayats", B:"Urban local bodies", C:"Courts", D:"Centre" }, answer: "B" },
                                          
                                          { question: "Year of 73rd & 74th amendments:", options: { A:"1990", B:"1991", C:"1992", D:"1995" }, answer: "C" },
                                          
                                          { question: "Gram Sabha consists of:", options: { A:"Officials", B:"All voters", C:"Ministers", D:"Judges" }, answer: "B" },
                                          
                                          { question: "Local government improves:", options: { A:"Efficiency", B:"Participation", C:"Democracy", D:"All" }, answer: "D" },
                                          
                                          { question: "Federalism promotes:", options: { A:"Centralization", B:"Unity in diversity", C:"Dictatorship", D:"War" }, answer: "B" },
                                          
                                          { question: "India follows:", options: { A:"Strict federalism", B:"Quasi-federalism", C:"Unitary", D:"None" }, answer: "B" },
                                          
                                          { question: "Centre has more power in:", options: { A:"Normal times", B:"Emergency", C:"States rule", D:"Local bodies" }, answer: "B" },
                                          
                                          { question: "Judiciary settles disputes between:", options: { A:"States", B:"Centre & states", C:"Both", D:"None" }, answer: "C" },
                                          
                                          { question: "Coalition government means:", options: { A:"One party", B:"Many parties", C:"No party", D:"Military" }, answer: "B" },
                                          
                                          { question: "Coalition politics helped:", options: { A:"Centralization", B:"State power", C:"Dictatorship", D:"War" }, answer: "B" },
                                          
                                          { question: "Linguistic diversity:", options: { A:"Weakens country", B:"Strengthens unity", C:"Causes war", D:"None" }, answer: "B" },
                                          
                                          { question: "Basic idea of federalism:", options: { A:"Divide power", B:"Concentrate power", C:"Destroy power", D:"Ignore power" }, answer: "A" },
                                          
                                          { question: "Independent judiciary ensures:", options: { A:"Bias", B:"Fairness", C:"War", D:"Politics" }, answer: "B" },
                                          
                                          { question: "Uniform policies are made by:", options: { A:"States", B:"Centre", C:"Local bodies", D:"Courts" }, answer: "B" },
                                          
                                          { question: "Local problems solved by:", options: { A:"Centre", B:"State", C:"Local government", D:"Courts" }, answer: "C" },
                                          
                                          { question: "Federalism success depends on:", options: { A:"Cooperation", B:"Conflict", C:"War", D:"Power struggle" }, answer: "A" },
                                          
                                          { question: "Example of decentralization:", options: { A:"PM decision", B:"Village Panchayat decision", C:"Court ruling", D:"Parliament law" }, answer: "B" },
                                          
                                          { question: "India’s diversity managed by:", options: { A:"Unitary system", B:"Federalism", C:"Dictatorship", D:"War" }, answer: "B" },
                                          
                                          { question: "Key feature of federalism:", options: { A:"Single government", B:"Division of power", C:"No constitution", D:"Military rule" }, answer: "B" },
                                          
                                          { question: "State governments have power over:", options: { A:"Defense", B:"Police", C:"Foreign affairs", D:"Currency" }, answer: "B" },
                                          
                                          { question: "Central government controls:", options: { A:"Agriculture", B:"Police", C:"Defense", D:"Water supply" }, answer: "C" }
                                          
                                          ];
                                          const sociallesson8 = [

                                            { question: "Gender division refers to:", options: { A:"Biological difference", B:"Social difference between men and women", C:"Economic system", D:"Political system" }, answer: "B" },
                                            
                                            { question: "Gender division is mainly seen in:", options: { A:"Work", B:"Education", C:"Politics", D:"All" }, answer: "D" },
                                            
                                            { question: "Patriarchal society means:", options: { A:"Women dominate", B:"Men dominate", C:"Equal power", D:"No power" }, answer: "B" },
                                            
                                            { question: "Feminist movement aims at:", options: { A:"Male dominance", B:"Gender equality", C:"Religious equality", D:"Economic growth" }, answer: "B" },
                                            
                                            { question: "Example of gender inequality:", options: { A:"Women doing household work only", B:"Men working outside", C:"Equal pay", D:"Education for all" }, answer: "A" },
                                            
                                            { question: "Women get less wages than men due to:", options: { A:"Skill", B:"Gender bias", C:"Education", D:"Experience" }, answer: "B" },
                                            
                                            { question: "Political representation of women in India is:", options: { A:"High", B:"Moderate", C:"Low", D:"Equal" }, answer: "C" },
                                            
                                            { question: "Reservation for women in local bodies is:", options: { A:"10%", B:"20%", C:"33%", D:"50%" }, answer: "C" },
                                            
                                            { question: "Women reservation introduced by:", options: { A:"73rd Amendment", B:"42nd Amendment", C:"44th Amendment", D:"86th Amendment" }, answer: "A" },
                                            
                                            { question: "Religion-based social division means:", options: { A:"Unity", B:"Division based on religion", C:"Economic system", D:"Language system" }, answer: "B" },
                                            
                                            { question: "Communalism refers to:", options: { A:"Religious harmony", B:"Use of religion in politics", C:"Economic growth", D:"Education" }, answer: "B" },
                                            
                                            { question: "Communal politics is based on:", options: { A:"Equality", B:"Religion superiority", C:"Unity", D:"Peace" }, answer: "B" },
                                            
                                            { question: "Example of communalism:", options: { A:"Equal rights", B:"Religious violence", C:"Democracy", D:"Education" }, answer: "B" },
                                            
                                            { question: "Secular state means:", options: { A:"Supports one religion", B:"No religion interference in state", C:"Religious rule", D:"Military rule" }, answer: "B" },
                                            
                                            { question: "India is a:", options: { A:"Religious state", B:"Secular state", C:"Dictatorship", D:"Monarchy" }, answer: "B" },
                                            
                                            { question: "Caste system is based on:", options: { A:"Occupation and birth", B:"Religion only", C:"Language", D:"Education" }, answer: "A" },
                                            
                                            { question: "Caste inequality leads to:", options: { A:"Unity", B:"Discrimination", C:"Growth", D:"Peace" }, answer: "B" },
                                            
                                            { question: "Untouchability is:", options: { A:"Legal", B:"Illegal", C:"Encouraged", D:"Optional" }, answer: "B" },
                                            
                                            { question: "Untouchability abolished by:", options: { A:"Constitution", B:"Parliament", C:"President", D:"Courts" }, answer: "A" },
                                            
                                            { question: "Caste in politics means:", options: { A:"No role", B:"Influence in elections", C:"Only social", D:"None" }, answer: "B" },
                                            
                                            { question: "Political parties use caste for:", options: { A:"Unity", B:"Vote bank", C:"Development", D:"Education" }, answer: "B" },
                                            
                                            { question: "Vote bank politics means:", options: { A:"Development", B:"Targeting specific group votes", C:"Equality", D:"Justice" }, answer: "B" },
                                            
                                            { question: "Scheduled Castes (SC) are:", options: { A:"Upper caste", B:"Backward groups", C:"Foreigners", D:"Rich people" }, answer: "B" },
                                            
                                            { question: "Scheduled Tribes (ST) are:", options: { A:"Urban people", B:"Tribal groups", C:"Foreigners", D:"Upper class" }, answer: "B" },
                                            
                                            { question: "OBC stands for:", options: { A:"Other Backward Classes", B:"Official Business Class", C:"Old Backward Class", D:"None" }, answer: "A" },
                                            
                                            { question: "Caste discrimination is reduced by:", options: { A:"Education", B:"Urbanization", C:"Economic growth", D:"All" }, answer: "D" },
                                            
                                            { question: "Gender inequality is reduced by:", options: { A:"Education", B:"Employment", C:"Laws", D:"All" }, answer: "D" },
                                            
                                            { question: "Communalism leads to:", options: { A:"Peace", B:"Violence", C:"Unity", D:"Growth" }, answer: "B" },
                                            
                                            { question: "Secularism promotes:", options: { A:"Religion dominance", B:"Equality", C:"Conflict", D:"Division" }, answer: "B" },
                                            
                                            { question: "Example of gender equality:", options: { A:"Equal pay", B:"Education for girls", C:"Political participation", D:"All" }, answer: "D" },
                                            
                                            { question: "Feminist movement started to:", options: { A:"Promote men", B:"Equal rights for women", C:"Religious equality", D:"Caste equality" }, answer: "B" },
                                            
                                            { question: "Religious discrimination means:", options: { A:"Equal rights", B:"Bias based on religion", C:"Peace", D:"Unity" }, answer: "B" },
                                            
                                            { question: "Caste hierarchy means:", options: { A:"Equal status", B:"Ranking of castes", C:"No caste", D:"Unity" }, answer: "B" },
                                            
                                            { question: "Modern India shows:", options: { A:"No caste", B:"Reduced caste impact", C:"More caste", D:"Only caste" }, answer: "B" },
                                            
                                            { question: "Urbanization reduces:", options: { A:"Equality", B:"Caste differences", C:"Education", D:"Jobs" }, answer: "B" },
                                            
                                            { question: "Economic growth helps in:", options: { A:"Discrimination", B:"Reducing inequality", C:"Violence", D:"Division" }, answer: "B" },
                                            
                                            { question: "Gender equality improves:", options: { A:"Society", B:"Economy", C:"Democracy", D:"All" }, answer: "D" },
                                            
                                            { question: "Religion should not be used in:", options: { A:"Personal life", B:"Politics", C:"Worship", D:"Culture" }, answer: "B" },
                                            
                                            { question: "Caste-based politics leads to:", options: { A:"Unity", B:"Division", C:"Peace", D:"Growth" }, answer: "B" },
                                            
                                            { question: "Positive aspect of caste politics:", options: { A:"Representation of poor", B:"Division", C:"Conflict", D:"Violence" }, answer: "A" },
                                            
                                            { question: "Negative aspect of caste politics:", options: { A:"Representation", B:"Division", C:"Equality", D:"Justice" }, answer: "B" },
                                            
                                            { question: "Democracy should focus on:", options: { A:"Religion", B:"Caste", C:"Equality", D:"Division" }, answer: "C" },
                                            
                                            { question: "Gender division is harmful because:", options: { A:"Limits opportunities", B:"Creates inequality", C:"Reduces growth", D:"All" }, answer: "D" },
                                            
                                            { question: "Communalism spreads through:", options: { A:"Media", B:"Politics", C:"Leaders", D:"All" }, answer: "D" },
                                            
                                            { question: "Example of secular policy:", options: { A:"Equal treatment of all religions", B:"One religion rule", C:"Ban religion", D:"Ignore religion" }, answer: "A" },
                                            
                                            { question: "Equality before law means:", options: { A:"Different laws", B:"Same laws for all", C:"No laws", D:"Only rich laws" }, answer: "B" },
                                            
                                            { question: "Social divisions become dangerous when:", options: { A:"Combined with politics", B:"Ignored", C:"Reduced", D:"Equal" }, answer: "A" },
                                            
                                            { question: "Main goal of democracy:", options: { A:"Power", B:"Equality", C:"Division", D:"Control" }, answer: "B" }
                                            
                                            ];
                                            const sociallesson9 = [

                                              { question: "A political party is:", options: { A:"Group of judges", B:"Group of people with common policies", C:"Military group", D:"Religious group" }, answer: "B" },
                                              
                                              { question: "Main aim of political parties:", options: { A:"Win elections", B:"Serve people", C:"Form government", D:"All" }, answer: "D" },
                                              
                                              { question: "Political parties contest:", options: { A:"Wars", B:"Elections", C:"Games", D:"Courts" }, answer: "B" },
                                              
                                              { question: "Parties put forward:", options: { A:"Policies", B:"Programs", C:"Leaders", D:"All" }, answer: "D" },
                                              
                                              { question: "Parties play a role in:", options: { A:"Law making", B:"Government formation", C:"Public opinion", D:"All" }, answer: "D" },
                                              
                                              { question: "Opposition party role:", options: { A:"Support blindly", B:"Criticize government", C:"Ignore government", D:"Make laws alone" }, answer: "B" },
                                              
                                              { question: "Party that wins majority forms:", options: { A:"Court", B:"Government", C:"Army", D:"NGO" }, answer: "B" },
                                              
                                              { question: "Multi-party system means:", options: { A:"One party", B:"Two parties", C:"Many parties", D:"No parties" }, answer: "C" },
                                              
                                              { question: "India follows:", options: { A:"One party system", B:"Two party system", C:"Multi party system", D:"No party system" }, answer: "C" },
                                              
                                              { question: "Example of one-party system:", options: { A:"India", B:"USA", C:"China", D:"UK" }, answer: "C" },
                                              
                                              { question: "Example of two-party system:", options: { A:"India", B:"USA", C:"China", D:"Nepal" }, answer: "B" },
                                              
                                              { question: "National party must have:", options: { A:"State presence", B:"National presence", C:"Local presence", D:"No presence" }, answer: "B" },
                                              
                                              { question: "Example of national party:", options: { A:"BJP", B:"INC", C:"Both", D:"None" }, answer: "C" },
                                              
                                              { question: "Example of regional party:", options: { A:"BJP", B:"INC", C:"TDP", D:"All" }, answer: "C" },
                                              
                                              { question: "Regional parties focus on:", options: { A:"National issues", B:"State issues", C:"Global issues", D:"Military issues" }, answer: "B" },
                                              
                                              { question: "BJP stands for:", options: { A:"Bharat Jan Party", B:"Bharatiya Janata Party", C:"Bharat Janta Party", D:"None" }, answer: "B" },
                                              
                                              { question: "INC stands for:", options: { A:"Indian National Congress", B:"India National Council", C:"Indian New Congress", D:"None" }, answer: "A" },
                                              
                                              { question: "TDP stands for:", options: { A:"Telugu Desam Party", B:"Tamil Desam Party", C:"Telangana Party", D:"None" }, answer: "A" },
                                              
                                              { question: "Political parties are necessary because:", options: { A:"No government without them", B:"Organize politics", C:"Represent people", D:"All" }, answer: "D" },
                                              
                                              { question: "Without parties:", options: { A:"Democracy works smoothly", B:"No elections", C:"No organized government", D:"No people" }, answer: "C" },
                                              
                                              { question: "Party manifesto means:", options: { A:"Rules", B:"Policies and promises", C:"Law", D:"Punishment" }, answer: "B" },
                                              
                                              { question: "Political parties shape:", options: { A:"Public opinion", B:"Education", C:"Army", D:"Judiciary" }, answer: "A" },
                                              
                                              { question: "Parties provide:", options: { A:"Choices to voters", B:"No choice", C:"Only one option", D:"None" }, answer: "A" },
                                              
                                              { question: "Major challenge faced by parties:", options: { A:"Corruption", B:"Dynasty politics", C:"Money power", D:"All" }, answer: "D" },
                                              
                                              { question: "Dynasty politics means:", options: { A:"Rule by people", B:"Family dominance", C:"Military rule", D:"Religious rule" }, answer: "B" },
                                              
                                              { question: "Money power means:", options: { A:"Use of money in elections", B:"Savings", C:"Banking", D:"Loans" }, answer: "A" },
                                              
                                              { question: "Criminalization of politics means:", options: { A:"Clean politics", B:"Criminals in politics", C:"Law enforcement", D:"Police work" }, answer: "B" },
                                              
                                              { question: "Lack of internal democracy means:", options: { A:"Open decisions", B:"No transparency", C:"Equal power", D:"Fair elections" }, answer: "B" },
                                              
                                              { question: "Reforms are needed to:", options: { A:"Improve parties", B:"Remove corruption", C:"Increase transparency", D:"All" }, answer: "D" },
                                              
                                              { question: "Anti-defection law aims to:", options: { A:"Promote defection", B:"Prevent party switching", C:"Encourage corruption", D:"Remove parties" }, answer: "B" },
                                              
                                              { question: "Transparency means:", options: { A:"Hidden work", B:"Open work", C:"Secret deals", D:"Corruption" }, answer: "B" },
                                              
                                              { question: "Election Commission regulates:", options: { A:"Courts", B:"Parties", C:"Army", D:"Schools" }, answer: "B" },
                                              
                                              { question: "People can reform parties by:", options: { A:"Voting wisely", B:"Rejecting corrupt leaders", C:"Awareness", D:"All" }, answer: "D" },
                                              
                                              { question: "Political parties promote:", options: { A:"Democracy", B:"Dictatorship", C:"War", D:"Division" }, answer: "A" },
                                              
                                              { question: "Opposition ensures:", options: { A:"Power misuse", B:"Accountability", C:"Corruption", D:"War" }, answer: "B" },
                                              
                                              { question: "Coalition government forms when:", options: { A:"One party wins", B:"No majority", C:"No election", D:"War" }, answer: "B" },
                                              
                                              { question: "Coalition includes:", options: { A:"One party", B:"Multiple parties", C:"No party", D:"Army" }, answer: "B" },
                                              
                                              { question: "Political competition ensures:", options: { A:"No choice", B:"Better governance", C:"Dictatorship", D:"War" }, answer: "B" },
                                              
                                              { question: "Parties mobilize people for:", options: { A:"War", B:"Participation", C:"Violence", D:"Conflict" }, answer: "B" },
                                              
                                              { question: "Role of parties in democracy:", options: { A:"Essential", B:"Optional", C:"Not needed", D:"Harmful" }, answer: "A" },
                                              
                                              { question: "Political parties act as:", options: { A:"Link between people and government", B:"Courts", C:"Army", D:"NGO" }, answer: "A" },
                                              
                                              { question: "Election campaigns are conducted by:", options: { A:"Courts", B:"Parties", C:"Army", D:"Police" }, answer: "B" },
                                              
                                              { question: "Party symbol helps:", options: { A:"Leaders", B:"Voters identify party", C:"Judges", D:"Police" }, answer: "B" },
                                              
                                              { question: "Internal democracy includes:", options: { A:"Regular elections", B:"Transparency", C:"Participation", D:"All" }, answer: "D" },
                                              
                                              { question: "Example of party reform:", options: { A:"Disclosure of assets", B:"Education rules", C:"Transparency laws", D:"All" }, answer: "D" },
                                              
                                              { question: "Political parties fail when:", options: { A:"Corruption increases", B:"Transparency reduces", C:"People lose trust", D:"All" }, answer: "D" },
                                              
                                              { question: "Responsible party should:", options: { A:"Serve people", B:"Be transparent", C:"Avoid corruption", D:"All" }, answer: "D" },
                                              
                                              { question: "Democracy without parties is:", options: { A:"Strong", B:"Weak", C:"Perfect", D:"Stable" }, answer: "B" }
                                              
                                              ];
                                              const sociallesson10 = [

                                                { question: "Outcome of democracy refers to:", options: { A:"Process only", B:"Results of democracy", C:"Elections only", D:"Leaders only" }, answer: "B" },
                                                
                                                { question: "Democracy is better because:", options: { A:"Faster decisions", B:"Better decisions", C:"No decisions", D:"Military power" }, answer: "B" },
                                                
                                                { question: "Democracy improves:", options: { A:"Quality of decision", B:"Transparency", C:"Accountability", D:"All" }, answer: "D" },
                                                
                                                { question: "Transparency means:", options: { A:"Hidden work", B:"Open process", C:"Secret decisions", D:"Closed system" }, answer: "B" },
                                                
                                                { question: "Accountability means:", options: { A:"No responsibility", B:"Answerable government", C:"Dictatorship", D:"Military rule" }, answer: "B" },
                                                
                                                { question: "Democracy ensures:", options: { A:"Equality", B:"Freedom", C:"Dignity", D:"All" }, answer: "D" },
                                                
                                                { question: "Economic growth in democracy is:", options: { A:"Always high", B:"Sometimes slow", C:"Zero", D:"Negative" }, answer: "B" },
                                                
                                                { question: "Democracy may delay decisions because:", options: { A:"Too many discussions", B:"No leaders", C:"No laws", D:"Military control" }, answer: "A" },
                                                
                                                { question: "Democracy handles differences by:", options: { A:"Violence", B:"Discussion", C:"War", D:"Ignoring" }, answer: "B" },
                                                
                                                { question: "Democracy promotes:", options: { A:"Conflict", B:"Peaceful resolution", C:"War", D:"Division" }, answer: "B" },
                                                
                                                { question: "Democracy reduces:", options: { A:"Conflict", B:"Equality", C:"Freedom", D:"Participation" }, answer: "A" },
                                                
                                                { question: "Example of accountability:", options: { A:"Election", B:"No election", C:"War", D:"Dictatorship" }, answer: "A" },
                                                
                                                { question: "Citizen participation includes:", options: { A:"Voting", B:"Protesting", C:"Discussion", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy is based on:", options: { A:"Rule of law", B:"Military rule", C:"Dictatorship", D:"No rules" }, answer: "A" },
                                                
                                                { question: "Rule of law means:", options: { A:"No law", B:"Law above all", C:"Only rich follow law", D:"Only leaders follow law" }, answer: "B" },
                                                
                                                { question: "Democracy improves dignity by:", options: { A:"Ignoring people", B:"Respecting individuals", C:"Controlling people", D:"Punishing people" }, answer: "B" },
                                                
                                                { question: "Women participation increases:", options: { A:"Inequality", B:"Equality", C:"Conflict", D:"War" }, answer: "B" },
                                                
                                                { question: "Democracy allows criticism of:", options: { A:"Government", B:"People", C:"Courts", D:"None" }, answer: "A" },
                                                
                                                { question: "Public opinion is shaped by:", options: { A:"Media", B:"Parties", C:"People", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy ensures free and fair:", options: { A:"War", B:"Elections", C:"Conflict", D:"Violence" }, answer: "B" },
                                                
                                                { question: "Economic inequality in democracy:", options: { A:"Does not exist", B:"Still exists", C:"Fully removed", D:"Illegal" }, answer: "B" },
                                                
                                                { question: "Democracy alone cannot remove:", options: { A:"Poverty", B:"Inequality", C:"Unemployment", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy is better than dictatorship because:", options: { A:"Participation", B:"Transparency", C:"Accountability", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy requires:", options: { A:"Active citizens", B:"Passive citizens", C:"No citizens", D:"Military" }, answer: "A" },
                                                
                                                { question: "Public debate leads to:", options: { A:"Better decisions", B:"Conflict", C:"War", D:"Division" }, answer: "A" },
                                                
                                                { question: "Democracy ensures:", options: { A:"Single viewpoint", B:"Multiple viewpoints", C:"No viewpoint", D:"Military view" }, answer: "B" },
                                                
                                                { question: "Dignity of citizens means:", options: { A:"Respect", B:"Control", C:"Fear", D:"Punishment" }, answer: "A" },
                                                
                                                { question: "Example of dignity:", options: { A:"Equal rights", B:"Discrimination", C:"Violence", D:"Inequality" }, answer: "A" },
                                                
                                                { question: "Democracy allows:", options: { A:"Freedom of speech", B:"Freedom of expression", C:"Freedom of belief", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy faces challenge of:", options: { A:"Corruption", B:"Delay", C:"Inequality", D:"All" }, answer: "D" },
                                                
                                                { question: "Transparency improves:", options: { A:"Trust", B:"Corruption", C:"War", D:"Conflict" }, answer: "A" },
                                                
                                                { question: "Accountability reduces:", options: { A:"Corruption", B:"Trust", C:"Participation", D:"Equality" }, answer: "A" },
                                                
                                                { question: "Democracy strengthens:", options: { A:"Citizens", B:"Dictators", C:"Military", D:"Kings" }, answer: "A" },
                                                
                                                { question: "Democracy allows correction of mistakes by:", options: { A:"War", B:"Elections", C:"Violence", D:"Ignoring" }, answer: "B" },
                                                
                                                { question: "Elections help in:", options: { A:"Changing leaders", B:"Maintaining power", C:"War", D:"Conflict" }, answer: "A" },
                                                
                                                { question: "Democracy is based on:", options: { A:"People's will", B:"Military power", C:"King rule", D:"Dictator rule" }, answer: "A" },
                                                
                                                { question: "Democracy is successful when:", options: { A:"People participate", B:"No participation", C:"No elections", D:"War" }, answer: "A" },
                                                
                                                { question: "Political equality means:", options: { A:"Equal voting rights", B:"No voting", C:"Only rich vote", D:"Only leaders vote" }, answer: "A" },
                                                
                                                { question: "Social equality means:", options: { A:"No discrimination", B:"Discrimination", C:"Inequality", D:"Division" }, answer: "A" },
                                                
                                                { question: "Economic equality means:", options: { A:"Equal wealth", B:"No wealth", C:"Only rich", D:"Only poor" }, answer: "A" },
                                                
                                                { question: "Democracy promotes:", options: { A:"Tolerance", B:"Respect", C:"Understanding", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy encourages:", options: { A:"Participation", B:"Awareness", C:"Responsibility", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy can be improved by:", options: { A:"Active citizens", B:"Transparency", C:"Accountability", D:"All" }, answer: "D" },
                                                
                                                { question: "Democracy fails when:", options: { A:"Corruption increases", B:"People inactive", C:"No accountability", D:"All" }, answer: "D" },
                                                
                                                { question: "Example of democracy success:", options: { A:"Peaceful elections", B:"Public participation", C:"Rights protection", D:"All" }, answer: "D" },
                                                
                                                { question: "Example of democracy failure:", options: { A:"Corruption", B:"Inequality", C:"Delay", D:"All" }, answer: "D" }
                                                
                                                ];

      
                                                const historyLesson1 = [

                                                  // French Revolution & Early Nationalism
                                                
                                                  {
                                                    question: "The  started in which year?",
                                                    options: { A: "1776", B: "1789", C: "1815", D: "1848" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Who was the ruler of France during the French Revolution (1789)?",
                                                    options: { A: "Napoleon", B: "Louis XVI", C: "Bismarck", D: "Metternich" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "The idea of nation-state emerged strongly after which event?",
                                                    options: { A: "Industrial Revolution", B: "French Revolution", C: "WW1", D: "Treaty of Versailles" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "What did the tricolour flag of France represent?",
                                                    options: { A: "Kingship", B: "Liberty, Equality, Fraternity", C: "War", D: "Religion" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Napoleon
                                                
                                                  {
                                                    question: " became emperor of France in:",
                                                    options: { A: "1789", B: "1804", C: "1815", D: "1848" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Napoleonic Code was introduced in:",
                                                    options: { A: "1804", B: "1789", C: "1815", D: "1830" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Napoleon’s rule ended after which battle (1815)?",
                                                    options: { A: "Waterloo", B: "Leipzig", C: "Vienna", D: "Berlin" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Vienna Congress
                                                
                                                  {
                                                    question: "The  was held in:",
                                                    options: { A: "1815", B: "1789", C: "1848", D: "1871" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Who led the Congress of Vienna (1815)?",
                                                    options: { A: "Napoleon", B: "Metternich", C: "Garibaldi", D: "Cavour" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Main aim of Congress of Vienna:",
                                                    options: { A: "Spread democracy", B: "Restore monarchies", C: "Industrial growth", D: "Colonisation" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Liberalism
                                                
                                                  {
                                                    question: "Liberalism stands for:",
                                                    options: { A: "Monarchy", B: "Freedom and equality", C: "Dictatorship", D: "Colonialism" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Right to vote initially was given to:",
                                                    options: { A: "All people", B: "Only men with property", C: "Women", D: "Workers" },
                                                    answer: "B"
                                                  },
                                                
                                                  // 1830 & 1848 Revolutions
                                                
                                                  {
                                                    question: "The revolution of 1830 took place in:",
                                                    options: { A: "Germany", B: "France", C: "Italy", D: "Russia" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "The revolution of 1848 is known as:",
                                                    options: { A: "War of Nations", B: "Revolution of Liberals", C: "Industrial War", D: "Cold War" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "In 1848, the Frankfurt Parliament was held in:",
                                                    options: { A: "Italy", B: "Germany", C: "France", D: "Austria" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Germany Unification
                                                
                                                  {
                                                    question: "Germany was unified in which year?",
                                                    options: { A: "1848", B: "1871", C: "1815", D: "1860" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Who unified Germany?",
                                                    options: { A: "Cavour", B: "Bismarck", C: "Garibaldi", D: "Napoleon" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: " used which policy?",
                                                    options: { A: "Peace", B: "Blood and Iron", C: "Democracy", D: "Socialism" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Italy Unification
                                                
                                                  {
                                                    question: "Italy was unified in:",
                                                    options: { A: "1871", B: "1861", C: "1848", D: "1815" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Who was the architect of Italian unification?",
                                                    options: { A: "Garibaldi", B: "Cavour", C: "Mazzini", D: "Napoleon" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Giuseppe Garibaldi was known for:",
                                                    options: { A: "War strategy", B: "Military campaigns", C: "Writing", D: "Trade" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Nationalism & Symbols
                                                
                                                  {
                                                    question: "Marianne is a symbol of:",
                                                    options: { A: "Germany", B: "France", C: "Italy", D: "Britain" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Germania is a symbol of:",
                                                    options: { A: "France", B: "Germany", C: "Italy", D: "Russia" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Balkans
                                                
                                                  {
                                                    question: "The Balkans region was under control of:",
                                                    options: { A: "France", B: "Ottoman Empire", C: "Germany", D: "Italy" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Balkan nationalism led to:",
                                                    options: { A: "Peace", B: "Conflicts and wars", C: "Trade", D: "Unity" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Important Years
                                                
                                                  {
                                                    question: "Napoleon defeated at Waterloo in:",
                                                    options: { A: "1815", B: "1804", C: "1789", D: "1848" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Frankfurt Parliament formed in:",
                                                    options: { A: "1830", B: "1848", C: "1815", D: "1871" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Italian unification completed in:",
                                                    options: { A: "1861", B: "1871", C: "1848", D: "1815" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Concept Based (PYQ style)
                                                
                                                  {
                                                    question: "What was the main aim of nationalists?",
                                                    options: { A: "Trade", B: "Independent nation-state", C: "Colonisation", D: "War" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "What does ‘nation-state’ mean?",
                                                    options: { A: "Many rulers", B: "One ruler, one identity", C: "Colonies", D: "Empire" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra PYQ-type
                                                
                                                  {
                                                    question: "Which class led the nationalist movements?",
                                                    options: { A: "Peasants", B: "Middle class", C: "Kings", D: "Workers" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Which treaty reshaped Europe after Napoleon?",
                                                    options: { A: "Vienna", B: "Versailles", C: "Paris", D: "Berlin" },
                                                    answer: "A"
                                                  }
                                                
                                                ];
                                                const historyLesson2 = [

                                                  // Beginning Phase
                                                
                                                  {
                                                    question: "The  started in:",
                                                    options: { A: "1912", B: "1914", C: "1918", D: "1920" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "The First World War ended in:",
                                                    options: { A: "1916", B: "1918", C: "1920", D: "1930" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Which leader returned to India in 1915?",
                                                    options: { A: "Nehru", B: "Gandhi", C: "Tilak", D: "Bose" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: " returned from South Africa in:",
                                                    options: { A: "1910", B: "1915", C: "1920", D: "1930" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Early Movements
                                                
                                                  {
                                                    question: "Champaran Satyagraha took place in:",
                                                    options: { A: "1916", B: "1917", C: "1918", D: "1919" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Kheda Satyagraha happened in:",
                                                    options: { A: "1917", B: "1918", C: "1919", D: "1920" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Ahmedabad Mill strike occurred in:",
                                                    options: { A: "1916", B: "1918", C: "1920", D: "1919" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Rowlatt Act & Jallianwala
                                                
                                                  {
                                                    question: "The  was passed in:",
                                                    options: { A: "1917", B: "1918", C: "1919", D: "1920" },
                                                    answer: "C"
                                                  },
                                                  {
                                                    question: "Rowlatt Act allowed:",
                                                    options: { A: "Free speech", B: "Detention without trial", C: "Voting rights", D: "Trade freedom" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "The  happened in:",
                                                    options: { A: "1918", B: "1919", C: "1920", D: "1921" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Jallianwala Bagh massacre took place in which city?",
                                                    options: { A: "Delhi", B: "Amritsar", C: "Lahore", D: "Bombay" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Non-Cooperation Movement
                                                
                                                  {
                                                    question: "Non-Cooperation Movement started in:",
                                                    options: { A: "1919", B: "1920", C: "1921", D: "1922" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "The movement was called off in:",
                                                    options: { A: "1921", B: "1922", C: "1923", D: "1924" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Why was Non-Cooperation Movement withdrawn in 1922?",
                                                    options: { A: "War", B: "Chauri Chaura incident", C: "Agreement", D: "Election" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Chauri Chaura incident happened in:",
                                                    options: { A: "1920", B: "1921", C: "1922", D: "1923" },
                                                    answer: "C"
                                                  },
                                                
                                                  // Khilafat Movement
                                                
                                                  {
                                                    question: "Khilafat Movement was launched in:",
                                                    options: { A: "1919", B: "1920", C: "1921", D: "1922" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Khilafat Movement was related to:",
                                                    options: { A: "Hindus", B: "Muslims", C: "British", D: "Sikhs" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Civil Disobedience Movement
                                                
                                                  {
                                                    question: "Civil Disobedience Movement started in:",
                                                    options: { A: "1928", B: "1930", C: "1932", D: "1935" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Salt March started from Sabarmati to:",
                                                    options: { A: "Delhi", B: "Dandi", C: "Bombay", D: "Lahore" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Salt March (Dandi March) started in:",
                                                    options: { A: "1929", B: "1930", C: "1931", D: "1932" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Round Table Conference
                                                
                                                  {
                                                    question: "Gandhi attended Round Table Conference in:",
                                                    options: { A: "1930", B: "1931", C: "1932", D: "1933" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Quit India Movement
                                                
                                                  {
                                                    question: "Quit India Movement started in:",
                                                    options: { A: "1939", B: "1940", C: "1942", D: "1945" },
                                                    answer: "C"
                                                  },
                                                  {
                                                    question: "The slogan 'Do or Die' was given during:",
                                                    options: { A: "Non-Cooperation", B: "Civil Disobedience", C: "Quit India", D: "Khilafat" },
                                                    answer: "C"
                                                  },
                                                
                                                  // Important Concepts
                                                
                                                  {
                                                    question: "Satyagraha means:",
                                                    options: { A: "Violence", B: "Truth and non-violence", C: "War", D: "Protest only" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Boycott of foreign goods is part of:",
                                                    options: { A: "Cooperation", B: "Non-Cooperation", C: "War", D: "Trade" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Groups Participation
                                                
                                                  {
                                                    question: "Which group led the movements mainly?",
                                                    options: { A: "British", B: "Indian National Congress", C: "Army", D: "Kings" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Workers and peasants joined movements due to:",
                                                    options: { A: "Luxury", B: "Economic hardships", C: "War", D: "Religion" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Women Participation
                                                
                                                  {
                                                    question: "Women participation increased during:",
                                                    options: { A: "Early phase", B: "Mass movements", C: "War", D: "British rule" },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Which act led to nationwide protest in 1919?",
                                                    options: { A: "Rowlatt Act", B: "Salt Act", C: "Charter Act", D: "Regulating Act" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Which movement used salt as a symbol?",
                                                    options: { A: "Quit India", B: "Civil Disobedience", C: "Non-Cooperation", D: "Khilafat" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Timeline Mix
                                                
                                                  {
                                                    question: "Correct order:",
                                                    options: {
                                                      A: "Rowlatt → Non-Cooperation → Civil Disobedience",
                                                      B: "Civil → Rowlatt → Quit India",
                                                      C: "Quit India → Non-Cooperation → Rowlatt",
                                                      D: "Non-Cooperation → Rowlatt → Civil"
                                                    },
                                                    answer: "A"
                                                  }
                                                
                                                ];
                                                const historyLesson3 = [

                                                  // Pre-modern World
                                                
                                                  {
                                                    question: "Before the 16th century, trade routes connected Asia with:",
                                                    options: { A: "Only Europe", B: "Europe and Africa", C: "Only Africa", D: "America" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Silk Routes linked Asia with:",
                                                    options: { A: "America", B: "Europe", C: "Australia", D: "Antarctica" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Food items like noodles travelled from:",
                                                    options: { A: "Europe", B: "China", C: "India", D: "America" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Discovery of America
                                                
                                                  {
                                                    question: " happened in:",
                                                    options: { A: "1492", B: "1500", C: "1600", D: "1700" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Who discovered America in 1492?",
                                                    options: { A: "Vasco da Gama", B: "Columbus", C: "Cook", D: "Magellan" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Colonisation & Trade
                                                
                                                  {
                                                    question: "European powers established colonies mainly for:",
                                                    options: { A: "Religion", B: "Trade and resources", C: "Peace", D: "Education" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Indentured labour migration began after:",
                                                    options: { A: "Slavery ended", B: "War", C: "Industrial revolution", D: "Plague" },
                                                    answer: "A"
                                                  },
                                                
                                                  // 19th Century Global Economy
                                                
                                                  {
                                                    question: "19th century saw growth in:",
                                                    options: { A: "Isolation", B: "Global trade", C: "Wars only", D: "Local economy" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Railways and steamships increased:",
                                                    options: { A: "Travel time", B: "Speed of trade", C: "War", D: "Population only" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Migration
                                                
                                                  {
                                                    question: "Large-scale migration in 19th century was mainly from:",
                                                    options: { A: "Asia", B: "Europe", C: "Africa", D: "Australia" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Indentured labourers were sent to:",
                                                    options: { A: "Europe", B: "Colonies", C: "America only", D: "Africa only" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Corn Laws
                                                
                                                  {
                                                    question: "Corn Laws were abolished in Britain in:",
                                                    options: { A: "1846", B: "1830", C: "1850", D: "1820" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Abolition of Corn Laws led to:",
                                                    options: { A: "Less trade", B: "More imports of food", C: "War", D: "Isolation" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Great Depression
                                                
                                                  {
                                                    question: "The  started in:",
                                                    options: { A: "1914", B: "1929", C: "1935", D: "1945" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Great Depression affected:",
                                                    options: { A: "Only USA", B: "Entire world", C: "Only Europe", D: "Only Asia" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "During Great Depression, prices of goods:",
                                                    options: { A: "Increased", B: "Fell", C: "Stable", D: "Random" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Impact on India
                                                
                                                  {
                                                    question: "Indian farmers were affected because:",
                                                    options: { A: "High prices", B: "Fall in agricultural prices", C: "War", D: "Education" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Export of Indian goods:",
                                                    options: { A: "Increased", B: "Declined", C: "Stopped completely", D: "No change" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Bretton Woods System
                                                
                                                  {
                                                    question: " held in:",
                                                    options: { A: "1940", B: "1944", C: "1950", D: "1935" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Bretton Woods system aimed to:",
                                                    options: { A: "War", B: "Economic stability", C: "Colonisation", D: "Isolation" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "IMF and World Bank were created in:",
                                                    options: { A: "1944", B: "1930", C: "1950", D: "1920" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Trade & Globalisation
                                                
                                                  {
                                                    question: "Globalisation means:",
                                                    options: { A: "Isolation", B: "Integration of economies", C: "War", D: "Colonisation only" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Modern globalisation increased after:",
                                                    options: { A: "WW1", B: "WW2", C: "Industrial revolution", D: "Cold war" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Technology
                                                
                                                  {
                                                    question: "Refrigerated ships helped in:",
                                                    options: { A: "War", B: "Transport of perishable goods", C: "Migration", D: "Colonisation" },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Type
                                                
                                                  {
                                                    question: "Which event caused global economic crisis?",
                                                    options: { A: "WW1", B: "Great Depression", C: "Industrial revolution", D: "French revolution" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Indentured labour replaced:",
                                                    options: { A: "Free labour", B: "Slavery", C: "Trade", D: "War" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Timeline Order
                                                
                                                  {
                                                    question: "Correct order:",
                                                    options: {
                                                      A: "Discovery → Depression → Bretton",
                                                      B: "Depression → Discovery → Bretton",
                                                      C: "Bretton → Discovery → Depression",
                                                      D: "Discovery → Bretton → Depression"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Steamships reduced:",
                                                    options: { A: "Trade", B: "Time and cost", C: "Migration", D: "Production" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "19th century trade growth was due to:",
                                                    options: { A: "War", B: "Technology", C: "Religion", D: "Kings" },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                const historyLesson4 = [

                                                  // Pre-Industrial Phase
                                                
                                                  {
                                                    question: "Before industrialisation, production was done by:",
                                                    options: { A: "Machines", B: "Hand labour", C: "Robots", D: "Factories only" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Proto-industrialisation refers to:",
                                                    options: { A: "Modern factories", B: "Rural household production", C: "Machine production", D: "Trade only" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Merchants supplied raw materials to:",
                                                    options: { A: "Kings", B: "Rural households", C: "Soldiers", D: "Banks" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Industrial Revolution
                                                
                                                  {
                                                    question: " began in:",
                                                    options: { A: "17th century", B: "18th century", C: "19th century", D: "20th century" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Industrialisation first started in:",
                                                    options: { A: "France", B: "Germany", C: "Britain", D: "USA" },
                                                    answer: "C"
                                                  },
                                                
                                                  // Factories
                                                
                                                  {
                                                    question: "Factories increased production by using:",
                                                    options: { A: "Hand labour", B: "Machines", C: "Animals", D: "Kings" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "First factories were mainly set up for:",
                                                    options: { A: "Steel", B: "Cotton textiles", C: "Food", D: "Mining" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Workers
                                                
                                                  {
                                                    question: "Factory workers often faced:",
                                                    options: { A: "Luxury", B: "Long working hours", C: "Less work", D: "Freedom" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Children were employed in factories because:",
                                                    options: { A: "High skill", B: "Cheap labour", C: "Strong", D: "Educated" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Luddism
                                                
                                                  {
                                                    question: "Luddites were:",
                                                    options: { A: "Factory owners", B: "Workers who destroyed machines", C: "Kings", D: "Traders" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Luddite movement took place around:",
                                                    options: { A: "1800s", B: "1700s", C: "1900s", D: "1600s" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Industrialists
                                                
                                                  {
                                                    question: " is associated with:",
                                                    options: { A: "Steam engine", B: "Cotton mills", C: "Railways", D: "Ships" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Steam Engine
                                                
                                                  {
                                                    question: "Steam engine was improved by:",
                                                    options: { A: "Newton", B: "James Watt", C: "Darwin", D: "Einstein" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Steam engine helped in:",
                                                    options: { A: "Slow production", B: "Fast production", C: "War only", D: "Agriculture only" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Industrial Growth
                                                
                                                  {
                                                    question: "Industrial growth in Britain increased in:",
                                                    options: { A: "18th & 19th century", B: "16th century", C: "20th century", D: "15th century" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Indian Industry
                                                
                                                  {
                                                    question: "Indian textiles were famous for:",
                                                    options: { A: "Machines", B: "Handmade quality", C: "Cheap labour", D: "Steel" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "British policies affected Indian industries by:",
                                                    options: { A: "Growth", B: "Decline", C: "No change", D: "War" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Deindustrialisation
                                                
                                                  {
                                                    question: "Deindustrialisation means:",
                                                    options: { A: "Growth of industry", B: "Decline of traditional industry", C: "War", D: "Trade" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Indian Entrepreneurs
                                                
                                                  {
                                                    question: "Who were early Indian industrialists?",
                                                    options: { A: "Farmers", B: "Businessmen", C: "Kings", D: "Workers" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Swadeshi Movement
                                                
                                                  {
                                                    question: "Swadeshi movement encouraged:",
                                                    options: { A: "Foreign goods", B: "Use of Indian goods", C: "War", D: "Trade only" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Factories in India
                                                
                                                  {
                                                    question: "First cotton mill in India was set up in:",
                                                    options: { A: "Bombay", B: "Delhi", C: "Calcutta", D: "Madras" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Jute mills were mainly in:",
                                                    options: { A: "Bombay", B: "Calcutta", C: "Delhi", D: "Punjab" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Workers in India
                                                
                                                  {
                                                    question: "Indian workers faced:",
                                                    options: { A: "High wages", B: "Poor conditions", C: "Less work", D: "Luxury" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Markets
                                                
                                                  {
                                                    question: "Advertisements helped in:",
                                                    options: { A: "Reducing sales", B: "Increasing demand", C: "War", D: "Production" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Labels
                                                
                                                  {
                                                    question: "‘Made in Manchester’ was used for:",
                                                    options: { A: "Indian goods", B: "British goods", C: "Chinese goods", D: "American goods" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Technology
                                                
                                                  {
                                                    question: "Spinning Jenny was used for:",
                                                    options: { A: "Weaving", B: "Spinning", C: "Printing", D: "Mining" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Timeline
                                                
                                                  {
                                                    question: "Industrial Revolution began around:",
                                                    options: { A: "1750s", B: "1650s", C: "1850s", D: "1950s" },
                                                    answer: "A"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Why were machines opposed by workers?",
                                                    options: { A: "Expensive", B: "Job loss", C: "Slow", D: "Heavy" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Which industry grew first in Britain?",
                                                    options: { A: "Steel", B: "Cotton textile", C: "Mining", D: "Food" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Industrialisation led to:",
                                                    options: { A: "Less production", B: "Mass production", C: "Isolation", D: "War only" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Machines increased:",
                                                    options: { A: "Time", B: "Efficiency", C: "Cost only", D: "War" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Factories required:",
                                                    options: { A: "Small capital", B: "Large capital", C: "No capital", D: "Only labour" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Industrialisation changed:",
                                                    options: { A: "Only trade", B: "Society and economy", C: "Only war", D: "Only kings" },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                const historyLesson5 = [

                                                  // Early Printing
                                                
                                                  {
                                                    question: "Printing technology was first developed in:",
                                                    options: { A: "India", B: "China", C: "France", D: "USA" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Woodblock printing was first used in:",
                                                    options: { A: "Europe", B: "China", C: "India", D: "Japan" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Oldest printed book in China is:",
                                                    options: { A: "Bible", B: "Diamond Sutra", C: "Vedas", D: "Quran" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Gutenberg
                                                
                                                  {
                                                    question: " invented printing press around:",
                                                    options: { A: "1300", B: "1400", C: "1440", D: "1500" },
                                                    answer: "C"
                                                  },
                                                  {
                                                    question: "First book printed by Gutenberg press:",
                                                    options: { A: "Quran", B: "Bible", C: "Ramayana", D: "Vedas" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Printing press was invented in:",
                                                    options: { A: "Germany", B: "France", C: "England", D: "Italy" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Spread of Print
                                                
                                                  {
                                                    question: "Printing spread rapidly in Europe during:",
                                                    options: { A: "15th century", B: "10th century", C: "18th century", D: "20th century" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "By 1600, number of books increased due to:",
                                                    options: { A: "War", B: "Printing press", C: "Trade", D: "Kings" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Effects of Print
                                                
                                                  {
                                                    question: "Print helped in spreading:",
                                                    options: { A: "Only religion", B: "Knowledge and ideas", C: "War", D: "Only trade" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Reading culture increased because:",
                                                    options: { A: "Books became cheaper", B: "War", C: "Kings", D: "No reason" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Reformation
                                                
                                                  {
                                                    question: "Printing helped spread ideas of:",
                                                    options: { A: "Kings", B: "Reformers", C: "Traders", D: "Workers" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Religious reform movement in Europe is called:",
                                                    options: { A: "Industrial Revolution", B: "Reformation", C: "Renaissance", D: "Colonisation" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Censorship
                                                
                                                  {
                                                    question: "Governments imposed censorship because:",
                                                    options: { A: "Too many books", B: "Fear of revolt", C: "Less reading", D: "Trade" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Index of prohibited books was maintained by:",
                                                    options: { A: "Kings", B: "Church", C: "Workers", D: "Traders" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Print in India
                                                
                                                  {
                                                    question: "Printing press came to India with:",
                                                    options: { A: "British", B: "Portuguese", C: "French", D: "Dutch" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Printing press arrived in India in:",
                                                    options: { A: "1556", B: "1600", C: "1700", D: "1800" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Newspapers
                                                
                                                  {
                                                    question: "First newspapers in India were in:",
                                                    options: { A: "Hindi", B: "English", C: "Telugu", D: "Tamil" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Newspapers helped in:",
                                                    options: { A: "War", B: "Public awareness", C: "Trade only", D: "Kings" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Vernacular Press
                                                
                                                  {
                                                    question: "Vernacular Press Act was passed in:",
                                                    options: { A: "1878", B: "1857", C: "1905", D: "1919" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Vernacular Press Act aimed to:",
                                                    options: { A: "Promote press", B: "Control Indian language press", C: "Trade", D: "War" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Women & Print
                                                
                                                  {
                                                    question: "Women readers increased in:",
                                                    options: { A: "Early phase", B: "19th century", C: "15th century", D: "10th century" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Print helped women by:",
                                                    options: { A: "Education", B: "War", C: "Trade", D: "Politics only" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Religious Books
                                                
                                                  {
                                                    question: "Print helped in spreading religious texts like:",
                                                    options: { A: "Only Bible", B: "Many religious books", C: "Only Quran", D: "None" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Nationalism
                                                
                                                  {
                                                    question: "Print helped in growth of:",
                                                    options: { A: "War", B: "Nationalism", C: "Trade only", D: "Kings" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cartoons & Posters
                                                
                                                  {
                                                    question: "Visual images like cartoons were used for:",
                                                    options: { A: "Entertainment only", B: "Spreading ideas", C: "War", D: "Trade" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Timeline
                                                
                                                  {
                                                    question: "Gutenberg printing press invented around:",
                                                    options: { A: "1440", B: "1500", C: "1300", D: "1600" },
                                                    answer: "A"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Why did print revolution occur?",
                                                    options: { A: "War", B: "Need for books", C: "Kings", D: "Trade only" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Which act restricted Indian press?",
                                                    options: { A: "Rowlatt Act", B: "Vernacular Press Act", C: "Salt Act", D: "Charter Act" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Printing led to:",
                                                    options: { A: "Ignorance", B: "Spread of knowledge", C: "War", D: "Isolation" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Cheap books resulted in:",
                                                    options: { A: "Less reading", B: "More readers", C: "War", D: "Trade" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Handwritten manuscripts were:",
                                                    options: { A: "Cheap", B: "Expensive", C: "Fast", D: "Printed" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Printing reduced:",
                                                    options: { A: "Knowledge", B: "Cost of books", C: "Trade", D: "War" },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                const geographyLesson1 = [

                                                  // Basics
                                                
                                                  {
                                                    question: "Resource means:",
                                                    options: {
                                                      A: "Only natural things",
                                                      B: "Anything useful to satisfy needs",
                                                      C: "Only money",
                                                      D: "Only land"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Resources depend on:",
                                                    options: {
                                                      A: "Technology and time",
                                                      B: "Only nature",
                                                      C: "Only humans",
                                                      D: "Only money"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Types of Resources
                                                
                                                  {
                                                    question: "Resources that can be renewed are called:",
                                                    options: {
                                                      A: "Non-renewable",
                                                      B: "Renewable",
                                                      C: "Human-made",
                                                      D: "Stock"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Coal and petroleum are:",
                                                    options: {
                                                      A: "Renewable",
                                                      B: "Non-renewable",
                                                      C: "Biotic",
                                                      D: "Human-made"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Resources obtained from living organisms are:",
                                                    options: {
                                                      A: "Abiotic",
                                                      B: "Biotic",
                                                      C: "Non-renewable",
                                                      D: "Stock"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Rocks and minerals are:",
                                                    options: {
                                                      A: "Biotic",
                                                      B: "Abiotic",
                                                      C: "Renewable",
                                                      D: "Human-made"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Ownership
                                                
                                                  {
                                                    question: "Resources owned by individuals are:",
                                                    options: {
                                                      A: "Community",
                                                      B: "National",
                                                      C: "Individual",
                                                      D: "International"
                                                    },
                                                    answer: "C"
                                                  },
                                                  {
                                                    question: "Oceanic resources beyond 200 km belong to:",
                                                    options: {
                                                      A: "National",
                                                      B: "International",
                                                      C: "Individual",
                                                      D: "Community"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Development
                                                
                                                  {
                                                    question: "Resources which are surveyed but not used are:",
                                                    options: {
                                                      A: "Stock",
                                                      B: "Potential",
                                                      C: "Developed",
                                                      D: "Reserves"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Resources in use are called:",
                                                    options: {
                                                      A: "Stock",
                                                      B: "Developed",
                                                      C: "Potential",
                                                      D: "Reserves"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Land Resources
                                                
                                                  {
                                                    question: "Total land area of India is about:",
                                                    options: {
                                                      A: "3.28 million sq km",
                                                      B: "2 million sq km",
                                                      C: "4 million sq km",
                                                      D: "1 million sq km"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Land degradation means:",
                                                    options: {
                                                      A: "Increase fertility",
                                                      B: "Loss of productivity",
                                                      C: "More crops",
                                                      D: "More water"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Causes of Land Degradation
                                                
                                                  {
                                                    question: "Overgrazing leads to:",
                                                    options: {
                                                      A: "Growth",
                                                      B: "Land degradation",
                                                      C: "More fertility",
                                                      D: "Water increase"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Deforestation causes:",
                                                    options: {
                                                      A: "Soil erosion",
                                                      B: "More rainfall",
                                                      C: "Less pollution",
                                                      D: "Growth"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Conservation
                                                
                                                  {
                                                    question: "Land conservation means:",
                                                    options: {
                                                      A: "Destroy land",
                                                      B: "Protect and manage land",
                                                      C: "Sell land",
                                                      D: "Use only"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Afforestation helps in:",
                                                    options: {
                                                      A: "Deforestation",
                                                      B: "Soil conservation",
                                                      C: "Pollution",
                                                      D: "Mining"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Soil Types
                                                
                                                  {
                                                    question: "Alluvial soil is found in:",
                                                    options: {
                                                      A: "Mountains",
                                                      B: "River plains",
                                                      C: "Deserts",
                                                      D: "Plateaus"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Black soil is ideal for:",
                                                    options: {
                                                      A: "Rice",
                                                      B: "Cotton",
                                                      C: "Wheat",
                                                      D: "Tea"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Red soil is rich in:",
                                                    options: {
                                                      A: "Iron",
                                                      B: "Nitrogen",
                                                      C: "Potash",
                                                      D: "Water"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Soil Erosion
                                                
                                                  {
                                                    question: "Removal of topsoil is called:",
                                                    options: {
                                                      A: "Deposition",
                                                      B: "Erosion",
                                                      C: "Weathering",
                                                      D: "Farming"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Terrace farming is used to prevent:",
                                                    options: {
                                                      A: "Floods",
                                                      B: "Soil erosion",
                                                      C: "Drought",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Resource Planning
                                                
                                                  {
                                                    question: "Resource planning involves:",
                                                    options: {
                                                      A: "Random use",
                                                      B: "Proper use and conservation",
                                                      C: "Overuse",
                                                      D: "Waste"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "India adopted resource planning after:",
                                                    options: {
                                                      A: "Independence",
                                                      B: "War",
                                                      C: "British rule",
                                                      D: "Industrial revolution"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Sustainable Development
                                                
                                                  {
                                                    question: "Sustainable development means:",
                                                    options: {
                                                      A: "Use without thinking",
                                                      B: "Use resources without harming future",
                                                      C: "Destroy resources",
                                                      D: "Only use present"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Brundtland Commission report came in:",
                                                    options: {
                                                      A: "1987", B: "1970", C: "1990", D: "2000"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Which soil is best for cotton?",
                                                    options: {
                                                      A: "Alluvial",
                                                      B: "Black",
                                                      C: "Red",
                                                      D: "Laterite"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Main cause of land degradation is:",
                                                    options: {
                                                      A: "Afforestation",
                                                      B: "Overgrazing",
                                                      C: "Farming",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Overuse of land leads to:",
                                                    options: {
                                                      A: "Fertility increase",
                                                      B: "Degradation",
                                                      C: "Growth",
                                                      D: "Water increase"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Soil erosion results in:",
                                                    options: {
                                                      A: "Loss of fertility",
                                                      B: "More crops",
                                                      C: "Growth",
                                                      D: "Rain"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Laterite soil is found in:",
                                                    options: {
                                                      A: "Heavy rainfall areas",
                                                      B: "Deserts",
                                                      C: "Mountains",
                                                      D: "Plains"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Arid soil is found in:",
                                                    options: {
                                                      A: "Rainy areas",
                                                      B: "Desert regions",
                                                      C: "Mountains",
                                                      D: "Plains"
                                                    },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                const geographyLesson2 = [

                                                  // Basics
                                                
                                                  {
                                                    question: "Flora refers to:",
                                                    options: { A: "Animals", B: "Plants", C: "Humans", D: "Soil" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Fauna refers to:",
                                                    options: { A: "Plants", B: "Animals", C: "Water", D: "Soil" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Biodiversity
                                                
                                                  {
                                                    question: "Biodiversity means:",
                                                    options: {
                                                      A: "Single species",
                                                      B: "Variety of life forms",
                                                      C: "Only plants",
                                                      D: "Only animals"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "India is rich in biodiversity because of:",
                                                    options: {
                                                      A: "Climate variation",
                                                      B: "No population",
                                                      C: "Only forests",
                                                      D: "Only rivers"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Categories of Species
                                                
                                                  {
                                                    question: "Species that are in danger of extinction are called:",
                                                    options: {
                                                      A: "Normal",
                                                      B: "Endangered",
                                                      C: "Extinct",
                                                      D: "Rare"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Species that no longer exist are:",
                                                    options: {
                                                      A: "Endangered",
                                                      B: "Rare",
                                                      C: "Extinct",
                                                      D: "Normal"
                                                    },
                                                    answer: "C"
                                                  },
                                                  {
                                                    question: "Species found only in a particular area are:",
                                                    options: {
                                                      A: "Endemic",
                                                      B: "Rare",
                                                      C: "Normal",
                                                      D: "Common"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Forest Types (Basic idea)
                                                
                                                  {
                                                    question: "Reserved forests are:",
                                                    options: {
                                                      A: "Open for all",
                                                      B: "Highly protected",
                                                      C: "No trees",
                                                      D: "Private"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Protected forests allow:",
                                                    options: {
                                                      A: "No use",
                                                      B: "Limited use",
                                                      C: "Full use",
                                                      D: "Private use"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Causes of Depletion
                                                
                                                  {
                                                    question: "Main cause of forest depletion is:",
                                                    options: {
                                                      A: "Afforestation",
                                                      B: "Deforestation",
                                                      C: "Rain",
                                                      D: "Wind"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Expansion of agriculture leads to:",
                                                    options: {
                                                      A: "Forest growth",
                                                      B: "Forest loss",
                                                      C: "More animals",
                                                      D: "More rainfall"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Colonial Impact
                                                
                                                  {
                                                    question: "Forests were cleared during colonial rule for:",
                                                    options: {
                                                      A: "Trade and railways",
                                                      B: "Education",
                                                      C: "Health",
                                                      D: "Peace"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Conservation
                                                
                                                  {
                                                    question: "Conservation means:",
                                                    options: {
                                                      A: "Destroy resources",
                                                      B: "Protect and manage resources",
                                                      C: "Sell resources",
                                                      D: "Use without care"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Afforestation means:",
                                                    options: {
                                                      A: "Cutting trees",
                                                      B: "Planting trees",
                                                      C: "Burning forests",
                                                      D: "Mining"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Laws
                                                
                                                  {
                                                    question: "Indian Forest Act was introduced in:",
                                                    options: { A: "1865", B: "1878", C: "1927", D: "1947" },
                                                    answer: "C"
                                                  },
                                                  {
                                                    question: "Wildlife Protection Act was passed in:",
                                                    options: { A: "1972", B: "1980", C: "1990", D: "2000" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Movements
                                                
                                                  {
                                                    question: "Chipko Movement is related to:",
                                                    options: {
                                                      A: "Water",
                                                      B: "Forest conservation",
                                                      C: "Soil",
                                                      D: "Industry"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Chipko Movement started in:",
                                                    options: { A: "1970s", B: "1960s", C: "1980s", D: "1990s" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Community Role
                                                
                                                  {
                                                    question: "Local communities help in:",
                                                    options: {
                                                      A: "Destroying forests",
                                                      B: "Protecting forests",
                                                      C: "Selling forests",
                                                      D: "Ignoring forests"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Joint Forest Management means:",
                                                    options: {
                                                      A: "Only government control",
                                                      B: "Community + government effort",
                                                      C: "Private control",
                                                      D: "No control"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Wildlife
                                                
                                                  {
                                                    question: "National parks are for:",
                                                    options: {
                                                      A: "Industry",
                                                      B: "Wildlife protection",
                                                      C: "Farming",
                                                      D: "Housing"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Sanctuaries are:",
                                                    options: {
                                                      A: "Cities",
                                                      B: "Protected areas for animals",
                                                      C: "Farms",
                                                      D: "Factories"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Red Data Book
                                                
                                                  {
                                                    question: "Red Data Book contains:",
                                                    options: {
                                                      A: "Normal species",
                                                      B: "Endangered species",
                                                      C: "Plants only",
                                                      D: "Animals only"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Which act protects wildlife in India?",
                                                    options: {
                                                      A: "Forest Act",
                                                      B: "Wildlife Protection Act",
                                                      C: "Land Act",
                                                      D: "Water Act"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Chipko Movement was started to:",
                                                    options: {
                                                      A: "Cut trees",
                                                      B: "Save trees",
                                                      C: "Sell trees",
                                                      D: "Burn forests"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Deforestation leads to:",
                                                    options: {
                                                      A: "More rainfall",
                                                      B: "Loss of biodiversity",
                                                      C: "More animals",
                                                      D: "Growth"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Loss of forests causes:",
                                                    options: {
                                                      A: "Climate balance",
                                                      B: "Environmental imbalance",
                                                      C: "Growth",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Endangered species example:",
                                                    options: {
                                                      A: "Tiger",
                                                      B: "Dog",
                                                      C: "Cow",
                                                      D: "Goat"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Extinct species example:",
                                                    options: {
                                                      A: "Dodo",
                                                      B: "Tiger",
                                                      C: "Elephant",
                                                      D: "Lion"
                                                    },
                                                    answer: "A"
                                                  }
                                                
                                                ];
                                                const geographyLesson3 = [

                                                  // Basics
                                                
                                                  {
                                                    question: "Water covers about how much of Earth's surface?",
                                                    options: { A: "50%", B: "71%", C: "30%", D: "90%" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Freshwater available for human use is about:",
                                                    options: { A: "50%", B: "10%", C: "2.5%", D: "25%" },
                                                    answer: "C"
                                                  },
                                                
                                                  // Water Scarcity
                                                
                                                  {
                                                    question: "Water scarcity means:",
                                                    options: {
                                                      A: "Too much water",
                                                      B: "Lack of sufficient water",
                                                      C: "Only rain",
                                                      D: "Flood"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Main cause of water scarcity is:",
                                                    options: {
                                                      A: "Less population",
                                                      B: "Overuse of water",
                                                      C: "Less rainfall only",
                                                      D: "Wind"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Industrialisation leads to:",
                                                    options: {
                                                      A: "Water saving",
                                                      B: "More water demand",
                                                      C: "Less pollution",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Multipurpose Projects
                                                
                                                  {
                                                    question: "Dams are built mainly for:",
                                                    options: {
                                                      A: "Decoration",
                                                      B: "Multipurpose use",
                                                      C: "Only water storage",
                                                      D: "Only electricity"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Multipurpose projects include:",
                                                    options: {
                                                      A: "Irrigation only",
                                                      B: "Irrigation, power, flood control",
                                                      C: "Only power",
                                                      D: "Only farming"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Famous Dams
                                                
                                                  {
                                                    question: " is on river:",
                                                    options: { A: "Ganga", B: "Sutlej", C: "Yamuna", D: "Godavari" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: " is built on:",
                                                    options: { A: "Mahanadi", B: "Krishna", C: "Kaveri", D: "Narmada" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: " is on:",
                                                    options: { A: "Ganga", B: "Yamuna", C: "Bhagirathi", D: "Godavari" },
                                                    answer: "C"
                                                  },
                                                
                                                  // Problems of Dams
                                                
                                                  {
                                                    question: "Large dams cause:",
                                                    options: {
                                                      A: "Only benefits",
                                                      B: "Displacement of people",
                                                      C: "No effect",
                                                      D: "Only irrigation"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Dams can lead to:",
                                                    options: {
                                                      A: "Flood control only",
                                                      B: "Environmental issues",
                                                      C: "Only electricity",
                                                      D: "Only farming"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Rainwater Harvesting
                                                
                                                  {
                                                    question: "Rainwater harvesting means:",
                                                    options: {
                                                      A: "Wasting rainwater",
                                                      B: "Collecting and storing rainwater",
                                                      C: "Flooding",
                                                      D: "River use"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Rooftop rainwater harvesting is used to:",
                                                    options: {
                                                      A: "Waste water",
                                                      B: "Recharge groundwater",
                                                      C: "Increase pollution",
                                                      D: "Flood"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Traditional Methods
                                                
                                                  {
                                                    question: "Khadin system is used in:",
                                                    options: { A: "Punjab", B: "Rajasthan", C: "Kerala", D: "Tamil Nadu" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Tank irrigation is common in:",
                                                    options: { A: "North India", B: "South India", C: "Desert only", D: "Mountains" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Groundwater
                                                
                                                  {
                                                    question: "Excess use of groundwater leads to:",
                                                    options: {
                                                      A: "Increase water",
                                                      B: "Depletion",
                                                      C: "Rain",
                                                      D: "Flood"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Conservation
                                                
                                                  {
                                                    question: "Water conservation means:",
                                                    options: {
                                                      A: "Waste water",
                                                      B: "Use wisely and save",
                                                      C: "Only store",
                                                      D: "Ignore"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Recycling water helps in:",
                                                    options: {
                                                      A: "Waste",
                                                      B: "Saving water",
                                                      C: "Pollution",
                                                      D: "Flood"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Laws & Awareness
                                                
                                                  {
                                                    question: "Water management is necessary because:",
                                                    options: {
                                                      A: "Unlimited water",
                                                      B: "Limited freshwater",
                                                      C: "No need",
                                                      D: "Only rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Main aim of multipurpose projects is:",
                                                    options: {
                                                      A: "Only power",
                                                      B: "Multiple benefits",
                                                      C: "Only farming",
                                                      D: "Only water"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Rainwater harvesting helps in:",
                                                    options: {
                                                      A: "Flood only",
                                                      B: "Groundwater recharge",
                                                      C: "Pollution",
                                                      D: "War"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Overuse of water leads to:",
                                                    options: {
                                                      A: "More water",
                                                      B: "Scarcity",
                                                      C: "Rain",
                                                      D: "Flood"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Deforestation affects water by:",
                                                    options: {
                                                      A: "Increase water",
                                                      B: "Reduce groundwater",
                                                      C: "No effect",
                                                      D: "Flood"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Timeline / Modern Awareness
                                                
                                                  {
                                                    question: "Modern water conservation gained importance after:",
                                                    options: {
                                                      A: "Industrial growth",
                                                      B: "Water scarcity issues",
                                                      C: "War",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Largest use of water in India is for:",
                                                    options: {
                                                      A: "Industry",
                                                      B: "Agriculture",
                                                      C: "Domestic",
                                                      D: "Transport"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Urbanisation leads to:",
                                                    options: {
                                                      A: "Less water demand",
                                                      B: "More water demand",
                                                      C: "No change",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                const geographyLesson4 = [

                                                  // Basics
                                                
                                                  {
                                                    question: "Agriculture is a:",
                                                    options: {
                                                      A: "Primary activity",
                                                      B: "Secondary activity",
                                                      C: "Tertiary activity",
                                                      D: "None"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "India is an agricultural country because:",
                                                    options: {
                                                      A: "Less farming",
                                                      B: "Large population depends on agriculture",
                                                      C: "Only industry",
                                                      D: "Only trade"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Types of Farming
                                                
                                                  {
                                                    question: "Primitive subsistence farming is:",
                                                    options: {
                                                      A: "Modern farming",
                                                      B: "Small scale, traditional tools",
                                                      C: "Large scale",
                                                      D: "Machine based"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Shifting cultivation is also called:",
                                                    options: {
                                                      A: "Plantation",
                                                      B: "Slash and burn",
                                                      C: "Commercial",
                                                      D: "Mixed"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Commercial farming aims at:",
                                                    options: {
                                                      A: "Self consumption",
                                                      B: "Profit",
                                                      C: "Only food",
                                                      D: "Only crops"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cropping Seasons
                                                
                                                  {
                                                    question: "Kharif crops are sown in:",
                                                    options: { A: "Winter", B: "Monsoon", C: "Summer", D: "Spring" },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Rabi crops are sown in:",
                                                    options: { A: "Winter", B: "Monsoon", C: "Summer", D: "Rainy" },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Zaid crops are grown in:",
                                                    options: { A: "Winter", B: "Summer", C: "Monsoon", D: "Rainy" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Major Crops
                                                
                                                  {
                                                    question: "Rice requires:",
                                                    options: {
                                                      A: "Low rainfall",
                                                      B: "High rainfall and temperature",
                                                      C: "Cold climate",
                                                      D: "Dry land"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Wheat is a:",
                                                    options: {
                                                      A: "Kharif crop",
                                                      B: "Rabi crop",
                                                      C: "Zaid crop",
                                                      D: "Cash crop"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Cotton needs:",
                                                    options: {
                                                      A: "Cold climate",
                                                      B: "Warm climate",
                                                      C: "Snow",
                                                      D: "Dry only"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Jute grows best in:",
                                                    options: {
                                                      A: "Dry soil",
                                                      B: "Alluvial soil",
                                                      C: "Mountain soil",
                                                      D: "Desert"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cash Crops
                                                
                                                  {
                                                    question: "Sugarcane requires:",
                                                    options: {
                                                      A: "Low water",
                                                      B: "High temperature and rainfall",
                                                      C: "Cold climate",
                                                      D: "Dry land"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Tea grows in:",
                                                    options: {
                                                      A: "Plains",
                                                      B: "Hilly areas",
                                                      C: "Deserts",
                                                      D: "Plateaus"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Coffee is mainly grown in:",
                                                    options: {
                                                      A: "North India",
                                                      B: "South India",
                                                      C: "Desert",
                                                      D: "Plains"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Institutional Reforms
                                                
                                                  {
                                                    question: "Green Revolution increased production of:",
                                                    options: {
                                                      A: "Rice and wheat",
                                                      B: "Cotton",
                                                      C: "Jute",
                                                      D: "Tea"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Green Revolution started in:",
                                                    options: { A: "1950s", B: "1960s", C: "1970s", D: "1980s" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Problems
                                                
                                                  {
                                                    question: "Major problem in Indian agriculture:",
                                                    options: {
                                                      A: "Too much rain",
                                                      B: "Dependence on monsoon",
                                                      C: "Too much machinery",
                                                      D: "Less land"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Small land holdings lead to:",
                                                    options: {
                                                      A: "High production",
                                                      B: "Low productivity",
                                                      C: "More profit",
                                                      D: "Growth"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Irrigation
                                                
                                                  {
                                                    question: "Irrigation is needed because:",
                                                    options: {
                                                      A: "Too much rain",
                                                      B: "Uneven rainfall",
                                                      C: "No farming",
                                                      D: "Only rivers"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Modern Methods
                                                
                                                  {
                                                    question: "Use of HYV seeds is part of:",
                                                    options: {
                                                      A: "Traditional farming",
                                                      B: "Modern farming",
                                                      C: "Primitive farming",
                                                      D: "None"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Sustainable Agriculture
                                                
                                                  {
                                                    question: "Sustainable agriculture means:",
                                                    options: {
                                                      A: "Overuse resources",
                                                      B: "Use without harming future",
                                                      C: "Destroy land",
                                                      D: "Only profit"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Which is a Kharif crop?",
                                                    options: {
                                                      A: "Wheat",
                                                      B: "Rice",
                                                      C: "Barley",
                                                      D: "Gram"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Which crop is grown in winter?",
                                                    options: {
                                                      A: "Rice",
                                                      B: "Wheat",
                                                      C: "Jute",
                                                      D: "Cotton"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Lack of irrigation leads to:",
                                                    options: {
                                                      A: "High yield",
                                                      B: "Crop failure",
                                                      C: "Growth",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Use of fertilizers results in:",
                                                    options: {
                                                      A: "More production",
                                                      B: "No change",
                                                      C: "Less crops",
                                                      D: "Dry land"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Millets are:",
                                                    options: {
                                                      A: "Cash crops",
                                                      B: "Food crops",
                                                      C: "Beverage crops",
                                                      D: "Fibre crops"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "India is largest producer of:",
                                                    options: {
                                                      A: "Tea",
                                                      B: "Coffee",
                                                      C: "Rubber",
                                                      D: "Sugarcane"
                                                    },
                                                    answer: "A"
                                                  }
                                                
                                                ];
                                                const geographyLesson5 = [

                                                  // Basics
                                                
                                                  {
                                                    question: "Minerals are:",
                                                    options: {
                                                      A: "Living organisms",
                                                      B: "Natural inorganic substances",
                                                      C: "Only metals",
                                                      D: "Only fuels"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Minerals have:",
                                                    options: {
                                                      A: "No structure",
                                                      B: "Definite chemical composition",
                                                      C: "Only color",
                                                      D: "Only shape"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Types of Minerals
                                                
                                                  {
                                                    question: "Ferrous minerals contain:",
                                                    options: {
                                                      A: "Copper",
                                                      B: "Iron",
                                                      C: "Gold",
                                                      D: "Silver"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Non-ferrous minerals include:",
                                                    options: {
                                                      A: "Iron",
                                                      B: "Copper",
                                                      C: "Manganese",
                                                      D: "Coal"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Non-metallic minerals include:",
                                                    options: {
                                                      A: "Coal",
                                                      B: "Mica",
                                                      C: "Iron",
                                                      D: "Copper"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Formation
                                                
                                                  {
                                                    question: "Minerals are formed by:",
                                                    options: {
                                                      A: "Only water",
                                                      B: "Geological processes",
                                                      C: "Only air",
                                                      D: "Only heat"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Iron Ore
                                                
                                                  {
                                                    question: "Major iron ore type is:",
                                                    options: {
                                                      A: "Bauxite",
                                                      B: "Hematite",
                                                      C: "Mica",
                                                      D: "Coal"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Iron ore is mainly found in:",
                                                    options: {
                                                      A: "Plains",
                                                      B: "Plateaus",
                                                      C: "Mountains",
                                                      D: "Deserts"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Coal
                                                
                                                  {
                                                    question: "Coal is a:",
                                                    options: {
                                                      A: "Renewable resource",
                                                      B: "Non-renewable resource",
                                                      C: "Biotic resource",
                                                      D: "Infinite resource"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Best quality coal is:",
                                                    options: {
                                                      A: "Lignite",
                                                      B: "Bituminous",
                                                      C: "Anthracite",
                                                      D: "Peat"
                                                    },
                                                    answer: "C"
                                                  },
                                                
                                                  // Petroleum
                                                
                                                  {
                                                    question: "Petroleum is also called:",
                                                    options: {
                                                      A: "Black gold",
                                                      B: "White gold",
                                                      C: "Green gold",
                                                      D: "Red gold"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Petroleum is found in:",
                                                    options: {
                                                      A: "Mountains",
                                                      B: "Sedimentary rocks",
                                                      C: "Deserts",
                                                      D: "Plains"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Natural Gas
                                                
                                                  {
                                                    question: "Natural gas is used for:",
                                                    options: {
                                                      A: "Cooking",
                                                      B: "Fuel",
                                                      C: "Electricity",
                                                      D: "All of these"
                                                    },
                                                    answer: "D"
                                                  },
                                                
                                                  // Energy Resources
                                                
                                                  {
                                                    question: "Renewable energy source:",
                                                    options: {
                                                      A: "Coal",
                                                      B: "Solar",
                                                      C: "Petroleum",
                                                      D: "Gas"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Non-renewable energy source:",
                                                    options: {
                                                      A: "Wind",
                                                      B: "Solar",
                                                      C: "Coal",
                                                      D: "Hydro"
                                                    },
                                                    answer: "C"
                                                  },
                                                
                                                  // Solar Energy
                                                
                                                  {
                                                    question: "Solar energy is:",
                                                    options: {
                                                      A: "Non-renewable",
                                                      B: "Renewable",
                                                      C: "Limited",
                                                      D: "Polluting"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Wind Energy
                                                
                                                  {
                                                    question: "Wind energy is generated by:",
                                                    options: {
                                                      A: "Machines",
                                                      B: "Windmills",
                                                      C: "Coal",
                                                      D: "Water"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Hydel Power
                                                
                                                  {
                                                    question: "Hydel power is generated from:",
                                                    options: {
                                                      A: "Coal",
                                                      B: "Water",
                                                      C: "Wind",
                                                      D: "Sun"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Nuclear Energy
                                                
                                                  {
                                                    question: "Nuclear energy is produced from:",
                                                    options: {
                                                      A: "Coal",
                                                      B: "Uranium",
                                                      C: "Water",
                                                      D: "Wind"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Conservation
                                                
                                                  {
                                                    question: "Mineral conservation means:",
                                                    options: {
                                                      A: "Wasting minerals",
                                                      B: "Using wisely",
                                                      C: "Destroying",
                                                      D: "Ignoring"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Recycling helps in:",
                                                    options: {
                                                      A: "Wasting",
                                                      B: "Saving resources",
                                                      C: "Pollution",
                                                      D: "War"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Environmental Impact
                                                
                                                  {
                                                    question: "Mining leads to:",
                                                    options: {
                                                      A: "Growth only",
                                                      B: "Environmental degradation",
                                                      C: "Rain",
                                                      D: "No effect"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Which is a renewable resource?",
                                                    options: {
                                                      A: "Coal",
                                                      B: "Solar",
                                                      C: "Petroleum",
                                                      D: "Gas"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Which mineral is used in electrical industry?",
                                                    options: {
                                                      A: "Iron",
                                                      B: "Copper",
                                                      C: "Coal",
                                                      D: "Petroleum"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Overuse of minerals leads to:",
                                                    options: {
                                                      A: "Increase",
                                                      B: "Depletion",
                                                      C: "Growth",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Burning fossil fuels causes:",
                                                    options: {
                                                      A: "Clean air",
                                                      B: "Pollution",
                                                      C: "Growth",
                                                      D: "Water"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Mica is used in:",
                                                    options: {
                                                      A: "Electrical industry",
                                                      B: "Food",
                                                      C: "Clothing",
                                                      D: "Farming"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Bauxite is used to produce:",
                                                    options: {
                                                      A: "Iron",
                                                      B: "Aluminium",
                                                      C: "Copper",
                                                      D: "Coal"
                                                    },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                const geographyLesson6 = [

                                                  // Basics
                                                
                                                  {
                                                    question: "Manufacturing means:",
                                                    options: {
                                                      A: "Producing raw materials",
                                                      B: "Converting raw materials into finished goods",
                                                      C: "Selling goods",
                                                      D: "Transporting goods"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Manufacturing is a:",
                                                    options: {
                                                      A: "Primary activity",
                                                      B: "Secondary activity",
                                                      C: "Tertiary activity",
                                                      D: "None"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Importance
                                                
                                                  {
                                                    question: "Manufacturing helps in:",
                                                    options: {
                                                      A: "Only farming",
                                                      B: "Economic growth",
                                                      C: "Only trade",
                                                      D: "Only transport"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Industrial development reduces:",
                                                    options: {
                                                      A: "Employment",
                                                      B: "Dependence on agriculture",
                                                      C: "Production",
                                                      D: "Trade"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Types of Industries
                                                
                                                  {
                                                    question: "Industries based on raw materials are:",
                                                    options: {
                                                      A: "Agro-based and mineral-based",
                                                      B: "Private and public",
                                                      C: "Small and large",
                                                      D: "Heavy and light"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Cotton textile industry is:",
                                                    options: {
                                                      A: "Mineral-based",
                                                      B: "Agro-based",
                                                      C: "Chemical",
                                                      D: "Heavy"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Iron and steel industry is:",
                                                    options: {
                                                      A: "Agro-based",
                                                      B: "Mineral-based",
                                                      C: "Small scale",
                                                      D: "Cottage"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Ownership
                                                
                                                  {
                                                    question: "Industries owned by individuals are:",
                                                    options: {
                                                      A: "Public sector",
                                                      B: "Private sector",
                                                      C: "Joint sector",
                                                      D: "Cooperative"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Government-owned industries are:",
                                                    options: {
                                                      A: "Private",
                                                      B: "Public sector",
                                                      C: "Joint",
                                                      D: "None"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Size
                                                
                                                  {
                                                    question: "Industries with small capital are:",
                                                    options: {
                                                      A: "Large scale",
                                                      B: "Small scale",
                                                      C: "Heavy",
                                                      D: "Public"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Location Factors
                                                
                                                  {
                                                    question: "Main factor for location of industries:",
                                                    options: {
                                                      A: "Climate only",
                                                      B: "Raw materials, labour, power",
                                                      C: "Rain only",
                                                      D: "Wind only"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Industries are located near raw materials to:",
                                                    options: {
                                                      A: "Increase cost",
                                                      B: "Reduce transport cost",
                                                      C: "Increase time",
                                                      D: "Reduce production"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Iron and Steel Industry
                                                
                                                  {
                                                    question: "Iron and steel industry is called:",
                                                    options: {
                                                      A: "Light industry",
                                                      B: "Basic industry",
                                                      C: "Agro industry",
                                                      D: "Cottage industry"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Major steel plant is  located in:",
                                                    options: { A: "Delhi", B: "Jamshedpur", C: "Mumbai", D: "Chennai" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cotton Textile
                                                
                                                  {
                                                    question: "Cotton textile industry is mainly located in:",
                                                    options: {
                                                      A: "Cold regions",
                                                      B: "Humid regions",
                                                      C: "Deserts",
                                                      D: "Mountains"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Mumbai became center of cotton textile because of:",
                                                    options: {
                                                      A: "Cold climate",
                                                      B: "Humid climate and port",
                                                      C: "Mountains",
                                                      D: "Desert"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Chemical Industry
                                                
                                                  {
                                                    question: "Chemical industry produces:",
                                                    options: {
                                                      A: "Food",
                                                      B: "Fertilizers and medicines",
                                                      C: "Clothes",
                                                      D: "Cars"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Pollution
                                                
                                                  {
                                                    question: "Industries cause:",
                                                    options: {
                                                      A: "Only growth",
                                                      B: "Air, water, land pollution",
                                                      C: "Only water",
                                                      D: "No pollution"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Air pollution is caused by:",
                                                    options: {
                                                      A: "Water",
                                                      B: "Smoke and gases",
                                                      C: "Soil",
                                                      D: "Plants"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Control Measures
                                                
                                                  {
                                                    question: "Pollution can be reduced by:",
                                                    options: {
                                                      A: "Ignoring",
                                                      B: "Using cleaner technology",
                                                      C: "More factories",
                                                      D: "More waste"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Industrial Regions
                                                
                                                  {
                                                    question: "Most industries are located in:",
                                                    options: {
                                                      A: "Villages",
                                                      B: "Urban areas",
                                                      C: "Forests",
                                                      D: "Mountains"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Which industry is basic industry?",
                                                    options: {
                                                      A: "Cotton",
                                                      B: "Iron and steel",
                                                      C: "Food",
                                                      D: "Paper"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Which factor is most important for industry location?",
                                                    options: {
                                                      A: "Rain",
                                                      B: "Raw material",
                                                      C: "Wind",
                                                      D: "Sunlight"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Industries near ports help in:",
                                                    options: {
                                                      A: "Less trade",
                                                      B: "Easy import/export",
                                                      C: "More cost",
                                                      D: "Less production"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Industrialisation leads to:",
                                                    options: {
                                                      A: "Less jobs",
                                                      B: "More employment",
                                                      C: "No change",
                                                      D: "Only farming"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Small scale industries require:",
                                                    options: {
                                                      A: "Huge capital",
                                                      B: "Less capital",
                                                      C: "No labour",
                                                      D: "Only machines"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Industrial waste causes:",
                                                    options: {
                                                      A: "Clean environment",
                                                      B: "Pollution",
                                                      C: "Growth",
                                                      D: "Rain"
                                                    },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                const geographyLesson7 = [

                                                  // Basics
                                                
                                                  {
                                                    question: "Transport means:",
                                                    options: {
                                                      A: "Communication only",
                                                      B: "Movement of people and goods",
                                                      C: "Only trade",
                                                      D: "Only roads"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Communication means:",
                                                    options: {
                                                      A: "Transport goods",
                                                      B: "Exchange of ideas and messages",
                                                      C: "Only roads",
                                                      D: "Only railways"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Importance
                                                
                                                  {
                                                    question: "Transport and communication are called:",
                                                    options: {
                                                      A: "Primary sector",
                                                      B: "Lifelines of national economy",
                                                      C: "Secondary sector",
                                                      D: "None"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "They help in:",
                                                    options: {
                                                      A: "Isolation",
                                                      B: "Economic development",
                                                      C: "Stopping trade",
                                                      D: "Only farming"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Roadways
                                                
                                                  {
                                                    question: "Roadways are suitable for:",
                                                    options: {
                                                      A: "Short distances",
                                                      B: "Long ocean travel",
                                                      C: "Air transport",
                                                      D: "Only goods"
                                                    },
                                                    answer: "A"
                                                  },
                                                  {
                                                    question: "Golden Quadrilateral connects:",
                                                    options: {
                                                      A: "Villages",
                                                      B: "Major cities",
                                                      C: "Only ports",
                                                      D: "Only states"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Golden Quadrilateral was started in:",
                                                    options: { A: "1990s", B: "2000", C: "1980", D: "2010" },
                                                    answer: "B"
                                                  },
                                                
                                                  // Railways
                                                
                                                  {
                                                    question: "Railways are best for:",
                                                    options: {
                                                      A: "Short distances",
                                                      B: "Bulk transport over long distances",
                                                      C: "Air travel",
                                                      D: "Only passengers"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Railways in India started in:",
                                                    options: { A: "1853", B: "1900", C: "1947", D: "1800" },
                                                    answer: "A"
                                                  },
                                                
                                                  // Pipelines
                                                
                                                  {
                                                    question: "Pipelines are used for transporting:",
                                                    options: {
                                                      A: "People",
                                                      B: "Liquids and gases",
                                                      C: "Cars",
                                                      D: "Animals"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Pipeline transport is:",
                                                    options: {
                                                      A: "Expensive always",
                                                      B: "Cheap and efficient",
                                                      C: "Slow",
                                                      D: "Only for water"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Waterways
                                                
                                                  {
                                                    question: "Water transport is:",
                                                    options: {
                                                      A: "Costly",
                                                      B: "Cheap",
                                                      C: "Fastest",
                                                      D: "Dangerous"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "National Waterway No.1 is on:",
                                                    options: {
                                                      A: "Ganga",
                                                      B: "Yamuna",
                                                      C: "Godavari",
                                                      D: "Krishna"
                                                    },
                                                    answer: "A"
                                                  },
                                                
                                                  // Airways
                                                
                                                  {
                                                    question: "Air transport is:",
                                                    options: {
                                                      A: "Slow",
                                                      B: "Fastest",
                                                      C: "Cheapest",
                                                      D: "Only goods"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Airways are useful in:",
                                                    options: {
                                                      A: "Flat plains only",
                                                      B: "Difficult terrains",
                                                      C: "Only cities",
                                                      D: "Only villages"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Ports
                                                
                                                  {
                                                    question: "Ports are used for:",
                                                    options: {
                                                      A: "Air travel",
                                                      B: "Water transport",
                                                      C: "Road transport",
                                                      D: "Railways"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: " is a:",
                                                    options: {
                                                      A: "River port",
                                                      B: "Sea port",
                                                      C: "Air port",
                                                      D: "Dry port"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: " is known for:",
                                                    options: {
                                                      A: "Passenger only",
                                                      B: "Handling trade",
                                                      C: "Air travel",
                                                      D: "Railways"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Communication
                                                
                                                  {
                                                    question: "Mass communication includes:",
                                                    options: {
                                                      A: "Letters only",
                                                      B: "TV, radio, newspapers",
                                                      C: "Roads",
                                                      D: "Railways"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Internet is used for:",
                                                    options: {
                                                      A: "Transport",
                                                      B: "Communication",
                                                      C: "Mining",
                                                      D: "Farming"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // International Trade
                                                
                                                  {
                                                    question: "International trade means:",
                                                    options: {
                                                      A: "Trade within country",
                                                      B: "Trade between countries",
                                                      C: "Only local trade",
                                                      D: "No trade"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Balance of trade is:",
                                                    options: {
                                                      A: "Imports only",
                                                      B: "Exports only",
                                                      C: "Difference between exports and imports",
                                                      D: "None"
                                                    },
                                                    answer: "C"
                                                  },
                                                
                                                  // Tourism
                                                
                                                  {
                                                    question: "Tourism helps in:",
                                                    options: {
                                                      A: "Loss",
                                                      B: "Employment and income",
                                                      C: "No effect",
                                                      D: "Only travel"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // PYQ Style
                                                
                                                  {
                                                    question: "Which is the cheapest mode of transport?",
                                                    options: {
                                                      A: "Air",
                                                      B: "Road",
                                                      C: "Water",
                                                      D: "Rail"
                                                    },
                                                    answer: "C"
                                                  },
                                                  {
                                                    question: "Which transport is fastest?",
                                                    options: {
                                                      A: "Rail",
                                                      B: "Road",
                                                      C: "Air",
                                                      D: "Water"
                                                    },
                                                    answer: "C"
                                                  },
                                                
                                                  // Cause Effect
                                                
                                                  {
                                                    question: "Better transport leads to:",
                                                    options: {
                                                      A: "Less trade",
                                                      B: "Economic growth",
                                                      C: "Isolation",
                                                      D: "Less development"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Poor connectivity results in:",
                                                    options: {
                                                      A: "Growth",
                                                      B: "Backwardness",
                                                      C: "Development",
                                                      D: "Trade"
                                                    },
                                                    answer: "B"
                                                  },
                                                
                                                  // Extra Coverage
                                                
                                                  {
                                                    question: "Road density is highest in:",
                                                    options: {
                                                      A: "Mountains",
                                                      B: "Plains",
                                                      C: "Deserts",
                                                      D: "Forests"
                                                    },
                                                    answer: "B"
                                                  },
                                                  {
                                                    question: "Railways are affected by:",
                                                    options: {
                                                      A: "Flat land",
                                                      B: "Terrain and cost",
                                                      C: "Water only",
                                                      D: "Air only"
                                                    },
                                                    answer: "B"
                                                  }
                                                
                                                ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    
 /***********************
 SAFETY CHECK HELPERS
***********************/
const $ = (id) => document.getElementById(id);

function safe(el, html = "") {
  if (el) el.innerHTML = html;
}

/***********************
 QUIZ DATA (must exist)
***********************/
const quizData = {
  Maths: { RealNumbers: mathsLesson1, Polynomials: mathsLesson2, PairOfLinearEqueationsInTwoVariables: mathsLesson3, QuadraticEquations: mathsLesson4, ArthmaticProgressions: mathsLesson5, Triangles: mathsLesson6, CoordinateGeometry: mathsLesson7, IntroductionToTrigonometry: mathsLesson8, SomeApplicationsOfTrigonometry: mathsLesson9, Circles: mathsLesson10, AreasRelatedToCircles: mathsLesson11, SurfaceAreasAndVolumes: mathsLesson12, Statistics: mathsLesson13, Probability: mathsLesson14, },
  Hindi: { Lesson1: hindilesson1, Lesson2: hindilesson2, Lesson3: hindilesson3, Lesson4: hindilesson4, Lesson5: hindilesson5, Lesson6: hindilesson6, Lesson7: hindilesson7, Lesson8: hindilesson8, Lesson9: hindilesson9, Lesson10: hindilesson10, Lesson11: hindilesson11, Lesson12: hindilesson12, },
  PS:{ ChemicalReactionsAndEqueations:pschapter1, AcidsBasesAndSalts:chapter2, MetalsAndNonmetals:chapter3, CarbonAnditsCompounds:chapter4, LightReflectionandRefraction:chapter9, TheHumanEyeandtheColourfulWorld:chapter10, Electricity:chapter11, MagneticEffectsofElectricCurrent:chapter12, },
  NS:{ LifeProcesses:chapter5, ControlandCoordination:chapter6, HowdoOrganismsReproduce:chapter7, Heredity:chapter8, OurEnvironment:chapter13, },
  Social:{ Development:sociallesson1, SectorsoftheIndianEconomy:sociallesson2, MoneyandCredit:sociallesson3, GlobalisationandtheIndianEconomy:sociallesson4, ConsumerRights:sociallesson5, PowerSharing:sociallesson6, Federalism:sociallesson7, GenderReligionandCaste:sociallesson8, PoliticalParties:sociallesson9, OutcomesofDemocracy:sociallesson10,TheRiseofNationalisminEurope:historyLesson1,NatioalisminInida:historyLesson2 , TheMakingofaGlobalWorld:historyLesson3,TheAgeofIndustrialisation:historyLesson4,PrintCultureandtheModernWorld:historyLesson5,ResourcesandDevelopment:geographyLesson1,ForestandWildlifeResources:geographyLesson2,WaterResources:geographyLesson3,Agriculture:geographyLesson4,MineralsandEnergyResources:geographyLesson5,ManufacturingIndustries:geographyLesson6,LifelinesofNationalEconomy:geographyLesson7}
};

/***********************
 STATE
***********************/
let currentSubject = "";
let currentLesson = "";
let questions = [];
let index = 0;
let score = 0;

/***********************
 INIT
***********************/
function init() {
  safe($("welcome"), "🎓 Welcome 10th Class Students");
  safe($("dashboard"));
  safe($("quizArea"));
  safe($("topBar"));
}
init();

/***********************
 HOME
***********************/
function goHome() {
  init();
  currentSubject = "";
  currentLesson = "";
}

/***********************
 DASHBOARD NAV
***********************/
function openDashboard(section) {
  goHome();

  if (section === "quiz") showSubjects();

  if (section === "timetable") showTimetable();

  if (section === "formulas") {
    showFormulaSubjects();
  }
}

/***********************
 SHOW SUBJECTS
***********************/
function showSubjects() {
  const dash = $("dashboard");
  safe(dash);
  safe($("welcome"), "");

  Object.keys(quizData).forEach(sub => {
    const btn = document.createElement("button");
    btn.innerText = sub;

    btn.onclick = () => {
      currentSubject = sub;
      updateTopBar();
      showLessons(sub);
    };

    dash.appendChild(btn);
  });
}

/***********************
 SHOW LESSONS
***********************/
function showLessons(subject) {
  const dash = $("dashboard");
  safe(dash);

  const lessons = quizData[subject] || {};

  Object.keys(lessons).forEach(lesson => {
    const btn = document.createElement("button");
    btn.innerText = lesson;

    btn.onclick = () => {
      currentLesson = lesson;
      updateTopBar();
      startQuiz(subject, lesson);
    };

    dash.appendChild(btn);
  });
}

/***********************
 TOP BAR
***********************/
function updateTopBar() {
  const bar = $("topBar");
  if (!bar) return;

  bar.innerText =
    currentSubject && currentLesson
      ? `${currentSubject} | ${currentLesson}`
      : currentSubject;
}

/***********************
 START QUIZ
***********************/
function startQuiz(subject, lesson) {
  const data = quizData?.[subject]?.[lesson];


  if (!data) {
    alert("No quiz data found!");
    return;
  }

  questions = data.slice(0, 10);
  index = 0;
  score = 0;

  safe($("dashboard"));
  safe($("welcome"), "");

  showQuestion();
}

/***********************
 SHOW QUESTION
***********************/
function showQuestion() {
  const box = $("quizArea");
  safe(box);

  const q = questions[index];

  if (!q) return;

  let html = `<h2>${index + 1}. ${q.question}</h2>`;

  box.innerHTML = html;

  Object.entries(q.options).forEach(([key, val]) => {
    const btn = document.createElement("button");
    btn.innerText = `${key}: ${val}`;

    btn.onclick = () => checkAnswer(btn, key);

    box.appendChild(btn);
  });

  const fb = document.createElement("div");
  fb.id = "fb";
  fb.className = "feedback";
  box.appendChild(fb);
}

/***********************
 CHECK ANSWER
***********************/
function checkAnswer(btn, selected) {
  const correct = questions[index].answer;
  const buttons = document.querySelectorAll("#quizArea button");

  buttons.forEach(b => (b.disabled = true));

  const fb = $("fb");

  if (selected === correct) {
    btn.classList.add("correct");
    fb.innerText = "✔ Correct!";
    score++;
  } else {
    btn.classList.add("wrong");
    fb.innerText = "❌ Correct: " + correct;

    buttons.forEach(b => {
      if (b.innerText.startsWith(correct)) {
        b.classList.add("correct");
      }
    });
  }

  const next = document.createElement("button");
  next.innerText = "Next ➜";
  next.onclick = nextQuestion;

  $("quizArea").appendChild(next);
}

/***********************
 NEXT
***********************/
function nextQuestion() {
  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

/***********************
 RESULT
***********************/
function showResult() {
  let msg =
    score >= 9 ? "🔥 Excellent!" :
    score >= 7 ? "👍 Very Good!" :
    score >= 5 ? "🙂 Good!" :
    "📚 Practice More!";

  safe($("quizArea"), `
    <h2>Quiz Finished</h2>
    <p>Score: ${score}/${questions.length}</p>
    <h3>${msg}</h3>

    <button onclick="restartQuiz()">🔁 Restart</button>
    <button onclick="showSubjects()">🏠 Subjects</button>
  `);
}

/***********************
 RESTART
***********************/
function restartQuiz() {
  startQuiz(currentSubject, currentLesson);
}

/***********************
 TIMETABLE (SAFE)
***********************/
function showTimetable() {
  const dash = $("dashboard");
  safe(dash);

  const subjects = ["Telugu","Hindi","English","Maths","PS","NS","Social"];

  dash.innerHTML = "<h2>Select Subjects</h2>";

  subjects.forEach(s => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${s}"> ${s}`;
    dash.appendChild(label);
    dash.appendChild(document.createElement("br"));
  });

  const btn = document.createElement("button");
  btn.innerText = "Generate Timetable";
  btn.onclick = generateTimetable;

  dash.appendChild(btn);
}

/***********************
 TIMETABLE GENERATE
***********************/
function generateTimetable() {
  const selected = [...document.querySelectorAll("input:checked")]
    .map(c => c.value);

  if (!selected.length) {
    alert("Select subjects");
    return;
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const slots = [
    "5:00 - 6:00",
    "6:00 - 7:00",
    "6:30 - 7:30",
    "8:30 - 10:00"
  ];

  let html = "<h2>📅 Weekly Study Plan</h2>";

  let subjectIndex = 0;

  days.forEach(day => {
    html += `<div style="margin:15px;padding:10px;background:#fff;border-radius:10px;">
      <h3>${day}</h3>`;

    slots.forEach(slot => {
      let subject = selected[subjectIndex % selected.length];
      subjectIndex++;

      html += `
        <p>
          <b>${slot}</b> → ${subject}
        </p>
      `;
    });

    html += `</div>`;
  });

  document.getElementById("dashboard").innerHTML = html;
}

const formulaData = {
  Maths: {
     realNumbersFormulas : [

      {
        topic: "Euclid Division Lemma",
        formula: "a = bq + r , 0 ≤ r < b",
        example1: "17 = 5×3 + 2",
        example2: "29 = 4×7 + 1"
      },
      
      {
        topic: "Euclid Division Algorithm (HCF)",
        formula: "Repeat division until remainder = 0 → last divisor = HCF",
        example1: "HCF(36,24) → 36=24×1+12, 24=12×2+0 → HCF=12",
        example2: "HCF(48,18) → 48=18×2+12, 18=12×1+6, 12=6×2+0 → HCF=6"
      },
      
      {
        topic: "Fundamental Theorem of Arithmetic",
        formula: "Every number = product of prime numbers",
        example1: "60 = 2² × 3 × 5",
        example2: "84 = 2² × 3 × 7"
      },
      
      {
        topic: "LCM and HCF Relation",
        formula: "LCM × HCF = Product of two numbers",
        example1: "12,18 → HCF=6, LCM=36 → 6×36=12×18",
        example2: "8,20 → HCF=4, LCM=40 → 4×40=8×20"
      },
      
      {
        topic: "Prime Factorization Method",
        formula: "HCF = common lowest powers, LCM = highest powers",
        example1: "12=2²×3, 18=2×3² → HCF=6, LCM=36",
        example2: "20=2²×5, 30=2×3×5 → HCF=10, LCM=60"
      },
      
      {
        topic: "Decimal Expansion (Rational Numbers)",
        formula: "Denominator only 2 and/or 5 → terminating",
        example1: "1/2 = 0.5 (terminating)",
        example2: "1/3 = 0.333... (non-terminating recurring)"
      },
      
      {
        topic: "Condition for Terminating Decimal",
        formula: "Denominator = 2^m × 5^n",
        example1: "5/8 → 8=2³ → terminating",
        example2: "7/20 → 20=2²×5 → terminating"
      },
      
      {
        topic: "Rational Numbers",
        formula: "p/q where q ≠ 0",
        example1: "3/4, -5/2",
        example2: "5/0 (not allowed)"
      },
      
      {
        topic: "Irrational Numbers",
        formula: "Cannot be written as p/q",
        example1: "√2, √3",
        example2: "π"
      },
      
      {
        topic: "Real Numbers",
        formula: "Rational + Irrational",
        example1: "2, 1/3",
        example2: "√5, π"
      },
      
      {
        topic: "Co-prime Numbers",
        formula: "HCF = 1",
        example1: "8 and 15 → HCF=1",
        example2: "14 and 21 → HCF=7 (not co-prime)"
      }
      
      ],
      
       polynomialsFormulas : [

        {
          topic: "Polynomial General Form",
          formula: "p(x) = a_n x^n + a_{n-1}x^{n-1} + ... + a_0",
          example1: "2x^3 + 3x^2 + x + 5",
          example2: "x^2 - 4x + 4"
        },
        
        {
          topic: "Degree of Polynomial",
          formula: "Highest power of x",
          example1: "2x^3 + x → degree = 3",
          example2: "5 → degree = 0"
        },
        
        {
          topic: "Types of Polynomials",
          formula: "Based on degree",
          example1: "ax + b → Linear",
          example2: "ax^2 + bx + c → Quadratic"
        },
        
        {
          topic: "Zeroes of Polynomial",
          formula: "p(x) = 0",
          example1: "x - 2 = 0 → x = 2",
          example2: "x^2 - 4 = 0 → x = ±2"
        },
        
        {
          topic: "Number of Zeroes",
          formula: "Number of zeroes ≤ degree",
          example1: "Degree 1 → max 1 zero",
          example2: "Degree 2 → max 2 zeroes"
        },
        
        {
          topic: "Graph Relation",
          formula: "Zeroes = x-intercepts",
          example1: "Cuts x-axis at 2 points → 2 zeroes",
          example2: "Touches once → 1 zero"
        },
        
        {
          topic: "Linear Polynomial Zero",
          formula: "x = -b/a",
          example1: "2x+4=0 → x=-2",
          example2: "3x-6=0 → x=2"
        },
        
        {
          topic: "Quadratic Polynomial Form",
          formula: "ax^2 + bx + c",
          example1: "x^2 - 5x + 6",
          example2: "2x^2 + 3x + 1"
        },
        
        {
          topic: "Sum of Zeroes (Quadratic)",
          formula: "α + β = -b/a",
          example1: "x^2 - 5x + 6 → sum = 5",
          example2: "2x^2 + 3x + 1 → sum = -3/2"
        },
        
        {
          topic: "Product of Zeroes (Quadratic)",
          formula: "αβ = c/a",
          example1: "x^2 - 5x + 6 → product = 6",
          example2: "2x^2 + 3x + 1 → product = 1/2"
        },
        
        {
          topic: "Forming Quadratic from Roots",
          formula: "x^2 - (sum)x + product = 0",
          example1: "sum=5, product=6 → x^2-5x+6",
          example2: "sum=3, product=2 → x^2-3x+2"
        },
        
        {
          topic: "Cubic Polynomial Form",
          formula: "ax^3 + bx^2 + cx + d",
          example1: "x^3 - 6x^2 + 11x - 6",
          example2: "2x^3 + x^2 - x - 1"
        },
        
        {
          topic: "Sum of Zeroes (Cubic)",
          formula: "α + β + γ = -b/a",
          example1: "x^3 - 6x^2 +... → sum = 6",
          example2: "2x^3 + x^2... → sum = -1/2"
        },
        
        {
          topic: "Sum of Product of Zeroes",
          formula: "αβ + βγ + γα = c/a",
          example1: "x^3 - 6x^2 + 11x → value = 11",
          example2: "2x^3 + x^2 - x → value = -1/2"
        },
        
        {
          topic: "Product of Zeroes (Cubic)",
          formula: "αβγ = -d/a",
          example1: "x^3 - 6x^2 + 11x - 6 → product = 6",
          example2: "2x^3 + x^2 - x -1 → product = 1/2"
        },
        
        {
          topic: "Division Algorithm",
          formula: "p(x) = g(x) × q(x) + r(x)",
          example1: "x^2+3x+2 ÷ (x+1)",
          example2: "2x^3+x ÷ x"
        },
        
        {
          topic: "Condition for Remainder",
          formula: "Degree of r(x) < degree of g(x)",
          example1: "Divide by linear → remainder constant",
          example2: "Divide by quadratic → remainder linear"
        },
        
        {
          topic: "Remainder Theorem",
          formula: "p(a) = remainder when divided by (x-a)",
          example1: "p(2) gives remainder of (x-2)",
          example2: "p(-1) gives remainder of (x+1)"
        },
        
        {
          topic: "Factor Theorem",
          formula: "If p(a)=0 → (x-a) is factor",
          example1: "p(2)=0 → (x-2) factor",
          example2: "p(-3)=0 → (x+3) factor"
        },
        
        {
          topic: "Factorization",
          formula: "Express polynomial as product of factors",
          example1: "x^2-5x+6=(x-2)(x-3)",
          example2: "x^2-9=(x-3)(x+3)"
        },
        
        {
          topic: "Algebraic Identities",
          formula: "(a+b)^2 = a^2+2ab+b^2",
          example1: "(x+2)^2 = x^2+4x+4",
          example2: "(3x+1)^2 = 9x^2+6x+1"
        },
        
        {
          topic: "Identity 2",
          formula: "(a-b)^2 = a^2-2ab+b^2",
          example1: "(x-3)^2 = x^2-6x+9",
          example2: "(2x-1)^2 = 4x^2-4x+1"
        },
        
        {
          topic: "Identity 3",
          formula: "a^2 - b^2 = (a-b)(a+b)",
          example1: "x^2-9=(x-3)(x+3)",
          example2: "4x^2-1=(2x-1)(2x+1)"
        },
        
        {
          topic: "Identity 4",
          formula: "(a+b)^3 = a^3+3a^2b+3ab^2+b^3",
          example1: "(x+1)^3",
          example2: "(2x+1)^3"
        },
        
        {
          topic: "Identity 5",
          formula: "(a-b)^3 = a^3-3a^2b+3ab^2-b^3",
          example1: "(x-1)^3",
          example2: "(2x-1)^3"
        },
        
        {
          topic: "Identity 6",
          formula: "a^3+b^3=(a+b)(a^2-ab+b^2)",
          example1: "x^3+8",
          example2: "8x^3+1"
        },
        
        {
          topic: "Identity 7",
          formula: "a^3-b^3=(a-b)(a^2+ab+b^2)",
          example1: "x^3-8",
          example2: "27x^3-1"
        }
        
        ],
        
         linearEquationsFormulas : [

          {
            topic: "General Form of Linear Equation",
            formula: "ax + by + c = 0",
            example1: "2x + 3y - 6 = 0",
            example2: "x - y + 4 = 0"
          },
          
          {
            topic: "Pair of Linear Equations",
            formula: "a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0",
            example1: "2x+3y=6 and x-y=1",
            example2: "3x+2y=5 and 2x-y=4"
          },
          
          {
            topic: "Solution of Equations",
            formula: "Values of x and y satisfying both equations",
            example1: "x=2, y=1",
            example2: "x=3, y=2"
          },
          
          {
            topic: "Graphical Method",
            formula: "Plot both equations as lines → intersection point is solution",
            example1: "Two lines intersect → one solution",
            example2: "Parallel lines → no solution"
          },
          
          {
            topic: "Consistent System",
            formula: "System has at least one solution",
            example1: "Intersecting lines",
            example2: "Coincident lines"
          },
          
          {
            topic: "Inconsistent System",
            formula: "No solution",
            example1: "Parallel lines",
            example2: "Same slope, different intercept"
          },
          
          {
            topic: "Unique Solution Condition",
            formula: "a1/a2 ≠ b1/b2",
            example1: "2x+3y=6 and x-y=1",
            example2: "3x+2y=5 and 2x-y=4"
          },
          
          {
            topic: "No Solution Condition",
            formula: "a1/a2 = b1/b2 ≠ c1/c2",
            example1: "2x+4y=6 and x+2y=4",
            example2: "3x+6y=9 and x+2y=5"
          },
          
          {
            topic: "Infinite Solutions Condition",
            formula: "a1/a2 = b1/b2 = c1/c2",
            example1: "2x+4y=6 and x+2y=3",
            example2: "3x+6y=9 and x+2y=3"
          },
          
          {
            topic: "Substitution Method",
            formula: "Solve one equation for one variable and substitute",
            example1: "x=y+1 → substitute in second equation",
            example2: "y=2x → substitute"
          },
          
          {
            topic: "Elimination Method",
            formula: "Make coefficients equal and eliminate one variable",
            example1: "Add/subtract equations",
            example2: "Multiply then subtract"
          },
          
          {
            topic: "Cross Multiplication Method",
            formula: "x = (b1c2 - b2c1)/(a1b2 - a2b1), y = (c1a2 - c2a1)/(a1b2 - a2b1)",
            example1: "Use determinant formula",
            example2: "Direct substitution avoided"
          },
          
          {
            topic: "Determinant (Denominator)",
            formula: "a1b2 - a2b1",
            example1: "If ≠0 → unique solution",
            example2: "If =0 → no or infinite solution"
          },
          
          {
            topic: "Graph Interpretation",
            formula: "Intersect → one, Parallel → none, Coincident → infinite",
            example1: "Crossing lines",
            example2: "Same line"
          },
          
          {
            topic: "Linear Equation Graph",
            formula: "Straight line",
            example1: "y=2x+1",
            example2: "y=-x+3"
          },
          
          {
            topic: "Slope of Line",
            formula: "y = mx + c → m = slope",
            example1: "y=2x+1 → slope=2",
            example2: "y=-x+3 → slope=-1"
          },
          
          {
            topic: "Parallel Lines Condition",
            formula: "Same slope, different intercept",
            example1: "y=2x+1 and y=2x+3",
            example2: "y=-x+1 and y=-x+5"
          },
          
          {
            topic: "Coincident Lines Condition",
            formula: "Same slope, same intercept",
            example1: "y=2x+1 and 2y=4x+2",
            example2: "y=-x+3 and 2y=-2x+6"
          },
          
          {
            topic: "Word Problems",
            formula: "Convert problem into two equations",
            example1: "Sum and difference problems",
            example2: "Age problems"
          },
          
          {
            topic: "Verification of Solution",
            formula: "Substitute x,y in both equations",
            example1: "Check LHS=RHS",
            example2: "Confirm correctness"
          }
          
          ],
         quadraticEquationsFormulas : [

            {
              topic: "General Form of Quadratic Equation",
              formula: "ax^2 + bx + c = 0 (a ≠ 0)",
              example1: "x^2 - 5x + 6 = 0",
              example2: "2x^2 + 3x + 1 = 0"
            },
            
            {
              topic: "Standard Form Identification",
              formula: "Compare with ax^2 + bx + c",
              example1: "3x^2 + 2x - 1 → a=3,b=2,c=-1",
              example2: "x^2 - 9 = 0 → a=1,b=0,c=-9"
            },
            
            {
              topic: "Roots of Equation",
              formula: "Solutions of ax^2+bx+c=0",
              example1: "x=2,3",
              example2: "x=-1,-2"
            },
            
            {
              topic: "Factorization Method",
              formula: "Split middle term and factor",
              example1: "x^2-5x+6=(x-2)(x-3)",
              example2: "x^2+7x+10=(x+5)(x+2)"
            },
            
            {
              topic: "Quadratic Formula",
              formula: "x = (-b ± √(b^2 - 4ac)) / 2a",
              example1: "Solve 2x^2+3x+1",
              example2: "Solve x^2-4x+3"
            },
            
            {
              topic: "Discriminant",
              formula: "D = b^2 - 4ac",
              example1: "x^2-5x+6 → D=25-24=1",
              example2: "x^2+4x+5 → D=16-20=-4"
            },
            
            {
              topic: "Nature of Roots (D > 0)",
              formula: "Two distinct real roots",
              example1: "x^2-5x+6",
              example2: "x^2-3x-4"
            },
            
            {
              topic: "Nature of Roots (D = 0)",
              formula: "Real and equal roots",
              example1: "x^2-4x+4",
              example2: "x^2+6x+9"
            },
            
            {
              topic: "Nature of Roots (D < 0)",
              formula: "No real roots",
              example1: "x^2+4x+5",
              example2: "x^2+2x+10"
            },
            
            {
              topic: "Sum of Roots",
              formula: "α + β = -b/a",
              example1: "x^2-5x+6 → sum=5",
              example2: "2x^2+3x+1 → sum=-3/2"
            },
            
            {
              topic: "Product of Roots",
              formula: "αβ = c/a",
              example1: "x^2-5x+6 → product=6",
              example2: "2x^2+3x+1 → product=1/2"
            },
            
            {
              topic: "Forming Equation from Roots",
              formula: "x^2 - (sum)x + product = 0",
              example1: "Roots 2,3 → x^2-5x+6",
              example2: "Roots -1,-2 → x^2+3x+2"
            },
            
            {
              topic: "Roots from Given Conditions",
              formula: "Use sum and product relations",
              example1: "Sum=4, product=3 → x^2-4x+3",
              example2: "Sum=-2, product=1 → x^2+2x+1"
            },
            
            {
              topic: "Perfect Square Condition",
              formula: "D = 0",
              example1: "x^2-6x+9",
              example2: "x^2+10x+25"
            },
            
            {
              topic: "Rational Roots Condition",
              formula: "D is perfect square",
              example1: "x^2-5x+6 → D=1",
              example2: "x^2-7x+10 → D=9"
            },
            
            {
              topic: "Irrational Roots Condition",
              formula: "D not perfect square",
              example1: "x^2-2x-1",
              example2: "x^2+3x+1"
            },
            
            {
              topic: "Graph of Quadratic",
              formula: "Parabola",
              example1: "Opens upward if a>0",
              example2: "Opens downward if a<0"
            },
            
            {
              topic: "Axis of Symmetry",
              formula: "x = -b / 2a",
              example1: "x^2-4x+3 → x=2",
              example2: "2x^2+4x+1 → x=-1"
            },
            
            {
              topic: "Vertex of Parabola",
              formula: "(-b/2a , f(-b/2a))",
              example1: "x^2-4x+3 → vertex (2,-1)",
              example2: "x^2+2x+1 → vertex (-1,0)"
            },
            
            {
              topic: "Word Problems",
              formula: "Convert to quadratic equation",
              example1: "Product problems",
              example2: "Area problems"
            },
            
            {
              topic: "Verification of Roots",
              formula: "Substitute in equation",
              example1: "Check LHS=0",
              example2: "Confirm solution"
            }
            
            ],
             arithmeticProgressionsFormulas : [

              {
                topic: "Arithmetic Progression (AP)",
                formula: "Sequence with constant difference",
                example1: "2, 4, 6, 8,...",
                example2: "5, 3, 1, -1,..."
              },
              
              {
                topic: "First Term",
                formula: "a = first term",
                example1: "2,4,6 → a=2",
                example2: "5,3,1 → a=5"
              },
              
              {
                topic: "Common Difference",
                formula: "d = a₂ - a₁",
                example1: "2,4,6 → d=2",
                example2: "5,3,1 → d=-2"
              },
              
              {
                topic: "nth Term (General Term)",
                formula: "aₙ = a + (n-1)d",
                example1: "a=2,d=2,n=5 → a₅=10",
                example2: "a=5,d=-2,n=4 → a₄=-1"
              },
              
              {
                topic: "Finding Term Position",
                formula: "n = (aₙ - a)/d + 1",
                example1: "Find n for term 10 in 2,4,6 → n=5",
                example2: "Find n for term -1 in 5,3,1 → n=4"
              },
              
              {
                topic: "Sum of n Terms",
                formula: "Sₙ = n/2 [2a + (n-1)d]",
                example1: "a=2,d=2,n=5 → S₅=30",
                example2: "a=5,d=-2,n=4 → S₄=8"
              },
              
              {
                topic: "Alternative Sum Formula",
                formula: "Sₙ = n/2 (a + l)",
                example1: "a=2,l=10,n=5 → S₅=30",
                example2: "a=5,l=-1,n=4 → S₄=8"
              },
              
              {
                topic: "Last Term",
                formula: "l = a + (n-1)d",
                example1: "a=2,d=2,n=5 → l=10",
                example2: "a=5,d=-2,n=4 → l=-1"
              },
              
              {
                topic: "Check AP",
                formula: "If differences equal → AP",
                example1: "2,4,6 → AP",
                example2: "2,4,7 → not AP"
              },
              
              {
                topic: "Find Missing Term",
                formula: "Use d consistency",
                example1: "2,?,6 → 4",
                example2: "5,?,1 → 3"
              },
              
              {
                topic: "Find nth Term without Full List",
                formula: "Use aₙ formula directly",
                example1: "Find 20th term of 2,4 → 40",
                example2: "Find 10th term of 5,3 → -13"
              },
              
              {
                topic: "Sum of First n Natural Numbers",
                formula: "n(n+1)/2",
                example1: "n=5 → 15",
                example2: "n=10 → 55"
              },
              
              {
                topic: "Sum of Even Numbers",
                formula: "n(n+1)",
                example1: "n=5 → 30",
                example2: "n=3 → 12"
              },
              
              {
                topic: "Sum of Odd Numbers",
                formula: "n²",
                example1: "n=5 → 25",
                example2: "n=4 → 16"
              },
              
              {
                topic: "Arithmetic Mean (AM)",
                formula: "AM = (a + b)/2",
                example1: "2,6 → AM=4",
                example2: "5,9 → AM=7"
              },
              
              {
                topic: "Insert Arithmetic Means",
                formula: "Find d = (b-a)/(n+1)",
                example1: "Between 2 and 10 → 4,6,8",
                example2: "Between 3 and 15 → 6,9,12"
              },
              
              {
                topic: "Word Problems",
                formula: "Convert to AP and apply formulas",
                example1: "Daily savings increase problem",
                example2: "Row/seat arrangement problem"
              },
              
              {
                topic: "Increasing AP",
                formula: "d > 0",
                example1: "2,4,6,...",
                example2: "1,3,5,..."
              },
              
              {
                topic: "Decreasing AP",
                formula: "d < 0",
                example1: "5,3,1,...",
                example2: "10,7,4,..."
              },
              
              {
                topic: "Constant AP",
                formula: "d = 0",
                example1: "3,3,3,...",
                example2: "5,5,5,..."
              }
              
              ],
               trianglesFormulas : [

                {
                  topic: "Similar Triangles",
                  formula: "Same shape, sides proportional, angles equal",
                  example1: "Two triangles with equal angles",
                  example2: "Scaled triangle (double size)"
                },
                
                {
                  topic: "AA (Angle-Angle) Similarity",
                  formula: "If two angles equal → triangles similar",
                  example1: "∠A=∠D, ∠B=∠E",
                  example2: "Right triangles with same acute angle"
                },
                
                {
                  topic: "SSS Similarity",
                  formula: "Corresponding sides proportional",
                  example1: "2/4 = 3/6 = 5/10",
                  example2: "3/6 = 4/8 = 5/10"
                },
                
                {
                  topic: "SAS Similarity",
                  formula: "Two sides proportional + included angle equal",
                  example1: "Sides 2/4 and 3/6 with equal angle",
                  example2: "Sides 5/10 and 6/12 with equal angle"
                },
                
                {
                  topic: "Basic Proportionality Theorem (BPT)",
                  formula: "Parallel line divides sides in same ratio",
                  example1: "AD/DB = AE/EC",
                  example2: "Line parallel to base in triangle"
                },
                
                {
                  topic: "Converse of BPT",
                  formula: "If sides divided proportionally → line is parallel",
                  example1: "AD/DB = AE/EC → DE ∥ BC",
                  example2: "Check ratios to prove parallel"
                },
                
                {
                  topic: "Ratio of Areas of Similar Triangles",
                  formula: "(Area1/Area2) = (side1/side2)^2",
                  example1: "Side ratio 2:1 → area 4:1",
                  example2: "Side ratio 3:2 → area 9:4"
                },
                
                {
                  topic: "Pythagoras Theorem",
                  formula: "a^2 + b^2 = c^2",
                  example1: "3,4,5 triangle → 9+16=25",
                  example2: "5,12,13 → 25+144=169"
                },
                
                {
                  topic: "Converse of Pythagoras",
                  formula: "If a^2 + b^2 = c^2 → right triangle",
                  example1: "6,8,10 → right triangle",
                  example2: "7,24,25 → right triangle"
                },
                
                {
                  topic: "Altitude Theorem",
                  formula: "Altitude divides triangle into similar triangles",
                  example1: "Right triangle altitude to hypotenuse",
                  example2: "Creates 2 smaller similar triangles"
                },
                
                {
                  topic: "Median Theorem",
                  formula: "Median divides triangle into equal areas",
                  example1: "Median from vertex",
                  example2: "Area split equally"
                },
                
                {
                  topic: "Triangle Area Ratio",
                  formula: "Same height → areas proportional to bases",
                  example1: "Base ratio 2:1 → area 2:1",
                  example2: "Base ratio 3:2 → area 3:2"
                },
                
                {
                  topic: "Triangle Area (Basic)",
                  formula: "Area = 1/2 × base × height",
                  example1: "Base=4, height=5 → area=10",
                  example2: "Base=6, height=3 → area=9"
                },
                
                {
                  topic: "Equilateral Triangle Area",
                  formula: "(√3/4) × a^2",
                  example1: "a=2 → area=√3",
                  example2: "a=4 → area=4√3"
                },
                
                {
                  topic: "Similar Triangles Property",
                  formula: "Corresponding angles equal, sides proportional",
                  example1: "Triangle scaled by 2",
                  example2: "Triangle scaled by 3"
                },
                
                {
                  topic: "Height Ratio in Similar Triangles",
                  formula: "h1/h2 = side1/side2",
                  example1: "Side ratio 2:1 → height 2:1",
                  example2: "Side ratio 3:2 → height 3:2"
                },
                
                {
                  topic: "Perimeter Ratio",
                  formula: "Perimeter ratio = side ratio",
                  example1: "Side 2:1 → perimeter 2:1",
                  example2: "Side 3:2 → perimeter 3:2"
                },
                
                {
                  topic: "Right Triangle Properties",
                  formula: "One angle = 90°",
                  example1: "Use Pythagoras",
                  example2: "Use similarity"
                },
                
                {
                  topic: "Proof Problems",
                  formula: "Use similarity or ratios",
                  example1: "Prove two triangles similar",
                  example2: "Find missing length using ratios"
                },
                
                {
                  topic: "Word Problems",
                  formula: "Apply similarity or Pythagoras",
                  example1: "Height of tower using shadow",
                  example2: "Distance problems"
                }
                
                ],
                coordinateGeometryFormulas : [

                  {
                    topic: "Cartesian Plane",
                    formula: "Plane with X-axis and Y-axis",
                    example1: "Point (2,3)",
                    example2: "Point (-1,4)"
                  },
                  
                  {
                    topic: "Coordinates of a Point",
                    formula: "(x, y)",
                    example1: "(3,5)",
                    example2: "(-2,-4)"
                  },
                  
                  {
                    topic: "Origin",
                    formula: "(0,0)",
                    example1: "Intersection of axes",
                    example2: "Center point"
                  },
                  
                  {
                    topic: "Quadrants",
                    formula: "I(+,+), II(-,+), III(-,-), IV(+,-)",
                    example1: "(2,3) → I quadrant",
                    example2: "(-2,-3) → III quadrant"
                  },
                  
                  {
                    topic: "Distance Formula",
                    formula: "√[(x₂ - x₁)^2 + (y₂ - y₁)^2]",
                    example1: "(1,2) to (4,6) → √25 = 5",
                    example2: "(0,0) to (3,4) → 5"
                  },
                  
                  {
                    topic: "Distance from Origin",
                    formula: "√(x^2 + y^2)",
                    example1: "(3,4) → 5",
                    example2: "(5,12) → 13"
                  },
                  
                  {
                    topic: "Midpoint Formula",
                    formula: "((x₁ + x₂)/2 , (y₁ + y₂)/2)",
                    example1: "(2,4),(6,8) → (4,6)",
                    example2: "(1,1),(3,3) → (2,2)"
                  },
                  
                  {
                    topic: "Section Formula (Internal)",
                    formula: "[(mx₂ + nx₁)/(m+n) , (my₂ + ny₁)/(m+n)]",
                    example1: "Ratio 1:1 → midpoint",
                    example2: "Ratio 2:1 → weighted average"
                  },
                  
                  {
                    topic: "Section Formula (External)",
                    formula: "[(mx₂ - nx₁)/(m-n) , (my₂ - ny₁)/(m-n)]",
                    example1: "External division of line",
                    example2: "Outside segment point"
                  },
                  
                  {
                    topic: "Collinearity Condition",
                    formula: "Area of triangle = 0",
                    example1: "Points on same line",
                    example2: "Use determinant method"
                  },
                  
                  {
                    topic: "Area of Triangle",
                    formula: "1/2 |x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|",
                    example1: "(0,0),(4,0),(0,3) → area=6",
                    example2: "(1,2),(3,4),(5,6) → area=0"
                  },
                  
                  {
                    topic: "Collinear Points",
                    formula: "If area = 0 → collinear",
                    example1: "(1,2),(3,4),(5,6)",
                    example2: "Points in straight line"
                  },
                  
                  {
                    topic: "Perimeter of Triangle",
                    formula: "Sum of all sides using distance formula",
                    example1: "Find 3 side lengths",
                    example2: "Add distances"
                  },
                  
                  {
                    topic: "Centroid of Triangle",
                    formula: "((x1+x2+x3)/3 , (y1+y2+y3)/3)",
                    example1: "(0,0),(6,0),(0,6) → (2,2)",
                    example2: "(1,2),(3,4),(5,6) → (3,4)"
                  },
                  
                  {
                    topic: "Equal Distances",
                    formula: "Use distance formula",
                    example1: "Check triangle type",
                    example2: "Verify isosceles"
                  },
                  
                  {
                    topic: "Right Triangle Check",
                    formula: "Use Pythagoras via distance",
                    example1: "Check a²+b²=c²",
                    example2: "Verify right angle"
                  },
                  
                  {
                    topic: "Isosceles Triangle Check",
                    formula: "Two sides equal",
                    example1: "AB = AC",
                    example2: "Use distance formula"
                  },
                  
                  {
                    topic: "Equilateral Triangle Check",
                    formula: "All sides equal",
                    example1: "AB = BC = CA",
                    example2: "Use distance formula"
                  },
                  
                  {
                    topic: "Reflection of Point",
                    formula: "(x,y) → (-x,y) or (x,-y)",
                    example1: "Across Y-axis → (-x,y)",
                    example2: "Across X-axis → (x,-y)"
                  },
                  
                  {
                    topic: "Word Problems",
                    formula: "Apply distance/section formulas",
                    example1: "Find midpoint of path",
                    example2: "Find position of object"
                  }
                  
                  ],
                   trigonometryFormulas : [

                    {
                      topic: "Trigonometric Ratios",
                      formula: "sinθ = Opp/Hyp, cosθ = Adj/Hyp, tanθ = Opp/Adj",
                      example1: "Opp=3, Adj=4, Hyp=5 → sin=3/5",
                      example2: "Opp=5, Adj=12, Hyp=13 → cos=12/13"
                    },
                    
                    {
                      topic: "Reciprocal Ratios",
                      formula: "cosecθ=1/sinθ, secθ=1/cosθ, cotθ=1/tanθ",
                      example1: "sin=1/2 → cosec=2",
                      example2: "tan=1 → cot=1"
                    },
                    
                    {
                      topic: "Basic Identities",
                      formula: "sin^2θ + cos^2θ = 1",
                      example1: "sin=3/5, cos=4/5 → 9/25+16/25=1",
                      example2: "sin=5/13, cos=12/13 → 25/169+144/169=1"
                    },
                    
                    {
                      topic: "Tan Identity",
                      formula: "1 + tan^2θ = sec^2θ",
                      example1: "tan=3/4 → sec=5/4",
                      example2: "tan=5/12 → sec=13/12"
                    },
                    
                    {
                      topic: "Cot Identity",
                      formula: "1 + cot^2θ = cosec^2θ",
                      example1: "cot=4/3 → cosec=5/3",
                      example2: "cot=12/5 → cosec=13/5"
                    },
                    
                    {
                      topic: "Ratio Relations",
                      formula: "tanθ = sinθ / cosθ",
                      example1: "sin=3/5, cos=4/5 → tan=3/4",
                      example2: "sin=5/13, cos=12/13 → tan=5/12"
                    },
                    
                    {
                      topic: "Cot Relation",
                      formula: "cotθ = cosθ / sinθ",
                      example1: "cos=4/5, sin=3/5 → cot=4/3",
                      example2: "cos=12/13, sin=5/13 → cot=12/5"
                    },
                    
                    {
                      topic: "Values at 0°",
                      formula: "sin0=0, cos0=1, tan0=0",
                      example1: "sin0=0",
                      example2: "cos0=1"
                    },
                    
                    {
                      topic: "Values at 30°",
                      formula: "sin30=1/2, cos30=√3/2, tan30=1/√3",
                      example1: "sin30=0.5",
                      example2: "tan30≈0.577"
                    },
                    
                    {
                      topic: "Values at 45°",
                      formula: "sin45=1/√2, cos45=1/√2, tan45=1",
                      example1: "tan45=1",
                      example2: "sin45≈0.707"
                    },
                    
                    {
                      topic: "Values at 60°",
                      formula: "sin60=√3/2, cos60=1/2, tan60=√3",
                      example1: "tan60≈1.732",
                      example2: "cos60=0.5"
                    },
                    
                    {
                      topic: "Values at 90°",
                      formula: "sin90=1, cos90=0, tan90=undefined",
                      example1: "sin90=1",
                      example2: "tan90 not defined"
                    },
                    
                    {
                      topic: "Complementary Angles",
                      formula: "sin(90°-θ)=cosθ, cos(90°-θ)=sinθ",
                      example1: "sin60=cos30",
                      example2: "cos45=sin45"
                    },
                    
                    {
                      topic: "Complementary (tan/cot)",
                      formula: "tan(90°-θ)=cotθ, cot(90°-θ)=tanθ",
                      example1: "tan60=cot30",
                      example2: "tan45=cot45"
                    },
                    
                    {
                      topic: "Sign of Ratios",
                      formula: "All positive in first quadrant",
                      example1: "θ<90 → all positive",
                      example2: "Used in advanced problems"
                    },
                    
                    {
                      topic: "Trigonometric Table Usage",
                      formula: "Use standard values",
                      example1: "Find sin60",
                      example2: "Find cos30"
                    },
                    
                    {
                      topic: "Simplification Problems",
                      formula: "Use identities to simplify",
                      example1: "(sin^2θ + cos^2θ)=1",
                      example2: "(1+tan^2θ)=sec^2θ"
                    },
                    
                    {
                      topic: "Proof of Identities",
                      formula: "Convert one side into another",
                      example1: "Start from LHS",
                      example2: "Use identities stepwise"
                    },
                    
                    {
                      topic: "Trigonometric Expressions",
                      formula: "Combine ratios carefully",
                      example1: "sin/cos → tan",
                      example2: "cos/sin → cot"
                    },
                    
                    {
                      topic: "Word Problems",
                      formula: "Apply ratios in right triangle",
                      example1: "Find height",
                      example2: "Find distance"
                    }
                    
                    ],
                     applicationsOfTrigonometryFormulas : [

                      {
                        topic: "Line of Sight",
                        formula: "Straight line from eye to object",
                        example1: "Person looking at top of tower",
                        example2: "Observer looking at plane"
                      },
                      
                      {
                        topic: "Horizontal Line",
                        formula: "Line parallel to ground",
                        example1: "Eye level line",
                        example2: "Ground reference line"
                      },
                      
                      {
                        topic: "Angle of Elevation",
                        formula: "Angle between horizontal line and line of sight (upward)",
                        example1: "Looking at top of building",
                        example2: "Looking at mountain peak"
                      },
                      
                      {
                        topic: "Angle of Depression",
                        formula: "Angle between horizontal line and line of sight (downward)",
                        example1: "Looking down from tower",
                        example2: "Looking down from bridge"
                      },
                      
                      {
                        topic: "Right Triangle Formation",
                        formula: "Height, base, hypotenuse form right triangle",
                        example1: "Tower and shadow",
                        example2: "Tree and observer"
                      },
                      
                      {
                        topic: "Using tanθ",
                        formula: "tanθ = height / base",
                        example1: "tan30 = h/d → h = d/√3",
                        example2: "tan45 = h/d → h = d"
                      },
                      
                      {
                        topic: "Using sinθ",
                        formula: "sinθ = height / hypotenuse",
                        example1: "sin30 = h/hyp",
                        example2: "sin60 = √3/2"
                      },
                      
                      {
                        topic: "Using cosθ",
                        formula: "cosθ = base / hypotenuse",
                        example1: "cos60 = base/hyp",
                        example2: "cos30 = √3/2"
                      },
                      
                      {
                        topic: "Height Formula",
                        formula: "height = base × tanθ",
                        example1: "d=10, θ=45° → h=10",
                        example2: "d=10, θ=30° → h≈5.77"
                      },
                      
                      {
                        topic: "Distance Formula",
                        formula: "base = height / tanθ",
                        example1: "h=10, θ=45° → d=10",
                        example2: "h=10, θ=30° → d≈17.32"
                      },
                      
                      {
                        topic: "Shadow Problems",
                        formula: "tanθ = height / shadow length",
                        example1: "Shadow=10, θ=45° → h=10",
                        example2: "Shadow=10, θ=30° → h≈5.77"
                      },
                      
                      {
                        topic: "Angle of Elevation = Angle of Depression",
                        formula: "Angles are equal",
                        example1: "Observer on ground and tower top",
                        example2: "Bridge and river view"
                      },
                      
                      {
                        topic: "Two Angles Problem",
                        formula: "Use two equations",
                        example1: "θ1 and θ2 given → solve system",
                        example2: "Height from two observations"
                      },
                      
                      {
                        topic: "Complementary Angle Use",
                        formula: "sin(90-θ)=cosθ",
                        example1: "Convert if needed",
                        example2: "Simplify calculations"
                      },
                      
                      {
                        topic: "Use of Standard Values",
                        formula: "Use known values (30°,45°,60°)",
                        example1: "tan45=1",
                        example2: "tan30=1/√3"
                      },
                      
                      {
                        topic: "Diagram Importance",
                        formula: "Draw right triangle before solving",
                        example1: "Tower problem",
                        example2: "Bridge problem"
                      },
                      
                      {
                        topic: "Height from Two Points",
                        formula: "Use difference of distances",
                        example1: "Observer moves closer",
                        example2: "Two angle observations"
                      },
                      
                      {
                        topic: "Distance Between Two Points",
                        formula: "Subtract distances",
                        example1: "Initial and final position",
                        example2: "Movement problems"
                      },
                      
                      {
                        topic: "Word Problems",
                        formula: "Convert situation into right triangle",
                        example1: "Height of building",
                        example2: "Distance of ship"
                      },
                      
                      {
                        topic: "Unit Conversion",
                        formula: "Convert units before solving",
                        example1: "km to m",
                        example2: "cm to m"
                      }
                      
                      ],
                       circlesFormulas : [

                        {
                          topic: "Circle Definition",
                          formula: "Set of all points equidistant from center",
                          example1: "Radius = constant",
                          example2: "All points same distance"
                        },
                        
                        {
                          topic: "Radius",
                          formula: "Distance from center to any point",
                          example1: "r = 5 units",
                          example2: "r = 10 units"
                        },
                        
                        {
                          topic: "Diameter",
                          formula: "d = 2r",
                          example1: "r=5 → d=10",
                          example2: "r=7 → d=14"
                        },
                        
                        {
                          topic: "Chord",
                          formula: "Line joining two points on circle",
                          example1: "Diameter is longest chord",
                          example2: "Any two boundary points"
                        },
                        
                        {
                          topic: "Tangent",
                          formula: "Touches circle at exactly one point",
                          example1: "Line touching circle",
                          example2: "Does not cut circle"
                        },
                        
                        {
                          topic: "Point of Contact",
                          formula: "Point where tangent touches circle",
                          example1: "Single touching point",
                          example2: "Tangent meets circle"
                        },
                        
                        {
                          topic: "Tangent Perpendicular to Radius",
                          formula: "Radius ⟂ Tangent at point of contact",
                          example1: "Draw radius → 90° angle",
                          example2: "Always perpendicular"
                        },
                        
                        {
                          topic: "Number of Tangents",
                          formula: "From a point outside → 2 tangents",
                          example1: "External point → two lines",
                          example2: "Inside point → no tangent"
                        },
                        
                        {
                          topic: "Equal Tangent Lengths",
                          formula: "Tangents from same point are equal",
                          example1: "PA = PB",
                          example2: "Two tangents same length"
                        },
                        
                        {
                          topic: "Lengths of Tangents",
                          formula: "PA = PB",
                          example1: "External point P",
                          example2: "Touch points A and B"
                        },
                        
                        {
                          topic: "Distance from Center to Tangent",
                          formula: "Perpendicular distance = radius",
                          example1: "Shortest distance from center",
                          example2: "Always equals r"
                        },
                        
                        {
                          topic: "Circle Equation (Basic)",
                          formula: "x^2 + y^2 = r^2",
                          example1: "r=5 → x^2+y^2=25",
                          example2: "r=10 → x^2+y^2=100"
                        },
                        
                        {
                          topic: "Tangent from External Point",
                          formula: "Two tangents possible",
                          example1: "From P outside circle",
                          example2: "Touch at two points"
                        },
                        
                        {
                          topic: "No Tangent Condition",
                          formula: "Point inside circle → no tangent",
                          example1: "Point within radius",
                          example2: "Cannot draw tangent"
                        },
                        
                        {
                          topic: "One Tangent Condition",
                          formula: "Point on circle → one tangent",
                          example1: "Touching point only",
                          example2: "Single tangent line"
                        },
                        
                        {
                          topic: "Two Tangents Condition",
                          formula: "Point outside → two tangents",
                          example1: "Two equal tangents",
                          example2: "Symmetric lines"
                        },
                        
                        {
                          topic: "Angle between Radius and Tangent",
                          formula: "90°",
                          example1: "Right angle at contact",
                          example2: "Perpendicular property"
                        },
                        
                        {
                          topic: "Proof Problems",
                          formula: "Use tangent properties",
                          example1: "PA = PB proof",
                          example2: "Radius ⟂ tangent proof"
                        },
                        
                        {
                          topic: "Word Problems",
                          formula: "Apply tangent rules",
                          example1: "Find tangent length",
                          example2: "Find radius"
                        },
                        
                        {
                          topic: "Geometrical Construction",
                          formula: "Draw tangent from point",
                          example1: "External point construction",
                          example2: "Using compass"
                        }
                        
                        ],
                         areasRelatedToCirclesFormulas : [

                          {
                            topic: "Circumference of Circle",
                            formula: "C = 2πr",
                            example1: "r=7 → C=44 (π=22/7)",
                            example2: "r=5 → C≈31.4 (π=3.14)"
                          },
                          
                          {
                            topic: "Area of Circle",
                            formula: "A = πr^2",
                            example1: "r=7 → A=154",
                            example2: "r=5 → A≈78.5"
                          },
                          
                          {
                            topic: "Area of Semicircle",
                            formula: "A = (1/2)πr^2",
                            example1: "r=7 → A=77",
                            example2: "r=5 → A≈39.25"
                          },
                          
                          {
                            topic: "Perimeter of Semicircle",
                            formula: "πr + 2r",
                            example1: "r=7 → 22 + 14 = 36",
                            example2: "r=5 → ≈15.7 + 10 = 25.7"
                          },
                          
                          {
                            topic: "Area of Sector",
                            formula: "(θ/360) × πr^2",
                            example1: "θ=90°, r=7 → A=38.5",
                            example2: "θ=60°, r=6 → A≈18.84"
                          },
                          
                          {
                            topic: "Length of Arc",
                            formula: "(θ/360) × 2πr",
                            example1: "θ=90°, r=7 → L=11",
                            example2: "θ=60°, r=6 → L≈6.28"
                          },
                          
                          {
                            topic: "Area of Quadrant",
                            formula: "(1/4)πr^2",
                            example1: "r=7 → A=38.5",
                            example2: "r=4 → A≈12.56"
                          },
                          
                          {
                            topic: "Perimeter of Quadrant",
                            formula: "(1/4)(2πr) + 2r",
                            example1: "r=7 → 11 + 14 = 25",
                            example2: "r=4 → ≈6.28 + 8 = 14.28"
                          },
                          
                          {
                            topic: "Ring Area (Annulus)",
                            formula: "π(R^2 - r^2)",
                            example1: "R=7,r=5 → A=π(49-25)=24π",
                            example2: "R=10,r=6 → A=π(100-36)=64π"
                          },
                          
                          {
                            topic: "Area of Combined Figures",
                            formula: "Add/Subtract areas",
                            example1: "Circle - square",
                            example2: "Sector + triangle"
                          },
                          
                          {
                            topic: "Area of Segment",
                            formula: "Sector area - triangle area",
                            example1: "Segment from sector",
                            example2: "Use θ and r"
                          },
                          
                          {
                            topic: "Conversion of Units",
                            formula: "Convert before calculation",
                            example1: "cm to m",
                            example2: "m to cm"
                          },
                          
                          {
                            topic: "Use of π Value",
                            formula: "π = 22/7 or 3.14",
                            example1: "Use 22/7 if r multiple of 7",
                            example2: "Else use 3.14"
                          },
                          
                          {
                            topic: "Diameter Relation",
                            formula: "d = 2r",
                            example1: "d=14 → r=7",
                            example2: "d=10 → r=5"
                          },
                          
                          {
                            topic: "Finding Radius from Area",
                            formula: "r = √(A/π)",
                            example1: "A=154 → r=7",
                            example2: "A=78.5 → r=5"
                          },
                          
                          {
                            topic: "Finding Radius from Circumference",
                            formula: "r = C / (2π)",
                            example1: "C=44 → r=7",
                            example2: "C≈31.4 → r=5"
                          },
                          
                          {
                            topic: "Shaded Region Problems",
                            formula: "Subtract inner from outer",
                            example1: "Circle inside square",
                            example2: "Ring shape"
                          },
                          
                          {
                            topic: "Arc vs Sector Confusion",
                            formula: "Arc = length, Sector = area",
                            example1: "Arc length ≠ area",
                            example2: "Sector gives area"
                          },
                          
                          {
                            topic: "Word Problems",
                            formula: "Convert to known shapes",
                            example1: "Path around field",
                            example2: "Garden design"
                          },
                          
                          {
                            topic: "Real Life Applications",
                            formula: "Use circle formulas",
                            example1: "Wheel rotation",
                            example2: "Circular park area"
                          }
                          
                          ],
                          surfaceAreasVolumesFormulas : [

                            /* ===== CUBE ===== */
                            {
                              topic: "Cube - Volume",
                              formula: "V = a^3",
                              example1: "a=3 → V=27",
                              example2: "a=5 → V=125"
                            },
                            
                            {
                              topic: "Cube - Surface Area",
                              formula: "TSA = 6a^2",
                              example1: "a=3 → TSA=54",
                              example2: "a=5 → TSA=150"
                            },
                            
                            {
                              topic: "Cube - Lateral Surface Area",
                              formula: "LSA = 4a^2",
                              example1: "a=3 → LSA=36",
                              example2: "a=5 → LSA=100"
                            },
                            
                            /* ===== CUBOID ===== */
                            {
                              topic: "Cuboid - Volume",
                              formula: "V = l × b × h",
                              example1: "2×3×4 → V=24",
                              example2: "5×2×3 → V=30"
                            },
                            
                            {
                              topic: "Cuboid - Surface Area",
                              formula: "TSA = 2(lb + bh + hl)",
                              example1: "l=2,b=3,h=4 → TSA=52",
                              example2: "l=5,b=2,h=3 → TSA=62"
                            },
                            
                            {
                              topic: "Cuboid - Lateral Surface Area",
                              formula: "LSA = 2h(l + b)",
                              example1: "h=4,l=2,b=3 → LSA=40",
                              example2: "h=3,l=5,b=2 → LSA=42"
                            },
                            
                            /* ===== CYLINDER ===== */
                            {
                              topic: "Cylinder - Volume",
                              formula: "V = πr^2h",
                              example1: "r=7,h=10 → V=1540",
                              example2: "r=5,h=4 → V≈314"
                            },
                            
                            {
                              topic: "Cylinder - Curved Surface Area",
                              formula: "CSA = 2πrh",
                              example1: "r=7,h=10 → CSA=440",
                              example2: "r=5,h=4 → CSA≈125.6"
                            },
                            
                            {
                              topic: "Cylinder - Total Surface Area",
                              formula: "TSA = 2πr(h + r)",
                              example1: "r=7,h=10 → TSA=748",
                              example2: "r=5,h=4 → TSA≈282.6"
                            },
                            
                            /* ===== CONE ===== */
                            {
                              topic: "Cone - Volume",
                              formula: "V = (1/3)πr^2h",
                              example1: "r=3,h=6 → V=18π",
                              example2: "r=7,h=24 → V=1232"
                            },
                            
                            {
                              topic: "Cone - Slant Height",
                              formula: "l = √(r^2 + h^2)",
                              example1: "r=3,h=4 → l=5",
                              example2: "r=5,h=12 → l=13"
                            },
                            
                            {
                              topic: "Cone - Curved Surface Area",
                              formula: "CSA = πrl",
                              example1: "r=3,l=5 → CSA=15π",
                              example2: "r=5,l=13 → CSA=65π"
                            },
                            
                            {
                              topic: "Cone - Total Surface Area",
                              formula: "TSA = πr(l + r)",
                              example1: "r=3,l=5 → TSA=24π",
                              example2: "r=5,l=13 → TSA=90π"
                            },
                            
                            /* ===== SPHERE ===== */
                            {
                              topic: "Sphere - Volume",
                              formula: "V = (4/3)πr^3",
                              example1: "r=3 → V=36π",
                              example2: "r=7 → V≈1437.3"
                            },
                            
                            {
                              topic: "Sphere - Surface Area",
                              formula: "TSA = 4πr^2",
                              example1: "r=3 → TSA=36π",
                              example2: "r=7 → TSA≈615.44"
                            },
                            
                            /* ===== HEMISPHERE ===== */
                            {
                              topic: "Hemisphere - Volume",
                              formula: "V = (2/3)πr^3",
                              example1: "r=3 → V=18π",
                              example2: "r=7 → V≈718.67"
                            },
                            
                            {
                              topic: "Hemisphere - Curved Surface Area",
                              formula: "CSA = 2πr^2",
                              example1: "r=3 → CSA=18π",
                              example2: "r=7 → CSA≈307.72"
                            },
                            
                            {
                              topic: "Hemisphere - Total Surface Area",
                              formula: "TSA = 3πr^2",
                              example1: "r=3 → TSA=27π",
                              example2: "r=7 → TSA≈461.58"
                            },
                            
                            /* ===== FRUSTUM OF CONE ===== */
                            {
                              topic: "Frustum - Slant Height",
                              formula: "l = √[(R - r)^2 + h^2]",
                              example1: "R=5,r=3,h=4 → l=√20",
                              example2: "R=7,r=4,h=3 → l=√18"
                            },
                            
                            {
                              topic: "Frustum - Volume",
                              formula: "V = (1/3)πh(R^2 + r^2 + Rr)",
                              example1: "Use given values",
                              example2: "Apply formula directly"
                            },
                            
                            {
                              topic: "Frustum - Curved Surface Area",
                              formula: "CSA = πl(R + r)",
                              example1: "R=5,r=3,l=√20",
                              example2: "R=7,r=4,l=√18"
                            },
                            
                            {
                              topic: "Frustum - Total Surface Area",
                              formula: "TSA = πl(R + r) + π(R^2 + r^2)",
                              example1: "Add top and bottom",
                              example2: "Use both radii"
                            },
                            
                            /* ===== COMBINED SOLIDS ===== */
                            {
                              topic: "Combined Solids",
                              formula: "Add/Subtract volumes",
                              example1: "Cylinder + hemisphere",
                              example2: "Cone removed from cylinder"
                            },
                            
                            {
                              topic: "Melting and Recasting",
                              formula: "Volume remains same",
                              example1: "Sphere → cylinder",
                              example2: "Cone → sphere"
                            },
                            
                            {
                              topic: "Unit Conversion",
                              formula: "Convert before calculation",
                              example1: "cm to m",
                              example2: "m³ to cm³"
                            },
                            
                            {
                              topic: "π Value Usage",
                              formula: "π = 22/7 or 3.14",
                              example1: "Use 22/7 if divisible",
                              example2: "Else use 3.14"
                            }
                            
                            ],
                             statisticsFormulas : [

                              {
                                topic: "Statistics Definition",
                                formula: "Collection and analysis of data",
                                example1: "Marks of students",
                                example2: "Heights of people"
                              },
                              
                              {
                                topic: "Types of Data",
                                formula: "Ungrouped and Grouped",
                                example1: "Raw marks list",
                                example2: "Class interval table"
                              },
                              
                              {
                                topic: "Frequency",
                                formula: "Number of times a value occurs",
                                example1: "5 appears 3 times → f=3",
                                example2: "10 appears 2 times → f=2"
                              },
                              
                              {
                                topic: "Class Interval",
                                formula: "Range of data",
                                example1: "0–10, 10–20",
                                example2: "20–30, 30–40"
                              },
                              
                              {
                                topic: "Class Mark (Mid Value)",
                                formula: "x = (upper + lower)/2",
                                example1: "10–20 → 15",
                                example2: "20–30 → 25"
                              },
                              
                              {
                                topic: "Mean (Direct Method)",
                                formula: "Mean = Σfx / Σf",
                                example1: "Calculate using table",
                                example2: "Multiply f and x"
                              },
                              
                              {
                                topic: "Mean (Assumed Mean Method)",
                                formula: "Mean = A + (Σfd / Σf)",
                                example1: "A = assumed mean",
                                example2: "d = x - A"
                              },
                              
                              {
                                topic: "Mean (Step Deviation Method)",
                                formula: "Mean = A + (Σfu / Σf) × h",
                                example1: "u = (x - A)/h",
                                example2: "h = class width"
                              },
                              
                              {
                                topic: "Cumulative Frequency",
                                formula: "Running total of frequency",
                                example1: "Add frequencies stepwise",
                                example2: "Used for median"
                              },
                              
                              {
                                topic: "Median Formula",
                                formula: "Median = l + [(n/2 - cf)/f] × h",
                                example1: "Find median class",
                                example2: "Apply formula"
                              },
                              
                              {
                                topic: "Median Class",
                                formula: "Class where n/2 lies",
                                example1: "Locate using CF",
                                example2: "Middle value class"
                              },
                              
                              {
                                topic: "Mode Formula",
                                formula: "Mode = l + [(f1 - f0)/(2f1 - f0 - f2)] × h",
                                example1: "f1 = highest frequency",
                                example2: "Use adjacent classes"
                              },
                              
                              {
                                topic: "Modal Class",
                                formula: "Class with highest frequency",
                                example1: "Identify largest f",
                                example2: "Use for mode"
                              },
                              
                              {
                                topic: "Total Frequency",
                                formula: "n = Σf",
                                example1: "Add all frequencies",
                                example2: "Used in mean/median"
                              },
                              
                              {
                                topic: "Deviation",
                                formula: "d = x - A",
                                example1: "x=20,A=15 → d=5",
                                example2: "x=10,A=15 → d=-5"
                              },
                              
                              {
                                topic: "Step Deviation",
                                formula: "u = (x - A)/h",
                                example1: "Divide deviation by h",
                                example2: "Simplifies calculation"
                              },
                              
                              {
                                topic: "Graphical Representation",
                                formula: "Histogram, Frequency Polygon",
                                example1: "Draw bars",
                                example2: "Join midpoints"
                              },
                              
                              {
                                topic: "Less Than Ogive",
                                formula: "Cumulative frequency curve",
                                example1: "Plot CF vs upper limit",
                                example2: "Used to find median"
                              },
                              
                              {
                                topic: "More Than Ogive",
                                formula: "Reverse cumulative frequency",
                                example1: "Plot CF vs lower limit",
                                example2: "Find median intersection"
                              },
                              
                              {
                                topic: "Word Problems",
                                formula: "Apply mean/median/mode formulas",
                                example1: "Marks distribution",
                                example2: "Income data"
                              }
                              
                              ],
                              probabilityFormulas : [

                                {
                                  topic: "Experiment",
                                  formula: "Action with possible outcomes",
                                  example1: "Tossing a coin",
                                  example2: "Rolling a die"
                                },
                                
                                {
                                  topic: "Outcome",
                                  formula: "Result of experiment",
                                  example1: "Head in coin toss",
                                  example2: "3 in dice roll"
                                },
                                
                                {
                                  topic: "Sample Space",
                                  formula: "All possible outcomes (S)",
                                  example1: "Coin → {H, T}",
                                  example2: "Dice → {1,2,3,4,5,6}"
                                },
                                
                                {
                                  topic: "Number of Outcomes",
                                  formula: "n(S) = total outcomes",
                                  example1: "Coin → 2",
                                  example2: "Dice → 6"
                                },
                                
                                {
                                  topic: "Event",
                                  formula: "Subset of sample space",
                                  example1: "Getting head",
                                  example2: "Getting even number"
                                },
                                
                                {
                                  topic: "Favorable Outcomes",
                                  formula: "n(E) = outcomes favorable to event",
                                  example1: "Even numbers → {2,4,6}",
                                  example2: "Head → {H}"
                                },
                                
                                {
                                  topic: "Probability Formula",
                                  formula: "P(E) = n(E) / n(S)",
                                  example1: "Even on dice → 3/6=1/2",
                                  example2: "Head → 1/2"
                                },
                                
                                {
                                  topic: "Impossible Event",
                                  formula: "P(E) = 0",
                                  example1: "Getting 7 on dice",
                                  example2: "Getting tail on head-only coin"
                                },
                                
                                {
                                  topic: "Sure Event",
                                  formula: "P(E) = 1",
                                  example1: "Getting number 1–6 on dice",
                                  example2: "Coin gives H or T"
                                },
                                
                                {
                                  topic: "Range of Probability",
                                  formula: "0 ≤ P(E) ≤ 1",
                                  example1: "Valid probabilities",
                                  example2: "No negative values"
                                },
                                
                                {
                                  topic: "Complementary Event",
                                  formula: "P(not E) = 1 - P(E)",
                                  example1: "Not head → 1 - 1/2 = 1/2",
                                  example2: "Not even → 1 - 1/2 = 1/2"
                                },
                                
                                {
                                  topic: "Equally Likely Outcomes",
                                  formula: "All outcomes have equal chance",
                                  example1: "Fair coin",
                                  example2: "Fair dice"
                                },
                                
                                {
                                  topic: "Probability of Not Event",
                                  formula: "P(E') = 1 - P(E)",
                                  example1: "Not getting 6",
                                  example2: "Not getting head"
                                },
                                
                                {
                                  topic: "Single Event",
                                  formula: "One outcome event",
                                  example1: "Getting 3 in dice",
                                  example2: "Getting head"
                                },
                                
                                {
                                  topic: "Multiple Outcomes Event",
                                  formula: "More than one favorable outcome",
                                  example1: "Even numbers",
                                  example2: "Prime numbers"
                                },
                                
                                {
                                  topic: "Finding Sample Space",
                                  formula: "List all possibilities",
                                  example1: "Two coins → {HH, HT, TH, TT}",
                                  example2: "Two dice → 36 outcomes"
                                },
                                
                                {
                                  topic: "Probability of Combined Events",
                                  formula: "Count favorable outcomes",
                                  example1: "Sum of two dice = 7",
                                  example2: "At least one head"
                                },
                                
                                {
                                  topic: "Word Problems",
                                  formula: "Convert situation into sample space",
                                  example1: "Cards problem",
                                  example2: "Balls in bag"
                                },
                                
                                {
                                  topic: "Cards Probability",
                                  formula: "52 cards total",
                                  example1: "Probability of ace = 4/52",
                                  example2: "Red card = 26/52"
                                },
                                
                                {
                                  topic: "Balls from Bag",
                                  formula: "Count favorable vs total",
                                  example1: "3 red,2 blue → red=3/5",
                                  example2: "Mixed color problems"
                                }
                                
                                ]                                                                                                                                                                                                                                      
            
          
  }
};

function showFormulaSubjects() {
  const dash = $("dashboard");
  

  let btn = document.createElement("button");
  btn.innerText = "Maths";

  btn.onclick = () => showFormulaLessons("Maths");

  dash.appendChild(btn);
}
function showFormulaLessons(subject) {
  const dash = $("dashboard");
  dash.innerHTML = `<h2>${subject} Lessons</h2>`;

  Object.keys(formulaData[subject]).forEach(lesson => {
    let btn = document.createElement("button");
    btn.innerText = lesson;

    btn.onclick = () => showFormulas(subject, lesson);

    dash.appendChild(btn);
  });
}
function showFormulas(subject, lesson) {
  const dash = $("dashboard");
  dash.innerHTML = `<h2>${lesson} Formulas</h2>`;

  formulaData[subject][lesson].forEach(f => {

    let div = document.createElement("div");

    // 🔥 styling
    div.style.fontSize = "20px";
    div.style.margin = "15px";
    div.style.padding = "15px";
    div.style.background = "#fff";
    div.style.borderRadius = "12px";
    div.style.textAlign = "left";

    // 🔥 structured content
    div.innerHTML = `
      <b>📌 Topic:</b> ${f.topic} <br><br>
      <b>📐 Formula:</b> ${f.formula} <br><br>
      <b>👉 Example 1:</b> ${f.example1} <br>
      <b>👉 Example 2:</b> ${f.example2}
    `;

    dash.appendChild(div);
  });
}


function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
  }
}

/* close menu when clicking outside */
document.addEventListener("click", function(e) {
  const menu = document.getElementById("menu");
  const icon = document.querySelector(".menu-icon");

  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.style.display = "none";
  }
});



