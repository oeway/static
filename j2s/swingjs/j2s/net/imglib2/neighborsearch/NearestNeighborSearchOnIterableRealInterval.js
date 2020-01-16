(function(){var P$=Clazz.newPackage("net.imglib2.neighborsearch"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NearestNeighborSearchOnIterableRealInterval", null, null, 'net.imglib2.neighborsearch.NearestNeighborSearch');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.element=null;
this.squareDistance=1.7976931348623157E308;
}, 1);

C$.$fields$=[['D',['squareDistance'],'I',['n'],'O',['iterable','net.imglib2.IterableRealInterval','element','net.imglib2.RealCursor','referenceLocation','double[]']]]

Clazz.newMeth(C$, 'squareDistance$net_imglib2_RealLocalizable', function (query) {
var squareSum=0;
for (var d=0; d < this.n; ++d) {
var distance=query.getDoublePosition$I(d) - this.referenceLocation[d];
squareSum += distance * distance;
}
return squareSum;
});

Clazz.newMeth(C$, 'c$$net_imglib2_IterableRealInterval', function (iterable) {
;C$.$init$.apply(this);
this.iterable=iterable;
this.n=iterable.numDimensions$();
this.referenceLocation=Clazz.array(Double.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'search$net_imglib2_RealLocalizable', function (reference) {
this.squareDistance=1.7976931348623157E308;
reference.localize$DA(this.referenceLocation);
var cursor=this.iterable.localizingCursor$();
while (cursor.hasNext$()){
cursor.fwd$();
var cursorSquareDistance=this.squareDistance$net_imglib2_RealLocalizable(cursor);
if (this.squareDistance > cursorSquareDistance ) {
this.squareDistance=cursorSquareDistance;
this.element=cursor.copyCursor$();
}}
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.element;
});

Clazz.newMeth(C$, 'getSampler$', function () {
return this.element;
});

Clazz.newMeth(C$, 'getSquareDistance$', function () {
return this.squareDistance;
});

Clazz.newMeth(C$, 'getDistance$', function () {
return Math.sqrt(this.squareDistance);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_IterableRealInterval,[this.iterable]);
System.arraycopy$O$I$O$I$I(this.referenceLocation, 0, copy.referenceLocation, 0, this.referenceLocation.length);
copy.element=this.element;
copy.squareDistance=this.squareDistance;
return copy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
