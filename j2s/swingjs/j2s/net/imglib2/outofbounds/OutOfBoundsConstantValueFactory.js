(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,'net.imglib2.outofbounds.OutOfBoundsConstantValue']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsConstantValueFactory", null, null, 'net.imglib2.outofbounds.OutOfBoundsFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['value','<T extends Type<T>>']]]

Clazz.newMeth(C$, ['c$$TT'], function (value) {
;C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, ['setValue$TT'], function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, ['create$TF','create$'], function (f) {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$TF$TT,[f, this.value.copy$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
