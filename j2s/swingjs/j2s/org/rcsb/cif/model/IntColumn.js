(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),p$1={},I$=[[0,'java.util.stream.IntStream','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntColumn", null, 'org.rcsb.cif.model.BaseColumn');

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
this.binaryData=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$O$IA', function (name, rowCount, data, mask) {
;C$.superclazz.c$$S$I$IA.apply(this, [name, rowCount, mask]);C$.$init$.apply(this);
var tmpData;
if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
tmpData=data;
} else {
tmpData=Clazz.array(Integer.TYPE, [rowCount]);
if (Clazz.instanceOf(data, Clazz.array(String, -1))) {
for (var i=rowCount; --i >= 0; ) tmpData[i]=(this.hasMask && mask[i] != 0  ? 0 : Integer.parseInt$S((data)[i]));

} else {
for (var i=rowCount; --i >= 0; ) tmpData[i]=((data)[i]|0);

}}this.binaryData=tmpData;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this, [name]);C$.$init$.apply(this);
this.binaryData=Clazz.array(Integer.TYPE, [0]);
}, 1);

Clazz.newMeth(C$, 'get$I', function (row) {
return this.isText ? p$1.parseInt$S.apply(this, [this.getTextData$I(row)]) : this.binaryData[row];
});

Clazz.newMeth(C$, 'parseInt$S', function (text) {
if (text.isEmpty$() || ".".equals$O(text) || "?".equals$O(text)  ) {
return 0;
}return Integer.parseInt$S(text);
}, p$1);

Clazz.newMeth(C$, 'values$', function () {
return $I$(1).range$I$I(0, this.rowCount).map$java_util_function_IntUnaryOperator((function($$){((P$.IntColumn$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntColumn$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.model.IntColumn*/$$.get$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.IntColumn$lambda1.$init$, [this, null])})(this));
});

Clazz.newMeth(C$, 'getBinaryStringData$I', function (row) {
return String.valueOf$I(this.binaryData[row]);
});

Clazz.newMeth(C$, 'getBinaryData$', function () {
return this.binaryData;
});

Clazz.newMeth(C$, 'getUnmaskedData$', function () {
if (!this.isText && !this.hasMask ) return this.binaryData;
if (this.unmasked != null ) return this.unmasked;
var a=Clazz.array(Integer.TYPE, [this.rowCount]);
if (this.isText) {
for (var i=this.rowCount; --i >= 0; ) {
var val=this.getRawTextData$I(i);
switch (val) {
case ".":
a[i]=-2147483648;
break;
case "":
case "?":
a[i]=2147483647;
break;
default:
a[i]=Integer.parseInt$S(val);
}
}
} else {
for (var i=this.rowCount; --i >= 0; ) {
switch (this.mask[i]) {
case 0:
a[i]=this.binaryData[i];
break;
case 1:
a[i]=-2147483648;
break;
case 2:
a[i]=2147483647;
break;
}
}
}return this.unmasked=a;
});

Clazz.newMeth(C$, 'toString', function () {
return $I$(2).toString$IA(this.getUnmaskedData$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
