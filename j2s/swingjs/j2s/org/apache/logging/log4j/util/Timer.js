(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'ThreadLocal',['org.apache.logging.log4j.util.Timer','.Status'],'StringBuilder','java.text.DecimalFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Timer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.NANO_PER_SECOND=1000000000;
C$.NANO_PER_MINUTE=C$.NANO_PER_SECOND * 60;
C$.NANO_PER_HOUR=C$.NANO_PER_MINUTE * 60;
}

Clazz.newMeth(C$, '$init$', function () {
this.startTime=((P$.Timer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Timer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('ThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'initialValue$', function () {
return new Long(0);
});
})()
), Clazz.new_(1,{T:"Long"},$I$(1,1), [this, null],P$.Timer$1));
}, 1);

C$.$fields$=[['I',['iterations'],'L',['elapsedTime'],'S',['name'],'O',['status','org.apache.logging.log4j.util.Timer.Status','startTime','ThreadLocal']]
,['L',['serialVersionUID','NANO_PER_SECOND','NANO_PER_MINUTE','NANO_PER_HOUR']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$S$I.apply(this, [name, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (name, iterations) {
;C$.$init$.apply(this);
this.name=name;
this.status=$I$(2).Stopped;
this.iterations=(iterations > 0) ? iterations : 0;
}, 1);

Clazz.newMeth(C$, 'start$', function () {
this.startTime.set$TT(new Long(System.nanoTime$()));
this.elapsedTime=0;
this.status=$I$(2).Started;
});

Clazz.newMeth(C$, 'startOrResume$', function () {
if (this.status === $I$(2).Stopped ) {
this.start$();
} else {
this.resume$();
}});

Clazz.newMeth(C$, 'stop$', function () {
this.elapsedTime+=System.nanoTime$() - (this.startTime.get$()).valueOf();
this.startTime.set$TT(new Long(0));
this.status=$I$(2).Stopped;
return this.toString();
});

Clazz.newMeth(C$, 'pause$', function () {
this.elapsedTime+=System.nanoTime$() - (this.startTime.get$()).valueOf();
this.startTime.set$TT(new Long(0));
this.status=$I$(2).Paused;
});

Clazz.newMeth(C$, 'resume$', function () {
this.startTime.set$TT(new Long(System.nanoTime$()));
this.status=$I$(2).Started;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getElapsedTime$', function () {
return (this.elapsedTime/1000000|0);
});

Clazz.newMeth(C$, 'getElapsedNanoTime$', function () {
return this.elapsedTime;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.status;
});

Clazz.newMeth(C$, 'toString', function () {
var result=Clazz.new_($I$(3,1));
this.formatTo$StringBuilder(result);
return result.toString();
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
buffer.append$S("Timer ").append$S(this.name);
switch (this.status) {
case $I$(2).Started:
buffer.append$S(" started");
break;
case $I$(2).Paused:
buffer.append$S(" paused");
break;
case $I$(2).Stopped:
var nanoseconds=this.elapsedTime;
var hours=(nanoseconds/C$.NANO_PER_HOUR|0);
nanoseconds=nanoseconds % C$.NANO_PER_HOUR;
var minutes=(nanoseconds/C$.NANO_PER_MINUTE|0);
nanoseconds=nanoseconds % C$.NANO_PER_MINUTE;
var seconds=(nanoseconds/C$.NANO_PER_SECOND|0);
nanoseconds=nanoseconds % C$.NANO_PER_SECOND;
var elapsed="";
if (hours > 0) {
elapsed += hours + " hours ";
}if (minutes > 0 || hours > 0 ) {
elapsed += minutes + " minutes ";
}var numFormat;
numFormat=Clazz.new_($I$(4,1).c$$S,["#0"]);
elapsed += numFormat.format$J(seconds) + '.';
numFormat=Clazz.new_($I$(4,1).c$$S,["000000000"]);
elapsed += numFormat.format$J(nanoseconds) + " seconds";
buffer.append$S(" stopped. Elapsed time: ").append$S(elapsed);
if (this.iterations > 0) {
nanoseconds=(this.elapsedTime/this.iterations|0);
hours=(nanoseconds/C$.NANO_PER_HOUR|0);
nanoseconds=nanoseconds % C$.NANO_PER_HOUR;
minutes=(nanoseconds/C$.NANO_PER_MINUTE|0);
nanoseconds=nanoseconds % C$.NANO_PER_MINUTE;
seconds=(nanoseconds/C$.NANO_PER_SECOND|0);
nanoseconds=nanoseconds % C$.NANO_PER_SECOND;
elapsed="";
if (hours > 0) {
elapsed += hours + " hours ";
}if (minutes > 0 || hours > 0 ) {
elapsed += minutes + " minutes ";
}numFormat=Clazz.new_($I$(4,1).c$$S,["#0"]);
elapsed += numFormat.format$J(seconds) + '.';
numFormat=Clazz.new_($I$(4,1).c$$S,["000000000"]);
elapsed += numFormat.format$J(nanoseconds) + " seconds";
buffer.append$S(" Average per iteration: ").append$S(elapsed);
}break;
default:
buffer.append$C(" ").append$O(this.status);
break;
}
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (!(Clazz.instanceOf(o, "org.apache.logging.log4j.util.Timer"))) {
return false;
}var timer=o;
if (this.elapsedTime != timer.elapsedTime) {
return false;
}if (this.startTime !== timer.startTime ) {
return false;
}if (this.name != null  ? !this.name.equals$O(timer.name) : timer.name != null ) {
return false;
}if (this.status != null  ? !this.status.equals$O(timer.status) : timer.status != null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result;
result=(this.name != null  ? this.name.hashCode$() : 0);
result=29 * result + (this.status != null  ? this.status.hashCode$() : 0);
var time=(this.startTime.get$()).valueOf();
result=29 * result + ((time ^ (time >>> 32))|0);
result=29 * result + ((this.elapsedTime ^ (this.elapsedTime >>> 32))|0);
return result;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.Timer, "Status", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Started", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Stopped", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Paused", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
