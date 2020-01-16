(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultAxisType", null, null, ['net.imagej.axis.AxisType', 'java.io.Serializable', 'Comparable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['spatial'],'S',['label']]]

Clazz.newMeth(C$, 'c$$S', function (label) {
C$.c$$S$Z.apply(this, [label, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (label, spatial) {
;C$.$init$.apply(this);
this.label=label;
this.spatial=spatial;
}, 1);

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'isXY$', function () {
return (this === $I$(1).X  || this === $I$(1).Y  );
});

Clazz.newMeth(C$, 'isSpatial$', function () {
return this.spatial;
});

Clazz.newMeth(C$, ['compareTo$net_imagej_axis_AxisType','compareTo$','compareTo$TT'], function (other) {
return this.getLabel$().compareTo$S(other.getLabel$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.label;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
