(function(){var P$=Clazz.newPackage("net.imglib2.util"),p$1={},I$=[[0,'java.text.DecimalFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StopWatch");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.format=Clazz.new_($I$(1,1).c$$S,["#0.000"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['running'],'L',['time','total','started']]
,['O',['format','java.text.DecimalFormat']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.time=System.nanoTime$();
this.total=0;
this.started=0;
this.running=false;
}, 1);

Clazz.newMeth(C$, 'createStopped$', function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'createAndStart$', function () {
var sw=Clazz.new_(C$);
sw.start$();
return sw;
}, 1);

Clazz.newMeth(C$, 'safeNanos', function () {
var t=System.nanoTime$();
if (t > this.time) this.time=t;
return this.time;
}, p$1);

Clazz.newMeth(C$, 'start$', function () {
if (this.running) this.stop$();
this.started=p$1.safeNanos.apply(this, []);
this.running=true;
});

Clazz.newMeth(C$, 'stop$', function () {
if (this.running) this.total+=p$1.safeNanos.apply(this, []) - this.started;
this.running=false;
});

Clazz.newMeth(C$, 'nanoTime$', function () {
if (this.running) return this.total + p$1.safeNanos.apply(this, []) - this.started;
 else return this.total;
});

Clazz.newMeth(C$, 'seconds$', function () {
return this.nanoTime$() * 1.0E-9;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.secondsToString$D(this.seconds$());
});

Clazz.newMeth(C$, 'secondsToString$D', function (seconds) {
var abs=Math.abs(seconds);
if (abs < 1.0E-6 ) return C$.format.format$D(seconds * 1.0E9) + " ns";
if (abs < 0.001 ) return C$.format.format$D(seconds * 1000000.0) + " \u00b5s";
if (abs < 1 ) return C$.format.format$D(seconds * 1000.0) + " ms";
return C$.format.format$D(seconds) + " s";
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
