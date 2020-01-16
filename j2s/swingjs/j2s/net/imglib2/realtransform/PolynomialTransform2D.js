(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PolynomialTransform2D", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.order=0;
this.a=Clazz.array(Double.TYPE, [2]);
this.polTerms=Clazz.array(Double.TYPE, [0]);
}, 1);

C$.$fields$=[['I',['order'],'O',['a','double[]','+polTerms']]]

Clazz.newMeth(C$, 'orderOf$I', function (numPolTerms) {
return (Math.nextUp$D((Math.sqrt(2 * numPolTerms + 0.25) - 1.5))|0);
}, 1);

Clazz.newMeth(C$, 'numPolTerms$I', function (order) {
return (Math.round((order + 2) * (order + 1) * 0.5 )|0);
}, 1);

Clazz.newMeth(C$, 'set$DA', function (a) {
this.order=C$.orderOf$I((a.length/2|0));
var numPolTerms=C$.numPolTerms$I(this.order);
this.a=a;
this.polTerms=Clazz.array(Double.TYPE, [numPolTerms - 1]);
});

Clazz.newMeth(C$, 'populateTerms$D$D', function (x, y) {
if (this.order == 0) return;
this.polTerms[0]=x;
this.polTerms[1]=y;
for (var o=2, i=2; o <= this.order; ++o, i+=o) {
for (var p=0; p < o; ++p) {
this.polTerms[i + p]=this.polTerms[i + p - o] * x;
}
this.polTerms[i + o]=this.polTerms[i - 1] * y;
}
});

Clazz.newMeth(C$, 'printTerms$', function () {
var polTermString=Clazz.array(String, [this.polTerms.length]);
if (this.order == 0) System.out.println$S("No polynomial terms.");
polTermString[0]="x";
polTermString[1]="y";
for (var o=2, i=2; o <= this.order; ++o, i+=o) {
for (var p=0; p < o; ++p) {
polTermString[i + p]=polTermString[i + p - o] + "x";
}
polTermString[i + o]=polTermString[i - 1] + "y";
}
System.out.println$S($I$(1).toString$OA(polTermString));
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
this.populateTerms$D$D(source[0], source[1]);
target[0]=this.a[0];
for (var i=0; i < this.polTerms.length; ) target[0] += this.polTerms[i] * this.a[++i];

var numPolTerms=this.polTerms.length + 1;
target[1]=this.a[numPolTerms];
for (var i=0; i < this.polTerms.length; ) target[1] += this.polTerms[i] * this.a[++i + numPolTerms];

});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
this.populateTerms$D$D(source[0], source[1]);
var x=this.a[0];
for (var i=0; i < this.polTerms.length; ) x += this.polTerms[i] * this.a[++i];

var numPolTerms=this.polTerms.length + 1;
var y=this.a[numPolTerms];
for (var i=0; i < this.polTerms.length; ) y += this.polTerms[i] * this.a[++i + numPolTerms];

target[0]=x;
target[1]=y;
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
this.populateTerms$D$D(source.getDoublePosition$I(0), source.getDoublePosition$I(1));
var x=this.a[0];
for (var i=0; i < this.polTerms.length; ) x += this.polTerms[i] * this.a[++i];

var numPolTerms=this.polTerms.length + 1;
var y=this.a[numPolTerms];
for (var i=0; i < this.polTerms.length; ) y += this.polTerms[i] * this.a[++i + numPolTerms];

target.setPosition$D$I(x, 0);
target.setPosition$D$I(y, 1);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$);
copy.set$DA(this.a.clone$());
return copy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
