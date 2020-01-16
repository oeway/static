(function(){var P$=Clazz.newPackage("net.imagej.space"),I$=[[0,'java.util.ArrayList','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractAnnotatedSpace", null, null, 'net.imagej.space.AnnotatedSpace');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['axisList','java.util.List']]]

Clazz.newMeth(C$, ['c$$I'], function (numDims) {
;C$.$init$.apply(this);
this.axisList=Clazz.new_(1,{E:"Object"},$I$(1,1).c$$I,[numDims]);
for (var d=0; d < numDims; d++) {
this.axisList.add$TE(null);
}
}, 1);

Clazz.newMeth(C$, ['c$$TAA'], function (axes) {
C$.c$$java_util_List.apply(this, [$I$(2).asList$TTA(axes)]);
}, 1);

Clazz.newMeth(C$, ['c$$java_util_List'], function (axes) {
;C$.$init$.apply(this);
this.axisList=Clazz.new_(1,{E:"Object"},$I$(1,1).c$$I,[axes.size$()]);
this.axisList.addAll$java_util_Collection(axes);
}, 1);

Clazz.newMeth(C$, 'axis$I', function (d) {
return this.axisList.get$I(d);
});

Clazz.newMeth(C$, ['axes$TAA'], function (axes) {
for (var d=0; d < axes.length; d++) {
axes[d]=this.axis$I(d);
}
});

Clazz.newMeth(C$, ['setAxis$TA$I'], function (axis, d) {
while (this.axisList.size$() <= d){
this.axisList.add$TE(null);
}
this.axisList.set$I$TE(d, axis);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.axisList.size$();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
