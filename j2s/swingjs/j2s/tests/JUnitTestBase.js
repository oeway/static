(function(){var P$=Clazz.newPackage("tests"),I$=[[0,'java.util.Arrays','net.imglib2.util.Intervals','net.imglib2.img.array.ArrayImgFactory','net.imglib2.type.numeric.real.FloatType',['.UnitTestBase','.TestGenerator'],['.UnitTestBase','.SinglePixel3D'],'StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JUnitTestBase", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Function',12],['TestGenerator',4],['SinglePixel3D',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'match$net_imglib2_img_Img$JUnitTestBase_Function', function (image, $function) {
var cursor=image.localizingCursor$();
var pos=Clazz.array(Long.TYPE, [cursor.numDimensions$()]);
while (cursor.hasNext$()){
cursor.fwd$();
cursor.localize$JA(pos);
if ($function.calculate$(pos) != cursor.get$().getRealFloat$() ) return false;
}
return true;
});

Clazz.newMeth(C$, 'match$net_imglib2_img_Img$JUnitTestBase_Function$F', function (image, $function, tolerance) {
var cursor=image.localizingCursor$();
var pos=Clazz.array(Long.TYPE, [cursor.numDimensions$()]);
while (cursor.hasNext$()){
cursor.fwd$();
cursor.localize$JA(pos);
if (Math.abs($function.calculate$(pos) - cursor.get$().getRealFloat$()) > tolerance ) return false;
}
return true;
});

Clazz.newMeth(C$, 'signature$net_imglib2_img_Img', function (image) {
var result=Clazz.array(Float.TYPE, [(image.numDimensions$() + 1) * 2]);
this.signature$net_imglib2_img_Img$FA(image, result);
return result;
});

Clazz.newMeth(C$, 'signature$net_imglib2_img_Img$FA', function (image, result) {
$I$(1).fill$FA$F(result, 0);
var cursor=image.localizingCursor$();
var dim=cursor.numDimensions$();
var pos=Clazz.array(Integer.TYPE, [dim]);
while (cursor.hasNext$()){
cursor.fwd$();
cursor.localize$IA(pos);
var value=cursor.get$().getRealFloat$();
result[0] += value;
result[dim + 1] += value * value;
for (var i=0; i < dim; i++) {
result[i + 1] += value * pos[i];
result[i + 1 + dim + 1 ] += value * pos[i] * pos[i] ;
}
}
for (var i=1; i < dim + 1; i++) {
result[i] /= result[0];
result[i + dim + 1 ]=Math.sqrt(result[i + dim + 1 ] / result[0] - result[i] * result[i]);
}
var dims=$I$(2).dimensionsAsLongArray$net_imglib2_Dimensions(image);
var total=dims[0];
for (var i=1; i < dim; i++) total *= dims[i];

result[0] /= total;
result[dim + 1]=Math.sqrt(result[dim + 1] / total - result[0] * result[0]);
});

Clazz.newMeth(C$, 'matchSignature$net_imglib2_img_Img$FA', function (image, signature) {
var result=this.signature$net_imglib2_img_Img(image);
return $I$(1).equals$FA$FA(result, signature);
});

Clazz.newMeth(C$, 'matchSignature$net_imglib2_img_Img$FA$F', function (image, signature, tolerance) {
var result=this.signature$net_imglib2_img_Img(image);
for (var i=0; i < signature.length; i++) if (Math.abs(result[i] - signature[i]) > tolerance ) return false;

return true;
});

Clazz.newMeth(C$, 'get$net_imglib2_img_Img$IA', function (image, pos) {
var cursor=image.randomAccess$();
cursor.setPosition$IA(pos);
var result=cursor.get$().getRealFloat$();
return result;
});

Clazz.newMeth(C$, 'get3D$net_imglib2_img_Img$I$I$I', function (image, x, y, z) {
return this.get$net_imglib2_img_Img$IA(image, Clazz.array(Integer.TYPE, -1, [x, y, z]));
});

Clazz.newMeth(C$, 'makeImage$TT$JUnitTestBase_Function$JA', function (type, $function, dims) {
var factory=Clazz.new_(1,{T:"Object"},$I$(3,1).c$$TT,[type]);
var result=factory.create$JA(dims);
var cursor=result.cursor$();
var pos=Clazz.array(Long.TYPE, [cursor.numDimensions$()]);
while (cursor.hasNext$()){
cursor.fwd$();
cursor.localize$JA(pos);
var value=$function.calculate$(pos);
cursor.get$().setReal$F(value);
}
return result;
});

Clazz.newMeth(C$, 'makeTestImage3D$J', function (cubeLength) {
return this.makeImage$TT$JUnitTestBase_Function$JA(Clazz.new_($I$(4,1)), Clazz.new_($I$(5,1).c$$F, [this, null, cubeLength]), Clazz.array(Long.TYPE, -1, [cubeLength, cubeLength, cubeLength]));
});

Clazz.newMeth(C$, 'makeSinglePixel3D$J$J$J$J', function (cubeLength, x, y, z) {
return this.makeImage$TT$JUnitTestBase_Function$JA(Clazz.new_($I$(4,1)), Clazz.new_($I$(6,1).c$$J$J$J, [this, null, x, y, z]), Clazz.array(Long.TYPE, -1, [cubeLength, cubeLength, cubeLength]));
});

Clazz.newMeth(C$, 'toString$FA', function (array) {
if (array == null ) return "(null)";
if (array.length == 0) return "()";
var buffer=Clazz.new_($I$(7,1));
buffer.append$S("( " + new Float(array[0]).toString());
for (var i=1; i < array.length; i++) buffer.append$S("f, " + new Float(array[i]).toString());

buffer.append$S("f )");
return buffer.toString();
});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JUnitTestBase, "Function", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JUnitTestBase, "TestGenerator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['_.JUnitTestBase','JUnitTestBase.Function']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['F',['factor']]]

Clazz.newMeth(C$, 'c$$F', function (factor) {
;C$.$init$.apply(this);
this.factor=factor;
}, 1);

Clazz.newMeth(C$, ['calculate$JA','calculate$'], function (pos) {
return 1 + pos[0] + 2 * (pos[0] + 1) * pos[1]   + this.factor * pos[2] * pos[2] ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JUnitTestBase, "SinglePixel3D", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['_.JUnitTestBase','JUnitTestBase.Function']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['x','y','z']]]

Clazz.newMeth(C$, 'c$$J$J$J', function (x, y, z) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
this.z=z;
}, 1);

Clazz.newMeth(C$, ['calculate$JA','calculate$'], function (pos) {
return pos[0] == this.x && pos[1] == this.y  && pos[2] == this.z  ? 1 : 0;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:18 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
