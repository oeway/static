(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.neighborsearch.NearestNeighborSearchOnIterableRealInterval','net.imglib2.roi.geom.real.RealPointCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NNSRealPointCollection", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.geom.real.RealPointCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['interval','net.imglib2.IterableRealInterval','search','net.imglib2.neighborsearch.NearestNeighborSearch']]]

Clazz.newMeth(C$, 'c$$net_imglib2_IterableRealInterval', function (interval) {
C$.c$$net_imglib2_IterableRealInterval$net_imglib2_neighborsearch_NearestNeighborSearch.apply(this, [interval, Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_IterableRealInterval,[interval])]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_IterableRealInterval$net_imglib2_neighborsearch_NearestNeighborSearch', function (interval, search) {
;C$.superclazz.c$$I.apply(this,[interval.numDimensions$()]);C$.$init$.apply(this);
this.interval=interval;
if (search == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["search cannot be null"]);
this.search=search;
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
this.search.search$net_imglib2_RealLocalizable(l);
return this.search.getSquareDistance$() <= 0 ;
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.interval.realMax$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.interval.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.interval.realMin$net_imglib2_RealPositionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.interval.realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.interval.realMax$DA(max);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.interval.realMax$net_imglib2_RealPositionable(max);
});

Clazz.newMeth(C$, 'points$', function () {
return this.interval;
});

Clazz.newMeth(C$, 'size$', function () {
return this.interval.size$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.RealPointCollection") && $I$(2).equals$net_imglib2_roi_geom_real_RealPointCollection$net_imglib2_roi_geom_real_RealPointCollection(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(2).hashCode$net_imglib2_roi_geom_real_RealPointCollection(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
