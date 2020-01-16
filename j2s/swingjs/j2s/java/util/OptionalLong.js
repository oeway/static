(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionalLong");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isPresent'],'L',['value']]
,['O',['EMPTY','java.util.OptionalLong']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.isPresent=false;
this.value=0;
}, 1);

Clazz.newMeth(C$, 'empty$', function () {
return C$.EMPTY;
}, 1);

Clazz.newMeth(C$, 'c$$J', function (value) {
;C$.$init$.apply(this);
this.isPresent=true;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'of$J', function (value) {
return Clazz.new_(C$.c$$J,[value]);
}, 1);

Clazz.newMeth(C$, 'getAsLong$', function () {
if (!this.isPresent) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No value present"]);
}return this.value;
});

Clazz.newMeth(C$, 'isPresent$', function () {
return this.isPresent;
});

Clazz.newMeth(C$, 'ifPresent$java_util_function_LongConsumer', function (consumer) {
if (this.isPresent) consumer.accept$(this.value);
});

Clazz.newMeth(C$, 'orElse$J', function (other) {
return this.isPresent ? this.value : other;
});

Clazz.newMeth(C$, 'orElseGet$java_util_function_LongSupplier', function (other) {
return this.isPresent ? this.value : other.getAsLong$();
});

Clazz.newMeth(C$, 'orElseThrow$java_util_function_Supplier', function (exceptionSupplier) {
if (this.isPresent) {
return this.value;
} else {
throw exceptionSupplier.get$();
}});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.util.OptionalLong"))) {
return false;
}var other=obj;
return (this.isPresent && other.isPresent ) ? this.value == other.value : this.isPresent == other.isPresent ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.isPresent ? Long.hashCode$J(this.value) : 0;
});

Clazz.newMeth(C$, 'toString', function () {
return this.isPresent ? String.format$S$OA("OptionalLong[%s]", [new Long(this.value)]) : "OptionalLong.empty";
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
