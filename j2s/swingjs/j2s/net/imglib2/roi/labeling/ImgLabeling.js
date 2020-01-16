(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),I$=[[0,'net.imglib2.roi.labeling.LabelingType','net.imglib2.view.Views',['net.imglib2.roi.labeling.LabelingType','.ModCount'],'net.imglib2.roi.labeling.LabelingMapping',['net.imglib2.roi.labeling.ImgLabeling','.LabelingConvertedRandomAccess'],['net.imglib2.roi.labeling.ImgLabeling','.LabelingConvertedCursor'],'net.imglib2.FlatIterationOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgLabeling", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractWrappedInterval', ['net.imglib2.RandomAccessibleInterval', 'net.imglib2.IterableInterval', 'net.imglib2.view.iteration.SubIntervalIterable']);
C$.$classes$=[['LabelingConvertedRandomAccess',0],['LabelingConvertedCursor',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['subIterable'],'O',['indexAccessible','net.imglib2.RandomAccessibleInterval','indexIterable','net.imglib2.IterableInterval','generation','net.imglib2.roi.labeling.LabelingType.ModCount','mapping','net.imglib2.roi.labeling.LabelingMapping']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (img) {
;C$.superclazz.c$$TI.apply(this,[img]);C$.$init$.apply(this);
this.indexAccessible=img;
this.indexIterable=$I$(2).iterable$net_imglib2_RandomAccessibleInterval(img);
this.subIterable=Clazz.instanceOf(this.indexIterable, "net.imglib2.view.iteration.SubIntervalIterable");
this.generation=Clazz.new_($I$(3,1));
this.mapping=Clazz.new_(1,{T:"Object"},$I$(4,1).c$$net_imglib2_type_numeric_IntegerType,[this.indexIterable.firstElement$()]);
}, 1);

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(5,1).c$$net_imglib2_RandomAccess, [this, null, this.indexAccessible.randomAccess$()]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return Clazz.new_($I$(5,1).c$$net_imglib2_RandomAccess, [this, null, this.indexAccessible.randomAccess$net_imglib2_Interval(interval)]);
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_($I$(6,1).c$$net_imglib2_Cursor, [this, null, this.indexIterable.cursor$()]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_($I$(6,1).c$$net_imglib2_Cursor, [this, null, this.indexIterable.localizingCursor$()]);
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.indexIterable.size$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.indexIterable.iterationOrder$();
});

Clazz.newMeth(C$, 'supportsOptimizedCursor$net_imglib2_Interval', function (interval) {
if (this.subIterable) return (this.indexIterable).supportsOptimizedCursor$net_imglib2_Interval(interval);
 else return false;
});

Clazz.newMeth(C$, 'subIntervalIterationOrder$net_imglib2_Interval', function (interval) {
if (this.subIterable) return (this.indexIterable).subIntervalIterationOrder$net_imglib2_Interval(interval);
 else return Clazz.new_($I$(7,1).c$$net_imglib2_Interval,[interval]);
});

Clazz.newMeth(C$, 'cursor$net_imglib2_Interval', function (interval) {
var c;
if (this.subIterable) c=(this.indexIterable).cursor$net_imglib2_Interval(interval);
 else c=$I$(2).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.indexAccessible, interval).cursor$();
return Clazz.new_($I$(6,1).c$$net_imglib2_Cursor, [this, null, c]);
});

Clazz.newMeth(C$, 'localizingCursor$net_imglib2_Interval', function (interval) {
var c;
if (this.subIterable) c=(this.indexIterable).localizingCursor$net_imglib2_Interval(interval);
 else c=$I$(2).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.indexAccessible, interval).localizingCursor$();
return Clazz.new_($I$(6,1).c$$net_imglib2_Cursor, [this, null, c]);
});

Clazz.newMeth(C$, 'getIndexImg$', function () {
return this.indexAccessible;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImgLabeling, "LabelingConvertedRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.converter.AbstractConvertedRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','net.imglib2.roi.labeling.LabelingType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess', function (source) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[source]);C$.$init$.apply(this);
this.type=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_type_numeric_IntegerType$net_imglib2_roi_labeling_LabelingMapping$net_imglib2_roi_labeling_LabelingType_ModCount,[source.get$(), this.this$0.mapping, this.this$0.generation]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_RandomAccess, [this, null, this.source.copyRandomAccess$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImgLabeling, "LabelingConvertedCursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.converter.AbstractConvertedCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','net.imglib2.roi.labeling.LabelingType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Cursor', function (source) {
;C$.superclazz.c$$net_imglib2_Cursor.apply(this,[source]);C$.$init$.apply(this);
this.type=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_type_numeric_IntegerType$net_imglib2_roi_labeling_LabelingMapping$net_imglib2_roi_labeling_LabelingType_ModCount,[source.get$(), this.this$0.mapping, this.this$0.generation]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_Cursor, [this, null, this.source.copyCursor$()]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
