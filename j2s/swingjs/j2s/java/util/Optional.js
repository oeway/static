(function(){var P$=java.util,I$=[[0,'java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Optional");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY=Clazz.new_(1,{T:"java.lang.Object"},C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['value','<T>']]
,['O',['EMPTY','java.util.Optional']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.value=null;
}, 1);

Clazz.newMeth(C$, 'empty$', function () {
var t=C$.EMPTY;
return t;
}, 1);

Clazz.newMeth(C$, 'c$$TT', function (value) {
;C$.$init$.apply(this);
this.value=$I$(1).requireNonNull$TT(value);
}, 1);

Clazz.newMeth(C$, 'of$TT', function (value) {
return Clazz.new_(1,{T:"Object"},C$.c$$TT,[value]);
}, 1);

Clazz.newMeth(C$, 'ofNullable$TT', function (value) {
return value == null  ? C$.empty$() : C$.of$TT(value);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
if (this.value == null ) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No value present"]);
}return this.value;
});

Clazz.newMeth(C$, 'isPresent$', function () {
return this.value != null ;
});

Clazz.newMeth(C$, 'ifPresent$java_util_function_Consumer', function (consumer) {
if (this.value != null ) consumer.accept$(this.value);
});

Clazz.newMeth(C$, 'filter$java_util_function_Predicate', function (predicate) {
$I$(1).requireNonNull$TT(predicate);
if (!this.isPresent$()) return this;
 else return predicate.test$(this.value) ? this : C$.empty$();
});

Clazz.newMeth(C$, 'map$java_util_function_Function', function (mapper) {
$I$(1).requireNonNull$TT(mapper);
if (!this.isPresent$()) return C$.empty$();
 else {
return C$.ofNullable$TT(mapper.apply$(this.value));
}});

Clazz.newMeth(C$, 'flatMap$java_util_function_Function', function (mapper) {
$I$(1).requireNonNull$TT(mapper);
if (!this.isPresent$()) return C$.empty$();
 else {
return $I$(1).requireNonNull$TT(mapper.apply$(this.value));
}});

Clazz.newMeth(C$, 'orElse$TT', function (other) {
return this.value != null  ? this.value : other;
});

Clazz.newMeth(C$, 'orElseGet$java_util_function_Supplier', function (other) {
return this.value != null  ? this.value : other.get$();
});

Clazz.newMeth(C$, 'orElseThrow$java_util_function_Supplier', function (exceptionSupplier) {
if (this.value != null ) {
return this.value;
} else {
throw exceptionSupplier.get$();
}});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.util.Optional"))) {
return false;
}var other=obj;
return $I$(1).equals$O$O(this.value, other.value);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(1).hashCode$O(this.value);
});

Clazz.newMeth(C$, 'toString', function () {
return this.value != null  ? String.format$S$OA("Optional[%s]", [this.value]) : "Optional.empty";
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
