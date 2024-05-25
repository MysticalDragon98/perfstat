import { ChildProcessWithoutNullStreams } from "child_process";
import { createInterface} from "readline/promises";

export default class ShellCommandOutput {
    proc: ChildProcessWithoutNullStreams;

    constructor (proc: ChildProcessWithoutNullStreams) {
        this.proc = proc;
    }

    lines (type: "stdout" | "stderr" = "stdout") {
        const rl = createInterface({
            input: this.proc.stdout,
            output: type === "stdout" ? process.stdout : process.stderr,
            terminal: false,
        });

        return rl;
    }


}