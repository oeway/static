(function(){var P$=Clazz.newPackage("net.imglib2.neighborsearch"),I$=[[0,'net.imglib2.RealCursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "KNearestNeighborSearchOnIterableRealInterval", null, null, 'net.imglib2.neighborsearch.KNearestNeighborSearch');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['k','n'],'O',['iterable','net.imglib2.IterableRealInterval','elements','net.imglib2.RealCursor[]','squareDistances','double[]','+referenceLocation']]]

Clazz.newMeth(C$, 'squareDistance$net_imglib2_RealLocalizable', function (query) {
var squareSum=0;
for (var d=0; d < this.n; ++d) {
var distance=query.getDoublePosition$I(d) - this.referenceLocation[d];
squareSum += distance * distance;
}
return squareSum;
});

Clazz.newMeth(C$, 'c$$net_imglib2_IterableRealInterval$I', function (iterable, k) {
;C$.$init$.apply(this);
this.iterable=iterable;
this.k=k;
this.n=iterable.numDimensions$();
this.elements=(Clazz.array($I$(1), [k]));
this.squareDistances=Clazz.array(Double.TYPE, [k]);
this.referenceLocation=Clazz.array(Double.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'getK$', function () {
return this.k;
});

Clazz.newMeth(C$, 'search$net_imglib2_RealLocalizable', function (reference) {
for (var i=0; i < this.k; ++i) this.squareDistances[i]=1.7976931348623157E308;

reference.localize$DA(this.referenceLocation);
var cursor=this.iterable.localizingCursor$();
while (cursor.hasNext$()){
cursor.fwd$();
var squareDistance=this.squareDistance$net_imglib2_RealLocalizable(cursor);
var i=this.k - 1;
if (this.squareDistances[i] > squareDistance ) {
var candidate=cursor.copyCursor$();
for (var j=i - 1; i > 0 && this.squareDistances[j] > squareDistance  ; --i, --j) {
this.squareDistances[i]=this.squareDistances[j];
this.elements[i]=this.elements[j];
}
this.squareDistances[i]=squareDistance;
this.elements[i]=candidate;
}}
});

Clazz.newMeth(C$, 'getPosition$I', function (i) {
return this.elements[i];
});

Clazz.newMeth(C$, 'getSampler$I', function (i) {
return this.elements[i];
});

Clazz.newMeth(C$, 'getSquareDistance$I', function (i) {
return this.squareDistances[i];
});

Clazz.newMeth(C$, 'getDistance$I', function (i) {
return Math.sqrt(this.squareDistances[i]);
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.getPosition$I(0);
});

Clazz.newMeth(C$, 'getSampler$', function () {
return this.getSampler$I(0);
});

Clazz.newMeth(C$, 'getSquareDistance$', function () {
return this.getSquareDistance$I(0);
});

Clazz.newMeth(C$, 'getDistance$', function () {
return this.getDistance$I(0);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_IterableRealInterval$I,[this.iterable, this.k]);
System.arraycopy$O$I$O$I$I(this.referenceLocation, 0, copy.referenceLocation, 0, this.referenceLocation.length);
for (var i=0; i < this.k; ++i) {
copy.elements[i]=this.elements[i];
copy.squareDistances[i]=this.squareDistances[i];
}
return copy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
