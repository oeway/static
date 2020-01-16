(function(){var P$=Clazz.newPackage("org.scijava.download"),p$1={},I$=[[0,['org.scijava.download.DefaultDownloadService','.DefaultDownload'],'org.scijava.io.handle.DataHandles','org.scijava.download.MultiWriteHandle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDownloadService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'org.scijava.download.DownloadService');
C$.$classes$=[['DefaultDownload',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService','taskService','org.scijava.task.TaskService']]]

Clazz.newMeth(C$, 'download$org_scijava_io_location_Location$org_scijava_io_location_Location', function (source, destination) {
var task=this.taskService.createTask$S("Download");
return Clazz.new_($I$(1,1).c$$org_scijava_io_location_Location$org_scijava_io_location_Location$org_scijava_task_Task$Runnable, [this, null, source, destination, task, ((P$.DefaultDownloadService$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultDownloadService$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () {
try {
var $in=this.b$['org.scijava.download.DefaultDownloadService'].dataHandleService.create$TD(this.$finals$.source);
var out=this.b$['org.scijava.download.DefaultDownloadService'].dataHandleService.create$TD(this.$finals$.destination);
try {
this.$finals$.task.setStatusMessage$S("Downloading " + this.$finals$.source.getURI$());
$I$(2).copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$org_scijava_task_Task($in, out, this.$finals$.task);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
}finally{/*res*/
try{out&&out.close$&&out.close$()}catch(_){}
try{$in&&$in.close$&&$in.close$()}catch(_){}}
});
})()
), Clazz.new_(P$.DefaultDownloadService$lambda1.$init$, [this, {destination:destination,source:source,task:task}]))]);
});

Clazz.newMeth(C$, 'download$org_scijava_io_location_Location$org_scijava_io_location_Location$org_scijava_download_LocationCache', function (source, destination, cache) {
if (cache == null  || !cache.canCache$org_scijava_io_location_Location(source) ) {
return this.download$org_scijava_io_location_Location$org_scijava_io_location_Location(source, destination);
}var task=this.taskService.createTask$S("Download");
return Clazz.new_($I$(1,1).c$$org_scijava_io_location_Location$org_scijava_io_location_Location$org_scijava_task_Task$Runnable, [this, null, source, destination, task, ((P$.DefaultDownloadService$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultDownloadService$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () {
var cached=this.$finals$.cache.cachedLocation$org_scijava_io_location_Location(this.$finals$.source);
try {
var sourceHandle=this.b$['org.scijava.download.DefaultDownloadService'].dataHandleService.create$TD(this.$finals$.source);
var cachedHandle=this.b$['org.scijava.download.DefaultDownloadService'].dataHandleService.create$TD(cached);
var destHandle=this.b$['org.scijava.download.DefaultDownloadService'].dataHandleService.create$TD(this.$finals$.destination);
try {
if (p$1.isCachedHandleValid$org_scijava_io_location_Location$org_scijava_download_LocationCache$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle.apply(this.b$['org.scijava.download.DefaultDownloadService'], [this.$finals$.source, this.$finals$.cache, sourceHandle, cachedHandle])) {
this.$finals$.task.setStatusMessage$S("Retrieving " + this.$finals$.source.getURI$());
$I$(2).copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$org_scijava_task_Task(cachedHandle, destHandle, this.$finals$.task);
} else {
this.$finals$.task.setStatusMessage$S("Downloading + caching " + this.$finals$.source.getURI$());
$I$(2).copy$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle$org_scijava_task_Task(sourceHandle, Clazz.new_($I$(3,1).c$$org_scijava_io_handle_DataHandleA,[[cachedHandle, destHandle]]), this.$finals$.task);
}} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
}finally{/*res*/
try{destHandle&&destHandle.close$&&destHandle.close$()}catch(_){}
try{cachedHandle&&cachedHandle.close$&&cachedHandle.close$()}catch(_){}
try{sourceHandle&&sourceHandle.close$&&sourceHandle.close$()}catch(_){}}
});
})()
), Clazz.new_(P$.DefaultDownloadService$lambda2.$init$, [this, {cache:cache,destination:destination,source:source,task:task}]))]);
});

Clazz.newMeth(C$, 'isCachedHandleValid$org_scijava_io_location_Location$org_scijava_download_LocationCache$org_scijava_io_handle_DataHandle$org_scijava_io_handle_DataHandle', function (source, cache, sourceHandle, cachedHandle) {
if (!cachedHandle.exists$()) return false;
var sourceLen=sourceHandle.length$();
var cachedLen=cachedHandle.length$();
if (sourceLen >= 0 && cachedLen >= 0  && sourceLen != cachedLen ) {
return false;
}var sourceDate=sourceHandle.lastModified$();
var cachedDate=cachedHandle.lastModified$();
if (sourceDate != null  && cachedDate != null   && sourceDate.after$java_util_Date(cachedDate) ) {
return false;
}var sourceChecksum=sourceHandle.checksum$();
var cachedChecksum=cache.loadChecksum$org_scijava_io_location_Location(source);
if (sourceChecksum != null  && cachedChecksum != null   && !sourceChecksum.equals$O(cachedChecksum) ) {
return false;
}return true;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.download.DefaultDownloadService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']],
  [['taskService','org.scijava.task.TaskService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultDownloadService, "DefaultDownload", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.scijava.download.Download');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','org.scijava.io.location.Location','+destination','task','org.scijava.task.Task']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_location_Location$org_scijava_io_location_Location$org_scijava_task_Task$Runnable', function (source, destination, task, r) {
;C$.$init$.apply(this);
this.source=source;
this.destination=destination;
this.task=task;
task.run$Runnable(r);
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return this.source;
});

Clazz.newMeth(C$, 'destination$', function () {
return this.destination;
});

Clazz.newMeth(C$, 'task$', function () {
return this.task;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
