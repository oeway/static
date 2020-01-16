(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.data.FixedMatrix2x2_64F','org.ejml.data.FixedMatrix3x3_64F','org.ejml.data.FixedMatrix4x4_64F','org.ejml.data.FixedMatrix5x5_64F','org.ejml.data.FixedMatrix6x6_64F','org.ejml.data.FixedMatrix2_64F','org.ejml.data.FixedMatrix3_64F','org.ejml.data.FixedMatrix4_64F','org.ejml.data.FixedMatrix5_64F','org.ejml.data.FixedMatrix6_64F','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConvertMatrixType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_Matrix64F$org_ejml_data_Matrix64F', function (input, output) {
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
for (var i=0; i < input.getNumRows$(); i++) {
for (var j=0; j < input.getNumCols$(); j++) {
output.unsafe_set$I$I$D(i, j, input.unsafe_get$I$I(i, j));
}
}
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[2, 2]);
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.data[0]=input.a11;
output.data[1]=input.a12;
output.data[2]=input.a21;
output.data[3]=input.a22;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[3, 3]);
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.data[0]=input.a11;
output.data[1]=input.a12;
output.data[2]=input.a13;
output.data[3]=input.a21;
output.data[4]=input.a22;
output.data[5]=input.a23;
output.data[6]=input.a31;
output.data[7]=input.a32;
output.data[8]=input.a33;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[4, 4]);
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.data[0]=input.a11;
output.data[1]=input.a12;
output.data[2]=input.a13;
output.data[3]=input.a14;
output.data[4]=input.a21;
output.data[5]=input.a22;
output.data[6]=input.a23;
output.data[7]=input.a24;
output.data[8]=input.a31;
output.data[9]=input.a32;
output.data[10]=input.a33;
output.data[11]=input.a34;
output.data[12]=input.a41;
output.data[13]=input.a42;
output.data[14]=input.a43;
output.data[15]=input.a44;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix5x5_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[5, 5]);
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.data[0]=input.a11;
output.data[1]=input.a12;
output.data[2]=input.a13;
output.data[3]=input.a14;
output.data[4]=input.a15;
output.data[5]=input.a21;
output.data[6]=input.a22;
output.data[7]=input.a23;
output.data[8]=input.a24;
output.data[9]=input.a25;
output.data[10]=input.a31;
output.data[11]=input.a32;
output.data[12]=input.a33;
output.data[13]=input.a34;
output.data[14]=input.a35;
output.data[15]=input.a41;
output.data[16]=input.a42;
output.data[17]=input.a43;
output.data[18]=input.a44;
output.data[19]=input.a45;
output.data[20]=input.a51;
output.data[21]=input.a52;
output.data[22]=input.a53;
output.data[23]=input.a54;
output.data[24]=input.a55;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix6x6_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[6, 6]);
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.data[0]=input.a11;
output.data[1]=input.a12;
output.data[2]=input.a13;
output.data[3]=input.a14;
output.data[4]=input.a15;
output.data[5]=input.a16;
output.data[6]=input.a21;
output.data[7]=input.a22;
output.data[8]=input.a23;
output.data[9]=input.a24;
output.data[10]=input.a25;
output.data[11]=input.a26;
output.data[12]=input.a31;
output.data[13]=input.a32;
output.data[14]=input.a33;
output.data[15]=input.a34;
output.data[16]=input.a35;
output.data[17]=input.a36;
output.data[18]=input.a41;
output.data[19]=input.a42;
output.data[20]=input.a43;
output.data[21]=input.a44;
output.data[22]=input.a45;
output.data[23]=input.a46;
output.data[24]=input.a51;
output.data[25]=input.a52;
output.data[26]=input.a53;
output.data[27]=input.a54;
output.data[28]=input.a55;
output.data[29]=input.a56;
output.data[30]=input.a61;
output.data[31]=input.a62;
output.data[32]=input.a63;
output.data[33]=input.a64;
output.data[34]=input.a65;
output.data[35]=input.a66;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix2x2_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(2,1));
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.a11=input.data[0];
output.a12=input.data[1];
output.a21=input.data[2];
output.a22=input.data[3];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix3x3_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(3,1));
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.a11=input.data[0];
output.a12=input.data[1];
output.a13=input.data[2];
output.a21=input.data[3];
output.a22=input.data[4];
output.a23=input.data[5];
output.a31=input.data[6];
output.a32=input.data[7];
output.a33=input.data[8];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix4x4_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(4,1));
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.a11=input.data[0];
output.a12=input.data[1];
output.a13=input.data[2];
output.a14=input.data[3];
output.a21=input.data[4];
output.a22=input.data[5];
output.a23=input.data[6];
output.a24=input.data[7];
output.a31=input.data[8];
output.a32=input.data[9];
output.a33=input.data[10];
output.a34=input.data[11];
output.a41=input.data[12];
output.a42=input.data[13];
output.a43=input.data[14];
output.a44=input.data[15];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix5x5_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(5,1));
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.a11=input.data[0];
output.a12=input.data[1];
output.a13=input.data[2];
output.a14=input.data[3];
output.a15=input.data[4];
output.a21=input.data[5];
output.a22=input.data[6];
output.a23=input.data[7];
output.a24=input.data[8];
output.a25=input.data[9];
output.a31=input.data[10];
output.a32=input.data[11];
output.a33=input.data[12];
output.a34=input.data[13];
output.a35=input.data[14];
output.a41=input.data[15];
output.a42=input.data[16];
output.a43=input.data[17];
output.a44=input.data[18];
output.a45=input.data[19];
output.a51=input.data[20];
output.a52=input.data[21];
output.a53=input.data[22];
output.a54=input.data[23];
output.a55=input.data[24];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix6x6_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(6,1));
if (input.getNumRows$() != output.getNumRows$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows do not match"]);
if (input.getNumCols$() != output.getNumCols$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns do not match"]);
output.a11=input.data[0];
output.a12=input.data[1];
output.a13=input.data[2];
output.a14=input.data[3];
output.a15=input.data[4];
output.a16=input.data[5];
output.a21=input.data[6];
output.a22=input.data[7];
output.a23=input.data[8];
output.a24=input.data[9];
output.a25=input.data[10];
output.a26=input.data[11];
output.a31=input.data[12];
output.a32=input.data[13];
output.a33=input.data[14];
output.a34=input.data[15];
output.a35=input.data[16];
output.a36=input.data[17];
output.a41=input.data[18];
output.a42=input.data[19];
output.a43=input.data[20];
output.a44=input.data[21];
output.a45=input.data[22];
output.a46=input.data[23];
output.a51=input.data[24];
output.a52=input.data[25];
output.a53=input.data[26];
output.a54=input.data[27];
output.a55=input.data[28];
output.a56=input.data[29];
output.a61=input.data[30];
output.a62=input.data[31];
output.a63=input.data[32];
output.a64=input.data[33];
output.a65=input.data[34];
output.a66=input.data[35];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix2_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[2, 1]);
if (output.getNumRows$() != 1 && output.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(output.getNumRows$(), output.getNumCols$());
if (length != 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 2.  It is " + length]);
output.data[0]=input.a1;
output.data[1]=input.a2;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix3_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[3, 1]);
if (output.getNumRows$() != 1 && output.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(output.getNumRows$(), output.getNumCols$());
if (length != 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 3.  It is " + length]);
output.data[0]=input.a1;
output.data[1]=input.a2;
output.data[2]=input.a3;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix4_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[4, 1]);
if (output.getNumRows$() != 1 && output.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(output.getNumRows$(), output.getNumCols$());
if (length != 4) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 4.  It is " + length]);
output.data[0]=input.a1;
output.data[1]=input.a2;
output.data[2]=input.a3;
output.data[3]=input.a4;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix5_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[5, 1]);
if (output.getNumRows$() != 1 && output.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(output.getNumRows$(), output.getNumCols$());
if (length != 5) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 5.  It is " + length]);
output.data[0]=input.a1;
output.data[1]=input.a2;
output.data[2]=input.a3;
output.data[3]=input.a4;
output.data[4]=input.a5;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_FixedMatrix6_64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(1,1).c$$I$I,[6, 1]);
if (output.getNumRows$() != 1 && output.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(output.getNumRows$(), output.getNumCols$());
if (length != 6) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 6.  It is " + length]);
output.data[0]=input.a1;
output.data[1]=input.a2;
output.data[2]=input.a3;
output.data[3]=input.a4;
output.data[4]=input.a5;
output.data[5]=input.a6;
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix2_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(7,1));
if (input.getNumRows$() != 1 && input.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(input.getNumRows$(), input.getNumCols$());
if (length != 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 2.  It is " + length]);
output.a1=input.data[0];
output.a2=input.data[1];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix3_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(8,1));
if (input.getNumRows$() != 1 && input.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(input.getNumRows$(), input.getNumCols$());
if (length != 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 3.  It is " + length]);
output.a1=input.data[0];
output.a2=input.data[1];
output.a3=input.data[2];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix4_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(9,1));
if (input.getNumRows$() != 1 && input.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(input.getNumRows$(), input.getNumCols$());
if (length != 4) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 4.  It is " + length]);
output.a1=input.data[0];
output.a2=input.data[1];
output.a3=input.data[2];
output.a4=input.data[3];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix5_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(10,1));
if (input.getNumRows$() != 1 && input.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(input.getNumRows$(), input.getNumCols$());
if (length != 5) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 5.  It is " + length]);
output.a1=input.data[0];
output.a2=input.data[1];
output.a3=input.data[2];
output.a4=input.data[3];
output.a5=input.data[4];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_FixedMatrix6_64F', function (input, output) {
if (output == null ) output=Clazz.new_($I$(11,1));
if (input.getNumRows$() != 1 && input.getNumCols$() != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["One row or column must have a length of 1 for it to be a vector"]);
var length=Math.max(input.getNumRows$(), input.getNumCols$());
if (length != 6) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of input vector is not 6.  It is " + length]);
output.a1=input.data[0];
output.a2=input.data[1];
output.a3=input.data[2];
output.a4=input.data[3];
output.a5=input.data[4];
output.a6=input.data[5];
return output;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F', function (input, output) {
$I$(12).convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F(input, output);
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F', function (input, output) {
return $I$(12).convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F(input, output);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
