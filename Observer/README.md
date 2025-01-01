## Problem to Solve:
Allow an object(subject) to notify other object (observers) about changes in its state without requiring them to be tightly coupled.

## Solution:
Define a subject that maintains a list of observers and notifies them of any state changes, typically by calling one of their methods.

## Use Cases:
- event handlers
- Real-time notifications
- UI updates