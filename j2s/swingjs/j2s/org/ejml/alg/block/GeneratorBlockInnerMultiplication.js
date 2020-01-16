(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),p$1={},I$=[[0,'java.io.PrintStream',['org.ejml.alg.block.GeneratorBlockInnerMultiplication','.Operation']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeneratorBlockInnerMultiplication", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Operation',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['className'],'O',['stream','java.io.PrintStream']]]

Clazz.newMeth(C$, 'c$$S', function (className) {
;C$.$init$.apply(this);
this.className=className;
this.stream=Clazz.new_($I$(1,1).c$$S,[className + ".java"]);
}, 1);

Clazz.newMeth(C$, 'createClass$', function () {
p$1.printTop.apply(this, []);
for (var i=0; i < 2; i++) {
var hasAlpha=i == 1;
for (var o, $o = 0, $$o = $I$(2).values$(); $o<$$o.length&&((o=($$o[$o])),1);$o++) {
if (hasAlpha && o === $I$(2).MINUS  ) continue;
p$1.print_mult$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation.apply(this, [hasAlpha, o]);
p$1.print_multTransA$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation.apply(this, [hasAlpha, o]);
p$1.print_multTransB$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation.apply(this, [hasAlpha, o]);
}
}
this.stream.print$S("}\n");
});

Clazz.newMeth(C$, 'printTop', function () {
var foo="/*\n * Copyright (c) 2009-2013, Peter Abeles. All Rights Reserved.\n *\n * This file is part of Efficient Java Matrix Library (EJML).\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n" + "\n" + "package org.ejml.alg.block;\n" + "\n" + "/**\n" + " * <p>\n" + " * Matrix multiplication for the inner row major blocks, typically inside of a {@link org.ejml.data.BlockMatrix64F}.\n" + " * </p>\n" + " *\n" + " * <p>\n" + " * This code was auto generated by {@link GeneratorBlockInnerMultiplication} and should not be modified directly.\n" + " * </p>\n" + " *\n" + " * @author Peter Abeles\n" + " */\n" + "public class " + this.className + " {\n" ;
this.stream.print$S(foo);
}, p$1);

Clazz.newMeth(C$, 'print_mult$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation', function (hasAlpha, opType) {
p$1.createHeader$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation$Z$Z.apply(this, [hasAlpha, opType, false, false]);
this.stream.print$S("//        for( int i = 0; i < heightA; i++ ) {\n//            for( int k = 0; k < widthA; k++ ) {\n//                for( int j = 0; j < widthC; j++ ) {\n//                    dataC[ i*widthC + j + indexC ] += dataA[i*widthA + k + indexA] * dataB[k*widthC + j + indexB];\n//                }\n//            }\n//        }\n");
this.stream.println$();
var o=(opType === $I$(2).MINUS ) ? "-=" : "+=";
var m=hasAlpha ? "alpha*" : "";
this.stream.print$S("        int a = indexA;\n        int rowC = indexC;\n        for( int i = 0; i < heightA; i++ , rowC += widthC ) {\n            int b = indexB;\n\n            final int endC = rowC + widthC;\n            final int endA = a + widthA;\n            while( a != endA ) {//for( int k = 0; k < widthA; k++ ) {\n                double valA = " + m + "dataA[a++];\n" + "\n" + "                int c = rowC;\n" + "\n" );
if (opType === $I$(2).SET ) {
this.stream.print$S("                if( b == indexB ) {\n                    while( c != endC  ) {//for( int j = 0; j < widthC; j++ ) {\n                        dataC[ c++ ] = valA * dataB[ b++ ];\n                    }\n                } else {\n                    while( c != endC  ) {//for( int j = 0; j < widthC; j++ ) {\n                        dataC[ c++ ] " + o + " valA * dataB[ b++ ];\n" + "                    }\n" + "                }\n" );
} else {
this.stream.print$S("                while( c != endC  ) {//for( int j = 0; j < widthC; j++ ) {\n                    dataC[ c++ ] " + o + " valA * dataB[ b++ ];\n" + "                }\n" );
}this.stream.println$S("            }\n        }");
this.stream.println$S("    }");
}, p$1);

Clazz.newMeth(C$, 'createOpString$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation', function (hasAlpha, opType) {
var o=p$1.opString$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation.apply(this, [opType]);
if (hasAlpha) o += " alpha * ";
return o;
}, p$1);

Clazz.newMeth(C$, 'print_multTransA$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation', function (hasAlpha, opType) {
p$1.createHeader$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation$Z$Z.apply(this, [hasAlpha, opType, true, false]);
var o=(opType === $I$(2).MINUS ) ? "-=" : "+=";
var m=hasAlpha ? "alpha*" : "";
this.stream.print$S("//        for( int i = 0; i < widthA; i++ ) {\n//            for( int k = 0; k < heightA; k++ ) {\n//                double valA = dataA[k*widthA + i + indexA];\n//                for( int j = 0; j < widthC; j++ ) {\n//                    dataC[ i*widthC + j + indexC ] += valA * dataB[k*widthC + j + indexB];\n//                }\n//            }\n//        }\n");
this.stream.println$();
this.stream.print$S("        int rowC = indexC;\n        for( int i = 0; i < widthA; i++ , rowC += widthC) {\n            int colA = i + indexA;\n            int endA = colA + widthA*heightA;\n            int b = indexB;\n\n            // for( int k = 0; k < heightA; k++ ) {\n            while(colA != endA ) {\n                double valA = " + m + "dataA[colA];\n" + "\n" + "                int c = rowC;\n" + "                final int endB = b + widthC;\n" + "\n" + "                //for( int j = 0; j < widthC; j++ ) {\n" );
if (opType === $I$(2).SET ) {
this.stream.print$S("                if( b == indexB ) {\n                    while( b != endB ) {\n                        dataC[ c++ ] = valA * dataB[b++];\n                    } \n                } else {\n                    while( b != endB ) {\n                        dataC[ c++ ] " + o + " valA * dataB[b++];\n" + "                    }\n" + "                }\n" );
} else {
this.stream.print$S("                while( b != endB ) {\n                    dataC[ c++ ] " + o + " valA * dataB[b++];\n" + "                }\n" );
}this.stream.print$S("                colA += widthA;\n            }\n        }\n");
this.stream.println$S("    }");
}, p$1);

Clazz.newMeth(C$, 'print_multTransB$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation', function (hasAlpha, opType) {
p$1.createHeader$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation$Z$Z.apply(this, [hasAlpha, opType, false, true]);
var o=p$1.createOpString$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation.apply(this, [hasAlpha, opType]);
this.stream.println$S("        for( int i = 0; i < heightA; i++ ) {\n            for( int j = 0; j < widthC; j++ ) {\n                double val = 0;\n\n                for( int k = 0; k < widthA; k++ ) {\n                    val += dataA[i*widthA + k + indexA] * dataB[j*widthA + k + indexB];\n                }\n\n                dataC[ i*widthC + j + indexC ] " + o + " val;\n" + "            }\n" + "        }" );
this.stream.println$S("    }");
}, p$1);

Clazz.newMeth(C$, 'createHeader$Z$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation$Z$Z', function (hasAlpha, opType, transA, transB) {
var alphaString=hasAlpha ? " &alpha; " : "";
var alphaParam=hasAlpha ? " double alpha ," : "";
var transAString=transA ? "<sup>T</sup>" : "";
var transBString=transB ? "<sup>T</sup>" : "";
var opTypeString;
switch (opType) {
case $I$(2).MINUS:
opTypeString="C - ";
break;
case $I$(2).PLUS:
opTypeString="C + ";
break;
case $I$(2).SET:
opTypeString="";
break;
default:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unknown optype"]);
}
var funcName="blockMult" + p$1.opName$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation.apply(this, [opType]);
if (transA && transB ) funcName += "TransAB";
 else if (transA) funcName += "TransA";
 else if (transB) funcName += "TransB";
this.stream.println$();
this.stream.print$S("    /**\n     * <p>\n     * Performs the follow operation on individual inner blocks:<br>\n     * <br>\n");
this.stream.print$S("     * C = " + opTypeString + alphaString + "A" + transAString + " * B" + transBString + "\n" );
this.stream.print$S("     * </p>\n     */\n    public static void " + funcName + "(" + alphaParam + " final double[] dataA, final double []dataB, final double []dataC,\n" + "                                     int indexA, int indexB, int indexC,\n" + "                                     final int heightA, final int widthA, final int widthC) {\n" );
}, p$1);

Clazz.newMeth(C$, 'opString$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation', function (opType) {
switch (opType) {
case $I$(2).MINUS:
return "-=";
case $I$(2).PLUS:
return "+=";
case $I$(2).SET:
return "=";
default:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unknown opType " + opType]);
}
}, p$1);

Clazz.newMeth(C$, 'opName$org_ejml_alg_block_GeneratorBlockInnerMultiplication_Operation', function (opType) {
switch (opType) {
case $I$(2).MINUS:
return "Minus";
case $I$(2).PLUS:
return "Plus";
case $I$(2).SET:
return "Set";
default:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unknown opType " + opType]);
}
}, p$1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var app=Clazz.new_(C$.c$$S,["BlockInnerMultiplication"]);
app.createClass$();
System.out.println$S("Done generating class");
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.GeneratorBlockInnerMultiplication, "Operation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PLUS", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MINUS", 1, []);
Clazz.newEnumConst($vals, C$.c$, "SET", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1