(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.neighborsearch"),I$=[[0,'net.imglib2.interpolation.neighborsearch.NearestNeighborSearchInterpolator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NearestNeighborSearchInterpolatorFactory", null, null, 'net.imglib2.interpolation.InterpolatorFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['create$net_imglib2_neighborsearch_NearestNeighborSearch','create$TF'], function (search) {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_neighborsearch_NearestNeighborSearch,[search.copy$()]);
});

Clazz.newMeth(C$, ['create$net_imglib2_neighborsearch_NearestNeighborSearch$net_imglib2_RealInterval','create$TF$net_imglib2_RealInterval'], function (search, interval) {
return this.create$net_imglib2_neighborsearch_NearestNeighborSearch(search);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
