(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[[0,'net.imglib2.roi.GeneralPathRegionOfInterest','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes',['net.imagej.overlay.GeneralPathOverlay','.WrappedIOException']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeneralPathOverlay", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imagej.overlay.AbstractROIOverlay');
C$.$classes$=[['WrappedIOException',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).Y]), 1);
}, 1);

Clazz.newMeth(C$, ['setRegionOfInterest$net_imglib2_roi_GeneralPathRegionOfInterest','setRegionOfInterest$TR'], function (roi) {
C$.superclazz.prototype.setRegionOfInterest$TR.apply(this, [roi]);
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
var roi=this.getRegionOfInterest$();
try {
roi.iteratePath$net_imglib2_roi_GeneralPathSegmentHandler(((P$.GeneralPathOverlay$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GeneralPathOverlay$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.roi.GeneralPathSegmentHandler', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'moveTo$D$D', function (x, y) {
try {
this.$finals$.out.writeChar$I("M".$c());
this.$finals$.out.writeDouble$D(x);
this.$finals$.out.writeDouble$D(y);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(4,1).c$$java_io_IOException, [this, null, e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'lineTo$D$D', function (x, y) {
try {
this.$finals$.out.writeChar$I("L".$c());
this.$finals$.out.writeDouble$D(x);
this.$finals$.out.writeDouble$D(y);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(4,1).c$$java_io_IOException, [this, null, e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'quadTo$D$D$D$D', function (x1, y1, x, y) {
try {
this.$finals$.out.writeChar$I("Q".$c());
this.$finals$.out.writeDouble$D(x1);
this.$finals$.out.writeDouble$D(y1);
this.$finals$.out.writeDouble$D(x);
this.$finals$.out.writeDouble$D(y);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(4,1).c$$java_io_IOException, [this, null, e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'cubicTo$D$D$D$D$D$D', function (x1, y1, x2, y2, x, y) {
try {
this.$finals$.out.writeChar$I("C".$c());
this.$finals$.out.writeDouble$D(x1);
this.$finals$.out.writeDouble$D(y1);
this.$finals$.out.writeDouble$D(x2);
this.$finals$.out.writeDouble$D(y2);
this.$finals$.out.writeDouble$D(x);
this.$finals$.out.writeDouble$D(y);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(4,1).c$$java_io_IOException, [this, null, e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'close$', function () {
try {
this.$finals$.out.writeChar$I(")".$c());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(4,1).c$$java_io_IOException, [this, null, e]);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.GeneralPathOverlay$1.$init$, [this, {out:out}])));
} catch (e) {
if (Clazz.exceptionOf(e,"net.imagej.overlay.GeneralPathOverlay.WrappedIOException")){
throw e.getIOException$();
} else {
throw e;
}
}
out.writeChar$I(".".$c());
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var roi=this.getRegionOfInterest$();
roi.reset$();
for (; ; ) {
var type=$in.readChar$();
switch (type.$c()) {
case 77:
roi.moveTo$D$D($in.readDouble$(), $in.readDouble$());
break;
case 76:
roi.lineTo$D$D($in.readDouble$(), $in.readDouble$());
break;
case 81:
roi.quadTo$D$D$D$D($in.readDouble$(), $in.readDouble$(), $in.readDouble$(), $in.readDouble$());
break;
case 67:
roi.cubicTo$D$D$D$D$D$D($in.readDouble$(), $in.readDouble$(), $in.readDouble$(), $in.readDouble$(), $in.readDouble$(), $in.readDouble$());
break;
case 41:
roi.close$();
break;
case 46:
break;
}
}
});

Clazz.newMeth(C$, 'move$DA', function (deltas) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["TODO"]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.GeneralPathOverlay, "WrappedIOException", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ioException','java.io.IOException']]]

Clazz.newMeth(C$, 'c$$java_io_IOException', function (exception) {
Clazz.super_(C$, this);
this.ioException=exception;
}, 1);

Clazz.newMeth(C$, 'getIOException$', function () {
return this.ioException;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
