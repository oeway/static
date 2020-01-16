(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,'java.util.Random','net.imglib2.outofbounds.OutOfBoundsRandomValue']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsRandomValueFactory", null, null, 'net.imglib2.outofbounds.OutOfBoundsFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['min','max'],'O',['value','<T extends RealType<T>>','rnd','java.util.Random']]]

Clazz.newMeth(C$, ['c$$TT$D$D'], function (value, min, max) {
;C$.$init$.apply(this);
this.value=value;
this.min=min;
this.max=max;
this.rnd=Clazz.new_($I$(1,1).c$$J,[System.currentTimeMillis$()]);
}, 1);

Clazz.newMeth(C$, 'setMinMax$D$D', function (min, max) {
this.min=min;
this.max=max;
});

Clazz.newMeth(C$, 'setRandom$java_util_Random', function (rnd) {
this.rnd=rnd;
});

Clazz.newMeth(C$, ['create$TF','create$'], function (f) {
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$TF$TT$java_util_Random$D$D,[f, this.value.copy$(), this.rnd, this.min, this.max]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
