(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'java.util.HashMap','io.scif.img.Range']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageRegion");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dimRanges','java.util.Map']]]

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisTypeA$SA', function (axes, ranges) {
;C$.$init$.apply(this);
this.dimRanges=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"io.scif.img.Range"},$I$(1,1));
if (axes.length != ranges.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of axes: " + axes.length + " does not match number of ranges: " + ranges.length ]);
for (var i=0; i < axes.length; i++) {
this.addRange$net_imagej_axis_AxisType$S(axes[i], ranges[i]);
}
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisTypeA$io_scif_img_RangeA', function (axes, ranges) {
;C$.$init$.apply(this);
this.dimRanges=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"io.scif.img.Range"},$I$(1,1));
if (axes.length != ranges.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of axes: " + axes.length + " does not match number of ranges: " + ranges.length ]);
for (var i=0; i < axes.length; i++) {
this.dimRanges.put$TK$TV(axes[i], ranges[i]);
}
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (ranges) {
;C$.$init$.apply(this);
this.dimRanges=ranges;
}, 1);

Clazz.newMeth(C$, 'addRange$net_imagej_axis_AxisType$S', function (axis, range) {
this.dimRanges.put$TK$TV(axis, Clazz.new_($I$(2,1).c$$S,[range]));
});

Clazz.newMeth(C$, 'getRange$net_imagej_axis_AxisType', function (axisType) {
return this.dimRanges.get$O(axisType);
});

Clazz.newMeth(C$, 'hasRange$net_imagej_axis_AxisType', function (axisType) {
return this.dimRanges.get$O(axisType) != null ;
});

Clazz.newMeth(C$, 'size$', function () {
return this.dimRanges.size$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
