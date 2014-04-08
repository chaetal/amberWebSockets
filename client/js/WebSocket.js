define("chaetal_websocket/WebSocket", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('WebSocket');
smalltalk.packages["WebSocket"].transport = {"type":"amd","amdNamespace":"chaetal_websocket"};

smalltalk.addClass('WebSocketTests', smalltalk.TestCase, [], 'WebSocket');
smalltalk.addMethod(
smalltalk.method({
selector: "justATest",
category: 'tests',
fn: function (){
var self=this;
var socket;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Time(){return smalltalk.Time||(typeof Time=="undefined"?nil:Time)}
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$1,$8,$10,$9,$7,$6,$13,$12,$11;
socket=_st($NativeFunction())._constructor_value_("WebSocket","ws://localhost:1701/ws-echo");
_st(socket)._onopen_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=1;
$3="Connected".__comma(" @ ");
$ctx2.sendIdx[","]=2;
$5=_st($Time())._now();
$ctx2.sendIdx["now"]=1;
$4=_st($5)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=1;
$2=_st($3).__comma($4);
$ctx2.sendIdx[","]=1;
$1=_st($Transcript())._show_($2);
$ctx2.sendIdx["show:"]=1;
$1;
return _st(socket)._send_("Amber rules");
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
_st(socket)._onclose_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=2;
$8="Closed".__comma(" @ ");
$ctx2.sendIdx[","]=4;
$10=_st($Time())._now();
$ctx2.sendIdx["now"]=2;
$9=_st($10)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=2;
$7=_st($8).__comma($9);
$ctx2.sendIdx[","]=3;
$6=_st($Transcript())._show_($7);
$ctx2.sendIdx["show:"]=2;
return $6;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
_st(socket)._onmessage_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$13=_st("Messaged: ".__comma(_st(_st(event)._data())._printString())).__comma(" @ ");
$ctx2.sendIdx[","]=6;
$12=_st($13).__comma(_st(_st($Time())._now())._asDetailedTimeString());
$ctx2.sendIdx[","]=5;
$11=_st($Transcript())._show_($12);
$11;
return _st(socket)._close();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"justATest",{socket:socket},smalltalk.WebSocketTests)})},
args: [],
source: "justATest\x0a\x0a  | socket | \x0a  socket := NativeFunction constructor: 'WebSocket' value: 'ws://localhost:1701/ws-echo'.\x0a  \x0a  socket onopen: [:event |\x0a      Transcript cr; show: 'Connected', ' @ ' , Time now asDetailedTimeString. \x0a      socket send: 'Amber rules'].\x0a\x09  \x0a  socket onclose: [:event | \x0a      Transcript cr; show: 'Closed', ' @ ' , Time now asDetailedTimeString.].\x0a  \x0a  socket onmessage: [:event | \x0a      Transcript cr; show: 'Messaged: ', event data printString, ' @ ' , Time now asDetailedTimeString.\x0a\x09  socket close.].\x0a    ",
messageSends: ["constructor:value:", "onopen:", "cr", "show:", ",", "asDetailedTimeString", "now", "send:", "onclose:", "onmessage:", "printString", "data", "close"],
referencedClasses: ["NativeFunction", "Transcript", "Time"]
}),
smalltalk.WebSocketTests);

smalltalk.addMethod(
smalltalk.method({
selector: "testSuccessfulSession",
category: 'tests',
fn: function (){
var self=this;
var socket,connected,closed,messaged;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Time(){return smalltalk.Time||(typeof Time=="undefined"?nil:Time)}
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$1,$8,$10,$9,$7,$6,$13,$15,$14,$12,$11,$19,$18,$21,$20,$17,$16,$24,$26,$25,$23,$22,$29,$31,$30,$28,$27,$33,$32;
_st($Transcript())._cr();
$ctx1.sendIdx["cr"]=1;
_st($Transcript())._cr();
$ctx1.sendIdx["cr"]=2;
_st($Transcript())._cr();
$ctx1.sendIdx["cr"]=3;
_st($Transcript())._show_(" ---------------------------------------");
$ctx1.sendIdx["show:"]=1;
_st($Transcript())._cr();
$ctx1.sendIdx["cr"]=4;
$3="Started".__comma(" @ ");
$ctx1.sendIdx[","]=2;
$5=_st($Time())._now();
$ctx1.sendIdx["now"]=1;
$4=_st($5)._asDetailedTimeString();
$ctx1.sendIdx["asDetailedTimeString"]=1;
$2=_st($3).__comma($4);
$ctx1.sendIdx[","]=1;
$1=_st($Transcript())._show_($2);
$ctx1.sendIdx["show:"]=2;
connected=false;
closed=false;
messaged=false;
socket=_st($NativeFunction())._constructor_value_("WebSocket","ws://echo.websocket.org");
_st(socket)._onopen_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=5;
$8="Connected".__comma(" @ ");
$ctx2.sendIdx[","]=4;
$10=_st($Time())._now();
$ctx2.sendIdx["now"]=2;
$9=_st($10)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=2;
$7=_st($8).__comma($9);
$ctx2.sendIdx[","]=3;
$6=_st($Transcript())._show_($7);
$ctx2.sendIdx["show:"]=3;
$6;
connected=true;
connected;
return _st(socket)._send_("Amber rules");
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
_st(socket)._onclose_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=6;
$13="Closed".__comma(" @ ");
$ctx2.sendIdx[","]=6;
$15=_st($Time())._now();
$ctx2.sendIdx["now"]=3;
$14=_st($15)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=3;
$12=_st($13).__comma($14);
$ctx2.sendIdx[","]=5;
$11=_st($Transcript())._show_($12);
$ctx2.sendIdx["show:"]=4;
$11;
closed=true;
return closed;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
_st(socket)._onmessage_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=7;
$19="Messaged: ".__comma(_st(_st(event)._data())._printString());
$ctx2.sendIdx[","]=9;
$18=_st($19).__comma(" @ ");
$ctx2.sendIdx[","]=8;
$21=_st($Time())._now();
$ctx2.sendIdx["now"]=4;
$20=_st($21)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=4;
$17=_st($18).__comma($20);
$ctx2.sendIdx[","]=7;
$16=_st($Transcript())._show_($17);
$ctx2.sendIdx["show:"]=5;
$16;
_st(socket)._close();
messaged=true;
return messaged;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)})}));
self._timeout_((1000));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=8;
$24="Checking asserts".__comma(" @ ");
$ctx2.sendIdx[","]=11;
$26=_st($Time())._now();
$ctx2.sendIdx["now"]=5;
$25=_st($26)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=5;
$23=_st($24).__comma($25);
$ctx2.sendIdx[","]=10;
$22=_st($Transcript())._show_($23);
$ctx2.sendIdx["show:"]=6;
$22;
self._assert_description_(connected,"connected");
$ctx2.sendIdx["assert:description:"]=1;
self._assert_description_(messaged,"messaged");
$ctx2.sendIdx["assert:description:"]=2;
self._assert_description_(closed,"closed");
self._finished();
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=9;
$29="Finished".__comma(" @ ");
$ctx2.sendIdx[","]=13;
$31=_st($Time())._now();
$ctx2.sendIdx["now"]=6;
$30=_st($31)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=6;
$28=_st($29).__comma($30);
$ctx2.sendIdx[","]=12;
$27=_st($Transcript())._show_($28);
$ctx2.sendIdx["show:"]=7;
return $27;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})})))._valueWithTimeout_((700));
_st($Transcript())._cr();
$33=_st("Main thread finished".__comma(" @ ")).__comma(_st(_st($Time())._now())._asDetailedTimeString());
$ctx1.sendIdx[","]=14;
$32=_st($Transcript())._show_($33);
return self}, function($ctx1) {$ctx1.fill(self,"testSuccessfulSession",{socket:socket,connected:connected,closed:closed,messaged:messaged},smalltalk.WebSocketTests)})},
args: [],
source: "testSuccessfulSession\x0a  | socket connected closed messaged |\x0a  \x0a  Transcript \x0a      cr; cr; cr; \x0a\x09  show: ' ---------------------------------------'; cr;\x0a\x09  show: 'Started', ' @ ' , Time now asDetailedTimeString.\x0a  \x0a  connected := false.\x0a  closed := false.\x0a  messaged := false.\x0a  \x0a  socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.\x0a  \x0a  socket onopen: [:event |\x0a      Transcript cr; show: 'Connected', ' @ ' , Time now asDetailedTimeString. \x0a\x09  connected := true.\x0a      socket send: 'Amber rules'].\x0a\x09  \x0a  socket onclose: [:event | \x0a      Transcript cr; show: 'Closed', ' @ ' , Time now asDetailedTimeString.\x0a      closed := true].\x0a  \x0a  socket onmessage: [:event | \x0a      Transcript cr; show: 'Messaged: ', event data printString, ' @ ' , Time now asDetailedTimeString.\x0a\x09  socket close.\x0a      messaged := true].\x0a    \x0a  \x0a  self timeout: 1000.\x0a  (self async: [\x0a\x09  Transcript cr; show: 'Checking asserts', ' @ ', Time now asDetailedTimeString.\x0a\x09  self assert: connected description: 'connected'. \x0a\x09  self assert: messaged description: 'messaged'.\x0a\x09  self assert: closed description: 'closed'. \x0a\x09  self finished.\x0a\x09  Transcript cr; show: 'Finished', ' @ ', Time now asDetailedTimeString ]) valueWithTimeout: 700.\x0a  \x0a  Transcript cr; show: 'Main thread finished', ' @ ', Time now asDetailedTimeString.",
messageSends: ["cr", "show:", ",", "asDetailedTimeString", "now", "constructor:value:", "onopen:", "send:", "onclose:", "onmessage:", "printString", "data", "close", "timeout:", "valueWithTimeout:", "async:", "assert:description:", "finished"],
referencedClasses: ["Transcript", "Time", "NativeFunction"]
}),
smalltalk.WebSocketTests);


});
