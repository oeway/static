(function(){var P$=Clazz.newPackage("net.imglib2.iterator"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OffsetableIntervalIterator", null, 'net.imglib2.iterator.IntervalIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (dimensions) {
;C$.superclazz.c$$IA.apply(this,[dimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (min, max) {
;C$.superclazz.c$$JA$JA.apply(this,[min, max]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$IA$IA', function (min, max) {
;C$.superclazz.c$$IA$IA.apply(this,[min, max]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setMin$IA', function (min) {
for (var d=0; d < this.n; ++d) {
this.min[d]=min[d];
this.max[d]=this.dimensions[d] + min[d] - 1;
}
this.reset$();
});

Clazz.newMeth(C$, 'setMin$JA', function (min) {
for (var d=0; d < this.n; ++d) {
this.min[d]=min[d];
this.max[d]=this.dimensions[d] + min[d] - 1;
}
this.reset$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
