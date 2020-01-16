(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.neighborsearch"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InverseDistanceWeightingInterpolator", null, 'net.imglib2.RealPoint', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['p','p2'],'I',['numNeighbors'],'O',['search','net.imglib2.neighborsearch.KNearestNeighborSearch','value','<T extends RealType<T>>']]]

Clazz.newMeth(C$, 'c$$net_imglib2_neighborsearch_KNearestNeighborSearch$D', function (search, p) {
;C$.superclazz.c$$I.apply(this,[search.numDimensions$()]);C$.$init$.apply(this);
this.search=search;
this.p=p;
this.p2=p / 2.0;
search.search$net_imglib2_RealLocalizable(this);
this.value=search.getSampler$I(0).get$().copy$();
this.numNeighbors=search.getK$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.search.search$net_imglib2_RealLocalizable(this);
if (this.numNeighbors == 1 || this.search.getSquareDistance$I(0) / this.search.getSquareDistance$I(1) < 4.94E-321  ) this.value.set$TT(this.search.getSampler$I(0).get$());
 else {
var sumIntensity=0;
var sumWeights=0;
for (var i=0; i < this.numNeighbors; ++i) {
var sampler=this.search.getSampler$I(i);
if (sampler == null ) break;
var t=sampler.get$();
var weight=this.computeWeight$D(this.search.getSquareDistance$I(i));
sumWeights += weight;
sumIntensity += t.getRealDouble$() * weight;
}
this.value.setReal$D(sumIntensity / sumWeights);
}return this.value;
});

Clazz.newMeth(C$, 'computeWeight$D', function (squareDistance) {
return 1.0 / Math.pow(squareDistance, this.p2);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_neighborsearch_KNearestNeighborSearch$D,[this.search.copy$(), this.p]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
