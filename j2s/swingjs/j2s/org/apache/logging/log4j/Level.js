(function(){var P$=Clazz.newPackage("org.apache.logging.log4j"),I$=[[0,'java.util.concurrent.ConcurrentHashMap','org.apache.logging.log4j.spi.StandardLevel','org.apache.logging.log4j.util.Strings','java.util.Locale','java.util.Objects','Enum']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Level", null, null, ['Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LEVELS=Clazz.new_(1,{V:"String",K:"org.apache.logging.log4j.Level"},$I$(1,1));
{
C$.OFF=Clazz.new_(C$.c$$S$I,["OFF", $I$(2).OFF.intLevel$()]);
C$.FATAL=Clazz.new_(C$.c$$S$I,["FATAL", $I$(2).FATAL.intLevel$()]);
C$.ERROR=Clazz.new_(C$.c$$S$I,["ERROR", $I$(2).ERROR.intLevel$()]);
C$.WARN=Clazz.new_(C$.c$$S$I,["WARN", $I$(2).WARN.intLevel$()]);
C$.INFO=Clazz.new_(C$.c$$S$I,["INFO", $I$(2).INFO.intLevel$()]);
C$.DEBUG=Clazz.new_(C$.c$$S$I,["DEBUG", $I$(2).DEBUG.intLevel$()]);
C$.TRACE=Clazz.new_(C$.c$$S$I,["TRACE", $I$(2).TRACE.intLevel$()]);
C$.ALL=Clazz.new_(C$.c$$S$I,["ALL", $I$(2).ALL.intLevel$()]);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['intLevel'],'S',['name'],'O',['standardLevel','org.apache.logging.log4j.spi.StandardLevel']]
,['L',['serialVersionUID'],'S',['CATEGORY'],'O',['OFF','org.apache.logging.log4j.Level','+FATAL','+ERROR','+WARN','+INFO','+DEBUG','+TRACE','+ALL','LEVELS','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, 'c$$S$I', function (name, intLevel) {
;C$.$init$.apply(this);
if ($I$(3).isEmpty$CharSequence(name)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal null or empty Level name."]);
}if (intLevel < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Level int less than zero."]);
}this.name=name;
this.intLevel=intLevel;
this.standardLevel=$I$(2).getStandardLevel$I(intLevel);
if (C$.LEVELS.putIfAbsent$TK$TV(name, this) != null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Level " + name + " has already been defined." ]);
}}, 1);

Clazz.newMeth(C$, 'intLevel$', function () {
return this.intLevel;
});

Clazz.newMeth(C$, 'getStandardLevel$', function () {
return this.standardLevel;
});

Clazz.newMeth(C$, 'isInRange$org_apache_logging_log4j_Level$org_apache_logging_log4j_Level', function (minLevel, maxLevel) {
return this.intLevel >= minLevel.intLevel && this.intLevel <= maxLevel.intLevel ;
});

Clazz.newMeth(C$, 'isLessSpecificThan$org_apache_logging_log4j_Level', function (level) {
return this.intLevel >= level.intLevel;
});

Clazz.newMeth(C$, 'isMoreSpecificThan$org_apache_logging_log4j_Level', function (level) {
return this.intLevel <= level.intLevel;
});

Clazz.newMeth(C$, 'clone$', function () {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
});

Clazz.newMeth(C$, ['compareTo$org_apache_logging_log4j_Level','compareTo$','compareTo$TT'], function (other) {
return this.intLevel < other.intLevel ? -1 : (this.intLevel > other.intLevel ? 1 : 0);
});

Clazz.newMeth(C$, 'equals$O', function (other) {
return Clazz.instanceOf(other, "org.apache.logging.log4j.Level") && other === this  ;
});

Clazz.newMeth(C$, 'getDeclaringClass$', function () {
return Clazz.getClass(C$);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.name.hashCode$();
});

Clazz.newMeth(C$, 'name$', function () {
return this.name;
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'forName$S$I', function (name, intValue) {
var level=C$.LEVELS.get$O(name);
if (level != null ) {
return level;
}try {
return Clazz.new_(C$.c$$S$I,[name, intValue]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
return C$.LEVELS.get$O(name);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getLevel$S', function (name) {
return C$.LEVELS.get$O(name);
}, 1);

Clazz.newMeth(C$, 'toLevel$S', function (sArg) {
return C$.toLevel$S$org_apache_logging_log4j_Level(sArg, C$.DEBUG);
}, 1);

Clazz.newMeth(C$, 'toLevel$S$org_apache_logging_log4j_Level', function (name, defaultLevel) {
if (name == null ) {
return defaultLevel;
}var level=C$.LEVELS.get$O(C$.toUpperCase$S(name));
return level == null  ? defaultLevel : level;
}, 1);

Clazz.newMeth(C$, 'toUpperCase$S', function (name) {
return name.toUpperCase$java_util_Locale($I$(4).ENGLISH);
}, 1);

Clazz.newMeth(C$, 'values$', function () {
var values=C$.LEVELS.values$();
return values.toArray$__TA(Clazz.array(C$, [values.size$()]));
}, 1);

Clazz.newMeth(C$, 'valueOf$S', function (name) {
$I$(5).requireNonNull$TT$S(name, "No level name given.");
var levelName=C$.toUpperCase$S(name);
var level=C$.LEVELS.get$O(levelName);
if (level != null ) {
return level;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown level constant [" + levelName + "]." ]);
}, 1);

Clazz.newMeth(C$, 'valueOf$Class$S', function (enumType, name) {
return $I$(6).valueOf$Class$S(enumType, name);
}, 1);

Clazz.newMeth(C$, 'readResolve$', function () {
return C$.valueOf$S(this.name);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:58 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
