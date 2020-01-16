(function(){var P$=Clazz.newPackage("org.apache.commons.logging"),I$=[[0,'java.util.Hashtable','org.apache.commons.logging.impl.NoOpLog']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogSource");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.logs=Clazz.new_($I$(1,1));
C$.log4jIsAvailable=false;
C$.jdk14IsAvailable=false;
C$.logImplctor=null;
{
try {
C$.log4jIsAvailable=null != Clazz.forName("org.apache.log4j.Logger") ;
} catch (t) {
C$.log4jIsAvailable=false;
}
try {
C$.jdk14IsAvailable=null != Clazz.forName("java.util.logging.Logger")  && null != Clazz.forName("org.apache.commons.logging.impl.Jdk14Logger")  ;
} catch (t) {
C$.jdk14IsAvailable=false;
}
var name=null;
try {
name=System.getProperty$S("org.apache.commons.logging.log");
if (name == null ) {
name=System.getProperty$S("org.apache.commons.logging.Log");
}} catch (t) {
}
if (name != null ) {
try {
C$.setLogImplementation$S(name);
} catch (t) {
try {
C$.setLogImplementation$S("org.apache.commons.logging.impl.NoOpLog");
} catch (u) {
}
}
} else {
try {
if (C$.log4jIsAvailable) {
C$.setLogImplementation$S("org.apache.commons.logging.impl.Log4JLogger");
} else if (C$.jdk14IsAvailable) {
C$.setLogImplementation$S("org.apache.commons.logging.impl.Jdk14Logger");
} else {
C$.setLogImplementation$S("org.apache.commons.logging.impl.NoOpLog");
}} catch (t) {
try {
C$.setLogImplementation$S("org.apache.commons.logging.impl.NoOpLog");
} catch (u) {
}
}
}};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['log4jIsAvailable','jdk14IsAvailable'],'O',['logs','java.util.Hashtable','logImplctor','java.lang.reflect.Constructor']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLogImplementation$S', function (classname) {
try {
var logclass=Clazz.forName(classname);
var argtypes=Clazz.array(Class, [1]);
argtypes[0]="".getClass$();
C$.logImplctor=logclass.getConstructor$ClassA(argtypes);
} catch (t) {
C$.logImplctor=null;
}
}, 1);

Clazz.newMeth(C$, 'setLogImplementation$Class', function (logclass) {
var argtypes=Clazz.array(Class, [1]);
argtypes[0]="".getClass$();
C$.logImplctor=logclass.getConstructor$ClassA(argtypes);
}, 1);

Clazz.newMeth(C$, 'getInstance$S', function (name) {
var log=C$.logs.get$O(name);
if (null == log ) {
log=C$.makeNewLogInstance$S(name);
C$.logs.put$TK$TV(name, log);
}return log;
}, 1);

Clazz.newMeth(C$, 'getInstance$Class', function (clazz) {
return C$.getInstance$S(clazz.getName$());
}, 1);

Clazz.newMeth(C$, 'makeNewLogInstance$S', function (name) {
var log;
try {
var args=Clazz.array(java.lang.Object, -1, [name]);
log=C$.logImplctor.newInstance$OA(args);
} catch (t) {
log=null;
}
if (null == log ) {
log=Clazz.new_($I$(2,1).c$$S,[name]);
}return log;
}, 1);

Clazz.newMeth(C$, 'getLogNames$', function () {
return C$.logs.keySet$().toArray$__TA(Clazz.array(String, [C$.logs.size$()]));
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-23 04:54:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
