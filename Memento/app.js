class historyManager {
    history = [];
    push(state) {
        this.history.push(state);
    }
    pop() {
        if (this.history.length === 0) {
            return null;
        }
        
        return this.history.pop();
    }
}