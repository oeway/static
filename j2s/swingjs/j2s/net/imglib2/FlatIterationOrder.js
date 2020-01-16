(function(){var P$=Clazz.newPackage("net.imglib2"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FlatIterationOrder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['interval','net.imglib2.Interval']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.$init$.apply(this);
this.interval=interval;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "net.imglib2.FlatIterationOrder"))) return false;
var i=(obj).interval;
var l1=p$1.validIndices$net_imglib2_Interval.apply(this, [i]);
var l2=p$1.validIndices$net_imglib2_Interval.apply(this, [this.interval]);
if (l1.size$() != l2.size$()) return false;
for (var d=0; d < l1.size$(); d++) {
if (i.min$I((l1.get$I(d)).valueOf()) != this.interval.min$I((l2.get$I(d)).valueOf()) || i.dimension$I((l1.get$I(d)).valueOf()) != this.interval.dimension$I((l2.get$I(d)).valueOf()) ) return false;
}
return true;
});

Clazz.newMeth(C$, 'validIndices$net_imglib2_Interval', function (i) {
var indices=Clazz.new_(1,{E:"Integer"},$I$(1,1).c$$I,[i.numDimensions$()]);
for (var j=0; j < i.numDimensions$(); j++) {
if (i.dimension$I(j) > 1) indices.add$TE(new Integer(j));
}
return indices;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
