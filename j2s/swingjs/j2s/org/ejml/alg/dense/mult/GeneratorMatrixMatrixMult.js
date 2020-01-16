(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.mult"),p$1={},I$=[[0,'java.io.PrintStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeneratorMatrixMatrixMult");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['stream','java.io.PrintStream']]]

Clazz.newMeth(C$, 'c$$S', function (fileName) {
;C$.$init$.apply(this);
this.stream=Clazz.new_($I$(1,1).c$$S,[fileName]);
}, 1);

Clazz.newMeth(C$, 'createClass$', function () {
var preamble="/*\n * Copyright (c) 2009-2013, Peter Abeles. All Rights Reserved.\n *\n * This file is part of Efficient Java Matrix Library (EJML).\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\npackage org.ejml.alg.dense.mult;\n\nimport org.ejml.data.RowD1Matrix64F;\n\n/**\n * <p>\n * This class contains various types of matrix matrix multiplication operations for {@link RowD1Matrix64F}.\n * </p>\n * <p>\n * Two algorithms that are equivalent can often have very different runtime performance.\n * This is because of how modern computers uses fast memory caches to speed up reading/writing to data.\n * Depending on the order in which variables are processed different algorithms can run much faster than others,\n * even if the number of operations is the same.\n * </p>\n *\n * <p>\n * Algorithms that are labeled as \'reorder\' are designed to avoid caching jumping issues, some times at the cost\n * of increasing the number of operations.  This is important for large matrices.  The straight forward \n * implementation seems to be faster for small matrices.\n * </p>\n * \n * <p>\n * Algorithms that are labeled as \'aux\' use an auxiliary array of length n.  This array is used to create\n * a copy of an out of sequence column vector that is referenced several times.  This reduces the number\n * of cache misses.  If the \'aux\' parameter passed in is null then the array is declared internally.\n * </p>\n *\n * <p>\n * Typically the straight forward implementation runs about 30% faster on smaller matrices and\n * about 5 times slower on larger matrices.  This is all computer architecture and matrix shape/size specific.\n * </p>\n * \n * <p>\n * <center>******** IMPORTANT **********</center>\n * This class was auto generated using {@link org.ejml.alg.dense.mult.CodeGeneratorMatrixMatrixMult}\n * If this code needs to be modified, please modify {@link org.ejml.alg.dense.mult.CodeGeneratorMatrixMatrixMult} instead\n * and regenerate the code by running that.\n * </p>\n * \n * @author Peter Abeles\n */\npublic class MatrixMatrixMult {\n";
this.stream.print$S(preamble);
for (var i=0; i < 2; i++) {
var alpha=i == 1;
for (var j=0; j < 2; j++) {
var add=j == 1;
this.printMult_reroder$Z$Z(alpha, add);
this.stream.print$S("\n");
this.printMult_small$Z$Z(alpha, add);
this.stream.print$S("\n");
this.printMult_aux$Z$Z(alpha, add);
this.stream.print$S("\n");
this.printMultTransA_reorder$Z$Z(alpha, add);
this.stream.print$S("\n");
this.printMultTransA_small$Z$Z(alpha, add);
this.stream.print$S("\n");
this.printMultTransAB$Z$Z(alpha, add);
this.stream.print$S("\n");
this.printMultTransAB_aux$Z$Z(alpha, add);
this.stream.print$S("\n");
this.printMultTransB$Z$Z(alpha, add);
this.stream.print$S("\n");
}
}
this.stream.print$S("}\n");
});

Clazz.newMeth(C$, 'makeBoundsCheck$Z$Z$S', function (tranA, tranB, auxLength) {
var a_numCols=tranA ? "a.numRows" : "a.numCols";
var a_numRows=tranA ? "a.numCols" : "a.numRows";
var b_numCols=tranB ? "b.numRows" : "b.numCols";
var b_numRows=tranB ? "b.numCols" : "b.numRows";
var ret="        if( a == c || b == c )\n            throw new IllegalArgumentException(\"Neither \'a\' or \'b\' can be the same matrix as \'c\'\");\n        else if( " + a_numCols + " != " + b_numRows + " ) {\n" + "            throw new MatrixDimensionException(\"The 'a' and 'b' matrices do not have compatible dimensions\");\n" + "        } else if( " + a_numRows + " != c.numRows || " + b_numCols + " != c.numCols ) {\n" + "            throw new MatrixDimensionException(\"The results matrix does not have the desired dimensions\");\n" + "        }\n" + "\n" ;
if (auxLength != null ) {
ret += "        if( aux == null ) aux = new double[ " + auxLength + " ];\n\n" ;
}return ret;
}, p$1);

Clazz.newMeth(C$, 'makeComment$S$Z', function (nameOp, hasAlpha) {
var a=hasAlpha ? "double, " : "";
var inputs="(" + a + " org.ejml.data.RowD1Matrix64F, org.ejml.data.RowD1Matrix64F, org.ejml.data.RowD1Matrix64F)" ;
var ret="    /**\n     * @see org.ejml.ops.CommonOps#" + nameOp + inputs + "\n" + "     */\n" ;
return ret;
}, p$1);

Clazz.newMeth(C$, 'makeHeader$S$S$Z$Z$Z$Z$Z', function (nameOp, variant, add, hasAlpha, hasAux, tranA, tranB) {
if (add) nameOp += "Add";
if (tranA && tranB ) {
nameOp += "TransAB";
} else if (tranA) {
nameOp += "TransA";
} else if (tranB) {
nameOp += "TransB";
}var ret=p$1.makeComment$S$Z.apply(this, [nameOp, hasAlpha]) + "    public static void " + nameOp ;
if (variant != null ) ret += "_" + variant + "( " ;
 else ret += "( ";
if (hasAlpha) ret += "double alpha , ";
if (hasAux) {
ret += "RowD1Matrix64F a , RowD1Matrix64F b , RowD1Matrix64F c , double []aux )\n";
} else {
ret += "RowD1Matrix64F a , RowD1Matrix64F b , RowD1Matrix64F c )\n";
}ret += "    {\n";
return ret;
}, p$1);

Clazz.newMeth(C$, 'printMult_reroder$Z$Z', function (alpha, add) {
var header;
var valLine;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", "reorder", add, alpha, false, false, false]);
if (alpha) {
valLine="valA = alpha*a.get(indexA++);\n";
} else {
valLine="valA = a.get(indexA++);\n";
}var assignment=add ? "plus" : "set";
var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [false, false, null]) + "        double valA;\n" + "        int indexCbase= 0;\n" + "        int endOfKLoop = b.numRows*b.numCols;\n" + "\n" + "        for( int i = 0; i < a.numRows; i++ ) {\n" + "            int indexA = i*a.numCols;\n" + "\n" + "            // need to assign c.data to a value initially\n" + "            int indexB = 0;\n" + "            int indexC = indexCbase;\n" + "            int end = indexB + b.numCols;\n" + "\n" + "            " + valLine + "\n" + "            while( indexB < end ) {\n" + "                c." + assignment + "(indexC++ , valA*b.get(indexB++));\n" + "            }\n" + "\n" + "            // now add to it\n" + "            while( indexB != endOfKLoop ) { // k loop\n" + "                indexC = indexCbase;\n" + "                end = indexB + b.numCols;\n" + "\n" + "                " + valLine + "\n" + "                while( indexB < end ) { // j loop\n" + "                    c.plus(indexC++ , valA*b.get(indexB++));\n" + "                }\n" + "            }\n" + "            indexCbase += c.numCols;\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'printMult_small$Z$Z', function (alpha, add) {
var header;
var valLine;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", "small", add, alpha, false, false, false]);
var assignment=add ? "plus" : "set";
if (alpha) {
valLine="                c." + assignment + "( cIndex++ , alpha*total );\n" ;
} else {
valLine="                c." + assignment + "( cIndex++ , total );\n" ;
}var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [false, false, null]) + "        int aIndexStart = 0;\n" + "        int cIndex = 0;\n" + "\n" + "        for( int i = 0; i < a.numRows; i++ ) {\n" + "            for( int j = 0; j < b.numCols; j++ ) {\n" + "                double total = 0;\n" + "\n" + "                int indexA = aIndexStart;\n" + "                int indexB = j;\n" + "                int end = indexA + b.numRows;\n" + "                while( indexA < end ) {\n" + "                    total += a.get(indexA++) * b.get(indexB);\n" + "                    indexB += b.numCols;\n" + "                }\n" + "\n" + valLine + "            }\n" + "            aIndexStart += a.numCols;\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'printMult_aux$Z$Z', function (alpha, add) {
var header;
var valLine;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", "aux", add, alpha, true, false, false]);
var assignment=add ? "plus" : "set";
if (alpha) {
valLine="                c." + assignment + "( i*c.numCols+j , alpha*total );\n" ;
} else {
valLine="                c." + assignment + "( i*c.numCols+j , total );\n" ;
}var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [false, false, "b.numRows"]) + "        for( int j = 0; j < b.numCols; j++ ) {\n" + "            // create a copy of the column in B to avoid cache issues\n" + "            for( int k = 0; k < b.numRows; k++ ) {\n" + "                aux[k] = b.unsafe_get(k,j);\n" + "            }\n" + "\n" + "            int indexA = 0;\n" + "            for( int i = 0; i < a.numRows; i++ ) {\n" + "                double total = 0;\n" + "                for( int k = 0; k < b.numRows; ) {\n" + "                    total += a.get(indexA++)*aux[k++];\n" + "                }\n" + valLine + "            }\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'printMultTransA_reorder$Z$Z', function (alpha, add) {
var header;
var valLine1;
var valLine2;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", "reorder", add, alpha, false, true, false]);
var assignment=add ? "plus" : "set";
if (alpha) {
valLine1="valA = alpha*a.get(i);\n";
valLine2="valA = alpha*a.unsafe_get(k,i);\n";
} else {
valLine1="valA = a.get(i);\n";
valLine2="valA = a.unsafe_get(k,i);\n";
}var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [true, false, null]) + "        double valA;\n" + "\n" + "        for( int i = 0; i < a.numCols; i++ ) {\n" + "            int indexC_start = i*c.numCols;\n" + "\n" + "            // first assign R\n" + "            " + valLine1 + "            int indexB = 0;\n" + "            int end = indexB+b.numCols;\n" + "            int indexC = indexC_start;\n" + "            while( indexB<end ) {\n" + "                c." + assignment + "( indexC++ , valA*b.get(indexB++));\n" + "            }\n" + "            // now increment it\n" + "            for( int k = 1; k < a.numRows; k++ ) {\n" + "                " + valLine2 + "                end = indexB+b.numCols;\n" + "                indexC = indexC_start;\n" + "                // this is the loop for j\n" + "                while( indexB<end ) {\n" + "                    c.plus( indexC++ , valA*b.get(indexB++));\n" + "                }\n" + "            }\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'printMultTransA_small$Z$Z', function (alpha, add) {
var header;
var valLine;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", "small", add, alpha, false, true, false]);
var assignment=add ? "plus" : "set";
if (alpha) {
valLine="c." + assignment + "( cIndex++ , alpha*total );\n" ;
} else {
valLine="c." + assignment + "( cIndex++ , total );\n" ;
}var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [true, false, null]) + "        int cIndex = 0;\n" + "\n" + "        for( int i = 0; i < a.numCols; i++ ) {\n" + "            for( int j = 0; j < b.numCols; j++ ) {\n" + "                int indexA = i;\n" + "                int indexB = j;\n" + "                int end = indexB + b.numRows*b.numCols;\n" + "\n" + "                double total = 0;\n" + "\n" + "                // loop for k\n" + "                for(; indexB < end; indexB += b.numCols ) {\n" + "                    total += a.get(indexA) * b.get(indexB);\n" + "                    indexA += a.numCols;\n" + "                }\n" + "\n" + "                " + valLine + "            }\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'printMultTransB$Z$Z', function (alpha, add) {
var header;
var valLine;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", null, add, alpha, false, false, true]);
var assignment=add ? "plus" : "set";
if (alpha) {
valLine="c." + assignment + "( cIndex++ , alpha*total );\n" ;
} else {
valLine="c." + assignment + "( cIndex++ , total );\n" ;
}var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [false, true, null]) + "        int cIndex = 0;\n" + "        int aIndexStart = 0;\n" + "\n" + "        for( int xA = 0; xA < a.numRows; xA++ ) {\n" + "            int end = aIndexStart + b.numCols;\n" + "            int indexB = 0;\n" + "            for( int xB = 0; xB < b.numRows; xB++ ) {\n" + "                int indexA = aIndexStart;\n" + "\n" + "                double total = 0;\n" + "\n" + "                while( indexA<end ) {\n" + "                    total += a.get(indexA++) * b.get(indexB++);\n" + "                }\n" + "\n" + "                " + valLine + "            }\n" + "            aIndexStart += a.numCols;\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'printMultTransAB$Z$Z', function (alpha, add) {
var header;
var valLine;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", null, add, alpha, false, true, true]);
var assignment=add ? "plus" : "set";
if (alpha) {
valLine="c." + assignment + "( cIndex++ , alpha*total );\n" ;
} else {
valLine="c." + assignment + "( cIndex++ , total );\n" ;
}var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [true, true, null]) + "        int cIndex = 0;\n" + "\n" + "        for( int i = 0; i < a.numCols; i++ ) {\n" + "            int indexB = 0;\n" + "            for( int j = 0; j < b.numRows; j++ ) {\n" + "                int indexA = i;\n" + "                int end = indexB + b.numCols;\n" + "\n" + "                double total = 0;\n" + "\n" + "                for( ;indexB<end; ) {\n" + "                    total += a.get(indexA) * b.get(indexB++);\n" + "                    indexA += a.numCols;\n" + "                }\n" + "\n" + "                " + valLine + "            }\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'printMultTransAB_aux$Z$Z', function (alpha, add) {
var header;
var valLine;
header=p$1.makeHeader$S$S$Z$Z$Z$Z$Z.apply(this, ["mult", "aux", add, alpha, true, true, true]);
var assignment=add ? "plus" : "set";
if (alpha) {
valLine="c." + assignment + "( indexC++ , alpha*total );\n" ;
} else {
valLine="c." + assignment + "( indexC++ , total );\n" ;
}var foo=header + p$1.makeBoundsCheck$Z$Z$S.apply(this, [true, true, "a.numRows"]) + "        int indexC = 0;\n" + "        for( int i = 0; i < a.numCols; i++ ) {\n" + "            for( int k = 0; k < b.numCols; k++ ) {\n" + "                aux[k] = a.unsafe_get(k,i);\n" + "            }\n" + "\n" + "            for( int j = 0; j < b.numRows; j++ ) {\n" + "                double total = 0;\n" + "\n" + "                for( int k = 0; k < b.numCols; k++ ) {\n" + "                    total += aux[k] * b.unsafe_get(j,k);\n" + "                }\n" + "                " + valLine + "            }\n" + "        }\n" + "    }\n" ;
this.stream.print$S(foo);
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var gen=Clazz.new_(C$.c$$S,["MatrixMatrixMult.java"]);
gen.createClass$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
