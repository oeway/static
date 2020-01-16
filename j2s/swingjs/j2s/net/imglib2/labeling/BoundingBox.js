(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BoundingBox");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['min','long[]','+max']]]

Clazz.newMeth(C$, 'c$$I', function (dimensions) {
;C$.$init$.apply(this);
this.min=Clazz.array(Long.TYPE, [dimensions]);
this.max=Clazz.array(Long.TYPE, [dimensions]);
$I$(1).fill$JA$J(this.max, -2147483648);
$I$(1).fill$JA$J(this.min, 2147483647);
}, 1);

Clazz.newMeth(C$, 'getDimensions$', function () {
return this.min.length;
});

Clazz.newMeth(C$, 'getExtents$JA$JA', function (destMin, destMax) {
if (destMin != null ) System.arraycopy$O$I$O$I$I(this.min, 0, destMin, 0, this.min.length);
if (destMax != null ) System.arraycopy$O$I$O$I$I(this.max, 0, destMax, 0, this.max.length);
});

Clazz.newMeth(C$, 'update$JA', function (position) {
for (var i=0; i < this.min.length; i++) {
if (position[i] < this.min[i]) this.min[i]=position[i];
if (position[i] > this.max[i]) this.max[i]=position[i];
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
