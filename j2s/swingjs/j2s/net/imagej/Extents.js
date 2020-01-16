(function(){var P$=Clazz.newPackage("net.imagej"),p$1={},I$=[[0,'net.imagej.Position','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Extents", null, 'net.imglib2.AbstractInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['numElements']]]

Clazz.newMeth(C$, 'c$$JA', function (dims) {
;C$.superclazz.c$$JA.apply(this,[dims]);C$.$init$.apply(this);
this.numElements=p$1.calcNumElements.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (min, max) {
;C$.superclazz.c$$JA$JA.apply(this,[min, max]);C$.$init$.apply(this);
this.numElements=p$1.calcNumElements.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createPosition$', function () {
return Clazz.new_($I$(1,1).c$$net_imagej_Extents,[this]);
});

Clazz.newMeth(C$, 'numElements$', function () {
return this.numElements;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(2,1).c$$S,["{"]);
for (var d=0; d < this.numDimensions$(); d++) {
sb.append$S(" " + this.dimension$I(d));
}
sb.append$S(" }");
return sb.toString();
});

Clazz.newMeth(C$, 'calcNumElements', function () {
if (this.min.length == 0) return 0;
var elements=1;
for (var i=0; i < this.min.length; i++) elements*=this.dimension$I(i);

return elements;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
