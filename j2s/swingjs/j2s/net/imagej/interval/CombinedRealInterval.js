(function(){var P$=Clazz.newPackage("net.imagej.interval"),p$1={},I$=[[0,'java.util.HashMap',['net.imagej.interval.CombinedRealInterval','.MinMax']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CombinedRealInterval", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imagej.space.CombinedSpace', 'net.imagej.interval.TypedRealInterval');
C$.$classes$=[['MinMax',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minMax=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"net.imagej.interval.CombinedRealInterval.MinMax"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['minMax','java.util.HashMap']]]

Clazz.newMeth(C$, 'update$', function () {
{
C$.superclazz.prototype.update$.apply(this, []);
this.minMax.clear$();
for (var interval, $interval = this.iterator$(); $interval.hasNext$()&&((interval=($interval.next$())),1);) {
for (var d=0; d < interval.numDimensions$(); d++) {
var axisType=interval.axis$I(d).type$();
if (!this.minMax.containsKey$O(axisType)) {
this.minMax.put$TK$TV(axisType, Clazz.new_($I$(2,1), [this, null]));
}var mm=this.minMax.get$O(axisType);
mm.expand$D$D(interval.realMin$I(d), interval.realMax$I(d));
}
}
}});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return (p$1.minMax.apply(this, []).get$O(this.axis$I(d).type$())).min$();
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
for (var i=0; i < min.length; i++) min[i]=this.realMin$I(i);

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
for (var i=0; i < min.numDimensions$(); i++) min.setPosition$D$I(this.realMin$I(i), i);

});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return (p$1.minMax.apply(this, []).get$O(this.axis$I(d).type$())).max$();
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
for (var i=0; i < max.length; i++) max[i]=this.realMax$I(i);

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
for (var i=0; i < max.numDimensions$(); i++) max.setPosition$D$I(this.realMax$I(i), i);

});

Clazz.newMeth(C$, 'minMax', function () {
{
return this.minMax;
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CombinedRealInterval, "MinMax", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minMin=Infinity;
this.maxMax=-Infinity;
}, 1);

C$.$fields$=[['D',['minMin','maxMax']]]

Clazz.newMeth(C$, 'expand$D$D', function (min, max) {
if (min < this.minMin ) this.minMin=min;
if (max > this.maxMax ) this.maxMax=max;
});

Clazz.newMeth(C$, 'min$', function () {
return this.minMin;
});

Clazz.newMeth(C$, 'max$', function () {
return this.maxMax;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
