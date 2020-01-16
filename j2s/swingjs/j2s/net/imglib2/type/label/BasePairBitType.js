(function(){var P$=Clazz.newPackage("net.imglib2.type.label"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.label.BasePairBitType',['net.imglib2.type.label.BasePairBitType','.Base']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BasePairBitType", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.type.AbstractBit64Type', 'net.imglib2.type.BasePairType');
C$.$classes$=[['Base',25]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).LONG$java_util_function_Function((P$.BasePairBitType$lambda1$||(P$.BasePairBitType$lambda1$=(((P$.BasePairBitType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BasePairBitType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.label.BasePairBitType"},P$.BasePairBitType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (bitStorage) {
;C$.superclazz.c$$net_imglib2_img_NativeImg$I.apply(this,[bitStorage, 3]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_type_label_BasePairBitType_Base', function (value) {
;C$.superclazz.c$$J$I.apply(this,[value.ordinal$(), 3]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imglib2_type_label_BasePairBitType_Base.apply(this, [$I$(3).N]);
}, 1);

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return C$.typeFactory;
});

Clazz.newMeth(C$, ['set$net_imglib2_type_label_BasePairBitType_Base','setnull'], function (base) {
this.setBits$J(base.ordinal$());
});

Clazz.newMeth(C$, 'get$', function () {
return $I$(3).values$()[(this.getBits$()|0)];
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_label_BasePairBitType','compareTo$','compareTo$TT'], function (c) {
return this.get$().compareTo$TE(c.get$());
});

Clazz.newMeth(C$, 'complement$', function () {
var base=this.get$();
switch (base) {
case $I$(3).A:
this.set$net_imglib2_type_label_BasePairBitType_Base($I$(3).T);
break;
case $I$(3).T:
this.set$net_imglib2_type_label_BasePairBitType_Base($I$(3).A);
break;
case $I$(3).G:
this.set$net_imglib2_type_label_BasePairBitType_Base($I$(3).C);
break;
case $I$(3).C:
this.set$net_imglib2_type_label_BasePairBitType_Base($I$(3).G);
break;
case $I$(3).U:
this.set$net_imglib2_type_label_BasePairBitType_Base($I$(3).A);
break;
default:
break;
}
});

Clazz.newMeth(C$, 'baseToValue$', function () {
return $b$[0] = (this.get$().ordinal$()|0), $b$[0];
});

Clazz.newMeth(C$, ['set$net_imglib2_type_label_BasePairBitType','set$TT'], function (c) {
this.set$net_imglib2_type_label_BasePairBitType_Base(c.get$());
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_type_label_BasePairBitType_Base,[this.get$()]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.get$().toString();
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_label_BasePairBitType','valueEquals$','valueEquals$TT'], function (t) {
return this.get$() === t.get$() ;
});
var $b$ = new Int8Array(1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.BasePairBitType, "Base", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$C, "gap", 0, [" "]);
Clazz.newEnumConst($vals, C$.c$$C, "N", 1, ["N"]);
Clazz.newEnumConst($vals, C$.c$$C, "A", 2, ["A"]);
Clazz.newEnumConst($vals, C$.c$$C, "T", 3, ["T"]);
Clazz.newEnumConst($vals, C$.c$$C, "G", 4, ["G"]);
Clazz.newEnumConst($vals, C$.c$$C, "C", 5, ["C"]);
Clazz.newEnumConst($vals, C$.c$$C, "U", 6, ["U"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['C',['c']]]

Clazz.newMeth(C$, 'c$$C', function (c) {
;C$.$init$.apply(this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getChar$', function () {
return this.c;
});

Clazz.newMeth(C$, 'fromChar$C', function (c) {
switch (c.$c()) {
case 65:
return C$.A;
case 84:
return C$.T;
case 71:
return C$.G;
case 67:
return C$.C;
case 85:
return C$.U;
case 32:
return C$.gap;
default:
return C$.N;
}
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
