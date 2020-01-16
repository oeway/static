(function(){var P$=Clazz.newPackage("org.scijava.log"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentSkipListMap','java.util.ArrayList','java.util.Collections','java.util.StringJoiner']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogSource");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.children=Clazz.new_(1,{K:"String",V:"org.scijava.log.LogSource"},$I$(1,1));
this.formatted=null;
}, 1);

C$.$fields$=[['S',['formatted'],'O',['parent','org.scijava.log.LogSource','path','java.util.List','children','java.util.concurrent.ConcurrentMap','logLevel','Integer']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogSource$S', function (parent, name) {
;C$.$init$.apply(this);
this.parent=parent;
var parentPath=parent.path$();
var list=Clazz.new_(1,{E:"String"},$I$(2,1).c$$I,[parentPath.size$() + 1]);
list.addAll$java_util_Collection(parentPath);
list.add$TE(name);
this.path=$I$(3).unmodifiableList$java_util_List(list);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.parent=null;
this.path=$I$(3).emptyList$();
}, 1);

Clazz.newMeth(C$, 'newRoot$', function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'subSource$S', function (subPath) {
var result=this;
for (var name, $name = 0, $$name = subPath.split$S(":"); $name<$$name.length&&((name=($$name[$name])),1);$name++) result=p$1.child$S.apply(result, [name]);

return result;
});

Clazz.newMeth(C$, 'path$', function () {
return this.path;
});

Clazz.newMeth(C$, 'name$', function () {
if (this.path.isEmpty$()) return "";
return this.path.get$I(this.path.size$() - 1);
});

Clazz.newMeth(C$, 'toString', function () {
if (this.formatted != null ) return this.formatted;
var joiner=Clazz.new_($I$(4,1).c$$CharSequence,[":"]);
this.path.forEach$java_util_function_Consumer(((P$.LogSource$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LogSource$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (s) { return (this.$finals$.joiner.add$CharSequence(s));});
})()
), Clazz.new_(1,{T:"? super java.lang.String"},P$.LogSource$lambda1.$init$, [this, {joiner:joiner}])));
this.formatted=joiner.toString();
return this.formatted;
});

Clazz.newMeth(C$, 'isRoot$', function () {
return this.parent == null ;
});

Clazz.newMeth(C$, 'parent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'setLogLevel$I', function (logLevel) {
this.logLevel=new Integer(logLevel);
});

Clazz.newMeth(C$, 'hasLogLevel$', function () {
return this.logLevel != null ;
});

Clazz.newMeth(C$, 'logLevel$', function () {
if (!this.hasLogLevel$()) throw Clazz.new_(Clazz.load('IllegalStateException'));
return (this.logLevel).valueOf();
});

Clazz.newMeth(C$, 'child$S', function (name) {
if (name.isEmpty$()) return this;
var child=this.children.get$O(name);
if (child != null ) return child;
child=Clazz.new_(C$.c$$org_scijava_log_LogSource$S,[this, name]);
this.children.putIfAbsent$TK$TV(name, child);
return this.children.get$O(name);
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
