(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),I$=[[0,'net.imglib2.roi.util.iterationcode.IterationCodeListIterator','net.imglib2.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelRegionCursor", null, 'net.imglib2.AbstractLocalizable', 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['iter','net.imglib2.roi.util.iterationcode.IterationCodeListIterator']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayList$JA', function (itcodesList, offset) {
;C$.superclazz.c$$I.apply(this,[offset.length]);C$.$init$.apply(this);
this.iter=Clazz.new_(1,{P:"net.imglib2.Point"},$I$(1,1).c$$java_util_List$JA$TP,[itcodesList, offset, $I$(2).wrap$JA(this.position)]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_labeling_LabelRegionCursor', function (c) {
;C$.superclazz.c$$I.apply(this,[c.n]);C$.$init$.apply(this);
this.iter=Clazz.new_(1,{P:"net.imglib2.Point"},$I$(1,1).c$$net_imglib2_roi_util_iterationcode_IterationCodeListIterator$TP,[c.iter, $I$(2).wrap$JA(this.position)]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return null;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.iter.jumpFwd$J(steps);
});

Clazz.newMeth(C$, 'fwd$', function () {
this.iter.fwd$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.iter.reset$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.iter.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return null;
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_roi_labeling_LabelRegionCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
