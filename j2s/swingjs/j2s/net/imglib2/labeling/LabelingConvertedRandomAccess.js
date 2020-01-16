(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'net.imglib2.labeling.LabelingType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelingConvertedRandomAccess", null, 'net.imglib2.converter.AbstractConvertedRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','net.imglib2.labeling.LabelingType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess$JA$net_imglib2_labeling_LabelingMapping', function (source, generation, mapping) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[source]);C$.$init$.apply(this);
this.type=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_type_numeric_IntegerType$net_imglib2_labeling_LabelingMapping$JA,[source.get$(), mapping, generation]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{I:"Object",T:"Object"},C$.c$$net_imglib2_RandomAccess$JA$net_imglib2_labeling_LabelingMapping,[this.source.copyRandomAccess$(), this.type.generation, this.type.mapping]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
