(function(){var P$=java.util,p$1={};
/*c*/var C$=Clazz.newClass(P$, "DoubleSummaryStatistics", null, null, 'java.util.function.DoubleConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.min=Infinity;
this.max=-Infinity;
}, 1);

C$.$fields$=[['D',['sum','sumCompensation','simpleSum','min','max'],'L',['count']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$'], function (value) {
++this.count;
this.simpleSum += value;
p$1.sumWithCompensation$D.apply(this, [value]);
this.min=Math.min(this.min, value);
this.max=Math.max(this.max, value);
});

Clazz.newMeth(C$, 'combine$java_util_DoubleSummaryStatistics', function (other) {
this.count+=other.count;
this.simpleSum += other.simpleSum;
p$1.sumWithCompensation$D.apply(this, [other.sum]);
p$1.sumWithCompensation$D.apply(this, [other.sumCompensation]);
this.min=Math.min(this.min, other.min);
this.max=Math.max(this.max, other.max);
});

Clazz.newMeth(C$, 'sumWithCompensation$D', function (value) {
var tmp=value - this.sumCompensation;
var velvel=this.sum + tmp;
this.sumCompensation=(velvel - this.sum) - tmp;
this.sum=velvel;
}, p$1);

Clazz.newMeth(C$, 'getCount$', function () {
return this.count;
});

Clazz.newMeth(C$, 'getSum$', function () {
var tmp=this.sum + this.sumCompensation;
if (Double.isNaN$D(tmp) && Double.isInfinite$D(this.simpleSum) ) return this.simpleSum;
 else return tmp;
});

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'getAverage$', function () {
return this.getCount$() > 0 ? this.getSum$() / this.getCount$() : 0.0;
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("%s{count=%d, sum=%f, min=%f, average=%f, max=%f}", [this.getClass$().getSimpleName$(), new Long(this.getCount$()), new Double(this.getSum$()), new Double(this.getMin$()), new Double(this.getAverage$()), new Double(this.getMax$())]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
