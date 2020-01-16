(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer.permutation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractPermutationTransform", null, null, 'net.imglib2.transform.InvertibleTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['lut','int[]','+inverseLut']]]

Clazz.newMeth(C$, 'c$$IA', function (lut) {
;C$.$init$.apply(this);
this.lut=lut.clone$();
this.inverseLut=Clazz.array(Integer.TYPE, [lut.length]);
for (var i=0; i < lut.length; ++i) this.inverseLut[lut[i]]=i;

}, 1);

Clazz.newMeth(C$, 'apply$I', function (x) {
return this.lut[x];
});

Clazz.newMeth(C$, 'applyChecked$I', function (x) {
if (x < 0) return -9223372036854775807;
 else if (x >= this.lut.length) return 9223372036854775807;
 else return this.apply$I(x);
});

Clazz.newMeth(C$, 'applyInverse$I', function (y) {
return this.inverseLut[y];
});

Clazz.newMeth(C$, 'applyInverseChecked$I', function (y) {
if (y < 0) return -9223372036854775807;
 else if (y >= this.lut.length) return 9223372036854775807;
 else return this.applyInverse$I(y);
});

Clazz.newMeth(C$, 'getLutCopy$', function () {
return this.lut.clone$();
});

Clazz.newMeth(C$, 'getInverseLutCopy$', function () {
return this.inverseLut.clone$();
});

Clazz.newMeth(C$, 'checkBijectivity$IA', function (lut) {
var inverseLut=Clazz.array(Integer.TYPE, [lut.length]);
try {
for (var i=0; i < lut.length; ++i) inverseLut[i]=-1;

for (var i=0; i < lut.length; ++i) inverseLut[lut[i]]=i;

for (var i=0; i < lut.length; ++i) if (inverseLut[i] == -1) return false;

return true;
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
