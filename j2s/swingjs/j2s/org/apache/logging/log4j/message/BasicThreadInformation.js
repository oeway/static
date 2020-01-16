(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'org.apache.logging.log4j.util.StringBuilders']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BasicThreadInformation", null, null, 'org.apache.logging.log4j.message.ThreadInformation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isAlive','isDaemon'],'I',['priority'],'L',['id'],'S',['name','longName','threadGroupName'],'O',['state','Thread.State']]
,['I',['HASH_SHIFT','HASH_MULTIPLIER']]]

Clazz.newMeth(C$, 'c$$Thread', function (thread) {
;C$.$init$.apply(this);
this.id=thread.getId$();
this.name=thread.getName$();
this.longName=thread.toString();
this.state=thread.getState$();
this.priority=thread.getPriority$();
this.isAlive=thread.isAlive$();
this.isDaemon=thread.isDaemon$();
var group=thread.getThreadGroup$();
this.threadGroupName=group == null  ? null : group.getName$();
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
if (this.id != that.id) {
return false;
}if (this.name != null  ? !this.name.equals$O(that.name) : that.name != null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=((this.id ^ (this.id >>> 32))|0);
result=31 * result + (this.name != null  ? this.name.hashCode$() : 0);
return result;
});

Clazz.newMeth(C$, 'printThreadInfo$StringBuilder', function (sb) {
$I$(1).appendDqValue$StringBuilder$O(sb, this.name).append$C(" ");
if (this.isDaemon) {
sb.append$S("daemon ");
}sb.append$S("prio=").append$I(this.priority).append$S(" tid=").append$J(this.id).append$C(" ");
if (this.threadGroupName != null ) {
$I$(1).appendKeyDqValue$StringBuilder$S$O(sb, "group", this.threadGroupName);
}sb.append$C("\n");
sb.append$S("\tThread state: ").append$S(this.state.name$()).append$C("\n");
});

Clazz.newMeth(C$, 'printStack$StringBuilder$StackTraceElementA', function (sb, trace) {
for (var element, $element = 0, $$element = trace; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
sb.append$S("\tat ").append$O(element).append$C("\n");
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
