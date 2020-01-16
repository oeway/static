(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealSum");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['flags','boolean[]','sums','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.flags=Clazz.array(Boolean.TYPE, [1]);
this.sums=Clazz.array(Double.TYPE, [1]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (capacity) {
;C$.$init$.apply(this);
var ldu=$I$(1).ldu$I(capacity) + 1;
this.flags=Clazz.array(Boolean.TYPE, [ldu]);
this.sums=Clazz.array(Double.TYPE, [ldu]);
}, 1);

Clazz.newMeth(C$, 'getSum$', function () {
var sum=0;
for (var s, $s = 0, $$s = this.sums; $s<$$s.length&&((s=($$s[$s])),1);$s++) sum += s;

return sum;
});

Clazz.newMeth(C$, 'expand$D', function (s) {
var oldSums=this.sums;
this.sums=Clazz.array(Double.TYPE, [oldSums.length + 1]);
System.arraycopy$O$I$O$I$I(oldSums, 0, this.sums, 0, oldSums.length);
this.sums[oldSums.length]=s;
var oldFlags=this.flags;
this.flags=Clazz.array(Boolean.TYPE, [this.sums.length]);
System.arraycopy$O$I$O$I$I(oldFlags, 0, this.flags, 0, oldFlags.length);
this.flags[oldSums.length]=true;
});

Clazz.newMeth(C$, 'add$D', function (a) {
var i=0;
var s=a;
try {
while (this.flags[i]){
this.flags[i]=false;
s += this.sums[i];
this.sums[i]=0.0;
++i;
}
this.flags[i]=true;
this.sums[i]=s;
return;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
this.expand$D(s);
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
