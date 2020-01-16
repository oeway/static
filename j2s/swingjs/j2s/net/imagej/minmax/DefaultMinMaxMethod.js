(function(){var P$=Clazz.newPackage("net.imagej.minmax"),p$1={},I$=[[0,'java.util.Vector',['net.imagej.minmax.DefaultMinMaxMethod','.Chunk'],'Thread','net.imglib2.view.Views','java.util.concurrent.atomic.AtomicInteger',['net.imagej.minmax.DefaultMinMaxMethod','.SimpleMultiThreading'],'net.imglib2.util.Util','Runtime']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultMinMaxMethod", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imagej.minmax.AbstractMinMaxMethod');
C$.$classes$=[['SimpleMultiThreading',10],['Chunk',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.MAX_UPDATES=100;
this.progress=null;
this.reported=-1;
this.errorMessage="";
this.lock= Clazz.new_();
}, 1);

C$.$fields$=[['I',['MAX_UPDATES','reported','numThreads'],'L',['imageSize','processingTime'],'S',['errorMessage'],'O',['threadService','org.scijava.thread.ThreadService','statusService','org.scijava.app.StatusService','progress','long[]','image','net.imglib2.IterableInterval','min','<T extends Type<T> & Comparable<T>>','+max','lock','java.lang.Object']]]

Clazz.newMeth(C$, ['initialize$net_imglib2_img_Img$TT$TT'], function (img, min, max) {
this.initialize$net_imglib2_img_Img$TT$TT(img, min, max);
});

Clazz.newMeth(C$, ['initialize$net_imglib2_IterableInterval$TT$TT'], function (interval, min, max) {
this.image=interval;
this.min=min;
this.max=max;
p$1.init.apply(this, []);
});

Clazz.newMeth(C$, ['initialize$net_imglib2_RandomAccessibleInterval$TT$TT'], function (interval, min, max) {
this.initialize$net_imglib2_RandomAccessibleInterval$TT$TT(interval, min, max);
});

Clazz.newMeth(C$, 'initialize$net_imglib2_img_Img', function (img) {
this.initialize$net_imglib2_IterableInterval(img);
});

Clazz.newMeth(C$, 'initialize$net_imglib2_IterableInterval', function (interval) {
this.image=interval;
this.min=this.image.firstElement$().createVariable$();
this.max=this.min.copy$();
p$1.init.apply(this, []);
});

Clazz.newMeth(C$, 'initialize$net_imglib2_RandomAccessibleInterval', function (interval) {
this.initialize$net_imglib2_IterableInterval($I$(4).iterable$net_imglib2_RandomAccessibleInterval(interval));
});

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'process$', function () {
var startTime=System.currentTimeMillis$();
this.imageSize=this.image.size$();
this.progress=Clazz.array(Long.TYPE, [this.numThreads]);
this.progress[0]=-1;
p$1.report$I.apply(this, [0]);
var ai=Clazz.new_($I$(5,1).c$$I,[0]);
var threads=$I$(6).newThreads$I(this.getNumThreads$());
var threadChunks=$I$(6).divideIntoChunks$J$I(this.imageSize, this.numThreads);
var minValues=Clazz.new_(1,{E:"Object"},$I$(1,1));
var maxValues=Clazz.new_(1,{E:"Object"},$I$(1,1));
for (var ithread=0; ithread < threads.length; ++ithread) {
minValues.add$TE(this.image.firstElement$().createVariable$());
maxValues.add$TE(this.image.firstElement$().createVariable$());
threads[ithread]=this.threadService.newThread$(((P$.DefaultMinMaxMethod$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultMinMaxMethod$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var myNumber=this.$finals$.ai.getAndIncrement$();
var myChunk=this.$finals$.threadChunks.get$I(myNumber);
this.b$['net.imagej.minmax.DefaultMinMaxMethod'].compute$I$J$J$TT$TT.apply(this.b$['net.imagej.minmax.DefaultMinMaxMethod'], [myNumber, myChunk.getStartPosition$(), myChunk.getLoopSize$(), this.$finals$.minValues.get$I(myNumber), this.$finals$.maxValues.get$I(myNumber)]);
});
})()
), Clazz.new_(P$.DefaultMinMaxMethod$1.$init$, [this, {minValues:minValues,maxValues:maxValues,ai:ai,threadChunks:threadChunks}])));
}
$I$(6).startAndJoin$ThreadA(threads);
this.min.set$TT(minValues.get$I(0));
this.max.set$TT(maxValues.get$I(0));
for (var i=0; i < threads.length; ++i) {
var value=minValues.get$I(i);
if ($I$(7).min$TT$TT(this.min, value) === value ) this.min.set$TT(value);
value=maxValues.get$I(i);
if ($I$(7).max$TT$TT(this.max, value) === value ) this.max.set$TT(value);
}
this.processingTime=System.currentTimeMillis$() - startTime;
if (this.statusService != null ) this.statusService.showStatus$S("Computing min/max complete.");
return true;
});

Clazz.newMeth(C$, ['compute$I$J$J$TT$TT'], function (threadNumber, startPos, loopSize, min, max) {
var cursor=this.image.cursor$();
cursor.fwd$();
min.set$TT(cursor.get$());
max.set$TT(cursor.get$());
cursor.reset$();
cursor.jumpFwd$J(startPos);
for (var j=0; j < loopSize; ++j) {
cursor.fwd$();
var value=cursor.get$();
if ($I$(7).min$TT$TT(min, value) === value ) min.set$TT(value);
if ($I$(7).max$TT$TT(max, value) === value ) max.set$TT(value);
p$1.report$I.apply(this, [threadNumber]);
}
});

Clazz.newMeth(C$, 'checkInput$', function () {
if (this.errorMessage.length$() > 0) {
return false;
} else if (this.image == null ) {
this.errorMessage="ScaleSpace: [Image<A> img] is null.";
return false;
} else return true;
});

Clazz.newMeth(C$, 'getProcessingTime$', function () {
return this.processingTime;
});

Clazz.newMeth(C$, 'setNumThreads$', function () {
this.numThreads=$I$(8).getRuntime$().availableProcessors$();
});

Clazz.newMeth(C$, 'setNumThreads$I', function (numThreads) {
this.numThreads=numThreads;
});

Clazz.newMeth(C$, 'getNumThreads$', function () {
return this.numThreads;
});

Clazz.newMeth(C$, 'getErrorMessage$', function () {
return this.errorMessage;
});

Clazz.newMeth(C$, 'init', function () {
this.setNumThreads$();
this.initialized=true;
}, p$1);

Clazz.newMeth(C$, 'report$I', function (threadNumber) {
if (this.statusService == null ) return;
this.progress[threadNumber]++;
var netProgress=0;
for (var i=0; i < this.progress.length; i++) {
netProgress+=this.progress[i];
}
var percentWork=(((netProgress / this.imageSize) * 100)|0);
if (percentWork > this.reported) {
{
if (percentWork > this.reported) {
this.reported++;
this.statusService.showStatus$I$I$S(percentWork, 100, "Computing min/max...");
}}}}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.minmax.DefaultMinMaxMethod',null,['org.scijava.plugin.Plugin']],['type="net.imagej.minmax.MinMaxMethod.class" ']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMinMaxMethod, "SimpleMultiThreading", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'divideIntoChunks$J$I', function (imageSize, numThreads) {
var threadChunkSize=(imageSize/numThreads|0);
var threadChunkMod=imageSize % numThreads;
var chunks=Clazz.new_(1,{E:"net.imagej.minmax.DefaultMinMaxMethod.Chunk"},$I$(1,1));
for (var threadID=0; threadID < numThreads; ++threadID) {
var startPosition=threadID * threadChunkSize;
var loopSize;
if (threadID == numThreads - 1) loopSize=threadChunkSize + threadChunkMod;
 else loopSize=threadChunkSize;
chunks.add$TE(Clazz.new_($I$(2,1).c$$J$J,[startPosition, loopSize]));
}
return chunks;
}, 1);

Clazz.newMeth(C$, 'newThreads$I', function (numThreads) {
return Clazz.array($I$(3), [numThreads]);
}, 1);

Clazz.newMeth(C$, 'startAndJoin$ThreadA', function (threads) {
if (1 == threads.length) {
threads[0].run$();
return;
}for (var ithread=0; ithread < threads.length; ++ithread) {
threads[ithread].setPriority$I(5);
threads[ithread].start$();
}
try {
for (var ithread=0; ithread < threads.length; ++ithread) threads[ithread].join$();

} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ie]);
} else {
throw ie;
}
}
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMinMaxMethod, "Chunk", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['startPosition','loopSize']]]

Clazz.newMeth(C$, 'c$$J$J', function (startPosition, loopSize) {
;C$.$init$.apply(this);
this.startPosition=startPosition;
this.loopSize=loopSize;
}, 1);

Clazz.newMeth(C$, 'getStartPosition$', function () {
return this.startPosition;
});

Clazz.newMeth(C$, 'getLoopSize$', function () {
return this.loopSize;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
