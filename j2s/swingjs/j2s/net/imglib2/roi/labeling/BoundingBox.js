(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),I$=[[0,'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BoundingBox", null, 'net.imglib2.AbstractInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
$I$(1).fill$JA$J(this.max, -9223372036854775808);
$I$(1).fill$JA$J(this.min, 9223372036854775807);
}, 1);

Clazz.newMeth(C$, 'update$net_imglib2_Localizable', function (position) {
for (var d=0; d < this.min.length; d++) {
var p=position.getLongPosition$I(d);
if (p < this.min[d]) this.min[d]=p;
if (p > this.max[d]) this.max[d]=p;
}
});

Clazz.newMeth(C$, 'update$JA', function (position) {
for (var d=0; d < this.min.length; d++) {
if (position[d] < this.min[d]) this.min[d]=position[d];
if (position[d] > this.max[d]) this.max[d]=position[d];
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
