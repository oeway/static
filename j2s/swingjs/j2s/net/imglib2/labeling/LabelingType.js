(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'net.imglib2.labeling.LabelingMapping','net.imglib2.type.numeric.integer.IntType','java.util.Arrays','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelingType", null, null, 'net.imglib2.type.Type');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['generation','long[]','mapping','net.imglib2.labeling.LabelingMapping','type','net.imglib2.type.numeric.IntegerType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_IntegerType$net_imglib2_labeling_LabelingMapping$JA', function (type, mapping, generation) {
;C$.$init$.apply(this);
this.type=type;
this.mapping=mapping;
this.generation=generation;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_IntegerType$net_imglib2_labeling_LabelingMapping', function (type, mapping) {
;C$.$init$.apply(this);
this.type=type;
this.mapping=mapping;
this.generation=Clazz.array(Long.TYPE, [1]);
}, 1);

Clazz.newMeth(C$, ['c$$java_util_List','c$null'], function (value) {
;C$.$init$.apply(this);
this.mapping=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_type_numeric_IntegerType,[Clazz.new_($I$(2,1))]);
this.generation=Clazz.array(Long.TYPE, [1]);
this.type=Clazz.new_($I$(2,1));
this.setLabeling$java_util_List(value);
}, 1);

Clazz.newMeth(C$, ['c$$TT'], function (value) {
C$.c$$java_util_List.apply(this, [$I$(3).asList$TTA([value])]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_List.apply(this, [Clazz.new_(1,{E:"Object"},$I$(4,1))]);
}, 1);

Clazz.newMeth(C$, 'getLabeling$', function () {
return this.mapping.listAtIndex$I(this.type.getInteger$());
});

Clazz.newMeth(C$, ['setLabeling$java_util_List'], function (labeling) {
this.type.setInteger$I(this.mapping.indexOf$java_util_List(labeling));
{
this.generation[0]++;
}});

Clazz.newMeth(C$, ['setLabeling$TTA'], function (labeling) {
this.setLabeling$java_util_List($I$(3).asList$TTA(labeling));
});

Clazz.newMeth(C$, ['setLabel$TT'], function (label) {
var labeling=Clazz.new_(1,{E:"Object"},$I$(4,1).c$$I,[1]);
labeling.add$TE(label);
this.setLabeling$java_util_List(labeling);
});

Clazz.newMeth(C$, ['intern$java_util_List','internnull'], function (labeling) {
return this.mapping.intern$java_util_List(labeling);
});

Clazz.newMeth(C$, ['intern$TT'], function (label) {
var labeling=Clazz.new_(1,{E:"Object"},$I$(4,1).c$$I,[1]);
labeling.add$TE(label);
return this.intern$java_util_List(labeling);
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(1,{T:"Object"},C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$java_util_List,[this.getLabeling$()]);
});

Clazz.newMeth(C$, ['set$net_imglib2_labeling_LabelingType','set$TT'], function (c) {
this.setLabeling$java_util_List(c.getLabeling$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.getLabeling$().toString();
});

Clazz.newMeth(C$, 'getLabels$', function () {
return this.mapping.getLabels$();
});

Clazz.newMeth(C$, 'getGeneration$', function () {
return this.generation[0];
});

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.type;
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_labeling_LabelingType','valueEquals$','valueEquals$TT'], function (t) {
return this.getLabeling$().equals$O(t.getLabeling$());
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
