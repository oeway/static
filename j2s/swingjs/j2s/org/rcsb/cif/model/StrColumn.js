(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),I$=[[0,'org.rcsb.cif.model.BaseColumn','java.util.stream.IntStream','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StrColumn", null, 'org.rcsb.cif.model.BaseColumn');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.binaryData=null;
this.unmasked=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I$S$IA$IA', function (name, rowCount, data, startToken, endToken) {
;C$.superclazz.c$$S$I$S$IA$IA.apply(this, [name, rowCount, data, startToken, endToken]);C$.$init$.apply(this);
this.type=2;
this.binaryData=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$O$IA', function (name, rowCount, data, mask) {
;C$.superclazz.c$$S$I$IA.apply(this, [name, rowCount, mask]);C$.$init$.apply(this);
this.type=2;
var tmpData;
if (Clazz.instanceOf(data, Clazz.array(String, -1))) {
tmpData=data;
} else {
tmpData=Clazz.array(String, [rowCount]);
if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
for (var i=rowCount; --i >= 0; ) tmpData[i]=(this.hasMask && mask[i] != 0  ? $I$(1).STR_PRESENCE[mask[i]] : "" + (data)[i]);

} else {
for (var i=rowCount; --i >= 0; ) tmpData[i]=(this.hasMask && mask[i] != 0  ? $I$(1).STR_PRESENCE[mask[i]] : "" + new Double((data)[i]).toString());

}try {
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
}this.binaryData=tmpData;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this, [name]);C$.$init$.apply(this);
this.type=2;
this.binaryData=Clazz.array(String, [0]);
}, 1);

Clazz.newMeth(C$, 'get$I', function (row) {
return this.isText ? this.getTextData$I(row) : this.honorValueKind$S(this.binaryData[row]);
});

Clazz.newMeth(C$, 'values$', function () {
return $I$(2).range$I$I(0, this.rowCount).mapToObj$java_util_function_IntFunction((function($$){((P$.StrColumn$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StrColumn$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.model.StrColumn*/$$.get$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.StrColumn$lambda1.$init$, [this, null])})(this));
});

Clazz.newMeth(C$, 'getBinaryStringData$I', function (row) {
return this.honorValueKind$S(this.binaryData[row]);
});

Clazz.newMeth(C$, 'getBinaryData$', function () {
return this.binaryData;
});

Clazz.newMeth(C$, 'getUnmaskedData$', function () {
if (this.isText) {
if (this.unmasked != null ) return this.unmasked;
var a=Clazz.array(String, [this.rowCount]);
for (var i=this.rowCount; --i >= 0; ) {
a[i]=this.getRawTextData$I(i);
}
return this.unmasked=a;
} else {
return this.binaryData;
}});

Clazz.newMeth(C$, 'toString', function () {
return $I$(3).toString$OA(this.getUnmaskedData$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
