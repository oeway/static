(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),I$=[[0,'java.io.DataOutputStream','java.io.DataOutput']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataHandles");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['utfMethod','java.lang.reflect.Method']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeUTF$S$java_io_DataOutput', function (str, out) {
try {
return (C$.utfMethod$().invoke$O$OA(null, [str, out])).valueOf();
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalAccessException") || Clazz.exceptionOf(exc,"IllegalArgumentException") || Clazz.exceptionOf(exc,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Cannot invoke DataOutputStream.writeUTF(String, DataOutput)", exc]);
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'utfMethod$', function () {
if (C$.utfMethod == null ) C$.initUTFMethod$();
return C$.utfMethod;
}, 1);

Clazz.newMeth(C$, 'initUTFMethod$', function () {
if (C$.utfMethod != null ) return;
try {
var m=Clazz.getClass($I$(1)).getDeclaredMethod$S$ClassA("writeUTF", [Clazz.getClass(String), Clazz.getClass($I$(2),['write$I','write$BA','write$BA$I$I','writeBoolean$Z','writeByte$I','writeBytes$S','writeChar$I','writeChars$S','writeDouble$D','writeFloat$F','writeInt$I','writeLong$J','writeShort$I','writeUTF$S'])]);
m.setAccessible$Z(true);
C$.utfMethod=m;
} catch (exc) {
if (Clazz.exceptionOf(exc,"NoSuchMethodException") || Clazz.exceptionOf(exc,"SecurityException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["No usable DataOutputStream.writeUTF(String, DataOutput)", exc]);
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'readOnlyException$', function () {
return Clazz.new_(Clazz.load('java.io.IOException').c$$S,["This handle is read-only!"]);
}, 1);

Clazz.newMeth(C$, 'writeOnlyException$', function () {
return Clazz.new_(Clazz.load('java.io.IOException').c$$S,["This handle is write-only!"]);
}, 1);

Clazz.newMeth(C$, 'copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle', function ($in, out) {
return C$.copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$J$org_scijava_task_Task($in, out, 0, null);
}, 1);

Clazz.newMeth(C$, 'copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$org_scijava_task_Task', function ($in, out, task) {
return C$.copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$J$org_scijava_task_Task($in, out, 0, task);
}, 1);

Clazz.newMeth(C$, 'copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$I', function ($in, out, length) {
return C$.copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$J$org_scijava_task_Task($in, out, length, null);
}, 1);

Clazz.newMeth(C$, 'copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$J$org_scijava_task_Task', function ($in, out, length, task) {
return C$.copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$J$org_scijava_task_Task$I($in, out, length, task, 65536);
}, 1);

Clazz.newMeth(C$, 'copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$J$org_scijava_task_Task$I', function ($in, out, length, task, bufferSize) {
var inputlength;
{
var i=0;
try {
i=$in.length$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
i=0;
} else {
throw exc;
}
}
inputlength=i;
}if (task != null ) {
if (length > 0) task.setProgressMaximum$J(length);
 else if (inputlength > 0) task.setProgressMaximum$J(inputlength);
}var buffer=Clazz.array(Byte.TYPE, [bufferSize]);
var totalRead=0;
while (true){
if (task != null  && task.isCanceled$() ) break;
var r;
if (length > 0 && totalRead + bufferSize > length ) {
var remaining=((length - totalRead)|0);
r=$in.read$BA$I$I(buffer, 0, remaining);
} else {
r=$in.read$BA(buffer);
}if (r <= 0) break;
if (task != null  && task.isCanceled$() ) break;
out.write$BA$I$I(buffer, 0, r);
totalRead+=r;
if (task != null ) {
task.setProgressValue$J(task.getProgressValue$() + r);
}}
return totalRead;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
