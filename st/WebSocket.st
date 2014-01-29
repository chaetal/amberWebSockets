Smalltalk current createPackage: 'WebSocket'!
TestCase subclass: #WebSocketTests
	instanceVariableNames: ''
	package: 'WebSocket'!

!WebSocketTests methodsFor: 'tests'!

testSuccessfulConnection
  | socket |
  socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.
  socket onopen: [:event | Transcript cr; show: 'Connected!!!!!!'].
  Transcript cr; show: 'Main thread finished'.
! !

