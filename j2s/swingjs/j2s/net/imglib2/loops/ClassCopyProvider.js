(function(){var P$=Clazz.newPackage("net.imglib2.loops"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','net.imglib2.loops.ClassCopier','java.util.stream.Stream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClassCopyProvider");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_(1,{K:"java.lang.Object",V:"Class"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['map','java.util.Map','copier','net.imglib2.loops.ClassCopier','signature','Class[]']]]

Clazz.newMeth(C$, 'c$$Class$Class$ClassA', function (clazz, interfaceOfClazz, constructorSignature) {
;C$.$init$.apply(this);
this.copier=Clazz.new_(1,{T:"Object"},$I$(2,1).c$$Class$Class,[clazz, interfaceOfClazz]);
this.signature=(constructorSignature == null  || constructorSignature.length == 0 ) ? C$.assumeConstructorSignature$Class(clazz) : constructorSignature;
}, 1);

Clazz.newMeth(C$, 'assumeConstructorSignature$Class', function (clazz) {
if (C$.hasDefaultConstructor$Class(clazz)) return Clazz.array(Class, [0]);
var constructors=clazz.getConstructors$();
if (constructors.length == 1) return constructors[0].getParameterTypes$();
if (constructors.length == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ClassCopyProvider: Public constructor in class (" + clazz.getName$() + ") needed." ]);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ClassCopyProvider: Please specify constructor signature."]);
}, 1);

Clazz.newMeth(C$, 'hasDefaultConstructor$Class', function (clazz) {
return $I$(3).of$TTA(clazz.getConstructors$()).anyMatch$java_util_function_Predicate((P$.ClassCopyProvider$lambda1$||(P$.ClassCopyProvider$lambda1$=(((P$.ClassCopyProvider$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ClassCopyProvider$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (constructor) { return (constructor.getParameterCount$() == 0);});
})()
), Clazz.new_(1,{T:"? super java.lang.reflect.Constructor"},P$.ClassCopyProvider$lambda1.$init$, [this, null]))))));
}, 1);

Clazz.newMeth(C$, 'classForKey$O', function (key) {
return this.map.computeIfAbsent$TK$java_util_function_Function(key, (P$.ClassCopyProvider$lambda2$||(P$.ClassCopyProvider$lambda2$=(((P$.ClassCopyProvider$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ClassCopyProvider$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (k) { return (this.b$['net.imglib2.loops.ClassCopyProvider'].copier.copy$());});
})()
), Clazz.new_(1,{T:"? super java.lang.Object",R:"? extends java.lang.Class"},P$.ClassCopyProvider$lambda2.$init$, [this, null]))))));
}, p$1);

Clazz.newMeth(C$, 'matches$OA', function (parameters) {
if (parameters.length != this.signature.length) return false;
for (var i=0; i < this.signature.length; i++) if (!this.signature[i].isInstance$O(parameters[i])) return false;

return true;
});

Clazz.newMeth(C$, 'newInstanceForKey$O$OA', function (key, parameters) {
try {
return p$1.classForKey$O.apply(this, [key]).getConstructor$ClassA(this.signature).newInstance$OA(parameters);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
