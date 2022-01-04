class MP3 extends ElectronicDevice implements Player, Tester {

    public totalSongs: number;

    public volume: number;

    public play(): void {
        document.write("Playing...<br>");
    }

    public pause(): void {
        document.write("Pausing...<br>");
    }

    public stop(): void {
        document.write("Stopping...<br>");
    }

    public test(): void {
        document.write("Testing...<br>");
    }
}