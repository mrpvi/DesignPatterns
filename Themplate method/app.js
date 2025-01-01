// Abstract base class for data processors
class DataMiner {
    // Template method
    mine() {
        this.openFile();
        this.extractData();
        this.parseData();
        if (this.shouldAnalyze()) {
            this.analyze();
        }
        this.sendReport();
    }

    openFile() {
        console.log('Opening file...');
    }

    sendReport() {
        console.log('Sending report...');
    }

    // Abstract methods
    extractData() {
        throw new Error('Must implement extractData');
    }

    parseData() {
        throw new Error('Must implement parseData');
    }

    analyze() {
        throw new Error('Must implement analyze');
    }

    // Hook method
    shouldAnalyze() {
        return true;
    }
}

// Concrete implementation for PDF files
class PDFMiner extends DataMiner {
    extractData() {
        console.log('Extracting data from PDF...');
    }

    parseData() {
        console.log('Parsing PDF data...');
    }

    analyze() {
        console.log('Analyzing PDF content...');
    }
}

// Usage
console.log('Processing PDF:');
const pdfMiner = new PDFMiner();
pdfMiner.mine();