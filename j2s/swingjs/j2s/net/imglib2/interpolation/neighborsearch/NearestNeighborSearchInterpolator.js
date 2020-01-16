(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.neighborsearch"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NearestNeighborSearchInterpolator", null, 'net.imglib2.RealPoint', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['search','net.imglib2.neighborsearch.NearestNeighborSearch']]]

Clazz.newMeth(C$, 'c$$net_imglib2_neighborsearch_NearestNeighborSearch', function (search) {
;C$.superclazz.c$$I.apply(this,[search.numDimensions$()]);C$.$init$.apply(this);
this.search=search;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.search.search$net_imglib2_RealLocalizable(this);
return this.search.getSampler$().get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_neighborsearch_NearestNeighborSearch,[this.search.copy$()]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
