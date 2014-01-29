Smalltalk current createPackage: 'WebSocket'!
TestCase subclass: #WebSocketTests
	instanceVariableNames: ''
	package: 'WebSocket'!

!WebSocketTests methodsFor: 'tests'!

testSuccessfulConnection
  | socket connected |
  connected := false.
  socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.
  socket onopen: [:event | Transcript cr; show: 'Connected!!!!!!'. connected := true].
  self timeout: 1000.
  (self async: [
	  Transcript cr; show: 'Checking asserts', ' @ ', Time now asDetailedTimeString.
	  self assert: connected. 
	  self finished.
	  Transcript cr; show: 'Finished', ' @ ', Time now asDetailedTimeString ]) valueWithTimeout: 500.
  Transcript cr; show: 'Main thread finished', ' @ ', Time now asDetailedTimeString.
! !

