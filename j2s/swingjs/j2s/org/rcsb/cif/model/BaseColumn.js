(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),p$1={},I$=[[0,'java.text.DecimalFormat','org.rcsb.cif.model.ValueKind','java.util.stream.IntStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseColumn", null, null, 'org.rcsb.cif.model.Column');
C$.STR_PRESENCE=null;
C$.FLOAT_2=null;
C$.FLOAT_3=null;
C$.FLOAT_6=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.STR_PRESENCE=Clazz.array(String, -1, [null, ".", "?"]);
C$.FLOAT_2=Clazz.new_($I$(1,1).c$$S,["0.00"]);
C$.FLOAT_3=Clazz.new_($I$(1,1).c$$S,["0.000"]);
C$.FLOAT_6=Clazz.new_($I$(1,1).c$$S,["0.######"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=0;
this.name=null;
this.rowCount=0;
this.isText=false;
this.textData=null;
this.startToken=null;
this.endToken=null;
this.hasMask=false;
this.mask=null;
this.defined=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.type=2;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
this.name=name;
this.rowCount=0;
this.isText=false;
this.textData=null;
this.startToken=null;
this.endToken=null;
this.hasMask=false;
this.mask=null;
this.defined=false;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$S$IA$IA', function (name, rowCount, data, startToken, endToken) {
;C$.$init$.apply(this);
this.name=name;
this.rowCount=rowCount;
this.isText=true;
this.textData=data;
this.startToken=startToken;
this.endToken=endToken;
this.hasMask=false;
this.mask=null;
this.defined=true;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$IA', function (name, rowCount, mask) {
;C$.$init$.apply(this);
this.name=name;
this.rowCount=rowCount;
this.isText=false;
this.textData=null;
this.startToken=null;
this.endToken=null;
this.hasMask=mask != null  && mask.length > 0 ;
this.mask=mask;
this.defined=true;
}, 1);

Clazz.newMeth(C$, 'getTextData$I', function (row) {
return this.honorValueKind$S(this.textData.substring$I$I(this.startToken[row], this.endToken[row]));
});

Clazz.newMeth(C$, 'honorValueKind$S', function (value) {
return (".".equals$O(value) || "?".equals$O(value) ) ? "" : value;
});

Clazz.newMeth(C$, 'getStringData$I', function (row) {
if (Clazz.instanceOf(this, "org.rcsb.cif.model.FloatColumn")) {
return p$1.format$D.apply(this, [(this).get$I(row)]);
} else {
return this.isText ? this.getTextData$I(row) : this.getBinaryStringData$I(row);
}});

Clazz.newMeth(C$, 'format$D', function (val) {
if ("Cartn_x".equals$O(this.name) || "Cartn_y".equals$O(this.name) || "Cartn_z".equals$O(this.name)  ) {
return C$.FLOAT_3.format$D(val);
} else if ("occupancy".equals$O(this.name)) {
return C$.FLOAT_2.format$D(val);
}return C$.FLOAT_6.format$D(val);
}, p$1);

Clazz.newMeth(C$, 'getColumnName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.rowCount;
});

Clazz.newMeth(C$, 'getValueKind$I', function (row) {
if (this.isText) {
var value=this.textData.substring$I$I(this.startToken[row], this.endToken[row]);
if (value.isEmpty$() || ".".equals$O(value) ) {
return $I$(2).NOT_PRESENT;
} else if ("?".equals$O(value)) {
return $I$(2).UNKNOWN;
} else {
return $I$(2).PRESENT;
}}if (!this.hasMask) {
return $I$(2).PRESENT;
}return $I$(2).values$()[this.mask[row]];
});

Clazz.newMeth(C$, 'valueKinds$', function () {
return $I$(3).range$I$I(0, this.rowCount).mapToObj$java_util_function_IntFunction((function($$){((P$.BaseColumn$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseColumn$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.model.BaseColumn*/$$.getValueKind$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.BaseColumn$lambda1.$init$, [this, null])})(this));
});

Clazz.newMeth(C$, 'isDefined$', function () {
return this.defined;
});

Clazz.newMeth(C$, 'getRawTextData$I', function (i) {
return this.textData.substring$I$I(this.startToken[i], this.endToken[i]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
