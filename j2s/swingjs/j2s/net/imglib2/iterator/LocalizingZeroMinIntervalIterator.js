(function(){var P$=Clazz.newPackage("net.imglib2.iterator"),I$=[[0,'net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LocalizingZeroMinIntervalIterator", null, 'net.imglib2.iterator.LocalizingIntervalIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (dimensions) {
;C$.superclazz.c$$IA.apply(this,[dimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fwd$', function () {
++this.index;
for (var d=0; d < this.n; ++d) {
if (++this.position[d] > this.max[d]) this.position[d]=0;
 else break;
}
});

Clazz.newMeth(C$, 'jumpFwd$J', function (i) {
this.index+=i;
$I$(1).indexToPosition$J$JA$JA(this.index, this.dimensions, this.position);
});

Clazz.newMeth(C$, 'reset$', function () {
this.index=-1;
this.position[0]=-1;
for (var d=1; d < this.n; ++d) this.position[d]=0;

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
